"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/app/context/LocaleContext";

type Props = {
  imageUrl: string;
  pdfUrl: string;
  captionEl: string;
  captionEn: string;
  ariaLabelEl: string;
  ariaLabelEn: string;
  /**
   * Optional target for the logo area. Falls back to the PDF when omitted.
   * Internal paths (starting with "/") navigate in the same tab.
   */
  imageHref?: string;
  imageAriaLabelEl?: string;
  imageAriaLabelEn?: string;
  /** Smaller chrome (e.g. homepage hero at 50% width) */
  compact?: boolean;
  /** Treat this banner as the LCP element — preload + high fetch priority */
  priority?: boolean;
};

export function EspaPdfBanner({
  imageUrl,
  pdfUrl,
  captionEl,
  captionEn,
  ariaLabelEl,
  ariaLabelEn,
  imageHref,
  imageAriaLabelEl,
  imageAriaLabelEn,
  compact = false,
  priority = false,
}: Props) {
  const locale = useLocale();
  const [failed, setFailed] = useState(false);
  const caption = locale === "en" ? captionEn : captionEl;
  const aria = locale === "en" ? ariaLabelEn : ariaLabelEl;
  const imageAria =
    (locale === "en" ? imageAriaLabelEn : imageAriaLabelEl) ?? aria;

  const imageTarget = imageHref ?? pdfUrl;
  const imageIsInternal = imageTarget.startsWith("/");

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent focus-visible:ring-offset-2 focus-visible:ring-offset-monks-black";

  return (
    <div
      className={`flex h-full flex-col overflow-hidden border border-white/10 bg-monks-black/50 ${
        compact ? "rounded-lg" : "rounded-xl"
      }`}
    >
      <Link
        href={imageTarget}
        target={imageIsInternal ? undefined : "_blank"}
        rel={imageIsInternal ? undefined : "noopener noreferrer"}
        aria-label={imageAria}
        className={`group block w-full p-[5px] ${focusRing} ${
          failed ? "bg-[#0c0e12]" : "bg-white"
        }`}
      >
        {!failed ? (
          <div className="relative aspect-[300/51] w-full">
            <Image
              src={imageUrl}
              alt={caption}
              fill
              sizes={compact ? "(max-width: 640px) 90vw, 320px" : "(max-width: 768px) 100vw, 600px"}
              priority={priority}
              fetchPriority={priority ? "high" : "auto"}
              loading={priority ? "eager" : "lazy"}
              className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              onError={() => setFailed(true)}
            />
          </div>
        ) : (
          <div
            className={`flex flex-col items-center justify-center gap-2 px-4 text-center ${
              compact ? "min-h-[72px] py-4" : "min-h-[120px] py-8"
            }`}
          >
            <ExternalLink
              className={`text-monks-red-light ${compact ? "h-5 w-5" : "h-7 w-7"}`}
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
      </Link>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={aria}
        className={
          compact
            ? `mt-auto flex flex-1 items-center justify-between gap-2 border-t border-white/10 bg-monks-black/70 px-3 py-2 ${focusRing}`
            : `mt-auto flex flex-1 items-center justify-between gap-3 border-t border-white/10 bg-monks-black/70 px-4 py-3 ${focusRing}`
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
          className={`inline-flex shrink-0 items-center gap-1 font-semibold text-monks-red-light ${
            compact ? "text-xs" : "gap-1.5 text-sm"
          }`}
        >
          PDF
          <ExternalLink className={compact ? "h-3 w-3" : "h-4 w-4"} aria-hidden />
        </span>
      </a>
    </div>
  );
}
