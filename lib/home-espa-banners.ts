import {
  DEFAULT_ESPA_PDF_URL,
  DEFAULT_ESPA_PDF_BANNER_URL,
} from "@/lib/ariadni-content";

/** First banner — same assets as Ariadne page hero. */
export const HOME_ESPA_BANNER_1 = {
  imageUrl: DEFAULT_ESPA_PDF_BANNER_URL,
  pdfUrl: DEFAULT_ESPA_PDF_URL,
} as const;

export const HOME_ESPA_BANNER_2 = {
  imageUrl: "https://dgsmart.b-cdn.net/espa2Banner.jpg",
  pdfUrl: "https://dgsmart.b-cdn.net/dgsoft-espa2.pdf",
} as const;
