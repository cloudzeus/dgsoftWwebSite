import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function POST(req: Request) {
    try {
        const session = await auth();
        if (!session || session.user?.role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { base64Image } = body;

        if (!base64Image) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 });
        }

        // We use OpenAI GPT-4o Vision to extract data because it requires 0 extra setup, handles greek OCR perfectly, and parses tabular KADs easily.
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "OPENAI_API_KEY is not set" }, { status: 500 });
        }

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4o",
                messages: [
                    {
                        role: "system",
                        content: `You are an expert OCR parser for Greek KAD (Code of Business Activities) documents. Your ONLY output should be a valid JSON array of objects, with NO surrounding markdown or backticks. Format: [{"code": "12.34.56.78", "desc": "Greek Description"}, ...]. If no KADs can be found, return []. Be 100% precise with the text extraction.`
                    },
                    {
                        role: "user",
                        content: [
                            {
                                type: "text",
                                text: "Extract all KAD rows from this image snippet."
                            },
                            {
                                type: "image_url",
                                image_url: {
                                    url: base64Image,
                                    detail: "high"
                                }
                            }
                        ]
                    }
                ],
                max_tokens: 2000,
            }),
        });

        if (!response.ok) {
            const errBody = await response.text();
            throw new Error(`OpenAI API Error: ${response.status} - ${errBody}`);
        }

        const aiData = await response.json();
        const rawContent = aiData.choices?.[0]?.message?.content || "[]";

        let cleanedContent = rawContent.replace(/```json/g, "").replace(/```/g, "").trim();

        let parsedKads = [];
        try {
            parsedKads = JSON.parse(cleanedContent);
        } catch (err) {
            console.error("Failed to parse AI output:", cleanedContent);
            throw new Error("AI returned invalid JSON structure.");
        }

        return NextResponse.json({ kads: parsedKads }, { status: 200 });
    } catch (error: any) {
        console.error("OCR Route Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
