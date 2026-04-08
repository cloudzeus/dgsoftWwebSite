/**
 * Single source of truth: `process.env.DATABASE_URL`. Prisma MySQL pool size is controlled via the
 * `connection_limit` query param (see Prisma docs).
 *
 * We **always set** `connection_limit` on the URL (default `1`) so hosting panels that inject
 * `connection_limit=5` or higher cannot exhaust MySQL `max_user_connections` for user `root`.
 *
 * - Set `DATABASE_CONNECTION_LIMIT=0` to **stop modifying** the URL (you manage the full string).
 * - Raise `DATABASE_CONNECTION_LIMIT` only if MySQL allows it for this user.
 *
 * MySQL limit is server-side: `SHOW VARIABLES LIKE 'max_user_connections';` — raising it requires
 * DBA access (`SET GLOBAL max_user_connections = …` or per-user `ALTER USER … WITH MAX_USER_CONNECTIONS …`).
 */

function applyPrismaConnectionLimit(raw: string): string {
  if (process.env.DATABASE_CONNECTION_LIMIT === "0") {
    return raw
  }
  const limit = process.env.DATABASE_CONNECTION_LIMIT ?? "1"
  try {
    const u = new URL(raw)
    u.searchParams.set("connection_limit", limit)
    return u.href
  } catch {
    let s = raw.replace(/([?&])connection_limit=[^&]*/gi, "$1")
    s = s.replace(/\?&/, "?").replace(/&&/g, "&")
    if (s.endsWith("?") || s.endsWith("&")) s = s.slice(0, -1)
    const sep = s.includes("?") ? "&" : "?"
    return `${s}${sep}connection_limit=${encodeURIComponent(limit)}`
  }
}

/**
 * URL passed to PrismaClient — `connection_limit` is forced unless `DATABASE_CONNECTION_LIMIT=0`.
 */
export function getPrismaDatabaseUrl(): string | undefined {
  const raw = process.env.DATABASE_URL
  if (!raw) return undefined
  return applyPrismaConnectionLimit(raw)
}

/**
 * `mysql2` rejects Prisma-specific query params — strip them for raw mysql2 connections.
 */
export function getMysql2DatabaseUrl(): string {
  const raw = process.env.DATABASE_URL
  if (!raw) throw new Error("DATABASE_URL is not set")

  try {
    const u = new URL(raw)
    u.searchParams.delete("connection_limit")
    u.searchParams.delete("pool_timeout")
    return u.toString()
  } catch {
    return raw
      .replace(/([?&])connection_limit=[^&]*/gi, "$1")
      .replace(/([?&])pool_timeout=[^&]*/gi, "$1")
      .replace(/\?&/, "?")
      .replace(/&&/g, "&")
      .replace(/[?&]$/, "")
  }
}
