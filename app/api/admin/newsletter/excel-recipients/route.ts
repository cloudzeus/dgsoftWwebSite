import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"
import * as XLSX from "xlsx"

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session || session.user?.role !== "ADMIN")
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  try {
    const formData = await req.formData()
    const file = formData.get("file") as File | null
    if (!file) return NextResponse.json({ error: "Δεν βρέθηκε αρχείο" }, { status: 400 })

    const buffer = Buffer.from(await file.arrayBuffer())
    const workbook = XLSX.read(buffer, { type: "buffer" })
    const sheet = workbook.Sheets[workbook.SheetNames[0]]
    const rows: Record<string, unknown>[] = XLSX.utils.sheet_to_json(sheet, { defval: "" })

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const emails = new Set<string>()
    const errors: string[] = []

    for (const row of rows) {
      for (const val of Object.values(row)) {
        const s = String(val).trim().toLowerCase()
        if (emailRegex.test(s)) emails.add(s)
      }
    }

    if (emails.size === 0)
      errors.push("Δεν βρέθηκαν έγκυρες διευθύνσεις email στο αρχείο.")

    return NextResponse.json({ emails: Array.from(emails), count: emails.size, errors })
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? "Σφάλμα ανάλυσης αρχείου" }, { status: 500 })
  }
}
