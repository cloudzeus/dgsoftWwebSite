// Shared SEO types. A SeoItem is the minimal shape any content type must
// produce so the rest of the SEO system (sitemap, metadata, JSON-LD, llms-full)
// can render it without knowing the source model.

export type SeoItem = {
  slug: string;
  title: string;
  description?: string | null;
  /** Long-form content for llms-full.txt (HTML allowed; will be stripped) */
  longDescription?: string | null;
  image?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  // Optional type-specific extras
  brand?: string | null;
  category?: string | null;
  authorName?: string | null;
  customerName?: string | null;
  city?: string | null;
  employmentType?: string | null;
  budget?: string | null;
  completionDate?: string | null;
  // Bilingual variants (optional) — used by llms-full.txt to emit EN+EL
  titleEL?: string | null;
  titleEN?: string | null;
  descriptionEL?: string | null;
  descriptionEN?: string | null;
  /** Videos attached to this item (hero video + media gallery videos) */
  videos?: VideoMeta[];
};

export type VideoMeta = {
  /** Public URL of the .mp4 (or HLS playlist) */
  contentUrl: string;
  /** Optional poster/thumbnail URL */
  thumbnailUrl?: string | null;
  /** Display name */
  name?: string | null;
};

export type SchemaKind =
  | "Service"
  | "Article"
  | "JobPosting"
  | "CaseStudy"
  | "DigitalDocument";

export type SeoContentType = {
  /** Stable key, used as `<PageSeo type="...">` and in URLs (`buildMetadataFor("...")`) */
  key: string;
  /** Base URL path for this content type, e.g. "/services" */
  basePath: string;
  /** Schema.org type emitted on the detail page */
  schemaKind: SchemaKind;
  /** Open Graph `type` value for detail pages */
  ogType?: "website" | "article";
  /** Breadcrumb display names */
  breadcrumb: { singular: string; plural: string };
  /** Listing-page collection display name + description (for CollectionPage schema) */
  collection: { name: string; description: string };
  /** Sitemap config */
  sitemap: {
    listingPriority: number;
    detailPriority: number;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
    includeListing?: boolean;
    /**
     * Whether each item has a real detail page at `${basePath}/${slug}`.
     * Downloads are served as direct file links from the listing and have no
     * detail route, so emitting per-item URLs would advertise pages that 404.
     * Defaults to true.
     */
    includeDetail?: boolean;
  };
  /** Heading shown in llms-full.txt for this content type's section */
  llmsHeading?: string;
  /** Whether this content type should appear in llms-full.txt */
  includeInLlmsFull?: boolean;
  fetchAll(): Promise<SeoItem[]>;
  fetchBySlug(slug: string): Promise<SeoItem | null>;
};

export type SeoRegistry = Record<string, SeoContentType>;
