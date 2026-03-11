import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { auth } from "@/auth"
import { softOnePing, softOneValidateSession } from "@/lib/softone"
import { SOFTONE_CLIENT_ID_COOKIE } from "@/lib/softone-cookie"

export const dynamic = "force-dynamic"

/**
 * GET /api/softone/status
 * Returns connection (ping) and authentication status (cookie + validate).
 */
export async function GET() {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const cookieStore = await cookies()
  const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value

  const [pingResult, validation] = await Promise.all([
    softOnePing(),
    clientId ? softOneValidateSession(clientId) : Promise.resolve({ valid: false, message: "No session" }),
  ])

  return NextResponse.json({
    connection: {
      ok: pingResult.ok,
      message: pingResult.message,
    },
    authentication: {
      hasToken: !!clientId,
      valid: validation.valid,
      message: validation.message,
    },
  })
}
