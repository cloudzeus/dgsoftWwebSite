"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { useLocale } from "../context/LocaleContext";
import { faqEntries, type FaqKey } from "@/lib/faq-content";

/**
 * Question-and-answer section.
 *
 * Search engines only award a snippet when the answer is visible on the page,
 * so every answer is present in the markup from the first render — the
 * disclosure only collapses it visually. Native <details>/<summary> keeps it
 * keyboard-accessible and expandable without JavaScript.
 *
 * Pair with <FaqJsonLd> on the server to emit the matching FAQPage markup.
 */
export default function Faq({
  faqKey,
  titleEL = "Συχνές ερωτήσεις",
  titleEN = "Frequently asked questions",
}: {
  faqKey: FaqKey;
  titleEL?: string;
  titleEN?: string;
}) {
  const locale = useLocale();
  const entries = faqEntries(faqKey, locale);
  const heading = locale === "en" ? titleEN : titleEL;

  if (!entries.length) return null;

  return (
    <section className="py-24 bg-monks-black relative" id="faq">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-balance">
          {heading}
        </h2>
        <div className="h-[3px] w-14 bg-monks-accent mb-12" aria-hidden="true" />

        <div className="divide-y divide-white/10 border-y border-white/10">
          {entries.map((entry) => (
            <details key={entry.question} className="group py-1">
              <summary
                className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent focus-visible:ring-offset-2 focus-visible:ring-offset-monks-black"
              >
                {/* h3 inside summary keeps the question in the document outline,
                    which is what snippet extraction reads. */}
                <h3 className="text-base md:text-lg font-medium text-white leading-snug">
                  {entry.question}
                </h3>
                <Plus
                  className="mt-1 h-5 w-5 flex-shrink-0 text-monks-accent transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-6 pr-11 text-[15px] leading-relaxed text-monks-light">
                {entry.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
