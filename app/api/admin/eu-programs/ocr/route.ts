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

        // Image OCR scanner uses OpenAI Vision.
        const apiKey = process.env.OPENAI_API_KEY?.trim();
        if (!apiKey) {
            return NextResponse.json(
                {
                    error:
                        "OPENAI_API_KEY is not configured. Use the 'Upload Program Details PDF -> Parse & Save' flow (DeepSeek) or set a valid OpenAI key for image OCR scanner.",
                },
                { status: 500 }
            );
        }

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: process.env.OPENAI_OCR_MODEL?.trim() || "gpt-4o",
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
            let providerMessage = `OpenAI request failed (${response.status})`;
            try {
                const errJson = await response.json();
                providerMessage =
                    errJson?.error?.message ||
                    errJson?.message ||
                    providerMessage;
                const code = errJson?.error?.code || errJson?.code;
                if (code === "invalid_api_key") {
                    return NextResponse.json(
                        {
                            error:
                                "Invalid OpenAI API key for OCR scanner. Update OPENAI_API_KEY, or use 'Upload Program Details PDF -> Parse & Save' (DeepSeek) which does not depend on OpenAI OCR.",
                        },
                        { status: 401 }
                    );
                }
            } catch {
                // ignore parse failures and keep generic provider message
            }
            return NextResponse.json({ error: providerMessage }, { status: 502 });
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
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "OCR processing failed";
        console.error("OCR Route Error:", message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
