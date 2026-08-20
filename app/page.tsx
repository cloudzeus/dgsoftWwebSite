import type { Metadata } from "next";
import { JsonLd } from "./components/JsonLd";
import { videoObjectLd } from "@/lib/jsonld";
import { ogImageUrl } from "@/lib/og-image";
export const dynamic = "force-dynamic";
import Navigation from "./components/Navigation";
import { StaticPageSeo } from "./components/PageSeo";

// Open Graph fallback image — surfaced on social platforms and in audit checks.
// Replace with a purpose-built 1200×630 social card when available.


export const metadata: Metadata = {
  // Keep title 50–60 chars and meta description 150–160 chars for SERP truncation rules.
  title: "DGSOFT — Soft1 ERP, Λογισμικό & Προγράμματα ΕΣΠΑ",
  description:
    "Πιστοποιημένος συνεργάτης SoftOne. Υλοποίηση Soft1 ERP, custom λογισμικό και ολοκληρωμένη διαχείριση προγραμμάτων ΕΣΠΑ για επιχειρήσεις σε Ελλάδα και Κύπρο.",
  // Next replaces the whole `alternates` object rather than merging it, so the
  // feed link declared in the layout has to be repeated here or the homepage
  // loses it.
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/rss.xml", title: "DGSOFT — Νέα & Άρθρα" }] },
  },
  // Important: Next.js does NOT merge `openGraph` from the parent layout —
  // overriding here replaces the whole object. Always include siteName + images
  // so audits (Facebook, LinkedIn previews) see them.
  openGraph: {
    type: "website",
    siteName: "DGSOFT",
    locale: "el_GR",
    url: "/",
    title: "DGSOFT — Soft1 ERP, Λογισμικό & Προγράμματα ΕΣΠΑ",
    description:
      "Soft1 ERP, custom λογισμικό και προγράμματα ΕΣΠΑ για ελληνικές επιχειρήσεις — από τον έλεγχο επιλεξιμότητας ως την υλοποίηση.",
    images: [
      {
        url: ogImageUrl({
          title: "Soft1 ERP, Λογισμικό & Προγράμματα ΕΣΠΑ",
          subtitle: "Πιστοποιημένος συνεργάτης SoftOne",
        }),
        width: 1200,
        height: 630,
        alt: "DGSOFT — Digital Innovation Studio",
      },
    ],
  },
};
import nextDynamic from "next/dynamic";
import Hero from "./sections/Hero";
import Customers from "./sections/Customers";
import Solutions from "./sections/Solutions";
import Work from "./sections/Work";

// Below-the-fold sections — split into their own client chunks so first-paint
// JS doesn't include react-simple-maps / d3-geo / heavy framer-motion trees.
// SSR stays enabled (default) so the HTML is still crawlable.
const Locations = nextDynamic(() => import("./sections/Locations"));
const About = nextDynamic(() => import("./sections/About"));
const LatestInsights = nextDynamic(() => import("./sections/LatestInsights"));
const Contact = nextDynamic(() => import("./sections/Contact"));
const Footer = nextDynamic(() => import("./components/Footer"));
import { getPublicLocations } from "./lib/actions/location";
import { getPublicWorks } from "./lib/queries/work";
import { getPublicServices } from "./lib/queries/public-services";
import { getPublicCustomersForCarousel } from "./lib/actions/trdr";
import { getPublicHomePage } from "./lib/actions/home";

export default async function Home() {
  const [locations, works, services, carouselCustomers, homeContent] =
    await Promise.all([
      getPublicLocations(),
      getPublicWorks(),
      getPublicServices(),
      getPublicCustomersForCarousel(),
      getPublicHomePage(),
    ]);

  return (
    <>
      {/* The hero background video had no markup, so it was invisible to video
          search and to assistants indexing media. It is a silent decorative
          loop, which videoObjectLd already accounts for. */}
      <JsonLd
        id="hero-video"
        data={videoObjectLd({
          url: "/",
          name: "DGSOFT — Business Forward",
          description:
            "Εισαγωγικό βίντεο της DGSOFT: υλοποίηση Soft1 ERP, custom λογισμικό και προγράμματα ΕΣΠΑ για επιχειρήσεις σε Ελλάδα και Κύπρο.",
          contentUrl:
            "https://dgsmart.b-cdn.net/newsletter/newsletter-1787202903818-02e8u5i.mp4",
          thumbnailUrl:
            "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404641179-7ql2ec.webp",
          uploadDate: "2026-08-20",
        })}
      />
      <StaticPageSeo
        url="/"
        name="DGSOFT — Soft1 ERP, Λογισμικό & Προγράμματα ΕΣΠΑ"
        description="Πιστοποιημένος συνεργάτης SoftOne. Υλοποίηση Soft1 ERP, custom λογισμικό και ολοκληρωμένη διαχείριση προγραμμάτων ΕΣΠΑ για επιχειρήσεις σε Ελλάδα και Κύπρο."
      />
      <main className="min-h-screen bg-monks-black">
        <Navigation />
      <Hero
        contentEL={homeContent.contentEL}
        contentEN={homeContent.contentEN}
      />
      <Customers data={carouselCustomers} />
      <Solutions services={services.slice(0, 4)} />
      <Work initialWorks={works} />
      <Locations data={locations} />
      <About
        contentEL={homeContent.contentEL}
        contentEN={homeContent.contentEN}
      />
      <LatestInsights />
      <Contact />
      <Footer />
      </main>
    </>
  );
}
