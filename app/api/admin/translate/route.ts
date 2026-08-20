import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { chatCompletion, isAiConfigured, OpenRouterError, GREEK_TERMINOLOGY_RULE } from "@/lib/openrouter";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { text, targetLang } = await req.json();

        if (!text) {
            return NextResponse.json({ error: "Missing text" }, { status: 400 });
        }

        if (!isAiConfigured()) {
            return NextResponse.json({
                error: "Set OPENROUTER_API_KEY in .env or .env.local and restart the dev server.",
            }, { status: 500 });
        }

        const targetLangLabel = targetLang === "en" || targetLang?.toLowerCase() === "english" ? "English" : "Greek";

        const englishQualityBlock =
            targetLangLabel === "English"
                ? `

Strict rules for English output (follow exactly):
- Write natural, professional English suitable for EU funding announcements, corporate sites, and public-sector readers. Avoid a stiff word-for-word or “translationese” tone.
- Prefer clear, idiomatic wording; do not mirror Greek sentence structure when English would normally phrase it differently.
- Preserve meaning, numbers, dates, percentages, currency, KAD codes, legal references, and programmatic constraints exactly.
- Keep widely used acronyms in their standard English/EU form where applicable (e.g. SME, EU, ERP). For Greek-specific names (ministries, funds, places), use an accurate English or established transliteration; do not invent abbreviations.
- If the source mixes Greek and English, unify the English parts and translate only what is Greek unless a phrase is a fixed official title—then keep official naming consistent.
- Do not add introductions (“Here is the translation”), notes, or alternatives. Output only the translated text.
`
                : `

${GREEK_TERMINOLOGY_RULE}
`;

        const prompt = `You are an expert translator for Greek↔English business and EU programme content. Translate the following into ${targetLangLabel}. Preserve any HTML or rich-text tags exactly (same tags and structure; translate only visible text).${englishQualityBlock}

Do not add any text before or after the translation. Reply with the raw translated string only.

Text:
${text}
`;

        let translatedContent: string;
        try {
            translatedContent = await chatCompletion({
                task: "translate",
                messages: [{ role: "user", content: prompt }],
            });
        } catch (err) {
            const message = err instanceof OpenRouterError ? err.message : "Translation failed";
            console.error("Translate failed:", err);
            return NextResponse.json({ error: message }, { status: 502 });
        }

        return NextResponse.json({ translated: translatedContent, text: translatedContent });
    } catch (error: any) {
        console.error("Translation API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
