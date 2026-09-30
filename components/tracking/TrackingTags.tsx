"use client";

import * as React from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import {
  buildTagNoscript,
  buildTagScript,
  type TrackingTag,
} from "@/lib/site-settings";
import {
  CONSENT_EVENT,
  readConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

/** Providers that honour Google Consent Mode signals. */
function isGoogleProvider(provider: TrackingTag["provider"]): boolean {
  return (
    provider === "google-analytics" ||
    provider === "google-ads" ||
    provider === "google-tag-manager"
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function TrackingTags({ tags }: { tags: TrackingTag[] }) {
  const pathname = usePathname();
  const [consent, setConsent] = React.useState<CookieConsent | null>(null);
  // gtag('config', id) fires exactly one page_view, on the initial load. Every
  // navigation after that is client-side in the App Router, so without this the
  // only page ever recorded is the one a visitor landed on.
  //
  // Tracks the last path reported to GA. Consent arrives after the first render,
  // so the tag mounts on a second pass — keying off "has the path changed since
  // GA went live" avoids double-counting the landing page, which keying off
  // render count did not.
  const lastReported = React.useRef<string | null>(null);

  React.useEffect(() => {
    setConsent(readConsent());
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<CookieConsent>).detail;
      setConsent(detail ?? readConsent());
    };
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  // Computed, not returned on, so the hooks below always run in the same order.
  const isAdmin = !!pathname?.startsWith("/admin");

  const active = (isAdmin ? [] : tags).filter((t) => {
    if (!t.enabled) return false;
    if (t.category === "necessary") return true;

    // Google products run under Consent Mode v2: the library loads on every
    // page but every storage signal starts denied, so no cookies are set and
    // only cookieless pings are sent until the visitor chooses. Loading them
    // unconditionally is what makes the tag detectable by Google's verifier —
    // gating them entirely is why Ads reported a missing tag.
    if (isGoogleProvider(t.provider)) return true;

    // Everything else (Facebook pixel, custom scripts) has no equivalent
    // mechanism and stays fully gated.
    if (!consent) return false;
    if (t.category === "analytics") return consent.analytics;
    if (t.category === "marketing") return consent.marketing;
    return false;
  });

  // Ids of the analytics tags that are currently allowed to run.
  const gaIds = active
    .filter((t) => t.provider === "google-analytics" && t.pixelId)
    .map((t) => (t.pixelId as string).trim());
  const gaKey = gaIds.join(",");

  React.useEffect(() => {
    if (!gaKey || typeof window.gtag !== "function") return;

    // Read the URL here rather than via useSearchParams: that hook would force
    // the whole root layout out of static rendering.
    const page_path = window.location.pathname + window.location.search;

    if (lastReported.current === null) {
      // GA has just come up. gtag('config', …) already counted this page, so
      // record it and send nothing.
      lastReported.current = page_path;
      return;
    }
    if (lastReported.current === page_path) return;
    lastReported.current = page_path;

    for (const id of gaKey.split(",")) {
      window.gtag("event", "page_view", {
        send_to: id,
        page_path,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, gaKey]);

  if (isAdmin) return null;
  if (active.length === 0) return null;

  return (
    <>
      {active.map((tag) => {
        const body = buildTagScript(tag);
        const noscript = buildTagNoscript(tag);
        return (
          <React.Fragment key={tag.id}>
            {body ? (
              <Script
                id={`tracking-${tag.id}`}
                strategy={tag.strategy}
                dangerouslySetInnerHTML={{ __html: body }}
              />
            ) : null}
            {noscript ? (
              <noscript dangerouslySetInnerHTML={{ __html: noscript }} />
            ) : null}
          </React.Fragment>
        );
      })}
    </>
  );
}
