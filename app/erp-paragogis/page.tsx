import type { Metadata } from "next";
import { JsonLd } from "@/app/components/JsonLd";
import { FaqJsonLd } from "@/app/components/FaqJsonLd";
import { breadcrumbLd, serviceLd, webPageLd } from "@/lib/jsonld";
import { ogImageUrl } from "@/lib/og-image";
import ParagogiClient from "./ParagogiClient";

const PATH = "/erp-paragogis";
const TITLE = "ERP Παραγωγής & Ιχνηλασιμότητα Παρτίδων με Soft1";
const DESCRIPTION =
  "Soft1 ERP για βιομηχανική παραγωγή: συνταγολόγιο και BOM, διαχείριση παρτίδων, ιχνηλασιμότητα, ποιοτικός έλεγχος, κοστολόγηση — και IoT στη γραμμή παραγωγής.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    "ERP παραγωγής",
    "ιχνηλασιμότητα παρτίδων",
    "Soft1 παραγωγή",
    "διαχείριση παρτίδων lot number",
    "συνταγολόγιο BOM ERP",
    "κοστολόγηση παραγωγής",
    "ERP καλλυντικά",
    "ERP τρόφιμα ιχνηλασιμότητα",
    "Soft1 integrator παραγωγή",
    "WMS διαχείριση αποθήκης",
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
          title: "ERP Παραγωγής & Ιχνηλασιμότητα Παρτίδων",
          subtitle: "Soft1 ERP, ποιοτικός έλεγχος και IoT στη γραμμή",
          kicker: "Παραγωγή",
        }),
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
};

export default function ParagogiPage() {
  return (
    <>
      <JsonLd
        id="paragogi-breadcrumb"
        data={breadcrumbLd([
          { name: "Αρχική", path: "/" },
          { name: "ERP Παραγωγής", path: PATH },
        ])}
      />
      <JsonLd
        id="paragogi-webpage"
        data={webPageLd({ url: PATH, name: TITLE, description: DESCRIPTION })}
      />
      <JsonLd
        id="paragogi-service"
        data={serviceLd({
          url: PATH,
          name: "Υλοποίηση Soft1 ERP για βιομηχανική παραγωγή",
          description: DESCRIPTION,
          category: "ERP παραγωγής και ιχνηλασιμότητα",
          brand: "Soft1",
        })}
      />
      <FaqJsonLd faqKey="soft1" url={PATH} />

      <ParagogiClient />
    </>
  );
}
