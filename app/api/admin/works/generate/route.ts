import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { chatCompletionJson, isAiConfigured, OpenRouterError, GREEK_TERMINOLOGY_RULE } from "@/lib/openrouter";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { titleEL, customerName, servicesUsed } = await req.json();

        if (!titleEL) {
            return NextResponse.json({ error: "Missing title" }, { status: 400 });
        }

        if (!isAiConfigured()) {
            return NextResponse.json({ error: "Set OPENROUTER_API_KEY in .env and restart the server." }, { status: 500 });
        }

        const context = [
            customerName ? `Customer/Client: ${customerName}` : null,
            servicesUsed?.length ? `Services used: ${servicesUsed.join(", ")}` : null,
        ].filter(Boolean).join("\n");

        const prompt = `You are an expert B2B copywriter and digital marketing strategist. Generate compelling case study content for a Greek software/ERP company's portfolio.

${GREEK_TERMINOLOGY_RULE}


Project Title (Greek): "${titleEL}"
${context ? `Context:\n${context}` : ""}

Generate a complete portfolio case study in strict JSON format. Output ONLY valid raw JSON, no markdown wrappers.

JSON Structure:
{
  "titleEN": "Professional English translation of the project title",
  "challengeEL": "2-3 paragraphs in Greek describing the business challenge the customer faced before implementing the solution. Be specific and compelling.",
  "challengeEN": "Same challenge in English",
  "stepsEL": ["Step 1 description in Greek", "Step 2 description in Greek", "Step 3 description in Greek", "Step 4 description in Greek", "Step 5 description in Greek"],
  "stepsEN": ["Step 1 in English", "Step 2 in English", "Step 3 in English", "Step 4 in English", "Step 5 in English"],
  "stats": [
    { "icon": "TrendingUp", "value": "40%", "textEL": "Αύξηση παραγωγικότητας", "textEN": "Productivity Increase" },
    { "icon": "Clock", "value": "60%", "textEL": "Μείωση χρόνου επεξεργασίας", "textEN": "Processing Time Reduction" },
    { "icon": "Users", "value": "200+", "textEL": "Χρήστες στο σύστημα", "textEN": "Users on the platform" },
    { "icon": "CheckCircle", "value": "99.9%", "textEL": "Λειτουργική αξιοπιστία", "textEN": "System reliability" }
  ]
}

Rules:
- stepsEL and stepsEN must each have exactly 5 bullet points describing the implementation process
- stats must have exactly 4 items with realistic and impressive metrics
- icon values must be valid Lucide icon names: TrendingUp, Clock, Users, CheckCircle, BarChart2, Database, Zap, Shield, Globe, Award
- challengeEL/EN should be compelling business narrative, not technical jargon
- Output ONLY raw JSON, no explanation text`;

        let parsedData;
        try {
            parsedData = await chatCompletionJson<any>({
                task: "copywriting",
                messages: [{ role: "user", content: prompt }],
                maxTokens: 6000,
            });
        } catch (err) {
            console.error("Work generation failed:", err);
            const msg = err instanceof OpenRouterError ? err.message : "Work generation failed";
            return NextResponse.json({ error: msg }, { status: 502 });
        }

        return NextResponse.json(parsedData);

    } catch (error: any) {
        console.error("Work Generation Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
