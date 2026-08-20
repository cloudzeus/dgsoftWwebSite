import type { MetadataRoute } from "next";

/**
 * Web app manifest. Beyond installability it is a modern-web signal that
 * audits and Lighthouse look for, and it costs nothing to serve.
 */
export default function manifest(): MetadataRoute.Manifest {
  const icon = "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404641179-7ql2ec.webp";
  return {
    name: "DGSOFT — Soft1 ERP, Λογισμικό & Προγράμματα ΕΣΠΑ",
    short_name: "DGSOFT",
    description:
      "Πιστοποιημένος συνεργάτης SoftOne. Υλοποίηση Soft1 ERP, custom λογισμικό και προγράμματα ΕΣΠΑ.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "el",
    dir: "ltr",
    categories: ["business", "productivity"],
    icons: [
      { src: icon, sizes: "192x192", type: "image/webp", purpose: "any" },
      { src: icon, sizes: "512x512", type: "image/webp", purpose: "any" },
    ],
  };
}
