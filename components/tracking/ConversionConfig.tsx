"use client";

import * as React from "react";
import type { ConversionKey } from "@/lib/conversions";

/**
 * Publish the Ads id and conversion labels to the browser.
 *
 * The forms that fire conversions are client components scattered across the
 * app; passing settings down to each one would thread props through half the
 * tree. Settings are already loaded once in the root layout, so this exposes
 * them on window for lib/conversions.ts to read.
 *
 * Nothing secret here — the Ads id and labels are visible in the page source of
 * any site running Google Ads.
 */
export function ConversionConfig({
  adsId,
  labels,
}: {
  adsId: string;
  labels: Partial<Record<ConversionKey, string>>;
}) {
  React.useEffect(() => {
    if (!adsId) return;
    window.__dgAds = { id: adsId, labels };
  }, [adsId, labels]);

  return null;
}
