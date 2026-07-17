import { NextResponse } from "next/server"

export const runtime = "nodejs"

const TICKETING_URL = process.env.TICKETING_URL
const TICKETING_PROJECT_CODE = process.env.TICKETING_PROJECT_CODE
const TICKETING_API_KEY = process.env.TICKETING_API_KEY

// Πρέπει να ταιριάζουν με τα όρια του fluent-pm (ο server κάνει και magic-bytes έλεγχο)
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"]
const MAX_FILES = 3
const MAX_FILE_BYTES = 5 * 1024 * 1024
const MAX_TOTAL_BYTES = 15 * 1024 * 1024

type TextFields = {
  name: string
  email: string
  subject: string
  body: string
  website: string
}

function validateFields(f: TextFields): NextResponse | null {
  if (f.website) {
    // Honeypot: silently accept spam submissions without forwarding
    return NextResponse.json({ ok: true })
  }
  if (!f.name.trim() || !f.email.trim() || !f.subject.trim() || !f.body.trim()) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, subject, body" },
      { status: 422 }
    )
  }
  if (f.subject.length > 200 || f.body.length > 5000) {
    return NextResponse.json(
      { error: "subject must be ≤200 and body ≤5000 characters" },
      { status: 422 }
    )
  }
  return null
}

export async function POST(request: Request) {
  if (!TICKETING_URL || !TICKETING_PROJECT_CODE || !TICKETING_API_KEY) {
    return NextResponse.json(
      { error: "Ticketing service is not configured" },
      { status: 503 }
    )
  }

  const authHeaders = {
    "X-Ticket-Project": TICKETING_PROJECT_CODE,
    "X-Ticket-Key": TICKETING_API_KEY,
  }
  const originUrl =
    request.headers.get("referer") ?? process.env.NEXT_PUBLIC_SITE_URL ?? ""

  const contentType = request.headers.get("content-type") ?? ""
  let upstream: Response

  try {
    if (contentType.includes("multipart/form-data")) {
      let fd: FormData
      try {
        fd = await request.formData()
      } catch {
        return NextResponse.json({ error: "Invalid form body" }, { status: 400 })
      }
      const text = (v: FormDataEntryValue | null) =>
        typeof v === "string" ? v : ""
      const fields: TextFields = {
        name: text(fd.get("name")),
        email: text(fd.get("email")),
        subject: text(fd.get("subject")),
        body: text(fd.get("body")),
        website: text(fd.get("website")),
      }
      const invalid = validateFields(fields)
      if (invalid) return invalid

      const files = fd
        .getAll("files")
        .filter((f): f is File => f instanceof File && f.size > 0)
      if (files.length > MAX_FILES) {
        return NextResponse.json(
          { error: `Έως ${MAX_FILES} αρχεία ανά αίτημα.` },
          { status: 422 }
        )
      }
      let total = 0
      for (const f of files) {
        total += f.size
        if (f.size > MAX_FILE_BYTES) {
          return NextResponse.json(
            { error: "Κάθε αρχείο έως 5MB." },
            { status: 413 }
          )
        }
        if (!ALLOWED_TYPES.includes(f.type)) {
          return NextResponse.json(
            { error: "Επιτρέπονται μόνο εικόνες JPG, PNG ή WebP." },
            { status: 422 }
          )
        }
      }
      if (total > MAX_TOTAL_BYTES) {
        return NextResponse.json(
          { error: "Το συνολικό μέγεθος αρχείων υπερβαίνει τα 15MB." },
          { status: 413 }
        )
      }

      const out = new FormData()
      out.set("reporterName", fields.name)
      out.set("reporterEmail", fields.email)
      out.set("subject", fields.subject)
      out.set("body", fields.body)
      out.set("originUrl", originUrl)
      for (const f of files) out.append("files", f, f.name)

      // Χωρίς Content-Type header — το fetch ορίζει το multipart boundary
      upstream = await fetch(`${TICKETING_URL}/api/tickets`, {
        method: "POST",
        headers: authHeaders,
        body: out,
        cache: "no-store",
      })
    } else {
      let payload: Partial<TextFields>
      try {
        payload = await request.json()
      } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
      }
      const fields: TextFields = {
        name: payload.name ?? "",
        email: payload.email ?? "",
        subject: payload.subject ?? "",
        body: payload.body ?? "",
        website: payload.website ?? "",
      }
      const invalid = validateFields(fields)
      if (invalid) return invalid

      upstream = await fetch(`${TICKETING_URL}/api/tickets`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeaders },
        body: JSON.stringify({
          reporterName: fields.name,
          reporterEmail: fields.email,
          subject: fields.subject,
          body: fields.body,
          originUrl,
        }),
        cache: "no-store",
      })
    }

    const data = await upstream.json().catch(() => null)
    return NextResponse.json(data ?? { error: "Invalid upstream response" }, {
      status: upstream.status,
    })
  } catch {
    return NextResponse.json(
      { error: "Ticketing service unreachable" },
      { status: 502 }
    )
  }
}
