import prisma from "@/lib/prisma";

export type CriterionValidation = {
  requirementId: string;
  key: string;
  operator: string;
  expectedValue: string;
  actualValue: unknown;
  isMandatory: boolean;
  passed: boolean;
  errorMessageEL: string;
};

export type ProgramValidationResult = {
  companyId: string;
  programId: string;
  passed: boolean;
  passedCount: number;
  failedCount: number;
  kadMatched: boolean;
  results: CriterionValidation[];
};

function parseScalar(value: string): string | number | boolean {
  const v = value.trim();
  if (v.toLowerCase() === "true") return true;
  if (v.toLowerCase() === "false") return false;
  const n = Number(v);
  if (Number.isFinite(n)) return n;
  return v;
}

function parseValue(raw: string): unknown {
  const t = raw.trim();
  if (!t) return "";
  if ((t.startsWith("[") && t.endsWith("]")) || (t.startsWith("{") && t.endsWith("}"))) {
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  if (t.includes(",") && !t.includes("->")) {
    return t.split(",").map((x) => parseScalar(x));
  }
  return parseScalar(t);
}

function toNumber(v: unknown): number | null {
  if (v == null || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

const LEGAL_FORM_KEY_SET = new Set([
  "legal_form",
  "legalform",
  "legalstatus",
  "νομικημορφη",
  "νομικήμορφή",
]);

const LEGAL_FORM_ALIASES: Record<string, string[]> = {
  AE: ["ΑΕ", "ΑΝΩΝΥΜΗ ΕΤΑΙΡΕΙΑ", "ΑΝΩΝΥΜΟΣ ΕΤΑΙΡΕΙΑ"],
  IKE: ["ΙΚΕ", "Ι.Κ.Ε.", "ΙΔΙΩΤΙΚΗ ΚΕΦΑΛΑΙΟΥΧΙΚΗ ΕΤΑΙΡΕΙΑ"],
  OE: ["ΟΕ", "Ο.Ε.", "ΟΜΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ"],
  EE: ["ΕΕ", "Ε.Ε.", "ΕΤΕΡΟΡΡΥΘΜΗ ΕΤΑΙΡΕΙΑ"],
  ATOMIKI: ["ΑΤΟΜΙΚΗ", "ΑΤΟΜΙΚΗ ΕΠΙΧΕΙΡΗΣΗ"],
};

function normalizeGreek(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.\-_/]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

function isLegalFormKey(key: string): boolean {
  return LEGAL_FORM_KEY_SET.has(normalizeGreek(key).replace(/\s+/g, "").toLowerCase());
}

function expandLegalFormCandidates(value: unknown): Set<string> {
  const out = new Set<string>();
  const source = String(value ?? "")
    .split(",")
    .map((x) => normalizeGreek(x))
    .filter(Boolean);

  for (const token of source) {
    out.add(token);
    for (const [abbr, aliases] of Object.entries(LEGAL_FORM_ALIASES)) {
      if (normalizeGreek(abbr) === token || aliases.some((alias) => normalizeGreek(alias) === token)) {
        out.add(normalizeGreek(abbr));
        for (const alias of aliases) out.add(normalizeGreek(alias));
      }
    }
  }
  return out;
}

function compare(actual: unknown, operator: string, expectedRaw: string, key?: string): boolean {
  const expected = parseValue(expectedRaw);
  const op = operator.trim().toUpperCase();
  const legalFormMode = key ? isLegalFormKey(key) : false;

  if (op === "IN") {
    if (legalFormMode) {
      const expectedCandidates = expandLegalFormCandidates(expected);
      const actualCandidates = expandLegalFormCandidates(actual);
      for (const candidate of actualCandidates) {
        if (expectedCandidates.has(candidate)) return true;
      }
      return false;
    }
    const list = Array.isArray(expected) ? expected : [expected];
    return list.map((x) => String(x).trim().toLowerCase()).includes(String(actual ?? "").trim().toLowerCase());
  }
  if (op === "NOT_IN") {
    const list = Array.isArray(expected) ? expected : [expected];
    return !list.map((x) => String(x).trim().toLowerCase()).includes(String(actual ?? "").trim().toLowerCase());
  }
  if (op === "CONTAINS") {
    return String(actual ?? "").toLowerCase().includes(String(expected).toLowerCase());
  }

  const aNum = toNumber(actual);
  const eNum = toNumber(expected);
  if (aNum != null && eNum != null) {
    if (op === ">" || op === "GT") return aNum > eNum;
    if (op === ">=" || op === "GTE") return aNum >= eNum;
    if (op === "<" || op === "LT") return aNum < eNum;
    if (op === "<=" || op === "LTE") return aNum <= eNum;
    if (op === "==" || op === "=" || op === "EQ") return aNum === eNum;
    if (op === "!=" || op === "<>" || op === "NEQ") return aNum !== eNum;
  }

  const a = String(actual ?? "").trim().toLowerCase();
  const e = String(expected ?? "").trim().toLowerCase();
  if (op === "==" || op === "=" || op === "EQ") return a === e;
  if (op === "!=" || op === "<>" || op === "NEQ") return a !== e;
  return false;
}

function yearsSince(dateValue: Date | null): number | null {
  if (!dateValue) return null;
  const now = new Date();
  let years = now.getFullYear() - dateValue.getFullYear();
  const monthDiff = now.getMonth() - dateValue.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dateValue.getDate())) years--;
  return years;
}

function getActualValueForKey(company: Record<string, unknown>, key: string): unknown {
  const normalized = key.trim().toLowerCase();
  if (normalized === "min_closed_years") {
    return yearsSince((company.registDate as Date | null) ?? null);
  }
  if (normalized === "de_minimis_3y" || normalized === "totaldeminimis3years") {
    return company.totalDeMinimis3Years ?? 0;
  }
  if (normalized === "legal_form" || normalized === "legalform") {
    return company.legalForm ?? company.legalStatus ?? null;
  }
  return company[key as keyof typeof company];
}

function normalizeKad(value: string): string {
  return value.replace(/\./g, "").replace(/\s+/g, "").trim();
}

function hasKadPrefixMatch(companyKads: string[], programKads: string[]): boolean {
  if (programKads.length === 0) return true;
  for (const c of companyKads) {
    for (const p of programKads) {
      if (c.startsWith(p)) return true;
    }
  }
  return false;
}

export async function validateCompany(companyId: string, programId: string): Promise<ProgramValidationResult> {
  const [program, company] = await Promise.all([
    prisma.euProgram.findUnique({
      where: { id: programId },
      select: {
        id: true,
        kads: {
          select: {
            kad: { select: { code: true, dotcode: true } }
          }
        },
        requirements: {
          orderBy: { createdAt: "asc" },
          select: {
            id: true,
            key: true,
            operator: true,
            value: true,
            isMandatory: true,
            errorMessageEL: true,
          },
        },
      },
    }),
    prisma.tRDR.findUnique({
      where: { id: companyId },
      include: {
        kads: {
          select: { firm_act_code: true }
        },
        financials: {
          orderBy: { year: "desc" },
          take: 1,
        },
      },
    }),
  ]);

  if (!program) throw new Error("Program not found");
  if (!company) throw new Error("Company not found");

  const latestFinancial = company.financials[0] ?? null;
  const companyKadPrefixes = company.kads.map((k) => normalizeKad(k.firm_act_code)).filter(Boolean);
  const programKadPrefixes = program.kads
    .map((k) => normalizeKad(k.kad.dotcode || k.kad.code))
    .filter(Boolean);
  const kadMatched = hasKadPrefixMatch(companyKadPrefixes, programKadPrefixes);

  const scope: Record<string, unknown> = {
    ...company,
    totalDeMinimis3Years: latestFinancial?.totalDeMinimis3Years ?? 0,
    turnover: latestFinancial?.turnover ?? null,
    ebitda: latestFinancial?.ebitda ?? null,
    netProfit: latestFinancial?.netProfit ?? null,
    eme: latestFinancial?.eme ?? null,
    assets: latestFinancial?.assets ?? null,
    equity: latestFinancial?.equity ?? null,
  };

  const results: CriterionValidation[] = program.requirements.map((req) => {
    const actualValue = getActualValueForKey(scope, req.key);
    const passed = compare(actualValue, req.operator, req.value, req.key);
    return {
      requirementId: req.id,
      key: req.key,
      operator: req.operator,
      expectedValue: req.value,
      actualValue,
      isMandatory: req.isMandatory,
      passed,
      errorMessageEL: req.errorMessageEL,
    };
  });

  if (programKadPrefixes.length > 0) {
    results.unshift({
      requirementId: "KAD_PREFIX_MATCH",
      key: "eligibleKads",
      operator: "STARTS_WITH_ANY",
      expectedValue: programKadPrefixes.join(","),
      actualValue: companyKadPrefixes.join(","),
      isMandatory: true,
      passed: kadMatched,
      errorMessageEL: "Η εταιρεία δεν διαθέτει επιλέξιμο ΚΑΔ για το πρόγραμμα.",
    });
  }

  const failedMandatory = results.filter((r) => !r.passed && r.isMandatory);
  return {
    companyId,
    programId,
    passed: failedMandatory.length === 0,
    passedCount: results.filter((r) => r.passed).length,
    failedCount: results.filter((r) => !r.passed).length,
    kadMatched,
    results,
  };
}

export async function validateCompanyForProgram(companyId: string, programId: string): Promise<ProgramValidationResult> {
  return validateCompany(companyId, programId);
}
