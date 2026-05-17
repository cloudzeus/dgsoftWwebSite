/**
 * Reusable SEO components for any page.
 *
 *   <PageSeo type="service" slug={slug} />
 *   <CollectionPageSeo type="service" />
 *
 * Reads from lib/seo/registry. Adding a new content type to the registry is the
 * only step required — these components and the sitemap/llms-full route pick it
 * up automatically.
 */

import { JsonLd } from "./JsonLd";
import { getContentType } from "@/lib/seo/registry";
import type { SeoItem, SeoContentType, SchemaKind } from "@/lib/seo/types";
import {
  articleLd,
  breadcrumbLd,
  caseStudyLd,
  collectionPageLd,
  jobPostingLd,
  serviceLd,
  videoObjectLd,
  webPageLd,
  type Crumb,
} from "@/lib/jsonld";

function detailSchemaFor(
  kind: SchemaKind,
  item: SeoItem,
  url: string
): unknown {
  switch (kind) {
    case "Service":
      return serviceLd({
        url,
        name: item.title,
        description: item.description ?? undefined,
        image: item.image,
        category: item.category ?? undefined,
        brand: item.brand ?? undefined,
      });
    case "Article":
      return articleLd({
        url,
        headline: item.title,
        description: item.description ?? undefined,
        image: item.image,
        datePublished: item.createdAt ?? undefined,
        dateModified: item.updatedAt ?? undefined,
        authorName: item.authorName ?? null,
      });
    case "JobPosting":
      return jobPostingLd({
        url,
        title: item.title,
        description: item.description ?? undefined,
        city: item.city ?? null,
        employmentType: item.employmentType ?? null,
        datePosted: item.createdAt ?? undefined,
      });
    case "CaseStudy":
      return caseStudyLd({
        url,
        name: item.title,
        description: item.description ?? undefined,
        image: item.image,
        datePublished: item.createdAt ?? undefined,
        dateModified: item.updatedAt ?? undefined,
        customerName: item.customerName ?? null,
      });
    case "DigitalDocument":
      return {
        "@context": "https://schema.org",
        "@type": "DigitalDocument",
        name: item.title,
        url,
        ...(item.description ? { description: item.description } : {}),
        ...(item.image ? { image: item.image } : {}),
        author: { "@id": "/#organization" },
        publisher: { "@id": "/#organization" },
      };
    default:
      return null;
  }
}

function defaultCrumbs(config: SeoContentType, item: SeoItem): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: config.breadcrumb.plural, path: config.basePath },
    { name: item.title, path: `${config.basePath}/${item.slug}` },
  ];
}

/**
 * Emits BreadcrumbList + WebPage + the type-specific schema (Service / Article /
 * JobPosting / CaseStudy / DigitalDocument) for a single content item.
 */
export async function PageSeo({
  type,
  slug,
  crumbs: customCrumbs,
}: {
  type: string;
  slug: string;
  crumbs?: Crumb[];
}) {
  const config = getContentType(type);
  if (!config) return null;

  const item = await config.fetchBySlug(slug);
  if (!item) return null;

  const url = `${config.basePath}/${slug}`;
  const crumbs = customCrumbs ?? defaultCrumbs(config, item);
  const detail = detailSchemaFor(config.schemaKind, item, url);

  return (
    <>
      <JsonLd id={`ld-bc-${type}-${slug}`} data={breadcrumbLd(crumbs)} />
      <JsonLd
        id={`ld-wp-${type}-${slug}`}
        data={webPageLd({
          url,
          name: item.title,
          description: item.description ?? undefined,
          breadcrumb: crumbs,
        })}
      />
      {detail ? (
        <JsonLd id={`ld-${type}-${slug}`} data={detail} />
      ) : null}
      {(item.videos ?? []).map((v, i) => (
        <JsonLd
          key={v.contentUrl}
          id={`ld-video-${type}-${slug}-${i}`}
          data={videoObjectLd({
            url,
            name: v.name || `${item.title} — video ${i + 1}`,
            description: item.description ?? item.title,
            contentUrl: v.contentUrl,
            thumbnailUrl: v.thumbnailUrl,
            uploadDate: item.createdAt ?? undefined,
          })}
        />
      ))}
    </>
  );
}

/**
 * Emits BreadcrumbList + CollectionPage (with ItemList) for a listing page.
 */
export async function CollectionPageSeo({
  type,
  crumbs: customCrumbs,
}: {
  type: string;
  crumbs?: Crumb[];
}) {
  const config = getContentType(type);
  if (!config) return null;

  const items = await config.fetchAll();
  const crumbs =
    customCrumbs ?? [
      { name: "Home", path: "/" },
      { name: config.breadcrumb.plural, path: config.basePath },
    ];

  return (
    <>
      <JsonLd id={`ld-bc-${type}-listing`} data={breadcrumbLd(crumbs)} />
      <JsonLd
        id={`ld-collection-${type}`}
        data={collectionPageLd({
          url: config.basePath,
          name: config.collection.name,
          description: config.collection.description,
          items: items.map((it) => ({
            name: it.title,
            url: `${config.basePath}/${it.slug}`,
          })),
        })}
      />
    </>
  );
}

/**
 * Emits BreadcrumbList + WebPage for a static informational page
 * (e.g. /book-meeting, /privacy-policy, /).
 */
export function StaticPageSeo({
  url,
  name,
  description,
  crumbs,
}: {
  url: string;
  name: string;
  description?: string;
  crumbs?: Crumb[];
}) {
  const trail = crumbs ?? [
    { name: "Home", path: "/" },
    ...(url === "/" ? [] : [{ name, path: url }]),
  ];
  return (
    <>
      <JsonLd id={`ld-bc-static-${url}`} data={breadcrumbLd(trail)} />
      <JsonLd
        id={`ld-wp-static-${url}`}
        data={webPageLd({ url, name, description, breadcrumb: trail })}
      />
    </>
  );
}
