"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useLocale } from "@/app/context/LocaleContext";

type Props = {
  imageUrl: string;
  pdfUrl: string;
  captionEl: string;
  captionEn: string;
  ariaLabelEl: string;
  ariaLabelEn: string;
  /** Smaller chrome (e.g. homepage hero at 50% width) */
  compact?: boolean;
};

export function EspaPdfBanner({
  imageUrl,
  pdfUrl,
  captionEl,
  captionEn,
  ariaLabelEl,
  ariaLabelEn,
  compact = false,
}: Props) {
  const locale = useLocale();
  const [failed, setFailed] = useState(false);
  const caption = locale === "en" ? captionEn : captionEl;
  const aria = locale === "en" ? ariaLabelEn : ariaLabelEl;

  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden border border-white/10 bg-monks-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent focus-visible:ring-offset-2 focus-visible:ring-offset-monks-black ${
        compact ? "rounded-lg" : "rounded-xl"
      }`}
      aria-label={aria}
    >
      <div className="bg-[#0c0e12]">
        {!failed ? (
          // eslint-disable-next-line @next/next/no-img-element -- intrinsic height
          <img
            src={imageUrl}
            alt=""
            className="block h-auto w-full max-w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            decoding="async"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className={`flex flex-col items-center justify-center gap-2 px-4 text-center ${
              compact ? "min-h-[72px] py-4" : "min-h-[120px] py-8"
            }`}
          >
            <ExternalLink
              className={`text-monks-accent ${compact ? "h-5 w-5" : "h-7 w-7"}`}
              aria-hidden
            />
            <span
              className={`font-medium text-monks-light ${compact ? "text-xs" : "text-sm"}`}
            >
              {locale === "el"
                ? "Έγγραφο προγράμματος (PDF)"
                : "Programme document (PDF)"}
            </span>
          </div>
        )}
      </div>
      <div
        className={
          compact
            ? "flex items-center justify-between gap-2 border-t border-white/10 bg-monks-black/70 px-3 py-2"
            : "flex items-center justify-between gap-3 border-t border-white/10 bg-monks-black/70 px-4 py-3"
        }
      >
        <span
          className={`font-medium uppercase tracking-wide text-monks-light ${
            compact ? "text-[9px] leading-tight sm:text-[10px]" : "text-[11px] sm:text-xs"
          }`}
        >
          {caption}
        </span>
        <span
          className={`inline-flex shrink-0 items-center gap-1 font-semibold text-monks-accent ${
            compact ? "text-xs" : "gap-1.5 text-sm"
          }`}
        >
          PDF
          <ExternalLink className={compact ? "h-3 w-3" : "h-4 w-4"} aria-hidden />
        </span>
      </div>
    </a>
  );
}
