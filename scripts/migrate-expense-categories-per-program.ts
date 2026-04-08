/**
 * One-time migration: scope ExpenseCategory rows per EuProgram and point
 * EuProgramExpenseLimit.expenseCategoryId at ExpenseCategory.id (was OPSKE code).
 *
 * Run from project root (loads .env):
 *   npx tsx scripts/migrate-expense-categories-per-program.ts
 *
 * Then: npx prisma db push
 */
import "dotenv/config"
import mysql from "mysql2/promise"
import { randomUUID } from "crypto"
import { getMysql2DatabaseUrl } from "../lib/database-url"

async function getFkName(
  conn: mysql.Connection,
  table: string,
  column: string,
  refTable: string
): Promise<string | null> {
  const [rows] = await conn.query<{ CONSTRAINT_NAME: string }[]>(
    `SELECT CONSTRAINT_NAME FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
     WHERE TABLE_SCHEMA = DATABASE()
       AND TABLE_NAME = ?
       AND COLUMN_NAME = ?
       AND REFERENCED_TABLE_NAME = ?`,
    [table, column, refTable]
  )
  return rows[0]?.CONSTRAINT_NAME ?? null
}

function newId(): string {
  const id = randomUUID().replace(/-/g, "").slice(0, 24)
  return `m${id}`
}

async function main() {
  const conn = await mysql.createConnection(getMysql2DatabaseUrl())

  try {
    const [refCol] = await conn.query<{ REFERENCED_COLUMN_NAME: string }[]>(
      `SELECT REFERENCED_COLUMN_NAME FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
       WHERE TABLE_SCHEMA = DATABASE()
         AND TABLE_NAME = 'EuProgramExpenseLimit'
         AND COLUMN_NAME = 'expenseCategoryId'
         AND REFERENCED_TABLE_NAME = 'ExpenseCategory'`,
    )
    if (refCol[0]?.REFERENCED_COLUMN_NAME === "id") {
      console.log("Already migrated (FK targets ExpenseCategory.id). Nothing to do.")
      return
    }

    try {
      await conn.query(`ALTER TABLE ExpenseCategory ADD COLUMN euProgramId VARCHAR(191) NULL`)
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e)
      if (!msg.includes("Duplicate column name")) throw e
    }

    try {
      await conn.query(
        `ALTER TABLE EuProgramExpenseLimit ADD COLUMN expenseCategoryId_new VARCHAR(191) NULL`,
      )
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e)
      if (!msg.includes("Duplicate column name")) throw e
    }

    const fk = await getFkName(conn, "EuProgramExpenseLimit", "expenseCategoryId", "ExpenseCategory")
    if (fk) {
      await conn.query(`ALTER TABLE EuProgramExpenseLimit DROP FOREIGN KEY \`${fk}\``)
    }

    const [uniqRows] = await conn.query<{ Key_name: string }[]>(
      `SHOW INDEX FROM ExpenseCategory WHERE Column_name = 'code' AND Non_unique = 0`,
    )
    for (const u of uniqRows) {
      if (u.Key_name !== "PRIMARY") {
        await conn.query(`ALTER TABLE ExpenseCategory DROP INDEX \`${u.Key_name}\``)
      }
    }

    type LimitRow = {
      id: string
      euProgramId: string
      expenseCategoryId: string
    }
    const [limits] = await conn.query<LimitRow[]>(
      `SELECT id, euProgramId, expenseCategoryId FROM EuProgramExpenseLimit`,
    )

    const pairKeys = new Set<string>()
    const pairs: { pid: string; code: string }[] = []
    for (const l of limits) {
      const k = `${l.euProgramId}\0${l.expenseCategoryId}`
      if (!pairKeys.has(k)) {
        pairKeys.add(k)
        pairs.push({ pid: l.euProgramId, code: l.expenseCategoryId })
      }
    }

    const pairToCatId = new Map<string, string>()

    for (const { pid, code } of pairs) {
      const [existingRows] = await conn.query<{ id: string; euProgramId: string | null }[]>(
        `SELECT id, euProgramId FROM ExpenseCategory WHERE code = ?`,
        [code],
      )
      const existing = existingRows ?? []

      let catId: string | null = null
      const forProgram = existing.find((r) => r.euProgramId === pid)
      if (forProgram) {
        catId = forProgram.id
      } else {
        const unassigned = existing.find((r) => r.euProgramId == null)
        if (unassigned && existing.length === 1) {
          await conn.query(`UPDATE ExpenseCategory SET euProgramId = ? WHERE id = ?`, [
            pid,
            unassigned.id,
          ])
          catId = unassigned.id
        } else {
          const [t] = await conn.query<{ descriptionEL: string; subCategoryEL: string | null }[]>(
            `SELECT descriptionEL, subCategoryEL FROM ExpenseCategory WHERE code = ? LIMIT 1`,
            [code],
          )
          const nid = newId()
          await conn.query(
            `INSERT INTO ExpenseCategory (id, euProgramId, code, descriptionEL, subCategoryEL, createdAt, updatedAt)
             VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
            [nid, pid, code, t[0]?.descriptionEL ?? code, t[0]?.subCategoryEL ?? null],
          )
          catId = nid
        }
      }

      if (!catId) throw new Error(`Failed to resolve category for program ${pid} / code ${code}`)
      pairToCatId.set(`${pid}\0${code}`, catId)
    }

    for (const l of limits) {
      const catId = pairToCatId.get(`${l.euProgramId}\0${l.expenseCategoryId}`)
      if (!catId) throw new Error(`Missing map for limit ${l.id}`)
      await conn.query(`UPDATE EuProgramExpenseLimit SET expenseCategoryId_new = ? WHERE id = ?`, [
        catId,
        l.id,
      ])
    }

    const [programs] = await conn.query<{ id: string }[]>(
      `SELECT id FROM EuProgram ORDER BY createdAt ASC LIMIT 1`,
    )
    const fallbackPid = programs[0]?.id
    if (fallbackPid) {
      await conn.query(`UPDATE ExpenseCategory SET euProgramId = ? WHERE euProgramId IS NULL`, [
        fallbackPid,
      ])
    } else {
      await conn.query(`DELETE FROM ExpenseCategory WHERE euProgramId IS NULL`)
    }

    if (limits.length > 0) {
      const [nullNew] = await conn.query<{ c: number }[]>(
        `SELECT COUNT(*) AS c FROM EuProgramExpenseLimit WHERE expenseCategoryId_new IS NULL`,
      )
      if (nullNew[0]?.c) {
        throw new Error("Some expense limits were not mapped to a category id")
      }
    }

    const [uniqLimitIdx] = await conn.query<{ Key_name: string }[]>(
      `SHOW INDEX FROM EuProgramExpenseLimit WHERE Column_name = 'expenseCategoryId' AND Non_unique = 0`,
    )
    for (const u of uniqLimitIdx) {
      if (u.Key_name !== "PRIMARY") {
        await conn.query(`ALTER TABLE EuProgramExpenseLimit DROP INDEX \`${u.Key_name}\``)
      }
    }

    await conn.query(`
      DELETE el FROM EuProgramExpenseLimit el
      INNER JOIN EuProgramExpenseLimit el2
        ON el.euProgramId = el2.euProgramId
       AND el.expenseCategoryId = el2.expenseCategoryId
       AND el.id > el2.id
    `)

    await conn.query(`ALTER TABLE EuProgramExpenseLimit DROP COLUMN expenseCategoryId`)
    await conn.query(
      `ALTER TABLE EuProgramExpenseLimit CHANGE COLUMN expenseCategoryId_new expenseCategoryId VARCHAR(191) NOT NULL`,
    )

    await conn.query(`ALTER TABLE ExpenseCategory MODIFY COLUMN euProgramId VARCHAR(191) NOT NULL`)

    await conn.query(
      `ALTER TABLE ExpenseCategory ADD UNIQUE KEY ExpenseCategory_euProgramId_code_key (euProgramId, code)`,
    )

    await conn.query(
      `ALTER TABLE EuProgramExpenseLimit ADD CONSTRAINT EuProgramExpenseLimit_expenseCategoryId_fkey
       FOREIGN KEY (expenseCategoryId) REFERENCES ExpenseCategory(id) ON DELETE CASCADE ON UPDATE CASCADE`,
    )

    console.log("Migration finished. Run: npx prisma db push")
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await conn.end()
  }
}

main()
