/**
 * SoftOne session cookie config. Used by API routes and server actions.
 */

export const SOFTONE_CLIENT_ID_COOKIE = "softone_client_id"

export function getSoftoneCookieOptions(clear = false) {
  const isProd = process.env.NODE_ENV === "production"
  return {
    path: "/" as const,
    httpOnly: true,
    secure: isProd,
    sameSite: "lax" as const,
    ...(clear ? { maxAge: 0 } : {}),
    // When not clear: no maxAge = session cookie (until browser closes)
  }
}
