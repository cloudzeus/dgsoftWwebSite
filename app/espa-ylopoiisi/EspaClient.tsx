"use client";

import Link from "next/link";
import { ArrowUpRight, Check, FileText, Wrench } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import { ESPA_PROCESS, SINGLE_TEAM_REASONS } from "@/lib/espa-process";

const OWNER_STYLES: Record<string, string> = {
  DGSOFT: "border-monks-accent/40 bg-monks-accent/10 text-monks-accent",
  Μαζί: "border-white/20 bg-white/5 text-white",
  Εσείς: "border-white/15 bg-white/5 text-monks-light",
};

export default function EspaClient() {
  return (
    <main className="min-h-screen bg-monks-black flex flex-col">
      <Navigation />

      <section className="relative pt-44 pb-20 overflow-hidden">
        <div
          className="absolute top-0 right-0 h-[640px] w-[640px] -translate-y-1/3 rounded-full bg-monks-accent/15 blur-[150px]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-[1150px] px-6 md:px-12">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-monks-accent">
            ΕΣΠΑ από άκρη σε άκρη
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.07] text-white md:text-6xl text-balance">
            Ο φάκελος ΕΣΠΑ και η υλοποίηση, από την ίδια ομάδα
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-monks-light">
            Οι περισσότερες επιχειρήσεις δουλεύουν με έναν σύμβουλο για την επιδότηση και
            με κάποιον άλλον για το σύστημα. Η DGSOFT κάνει και τα δύο: ελέγχουμε την
            επιλεξιμότητα, υποβάλλουμε τον φάκελο και στη συνέχεια παραδίδουμε το ERP, το
            λογισμικό και τις υποδομές ως ανάδοχοι.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/eu-programs"
              className="inline-flex items-center gap-2 rounded-full bg-monks-accent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-monks-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent focus-visible:ring-offset-2 focus-visible:ring-offset-monks-black"
            >
              Δείτε τα ενεργά προγράμματα
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/book-meeting"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
            >
              Έλεγχος επιλεξιμότητας
            </Link>
          </div>
        </div>
      </section>

      {/* The two halves most companies buy separately. */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1150px] px-6 md:px-12">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-monks-gray/50 p-8">
              <FileText className="mb-4 h-7 w-7 text-monks-accent" aria-hidden="true" />
              <h2 className="mb-3 text-xl font-bold text-white">Η πλευρά του φακέλου</h2>
              <ul className="space-y-2.5 text-sm leading-relaxed text-monks-light">
                {[
                  "Έλεγχος επιλεξιμότητας με βάση ΚΑΔ και οικονομικά στοιχεία",
                  "Σχεδιασμός επένδυσης πάνω στις επιλέξιμες δαπάνες",
                  "Σύνταξη τεχνικού δελτίου και υποβολή",
                  "Παρακολούθηση αξιολόγησης και ενστάσεις",
                  "Φάκελος πιστοποίησης δαπανών",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-monks-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-monks-gray/50 p-8">
              <Wrench className="mb-4 h-7 w-7 text-monks-accent" aria-hidden="true" />
              <h2 className="mb-3 text-xl font-bold text-white">Η πλευρά της υλοποίησης</h2>
              <ul className="space-y-2.5 text-sm leading-relaxed text-monks-light">
                {[
                  "Εγκατάσταση και παραμετροποίηση Soft1 ERP και CRM",
                  "Μετάπτωση δεδομένων από το υπάρχον σύστημα",
                  "Διασυνδέσεις με e-shop, courier και τρίτα συστήματα",
                  "Λογισμικό κατά παραγγελία όπου δεν αρκεί το έτοιμο",
                  "Εκπαίδευση χρηστών και υποστήριξη με SLA",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-monks-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Numbered because the order is real: each step depends on the previous. */}
      <section className="pb-20">
        <div className="mx-auto max-w-[1150px] px-6 md:px-12">
          <h2 className="mb-3 text-2xl font-bold text-white md:text-4xl text-balance">
            Πώς λειτουργεί η διαδικασία, βήμα προς βήμα
          </h2>
          <p className="mb-10 max-w-2xl leading-relaxed text-monks-light">
            Έξι στάδια, από τον πρώτο έλεγχο ως την καταβολή. Δίπλα σε κάθε βήμα
            σημειώνεται ποιος το αναλαμβάνει.
          </p>

          <ol className="relative border-l border-white/10 pl-8 md:pl-10">
            {ESPA_PROCESS.map((step, i) => (
              <li key={step.name} id={`step-${i + 1}`} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-monks-accent/40 bg-monks-black text-xs font-bold text-monks-accent md:-left-[49px]"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">{step.name}</h3>
                  <span
                    className={`rounded-full border px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${OWNER_STYLES[step.owner]}`}
                  >
                    {step.owner}
                  </span>
                  <span className="text-xs text-monks-light">{step.duration}</span>
                </div>
                <p className="max-w-2xl text-[15px] leading-relaxed text-monks-light">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-[1150px] px-6 md:px-12">
          <h2 className="mb-10 text-2xl font-bold text-white md:text-4xl text-balance">
            Γιατί έχει σημασία να είναι μία ομάδα
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {SINGLE_TEAM_REASONS.map((r) => (
              <div key={r.title} className="rounded-xl border border-white/10 bg-monks-gray/40 p-7">
                <h3 className="mb-2.5 text-base font-semibold text-white">{r.title}</h3>
                <p className="text-sm leading-relaxed text-monks-light">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq faqKey="espaImplementation" titleEL="Συχνές ερωτήσεις για ΕΣΠΑ και υλοποίηση" />

      <section className="flex-grow pb-24">
        <div className="mx-auto max-w-[1150px] px-6 md:px-12">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-monks-gray to-monks-black p-9 md:p-12">
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              Ελέγξτε αν η επιχείρησή σας είναι επιλέξιμη
            </h2>
            <p className="mb-7 max-w-2xl leading-relaxed text-monks-light">
              Ο έλεγχος γίνεται με βάση τον ΚΑΔ, τα οικονομικά σας στοιχεία και τις
              ενεργές προσκλήσεις. Αν δεν υπάρχει πρόγραμμα που να ταιριάζει, θα το
              ακούσετε από εμάς πρώτα.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/eu-programs"
                className="inline-flex items-center gap-2 rounded-full bg-monks-accent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-monks-red-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
              >
                Ενεργά προγράμματα ΕΣΠΑ
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
              >
                Οι υπηρεσίες μας
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
