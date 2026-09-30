"use client";

import * as React from "react";
import Script from "next/script";
import { CONSENT_EVENT, readConsent, type CookieConsent } from "@/lib/cookie-consent";

/**
 * Google Consent Mode v2.
 *
 * Why this exists: gating the Google tag entirely behind cookie consent is
 * correct for privacy but makes the tag invisible to Google. Its verifier does
 * not accept cookies, sees no tag, and reports "missing Google tag" — which is
 * what Ads was showing, and which also blocks conversion optimisation.
 *
 * Consent Mode is Google's own answer to that, and the option their setup
 * screen points EEA advertisers to. The library loads on every page, but starts
 * with every storage type DENIED. In that state it sets no cookies and sends
 * only cookieless pings carrying no identifiers — so the tag is detectable and
 * still lawful before any choice is made. Accepting cookies upgrades the
 * relevant signals; declining leaves them denied.
 *
 * This must run BEFORE the tag's own config, so it is injected with
 * beforeInteractive and the defaults go in inline — after the fact would leave
 * a window where storage was allowed by default.
 */

/** Map our two cookie categories onto the four signals Consent Mode v2 defines. */
function toGoogleConsent(c: CookieConsent | null) {
  const analytics = c?.analytics ? "granted" : "denied";
  const marketing = c?.marketing ? "granted" : "denied";
  return {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
  } as const;
}

export function GoogleConsentMode({ enabled }: { enabled: boolean }) {
  React.useEffect(() => {
    if (!enabled) return;

    const push = (c: CookieConsent | null) => {
      // Talk to the same queue gtag uses, whether or not gtag.js has loaded yet.
      window.dataLayer = window.dataLayer || [];
      if (typeof window.gtag !== "function") {
        window.gtag = function (...args: unknown[]) {
          window.dataLayer!.push(args);
        };
      }
      window.gtag("consent", "update", toGoogleConsent(c));
    };

    // Apply whatever the visitor already chose on a previous visit.
    const stored = readConsent();
    if (stored) push(stored);

    const handler = (e: Event) => push((e as CustomEvent<CookieConsent>).detail ?? readConsent());
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <Script id="google-consent-default" strategy="beforeInteractive">
      {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','functionality_storage':'granted','security_storage':'granted','wait_for_update':500});`}
    </Script>
  );
}
