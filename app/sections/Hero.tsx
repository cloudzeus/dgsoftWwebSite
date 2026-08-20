"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { EspaPdfBanner } from "@/app/components/EspaPdfBanner";
import { DigitalMaturityModal } from "@/components/DigitalMaturityModal";
import {
  HOME_ESPA_BANNER_1,
  HOME_ESPA_BANNER_2,
  HOME_ESPA_BANNER_3,
} from "@/lib/home-espa-banners";
import { useLocale } from "@/app/context/LocaleContext";
import type { HomeLocaleContent } from "@/lib/home-content";

// Text is visible from frame 1 (opacity stays at 1) so the H1 is paintable for
// LCP measurement and crawlers without JS. The stagger animation is preserved
// as a position-only effect — characters slide up in sequence.
const textVariants = {
  hidden: { y: 30 },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

type HeroProps = {
  contentEL: HomeLocaleContent;
  contentEN: HomeLocaleContent;
};

export default function Hero({ contentEL, contentEN }: HeroProps) {
  const locale = useLocale();
  const c = locale === "en" ? contentEN : contentEL;
  const [maturityOpen, setMaturityOpen] = useState(false);

  const prefixChars = c.titlePrefix.split("");
  const highlightChars = c.titleHighlight.split("");

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-monks-black">
      {/* Background video — wrapper enforces full-bleed; video keeps aspect ratio & is cropped to cover */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <video
          className="pointer-events-none h-full w-full object-cover object-center opacity-60"
          src="https://dgsmart.b-cdn.net/newsletter/newsletter-1787202903818-02e8u5i.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
      {/* Dark overlay to keep text legible on top of the video */}
      <div
        className="absolute inset-0 z-0 bg-monks-black/40"
        aria-hidden="true"
      />

      {/* Background Gradient Orbs — CSS animations to avoid framer-motion main-thread work on first paint */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-orb hero-orb-1 absolute top-1/4 -left-32 w-[600px] h-[600px] bg-monks-accent/30 rounded-full blur-[120px]" />
        <div className="hero-orb hero-orb-2 absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-monks-red-dark/30 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-1 flex-col px-6 md:px-12">
        <div className="mx-auto flex w-full max-w-5xl flex-col justify-start py-24 md:py-28 lg:py-32">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-monks-accent" />
            {c.eyebrow}
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-display-md font-bold text-white mb-10 leading-[1.1] flex flex-wrap"
          >
            {prefixChars.map((char, index) => (
              <motion.span
                key={`p-${index}`}
                variants={textVariants}
                className="inline-block"
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
            {highlightChars.map((char, index) => (
              <motion.span
                key={`h-${index}`}
                variants={textVariants}
                className="gradient-text inline-block"
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline — LCP element. Rendered visible from frame 1 (no opacity gate)
              so it paints without waiting for framer-motion to hydrate. */}
          <div className="text-lg md:text-xl text-monks-light max-w-4xl mb-12 leading-relaxed space-y-4">
            {c.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href={c.primaryCta.href}
              className="group px-8 py-4 bg-white text-monks-black font-semibold rounded-full hover:bg-monks-accent hover:text-white transition-all duration-300 flex items-center gap-3"
            >
              {c.primaryCta.label}
              <span className="hero-arrow-nudge">→</span>
            </Link>

            <button
              type="button"
              onClick={() => setMaturityOpen(true)}
              className="group flex items-center gap-3 text-white hover:text-monks-red-light transition-colors"
            >
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-monks-accent transition-colors">
                <ArrowDown className="w-5 h-5" />
              </div>
              <span className="font-medium text-left">{c.secondaryCta.label}</span>
            </button>
          </div>

          {/* ESPA banners — left-aligned, ~half content width */}
          <div className="mt-10 w-full">
            <div className="grid w-full max-w-[min(100%,22rem)] grid-cols-1 gap-3 lg:max-w-[min(100%,54rem)] lg:grid-cols-3 md:gap-4">
              <EspaPdfBanner
                compact
                priority
                imageUrl={HOME_ESPA_BANNER_1.imageUrl}
                pdfUrl={HOME_ESPA_BANNER_1.pdfUrl}
                imageHref={HOME_ESPA_BANNER_1.imageHref}
                captionEl="Έγγραφο προγράμματος ΕΣΠΑ"
                captionEn="ESPA programme document"
                ariaLabelEl="Άνοιγμα εγγράφου προγράμματος PDF σε νέο παράθυρο"
                ariaLabelEn="Open programme PDF in a new window"
                imageAriaLabelEl="Μετάβαση στη σελίδα του έργου Αριάδνη"
                imageAriaLabelEn="Go to the Ariadne project page"
              />
              <EspaPdfBanner
                compact
                imageUrl={HOME_ESPA_BANNER_2.imageUrl}
                pdfUrl={HOME_ESPA_BANNER_2.pdfUrl}
                captionEl="Έγγραφο προγράμματος ΕΣΠΑ II"
                captionEn="ESPA programme document II"
                ariaLabelEl="Άνοιγμα δεύτερου εγγράφου PDF σε νέο παράθυρο"
                ariaLabelEn="Open second programme PDF in a new window"
              />
              <EspaPdfBanner
                compact
                imageUrl={
                  locale === "en"
                    ? HOME_ESPA_BANNER_3.imageUrlEn
                    : HOME_ESPA_BANNER_3.imageUrlEl
                }
                pdfUrl={
                  locale === "en"
                    ? HOME_ESPA_BANNER_3.pdfUrlEn
                    : HOME_ESPA_BANNER_3.pdfUrlEl
                }
                captionEl="Έγγραφο προγράμματος Αττική"
                captionEn="Attiki programme document"
                ariaLabelEl="Άνοιγμα εγγράφου προγράμματος Αττικής PDF σε νέο παράθυρο"
                ariaLabelEn="Open Attiki programme PDF in a new window"
              />
            </div>
          </div>

          {/* Stats — after copy & CTAs */}
          <div className="mt-12 grid w-full grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4 md:gap-10">
            {c.stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="mb-1 text-3xl font-bold text-white md:text-4xl">
                  {stat.number}
                </div>
                <div className="text-sm text-monks-light">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center pb-6 pt-10">
            <div className="hero-scroll-hint flex flex-col items-center gap-2 text-monks-light">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      <DigitalMaturityModal open={maturityOpen} onOpenChange={setMaturityOpen} />
    </section>
  );
}
