import { getSiteUrl } from "@/lib/site-url";
import { getContentType } from "@/lib/seo/registry";

export const revalidate = 3600;

/**
 * RSS 2.0 feed of the blog.
 *
 * Aggregators still use it, and several AI crawlers treat a feed as the
 * cheapest way to notice new content — worth having for a site publishing
 * regularly. Content is Greek, matching what crawlers actually receive.
 */

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const config = getContentType("article");
  const items = config ? await config.fetchAll() : [];

  const entries = items
    .slice(0, 30)
    .map((item) => {
      const link = `${siteUrl}/blog/${item.slug}`;
      const date = item.updatedAt ?? item.createdAt ?? new Date();
      const description = stripHtml(item.description ?? "").slice(0, 400);
      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      ${description ? `<description>${escapeXml(description)}</description>` : ""}
      ${item.image ? `<enclosure url="${escapeXml(item.image)}" type="image/webp" />` : ""}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DGSOFT — Νέα &amp; Άρθρα</title>
    <link>${siteUrl}/blog</link>
    <description>Αναλύσεις για ERP, ΕΣΠΑ, παραγωγή και ψηφιακό μετασχηματισμό από την ομάδα της DGSOFT.</description>
    <language>el-GR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
