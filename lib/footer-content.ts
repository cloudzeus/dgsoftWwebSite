import { z } from "zod";

export const FOOTER_SOCIAL_ICONS = [
  "facebook",
  "linkedin",
  "twitter",
  "instagram",
  "github",
  "youtube",
  "tiktok",
  "mail",
] as const;

export type FooterSocialIcon = (typeof FOOTER_SOCIAL_ICONS)[number];

const socialSchema = z.object({
  icon: z.enum(FOOTER_SOCIAL_ICONS),
  href: z.string(),
  label: z.string(),
});

const linkSchema = z.object({
  name: z.string(),
  href: z.string(),
});

const columnSchema = z.object({
  heading: z.string(),
  links: z.array(linkSchema),
});

export const footerLocaleContentSchema = z.object({
  brandPrefix: z.string(),
  brandHighlight: z.string(),
  tagline: z.string(),
  socials: z.array(socialSchema),
  columns: z.array(columnSchema).length(3),
  copyright: z.string(),
  backToTop: z.string(),
});

export type FooterLocaleContent = z.infer<typeof footerLocaleContentSchema>;
export type FooterSocial = z.infer<typeof socialSchema>;
export type FooterLink = z.infer<typeof linkSchema>;
export type FooterColumn = z.infer<typeof columnSchema>;

/** Replace `{{year}}` with the current year. */
export function renderCopyright(template: string): string {
  return template.replace(/\{\{\s*year\s*\}\}/g, String(new Date().getFullYear()));
}

export const defaultFooterContentEL: FooterLocaleContent = {
  brandPrefix: "DG",
  brandHighlight: "SOFT",
  tagline:
    "Επιταχύνουμε την ανάπτυξη μέσω τεχνολογίας και δημιουργικής καινοτομίας. Ο αξιόπιστος συνεργάτης σας στον ψηφιακό μετασχηματισμό.",
  socials: [
    {
      icon: "facebook",
      href: "https://www.facebook.com/softsoftwaredg",
      label: "Facebook",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/company/dgsoft/posts/?feedView=all",
      label: "LinkedIn",
    },
    { icon: "twitter", href: "#", label: "Twitter" },
    {
      icon: "instagram",
      href: "https://www.instagram.com/direct/t/17843988246377755/",
      label: "Instagram",
    },
    { icon: "github", href: "#", label: "GitHub" },
  ],
  columns: [
    {
      heading: "Λύσεις",
      links: [
        { name: "Ariadne Service Hub", href: "/ariadni" },
        { name: "SaaS Πλατφόρμες", href: "/services" },
        { name: "Ψηφιακός Μετασχηματισμός", href: "/services" },
        { name: "Enterprise ERP", href: "/services" },
      ],
    },
    {
      heading: "Εταιρεία",
      links: [
        { name: "Ποιοι Είμαστε", href: "/#about" },
        { name: "Έργα μας", href: "/works" },
        { name: "Καριέρα", href: "/careers" },
        { name: "Επικοινωνία", href: "/#contact" },
      ],
    },
    {
      heading: "Πόροι",
      links: [
        { name: "Blog / Νέα", href: "/blog" },
        { name: "Downloads", href: "/downloads" },
        { name: "Κατάλογος Υπηρεσιών", href: "/services" },
        { name: "Πολιτική Απορρήτου", href: "/privacy" },
      ],
    },
  ],
  copyright: "© {{year}} DGSOFT. Με την επιφύλαξη παντός δικαιώματος.",
  backToTop: "Επιστροφή στην κορυφή",
};

export const defaultFooterContentEN: FooterLocaleContent = {
  brandPrefix: "DG",
  brandHighlight: "SOFT",
  tagline:
    "Accelerating growth through technology and creative innovation. Your trusted partner for digital transformation.",
  socials: [
    {
      icon: "facebook",
      href: "https://www.facebook.com/softsoftwaredg",
      label: "Facebook",
    },
    {
      icon: "linkedin",
      href: "https://www.linkedin.com/company/dgsoft/posts/?feedView=all",
      label: "LinkedIn",
    },
    { icon: "twitter", href: "#", label: "Twitter" },
    {
      icon: "instagram",
      href: "https://www.instagram.com/direct/t/17843988246377755/",
      label: "Instagram",
    },
    { icon: "github", href: "#", label: "GitHub" },
  ],
  columns: [
    {
      heading: "Solutions",
      links: [
        { name: "Ariadne Service Hub", href: "/ariadni" },
        { name: "SaaS Platforms", href: "/services" },
        { name: "Digital Transformation", href: "/services" },
        { name: "Enterprise ERP", href: "/services" },
      ],
    },
    {
      heading: "Company",
      links: [
        { name: "About Us", href: "/#about" },
        { name: "Our Work", href: "/works" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/#contact" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { name: "Blog / News", href: "/blog" },
        { name: "Downloads", href: "/downloads" },
        { name: "Services Catalog", href: "/services" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ],
  copyright: "© {{year}} DGSOFT. All rights reserved.",
  backToTop: "Back to top",
};

function parseLocaleContent(raw: unknown): FooterLocaleContent | null {
  const r = footerLocaleContentSchema.safeParse(raw);
  return r.success ? r.data : null;
}

export function mergeFooterContent(
  stored: unknown,
  defaults: FooterLocaleContent
): FooterLocaleContent {
  const parsed = parseLocaleContent(stored);
  if (!parsed) return defaults;
  return {
    ...defaults,
    ...parsed,
    socials: parsed.socials?.length > 0 ? parsed.socials : defaults.socials,
    columns:
      parsed.columns?.length === 3 ? parsed.columns : defaults.columns,
  };
}
