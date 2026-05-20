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

export function TrackingTags({ tags }: { tags: TrackingTag[] }) {
  const pathname = usePathname();
  const [consent, setConsent] = React.useState<CookieConsent | null>(null);

  React.useEffect(() => {
    setConsent(readConsent());
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<CookieConsent>).detail;
      setConsent(detail ?? readConsent());
    };
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  const active = tags.filter((t) => {
    if (!t.enabled) return false;
    if (t.category === "necessary") return true;
    if (!consent) return false;
    if (t.category === "analytics") return consent.analytics;
    if (t.category === "marketing") return consent.marketing;
    return false;
  });

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
