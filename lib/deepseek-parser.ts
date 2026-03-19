"use server";

import type { EuProgramRequirementType } from "@prisma/client";

export type ParsedGrantRequirement = {
  type: EuProgramRequirementType;
  key: string;
  operator: string;
  value: string;
  isMandatory: boolean;
  errorMessageEL: string;
};

export type ParsedGrantExpenseLimit = {
  expenseCategoryId: string; // OPSKE code (e.g. 02.19)
  descriptionEL?: string;
  maxPercentage: number | null;
  minPercentage: number | null;
  maxAmount: number | null;
  isMandatory: boolean;
};

export type ParsedGrantProgramData = {
  programMeta: {
    nameEL: string | null;
    shortDescriptionEL: string | null;
    descriptionEL: string | null;
    announcedDate: string | null;
    submissionDate: string | null;
    endDate: string | null;
    percentageOfFinance: string | null;
    minBudget: number | null;
    maxBudget: number | null;
    minimumCompanyYears: number | null;
    minimumEmployees: number | null;
    indirectCostPercentage: number | null;
  };
  requirements: ParsedGrantRequirement[];
  expenseLimits: ParsedGrantExpenseLimit[];
  eligibleKads: string[];
};

const DEFAULT_DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";
const DEFAULT_DEEPSEEK_MODEL = "deepseek-chat";
const WORD_SPLIT_LIMIT = 30000;

const DEEPSEEK_EXPERT_AUDITOR_PROMPT = `You are a Senior Auditor for Greek ESPA/EU Grant documents. Your ONLY task is to extract structured data from the provided text and return a single valid JSON object. Return NOTHING else: no markdown, no code fences, no explanation, no trailing text.

OUTPUT RULE: Reply with exactly one JSON object starting with { and ending with }. Use double quotes for keys and strings. Use null for missing values. No trailing commas.

Where to look in the document:
- Program title/name: "Πρόσκληση", "Δράση", "Θέμα", "ΑΠΟΦΑΣΗ", opening paragraphs.
- Eligibility / beneficiaries: "Δικαιούχοι", "ΠΡΟΫΠΟΘΕΣΕΙΣ ΣΥΜΜΕΤΟΧΗΣ", "Προϋποθέσεις συμμετοχής", "Όροι και Προϋποθέσεις Δικαιούχων", "ΔΙΚΑΙΟΥΧΟΙ". Extract: startup date (e.g. 1/1/2023, προγενέστερη της 1/1/2023), de minimis (e.g. 300.000€), legal forms (ΑΕ, ΙΚΕ, ΟΕ, ΕΕ, Ατομική + full names), region (e.g. Περιφέρεια Κρήτης, Περιφέρεια Θεσσαλίας).
- Budget: "επιχορηγούμενο προϋπολογισμό", "κυμαίνονται από X € έως Y €", "Δημόσια Δαπάνη", "συνολική". Extract minBudget and maxBudget as numbers (e.g. 30000, 300000).
- Expense categories: "ΕΠΙΛΕΞΙΜΕΣ ΔΑΠΑΝΕΣ", "επιλέξιμες δαπάνες", OPSKE codes (XX.XX), "έως 15%", "τουλάχιστον 5%".
- Eligible KADs: Find "ΠΑΡΑΡΤΗΜΑ ΙΙΙ" or "ΕΠΙΛΕΞΙΜΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ (ΚΑΔ)" (often around page 108–116). KADs appear as: (1) CODE on one line, Greek description on the next (e.g. "46.76.19.28" then "Χονδρικό εμπόριο υλικών..."); or (2) description then CODE (e.g. "... 46.77.10.02 Χονδρικό εμπόριο άλλων..."). Codes are numeric with dots: 2-part (46.9, 55.1, 82.92), 3-part (46.76.19), or 4-part (46.76.19.28). Extract every such code exactly as written into eligibleKads. If the KAD list is only in an image (non-selectable), return eligibleKads as [] and you may set shortDescriptionEL to mention that KADs are in image form.

Requirements: For each rule output an object with type (REGION | LEGAL_FORM | DATE | DE_MINIMIS | NUMBER | TEXT), key, operator (IN | GTE | LTE | EQ), value (string), isMandatory (boolean), errorMessageEL or message (Greek error message). For region use type "REGION", key "REGION", operator "IN", value "Περιφέρεια Κρήτης" or similar.

Program meta: nameEL (Greek title), shortDescriptionEL, descriptionEL (brief summary), announcedDate/submissionDate/endDate (yyyy-mm-dd or null), percentageOfFinance (e.g. "50%"), minBudget/maxBudget (numbers), minimumCompanyYears/minimumEmployees (numbers or null), indirectCostPercentage (e.g. 0.07).

Exact JSON shape (use these keys only):
{"programMeta":{"nameEL":null,"shortDescriptionEL":null,"descriptionEL":null,"announcedDate":null,"submissionDate":null,"endDate":null,"percentageOfFinance":null,"minBudget":null,"maxBudget":null,"minimumCompanyYears":null,"minimumEmployees":null,"indirectCostPercentage":null},"requirements":[{"type":"REGION","key":"REGION","operator":"IN","value":"Περιφέρεια Κρήτης","isMandatory":true,"errorMessageEL":"Μη επιλέξιμη περιφέρεια."}],"expenseLimits":[{"code":"02.19","description":"...","maxPercentage":null,"minPercentage":null,"maxAmount":null,"isMandatory":false}],"eligibleKads":["10","11"]}

Return ONLY this JSON object. No other text.`;

function stripFence(raw: string): string {
  const t = raw.trim();
  if (t.startsWith("```")) return t.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
  return t;
}

/** Extract the first brace-balanced JSON object (avoids trailing text after }). */
function extractBalancedObject(text: string): string {
  const trimmed = text.trim();
  const start = trimmed.indexOf("{");
  if (start < 0) return trimmed;
  let depth = 0;
  let inString = false;
  let escape = false;
  let quote = '"';
  for (let i = start; i < trimmed.length; i++) {
    const c = trimmed[i];
    if (inString) {
      if (escape) { escape = false; continue; }
      if (c === "\\") { escape = true; continue; }
      if (c === quote) { inString = false; continue; }
      continue;
    }
    if (c === '"' || c === "'") { inString = true; quote = c; continue; }
    if (c === "{") { depth++; continue; }
    if (c === "}") {
      depth--;
      if (depth === 0) return trimmed.slice(start, i + 1);
    }
  }
  return trimmed.slice(start);
}

function extractJsonCandidate(raw: string): string {
  const cleaned = stripFence(raw).trim();
  if (!cleaned) return "{}";

  const balanced = extractBalancedObject(cleaned);
  if (balanced.startsWith("{") && balanced.endsWith("}")) return balanced;

  const objStart = cleaned.indexOf("{");
  const objEnd = cleaned.lastIndexOf("}");
  if (objStart >= 0 && objEnd > objStart) return cleaned.slice(objStart, objEnd + 1);

  const arrStart = cleaned.indexOf("[");
  const arrEnd = cleaned.lastIndexOf("]");
  if (arrStart >= 0 && arrEnd > arrStart) return cleaned.slice(arrStart, arrEnd + 1);

  return cleaned;
}

function normalizeJsonTextForParse(candidate: string): string {
  return candidate
    .replace(/^\uFEFF/, "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/[“”]/g, "\"")
    .replace(/[‘’]/g, "'");
}

function repairJsonForParse(s: string): string {
  return s
    .replace(/\t/g, " ")
    .replace(/,\s*([}\]])/g, "$1")
    .replace(/\r\n/g, " ");
}

function safeParseDeepSeekJson(raw: string): Record<string, unknown> | null {
  const extracted = extractJsonCandidate(raw);
  const normalized = normalizeJsonTextForParse(extracted);

  for (const candidate of [normalized, repairJsonForParse(normalized)]) {
    try {
      const parsed = JSON.parse(candidate);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) return parsed as Record<string, unknown>;
    } catch {
      continue;
    }
  }
  return null;
}

function toNumberOrNull(v: unknown): number | null {
  if (v == null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function normalizePct(v: unknown): number | null {
  const n = toNumberOrNull(v);
  if (n == null) return null;
  if (n > 1) return n / 100;
  if (n < 0) return null;
  return n;
}

function normalizeOpskeCode(value: unknown): string {
  return String(value ?? "").trim().replace(/\s+/g, "").replace(",", ".");
}

function normalizeType(type: unknown): EuProgramRequirementType {
  const t = String(type ?? "").trim().toUpperCase();
  if (t === "LEGAL_FORM") return "LEGAL_FORM";
  if (t === "REGIONAL" || t === "REGION") return "REGION";
  if (t === "TIMING" || t === "DATE") return "DATE";
  if (t === "FINANCIAL") return "NUMBER";
  if (t === "DE_MINIMIS") return "DE_MINIMIS";
  if (t === "BOOLEAN") return "BOOLEAN";
  if (t === "NUMBER") return "NUMBER";
  if (t === "TEXT") return "TEXT";
  return "TEXT";
}

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

function normalizeKadCode(value: unknown): string {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/;+$/g, "");
}

/** Extract KAD codes from KAD appendix text (page 108–116 style). Codes: 46.9, 55.1, 46.76.19.28. */
function extractKadCodesFromText(sectionText: string): string[] {
  if (!sectionText || sectionText.length < 100) return [];
  const re = /\b(\d{1,2}\.\d{1,2}(?:\.\d{1,2})?(?:\.\d{1,2})?)\b/g;
  const codes: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(sectionText)) !== null) {
    const code = m[1];
    const parts = code.split(".").map(Number);
    if (parts.some((p) => !Number.isFinite(p))) continue;
    if (parts.length === 2) {
      if (parts[0] <= 9 && parts[1] <= 12) continue;
      if (parts[0] <= 31 && parts[1] <= 31) continue;
    }
    if (parts.length >= 3 && parts[0] <= 31 && parts[1] <= 12) continue;
    codes.push(normalizeKadCode(code));
  }
  return [...new Set(codes)].filter((c) => c.length >= 2);
}

/** Prefer the slice that contains the actual KAD table (often after "Σελίδα 108" when appendix starts on 108). */
function getKadSectionForExtraction(fullText: string, keywordChunk: string): string {
  const page108 = fullText.indexOf("Σελίδα 108");
  const page116 = fullText.indexOf("Σελίδα 116");
  const appendixIV = fullText.indexOf("ΠΑΡΑΡΤΗΜΑ ΙV");
  if (page108 >= 0 && (page116 > page108 || appendixIV > page108)) {
    const end = page116 > page108 ? page116 + 1000 : appendixIV > page108 ? appendixIV : page108 + 100000;
    const pageChunk = fullText.slice(page108, end);
    if (pageChunk.length > 2000) return pageChunk;
  }
  return keywordChunk;
}

function normalizeDateOrNull(value: unknown): string | null {
  const raw = String(value ?? "").trim();
  if (!raw) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  const m = raw.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{2,4})$/);
  if (!m) return null;
  const day = m[1].padStart(2, "0");
  const month = m[2].padStart(2, "0");
  const yearNum = Number(m[3]);
  if (!Number.isFinite(yearNum)) return null;
  const year = String(yearNum < 100 ? yearNum + 2000 : yearNum);
  return `${year}-${month}-${day}`;
}

function toIntOrNull(value: unknown): number | null {
  const n = toNumberOrNull(value);
  return n == null ? null : Math.trunc(n);
}

function sectionSlice(source: string, startKeyword: string, fallbackLength = 90000): string {
  const upper = source.toUpperCase();
  const idx = upper.indexOf(startKeyword.toUpperCase());
  if (idx < 0) return source.slice(0, Math.min(source.length, fallbackLength));
  return source.slice(idx, Math.min(source.length, idx + fallbackLength));
}

function sectionSliceByKeywords(source: string, startKeywords: string[], fallbackLength = 90000): string {
  for (const keyword of startKeywords) {
    const sliced = sectionSlice(source, keyword, fallbackLength);
    const upper = source.toUpperCase();
    if (upper.includes(keyword.toUpperCase())) {
      return sliced;
    }
  }
  return source.slice(0, Math.min(source.length, fallbackLength));
}

async function callDeepSeek(content: string): Promise<Record<string, unknown>> {
  const apiKey = process.env.DEEPSEEK_API_KEY?.trim();
  if (!apiKey) throw new Error("DEEPSEEK_API_KEY is not configured.");

  const apiUrl = process.env.DEEPSEEK_API_URL?.trim() || DEFAULT_DEEPSEEK_API_URL;
  const model = process.env.DEEPSEEK_MODEL?.trim() || DEFAULT_DEEPSEEK_MODEL;

  const userContent = `Extract data from the following Greek grant/Πρόσκληση document. Reply with ONLY one JSON object (keys: programMeta, requirements, expenseLimits, eligibleKads). No markdown, no code fence, no text after the closing brace.\n\n${content.slice(0, 140000)}`;

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
        { role: "system", content: DEEPSEEK_EXPERT_AUDITOR_PROMPT },
        { role: "user", content: userContent },
      ],
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`DeepSeek request failed (${response.status}): ${body.slice(0, 200)}`);
  }

  const payload = await response.json();
  const raw = payload?.choices?.[0]?.message?.content;
  if (typeof raw !== "string" || raw.trim() === "") return {};

  const parsed = safeParseDeepSeekJson(raw);
  if (parsed) return parsed;

  // Retry once with a JSON-repair instruction if model returned malformed JSON.
  const repairResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0,
      messages: [
        {
          role: "system",
          content:
            "Convert the provided content to a single valid JSON object. Return ONLY JSON, no markdown, no explanations, no comments.",
        },
        {
          role: "user",
          content: raw,
        },
      ],
    }),
  });

  if (!repairResponse.ok) {
    const body = await repairResponse.text();
    throw new Error(`DeepSeek JSON repair failed (${repairResponse.status}): ${body.slice(0, 200)}`);
  }

  const repairPayload = await repairResponse.json();
  const repairedRaw = repairPayload?.choices?.[0]?.message?.content;
  if (typeof repairedRaw !== "string" || repairedRaw.trim() === "") {
    throw new Error("DeepSeek returned invalid JSON.");
  }

  const repairedParsed = safeParseDeepSeekJson(repairedRaw);
  if (!repairedParsed) {
    throw new Error("DeepSeek returned invalid JSON.");
  }
  return repairedParsed;
}

function normalizeParsedPayload(parsed: Record<string, unknown>): ParsedGrantProgramData {
  const obj = parsed && typeof parsed === "object" ? (parsed as Record<string, unknown>) : {};
  const programMetaRaw = obj.programMeta && typeof obj.programMeta === "object" ? (obj.programMeta as Record<string, unknown>) : {};
  const requirementsRaw = Array.isArray(obj.requirements) ? obj.requirements : [];
  const expenseLimitsRaw = Array.isArray(obj.expenseLimits) ? obj.expenseLimits : [];
  const eligibleKadsRaw = Array.isArray(obj.eligibleKads) ? obj.eligibleKads : [];

  const programMeta = {
    nameEL: String(programMetaRaw.nameEL ?? "").trim() || null,
    shortDescriptionEL: String(programMetaRaw.shortDescriptionEL ?? "").trim() || null,
    descriptionEL: String(programMetaRaw.descriptionEL ?? "").trim() || null,
    announcedDate: normalizeDateOrNull(programMetaRaw.announcedDate),
    submissionDate: normalizeDateOrNull(programMetaRaw.submissionDate),
    endDate: normalizeDateOrNull(programMetaRaw.endDate),
    percentageOfFinance: String(programMetaRaw.percentageOfFinance ?? "").trim() || null,
    minBudget: toNumberOrNull(programMetaRaw.minBudget),
    maxBudget: toNumberOrNull(programMetaRaw.maxBudget),
    minimumCompanyYears: toIntOrNull(programMetaRaw.minimumCompanyYears),
    minimumEmployees: toIntOrNull(programMetaRaw.minimumEmployees),
    indirectCostPercentage: normalizePct(programMetaRaw.indirectCostPercentage),
  };

  const requirements: ParsedGrantRequirement[] = requirementsRaw
    .map((r) => {
      if (!r || typeof r !== "object") return null;
      const row = r as Record<string, unknown>;
      const key = String(row.key ?? "").trim();
      const operator = String(row.operator ?? "").trim();
      const value = String(row.value ?? "").trim();
      const errorMessageEL = String(row.errorMessageEL ?? row.message ?? "").trim() || "Δεν πληρούνται οι προϋποθέσεις.";
      if (!key || !operator || !value) return null;
      const normalizedOperator = operator.toUpperCase() === "EQUALS" ? "EQ" : operator.toUpperCase();
      return {
        type: normalizeType(row.type),
        key,
        operator: normalizedOperator,
        value,
        isMandatory: row.isMandatory !== false,
        errorMessageEL,
      } satisfies ParsedGrantRequirement;
    })
    .filter((r): r is ParsedGrantRequirement => r != null);

  const expenseLimits: ParsedGrantExpenseLimit[] = expenseLimitsRaw
    .map((e) => {
      if (!e || typeof e !== "object") return null;
      const row = e as Record<string, unknown>;
      const expenseCategoryId = normalizeOpskeCode(row.expenseCategoryId ?? row.code);
      if (!expenseCategoryId) return null;
      const descriptionELRaw = row.descriptionEL != null ? String(row.descriptionEL).trim() : String(row.description ?? "").trim();
      const base: ParsedGrantExpenseLimit = {
        expenseCategoryId,
        maxPercentage: normalizePct(row.maxPercentage),
        minPercentage: normalizePct(row.minPercentage),
        maxAmount: toNumberOrNull(row.maxAmount),
        isMandatory: row.isMandatory === true,
      };
      return {
        ...base,
        ...(descriptionELRaw ? { descriptionEL: descriptionELRaw } : {}),
      } satisfies ParsedGrantExpenseLimit;
    })
    .filter((e): e is ParsedGrantExpenseLimit => e != null);

  const eligibleKads = Array.from(
    new Set(
      eligibleKadsRaw
        .map((k) => normalizeKadCode(k))
        .filter((k) => k !== "")
    )
  );

  return { programMeta, requirements, expenseLimits, eligibleKads };
}

function mergeParsedPayload(parts: ParsedGrantProgramData[]): ParsedGrantProgramData {
  const firstMeta = parts
    .map((p) => p.programMeta)
    .reduce(
      (acc, cur) => ({
        nameEL: acc.nameEL ?? cur.nameEL,
        shortDescriptionEL: acc.shortDescriptionEL ?? cur.shortDescriptionEL,
        descriptionEL: acc.descriptionEL ?? cur.descriptionEL,
        announcedDate: acc.announcedDate ?? cur.announcedDate,
        submissionDate: acc.submissionDate ?? cur.submissionDate,
        endDate: acc.endDate ?? cur.endDate,
        percentageOfFinance: acc.percentageOfFinance ?? cur.percentageOfFinance,
        minBudget: acc.minBudget ?? cur.minBudget,
        maxBudget: acc.maxBudget ?? cur.maxBudget,
        minimumCompanyYears: acc.minimumCompanyYears ?? cur.minimumCompanyYears,
        minimumEmployees: acc.minimumEmployees ?? cur.minimumEmployees,
        indirectCostPercentage: acc.indirectCostPercentage ?? cur.indirectCostPercentage,
      }),
      {
        nameEL: null,
        shortDescriptionEL: null,
        descriptionEL: null,
        announcedDate: null,
        submissionDate: null,
        endDate: null,
        percentageOfFinance: null,
        minBudget: null,
        maxBudget: null,
        minimumCompanyYears: null,
        minimumEmployees: null,
        indirectCostPercentage: null,
      } as ParsedGrantProgramData["programMeta"]
    );
  const requirements = parts.flatMap((p) => p.requirements);
  const expenseLimits = parts.flatMap((p) => p.expenseLimits);
  const eligibleKads = Array.from(new Set(parts.flatMap((p) => p.eligibleKads)));
  return { programMeta: firstMeta, requirements, expenseLimits, eligibleKads };
}

export async function parseGrantPdf(text: string): Promise<ParsedGrantProgramData> {
  const content = text?.trim();
  if (!content) {
    return {
      programMeta: {
        nameEL: null,
        shortDescriptionEL: null,
        descriptionEL: null,
        announcedDate: null,
        submissionDate: null,
        endDate: null,
        percentageOfFinance: null,
        minBudget: null,
        maxBudget: null,
        minimumCompanyYears: null,
        minimumEmployees: null,
        indirectCostPercentage: null,
      },
      requirements: [],
      expenseLimits: [],
      eligibleKads: [],
    };
  }

  const words = countWords(content);
  if (words <= WORD_SPLIT_LIMIT) {
    const parsed = await callDeepSeek(content);
    const normalized = normalizeParsedPayload(parsed);
    const kadsChunk = sectionSliceByKeywords(content, [
      "ΠΑΡΑΡΤΗΜΑ ΙΙΙ",
      "Παράρτημα ΙΙΙ",
      "ΕΠΙΛΕΞΙΜΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ (ΚΑΔ)",
      "Επιλέξιμες Δραστηριότητες (ΚΑΔ)",
      "ΠΑΡΑΡΤΗΜΑ: ΕΠΙΛΕΞΙΜΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ (ΚΑΔ)",
      "ΚΑΔ ΕΠΙΛΕΞΙΜΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ",
      "ΕΠΙΛΕΞΙΜΟΙ ΚΑΔ",
      "ΚΑΔ επένδυσης",
    ], 90000);
    const kadSectionForRegex = getKadSectionForExtraction(content, kadsChunk);
    const regexKads = extractKadCodesFromText(kadSectionForRegex);
    if (regexKads.length > 0) {
      normalized.eligibleKads = [...new Set([...normalized.eligibleKads, ...regexKads])];
    }
    return normalized;
  }

  const eligibilityChunk = sectionSliceByKeywords(content, [
    "ΔΙΚΑΙΟΥΧΟΙ",
    "Δικαιούχοι",
    "ΠΡΟΫΠΟΘΕΣΕΙΣ ΣΥΜΜΕΤΟΧΗΣ",
    "Προϋποθέσεις συμμετοχής",
    "Όροι και Προϋποθέσεις Δικαιούχων",
    "Προϋποθέσεις Συμμετοχής",
  ], 90000);
  const expensesChunk = sectionSliceByKeywords(content, [
    "ΕΠΙΛΕΞΙΜΕΣ ΔΑΠΑΝΕΣ",
    "επιλέξιμες δαπάνες",
    "Επιλέξιμες δαπάνες",
  ], 90000);
  const kadsChunk = sectionSliceByKeywords(content, [
    "ΠΑΡΑΡΤΗΜΑ ΙΙΙ",
    "Παράρτημα ΙΙΙ",
    "ΕΠΙΛΕΞΙΜΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ (ΚΑΔ)",
    "Επιλέξιμες Δραστηριότητες (ΚΑΔ)",
    "ΠΑΡΑΡΤΗΜΑ: ΕΠΙΛΕΞΙΜΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ (ΚΑΔ)",
    "ΚΑΔ ΕΠΙΛΕΞΙΜΕΣ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ",
    "ΕΠΙΛΕΞΙΜΟΙ ΚΑΔ",
    "ΚΑΔ επένδυσης",
  ], 90000);
  const overviewChunk = content.slice(0, 120000);

  const [overviewParsed, eligibilityParsed, expensesParsed, kadsParsed] = await Promise.all([
    callDeepSeek(overviewChunk),
    callDeepSeek(eligibilityChunk),
    callDeepSeek(expensesChunk),
    callDeepSeek(kadsChunk),
  ]);

  const merged = mergeParsedPayload([
    normalizeParsedPayload(overviewParsed),
    normalizeParsedPayload(eligibilityParsed),
    normalizeParsedPayload(expensesParsed),
    normalizeParsedPayload(kadsParsed),
  ]);

  const kadSectionForRegex = getKadSectionForExtraction(content, kadsChunk);
  const regexKads = extractKadCodesFromText(kadSectionForRegex);
  if (regexKads.length > 0) {
    merged.eligibleKads = [...new Set([...merged.eligibleKads, ...regexKads])];
  }
  return merged;
}
