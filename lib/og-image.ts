import { absoluteUrl } from "@/lib/site-url";

/**
 * Build the URL of a generated Open Graph card (1200x630), rendered by
 * app/api/og. Previously og:image pointed at the favicon while declaring
 * 1200x630, so every LinkedIn and Facebook share showed a stretched icon.
 *
 * Returns an absolute URL — social crawlers do not resolve relative paths.
 */
export function ogImageUrl(opts: {
  title?: string | null;
  subtitle?: string | null;
  /** Small uppercase label above the title, e.g. "ΕΣΠΑ" or "CASE STUDY". */
  kicker?: string | null;
} = {}): string {
  const params = new URLSearchParams();
  if (opts.title) params.set("title", stripHtml(opts.title).slice(0, 110));
  if (opts.subtitle) params.set("subtitle", stripHtml(opts.subtitle).slice(0, 90));
  if (opts.kicker) params.set("kicker", stripHtml(opts.kicker).slice(0, 40));
  const qs = params.toString();
  return absoluteUrl(`/api/og${qs ? `?${qs}` : ""}`);
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
