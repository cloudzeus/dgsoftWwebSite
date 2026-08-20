import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

const ORG_ID = `${getSiteUrl()}/#organization`;

export type Crumb = { name: string; path: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function webPageLd(input: {
  url: string;
  name: string;
  description?: string;
  breadcrumb?: Crumb[];
  inLanguage?: string;
}) {
  const abs = absoluteUrl(input.url);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${abs}#webpage`,
    url: abs,
    name: input.name,
    isPartOf: { "@id": `${getSiteUrl()}/#website` },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: input.inLanguage ?? "el-GR",
    ...(input.description ? { description: input.description } : {}),
    ...(input.breadcrumb
      ? { breadcrumb: { "@id": `${abs}#breadcrumb` } }
      : {}),
  };
}

export function serviceLd(input: {
  url: string;
  name: string;
  description?: string;
  image?: string | null;
  category?: string | null;
  brand?: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(input.url)}#service`,
    name: input.name,
    url: absoluteUrl(input.url),
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Country", name: "Greece" },
      { "@type": "Country", name: "Cyprus" },
    ],
    ...(input.description ? { description: input.description } : {}),
    ...(input.category ? { serviceType: input.category } : {}),
    ...(input.image ? { image: input.image } : {}),
    ...(input.brand ? { brand: { "@type": "Brand", name: input.brand } } : {}),
  };
}

export function articleLd(input: {
  url: string;
  headline: string;
  description?: string;
  image?: string | null;
  datePublished?: Date | string;
  dateModified?: Date | string;
  authorName?: string | null;
  inLanguage?: string;
}) {
  const url = absoluteUrl(input.url);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    headline: input.headline,
    ...(input.description ? { description: input.description } : {}),
    ...(input.image ? { image: [input.image] } : {}),
    ...(input.datePublished
      ? { datePublished: new Date(input.datePublished).toISOString() }
      : {}),
    ...(input.dateModified
      ? { dateModified: new Date(input.dateModified).toISOString() }
      : {}),
    author: input.authorName
      ? { "@type": "Person", name: input.authorName }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: input.inLanguage ?? "el-GR",
  };
}

export function jobPostingLd(input: {
  url: string;
  title: string;
  description?: string;
  datePosted?: Date | string;
  validThrough?: Date | string;
  city?: string | null;
  employmentType?: string | null;
}) {
  const employmentTypeMap: Record<string, string> = {
    "Full-time": "FULL_TIME",
    "Πλήρης απασχόληση": "FULL_TIME",
    "Part-time": "PART_TIME",
    "Μερική απασχόληση": "PART_TIME",
    Contract: "CONTRACTOR",
    Internship: "INTERN",
  };
  const empType = input.employmentType
    ? employmentTypeMap[input.employmentType] ?? "FULL_TIME"
    : "FULL_TIME";

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "@id": `${absoluteUrl(input.url)}#job`,
    title: input.title,
    ...(input.description ? { description: input.description } : {}),
    datePosted: input.datePosted
      ? new Date(input.datePosted).toISOString()
      : new Date().toISOString(),
    ...(input.validThrough
      ? { validThrough: new Date(input.validThrough).toISOString() }
      : {}),
    employmentType: empType,
    hiringOrganization: { "@id": ORG_ID },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: input.city ?? "Περιστέρι",
        addressRegion: "Αττική",
        postalCode: "12133",
        addressCountry: "GR",
      },
    },
    directApply: true,
  };
}

export function collectionPageLd(input: {
  url: string;
  name: string;
  description?: string;
  items: { name: string; url: string }[];
}) {
  const url = absoluteUrl(input.url);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    isPartOf: { "@id": `${getSiteUrl()}/#website` },
    publisher: { "@id": ORG_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: input.items.length,
      itemListElement: input.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: absoluteUrl(it.url),
      })),
    },
  };
}

export function videoObjectLd(input: {
  url: string;
  name: string;
  description?: string | null;
  contentUrl: string;
  thumbnailUrl?: string | null;
  uploadDate?: Date | string | null;
  duration?: string | null;
  /** Set to true for silent / video-only content. Defaults to true since all
   *  DGSOFT videos are decorative loops with no audio track. */
  silent?: boolean;
  /** Spoken-content language; ignored when silent. */
  inLanguage?: string;
}) {
  const abs = absoluteUrl(input.url);
  const upload =
    input.uploadDate ?
      new Date(input.uploadDate).toISOString() :
      new Date().toISOString();
  const silent = input.silent ?? true;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${input.contentUrl}#video`,
    name: input.name,
    description: input.description || input.name,
    contentUrl: input.contentUrl,
    url: abs,
    uploadDate: upload,
    ...(input.thumbnailUrl ? { thumbnailUrl: input.thumbnailUrl } : {}),
    ...(input.duration ? { duration: input.duration } : {}),
    publisher: { "@id": ORG_ID },
    isFamilyFriendly: true,
    // Schema.org accessibility signals for silent video-only content (WCAG SC 1.2.1).
    // Tells search engines + assistive tech that captions are not applicable
    // because the visual track is the entire content.
    ...(silent
      ? {
          accessMode: ["visual"],
          accessModeSufficient: [{ "@type": "ItemList", itemListElement: ["visual"] }],
          accessibilityFeature: ["captions/none-required"],
          // Greek market: spoken language is not applicable to silent video,
          // but inLanguage = el covers the surrounding context.
          inLanguage: input.inLanguage ?? "el",
        }
      : {
          inLanguage: input.inLanguage ?? "el",
        }),
  };
}

export function caseStudyLd(input: {
  url: string;
  name: string;
  description?: string;
  image?: string | null;
  datePublished?: Date | string;
  dateModified?: Date | string;
  customerName?: string | null;
}) {
  const url = absoluteUrl(input.url);
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#case-study`,
    additionalType: "https://schema.org/Article",
    name: input.name,
    headline: input.name,
    url,
    ...(input.description ? { description: input.description } : {}),
    ...(input.image ? { image: [input.image] } : {}),
    ...(input.datePublished
      ? { datePublished: new Date(input.datePublished).toISOString() }
      : {}),
    ...(input.dateModified
      ? { dateModified: new Date(input.dateModified).toISOString() }
      : {}),
    author: { "@id": ORG_ID },
    creator: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(input.customerName
      ? {
          mentions: {
            "@type": "Organization",
            name: input.customerName,
          },
        }
      : {}),
  };
}

export type FaqEntry = { question: string; answer: string };

/**
 * FAQPage markup — the entry point for featured snippets, "People also ask"
 * and voice answers. Google wants the same Q&A visible on the page, so always
 * render this alongside the <Faq> component rather than on its own.
 *
 * Answers are plain text: strip any markup the CMS may carry.
 */
export function faqLd(url: string, entries: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(url)}#faq`,
    isPartOf: { "@id": `${getSiteUrl()}/#website` },
    publisher: { "@id": ORG_ID },
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: e.answer.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
      },
    })),
  };
}

export type HowToStep = { name: string; text: string };

/**
 * HowTo markup for a described process.
 *
 * Google renders these as step carousels and assistants read them aloud, so
 * the steps must match the numbered steps visible on the page. Keep each step
 * to one action with a short explanation.
 */
export function howToLd(input: {
  url: string;
  name: string;
  description?: string | null;
  steps: HowToStep[];
  /** ISO 8601 duration for the whole process, e.g. "P6W" for six weeks. */
  totalTime?: string | null;
}) {
  const url = absoluteUrl(input.url);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    ...(input.totalTime ? { totalTime: input.totalTime } : {}),
    inLanguage: "el-GR",
    publisher: { "@id": ORG_ID },
    step: input.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
      url: `${url}#step-${i + 1}`,
    })),
  };
}

/**
 * LocalBusiness markup for a single office.
 *
 * Distinct from the site-wide Organization node in app/layout: each office is
 * its own place with its own address and coordinates, and is declared a branch
 * of the parent organisation. This is what local packs and map results read.
 */
export function localBusinessLd(input: {
  url: string;
  name: string;
  description?: string | null;
  streetAddress?: string | null;
  city?: string | null;
  zip?: string | null;
  country?: string | null;
  countryCode?: string;
  phone?: string | null;
  email?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  areaServed?: string[];
  /** The Peristeri office is the registered seat; the rest are branches. */
  isHeadquarters?: boolean;
}) {
  const url = absoluteUrl(input.url);
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    // The HQ shares the organisation's @id so the two nodes merge into one
    // entity instead of competing as duplicate businesses at one address.
    "@id": input.isHeadquarters ? ORG_ID : `${url}#localbusiness`,
    name: input.name,
    ...(input.description ? { description: input.description } : {}),
    url,
    // The HQ *is* the organisation's seat, so it resolves to the same entity
    // rather than declaring itself a child of it.
    ...(input.isHeadquarters
      ? {}
      : { parentOrganization: { "@id": ORG_ID }, branchOf: { "@id": ORG_ID } }),
    ...(input.phone ? { telephone: input.phone } : {}),
    ...(input.email ? { email: input.email } : {}),
    priceRange: "€€",
    inLanguage: "el-GR",
    address: {
      "@type": "PostalAddress",
      ...(input.streetAddress ? { streetAddress: input.streetAddress } : {}),
      ...(input.city ? { addressLocality: input.city } : {}),
      ...(input.zip ? { postalCode: input.zip } : {}),
      ...(input.country ? { addressRegion: input.country } : {}),
      addressCountry: input.countryCode ?? "GR",
    },
    ...(input.latitude != null && input.longitude != null
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: input.latitude,
            longitude: input.longitude,
          },
        }
      : {}),
    ...(input.areaServed?.length
      ? { areaServed: input.areaServed.map((name) => ({ "@type": "Place", name })) }
      : {}),
  };
}
