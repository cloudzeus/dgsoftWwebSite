import { JsonLd } from "./JsonLd";
import { faqLd } from "@/lib/jsonld";
import { faqEntries, type FaqKey } from "@/lib/faq-content";

/**
 * Server-rendered FAQPage markup for a set in lib/faq-content.
 *
 * Emitted in Greek: the locale switch is client-side only, so crawlers always
 * receive the Greek rendering of the page and the markup must match the text
 * they actually see. Mismatched markup is a structured-data violation.
 */
export function FaqJsonLd({ faqKey, url }: { faqKey: FaqKey; url: string }) {
  const entries = faqEntries(faqKey, "el");
  if (!entries.length) return null;
  return <JsonLd id={`faq-${faqKey}`} data={faqLd(url, entries)} />;
}
