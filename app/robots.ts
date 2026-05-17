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

  // Note: do NOT emit a `host:` directive. It's a Yandex-specific extension
  // that Google ignores and that strict robots.txt validators (Lighthouse,
  // Search Console) flag as a syntax error. Canonicalization is handled by
  // the www → non-www redirect in next.config.js instead.
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...aiRules,
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
