"use server";

export type ParsedExpenseLimit = {
  code: string;
  description: string;
  maxPercentage: number | null;
  minPercentage: number | null;
  maxAmount: number | null;
  isMandatory: boolean;
};

const DEFAULT_DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";
const DEFAULT_DEEPSEEK_MODEL = "deepseek-chat";

function normalizeResponseJson(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith("```")) {
    return trimmed.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
  }
  return trimmed;
}

function normalizePercentage(v: unknown): number | null {
  if (v == null) return null;
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  if (n > 1) return n / 100;
  if (n < 0) return null;
  return n;
}

function normalizeAmount(v: unknown): number | null {
  if (v == null) return null;
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0) return null;
  return n;
}

function normalizeCode(code: string): string {
  return code.trim().replace(/\s+/g, "").replace(",", ".");
}

export async function parsePdfToExpenses(text: string): Promise<ParsedExpenseLimit[]> {
  const apiKey = process.env.DEEPSEEK_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("DEEPSEEK_API_KEY is not configured.");
  }

  const content = text?.trim();
  if (!content) return [];

  const apiUrl = process.env.DEEPSEEK_API_URL?.trim() || DEFAULT_DEEPSEEK_API_URL;
  const model = process.env.DEEPSEEK_MODEL?.trim() || DEFAULT_DEEPSEEK_MODEL;
  const inputText = content.slice(0, 120000);

  const systemPrompt = `You are a Greek JSON Extraction Expert for National Grants (ESPA). Extract expense codes, descriptions, and limits from the text.

Codes follow the format XX.XX (e.g., 02.19).

Identify "maxPercentage" (e.g., "έως 15%" -> 0.15).

Identify "minPercentage" (e.g., "τουλάχιστον 5%" -> 0.05).

Identify "maxAmount" (e.g., "έως 50.000€" -> 50000).

Identify if "Mandatory" (Υποχρεωτική δαπάνη).
Return ONLY a raw JSON array: Array<{ code: string, description: string, maxPercentage: number | null, minPercentage: number | null, maxAmount: number | null, isMandatory: boolean }>.`;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: inputText },
      ],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`DeepSeek request failed (${response.status}): ${body.slice(0, 200)}`);
  }

  const payload = await response.json();
  const rawText = payload?.choices?.[0]?.message?.content;
  if (typeof rawText !== "string" || rawText.trim() === "") return [];

  let parsed: unknown;
  try {
    parsed = JSON.parse(normalizeResponseJson(rawText));
  } catch {
    throw new Error("DeepSeek returned invalid JSON.");
  }

  if (!Array.isArray(parsed)) return [];

  return parsed
    .map((row) => {
      if (!row || typeof row !== "object") return null;
      const r = row as Record<string, unknown>;
      const code = normalizeCode(String(r.code ?? ""));
      const description = String(r.description ?? "").trim();
      if (!code || !description) return null;
      return {
        code,
        description,
        maxPercentage: normalizePercentage(r.maxPercentage),
        minPercentage: normalizePercentage(r.minPercentage),
        maxAmount: normalizeAmount(r.maxAmount),
        isMandatory: Boolean(r.isMandatory),
      } satisfies ParsedExpenseLimit;
    })
    .filter((row): row is ParsedExpenseLimit => row != null);
}
