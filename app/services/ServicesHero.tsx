"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/app/context/LocaleContext";

export default function ServicesHero() {
  const locale = useLocale();

  const title = locale === "el" ? "Οι Υπηρεσίες μας" : "Our Services";
  const highlight = locale === "el" ? "Υπηρεσίες" : "Services";
  const description =
    locale === "el"
      ? "Παρέχουμε κορυφαίες ψηφιακές λύσεις προσαρμοσμένες στις ανάγκες της επιχειρησής σας, με στόχο την επιτάχυνση της ανάπτυξής σας. Ανακαλύψτε το πλήρες φάσμα των υπηρεσιών μας."
      : "We deliver top digital solutions tailored to your business needs, focused on accelerating your growth. Discover our full range of services.";

  return (
    <section className="relative pt-48 pb-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-monks-red-dark/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-monks-accent/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div>
          <h1 className="text-display-sm md:text-display-md font-bold text-white mb-6 leading-[1.1]">
            {locale === "el" ? (
              <>Οι <span className="gradient-text">{highlight}</span> μας</>
            ) : (
              <>Our <span className="gradient-text">{highlight}</span></>
            )}
          </h1>
          <p className="text-xl text-monks-light max-w-3xl leading-relaxed text-justify">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
