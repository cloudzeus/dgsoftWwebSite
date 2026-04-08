/**
 * Single source of truth: `process.env.DATABASE_URL` (same value for Next.js, `prisma db push`,
 * and maintenance scripts). Pooling params are optional Prisma MySQL extensions on that same URL.
 *
 * MySQL `max_user_connections` is **per MySQL user** (e.g. `root`). Next.js runs **many processes**
 * during `next build` (one worker per CPU) and may run multiple Node processes in production; each
 * process has its **own** Prisma pool. Default pool **5 × N processes** exhausts small limits fast.
 * Default here is **1** connection per process; raise `DATABASE_CONNECTION_LIMIT` only on a
 * dedicated DB with a high `max_user_connections`.
 */

function appendConnectionLimitIfMissing(raw: string): string {
  if (/[?&]connection_limit=/i.test(raw)) return raw
  const limit = process.env.DATABASE_CONNECTION_LIMIT ?? "1"
  const sep = raw.includes("?") ? "&" : "?"
  return `${raw}${sep}connection_limit=${limit}`
}

/**
 * URL passed to PrismaClient — matches `schema.prisma` datasource when `DATABASE_URL` already
 * includes `connection_limit`, otherwise appends it (shared MySQL connection caps).
 */
export function getPrismaDatabaseUrl(): string | undefined {
  const raw = process.env.DATABASE_URL
  if (!raw) return undefined
  return appendConnectionLimitIfMissing(raw)
}

/**
 * `mysql2` rejects Prisma-specific query params (`connection_limit`, `pool_timeout`). Strip them
 * while keeping the same host, user, password, database, and SSL options.
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
