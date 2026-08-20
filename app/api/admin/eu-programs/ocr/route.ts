import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { chatCompletionJson, isAiConfigured, OpenRouterError } from "@/lib/openrouter";

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

        if (!isAiConfigured()) {
            return NextResponse.json(
                { error: "OPENROUTER_API_KEY is not configured. Add it to .env and restart the server." },
                { status: 500 }
            );
        }

        let parsedKads: unknown;
        try {
            // The "vision" task routes only to vision-capable models.
            parsedKads = await chatCompletionJson<unknown>({
                task: "vision",
                maxTokens: 2000,
                messages: [
                    {
                        role: "system",
                        content: `You are an expert OCR parser for Greek KAD (Code of Business Activities) documents. Your ONLY output should be a valid JSON array of objects, with NO surrounding markdown or backticks. Format: [{"code": "12.34.56.78", "desc": "Greek Description"}, ...]. If no KADs can be found, return []. Be 100% precise with the text extraction.`,
                    },
                    {
                        role: "user",
                        content: [
                            { type: "text", text: "Extract all KAD rows from this image snippet." },
                            { type: "image_url", image_url: { url: base64Image, detail: "high" } },
                        ],
                    },
                ],
                // A bare JSON array is not a JSON *object*, so json_object mode would be
                // rejected here; the client strips fences and extracts the array instead.
                jsonMode: false,
            });
        } catch (err) {
            console.error("OCR failed:", err);
            const message = err instanceof OpenRouterError ? err.message : "OCR processing failed";
            const status = err instanceof OpenRouterError && err.status === 401 ? 401 : 502;
            return NextResponse.json({ error: message }, { status });
        }

        return NextResponse.json({ kads: Array.isArray(parsedKads) ? parsedKads : [] }, { status: 200 });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "OCR processing failed";
        console.error("OCR Route Error:", message);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
