import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { chatCompletionJson, isAiConfigured, OpenRouterError, GREEK_TERMINOLOGY_RULE } from "@/lib/openrouter";

function normalizeParsed(parsed: any) {
    if (Array.isArray(parsed.features)) {
        parsed.features = parsed.features.map((f: any, i: number) => ({
            nameEL: f.nameEL || "",
            nameEN: f.nameEN || null,
            descriptionEL: f.descriptionEL ?? null,
            descriptionEN: f.descriptionEN ?? null,
            order: i,
        }));
    }
    if (!Array.isArray(parsed.benefitsEL)) parsed.benefitsEL = [];
    if (!Array.isArray(parsed.benefitsEN)) parsed.benefitsEN = [];
    return parsed;
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { nameEL, categoryName, vendorName } = await req.json();

        if (!nameEL) {
            return NextResponse.json({ error: "Missing service name (Greek)" }, { status: 400 });
        }

        if (!isAiConfigured()) {
            return NextResponse.json({
                error: "Set OPENROUTER_API_KEY in .env or .env.local and restart the dev server.",
            }, { status: 500 });
        }

        const context = [
            categoryName ? `Category: ${categoryName}` : null,
            vendorName ? `Vendor/Brand: ${vendorName}` : null,
        ].filter(Boolean).join("\n");

        const prompt = `You are an expert B2B copywriter for software and cloud services. Generate complete, professional service page content for a Greek software company.

${GREEK_TERMINOLOGY_RULE}

Service name (Greek): "${nameEL}"
${context ? `Context:\n${context}` : ""}

Generate content in the same style as this example (structure and tone):

Example style:
- Title: "Soft1 Cloud CRM" with a short tagline in Greek and English.
- Short description: 2-3 sentences explaining the value proposition (customer relationships, single system, cloud access).
- Full description: Several paragraphs covering what the product does in practice, with clear sections.
- "Τι κάνει στην πράξη" / "What it does in practice": Bullet points (8-12) with concrete features, each as a short title + optional detail.
- "Τι κερδίζει η επιχείρηση" / "What the business gains": Bullet points (2-4) summarizing benefits.

Output strict JSON only, no markdown. Use this exact structure:

{
  "nameEN": "English service title",
  "shortDescriptionEL": "Greek short description (2-3 sentences).",
  "shortDescriptionEN": "English short description (2-3 sentences).",
  "descriptionEL": "Full Greek description. Multiple paragraphs if needed. Rich, professional copy.",
  "descriptionEN": "Full English description. Same structure as Greek.",
  "features": [
    { "nameEL": "Short feature title in Greek", "nameEN": "Short feature title in English", "descriptionEL": "Optional detail in Greek or null", "descriptionEN": "Optional detail in English or null" },
    { "nameEL": "...", "nameEN": "...", "descriptionEL": null, "descriptionEN": null }
  ],
  "benefitsEL": ["Benefit bullet 1 in Greek", "Benefit bullet 2 in Greek"],
  "benefitsEN": ["Benefit bullet 1 in English", "Benefit bullet 2 in English"]
}

Rules:
- features: 8-12 items, each with nameEL, nameEN, and optionally descriptionEL/descriptionEN
- benefitsEL and benefitsEN: 2-5 bullet strings each
- Be specific and professional; avoid generic marketing fluff
- Output ONLY valid raw JSON`;

        let parsed;
        try {
            parsed = normalizeParsed(
                await chatCompletionJson<any>({
                    task: "copywriting",
                    messages: [{ role: "user", content: prompt }],
                    maxTokens: 4000,
                })
            );
        } catch (err) {
            console.error("Service generate failed:", err);
            const msg = err instanceof OpenRouterError ? err.message : "Service generation failed";
            return NextResponse.json({ error: msg }, { status: 502 });
        }

        return NextResponse.json(parsed);
    } catch (error: any) {
        console.error("Service generate error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
