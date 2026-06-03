import { z } from "zod";

export const TRACKING_TAG_STRATEGIES = [
  "beforeInteractive",
  "afterInteractive",
  "lazyOnload",
] as const;

export const TRACKING_TAG_TYPES = ["custom", "pixel-id"] as const;

export const TRACKING_TAG_CATEGORIES = [
  "necessary",
  "analytics",
  "marketing",
] as const;
export type TrackingTagCategory = (typeof TRACKING_TAG_CATEGORIES)[number];

export const trackingTagSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(120),
  type: z.enum(TRACKING_TAG_TYPES),
  /** For type="pixel-id": which provider (used to render the right snippet). */
  provider: z
    .enum(["facebook-pixel", "google-analytics", "google-tag-manager", "other"])
    .optional(),
  /** For type="pixel-id": the ID (GA-XXXX, GTM-XXXX, FB pixel id). */
  pixelId: z.string().max(120).optional().default(""),
  /** For type="custom": full <script> body or raw JS. */
  scriptBody: z.string().max(20000).optional().default(""),
  /** Optional <noscript> body (e.g. FB pixel img fallback). */
  noscriptBody: z.string().max(5000).optional().default(""),
  strategy: z.enum(TRACKING_TAG_STRATEGIES).default("afterInteractive"),
  enabled: z.boolean().default(true),
  /** Cookie‑consent category that gates this tag. */
  category: z.enum(TRACKING_TAG_CATEGORIES).default("marketing"),
});

export type TrackingTag = z.infer<typeof trackingTagSchema>;

export const siteSettingsSchema = z.object({
  trackingTags: z.array(trackingTagSchema).default([]),
  /** Dedicated Google Analytics 4 Measurement ID (e.g. G-XXXXXXXXXX). */
  ga4MeasurementId: z.string().max(120).optional().default(""),
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;

export const defaultSiteSettings: SiteSettings = {
  trackingTags: [],
  ga4MeasurementId: "",
};

/** Basic GA4 Measurement ID shape: G- followed by alphanumerics. */
export const GA4_ID_PATTERN = /^G-[A-Z0-9]+$/i;

/**
 * Turn the dedicated GA4 Measurement ID into a synthetic tracking tag so it
 * flows through the same consent-gated injection pipeline as the other tags.
 * Returns null when no ID is configured.
 */
export function buildGa4Tag(measurementId: string): TrackingTag | null {
  const id = (measurementId || "").trim();
  if (!id) return null;
  return {
    id: "ga4",
    name: "Google Analytics 4",
    type: "pixel-id",
    provider: "google-analytics",
    pixelId: id,
    scriptBody: "",
    noscriptBody: "",
    strategy: "afterInteractive",
    enabled: true,
    category: "analytics",
  };
}

/**
 * The full list of tracking tags to inject: the dedicated GA4 tag (if set)
 * followed by any manually configured tags.
 */
export function resolveTrackingTags(settings: SiteSettings): TrackingTag[] {
  const ga4 = buildGa4Tag(settings.ga4MeasurementId || "");
  return ga4 ? [ga4, ...settings.trackingTags] : settings.trackingTags;
}

export function parseSiteSettings(raw: unknown): SiteSettings {
  const result = siteSettingsSchema.safeParse(raw ?? {});
  return result.success ? result.data : defaultSiteSettings;
}

/** Extract <script>...</script> inner JS if user pasted full tags. */
export function extractScriptContent(input: string): string {
  if (!input) return "";
  const matches = [...input.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)];
  if (matches.length === 0) return input;
  return matches.map((m) => m[1]).join("\n");
}

/** Build the runtime script body for a tag (handles both custom and pixel-id). */
export function buildTagScript(tag: TrackingTag): string {
  if (tag.type === "custom") {
    return extractScriptContent(tag.scriptBody || "");
  }
  const id = (tag.pixelId || "").trim();
  if (!id) return "";
  switch (tag.provider) {
    case "facebook-pixel":
      return `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${id}');fbq('track','PageView');`;
    case "google-analytics":
      return `(function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${id}';document.head.appendChild(s);})();window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`;
    case "google-tag-manager":
      return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`;
    default:
      return "";
  }
}

/** Default <noscript> body for known providers when user hasn't supplied one. */
export function buildTagNoscript(tag: TrackingTag): string {
  if (tag.noscriptBody) return tag.noscriptBody;
  if (tag.type !== "pixel-id") return "";
  const id = (tag.pixelId || "").trim();
  if (!id) return "";
  if (tag.provider === "facebook-pixel") {
    return `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1" />`;
  }
  if (tag.provider === "google-tag-manager") {
    return `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  }
  return "";
}
