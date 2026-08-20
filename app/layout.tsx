import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext", "greek"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});
import SmoothScroll from "./components/SmoothScroll";
import LocaleProviderWrapper from "./components/LocaleProviderWrapper";
import { FooterProvider } from "./context/FooterContext";
import { getPublicFooter } from "./lib/actions/footer";
import { getPublicSiteSettings } from "./lib/actions/settings";
import { TrackingTags } from "@/components/tracking/TrackingTags";
import { resolveTrackingTags } from "@/lib/site-settings";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { getSiteUrl } from "@/lib/site-url";
import { ogImageUrl } from "@/lib/og-image";

const FAVICON_URL = "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404641179-7ql2ec.webp";
const SITE_URL = getSiteUrl();
const SITE_NAME = "DGSOFT";
const DEFAULT_TITLE = "DGSOFT — Soft1 ERP, Λογισμικό & Προγράμματα ΕΣΠΑ";
const DEFAULT_DESCRIPTION =
  "Πιστοποιημένος συνεργάτης SoftOne. Υλοποίηση Soft1 ERP, custom λογισμικό και ολοκληρωμένη διαχείριση προγραμμάτων ΕΣΠΑ για επιχειρήσεις σε Ελλάδα και Κύπρο.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | DGSOFT",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "DGSOFT",
    "DGSMART",
    "digital innovation",
    "software development Greece",
    "EU programmes",
    "ΕΣΠΑ",
    "Ariadni",
    "Αριάδνη",
    "ERP",
    "SoftOne",
    "web development",
  ],
  authors: [{ name: "DGSOFT", url: SITE_URL }],
  creator: "DGSOFT",
  publisher: "DGSOFT",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: ogImageUrl({ title: DEFAULT_TITLE, subtitle: "Πιστοποιημένος συνεργάτης SoftOne" }),
        width: 1200,
        height: 630,
        alt: "DGSOFT — Soft1 ERP, λογισμικό και προγράμματα ΕΣΠΑ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [ogImageUrl({ title: DEFAULT_TITLE, subtitle: "Πιστοποιημένος συνεργάτης SoftOne" })],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: FAVICON_URL,
    shortcut: FAVICON_URL,
    apple: FAVICON_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "DGSOFT",
  alternateName: "DGSMART",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/logo.svg`,
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    // www.dgsmart.gr removed — DNS doesn't resolve (NXDOMAIN). Add back once
    // a CNAME/A record is set up for the www subdomain.
    "https://dgsoft.gr",
    "https://dgsmart.gr",
    "https://www.facebook.com/softsoftwaredg",
    "https://www.linkedin.com/company/dgsoft",
    "https://www.instagram.com/dgsoft.gr/",
  ],
  telephone: "+302105711581",
  email: "connect@dgsmart.gr",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Λεωφ. Κηφισού 48, 1ος όροφος",
    addressLocality: "Περιστέρι",
    addressRegion: "Αττική",
    postalCode: "12133",
    addressCountry: "GR",
  },
  areaServed: [
    { "@type": "Country", name: "Greece" },
    { "@type": "Country", name: "Cyprus" },
    { "@type": "Place", name: "European Union" },
  ],
  // The organisation genuinely works in both languages; this is about the
  // company, not about page versions, so it stays.
  knowsLanguage: ["el", "en"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+302105711581",
      email: "connect@dgsmart.gr",
      contactType: "customer support",
      areaServed: ["GR", "CY"],
      availableLanguage: ["Greek", "English"],
    },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  // Crawlers only ever receive the Greek rendering (the locale switch is
  // client-side), so declare Greek alone rather than claiming a second version.
  inLanguage: "el-GR",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footer = await getPublicFooter();
  const settings = await getPublicSiteSettings();
  return (
    <html lang="el" data-scroll-behavior="smooth" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://dgsmart.b-cdn.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://dgsmart.b-cdn.net" />
      </head>
      <body className="antialiased bg-monks-black text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-monks-black focus:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-monks-black focus:ring-white"
        >
          Μετάβαση στο περιεχόμενο
        </a>
        <TrackingTags tags={resolveTrackingTags(settings)} />
        <script
          id="ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
          suppressHydrationWarning
        />
        <script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
          suppressHydrationWarning
        />
        <LocaleProviderWrapper>
          <FooterProvider
            contentEL={footer.contentEL}
            contentEN={footer.contentEN}
          >
            <SmoothScroll>
              <div id="main-content" tabIndex={-1} className="outline-none">
                {children}
              </div>
            </SmoothScroll>
            <CookieBanner />
          </FooterProvider>
        </LocaleProviderWrapper>
      </body>
    </html>
  );
}
