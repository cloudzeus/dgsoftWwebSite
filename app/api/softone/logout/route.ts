import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { SOFTONE_CLIENT_ID_COOKIE, getSoftoneCookieOptions } from "@/lib/softone-cookie"

/**
 * POST /api/softone/logout
 * Clear SoftOne session cookie.
 */
export async function POST() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const res = NextResponse.json({ success: true })
  res.cookies.set(SOFTONE_CLIENT_ID_COOKIE, "", getSoftoneCookieOptions(true))
  return res
}
