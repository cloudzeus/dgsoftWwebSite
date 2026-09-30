"use client";

import { readConsent } from "@/lib/cookie-consent";

/**
 * Report a completed lead action to Google.
 *
 * Two routes, sent together, because they have different prerequisites:
 *
 * 1. A standard GA4 event (generate_lead, sign_up). These need no
 *    configuration here at all — Google Ads imports them as conversions from
 *    its own UI, so lead tracking works the moment this ships. This is the
 *    route that does not depend on anyone pasting a label.
 *
 * 2. The Ads conversion event, when a label has been filled in under Settings.
 *    Labels are optional; without one this half is simply skipped.
 *
 * Both are consent-aware, and neither ever throws — a tracking failure must
 * not break a form the visitor just submitted successfully.
 */

export type ConversionKey =
  | "contact"
  | "booking"
  | "newsletter"
  | "digitalMaturity"
  | "euProgramRequest";

declare global {
  interface Window {
    /** Ads id + labels, injected by ConversionConfig so client forms can read them. */
    __dgAds?: { id: string; labels: Partial<Record<ConversionKey, string>> };
  }
}

/**
 * The GA4 recommended event for each action, plus a readable method name.
 *
 * Recommended events are used rather than invented ones because Google Ads and
 * GA4 both understand them out of the box — an arbitrary event name would have
 * to be registered as a custom conversion first.
 */
const GA4_EVENTS: Record<ConversionKey, { event: string; method: string }> = {
  contact: { event: "generate_lead", method: "contact_form" },
  booking: { event: "generate_lead", method: "meeting_booking" },
  digitalMaturity: { event: "generate_lead", method: "digital_maturity" },
  euProgramRequest: { event: "generate_lead", method: "espa_request" },
  newsletter: { event: "sign_up", method: "newsletter" },
};

export function trackConversion(key: ConversionKey, params?: { value?: number; currency?: string }) {
  try {
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;

    const consent = readConsent();
    const value = params?.value ?? 1;
    const currency = params?.currency ?? "EUR";

    // ── 1. GA4 event ────────────────────────────────────────────────────
    // Analytics consent governs this one. Ads can import it as a conversion
    // without any label being configured here.
    if (consent?.analytics) {
      const ga4 = GA4_EVENTS[key];
      window.gtag("event", ga4.event, {
        method: ga4.method,
        value,
        currency,
      });
    }

    // ── 2. Ads conversion ───────────────────────────────────────────────
    // Advertising, so it needs marketing consent — and a label, which is
    // optional configuration. Skipped silently when either is missing.
    const ads = window.__dgAds;
    const label = ads?.labels?.[key]?.trim();
    if (consent?.marketing && ads?.id && label) {
      window.gtag("event", "conversion", {
        send_to: `${ads.id}/${label}`,
        value,
        currency,
      });
    }
  } catch {
    // Never let analytics break a successful submission.
  }
}
