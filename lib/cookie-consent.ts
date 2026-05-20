"use client";

export const CONSENT_STORAGE_KEY = "dg-cookie-consent";
export const CONSENT_EVENT = "dg-cookie-consent-changed";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
};

export function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    return {
      necessary: true,
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      ts: parsed.ts ?? Date.now(),
    };
  } catch {
    return null;
  }
}

export function writeConsent(c: Omit<CookieConsent, "necessary" | "ts">) {
  const value: CookieConsent = {
    necessary: true,
    analytics: c.analytics,
    marketing: c.marketing,
    ts: Date.now(),
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
  } catch {}
  return value;
}
