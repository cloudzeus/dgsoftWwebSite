"use client";

import * as React from "react";
import type { FooterLocaleContent } from "@/lib/footer-content";

type FooterContextValue = {
  contentEL: FooterLocaleContent;
  contentEN: FooterLocaleContent;
};

const FooterContext = React.createContext<FooterContextValue | null>(null);

export function FooterProvider({
  contentEL,
  contentEN,
  children,
}: FooterContextValue & { children: React.ReactNode }) {
  const value = React.useMemo(
    () => ({ contentEL, contentEN }),
    [contentEL, contentEN]
  );
  return (
    <FooterContext.Provider value={value}>{children}</FooterContext.Provider>
  );
}

export function useFooterContent(): FooterContextValue | null {
  return React.useContext(FooterContext);
}
