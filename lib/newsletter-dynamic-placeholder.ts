export const NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER = "{{dynamic_content}}";

export type NewsletterBaseTemplateFields = {
  companyName: string;
  logoUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  xUrl: string;
  tagline: string;
  addressLine: string;
  phone: string;
  contactEmail: string;
  privacyPolicyUrl: string;
  termsUrl: string;
  unsubscribeUrl: string;
};

export const NEWSLETTER_BASE_TEMPLATE_DEFAULT_FIELDS: NewsletterBaseTemplateFields = {
  companyName: "DGSoft",
  logoUrl: "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404552985-q91g8r.webp",
  facebookUrl: "#",
  instagramUrl: "#",
  linkedinUrl: "#",
  xUrl: "#",
  tagline: "Innovation in every pixel.",
  addressLine: "123 Digital Avenue, Tech District, 10001",
  phone: "",
  contactEmail: "contact@dgsmart.gr",
  privacyPolicyUrl: "/privacy-policy",
  termsUrl: "/terms",
  unsubscribeUrl: "", // filled per-recipient in sendNewsletterCampaign
};

/**
 * Resolve a URL that may be an absolute URL, a root-relative path (/foo),
 * or a placeholder (#). Root-relative paths are prefixed with
 * NEXT_PUBLIC_SITE_URL (available in both browser and Node.js server contexts).
 * Falls back to "https://www.dgsmart.gr" if the env var is not set.
 */
export function resolveUrl(url: string): string {
  if (!url || url === "#" || url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto:")) {
    return url;
  }
  if (url.startsWith("/")) {
    const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgsmart.gr").replace(/\/$/, "");
    return `${base}${url}`;
  }
  return url;
}

export function baseTemplateContainsPlaceholder(html: string): boolean {
  return html.includes(NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER);
}

export function normalizeBaseTemplateFields(input?: Partial<NewsletterBaseTemplateFields> | null): NewsletterBaseTemplateFields {
  return { ...NEWSLETTER_BASE_TEMPLATE_DEFAULT_FIELDS, ...(input ?? {}) };
}

export function applyBaseTemplateFields(templateHtml: string, fieldsInput?: Partial<NewsletterBaseTemplateFields> | null): string {
  const f = normalizeBaseTemplateFields(fieldsInput);
  return templateHtml
    .split("{{company_name}}").join(f.companyName)
    .split("{{logo_url}}").join(f.logoUrl)
    .split("{{facebook_url}}").join(resolveUrl(f.facebookUrl))
    .split("{{instagram_url}}").join(resolveUrl(f.instagramUrl))
    .split("{{linkedin_url}}").join(resolveUrl(f.linkedinUrl))
    .split("{{x_url}}").join(resolveUrl(f.xUrl))
    .split("{{tagline}}").join(f.tagline)
    .split("{{address_line}}").join(f.addressLine)
    .split("{{phone}}").join(f.phone)
    .split("{{contact_email}}").join(f.contactEmail)
    .split("{{privacy_policy_url}}").join(resolveUrl(f.privacyPolicyUrl))
    .split("{{terms_url}}").join(resolveUrl(f.termsUrl))
    .split("{{unsubscribe_url}}").join(resolveUrl(f.unsubscribeUrl));
}

export function mergeBaseTemplateWithDynamicContent(templateHtml: string, dynamicHtml: string): string {
  return templateHtml.split(NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER).join(dynamicHtml);
}

/** Merge global defaults with per-template overrides (only defined keys in overrides replace global). */
export function effectiveTemplateFields(
  global: NewsletterBaseTemplateFields,
  overrides: Partial<NewsletterBaseTemplateFields> | null | undefined
): NewsletterBaseTemplateFields {
  if (!overrides) return global;
  const merged: NewsletterBaseTemplateFields = { ...global };
  (Object.keys(overrides) as (keyof NewsletterBaseTemplateFields)[]).forEach((k) => {
    const v = overrides[k];
    if (v !== undefined && v !== null) merged[k] = v;
  });
  return merged;
}

/** Drop override keys that match global (so DB stays minimal). */
export function compactFieldOverrides(
  global: NewsletterBaseTemplateFields,
  overrides: Partial<NewsletterBaseTemplateFields>
): Partial<NewsletterBaseTemplateFields> | null {
  const out: Partial<NewsletterBaseTemplateFields> = {};
  let count = 0;
  (Object.keys(overrides) as (keyof NewsletterBaseTemplateFields)[]).forEach((k) => {
    const v = overrides[k];
    if (v === undefined) return;
    if (v === global[k]) return;
    out[k] = v;
    count++;
  });
  return count > 0 ? out : null;
}
