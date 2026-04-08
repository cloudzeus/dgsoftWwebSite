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
  contactEmail: "contact@dgsmart.gr",
  privacyPolicyUrl: "#",
  termsUrl: "#",
  unsubscribeUrl: "#",
};

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
    .split("{{facebook_url}}").join(f.facebookUrl)
    .split("{{instagram_url}}").join(f.instagramUrl)
    .split("{{linkedin_url}}").join(f.linkedinUrl)
    .split("{{x_url}}").join(f.xUrl)
    .split("{{tagline}}").join(f.tagline)
    .split("{{address_line}}").join(f.addressLine)
    .split("{{contact_email}}").join(f.contactEmail)
    .split("{{privacy_policy_url}}").join(f.privacyPolicyUrl)
    .split("{{terms_url}}").join(f.termsUrl)
    .split("{{unsubscribe_url}}").join(f.unsubscribeUrl);
}

export function mergeBaseTemplateWithDynamicContent(templateHtml: string, dynamicHtml: string): string {
  return templateHtml.split(NEWSLETTER_DYNAMIC_CONTENT_PLACEHOLDER).join(dynamicHtml);
}
