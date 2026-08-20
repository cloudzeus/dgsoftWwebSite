"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Building2 } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import type { OfficeLocation } from "@/lib/locations";

export default function LocationsClient({ offices }: { offices: OfficeLocation[] }) {
  return (
    <main className="min-h-screen bg-monks-black flex flex-col">
      <Navigation />

      <section className="relative pt-44 pb-16 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[620px] h-[620px] bg-monks-accent/15 rounded-full blur-[150px] -translate-y-1/3"
          aria-hidden="true"
        />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <p className="text-monks-accent text-sm font-semibold tracking-[0.18em] uppercase mb-5">
            Πού θα μας βρείτε
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.08] text-balance">
            Γραφεία σε όλη την Ελλάδα και την Κύπρο
          </h1>
          <p className="text-lg text-monks-light max-w-3xl leading-relaxed">
            Έξι γραφεία, από την Αττική ως την Κρήτη και την Κύπρο. Η υποστήριξη γίνεται
            απομακρυσμένα όπου κι αν βρίσκεστε, ενώ για εγκαταστάσεις, εκπαίδευση και έργα
            που θέλουν φυσική παρουσία έρχεται η ομάδα του πλησιέστερου γραφείου.
          </p>
        </div>
      </section>

      <section className="pb-28 flex-grow">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid gap-5 md:grid-cols-2">
            {offices.map((o) => (
              <Link
                key={o.id}
                href={`/locations/${o.slug}`}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-monks-gray/60 p-7 transition-all duration-300 hover:border-monks-accent/40 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-monks-accent">
                      {o.isHeadquarters ? (
                        <Building2 className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                      )}
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-white leading-tight">
                        {o.city.trim()}
                      </h2>
                      {o.region ? (
                        <p className="text-sm text-monks-light">{o.region}</p>
                      ) : null}
                    </div>
                  </div>
                  {o.isHeadquarters ? (
                    <span className="rounded-full border border-monks-accent/40 bg-monks-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-monks-accent whitespace-nowrap">
                      Έδρα
                    </span>
                  ) : null}
                </div>

                <dl className="space-y-2 text-sm text-monks-light">
                  {o.address ? (
                    <div className="flex gap-2.5">
                      <dt className="sr-only">Διεύθυνση</dt>
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 opacity-60" aria-hidden="true" />
                      <dd>
                        {o.address}
                        {o.zip ? `, ${o.zip}` : ""} {o.city.trim()}
                      </dd>
                    </div>
                  ) : null}
                  {o.phone ? (
                    <div className="flex gap-2.5">
                      <dt className="sr-only">Τηλέφωνο</dt>
                      <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 opacity-60" aria-hidden="true" />
                      <dd>{o.phone}</dd>
                    </div>
                  ) : null}
                  {o.email ? (
                    <div className="flex gap-2.5">
                      <dt className="sr-only">Email</dt>
                      <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 opacity-60" aria-hidden="true" />
                      <dd className="break-all">{o.email}</dd>
                    </div>
                  ) : null}
                </dl>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-monks-accent transition-colors">
                  Το γραφείο {o.city.trim()}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Faq faqKey="locations" />

      <Footer />
    </main>
  );
}
