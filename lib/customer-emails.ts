/** Parse EMAIL/EMAILACC: multiple addresses may be separated by ";". Returns trimmed non-empty list. */
function parseEmailList(value: string | null | undefined): string[] {
  if (value == null || typeof value !== "string") return [];
  return value
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

export type EmailFieldKey = "EMAIL" | "EMAILACC" | "CCCEMAILMAR";

const ALL_EMAIL_FIELDS: EmailFieldKey[] = ["EMAIL", "EMAILACC", "CCCEMAILMAR"];

/** Get emails for a customer from selected fields only (each field may contain ";"). Deduplicated by lowercase. */
export function getEmailsForCustomer(
  c: { EMAIL: string | null; EMAILACC: string | null; CCCEMAILMAR?: string | null },
  fields?: EmailFieldKey[] | null
): string[] {
  const use = fields?.length ? fields : ALL_EMAIL_FIELDS;
  const parts: string[] = [];
  if (use.includes("EMAIL")) parts.push(...parseEmailList(c.EMAIL ?? null));
  if (use.includes("EMAILACC")) parts.push(...parseEmailList(c.EMAILACC ?? null));
  if (use.includes("CCCEMAILMAR")) parts.push(...parseEmailList(c.CCCEMAILMAR ?? null));
  const seen = new Set<string>();
  const out: string[] = [];
  for (const e of parts) {
    const lower = e.toLowerCase();
    if (!seen.has(lower)) {
      seen.add(lower);
      out.push(e);
    }
  }
  return out;
}
