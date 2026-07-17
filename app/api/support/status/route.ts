import { NextResponse } from "next/server"

export const runtime = "nodejs"

const TICKETING_URL = process.env.TICKETING_URL

/**
 * Proxy για την κατάσταση ticket — αποφεύγει CORS προς το fluent-pm.
 * Το token είναι το publicToken του ticket (δεν χρειάζεται API key).
 */
export async function GET(request: Request) {
  if (!TICKETING_URL) {
    return NextResponse.json(
      { error: "Ticketing service is not configured" },
      { status: 503 }
    )
  }
  const url = new URL(request.url)
  const code = url.searchParams.get("code")
  const token = url.searchParams.get("token")
  if (!code || !token) {
    return NextResponse.json({ error: "missing_params" }, { status: 422 })
  }

  try {
    const res = await fetch(
      `${TICKETING_URL}/api/tickets/${encodeURIComponent(code)}?token=${encodeURIComponent(token)}`,
      { cache: "no-store" }
    )
    const data = await res.json().catch(() => null)
    return NextResponse.json(data ?? { error: "Invalid upstream response" }, {
      status: res.status,
    })
  } catch {
    return NextResponse.json(
      { error: "Ticketing service unreachable" },
      { status: 502 }
    )
  }
}
