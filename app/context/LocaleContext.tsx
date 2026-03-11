"use client";

import * as React from "react";

const STORAGE_KEY = "dgsoft-locale";

export type Locale = "el" | "en";

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "el";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "el") return stored;
  } catch {}
  return "el";
}

const LocaleContext = React.createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
}>({ locale: "el", setLocale: () => {} });

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("el");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setLocaleState(getStoredLocale());
    setMounted(true);
  }, []);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next === "el" ? "el" : "en";
    } catch {}
  }, []);

  React.useEffect(() => {
    if (mounted) document.documentElement.lang = locale === "el" ? "el" : "en";
  }, [locale, mounted]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext);
  return ctx.locale;
}

export function useSetLocale() {
  return React.useContext(LocaleContext).setLocale;
}

export function useLocaleContent<T>(el: T, en: T | null | undefined): T {
  const locale = useLocale();
  if (locale === "en" && en != null && en !== "") return en;
  return el;
}
