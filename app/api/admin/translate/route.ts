import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { text, targetLang } = await req.json();

        if (!text) {
            return NextResponse.json({ error: "Missing text" }, { status: 400 });
        }

        // We use either DeepSeek if available, else standard OpenAI endpoint
        const isDeepseek = !!process.env.DEEPSEEK_API_KEY;
        const apiUrl = isDeepseek
            ? (process.env.DEEPSEEK_API_URL || "https://api.deepseek.com/v1/chat/completions")
            : "https://api.openai.com/v1/chat/completions";
        const apiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;
        const model = isDeepseek ? "deepseek-chat" : "gpt-4o-mini";

        if (!apiKey) {
            return NextResponse.json({ error: "No Translation API Key Available" }, { status: 500 });
        }

        const targetLangLabel = targetLang === "en" || targetLang?.toLowerCase() === "english" ? "English" : "Greek";

        const prompt = `You are a professional translator. Translate the following text into ${targetLangLabel}. Always preserve HTML and rich text formatting precisely. Do not add any extra text or conversational response before or after the translation. Just reply with the raw translated string.

Text:
${text}
`;

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

        if (!res.ok) {
            const errorBase = await res.text();
            throw new Error(`Translation API Failed: ${res.statusText} - ${errorBase}`);
        }

        const data = await res.json();
        const translatedContent = data.choices[0]?.message?.content?.trim();

        return NextResponse.json({ translated: translatedContent, text: translatedContent });

    } catch (error: any) {
        console.error("Translation API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
