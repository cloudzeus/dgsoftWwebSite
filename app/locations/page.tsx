import type { Metadata } from "next";
import { getOfficeLocations } from "@/lib/locations";
import { ogImageUrl } from "@/lib/og-image";
import { JsonLd } from "@/app/components/JsonLd";
import { FaqJsonLd } from "@/app/components/FaqJsonLd";
import LocationsClient from "./LocationsClient";
import { breadcrumbLd, collectionPageLd, localBusinessLd } from "@/lib/jsonld";

export const revalidate = 3600;

const TITLE = "Γραφεία & Παρουσία σε Ελλάδα και Κύπρο";
const DESCRIPTION =
  "Γραφεία DGSOFT σε Περιστέρι Αττικής, Αθήνα, Βόλο, Ρέθυμνο, Ιωάννινα και Λευκωσία. Μηχανογράφηση, Soft1 ERP και υποστήριξη με επιτόπια εξυπηρέτηση σε όλη τη χώρα.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/locations" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/locations",
    type: "website",
    siteName: "DGSOFT",
    locale: "el_GR",
    images: [
      {
        url: ogImageUrl({ title: TITLE, subtitle: "Έξι γραφεία σε Ελλάδα και Κύπρο", kicker: "Γραφεία" }),
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
};

export default async function LocationsPage() {
  const offices = await getOfficeLocations();

  return (
    <>
      <JsonLd
        id="locations-breadcrumb"
        data={breadcrumbLd([
          { name: "Αρχική", path: "/" },
          { name: "Γραφεία", path: "/locations" },
        ])}
      />
      <JsonLd
        id="locations-collection"
        data={collectionPageLd({
          url: "/locations",
          name: TITLE,
          description: DESCRIPTION,
          items: offices.map((o) => ({
            name: `DGSOFT ${o.city.trim()}`,
            url: `/locations/${o.slug}`,
          })),
        })}
      />
      {/* One LocalBusiness node per office — this is what local packs read. */}
      {offices.map((o) => (
        <JsonLd
          key={o.id}
          id={`localbusiness-${o.slug}`}
          data={localBusinessLd({
            url: `/locations/${o.slug}`,
            name: `DGSOFT ${o.city.trim()}`,
            streetAddress: o.address,
            city: o.city.trim(),
            zip: o.zip,
            country: o.region,
            countryCode: o.countryCode,
            phone: o.phone,
            email: o.email,
            latitude: o.latitude,
            longitude: o.longitude,
            areaServed: o.serves,
            isHeadquarters: o.isHeadquarters,
          })}
        />
      ))}
      <FaqJsonLd faqKey="locations" url="/locations" />

      <LocationsClient offices={offices} />
    </>
  );
}
