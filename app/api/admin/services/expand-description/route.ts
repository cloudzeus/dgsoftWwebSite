import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { chatCompletionJson, isAiConfigured, OpenRouterError, GREEK_TERMINOLOGY_RULE } from "@/lib/openrouter";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { shortDescriptionEL, shortDescriptionEN } = await req.json();

        if (!shortDescriptionEL?.trim()) {
            return NextResponse.json({ error: "Missing short description (Greek)" }, { status: 400 });
        }

        if (!isAiConfigured()) {
            return NextResponse.json({
                error: "Set OPENROUTER_API_KEY in .env or .env.local and restart the dev server.",
            }, { status: 500 });
        }

        const prompt = `You are an expert B2B copywriter for software and cloud services. Expand the following SHORT service description into a FULL, rich description suitable for a product page.

${GREEK_TERMINOLOGY_RULE}

SHORT DESCRIPTION (Greek):
"""
${shortDescriptionEL.trim()}
"""

${shortDescriptionEN?.trim() ? `SHORT DESCRIPTION (English) for context:\n"""\n${shortDescriptionEN.trim()}\n"""\n\n` : ""}

Generate two full descriptions:
1. descriptionEL: Full Greek description. Use multiple paragraphs if needed. Rich, professional copy. Cover what the product does in practice, key benefits, and why it matters. You may use simple HTML like <p>, <br/>, <ul><li> if it improves structure. Write 3–6 paragraphs or equivalent structured content.
2. descriptionEN: Full English description. Same structure and depth as the Greek version. Professional B2B tone.

Output strict JSON only, no markdown. Use this exact structure:
{
  "descriptionEL": "Full Greek description text (may include <p>, <br/>, <ul><li>).",
  "descriptionEN": "Full English description text (same structure)."
}`;

        let result: { descriptionEL: string; descriptionEN: string };
        try {
            const parsed = await chatCompletionJson<{ descriptionEL?: string; descriptionEN?: string }>({
                task: "copywriting",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.5,
                maxTokens: 4000,
            });
            result = {
                descriptionEL: parsed.descriptionEL ?? "",
                descriptionEN: parsed.descriptionEN ?? "",
            };
        } catch (err) {
            console.error("[expand-description] failed:", err);
            const msg = err instanceof OpenRouterError ? err.message : "Description expansion failed";
            return NextResponse.json({ error: msg }, { status: 502 });
        }

        return NextResponse.json(result);
    } catch (error: any) {
        console.error("Expand description error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
