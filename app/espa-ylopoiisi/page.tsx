import type { Metadata } from "next";
import { JsonLd } from "@/app/components/JsonLd";
import { FaqJsonLd } from "@/app/components/FaqJsonLd";
import { breadcrumbLd, howToLd, serviceLd, webPageLd } from "@/lib/jsonld";
import { ogImageUrl } from "@/lib/og-image";
import { ESPA_PROCESS } from "@/lib/espa-process";
import EspaClient from "./EspaClient";

const PATH = "/espa-ylopoiisi";
const TITLE = "ΕΣΠΑ & Υλοποίηση Έργου από την Ίδια Ομάδα";
const DESCRIPTION =
  "Φάκελος ΕΣΠΑ και υλοποίηση από μία ομάδα: έλεγχος επιλεξιμότητας, υποβολή, εγκατάσταση Soft1 ERP και πιστοποίηση δαπανών — χωρίς κενά στην παράδοση.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    "ΕΣΠΑ",
    "επιδότηση ΕΣΠΑ",
    "υλοποίηση ΕΣΠΑ",
    "σύμβουλος ΕΣΠΑ",
    "ψηφιακός μετασχηματισμός ΕΣΠΑ",
    "Soft1 ERP ΕΣΠΑ",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: "website",
    siteName: "DGSOFT",
    locale: "el_GR",
    images: [
      {
        url: ogImageUrl({
          title: TITLE,
          subtitle: "Από τον έλεγχο επιλεξιμότητας ως την εκταμίευση",
          kicker: "ΕΣΠΑ",
        }),
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
};

export default function EspaImplementationPage() {
  return (
    <>
      <JsonLd
        id="espa-breadcrumb"
        data={breadcrumbLd([
          { name: "Αρχική", path: "/" },
          { name: "ΕΣΠΑ & Υλοποίηση", path: PATH },
        ])}
      />
      <JsonLd
        id="espa-webpage"
        data={webPageLd({ url: PATH, name: TITLE, description: DESCRIPTION })}
      />
      <JsonLd
        id="espa-service"
        data={serviceLd({
          url: PATH,
          name: "Διαχείριση και υλοποίηση προγραμμάτων ΕΣΠΑ",
          description: DESCRIPTION,
          category: "Χρηματοδοτικά προγράμματα",
        })}
      />
      {/* Steps mirror the numbered list rendered by EspaClient — they must stay
          identical, or the markup is a structured-data violation. */}
      <JsonLd
        id="espa-howto"
        data={howToLd({
          url: PATH,
          name: "Πώς υλοποιείται ένα έργο ΕΣΠΑ, από τον έλεγχο ως την εκταμίευση",
          description: DESCRIPTION,
          steps: ESPA_PROCESS.map(({ name, text }) => ({ name, text })),
        })}
      />
      <FaqJsonLd faqKey="espaImplementation" url={PATH} />

      <EspaClient />
    </>
  );
}
