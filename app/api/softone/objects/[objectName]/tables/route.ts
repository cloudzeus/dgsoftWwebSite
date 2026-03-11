import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { auth } from "@/auth"
import { getSoftOneObjectTables } from "@/lib/softone"
import { SOFTONE_CLIENT_ID_COOKIE } from "@/lib/softone-cookie"

export const dynamic = "force-dynamic"

/**
 * GET /api/softone/objects/[objectName]/tables
 * Returns tables for the object. Uses softone_client_id cookie (from login).
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ objectName: string }> }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { objectName } = await params
  if (!objectName) return NextResponse.json({ error: "Missing objectName" }, { status: 400 })

  const cookieStore = await cookies()
  const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
  if (!clientId) {
    console.log("[SoftOne API tables] Not authenticated – no clientId cookie")
    return NextResponse.json({ error: "Not authenticated to SoftOne. Log in first." }, { status: 401 })
  }

  console.log("[SoftOne API tables] objectName =", objectName, "→ calling getObjectTables")
  const result = await getSoftOneObjectTables(clientId, objectName)
  if (!("tables" in result)) {
    const message = (result as { message?: string }).message ?? "Failed to load tables"
    return NextResponse.json({ error: message }, { status: 400 })
  }

  return NextResponse.json({ tables: result.tables })
}
