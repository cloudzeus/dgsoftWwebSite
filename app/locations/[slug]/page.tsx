import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOfficeBySlug, getOfficeLocations } from "@/lib/locations";
import { ogImageUrl } from "@/lib/og-image";
import { JsonLd } from "@/app/components/JsonLd";
import { FaqJsonLd } from "@/app/components/FaqJsonLd";
import { breadcrumbLd, localBusinessLd } from "@/lib/jsonld";
import OfficeClient from "./OfficeClient";

export const revalidate = 3600;

export async function generateStaticParams() {
  const offices = await getOfficeLocations();
  return offices.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const office = await getOfficeBySlug(slug);
  if (!office) {
    return { title: "Το γραφείο δεν βρέθηκε", robots: { index: false, follow: false } };
  }

  const city = office.city.trim();
  const title = `Μηχανογράφηση & Soft1 ERP στο ${city}`;
  const description = office.isHeadquarters
    ? `Η έδρα της DGSOFT στο ${city}. Υλοποίηση Soft1 ERP, λογισμικό κατά παραγγελία και προγράμματα ΕΣΠΑ, με επιτόπια υποστήριξη σε ${office.serves.slice(0, 3).join(", ")}.`
    : `Γραφείο DGSOFT στο ${city}. Soft1 ERP, custom λογισμικό, ΕΣΠΑ και τεχνική υποστήριξη για επιχειρήσεις σε ${office.serves.slice(0, 3).join(", ")} και την ευρύτερη περιοχή.`;

  return {
    title,
    description,
    alternates: { canonical: `/locations/${office.slug}` },
    openGraph: {
      title,
      description,
      url: `/locations/${office.slug}`,
      type: "website",
      siteName: "DGSOFT",
      locale: "el_GR",
      images: [
        {
          url: ogImageUrl({
            title,
            subtitle: [office.address, office.zip, city].filter(Boolean).join(", "),
            kicker: office.isHeadquarters ? "Έδρα" : (office.region ?? "Γραφείο"),
          }),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

export default async function OfficePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const office = await getOfficeBySlug(slug);
  if (!office) notFound();

  const all = await getOfficeLocations();
  const others = all.filter((o) => o.slug !== office.slug);
  const city = office.city.trim();

  return (
    <>
      <JsonLd
        id="office-breadcrumb"
        data={breadcrumbLd([
          { name: "Αρχική", path: "/" },
          { name: "Γραφεία", path: "/locations" },
          { name: city, path: `/locations/${office.slug}` },
        ])}
      />
      <JsonLd
        id="office-localbusiness"
        data={localBusinessLd({
          url: `/locations/${office.slug}`,
          name: `DGSOFT ${city}`,
          description: `Μηχανογράφηση, Soft1 ERP, λογισμικό κατά παραγγελία και προγράμματα ΕΣΠΑ στο ${city}.`,
          streetAddress: office.address,
          city,
          zip: office.zip,
          country: office.region,
          countryCode: office.countryCode,
          phone: office.phone,
          email: office.email,
          latitude: office.latitude,
          longitude: office.longitude,
          areaServed: office.serves,
          isHeadquarters: office.isHeadquarters,
        })}
      />
      <FaqJsonLd faqKey="locations" url={`/locations/${office.slug}`} />

      <OfficeClient office={office} others={others} />
    </>
  );
}
