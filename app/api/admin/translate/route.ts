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
            temperature: 0.1,
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

        const { text, targetLang } = await req.json();

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
        const prompt = `You are a professional translator. Translate the following text into ${targetLangLabel}. Always preserve HTML and rich text formatting precisely. Do not add any extra text or conversational response before or after the translation. Just reply with the raw translated string.

Text:
${text}
`;

        let translatedContent: string;
        try {
            translatedContent = await callOpenAITranslate(prompt);
        } catch (openAiError) {
            if (deepseekKey) {
                try {
                    translatedContent = await callDeepSeekTranslate(prompt);
                } catch (deepseekError) {
                    console.error("Translate: OpenAI failed", openAiError);
                    console.error("Translate: DeepSeek fallback failed", deepseekError);
                    return NextResponse.json({
                        error: "OpenAI failed and DeepSeek fallback failed. Check your API keys.",
                    }, { status: 502 });
                }
            } else {
                return NextResponse.json({
                    error: openAiError instanceof Error ? openAiError.message : "Translation failed",
                }, { status: 502 });
            }
        }

        return NextResponse.json({ translated: translatedContent, text: translatedContent });
    } catch (error: any) {
        console.error("Translation API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
