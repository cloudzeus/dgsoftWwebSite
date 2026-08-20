/**
 * Unified OpenRouter client — the single entry point for every LLM call in the app.
 *
 * Replaces the previous per-provider OpenAI / DeepSeek code paths. Model selection is
 * automatic and driven by two parameters:
 *
 *   1. QUALITY — the `task` says what kind of work it is. Each task carries a curated
 *      candidate list; every candidate has been checked to produce acceptable Greek,
 *      and vision tasks only ever list vision-capable models.
 *   2. PRICE   — the `tier` (OPENROUTER_TIER, default "low") picks how much we are
 *      willing to pay. Candidates are ordered cheapest-first and OpenRouter is told
 *      `sort: "price"` plus a hard `max_price` ceiling.
 *
 * OpenRouter then routes automatically: it takes the cheapest candidate that is up,
 * on the cheapest provider serving it, and transparently falls through the rest of the
 * chain on error or rate-limit. We never pin a single model.
 *
 * NOTE: the absolute cheapest models on OpenRouter (ling-2.6-flash, mistral-nemo,
 * qwen3.7-flash) were measured producing wrong Greek — wrong gender, wrong
 * terminology, calques. They are deliberately excluded from every tier.
 */

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

/** Logical kind of work. Determines the quality floor. */
export type AiTask =
    /** Greek <-> English translation. */
    | "translate"
    /** Marketing / editorial copy. Needs the strongest Greek. */
    | "copywriting"
    /** Strict JSON extraction from text. */
    | "extraction"
    /** OCR / image understanding. Vision-capable models only. */
    | "vision"
    /** Long grant/PDF documents. Needs a large context window. */
    | "documentAnalysis";

/** How much we are willing to pay. Trades cost against capability. */
export type QualityTier = "low" | "balanced" | "high";

/** Ceiling in US dollars per million tokens. */
type PriceCeiling = { prompt: number; completion: number };

type Profile = {
    /** Candidate models, cheapest first. OpenRouter falls through this list. */
    models: string[];
    maxPrice: PriceCeiling;
    temperature: number;
};

/**
 * Candidates are ordered cheapest-first. Prices in comments are $/M tokens (in/out)
 * at the time of writing and are indicative only — the real ceiling is `maxPrice`.
 */
const PROFILES: Record<QualityTier, Record<AiTask, Profile>> = {
    low: {
        translate: {
            // User-facing Greek: flash-lite (0.10/0.40) reads more naturally than the
            // marginally cheaper deepseek-v4-flash (0.09/0.18), which occasionally
            // reaches for over-literal coinages ("νεφικό σύστημα" for "cloud").
            models: ["google/gemini-2.5-flash-lite", "deepseek/deepseek-v4-flash", "openai/gpt-4o-mini"],
            maxPrice: { prompt: 0.5, completion: 2 },
            temperature: 0.1,
        },
        copywriting: {
            models: ["google/gemini-2.5-flash-lite", "google/gemini-2.5-flash", "openai/gpt-4o-mini"],
            maxPrice: { prompt: 1, completion: 4 },
            temperature: 0.7,
        },
        extraction: {
            // Machine-readable JSON, no prose style to preserve — take the cheapest.
            models: ["deepseek/deepseek-v4-flash", "google/gemini-2.5-flash-lite", "openai/gpt-4o-mini"],
            maxPrice: { prompt: 0.5, completion: 2 },
            temperature: 0,
        },
        vision: {
            // Vision-capable only — deepseek-v4-flash is text-only and must not appear here.
            models: ["google/gemini-2.5-flash-lite", "google/gemini-2.5-flash", "openai/gpt-4o-mini"],
            maxPrice: { prompt: 1, completion: 4 },
            temperature: 0,
        },
        documentAnalysis: {
            // 1M-context models, needed for 140k-char grant PDFs.
            models: ["deepseek/deepseek-v4-flash", "google/gemini-2.5-flash-lite", "google/gemini-2.5-flash"],
            maxPrice: { prompt: 1, completion: 4 },
            temperature: 0,
        },
    },
    balanced: {
        translate: {
            models: ["google/gemini-2.5-flash-lite", "google/gemini-2.5-flash", "openai/gpt-4o-mini"],
            maxPrice: { prompt: 1, completion: 4 },
            temperature: 0.1,
        },
        copywriting: {
            models: ["google/gemini-2.5-flash", "openai/gpt-4o", "anthropic/claude-sonnet-4.5"],
            maxPrice: { prompt: 4, completion: 16 },
            temperature: 0.7,
        },
        extraction: {
            models: ["google/gemini-2.5-flash-lite", "google/gemini-2.5-flash", "openai/gpt-4o-mini"],
            maxPrice: { prompt: 1, completion: 4 },
            temperature: 0,
        },
        vision: {
            models: ["google/gemini-2.5-flash", "openai/gpt-4o-mini", "openai/gpt-4o"],
            maxPrice: { prompt: 3, completion: 12 },
            temperature: 0,
        },
        documentAnalysis: {
            models: ["google/gemini-2.5-flash", "google/gemini-2.5-pro", "anthropic/claude-sonnet-4.5"],
            maxPrice: { prompt: 2, completion: 12 },
            temperature: 0,
        },
    },
    high: {
        translate: {
            models: ["google/gemini-2.5-flash", "openai/gpt-4o", "anthropic/claude-sonnet-4.5"],
            maxPrice: { prompt: 4, completion: 16 },
            temperature: 0.1,
        },
        copywriting: {
            models: ["anthropic/claude-sonnet-4.5", "openai/gpt-4o", "google/gemini-2.5-pro"],
            maxPrice: { prompt: 4, completion: 16 },
            temperature: 0.7,
        },
        extraction: {
            models: ["google/gemini-2.5-pro", "openai/gpt-4o", "anthropic/claude-sonnet-4.5"],
            maxPrice: { prompt: 4, completion: 16 },
            temperature: 0,
        },
        vision: {
            models: ["openai/gpt-4o", "google/gemini-2.5-pro", "anthropic/claude-sonnet-4.5"],
            maxPrice: { prompt: 4, completion: 16 },
            temperature: 0,
        },
        documentAnalysis: {
            models: ["google/gemini-2.5-pro", "anthropic/claude-sonnet-4.5"],
            maxPrice: { prompt: 4, completion: 16 },
            temperature: 0,
        },
    },
};

/** Cost/quality tier. Set OPENROUTER_TIER=balanced|high to spend more. */
function resolveTier(): QualityTier {
    const raw = process.env.OPENROUTER_TIER?.trim().toLowerCase();
    return raw === "balanced" || raw === "high" ? raw : "low";
}

/**
 * Escape hatch: OPENROUTER_MODEL pins every task to one model,
 * OPENROUTER_MODEL_VISION (etc.) pins a single task. Normally unset.
 */
function pinnedModel(task: AiTask): string | null {
    const key = `OPENROUTER_MODEL_${task.replace(/([A-Z])/g, "_$1").toUpperCase()}`;
    return process.env[key]?.trim() || process.env.OPENROUTER_MODEL?.trim() || null;
}

/**
 * House rule for every Greek-language generation in the app.
 *
 * Greek IT/business writing keeps established English terms rather than inventing
 * Greek ones. Models left to themselves reach for over-literal coinages — we measured
 * "νεφικό σύστημα" for "cloud system" — which read as wrong to a Greek professional.
 * Prepend this to any prompt that produces Greek prose.
 */
export const GREEK_TERMINOLOGY_RULE = `Greek terminology rule (follow strictly):
- Use the established Greek term whenever one genuinely exists in professional Greek business/IT usage (e.g. "τιμολόγηση", "αποθέματα", "παραστατικά", "εφαρμογή", "εξυπηρέτηση πελατών").
- Where no established Greek term exists, KEEP THE ENGLISH TERM as-is, in Latin script, rather than inventing or literally translating one. This applies to terms such as: cloud, ERP, CRM, backup, dashboard, hosting, server, software, e-mail, marketing, e-shop, API, SaaS, IT, business intelligence, workflow, reporting.
- Never coin an artificial Greek word for a technical concept (e.g. do NOT write "νεφικό" for cloud, or "αντιγραφικό" for backup).
- Inflect surrounding Greek grammar naturally around the kept English term (e.g. "στο cloud", "του ERP", "τα backups").`;

/** OpenAI-compatible message. `content` is a string, or a part array for vision. */
export type AiMessage = {
    role: "system" | "user" | "assistant";
    content: string | unknown[];
};

export type ChatOptions = {
    task: AiTask;
    messages: AiMessage[];
    /** Overrides the profile default. */
    temperature?: number;
    maxTokens?: number;
    jsonMode?: boolean;
    /** Default 120s. */
    timeoutMs?: number;
};

export class OpenRouterError extends Error {
    readonly status?: number;
    constructor(message: string, status?: number) {
        super(message);
        this.name = "OpenRouterError";
        this.status = status;
    }
}

function getApiKey(): string {
    const key = process.env.OPENROUTER_API_KEY?.trim();
    if (!key) {
        throw new OpenRouterError(
            "OPENROUTER_API_KEY is not configured. Add it to .env (or your deployment environment variables) and restart the server."
        );
    }
    return key;
}

/** True when the app has an OpenRouter key configured. */
export function isAiConfigured(): boolean {
    return !!process.env.OPENROUTER_API_KEY?.trim();
}

/** Which models a task would consider right now. Exposed for diagnostics. */
export function describeRouting(task: AiTask): { tier: QualityTier; models: string[]; maxPrice: PriceCeiling } {
    const tier = resolveTier();
    const profile = PROFILES[tier][task];
    const pin = pinnedModel(task);
    return { tier, models: pin ? [pin] : profile.models, maxPrice: profile.maxPrice };
}

/**
 * Send a chat completion through OpenRouter and return the assistant text.
 *
 * Reasoning is explicitly disabled: routing may land on a reasoning model, and those
 * can burn the whole token budget on an internal trace and return a null `content`.
 * Every caller here wants a direct answer, not the thinking.
 */
export async function chatCompletion(options: ChatOptions): Promise<string> {
    const { task, messages, jsonMode, maxTokens } = options;
    const apiKey = getApiKey();
    const tier = resolveTier();
    const profile = PROFILES[tier][task];
    const pin = pinnedModel(task);
    const models = pin ? [pin] : profile.models;

    const body: Record<string, unknown> = {
        model: models[0],
        messages,
        temperature: options.temperature ?? profile.temperature,
        reasoning: { enabled: false },
        provider: {
            // Cheapest provider first, and never above the ceiling.
            sort: "price",
            max_price: profile.maxPrice,
        },
    };
    // Fallback chain: OpenRouter retries down the list on error / rate limit.
    if (models.length > 1) body.models = models;
    if (maxTokens) body.max_tokens = maxTokens;
    if (jsonMode) body.response_format = { type: "json_object" };

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), options.timeoutMs ?? 120_000);

    let res: Response;
    try {
        res = await fetch(OPENROUTER_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
                "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "https://dgsoft.gr",
                "X-Title": "DGSOFT",
            },
            body: JSON.stringify(body),
            signal: controller.signal,
        });
    } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
            throw new OpenRouterError(`OpenRouter request timed out (${task}).`);
        }
        throw new OpenRouterError(
            `OpenRouter request failed (${task}): ${err instanceof Error ? err.message : String(err)}`
        );
    } finally {
        clearTimeout(timer);
    }

    if (!res.ok) {
        const raw = await res.text();
        let detail = raw.slice(0, 300);
        try {
            const parsed = JSON.parse(raw);
            detail = parsed?.error?.message || parsed?.message || detail;
        } catch {
            // keep the raw snippet
        }
        if (res.status === 401 || res.status === 403) {
            throw new OpenRouterError(
                `Invalid or unauthorized OPENROUTER_API_KEY — check it at openrouter.ai/keys. (${detail})`,
                res.status
            );
        }
        if (res.status === 402) {
            throw new OpenRouterError(`OpenRouter credits exhausted — top up at openrouter.ai/credits. (${detail})`, 402);
        }
        if (res.status === 429) {
            throw new OpenRouterError(`OpenRouter rate limit reached, retry shortly. (${detail})`, 429);
        }
        throw new OpenRouterError(`OpenRouter request failed (${res.status}): ${detail}`, res.status);
    }

    const payload = await res.json();
    // OpenRouter can return HTTP 200 with an embedded error object.
    if (payload?.error) {
        throw new OpenRouterError(`OpenRouter error: ${payload.error.message || JSON.stringify(payload.error)}`);
    }

    const content = payload?.choices?.[0]?.message?.content;
    if (typeof content !== "string" || content.trim() === "") {
        const finish = payload?.choices?.[0]?.finish_reason;
        throw new OpenRouterError(
            `OpenRouter returned an empty response (${task}, model=${payload?.model ?? "unknown"}, finish_reason=${finish ?? "unknown"}).`
        );
    }
    return content.trim();
}

/** Strip ```json fences and any prose wrapped around the JSON payload. */
function extractJson(raw: string): string {
    let text = raw.trim();
    if (text.startsWith("```")) {
        text = text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
    }
    const firstObj = text.indexOf("{");
    const firstArr = text.indexOf("[");
    const starts = [firstObj, firstArr].filter((i) => i !== -1);
    if (starts.length === 0) return text;
    const start = Math.min(...starts);
    const end = text[start] === "{" ? text.lastIndexOf("}") : text.lastIndexOf("]");
    return end > start ? text.slice(start, end + 1) : text;
}

/**
 * Same as {@link chatCompletion} but parses the reply as JSON.
 * JSON mode is on by default; pass `jsonMode: false` if a prompt needs it off.
 */
export async function chatCompletionJson<T = unknown>(options: ChatOptions): Promise<T> {
    const raw = await chatCompletion({ jsonMode: true, ...options });
    try {
        return JSON.parse(extractJson(raw)) as T;
    } catch {
        throw new OpenRouterError(`OpenRouter returned invalid JSON (${options.task}): ${raw.slice(0, 200)}`);
    }
}
