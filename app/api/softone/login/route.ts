import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { softOneLoginAndAuthenticate } from "@/lib/softone"
import { SOFTONE_CLIENT_ID_COOKIE, getSoftoneCookieOptions } from "@/lib/softone-cookie"

/**
 * POST /api/softone/login
 * Login and authenticate with SoftOne, store clientID in session cookie.
 */
export async function POST() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const result = await softOneLoginAndAuthenticate()
  if (!("clientID" in result)) {
    return NextResponse.json(
      {
        success: false,
        message: (result as { message?: string }).message ?? "SoftOne login failed",
        code: (result as { code?: number }).code,
      },
      { status: 400 }
    )
  }

  const res = NextResponse.json({ success: true, message: "Authenticated" })
  res.cookies.set(SOFTONE_CLIENT_ID_COOKIE, result.clientID, getSoftoneCookieOptions(false))
  return res
}
