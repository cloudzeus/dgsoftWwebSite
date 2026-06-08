export const NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER = "{{dynamic_content}}";

export type NewsletterBaseTemplateFields = {
  companyName: string;
  logoUrl: string;
  websiteUrl: string;
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
  websiteUrl: "",
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

/** A blank link is one the admin left empty or at the placeholder "#" — its icon/link should be hidden. */
function isBlankLink(value: string): boolean {
  const v = (value ?? "").trim();
  return v === "" || v === "#";
}

/**
 * Remove the <a> that points at an empty placeholder so no broken/empty icon renders.
 * Handles three template shapes: a table-cell-wrapped icon (<td><a>…</a></td>),
 * a text-list item with a trailing <br />, and a plain inline icon.
 */
function stripEmptyLink(html: string, placeholder: string): string {
  const ph = placeholder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const anchor = `<a\\s+href="\\{\\{${ph}\\}\\}"[^>]*>[\\s\\S]*?<\\/a>`;
  // table-cell variant: drop the whole single-purpose cell so no empty column remains
  html = html.replace(new RegExp(`<td[^>]*>\\s*${anchor}\\s*</td>`, "g"), "");
  // inline / text-list variant: drop the anchor plus a trailing <br /> if present
  html = html.replace(new RegExp(`${anchor}\\s*(?:<br\\s*/?>)?`, "g"), "");
  return html;
}

/** Placeholders whose enclosing link is removed entirely when the value is blank. */
const LINKABLE_FIELDS: { placeholder: string; get: (f: NewsletterBaseTemplateFields) => string }[] = [
  { placeholder: "facebook_url",  get: (f) => f.facebookUrl },
  { placeholder: "instagram_url", get: (f) => f.instagramUrl },
  { placeholder: "linkedin_url",  get: (f) => f.linkedinUrl },
  { placeholder: "x_url",         get: (f) => f.xUrl },
  { placeholder: "website_url",   get: (f) => f.websiteUrl },
];

export function applyBaseTemplateFields(templateHtml: string, fieldsInput?: Partial<NewsletterBaseTemplateFields> | null): string {
  const f = normalizeBaseTemplateFields(fieldsInput);
  let html = templateHtml;

  // Point the logo (hard-coded href="#") at the main website when one is set.
  const website = resolveUrl(f.websiteUrl);
  if (website && website !== "#") {
    html = html.replace(
      /<a href="#"(\s+style="text-decoration:none;">\s*<img src="\{\{logo_url\}\}")/g,
      `<a href="${website}"$1`
    );
  }

  // Hide any social/website icon whose URL is blank, before substituting values in.
  for (const { placeholder, get } of LINKABLE_FIELDS) {
    if (isBlankLink(get(f))) html = stripEmptyLink(html, placeholder);
  }

  // Social icon images (white lucide PNGs served from the app's /public — match the website).
  const iconBase = `${(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dgsmart.gr").replace(/\/$/, "")}/newsletter-icons`;

  return html
    .split("{{company_name}}").join(f.companyName)
    .split("{{logo_url}}").join(f.logoUrl)
    .split("{{website_url}}").join(resolveUrl(f.websiteUrl))
    .split("{{facebook_url}}").join(resolveUrl(f.facebookUrl))
    .split("{{instagram_url}}").join(resolveUrl(f.instagramUrl))
    .split("{{linkedin_url}}").join(resolveUrl(f.linkedinUrl))
    .split("{{x_url}}").join(resolveUrl(f.xUrl))
    .split("{{icon_facebook}}").join(`${iconBase}/facebook.png`)
    .split("{{icon_instagram}}").join(`${iconBase}/instagram.png`)
    .split("{{icon_linkedin}}").join(`${iconBase}/linkedin.png`)
    .split("{{icon_twitter}}").join(`${iconBase}/twitter.png`)
    .split("{{icon_website}}").join(`${iconBase}/website.png`)
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
