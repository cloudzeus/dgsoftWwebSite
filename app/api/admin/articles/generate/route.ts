import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { chatCompletionJson, isAiConfigured, OpenRouterError, GREEK_TERMINOLOGY_RULE } from "@/lib/openrouter";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { title } = await req.json();

        if (!title) {
            return NextResponse.json({ error: "Missing title" }, { status: 400 });
        }

        if (!isAiConfigured()) {
            return NextResponse.json({ error: "Set OPENROUTER_API_KEY in .env and restart the server." }, { status: 500 });
        }

        const prompt = `You are an expert SEO copywriter and journalist. Your task is to generate a comprehensive, highly engaging, and SEO-optimized article structure based ONLY on the provided title: "${title}".

${GREEK_TERMINOLOGY_RULE}

        
You must generate the output in strict JSON format matching the structure exactly below, with no markdown code blocks outside the pure JSON string. Wait, just output valid JSON.

JSON Structure:
{
  "titleEN": "A catchy translated English title",
  "shortDescriptionEL": "A compelling 2-3 sentence Greek summary optimized for SEO and readability.",
  "shortDescriptionEN": "A compelling 2-3 sentence English summary optimized for SEO and readability.",
  "descriptionEL": "A fully detailed article body in Greek. CRITICAL: MUST use rich semantic HTML (<h2>, <p>, <strong>, <ul>, etc.) instead of Markdown. Make it comprehensive, engaging, and SEO-friendly.",
  "descriptionEN": "A fully detailed article body in English. CRITICAL: MUST use rich semantic HTML matching the Greek structure. Make it comprehensive, engaging, and SEO-friendly.",
  "metaTitleEL": "SEO Optimized Meta Title (Greek, max 60 chars)",
  "metaTitleEN": "SEO Optimized Meta Title (English, max 60 chars)",
  "metaDescriptionEL": "SEO Optimized Meta Description (Greek, max 160 chars)",
  "metaDescriptionEN": "SEO Optimized Meta Description (English, max 160 chars)",
  "keywordsEL": "keyword1, keyword2, keyword3",
  "keywordsEN": "keyword1, keyword2, keyword3",
  "categories": [
     { "nameEL": "Τεχνολογία", "nameEN": "Technology" },
     { "nameEL": "Ειδήσεις", "nameEN": "News" }
  ]
}

Ensure the HTML descriptions are robust and look like a proper news/blog post. Limit categories to 2 or 3 highly relevant tags.
Generate highly targeted keywords to maximize Google Search visibility.
Output ONLY raw JSON. Do not include \`\`\`json wrappers.`;

        let parsedData;
        try {
            parsedData = await chatCompletionJson<any>({
                task: "copywriting",
                messages: [{ role: "user", content: prompt }],
                maxTokens: 8000,
            });
        } catch (err) {
            console.error("Article generation failed:", err);
            const msg = err instanceof OpenRouterError ? err.message : "Article generation failed";
            return NextResponse.json({ error: msg }, { status: 502 });
        }

        return NextResponse.json(parsedData);

    } catch (error: any) {
        console.error("Article Generation Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
