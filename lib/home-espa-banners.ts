import {
  DEFAULT_ESPA_PDF_URL,
  DEFAULT_ESPA_PDF_BANNER_URL,
} from "@/lib/ariadni-content";

/** First banner — same assets as Ariadne page hero. */
export const HOME_ESPA_BANNER_1 = {
  imageUrl: DEFAULT_ESPA_PDF_BANNER_URL,
  pdfUrl: DEFAULT_ESPA_PDF_URL,
  /** Logo area links to the Greece 2.0 programme site. */
  imageHref: "https://greece20.gov.gr/",
} as const;

export const HOME_ESPA_BANNER_2 = {
  imageUrl: "https://dgsmart.b-cdn.net/espa2Banner.jpg",
  pdfUrl: "https://dgsmart.b-cdn.net/dgsoft-espa2.pdf",
} as const;

/** Third banner — Attiki programme; image and PDF differ per locale. */
export const HOME_ESPA_BANNER_3 = {
  imageUrlEl: "https://dgsoft.b-cdn.net/eu%CE%92anners/Banner_attiki_gr.jpg",
  imageUrlEn: "https://dgsoft.b-cdn.net/eu%CE%92anners/Banner_attiki_en.jpg",
  pdfUrlEl: "https://dgsoft.b-cdn.net/eu%CE%92anners/atttiki_pdf_Gr.pdf",
  pdfUrlEn: "https://dgsoft.b-cdn.net/eu%CE%92anners/attiki_pdf_En.pdf",
} as const;
