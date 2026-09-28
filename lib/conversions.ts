"use client";

import { readConsent } from "@/lib/cookie-consent";

/**
 * Report a Google Ads conversion from the browser.
 *
 * Placing the AW- tag only counts visits. A conversion has to be fired
 * explicitly at the moment the action succeeds, which is what this does.
 *
 * Three things it deliberately gets right:
 *
 * 1. Consent. Ads is advertising, so nothing is sent unless the visitor
 *    accepted marketing cookies — the same gate that decides whether the tag
 *    loaded at all. Firing without it would leak a signal the visitor refused.
 * 2. Missing configuration is silent. A label that has not been filled in yet
 *    is a normal state, not an error; the form still works.
 * 3. It never throws. A tracking failure must not break a form the user just
 *    submitted successfully.
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

export function trackConversion(key: ConversionKey, params?: { value?: number; currency?: string }) {
  try {
    if (typeof window === "undefined") return;

    const ads = window.__dgAds;
    const label = ads?.labels?.[key]?.trim();
    // No Ads tag configured, or no label for this action yet — nothing to do.
    if (!ads?.id || !label) return;

    if (!readConsent()?.marketing) return;
    if (typeof window.gtag !== "function") return;

    window.gtag("event", "conversion", {
      send_to: `${ads.id}/${label}`,
      ...(params?.value != null ? { value: params.value } : {}),
      ...(params?.currency ? { currency: params.currency } : {}),
    });
  } catch {
    // Never let analytics break a successful submission.
  }
}
