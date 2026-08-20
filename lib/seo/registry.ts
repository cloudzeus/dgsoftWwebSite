/**
 * SEO content-type registry.
 *
 * Adding a new content type (e.g. /whitepapers/[slug]) is a single config entry:
 *   1. Add a Prisma model (or a static JSON source).
 *   2. Append an entry here with fetchAll/fetchBySlug returning SeoItem.
 *   3. The sitemap, llms-full.txt, <PageSeo>, <CollectionPageSeo>, and
 *      buildMetadataFor() automatically know about it. No edits elsewhere.
 *
 * Each fetch function is wrapped in React's `cache()` so a single request that
 * calls fetchBySlug from generateMetadata + PageSeo + the page body still only
 * hits the database once.
 */

import { cache } from "react";
import prisma from "@/lib/prisma";
import db from "@/data/db.json";
import type { SeoItem, SeoRegistry, SeoContentType, VideoMeta } from "./types";

function isVideoUrl(url?: string | null): boolean {
  if (!url) return false;
  return /\.(mp4|webm|mov|m3u8)(\?|$)/i.test(url);
}

function collectVideosFromMedia(
  media: Array<{ url: string; mediaType?: string | null; type?: string | null }> | undefined,
  fallbackName: string,
  poster?: string | null
): VideoMeta[] {
  if (!media) return [];
  return media
    .filter((m) => {
      const kind = (m.mediaType || m.type || "").toUpperCase();
      return kind === "VIDEO" || isVideoUrl(m.url);
    })
    .map((m, i) => ({
      contentUrl: m.url,
      thumbnailUrl: poster ?? null,
      name: `${fallbackName} — video ${i + 1}`,
    }));
}

// ─── Adapters: model → SeoItem ────────────────────────────────────────────

// SEO fields lead with Greek across every mapper: the market is Greek-only and
// the locale switch is client-side, so crawlers only ever receive the Greek
// rendering. English remains as a fallback for records that lack a Greek value.
function serviceToSeo(s: any): SeoItem {
  const name = s.nameEL || s.nameEN;
  const heroIsVideo = isVideoUrl(s.featureImage);
  const poster = heroIsVideo ? s.brandLogo || null : s.featureImage || null;
  const videos: VideoMeta[] = [];
  if (heroIsVideo) {
    videos.push({
      contentUrl: s.featureImage,
      thumbnailUrl: poster,
      name: `${name} — hero video`,
    });
  }
  videos.push(...collectVideosFromMedia(s.media, name, poster));
  return {
    slug: s.slug,
    title: name,
    description: s.shortDescriptionEL || s.shortDescriptionEN,
    longDescription: s.descriptionEL || s.descriptionEN,
    image: heroIsVideo ? s.brandLogo || null : s.featureImage || s.brandLogo || null,
    brand: s.brandName || null,
    category: s.category?.nameEL || s.category?.nameEN || null,
    titleEL: s.nameEL,
    titleEN: s.nameEN,
    descriptionEL: s.shortDescriptionEL,
    descriptionEN: s.shortDescriptionEN,
    createdAt: s.createdAt ?? null,
    updatedAt: s.updatedAt ?? null,
    videos: videos.length ? videos : undefined,
  };
}

function workToSeo(w: any): SeoItem {
  const name = w.titleEL || w.titleEN;
  const imageCover =
    w.media?.find((m: any) => m.featured && !isVideoUrl(m.url) && (m.type || "IMAGE").toUpperCase() !== "VIDEO")?.url ||
    w.media?.find((m: any) => !isVideoUrl(m.url) && (m.type || "IMAGE").toUpperCase() !== "VIDEO")?.url ||
    null;
  const videos = collectVideosFromMedia(w.media, name, imageCover);
  return {
    slug: w.slug,
    title: name,
    description: w.challengeEL || w.challengeEN,
    longDescription: w.challengeEL || w.challengeEN,
    image: imageCover,
    customerName: w.customer?.name || null,
    completionDate: w.completionDate || null,
    titleEL: w.titleEL,
    titleEN: w.titleEN,
    descriptionEL: w.challengeEL,
    descriptionEN: w.challengeEN,
    createdAt: w.createdAt ?? null,
    updatedAt: w.updatedAt ?? null,
    videos: videos.length ? videos : undefined,
  };
}

function articleToSeo(a: any): SeoItem {
  const name = a.metaTitleEL || a.metaTitleEN || a.titleEL || a.titleEN;
  const videos = collectVideosFromMedia(a.media, name, a.featureImage);
  return {
    slug: a.slug,
    title: name,
    description:
      a.metaDescriptionEL ||
      a.metaDescriptionEN ||
      a.shortDescriptionEL ||
      a.shortDescriptionEN,
    longDescription: a.descriptionEL || a.descriptionEN,
    image: a.featureImage || null,
    authorName: a.author?.name || a.author?.email || null,
    titleEL: a.titleEL,
    titleEN: a.titleEN,
    descriptionEL: a.shortDescriptionEL,
    descriptionEN: a.shortDescriptionEN,
    createdAt: a.createdAt ?? null,
    updatedAt: a.updatedAt ?? null,
    videos: videos.length ? videos : undefined,
  };
}

function positionToSeo(p: any): SeoItem {
  const city = p.cityEL || p.cityEN || null;
  const type = p.typeEL || p.typeEN || null;
  return {
    slug: p.slug,
    title: p.titleEL || p.titleEN,
    description: stripFirstParagraph(p.descriptionEL || p.descriptionEN) || null,
    longDescription: p.descriptionEL || p.descriptionEN,
    city,
    employmentType: type,
    titleEL: p.titleEL,
    titleEN: p.titleEN,
    descriptionEL: p.descriptionEL,
    descriptionEN: p.descriptionEN,
    createdAt: p.createdAt ?? null,
    updatedAt: p.updatedAt ?? null,
  };
}

function downloadToSeo(d: any): SeoItem {
  return {
    slug: d.slug ?? d.id,
    title: d.nameEL || d.nameEN,
    description: d.descriptionEL || d.descriptionEN,
    longDescription: d.descriptionEL || d.descriptionEN,
    category: d.category || null,
    titleEL: d.nameEL,
    titleEN: d.nameEN,
    descriptionEL: d.descriptionEL,
    descriptionEN: d.descriptionEN,
    createdAt: d.createdAt ?? null,
    updatedAt: d.updatedAt ?? null,
  };
}

// db.json-backed: { slug, el: { title, desc, ... }, en: { ... } }
function jsonEntryToSeo(e: any): SeoItem {
  const titleEL = e.el?.title || null;
  const titleEN = e.en?.title || null;
  const descEL = e.el?.desc || e.el?.shortDesc || null;
  const descEN = e.en?.desc || e.en?.shortDesc || null;
  return {
    slug: e.slug,
    title: titleEL || titleEN || e.slug,
    description: descEL || descEN,
    longDescription: descEL || descEN,
    category: e.el?.category || e.en?.category || null,
    budget: e.el?.amount || e.en?.amount || null,
    titleEL,
    titleEN,
    descriptionEL: descEL,
    descriptionEN: descEN,
  };
}

function stripFirstParagraph(html?: string | null): string | null {
  if (!html) return null;
  const stripped = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return stripped.length > 240 ? stripped.slice(0, 237) + "..." : stripped;
}

async function safe<T>(p: Promise<T>, fallback: T): Promise<T> {
  try {
    return await p;
  } catch {
    return fallback;
  }
}

// ─── Cached fetch functions ───────────────────────────────────────────────

const allServices = cache(async (): Promise<SeoItem[]> => {
  const rows = await safe(
    prisma.service.findMany({
      orderBy: { order: "asc" },
      include: { category: true, media: { orderBy: { order: "asc" } } },
    }),
    []
  );
  return (rows as any[]).map(serviceToSeo);
});

const serviceBySlug = cache(async (slug: string): Promise<SeoItem | null> => {
  const row = await safe(
    prisma.service.findUnique({
      where: { slug },
      include: { category: true, media: { orderBy: { order: "asc" } } },
    }),
    null
  );
  return row ? serviceToSeo(row) : null;
});

const allWorks = cache(async (): Promise<SeoItem[]> => {
  const rows = await safe(
    prisma.work.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
      include: { customer: true, media: true },
    }),
    []
  );
  return (rows as any[]).map(workToSeo);
});

const workBySlug = cache(async (slug: string): Promise<SeoItem | null> => {
  const row = await safe(
    prisma.work.findUnique({
      where: { slug },
      include: { customer: true, media: true },
    }),
    null
  );
  return row ? workToSeo(row) : null;
});

const allArticles = cache(async (): Promise<SeoItem[]> => {
  const rows = await safe(
    prisma.article.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: { author: true, media: { orderBy: { order: "asc" } } },
    }),
    []
  );
  return (rows as any[]).map(articleToSeo);
});

const articleBySlug = cache(async (slug: string): Promise<SeoItem | null> => {
  const row = await safe(
    prisma.article.findUnique({
      where: { slug },
      include: { author: true, media: { orderBy: { order: "asc" } } },
    }),
    null
  );
  return row ? articleToSeo(row) : null;
});

const allPositions = cache(async (): Promise<SeoItem[]> => {
  const rows = await safe(
    prisma.position.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    }),
    []
  );
  if ((rows as any[]).length) return (rows as any[]).map(positionToSeo);
  // Fallback to static JSON if DB has no published positions
  return ((db as any).careers || []).map(jsonEntryToSeo);
});

const positionBySlug = cache(async (slug: string): Promise<SeoItem | null> => {
  const row = await safe(prisma.position.findUnique({ where: { slug } }), null);
  if (row) return positionToSeo(row);
  const fallback = ((db as any).careers || []).find((c: any) => c.slug === slug);
  return fallback ? jsonEntryToSeo(fallback) : null;
});

const allDownloads = cache(async (): Promise<SeoItem[]> => {
  // Currently downloads in DB don't have slugs; fall back to static JSON entries.
  const dbRows = await safe(
    prisma.download.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    }),
    []
  );
  if ((dbRows as any[]).length) return (dbRows as any[]).map(downloadToSeo);
  return ((db as any).downloads || []).map(jsonEntryToSeo);
});

const downloadBySlug = cache(async (slug: string): Promise<SeoItem | null> => {
  const found = ((db as any).downloads || []).find((d: any) => d.slug === slug);
  return found ? jsonEntryToSeo(found) : null;
});

const allEuPrograms = cache(async (): Promise<SeoItem[]> => {
  return ((db as any).euPrograms || []).map(jsonEntryToSeo);
});

const euProgramBySlug = cache(async (slug: string): Promise<SeoItem | null> => {
  const found = ((db as any).euPrograms || []).find((p: any) => p.slug === slug);
  return found ? jsonEntryToSeo(found) : null;
});

// ─── Registry ─────────────────────────────────────────────────────────────

const services: SeoContentType = {
  key: "service",
  basePath: "/services",
  schemaKind: "Service",
  ogType: "website",
  breadcrumb: { singular: "Service", plural: "Solutions" },
  collection: {
    name: "Υπηρεσίες Μηχανογράφησης & Ανάπτυξης Λογισμικού",
    description:
      "Λύσεις Soft1 ERP, custom λογισμικό, web πλατφόρμες και managed IT από τη DGSOFT. Μηχανογράφηση και ψηφιακός μετασχηματισμός για επιχειρήσεις σε Ελλάδα και Κύπρο.",
  },
  sitemap: { listingPriority: 0.9, detailPriority: 0.8, changeFrequency: "weekly", includeListing: true },
  llmsHeading: "Services catalogue (live)",
  includeInLlmsFull: true,
  fetchAll: allServices,
  fetchBySlug: serviceBySlug,
};

const works: SeoContentType = {
  key: "work",
  basePath: "/works",
  schemaKind: "CaseStudy",
  ogType: "article",
  breadcrumb: { singular: "Case Study", plural: "Work" },
  collection: {
    name: "Έργα & Case Studies",
    description:
      "Πραγματικά έργα υλοποίησης ERP, custom λογισμικού και ψηφιακού μετασχηματισμού από τη DGSOFT — με τα προβλήματα που λύθηκαν και τα μετρήσιμα αποτελέσματα.",
  },
  sitemap: { listingPriority: 0.8, detailPriority: 0.7, changeFrequency: "weekly", includeListing: true },
  llmsHeading: "Case studies / selected work",
  includeInLlmsFull: true,
  fetchAll: allWorks,
  fetchBySlug: workBySlug,
};

const articles: SeoContentType = {
  key: "article",
  basePath: "/blog",
  schemaKind: "Article",
  ogType: "article",
  breadcrumb: { singular: "Article", plural: "Blog" },
  collection: {
    name: "Νέα & Άρθρα Τεχνολογίας",
    description:
      "Αναλύσεις για ERP, CRM, AI, ΕΣΠΑ και ψηφιακό μετασχηματισμό από την ομάδα της DGSOFT. Πρακτικές οδηγίες για ελληνικές επιχειρήσεις που εκσυγχρονίζονται.",
  },
  sitemap: { listingPriority: 0.8, detailPriority: 0.7, changeFrequency: "daily", includeListing: true },
  llmsHeading: "Recent articles",
  includeInLlmsFull: true,
  fetchAll: allArticles,
  fetchBySlug: articleBySlug,
};

const positions: SeoContentType = {
  key: "position",
  basePath: "/careers",
  schemaKind: "JobPosting",
  ogType: "article",
  breadcrumb: { singular: "Career", plural: "Careers" },
  collection: {
    name: "Θέσεις Εργασίας",
    description:
      "Ανοιχτές θέσεις εργασίας στη DGSOFT: ERP consultants, developers και μηχανικοί υποστήριξης. Δείτε τις διαθέσιμες θέσεις και στείλτε το βιογραφικό σας.",
  },
  sitemap: { listingPriority: 0.7, detailPriority: 0.6, changeFrequency: "weekly", includeListing: true },
  llmsHeading: "Open positions",
  includeInLlmsFull: true,
  fetchAll: allPositions,
  fetchBySlug: positionBySlug,
};

const downloads: SeoContentType = {
  key: "download",
  basePath: "/downloads",
  schemaKind: "DigitalDocument",
  ogType: "article",
  breadcrumb: { singular: "Download", plural: "Downloads" },
  collection: {
    name: "Οδηγοί & Υλικό Λήψης",
    description:
      "Δωρεάν οδηγοί, whitepapers και τεχνικό υλικό από τη DGSOFT — τεκμηρίωση Soft1 ERP, εργαλεία απομακρυσμένης υποστήριξης και εταιρικό προφίλ.",
  },
  // Downloads are direct file links from the listing; there is no detail page.
  sitemap: { listingPriority: 0.6, detailPriority: 0.5, changeFrequency: "monthly", includeListing: true, includeDetail: false },
  llmsHeading: "Downloads & whitepapers",
  includeInLlmsFull: true,
  fetchAll: allDownloads,
  fetchBySlug: downloadBySlug,
};

const euPrograms: SeoContentType = {
  key: "euProgram",
  basePath: "/eu-programs",
  schemaKind: "Service",
  ogType: "article",
  breadcrumb: { singular: "EU Programme", plural: "EU Programmes" },
  collection: {
    name: "Προγράμματα ΕΣΠΑ & Επιδοτήσεις",
    description:
      "Ενεργά προγράμματα ΕΣΠΑ και επιδοτήσεις για επιχειρήσεις. Η DGSOFT αναλαμβάνει έλεγχο επιλεξιμότητας, υποβολή φακέλου και υλοποίηση του έργου.",
  },
  sitemap: { listingPriority: 0.8, detailPriority: 0.7, changeFrequency: "weekly", includeListing: true },
  llmsHeading: "Active EU Funding Programmes (ΕΣΠΑ)",
  includeInLlmsFull: true,
  fetchAll: allEuPrograms,
  fetchBySlug: euProgramBySlug,
};

export const seoRegistry: SeoRegistry = {
  service: services,
  work: works,
  article: articles,
  position: positions,
  download: downloads,
  euProgram: euPrograms,
};

export const allContentTypes = Object.values(seoRegistry);

export function getContentType(key: string): SeoContentType | undefined {
  return seoRegistry[key];
}

// ─── Static (non-collection) pages registered for sitemap ─────────────────

export type StaticPage = {
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

export const staticPages: StaticPage[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/ariadni", priority: 0.8, changeFrequency: "monthly" },
  { path: "/espa-ylopoiisi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/erp-paragogis", priority: 0.9, changeFrequency: "monthly" },
  { path: "/book-meeting", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];
