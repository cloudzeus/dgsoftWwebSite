import type { MetadataRoute } from "next";
import { allContentTypes, staticPages } from "@/lib/seo/registry";
import { getSiteUrl } from "@/lib/site-url";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    entries.push({
      url: `${siteUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  }

  await Promise.all(
    allContentTypes.map(async (type) => {
      if (type.sitemap.includeListing) {
        entries.push({
          url: `${siteUrl}${type.basePath}`,
          lastModified: now,
          changeFrequency: type.sitemap.changeFrequency,
          priority: type.sitemap.listingPriority,
        });
      }
      if (type.sitemap.includeDetail === false) return;
      const items = await type.fetchAll();
      for (const item of items) {
        entries.push({
          url: `${siteUrl}${type.basePath}/${item.slug}`,
          lastModified: item.updatedAt ?? item.createdAt ?? now,
          changeFrequency: type.sitemap.changeFrequency,
          priority: type.sitemap.detailPriority,
        });
      }
    })
  );

  return entries;
}
