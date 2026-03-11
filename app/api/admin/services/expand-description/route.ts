import { NextResponse } from "next/server";
import { auth } from "@/auth";

async function callOpenAI(prompt: string): Promise<{ descriptionEL: string; descriptionEN: string }> {
    const openAiKey = process.env.OPENAI_API_KEY?.trim();
    if (openAiKey) {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${openAiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [{ role: "user", content: prompt }],
                temperature: 0.5,
                response_format: { type: "json_object" },
            }),
        });
        if (res.ok) {
            const data = await res.json();
            const content = data.choices[0]?.message?.content?.trim();
            const parsed = JSON.parse(content);
            return {
                descriptionEL: parsed.descriptionEL ?? "",
                descriptionEN: parsed.descriptionEN ?? "",
            };
        }
    }
    throw new Error("OpenAI failed or not configured");
}

async function callDeepSeek(prompt: string): Promise<{ descriptionEL: string; descriptionEN: string }> {
    const deepseekKey = process.env.DEEPSEEK_API_KEY?.trim();
    const apiUrl = process.env.DEEPSEEK_API_URL || "https://api.deepseek.com/v1/chat/completions";
    if (!deepseekKey) throw new Error("DeepSeek not configured");
    const body: Record<string, unknown> = {
        model: "deepseek-chat",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.5,
    };
    // DeepSeek may not support response_format; try with it first, fallback without
    const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${deepseekKey}`,
        },
        body: JSON.stringify({ ...body, response_format: { type: "json_object" } }),
    });
    let content: string;
    if (!res.ok && res.status === 400) {
        // Retry without response_format in case API rejected it
        const retry = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${deepseekKey}`,
            },
            body: JSON.stringify(body),
        });
        if (!retry.ok) {
            const errText = await retry.text();
            throw new Error(`DeepSeek API failed: ${retry.statusText} - ${errText.slice(0, 200)}`);
        }
        const data = await retry.json();
        content = data.choices[0]?.message?.content?.trim() ?? "";
    } else {
        if (!res.ok) {
            const errText = await res.text();
            throw new Error(`DeepSeek API failed: ${res.statusText} - ${errText.slice(0, 200)}`);
        }
        const data = await res.json();
        content = data.choices[0]?.message?.content?.trim() ?? "";
    }
    // Extract JSON in case of markdown code block
    let raw = content;
    const jsonStart = content.indexOf("{");
    const jsonEnd = content.lastIndexOf("}");
    if (jsonStart !== -1 && jsonEnd > jsonStart) raw = content.slice(jsonStart, jsonEnd + 1);
    const parsed = JSON.parse(raw);
    return {
        descriptionEL: parsed.descriptionEL ?? "",
        descriptionEN: parsed.descriptionEN ?? "",
    };
}

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { shortDescriptionEL, shortDescriptionEN } = await req.json();

        if (!shortDescriptionEL?.trim()) {
            return NextResponse.json({ error: "Missing short description (Greek)" }, { status: 400 });
        }

        const openAiKey = process.env.OPENAI_API_KEY?.trim();
        const deepseekKey = process.env.DEEPSEEK_API_KEY?.trim();
        if (!openAiKey && !deepseekKey) {
            return NextResponse.json({
                error: "Set OPENAI_API_KEY or DEEPSEEK_API_KEY in .env or .env.local and restart the dev server.",
            }, { status: 500 });
        }

        const prompt = `You are an expert B2B copywriter for software and cloud services. Expand the following SHORT service description into a FULL, rich description suitable for a product page.

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
            result = await callOpenAI(prompt);
        } catch (openAiError) {
            console.warn("[expand-description] OpenAI failed:", openAiError instanceof Error ? openAiError.message : openAiError);
            if (deepseekKey) {
                try {
                    result = await callDeepSeek(prompt);
                } catch (deepseekError) {
                    console.error("[expand-description] DeepSeek fallback failed:", deepseekError instanceof Error ? deepseekError.message : deepseekError);
                    return NextResponse.json({
                        error: "OpenAI failed and DeepSeek fallback failed. Check OPENAI_API_KEY and DEEPSEEK_API_KEY in .env and restart.",
                    }, { status: 502 });
                }
            } else {
                return NextResponse.json({
                    error: "OpenAI failed. Add DEEPSEEK_API_KEY to .env for automatic fallback, then restart the dev server.",
                }, { status: 502 });
            }
        }

        return NextResponse.json(result);
    } catch (error: any) {
        console.error("Expand description error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
