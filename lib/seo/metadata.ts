import type { Metadata } from "next";
import { getContentType } from "./registry";

// Fallback OG image shared across pages that don't supply their own.
const FALLBACK_OG_IMAGE =
  "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404641179-7ql2ec.webp";

/**
 * Returns a Next.js `generateMetadata` function for a detail page.
 *
 * Usage in app/services/[slug]/page.tsx:
 *   export const generateMetadata = buildMetadataFor("service");
 */
/**
 * Trim a description to what search engines actually render (~160 chars).
 * Content is authored in the admin without a length limit, so some entries run
 * to 800+ characters and get cut mid-word in the SERP. Cut on a word boundary
 * and strip any HTML the editor left behind.
 */
function clampDescription(raw: string, max = 158): string {
  const text = raw.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[,·—–-]$/, "").trim()}…`;
}

export function buildMetadataFor(typeKey: string) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }): Promise<Metadata> {
    const config = getContentType(typeKey);
    if (!config) return {};

    const { slug } = await params;
    const item = await config.fetchBySlug(slug);

    if (!item) {
      return {
        title: `${config.breadcrumb.singular} not found`,
        robots: { index: false, follow: false },
      };
    }

    const url = `${config.basePath}/${slug}`;
    const description = clampDescription(
      item.description || `${item.title} — ${config.breadcrumb.singular} by DGSOFT.`
    );
    const ogType = config.ogType ?? "article";

    const ogImage = item.image || FALLBACK_OG_IMAGE;
    // Titles over ~60 chars are truncated in results; the layout template adds
    // " | DGSOFT" on top, so leave room for it.
    const title = item.title.length > 52 ? `${item.title.slice(0, 51).trim()}…` : item.title;

    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        type: ogType,
        siteName: "DGSOFT",
        locale: "el_GR",
        alternateLocale: ["en_US"],
        images: [{ url: ogImage, alt: item.title, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  };
}

/** Metadata helper for the listing page of a content type. */
export function buildCollectionMetadataFor(typeKey: string): Metadata {
  const config = getContentType(typeKey);
  if (!config) return {};

  return {
    title: config.collection.name,
    description: config.collection.description,
    alternates: { canonical: config.basePath },
    openGraph: {
      title: `${config.collection.name} — DGSOFT`,
      description: config.collection.description,
      url: config.basePath,
      type: "website",
      siteName: "DGSOFT",
      locale: "el_GR",
      alternateLocale: ["en_US"],
      images: [
        {
          url: FALLBACK_OG_IMAGE,
          alt: config.collection.name,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
