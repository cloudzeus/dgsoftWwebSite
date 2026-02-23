import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session || session.user?.role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await req.formData();
        const file = formData.get("file") as File | null;
        if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

        const name = file.name.toLowerCase();
        console.log(`[upload-kads] File: ${name}, size: ${file.size} bytes`);

        const buffer = Buffer.from(await file.arrayBuffer());
        let rows: { dotcode: string; nameEL: string }[] = [];

        // ── Parse ──────────────────────────────────────────────────────────────
        if (name.endsWith(".csv")) {
            const text = buffer.toString("utf-8");
            for (const [i, line] of text.split(/\r?\n/).entries()) {
                const trimmed = line.trim();
                if (!trimmed) continue;
                const cols = parseCSVLine(trimmed);
                if (cols.length < 2) continue;
                const dotcode = cols[0].trim();
                const nameEL = cols[1].trim();
                if (!dotcode || !nameEL) continue;
                if (i === 0 && ["code", "kad", "κωδικός", "κωδικοσ"].includes(dotcode.toLowerCase())) continue;
                rows.push({ dotcode, nameEL });
            }
        } else if (name.endsWith(".xlsx") || name.endsWith(".xls")) {
            // SheetJS handles both legacy .xls (BIFF8) and modern .xlsx
            const XLSX = await import("xlsx");
            const workbook = XLSX.read(buffer, { type: "buffer" });
            const sheetName = workbook.SheetNames[0];
            if (!sheetName) {
                return NextResponse.json({ error: "No sheets found in the workbook." }, { status: 400 });
            }
            const sheet = workbook.Sheets[sheetName];
            // Convert to array of arrays (raw, no header)
            const aoa: unknown[][] = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });

            for (let i = 0; i < aoa.length; i++) {
                const row = aoa[i];
                if (!row || row.length < 2) continue;
                const dotcode = String(row[0] ?? "").trim();
                const nameEL = String(row[1] ?? "").trim();
                if (!dotcode || !nameEL) continue;
                // Skip header row if detected
                if (i === 0 && ["code", "kad", "κωδικός", "κωδικοσ"].includes(dotcode.toLowerCase())) continue;
                rows.push({ dotcode, nameEL });
            }
            console.log(`[upload-kads] SheetJS parsed ${rows.length} rows from ${name}`);
        } else {
            return NextResponse.json({
                error: "Unsupported format. Upload .xlsx, .xls or .csv — Column A = KAD code (e.g. 62.01), Column B = Greek description."
            }, { status: 400 });
        }

        if (rows.length === 0) {
            return NextResponse.json({
                error: "No data found. Ensure Column A = KAD code with dots (e.g. 62.01) and Column B = Greek description."
            }, { status: 400 });
        }

        console.log(`[upload-kads] Inserting ${rows.length} KADs into DB...`);

        // ── Insert into DB ─────────────────────────────────────────────────────
        let count = 0;
        const errors: string[] = [];
        for (const item of rows) {
            try {
                const rawCode = item.dotcode.replace(/\./g, "").trim();
                const dotcode = item.dotcode.trim();
                if (!rawCode) continue;
                await prisma.kad.upsert({
                    where: { code: rawCode },
                    update: { dotcode, nameEL: item.nameEL.trim() },
                    create: { code: rawCode, dotcode, nameEL: item.nameEL.trim() }
                });
                count++;
            } catch (err: any) {
                errors.push(`${item.dotcode}: ${err.message}`);
            }
        }

        console.log(`[upload-kads] Done. Inserted: ${count}, Errors: ${errors.length}`);

        return NextResponse.json({
            success: true,
            count,
            total: rows.length,
            errors: errors.slice(0, 5)
        });

    } catch (error: any) {
        console.error("[upload-kads] Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

function parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let inQuote = false, current = "";
    for (const ch of line) {
        if (ch === '"') inQuote = !inQuote;
        else if (ch === "," && !inQuote) { result.push(current); current = ""; }
        else current += ch;
    }
    result.push(current);
    return result;
}
