import { NextResponse } from "next/server";
import { auth } from "@/auth";

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

async function callOpenAI(prompt: string): Promise<any> {
    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) throw new Error("OPENAI not configured");
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.6,
            response_format: { type: "json_object" },
        }),
    });
    if (!res.ok) throw new Error(`OpenAI: ${res.statusText}`);
    const data = await res.json();
    const content = data.choices[0]?.message?.content?.trim();
    return normalizeParsed(JSON.parse(content));
}

async function callDeepSeek(prompt: string): Promise<any> {
    const apiKey = process.env.DEEPSEEK_API_KEY?.trim();
    const apiUrl = process.env.DEEPSEEK_API_URL || "https://api.deepseek.com/v1/chat/completions";
    if (!apiKey) throw new Error("DeepSeek not configured");
    const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.6,
            response_format: { type: "json_object" },
        }),
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`DeepSeek: ${res.statusText} - ${err.slice(0, 150)}`);
    }
    const data = await res.json();
    const content = data.choices[0]?.message?.content?.trim();
    return normalizeParsed(JSON.parse(content));
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { nameEL, categoryName, vendorName } = await req.json();

        if (!nameEL) {
            return NextResponse.json({ error: "Missing service name (Greek)" }, { status: 400 });
        }

        const openAiKey = process.env.OPENAI_API_KEY?.trim();
        const deepseekKey = process.env.DEEPSEEK_API_KEY?.trim();
        if (!openAiKey && !deepseekKey) {
            return NextResponse.json({
                error: "Set OPENAI_API_KEY or DEEPSEEK_API_KEY in .env or .env.local and restart the dev server.",
            }, { status: 500 });
        }

        const context = [
            categoryName ? `Category: ${categoryName}` : null,
            vendorName ? `Vendor/Brand: ${vendorName}` : null,
        ].filter(Boolean).join("\n");

        const prompt = `You are an expert B2B copywriter for software and cloud services. Generate complete, professional service page content for a Greek software company.

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
            parsed = await callOpenAI(prompt);
        } catch (openAiError) {
            if (deepseekKey) {
                try {
                    parsed = await callDeepSeek(prompt);
                } catch (deepseekError) {
                    console.error("Service generate: OpenAI failed", openAiError);
                    console.error("Service generate: DeepSeek fallback failed", deepseekError);
                    return NextResponse.json({
                        error: "OpenAI failed and DeepSeek fallback failed. Check your API keys.",
                    }, { status: 502 });
                }
            } else {
                const msg = openAiError instanceof Error ? openAiError.message : "OpenAI failed";
                return NextResponse.json({ error: msg }, { status: 502 });
            }
        }

        return NextResponse.json(parsed);
    } catch (error: any) {
        console.error("Service generate error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
