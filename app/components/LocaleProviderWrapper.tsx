"use client";

import { LocaleProvider } from "../context/LocaleContext";

export default function LocaleProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
