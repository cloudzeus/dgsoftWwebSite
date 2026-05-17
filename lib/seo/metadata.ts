import type { Metadata } from "next";
import { getContentType } from "./registry";

/**
 * Returns a Next.js `generateMetadata` function for a detail page.
 *
 * Usage in app/services/[slug]/page.tsx:
 *   export const generateMetadata = buildMetadataFor("service");
 */
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
    const description =
      item.description ||
      `${item.title} — ${config.breadcrumb.singular} by DGSOFT.`;
    const ogType = config.ogType ?? "article";

    return {
      title: item.title,
      description,
      alternates: { canonical: url },
      openGraph: {
        title: item.title,
        description,
        url,
        type: ogType,
        ...(item.image ? { images: [{ url: item.image, alt: item.title }] } : {}),
      },
      twitter: {
        card: item.image ? "summary_large_image" : "summary",
        title: item.title,
        description,
        ...(item.image ? { images: [item.image] } : {}),
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
    },
  };
}
