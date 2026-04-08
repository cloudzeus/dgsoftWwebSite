import { NextResponse } from "next/server";
import { auth } from "@/auth";

async function callOpenAITranslate(prompt: string): Promise<string> {
    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) throw new Error("OpenAI not configured");
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.1,
        }),
    });
    if (!res.ok) throw new Error(`OpenAI: ${res.statusText}`);
    const data = await res.json();
    return data.choices[0]?.message?.content?.trim() ?? "";
}

async function callDeepSeekTranslate(prompt: string): Promise<string> {
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
            temperature: 0.05,
        }),
    });
    if (!res.ok) {
        const err = await res.text();
        throw new Error(`DeepSeek: ${res.statusText} - ${err.slice(0, 150)}`);
    }
    const data = await res.json();
    return data.choices[0]?.message?.content?.trim() ?? "";
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { text, targetLang, preferDeepSeek } = await req.json();

        if (!text) {
            return NextResponse.json({ error: "Missing text" }, { status: 400 });
        }

        const openAiKey = process.env.OPENAI_API_KEY?.trim();
        const deepseekKey = process.env.DEEPSEEK_API_KEY?.trim();
        if (!openAiKey && !deepseekKey) {
            return NextResponse.json({
                error: "Set OPENAI_API_KEY or DEEPSEEK_API_KEY in .env or .env.local.",
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
                : "";

        const prompt = `You are an expert translator for Greek↔English business and EU programme content. Translate the following into ${targetLangLabel}. Preserve any HTML or rich-text tags exactly (same tags and structure; translate only visible text).${englishQualityBlock}

Do not add any text before or after the translation. Reply with the raw translated string only.

Text:
${text}
`;

        let translatedContent: string;
        const tryOpenAiThenDeepSeek = async () => {
            try {
                return await callOpenAITranslate(prompt);
            } catch (openAiError) {
                if (deepseekKey) {
                    try {
                        return await callDeepSeekTranslate(prompt);
                    } catch (deepseekError) {
                        console.error("Translate: OpenAI failed", openAiError);
                        console.error("Translate: DeepSeek fallback failed", deepseekError);
                        throw new Error("OpenAI failed and DeepSeek fallback failed. Check your API keys.");
                    }
                }
                throw openAiError;
            }
        };

        const tryDeepSeekThenOpenAi = async () => {
            if (!deepseekKey) return tryOpenAiThenDeepSeek();
            try {
                return await callDeepSeekTranslate(prompt);
            } catch (deepseekError) {
                if (openAiKey) {
                    try {
                        return await callOpenAITranslate(prompt);
                    } catch (openAiError) {
                        console.error("Translate: DeepSeek failed", deepseekError);
                        console.error("Translate: OpenAI fallback failed", openAiError);
                        throw new Error("DeepSeek failed and OpenAI fallback failed. Check your API keys.");
                    }
                }
                throw deepseekError;
            }
        };

        try {
            translatedContent =
                preferDeepSeek === true && deepseekKey ? await tryDeepSeekThenOpenAi() : await tryOpenAiThenDeepSeek();
        } catch (err) {
            return NextResponse.json({
                error: err instanceof Error ? err.message : "Translation failed",
            }, { status: 502 });
        }

        return NextResponse.json({ translated: translatedContent, text: translatedContent });
    } catch (error: any) {
        console.error("Translation API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
