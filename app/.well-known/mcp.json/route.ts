/**
 * Stub /.well-known/mcp.json for AI agent discoverability checks.
 *
 * DGSOFT doesn't run an MCP server, so this advertises the human/LLM context
 * resources (llms.txt + llms-full.txt) instead of MCP tools. AI visibility
 * audits ping this URL to confirm the site has been audit-aware.
 *
 * Update `version` when the entity profile is significantly refreshed.
 */

import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const siteUrl = getSiteUrl();

  const body = {
    name: "DGSOFT",
    version: "1.0.0",
    description:
      "DGSOFT (also operating as DGSMART) is a Greek digital innovation studio. SoftOne ERP partner, EU funding programme deliveries (ΕΣΠΑ), bespoke software for SMEs and large enterprises across Greece and Cyprus.",
    publisher: {
      name: "DGSOFT",
      url: siteUrl,
      email: "connect@dgsmart.gr",
    },
    // Human/LLM-readable context — see https://llmstxt.org/
    resources: [
      {
        uri: `${siteUrl}/llms.txt`,
        name: "Brand context (llms.txt)",
        description: "Short overview, primary pages, and citation guidance.",
        mimeType: "text/plain",
      },
      {
        uri: `${siteUrl}/llms-full.txt`,
        name: "Comprehensive entity profile (llms-full.txt)",
        description:
          "Full services catalogue, EU programmes, case studies, locations, and citation guidance.",
        mimeType: "text/plain",
      },
      {
        uri: `${siteUrl}/sitemap.xml`,
        name: "XML sitemap",
        description: "All canonical URLs for crawlers.",
        mimeType: "application/xml",
      },
    ],
    // No MCP tools or prompts — this site is a content surface, not an MCP server.
    tools: [],
    prompts: [],
    links: {
      homepage: siteUrl,
      sitemap: `${siteUrl}/sitemap.xml`,
      robots: `${siteUrl}/robots.txt`,
      llms: `${siteUrl}/llms.txt`,
      llmsFull: `${siteUrl}/llms-full.txt`,
    },
  };

  return new Response(JSON.stringify(body, null, 2), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=86400, s-maxage=86400",
      "access-control-allow-origin": "*",
    },
  });
}
