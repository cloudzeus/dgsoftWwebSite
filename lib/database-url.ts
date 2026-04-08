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
  const limit       = process.env.DATABASE_CONNECTION_LIMIT ?? "1"
  const poolTimeout = process.env.DATABASE_POOL_TIMEOUT      ?? "30"  // seconds to wait for a free connection
  const connectTimeout = process.env.DATABASE_CONNECT_TIMEOUT ?? "10"  // seconds for TCP handshake
  try {
    const u = new URL(raw)
    u.searchParams.set("connection_limit",  limit)
    u.searchParams.set("pool_timeout",      poolTimeout)
    u.searchParams.set("connect_timeout",   connectTimeout)
    return u.href
  } catch {
    let s = raw
      .replace(/([?&])connection_limit=[^&]*/gi,  "$1")
      .replace(/([?&])pool_timeout=[^&]*/gi,       "$1")
      .replace(/([?&])connect_timeout=[^&]*/gi,    "$1")
    s = s.replace(/\?&/g, "?").replace(/&&/g, "&").replace(/[?&]$/, "")
    const sep = s.includes("?") ? "&" : "?"
    return (
      `${s}${sep}` +
      `connection_limit=${encodeURIComponent(limit)}&` +
      `pool_timeout=${encodeURIComponent(poolTimeout)}&` +
      `connect_timeout=${encodeURIComponent(connectTimeout)}`
    )
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

  const PRISMA_PARAMS = ["connection_limit", "pool_timeout", "connect_timeout"]
  try {
    const u = new URL(raw)
    for (const p of PRISMA_PARAMS) u.searchParams.delete(p)
    return u.toString()
  } catch {
    let s = raw
    for (const p of PRISMA_PARAMS) s = s.replace(new RegExp(`([?&])${p}=[^&]*`, "gi"), "$1")
    return s.replace(/\?&/g, "?").replace(/&&/g, "&").replace(/[?&]$/, "")
  }
}
