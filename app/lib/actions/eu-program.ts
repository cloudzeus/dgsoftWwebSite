"use server";

import prisma from "@/lib/prisma"
import { auth } from "@/auth"

export async function getEuPrograms() {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        return await prisma.euProgram.findMany({
            orderBy: { createdAt: "desc" },
            include: {
                kads: {
                    include: { kad: true }
                },
                periferies: {
                    include: { periferia: true }
                }
            }
        })
    } catch (error: any) {
        console.error("GET EU PROGRAMS Error:", error)
        throw new Error(error.message)
    }
}

export async function createEuProgram(data: any) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        const { kads, ...programData } = data;

        return await prisma.euProgram.create({
            data: {
                ...programData,
                active: programData.active ?? true,
                minimumCompanyYears: programData.minimumCompanyYears ? parseInt(programData.minimumCompanyYears, 10) : null,
                minimumEmployees: programData.minimumEmployees ? parseInt(programData.minimumEmployees, 10) : null,
                maxBudget: programData.maxBudget ? parseFloat(programData.maxBudget) : null,
                announcedDate: programData.announcedDate ? new Date(programData.announcedDate) : null,
                submissionDate: programData.submissionDate ? new Date(programData.submissionDate) : null,
                endDate: programData.endDate ? new Date(programData.endDate) : null,
            },
            include: {
                kads: { include: { kad: true } },
                periferies: { include: { periferia: true } }
            }
        });
    } catch (error: any) {
        console.error("CREATE EU PROGRAM Error:", error)
        throw new Error(error.message)
    }
}

export async function updateEuProgram(id: string, data: any) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        const { kads, ...programData } = data;

        return await prisma.euProgram.update({
            where: { id },
            data: {
                ...programData,
                active: programData.active ?? true,
                minimumCompanyYears: programData.minimumCompanyYears ? parseInt(programData.minimumCompanyYears, 10) : null,
                minimumEmployees: programData.minimumEmployees ? parseInt(programData.minimumEmployees, 10) : null,
                maxBudget: programData.maxBudget ? parseFloat(programData.maxBudget) : null,
                announcedDate: programData.announcedDate ? new Date(programData.announcedDate) : null,
                submissionDate: programData.submissionDate ? new Date(programData.submissionDate) : null,
                endDate: programData.endDate ? new Date(programData.endDate) : null,
            },
            include: {
                kads: { include: { kad: true } },
                periferies: { include: { periferia: true } }
            }
        });
    } catch (error: any) {
        console.error("UPDATE EU PROGRAM Error:", error)
        throw new Error(error.message)
    }
}

export async function deleteEuProgram(id: string) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        return await prisma.euProgram.delete({ where: { id } })
    } catch (error: any) {
        console.error("DELETE EU PROGRAM Error:", error)
        throw new Error(error.message)
    }
}

export async function getAllKadsList() {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        return await prisma.kad.findMany({
            orderBy: { code: 'asc' }
        });
    } catch (error: any) {
        console.error("GET KADS Error:", error)
        throw new Error(error.message)
    }
}

export async function linkKadToProgram(programId: string, kadId: string) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")

    try {
        return await prisma.kadEuProgram.create({
            data: { euProgramId: programId, kadId: kadId }
        })
    } catch (e: any) {
        if (e.code !== 'P2002') throw new Error(e.message); // ignore duplicate entry
    }
}

export async function unlinkKadFromProgram(programId: string, kadId: string) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")

    try {
        return await prisma.kadEuProgram.deleteMany({
            where: { euProgramId: programId, kadId: kadId }
        })
    } catch (e: any) {
        throw new Error(e.message)
    }
}

// Bulk OCR processing action
export async function getAllPeriferies() {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized access. Admin only.")

    try {
        return await prisma.periferia.findMany({
            where: { parentCode: null },
            include: {
                children: {
                    orderBy: { nameEL: 'asc' },
                    include: {
                        children: {
                            orderBy: { nameEL: 'asc' },
                            include: {
                                children: {
                                    orderBy: { nameEL: 'asc' }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: { nameEL: 'asc' }
        });
    } catch (error: any) {
        console.error("GET PERIFERIES Error:", error)
        throw new Error(error.message)
    }
}

export async function linkPeriferiaToProgram(programId: string, periferiaId: string) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")

    try {
        return await prisma.euProgramPeriferia.create({
            data: { euProgramId: programId, periferiaId: periferiaId }
        })
    } catch (e: any) {
        if (e.code !== 'P2002') throw new Error(e.message);
    }
}

export async function unlinkPeriferiaFromProgram(programId: string, periferiaId: string) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")

    try {
        return await prisma.euProgramPeriferia.deleteMany({
            where: { euProgramId: programId, periferiaId: periferiaId }
        })
    } catch (e: any) {
        throw new Error(e.message)
    }
}

// Bulk OCR processing action
export async function processOcrAndCreateKads(programId: string, extractedKads: { code: string, desc: string }[]) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")

    try {
        // Iterate over extracted KADs, upsert them if they don't exist, and link them to the program
        let count = 0;
        for (const k of extractedKads) {
            if (!k.code) continue;

            // Upsert Kad
            const kad = await prisma.kad.upsert({
                where: { code: k.code.trim() },
                update: {}, // Don't override existing description if we have it
                create: { code: k.code.trim(), nameEL: k.desc.trim() }
            });

            // Link Kad to Program (ignore if exists)
            try {
                await prisma.kadEuProgram.create({
                    data: { euProgramId: programId, kadId: kad.id }
                });
                count++;
            } catch (err: any) {
                if (err.code !== 'P2002') throw err;
            }
        }
        return { success: true, count }
    } catch (e: any) {
        console.error("PROCESS OCR Error:", e);
        throw new Error(e.message);
    }
}

export async function createPeriferia(data: any) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")
    try {
        return await prisma.periferia.create({ data })
    } catch (error: any) { throw new Error(error.message) }
}

export async function updatePeriferia(id: string, data: any) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")
    try {
        return await prisma.periferia.update({ where: { id }, data })
    } catch (error: any) { throw new Error(error.message) }
}

export async function deletePeriferia(id: string) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")
    try {
        return await prisma.periferia.delete({ where: { id } })
    } catch (error: any) { throw new Error(error.message) }
}

export async function importKallikratis() {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")
    try {
        const url = "https://raw.githubusercontent.com/eellak/Greek-perfectures-municipalities-settlements-name-directory/master/dioikhtikh_diairesh_kallikraths_elstat.csv";
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch Kallikratis dataset.");
        const csvText = await res.text();

        const lines = csvText.split('\n');
        const validRecords: { code: string; nameEL: string; level: number; parentCode: string | null }[] = [];

        /**
         * CSV structure (after 6 header rows):
         * col0 = serial, col1 = level (1-8), col2 = code1 (always the Periferia code e.g. "111"),
         * col3 = Kallikratis sub-code (e.g. "01" for level4, "0101" for level5), col4 = name
         *
         * We capture levels 3, 4, 5:
         *  Level 3 (Periferia):          code = code1.trim()             parentCode = null
         *  Level 4 (Perifereiaki Enotita): code = code1.trim()+code2.trim()  parentCode = code1.trim()
         *  Level 5 (Dimos):              code = code1.trim()+code2.trim()  parentCode = code1.trim()+code2.trim().slice(0,-2)
         */
        const parseCSVLine = (line: string): string[] => {
            const result: string[] = [];
            let inQuote = false;
            let current = "";
            for (let c = 0; c < line.length; c++) {
                const ch = line[c];
                if (ch === '"') {
                    inQuote = !inQuote;
                } else if (ch === ',' && !inQuote) {
                    result.push(current.trim());
                    current = "";
                } else {
                    current += ch;
                }
            }
            result.push(current.trim());
            return result;
        };

        for (let i = 6; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            // Use the correct quote-aware parser
            const cols = parseCSVLine(line);
            if (cols.length < 5) continue;

            const level = parseInt(cols[1], 10);
            if (isNaN(level)) continue;
            if (![3, 4, 5].includes(level)) continue;

            const cp1 = cols[2].trim();
            const cp2 = cols[3].trim();
            // Strip Greek grammatical suffix after comma inside the name e.g. "Κομοτηνή,η"
            const nameEL = cols[4].replace(/,\s*\S+$/, "").trim();

            if (!cp1 || !nameEL) continue;

            let code: string;
            let parentCode: string | null;

            if (level === 3) {
                code = cp1;
                parentCode = null;
            } else if (level === 4) {
                code = cp1 + cp2;           // e.g. "111"+"01" = "11101"
                parentCode = cp1;           // parent = Periferia
            } else {
                code = cp1 + cp2;           // e.g. "111"+"0101" = "1110101"
                parentCode = cp1 + cp2.slice(0, -2); // strip last 2 digits → Ενότητα
            }

            validRecords.push({ code, nameEL, level, parentCode });
        }

        // Insert level 3 first (roots), then 4, then 5 to respect FK constraints
        let count = 0;
        for (const targetLevel of [3, 4, 5]) {
            const batch = validRecords.filter(r => r.level === targetLevel);
            for (const rec of batch) {
                try {
                    await prisma.periferia.upsert({
                        where: { code: rec.code },
                        update: { nameEL: rec.nameEL, level: rec.level, parentCode: rec.parentCode },
                        create: { code: rec.code, nameEL: rec.nameEL, level: rec.level, parentCode: rec.parentCode }
                    });
                    count++;
                } catch (_err) {
                    // Skip FK violations or duplicates silently
                }
            }
        }

        return { success: true, count };

    } catch (e: any) {
        throw new Error(e.message);
    }
}

export async function translateAllPeriferies() {
    const session = await auth();
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized");

    try {
        // Fetch all Periferies that lack English names
        const untranslated = await prisma.periferia.findMany({
            where: {
                OR: [
                    { nameEN: null },
                    { nameEN: "" }
                ]
            },
            take: 50 // Limit batch size to avoid timeouts
        });

        if (untranslated.length === 0) return { success: true, count: 0, message: "No untranslated regions found." };

        const isDeepseek = !!process.env.DEEPSEEK_API_KEY;
        const apiUrl = isDeepseek
            ? (process.env.DEEPSEEK_API_URL || "https://api.deepseek.com/v1/chat/completions")
            : "https://api.openai.com/v1/chat/completions";
        const apiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;
        const model = isDeepseek ? "deepseek-chat" : "gpt-4o-mini";

        if (!apiKey) throw new Error("No Translation API Key Available");

        let translatedCount = 0;
        for (const region of untranslated) {
            const prompt = `Translate the following Greek region/municipality name to English. Reply ONLY with the English translation. No quotes, no intro.\n\nText: ${region.nameEL}`;

            try {
                const res = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`
                    },
                    body: JSON.stringify({
                        model,
                        messages: [{ role: "user", content: prompt }],
                        temperature: 0.1
                    })
                });

                if (res.ok) {
                    const data = await res.json();
                    const translatedText = data.choices[0]?.message?.content?.trim();
                    if (translatedText) {
                        await prisma.periferia.update({
                            where: { id: region.id },
                            data: { nameEN: translatedText }
                        });
                        translatedCount++;
                    }
                }
            } catch (err) {
                console.error("Translation fail for", region.nameEL, err);
            }
        }

        return { success: true, count: translatedCount, remaining: untranslated.length - translatedCount };
    } catch (e: any) {
        throw new Error(e.message);
    }
}

export async function createKad(data: any) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")
    try {
        return await prisma.kad.create({ data })
    } catch (error: any) { throw new Error(error.message) }
}

export async function updateKad(id: string, data: any) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")
    try {
        return await prisma.kad.update({ where: { id }, data })
    } catch (error: any) { throw new Error(error.message) }
}

export async function deleteKad(id: string) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")
    try {
        return await prisma.kad.delete({ where: { id } })
    } catch (error: any) { throw new Error(error.message) }
}

export async function bulkCreateKads(data: { dotcode: string, nameEL: string }[]) {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") throw new Error("Unauthorized")
    try {
        let count = 0;
        for (const item of data) {
            if (!item.dotcode) continue;
            // The unformatted code is exactly the dotcode without the dots
            const rawCode = item.dotcode.replace(/\./g, "").trim();
            const dotCodeSaved = item.dotcode.trim();

            await prisma.kad.upsert({
                where: { code: rawCode },
                update: { dotcode: dotCodeSaved, nameEL: item.nameEL.trim() },
                create: { code: rawCode, dotcode: dotCodeSaved, nameEL: item.nameEL.trim() }
            });
            count++;
        }
        return { success: true, count }
    } catch (error: any) {
        console.error("BULK KAD ERROR", error);
        throw new Error(error.message);
    }
}
