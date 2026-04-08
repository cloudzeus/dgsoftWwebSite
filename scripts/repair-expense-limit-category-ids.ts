/**
 * Fix EuProgramExpenseLimit.expenseCategoryId when it still stores OPSKE codes
 * instead of ExpenseCategory.id — required before `prisma db push` can add the FK.
 *
 * Run: npx tsx scripts/repair-expense-limit-category-ids.ts
 * Then: npm run db:push
 */
import "dotenv/config"
import mysql from "mysql2/promise"
import { getMysql2DatabaseUrl } from "../lib/database-url"

async function getFkName(
  conn: mysql.Connection,
  table: string,
  column: string,
  refTable: string
): Promise<string | null> {
  const [rows] = await conn.query(
    `SELECT CONSTRAINT_NAME FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
     WHERE TABLE_SCHEMA = DATABASE()
       AND TABLE_NAME = ?
       AND COLUMN_NAME = ?
       AND REFERENCED_TABLE_NAME = ?`,
    [table, column, refTable]
  )
  const r = rows as { CONSTRAINT_NAME: string }[]
  return r[0]?.CONSTRAINT_NAME ?? null
}

async function main() {
  const conn = await mysql.createConnection(getMysql2DatabaseUrl())

  try {
    const fk = await getFkName(conn, "EuProgramExpenseLimit", "expenseCategoryId", "ExpenseCategory")
    if (fk) {
      console.log(`Dropping FK ${fk} so rows can be updated…`)
      await conn.query(`ALTER TABLE EuProgramExpenseLimit DROP FOREIGN KEY \`${fk}\``)
    }

    // Map code → category id for this program (current schema: ExpenseCategory is per program).
    const [upd] = await conn.query(
      `UPDATE EuProgramExpenseLimit el
       INNER JOIN ExpenseCategory ec
         ON ec.euProgramId = el.euProgramId
        AND ec.code = el.expenseCategoryId
       LEFT JOIN ExpenseCategory ok ON ok.id = el.expenseCategoryId
       SET el.expenseCategoryId = ec.id
       WHERE ok.id IS NULL`,
    )
    const affected = (upd as mysql.ResultSetHeader).affectedRows ?? 0
    console.log(`Updated ${affected} limit row(s) via (euProgramId + code) match.`)

    // Legacy: categories keyed only by code (no euProgramId column or NULL) — match code only.
    const [updLegacy] = await conn.query(
      `UPDATE EuProgramExpenseLimit el
       INNER JOIN ExpenseCategory ec ON ec.code = el.expenseCategoryId
       LEFT JOIN ExpenseCategory ok ON ok.id = el.expenseCategoryId
       SET el.expenseCategoryId = ec.id
       WHERE ok.id IS NULL
         AND (ec.euProgramId IS NULL OR ec.euProgramId = el.euProgramId)`,
    )
    const affected2 = (updLegacy as mysql.ResultSetHeader).affectedRows ?? 0
    if (affected2) console.log(`Updated ${affected2} row(s) via legacy code-only match.`)

    const [bad] = await conn.query<{ id: string; euProgramId: string; expenseCategoryId: string }[]>(
      `SELECT el.id, el.euProgramId, el.expenseCategoryId
       FROM EuProgramExpenseLimit el
       LEFT JOIN ExpenseCategory ec ON ec.id = el.expenseCategoryId
       WHERE ec.id IS NULL`,
    )
    if (bad.length > 0) {
      console.error(
        "Still have orphan expense limits (no ExpenseCategory.id). Fix manually or seed categories:",
        bad.slice(0, 10),
        bad.length > 10 ? `… +${bad.length - 10} more` : "",
      )
      process.exit(1)
    }

    // Remove duplicate (euProgramId, expenseCategoryId) rows if any (keep smallest id).
    await conn.query(`
      DELETE el FROM EuProgramExpenseLimit el
      INNER JOIN EuProgramExpenseLimit el2
        ON el.euProgramId = el2.euProgramId
       AND el.expenseCategoryId = el2.expenseCategoryId
       AND el.id > el2.id
    `)

    console.log("OK. Run: npm run db:push")
  } finally {
    await conn.end()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
