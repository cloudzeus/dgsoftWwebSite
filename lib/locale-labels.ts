/**
 * Consistent labels for Greek (EL) and English (EN) across the site and admin.
 * Use these so UI always shows "Ελληνικά" / "English" instead of mixed "Greek"/"English".
 */
export const LOCALE_LABELS = {
  el: "Ελληνικά",
  en: "English",
} as const;

export function getLocaleLabel(locale: "el" | "en"): string {
  return LOCALE_LABELS[locale];
}
