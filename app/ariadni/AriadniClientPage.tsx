"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Check,
  Cpu,
  ExternalLink,
  Globe,
  Layers,
  Network,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useLocale } from "../context/LocaleContext";
import type { AriadniLocaleContent } from "@/lib/ariadni-content";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function AriadniClientPage({
  logoUrl,
  espaPdfUrl,
  espaPdfBannerUrl,
  contentEL,
  contentEN,
}: {
  logoUrl: string;
  espaPdfUrl: string;
  espaPdfBannerUrl: string;
  contentEL: AriadniLocaleContent;
  contentEN: AriadniLocaleContent;
}) {
  const locale = useLocale();
  const c = locale === "en" ? contentEN : contentEL;
  const [bannerFailed, setBannerFailed] = useState(false);

  return (
    <main className="min-h-screen bg-monks-black flex flex-col overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[min(90vw,720px)] h-[min(90vw,720px)] bg-monks-accent/8 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[min(100vw,900px)] h-[min(100vw,900px)] bg-monks-red-dark/10 rounded-full blur-[140px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14 lg:gap-20"
          >
            <div className="flex-1 space-y-6 md:space-y-8 min-w-0">
              <span className="inline-flex items-center gap-2 text-monks-accent font-semibold tracking-[0.2em] text-xs uppercase">
                <Sparkles className="w-4 h-4 shrink-0" />
                {c.heroBadge}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.08] tracking-tight">
                {c.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-monks-light max-w-2xl leading-relaxed">
                {c.tagline}
              </p>
              {c.heroSubtext && (
                <div
                  className="text-sm text-white/80 max-w-2xl leading-relaxed prose prose-sm prose-invert prose-p:my-1 prose-a:text-white/90 prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: c.heroSubtext }}
                />
              )}
            </div>

            {/* Single glass panel: logo + stats + ESPA banner (same width) */}
            <div className="w-full max-w-md lg:max-w-[420px] shrink-0 mx-auto lg:mx-0 lg:ml-auto">
              <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 md:p-7 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.65)] backdrop-blur-md space-y-6">
                <div className="flex justify-center pb-1">
                  <div className="relative h-32 w-32 md:h-36 md:w-36 rounded-2xl border border-white/10 bg-monks-black/40 p-4 shadow-inner">
                    <Image
                      src={logoUrl}
                      alt="Ariadne Service Hub"
                      fill
                      className="object-contain p-1"
                      sizes="144px"
                      unoptimized
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {c.stats.map((s, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/10 bg-monks-black/35 px-3.5 py-3.5 md:px-4 md:py-4"
                    >
                      <p className="text-[9px] sm:text-[10px] font-bold tracking-wider text-monks-light uppercase mb-1.5 leading-tight">
                        {s.label}
                      </p>
                      <p className="text-base sm:text-lg font-black text-white tabular-nums leading-none">
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-xl border border-white/10 bg-monks-black/50">
                  {/* Banner → opens greece20.gov.gr */}
                  <a
                    href="https://greece20.gov.gr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-[#0c0e12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
                    aria-label={locale === "el" ? "Άνοιγμα greece20.gov.gr σε νέο παράθυρο" : "Open greece20.gov.gr in a new window"}
                  >
                    {!bannerFailed ? (
                      // eslint-disable-next-line @next/next/no-img-element -- natural dimensions required for exact height
                      <img
                        src={espaPdfBannerUrl}
                        alt=""
                        className="block w-full h-auto max-w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        decoding="async"
                        onError={() => setBannerFailed(true)}
                      />
                    ) : (
                      <div className="flex min-h-[120px] flex-col items-center justify-center gap-2 px-4 py-8 text-center">
                        <ExternalLink className="w-7 h-7 text-monks-accent" aria-hidden />
                        <span className="text-sm font-medium text-monks-light">
                          {locale === "el" ? "Έγγραφο προγράμματος (PDF)" : "Programme document (PDF)"}
                        </span>
                      </div>
                    )}
                  </a>

                  {/* PDF row → downloads the PDF */}
                  <a
                    href={espaPdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 border-t border-white/10 bg-monks-black/70 px-4 py-3 hover:bg-monks-black/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monks-accent"
                    aria-label={locale === "el" ? "Λήψη εγγράφου ΕΣΠΑ (PDF)" : "Download ESPA document (PDF)"}
                  >
                    <span className="text-[11px] sm:text-xs font-medium tracking-wide text-monks-light uppercase">
                      {locale === "el" ? "Έγγραφο προγράμματος ΕΣΠΑ" : "ESPA programme document"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-monks-accent shrink-0">
                      PDF
                      <ExternalLink className="w-4 h-4" aria-hidden />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 border-t border-white/10">
        <div className="max-w-[900px] mx-auto">
          <motion.p {...fade} className="text-lg md:text-xl text-monks-light leading-relaxed text-justify">
            {c.intro}
          </motion.p>
        </div>
      </section>

      {/* API & integrations */}
      <section className="relative px-6 md:px-12 py-16 md:py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent border-y border-white/5">
        <div className="max-w-[1100px] mx-auto">
          <motion.div {...fade} className="flex items-center gap-3 mb-8">
            <Network className="w-8 h-8 text-monks-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {c.apiLeadIn}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {c.integrationLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="group rounded-2xl border border-white/10 bg-monks-gray/40 px-5 py-4 hover:border-monks-accent/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                <p className="text-monks-light group-hover:text-white text-sm md:text-base leading-snug">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            {...fade}
            className="mt-12 text-lg md:text-xl text-monks-light leading-relaxed text-justify"
          >
            {c.valueParagraph}
          </motion.p>
        </div>
      </section>

      {/* Feature checks */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[900px] mx-auto">
          <ul className="space-y-4">
            {c.featureChecks.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="flex gap-4 items-start text-monks-light"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-monks-accent/20 text-monks-accent">
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="text-base md:text-lg leading-relaxed pt-0.5">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* DGSOFT partner */}
      <section className="relative px-6 md:px-12 py-20 md:py-28 border-t border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-monks-accent/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <motion.div {...fade} className="mb-10">
            <div className="inline-flex items-center gap-2 text-monks-accent mb-4">
              <Layers className="w-6 h-6" />
              <span className="text-sm font-bold tracking-widest uppercase">
                DGSOFT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
              {c.strategicHeading}
            </h2>
            <div className="text-lg md:text-xl text-monks-light leading-relaxed space-y-6 text-justify whitespace-pre-line">
              {c.partnerIntro}
            </div>
          </motion.div>

          <ul className="space-y-4 mb-10">
            {c.partnerBullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 text-monks-light"
              >
                <Zap className="w-5 h-5 shrink-0 text-monks-accent mt-1" />
                <span className="leading-relaxed">{b}</span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            {...fade}
            className="text-lg md:text-xl text-monks-light leading-relaxed text-justify whitespace-pre-line"
          >
            {c.partnerClosing}
          </motion.p>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-[900px] mx-auto">
          <motion.h2
            {...fade}
            className="text-2xl md:text-3xl font-bold text-white mb-10 flex items-center gap-3"
          >
            <Globe className="w-8 h-8 text-monks-accent shrink-0" />
            {c.advantagesHeading}
          </motion.h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {c.advantages.map((adv, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-monks-black/60 px-5 py-4 text-monks-light"
              >
                <Cpu className="w-5 h-5 text-monks-accent shrink-0" />
                <span>{adv}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.p
            {...fade}
            className="text-xl md:text-2xl font-medium text-white leading-relaxed"
          >
            {c.closingLine}
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
