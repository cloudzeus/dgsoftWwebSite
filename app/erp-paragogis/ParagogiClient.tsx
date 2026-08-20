"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, ScanLine, BarChart3, Boxes } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import CertificationBadge from "../components/CertificationBadge";
import {
  PRODUCTION_CAPABILITIES,
  SMART_FACTORY,
  INDUSTRIES,
} from "@/lib/manufacturing-content";

const ADJACENT = [
  {
    icon: Boxes,
    title: "Διαχείριση αποθήκης (WMS)",
    body: "Θέσεις αποθήκευσης, barcode, picking και απογραφές πάνω στα ίδια αποθέματα με την παραγωγή — χωρίς δεύτερο σύστημα να συμφωνεί με το πρώτο.",
    href: "/services",
  },
  {
    icon: BarChart3,
    title: "MIS & Power BI",
    body: "Dashboards και KPI πάνω στα δεδομένα του Soft1: κόστος ανά παρτίδα, αποδόσεις γραμμής, αποκλίσεις πρότυπου κόστους, αποθέματα με μικρή διάρκεια ζωής.",
    href: "/services/mis-power-bi-ap-dgsoft",
  },
  {
    icon: Cpu,
    title: "AI & IoT στη γραμμή",
    body: "Αισθητήρες, υπολογιστική όραση και προβλεπτική συντήρηση, συνδεδεμένα με τις εντολές παραγωγής του ERP.",
    href: "/services/ai-iot-xypnes-l-seis-ap-ti-dgsoft",
  },
];

export default function ParagogiClient() {
  return (
    <main className="min-h-screen bg-monks-black flex flex-col">
      <Navigation />

      <section className="relative pt-44 pb-16 overflow-hidden">
        <div
          className="absolute top-0 right-0 h-[620px] w-[620px] -translate-y-1/3 rounded-full bg-monks-accent/15 blur-[150px]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-[1150px] px-6 md:px-12">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-monks-accent">
            ERP για βιομηχανική παραγωγή
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.07] text-white md:text-[3.4rem] text-balance">
            Soft1 ERP για παραγωγή, με ιχνηλασιμότητα παρτίδας από άκρη σε άκρη
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-monks-light">
            Συνταγολόγιο, παρτίδες, ημερομηνίες λήξης, ποιοτικός έλεγχος και κοστολόγηση
            παραγωγής σε ένα σύστημα. Και, εκεί που οι περισσότεροι συνεργάτες σταματούν,
            συνδέουμε τη γραμμή παραγωγής με αισθητήρες IoT και υπολογιστική όραση.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/book-meeting"
              className="inline-flex items-center gap-2 rounded-full bg-monks-accent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-monks-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
            >
              Ζητήστε παρουσίαση
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/espa-ylopoiisi"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
            >
              Χρηματοδότηση μέσω ΕΣΠΑ
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1150px] px-6 md:px-12">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-4xl text-balance">
            Τι καλύπτει το σύστημα παραγωγής
          </h2>
          <p className="mb-10 max-w-2xl leading-relaxed text-monks-light">
            Οι λειτουργίες που κρίνουν αν ένα ERP αντέχει σε παραγωγική μονάδα — και που
            πρέπει να παραμετροποιηθούν σωστά, όχι απλώς να υπάρχουν.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {PRODUCTION_CAPABILITIES.map((c) => (
              <div key={c.title} className="rounded-xl border border-white/10 bg-monks-gray/50 p-7">
                <h3 className="mb-2.5 text-base font-semibold text-white">{c.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-monks-light">{c.body}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {c.terms.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-monks-light"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The differentiator: most Soft1 partners stop at the ERP. */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1150px] px-6 md:px-12">
          <div className="rounded-2xl border border-monks-accent/25 bg-gradient-to-br from-monks-gray to-monks-black p-8 md:p-11">
            <div className="mb-3 flex items-center gap-3">
              <ScanLine className="h-6 w-6 text-monks-accent" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-monks-accent">
                Πέρα από το ERP
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl text-balance">
              Έξυπνη γραμμή παραγωγής: IoT, υπολογιστική όραση και AI
            </h2>
            <p className="mb-9 max-w-3xl leading-relaxed text-monks-light">
              Το ERP ξέρει τι παρήχθη. Η γραμμή ξέρει πώς. Όταν τα δύο μιλήσουν, ο
              ποιοτικός έλεγχος γίνεται σε κάθε τεμάχιο αντί σε δείγμα, και οι βλάβες
              εντοπίζονται πριν σταματήσουν την παραγωγή.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {SMART_FACTORY.map((s) => (
                <div key={s.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-monks-light">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1150px] px-6 md:px-12">
          <h2 className="mb-10 text-2xl font-bold text-white md:text-4xl text-balance">
            Τι συνδέεται γύρω από την παραγωγή
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {ADJACENT.map(({ icon: Icon, ...a }) => (
              <Link
                key={a.title}
                href={a.href}
                className="group rounded-xl border border-white/10 bg-monks-gray/40 p-7 transition-colors hover:border-monks-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
              >
                <Icon className="mb-4 h-6 w-6 text-monks-accent" aria-hidden="true" />
                <h3 className="mb-2 text-base font-semibold text-white group-hover:text-monks-accent transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-monks-light">{a.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1150px] px-6 md:px-12">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-4xl text-balance">
            Κλάδοι που εξυπηρετούμε
          </h2>
          <p className="mb-9 max-w-2xl leading-relaxed text-monks-light">
            Κάθε κλάδος έχει τη δική του απαίτηση τεκμηρίωσης. Η παραμετροποίηση γίνεται
            πάνω σε αυτή, όχι σε μια γενική εγκατάσταση.
          </p>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="grid gap-2 py-5 md:grid-cols-[220px_1fr] md:gap-8">
                <h3 className="text-base font-semibold text-white">{ind.name}</h3>
                <p className="text-sm leading-relaxed text-monks-light">{ind.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificationBadge />

      <Faq faqKey="soft1" titleEL="Συχνές ερωτήσεις για το Soft1 στην παραγωγή" />

      <section className="flex-grow pb-24">
        <div className="mx-auto max-w-[1150px] px-6 md:px-12">
          <div className="rounded-2xl border border-white/10 bg-monks-gray/50 p-9 md:p-12">
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl text-balance">
              Δείτε το πάνω στη δική σας παραγωγή
            </h2>
            <p className="mb-7 max-w-2xl leading-relaxed text-monks-light">
              Φέρτε μας μία συνταγή και μία παρτίδα. Θα σας δείξουμε τη διαδρομή τους μέσα
              στο σύστημα — από την πρώτη ύλη ως το τιμολόγιο του πελάτη.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book-meeting"
                className="inline-flex items-center gap-2 rounded-full bg-monks-accent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-monks-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
              >
                Κλείστε παρουσίαση
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services/soft1-cloud-erp"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
              >
                Soft1 Cloud ERP
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
