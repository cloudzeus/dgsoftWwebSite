import { NextResponse } from "next/server"

export const runtime = "nodejs"

const TICKETING_URL = process.env.TICKETING_URL
const TICKETING_PROJECT_CODE = process.env.TICKETING_PROJECT_CODE
const TICKETING_API_KEY = process.env.TICKETING_API_KEY

export async function POST(request: Request) {
  if (!TICKETING_URL || !TICKETING_PROJECT_CODE || !TICKETING_API_KEY) {
    return NextResponse.json(
      { error: "Ticketing service is not configured" },
      { status: 503 }
    )
  }

  let payload: {
    name?: string
    email?: string
    subject?: string
    body?: string
    website?: string
  }
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  // Honeypot: silently accept spam submissions without forwarding
  if (payload.website) {
    return NextResponse.json({ ok: true })
  }

  const { name, email, subject, body } = payload
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !body?.trim()) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, subject, body" },
      { status: 422 }
    )
  }
  if (subject.length > 200 || body.length > 5000) {
    return NextResponse.json(
      { error: "subject must be ≤200 and body ≤5000 characters" },
      { status: 422 }
    )
  }

  try {
    const res = await fetch(`${TICKETING_URL}/api/tickets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Ticket-Project": TICKETING_PROJECT_CODE,
        "X-Ticket-Key": TICKETING_API_KEY,
      },
      body: JSON.stringify({
        reporterName: name,
        reporterEmail: email,
        subject,
        body,
        originUrl:
          request.headers.get("referer") ??
          process.env.NEXT_PUBLIC_SITE_URL ??
          "",
      }),
      cache: "no-store",
    })

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
