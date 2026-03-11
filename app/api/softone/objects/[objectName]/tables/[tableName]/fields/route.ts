import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { auth } from "@/auth"
import { getSoftOneTableFields } from "@/lib/softone"
import { SOFTONE_CLIENT_ID_COOKIE } from "@/lib/softone-cookie"

export const dynamic = "force-dynamic"

/**
 * GET /api/softone/objects/[objectName]/tables/[tableName]/fields?dbname=xxx
 * Returns fields for the table. Uses softone_client_id cookie. Optional dbname for fallback.
 */
export async function GET(
  req: Request,
  { params }: { params: Promise<{ objectName: string; tableName: string }> }
) {
  const session = await auth()
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { objectName, tableName } = await params
  if (!objectName || !tableName) {
    return NextResponse.json({ error: "Missing objectName or tableName" }, { status: 400 })
  }

  const cookieStore = await cookies()
  const clientId = cookieStore.get(SOFTONE_CLIENT_ID_COOKIE)?.value
  if (!clientId) {
    return NextResponse.json({ error: "Not authenticated to SoftOne. Log in first." }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const dbname = searchParams.get("dbname") || undefined

  let result = await getSoftOneTableFields(clientId, objectName, tableName)
  if (!("fields" in result) && dbname && dbname !== tableName) {
    result = await getSoftOneTableFields(clientId, objectName, dbname)
  }

  if (!("fields" in result)) {
    const message = (result as { message?: string }).message ?? "Failed to load fields"
    return NextResponse.json({ error: message }, { status: 400 })
  }

  return NextResponse.json({ fields: result.fields })
}
