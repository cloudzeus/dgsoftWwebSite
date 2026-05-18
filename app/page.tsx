import type { Metadata } from "next";
export const dynamic = "force-dynamic";
import Navigation from "./components/Navigation";
import { StaticPageSeo } from "./components/PageSeo";

// Open Graph fallback image — surfaced on social platforms and in audit checks.
// Replace with a purpose-built 1200×630 social card when available.
const OG_IMAGE = "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404641179-7ql2ec.webp";

export const metadata: Metadata = {
  // Keep title 50–60 chars and meta description 150–160 chars for SERP truncation rules.
  title: "DGSOFT — Bespoke Software, SoftOne ERP & EU Programmes",
  description:
    "DGSOFT delivers bespoke software, SoftOne ERP integrations, web platforms, and ΕΣΠΑ/EU funding programmes for businesses in Greece and Cyprus.",
  alternates: { canonical: "/" },
  // Important: Next.js does NOT merge `openGraph` from the parent layout —
  // overriding here replaces the whole object. Always include siteName + images
  // so audits (Facebook, LinkedIn previews) see them.
  openGraph: {
    type: "website",
    siteName: "DGSOFT",
    locale: "el_GR",
    alternateLocale: ["en_US"],
    url: "/",
    title: "DGSOFT — Bespoke Software, SoftOne ERP & EU Programmes",
    description:
      "Bespoke software, SoftOne ERP, web platforms & ΕΣΠΑ deliveries — built in Greece, deployed across the EU.",
    images: [
      {
        url: OG_IMAGE,
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
      <StaticPageSeo
        url="/"
        name="DGSOFT — Bespoke Software, SoftOne ERP & EU Programmes"
        description="DGSOFT designs and ships bespoke software, SoftOne ERP integrations, web platforms, and ΕΣΠΑ/EU funding deliveries for businesses across Greece and Cyprus."
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
