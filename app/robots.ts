import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "claude-web",
  "anthropic-ai",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "DuckAssistBot",
  "Cohere-AI",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookBot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  const disallow = ["/admin", "/admin/", "/api/", "/newsletter/unsubscribe"];

  const aiRules = AI_CRAWLERS.map((userAgent) => ({
    userAgent,
    allow: "/",
    disallow,
  }));

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...aiRules,
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
