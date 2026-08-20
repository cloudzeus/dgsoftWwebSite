"use client";

import { BadgeCheck } from "lucide-react";
import { useLocale } from "../context/LocaleContext";

/**
 * Certification proof, taken from the official ENTERSOFTONE partner registry
 * (operations.soft1.eu/projects/partners, search "DGSOFT").
 *
 * Deliberately states the number and the source rather than a superlative. We
 * verified DGSOFT against a sample of competitors, not the whole registry, so
 * "129, verifiable here" is a claim that holds; "the most in Greece" is not one
 * we can stand behind. The link lets the reader check it, which is the point.
 */

const AREAS = [
  { name: "ERP I — Core Operations", count: 26 },
  { name: "Technical I — Implementations", count: 22 },
  { name: "Soft1 360 Platform", count: 16 },
  { name: "Sales CRM", count: 14 },
  { name: "Accounting I", count: 13 },
  { name: "HRMS Management", count: 12 },
  { name: "ERP II — Advanced Operations", count: 9 },
  { name: "Technical II — Customization", count: 9 },
];

export default function CertificationBadge({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const el = locale !== "en";

  return (
    <section className="py-20" aria-labelledby="cert-heading">
      <div className="mx-auto max-w-[1150px] px-6 md:px-12">
        <div className="rounded-2xl border border-white/10 bg-monks-gray/50 p-8 md:p-10">
          <div className="flex flex-wrap items-start gap-6 md:gap-10">
            <div className="flex-1 min-w-[280px]">
              <div className="mb-4 flex items-center gap-2.5">
                <BadgeCheck className="h-5 w-5 text-monks-accent" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-monks-accent">
                  {el ? "Επίσημο μητρώο ENTERSOFTONE" : "Official ENTERSOFTONE registry"}
                </span>
              </div>

              <h2 id="cert-heading" className="mb-3 text-2xl font-bold text-white md:text-3xl">
                {el ? (
                  <>
                    <span className="text-monks-accent">129</span> πιστοποιήσεις συμβούλων σε 12 τομείς
                  </>
                ) : (
                  <>
                    <span className="text-monks-accent">129</span> consultant certifications across 12 areas
                  </>
                )}
              </h2>

              <p className="max-w-xl text-[15px] leading-relaxed text-monks-light">
                {el
                  ? "Οι πιστοποιήσεις αφορούν ονομαστικά συμβούλους και καταγράφονται από την ίδια την ENTERSOFTONE. Δεν είναι δήλωση δική μας — μπορείτε να τις δείτε στο επίσημο μητρώο συνεργατών."
                  : "Certifications are held by named consultants and recorded by ENTERSOFTONE itself. This is not our own claim — you can check it in the official partner registry."}
              </p>

              <a
                href="https://operations.soft1.eu/projects/partners/index.html?lang=el&sw=0&cat=1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-monks-accent/60 underline-offset-4 transition-colors hover:text-monks-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
              >
                {el ? "Επαληθεύστε το — αναζητήστε «DGSOFT»" : 'Verify it — search for "DGSOFT"'}
              </a>
            </div>

            {!compact && (
              <div className="min-w-[260px] flex-1">
                <dl className="space-y-2">
                  {AREAS.map((a) => (
                    <div key={a.name} className="flex items-baseline gap-3">
                      <dt className="flex-1 truncate text-[13px] text-monks-light">{a.name}</dt>
                      <dd
                        className="w-8 text-right font-mono text-[13px] font-semibold text-white"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {a.count}
                      </dd>
                      <div
                        className="h-1 rounded-full bg-monks-accent/70"
                        style={{ width: `${(a.count / 26) * 76}px` }}
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-[11px] text-monks-light/70">
                  {el ? "Οι 8 μεγαλύτεροι τομείς από τους 12." : "The 8 largest of 12 areas."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
