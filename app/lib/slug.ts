const MAX_SLUG_LENGTH = 60;

/** Simple Greek → Latin transliteration for slug generation */
const GREEK_TO_LATIN: Record<string, string> = {
  α: "a", β: "b", γ: "g", δ: "d", ε: "e", ζ: "z", η: "i", θ: "th", ι: "i", κ: "k",
  λ: "l", μ: "m", ν: "n", ξ: "x", ο: "o", π: "p", ρ: "r", σ: "s", ς: "s", τ: "t",
  υ: "y", φ: "f", χ: "ch", ψ: "ps", ω: "o",
  Α: "a", Β: "b", Γ: "g", Δ: "d", Ε: "e", Ζ: "z", Η: "i", Θ: "th", Ι: "i", Κ: "k",
  Λ: "l", Μ: "m", Ν: "n", Ξ: "x", Ο: "o", Π: "p", Ρ: "r", Σ: "s", Τ: "t", Υ: "y",
  Φ: "f", Χ: "ch", Ψ: "ps", Ω: "o",
};

/**
 * Generates a short, URL-safe slug from a title (e.g. Greek or English).
 * Keeps only letters, numbers, and hyphens; max length 60.
 */
export function toShortSlug(title: string, maxLength: number = MAX_SLUG_LENGTH): string {
  if (!title || typeof title !== "string") return "project";

  let s = title.trim();
  let out = "";

  for (const char of s) {
    if (GREEK_TO_LATIN[char] !== undefined) {
      out += GREEK_TO_LATIN[char];
    } else if (/[a-zA-Z0-9]/.test(char)) {
      out += char.toLowerCase();
    } else if (/[\s\-_]+/.test(char)) {
      if (out.length > 0 && out.at(-1) !== "-") out += "-";
    }
    if (out.length >= maxLength) break;
  }

  const slug = out.replace(/-+/g, "-").replace(/^-|-$/g, "") || "project";
  return slug.slice(0, maxLength);
}

/**
 * Ensures slug is short and URL-safe. If current slug is empty or too long, generates from title.
 */
export function normalizeWorkSlug(
  slug: string | null | undefined,
  titleEL: string | null | undefined,
  titleEN: string | null | undefined
): string {
  const title = (titleEN && titleEN.trim()) || (titleEL && titleEL.trim()) || "";
  const short = toShortSlug(title);

  if (!slug || typeof slug !== "string") return short;
  const trimmed = slug.trim();
  if (trimmed.length <= MAX_SLUG_LENGTH && /^[a-z0-9\-]+$/.test(trimmed)) return trimmed;
  return short;
}
