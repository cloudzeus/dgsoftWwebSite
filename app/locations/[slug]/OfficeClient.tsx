"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowLeft, Building2, Navigation as NavIcon } from "lucide-react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Faq from "../../components/Faq";
import type { OfficeLocation } from "@/lib/locations";

const HIGHLIGHTS = [
  {
    title: "Soft1 ERP & CRM",
    body: "Εγκατάσταση, παραμετροποίηση και μετάπτωση δεδομένων ως πιστοποιημένος συνεργάτης της ENTERSOFTONE.",
  },
  {
    title: "Προγράμματα ΕΣΠΑ",
    body: "Έλεγχος επιλεξιμότητας, υποβολή φακέλου και υλοποίηση του έργου από την ίδια ομάδα.",
  },
  {
    title: "Λογισμικό κατά παραγγελία",
    body: "Web πλατφόρμες, διασυνδέσεις με e-shop και εργαλεία που δουλεύουν δίπλα στο ERP σας.",
  },
  {
    title: "Τεχνική υποστήριξη & SLA",
    body: "Συμβόλαια με χρόνους απόκρισης, απομακρυσμένη και επιτόπια εξυπηρέτηση.",
  },
];

export default function OfficeClient({
  office,
  others,
}: {
  office: OfficeLocation;
  others: OfficeLocation[];
}) {
  const city = office.city.trim();
  const mapsQuery = encodeURIComponent(
    [office.address, office.zip, city, office.country].filter(Boolean).join(", ")
  );

  return (
    <main className="min-h-screen bg-monks-black flex flex-col">
      <Navigation />

      <section className="relative pt-40 pb-14 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[560px] h-[560px] bg-monks-accent/15 rounded-full blur-[150px] -translate-y-1/2"
          aria-hidden="true"
        />
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 relative z-10">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 text-sm text-monks-light hover:text-white transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent rounded"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Όλα τα γραφεία
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="text-monks-accent text-sm font-semibold tracking-[0.18em] uppercase">
              {office.region ?? office.country}
            </span>
            {office.isHeadquarters ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-monks-accent/40 bg-monks-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-monks-accent">
                <Building2 className="h-3 w-3" aria-hidden="true" />
                Έδρα
              </span>
            ) : null}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.08] text-balance">
            Μηχανογράφηση &amp; Soft1 ERP στο {city}
          </h1>

          <p className="text-lg text-monks-light max-w-3xl leading-relaxed">
            {office.isHeadquarters
              ? `Η έδρα της DGSOFT βρίσκεται στο ${city}. Από εδώ συντονίζονται τα έργα μηχανογράφησης, οι υλοποιήσεις Soft1 ERP και οι φάκελοι ΕΣΠΑ για όλη την Ελλάδα και την Κύπρο.`
              : `Το γραφείο μας στο ${city} εξυπηρετεί επιχειρήσεις σε ${office.serves.slice(0, 3).join(", ")} και την ευρύτερη περιοχή, με υλοποιήσεις Soft1 ERP, λογισμικό κατά παραγγελία και τεχνική υποστήριξη.`}
          </p>
        </div>
      </section>

      {/* Contact block — the details local searches and assistants look for. */}
      <section className="pb-16">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="rounded-2xl border border-white/10 bg-monks-gray/60 p-7 md:p-9">
            <h2 className="text-xl font-bold text-white mb-6">Στοιχεία επικοινωνίας</h2>
            <dl className="grid gap-6 sm:grid-cols-2">
              {office.address ? (
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-monks-accent" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-monks-light mb-1">Διεύθυνση</dt>
                    <dd className="text-white leading-relaxed">
                      {office.address}
                      <br />
                      {office.zip ? `${office.zip} ` : ""}
                      {city}, {office.country}
                    </dd>
                  </div>
                </div>
              ) : null}

              {office.phone ? (
                <div className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-monks-accent" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-monks-light mb-1">Τηλέφωνο</dt>
                    <dd>
                      <a
                        href={`tel:${office.phone.replace(/[^\d+]/g, "")}`}
                        className="text-white hover:text-monks-accent transition-colors"
                      >
                        {office.phone}
                      </a>
                    </dd>
                  </div>
                </div>
              ) : null}

              {office.email ? (
                <div className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-monks-accent" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-monks-light mb-1">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-white hover:text-monks-accent transition-colors break-all"
                      >
                        {office.email}
                      </a>
                    </dd>
                  </div>
                </div>
              ) : null}

              {office.latitude != null && office.longitude != null ? (
                <div className="flex gap-3">
                  <NavIcon className="mt-1 h-5 w-5 flex-shrink-0 text-monks-accent" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-monks-light mb-1">Πρόσβαση</dt>
                    <dd>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-monks-accent transition-colors"
                      >
                        Οδηγίες στον χάρτη
                      </a>
                    </dd>
                  </div>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Τι αναλαμβάνουμε από το {city}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="rounded-xl border border-white/10 bg-monks-gray/40 p-6">
                <h3 className="text-base font-semibold text-white mb-2">{h.title}</h3>
                <p className="text-sm text-monks-light leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {office.serves.length > 1 ? (
        <section className="pb-16">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Περιοχές που εξυπηρετεί το γραφείο {city}
            </h2>
            <p className="text-monks-light mb-6 max-w-3xl leading-relaxed">
              Εξυπηρετούμε επιχειρήσεις στις παρακάτω περιοχές με επιτόπια παρουσία, ενώ η
              απομακρυσμένη υποστήριξη καλύπτει όλη την Ελλάδα και την Κύπρο.
            </p>
            <ul className="flex flex-wrap gap-2">
              {office.serves.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-monks-light"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <Faq faqKey="locations" />

      {others.length ? (
        <section className="pb-24 flex-grow">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Άλλα γραφεία</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.id}
                  href={`/locations/${o.slug}`}
                  className="group rounded-xl border border-white/10 bg-monks-gray/40 px-5 py-4 transition-colors hover:border-monks-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
                >
                  <span className="block font-semibold text-white group-hover:text-monks-accent transition-colors">
                    {o.city.trim()}
                  </span>
                  <span className="block text-sm text-monks-light">
                    {o.region ?? o.country}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  );
}
