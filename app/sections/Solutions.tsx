"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "../context/LocaleContext";

export type SolutionService = {
  id: string;
  slug: string;
  nameEL: string;
  nameEN: string | null;
  shortDescriptionEL: string | null;
  shortDescriptionEN: string | null;
  featureImage: string | null;
  category: { nameEL: string; nameEN: string | null };
};

function SolutionCardVideo({ src }: { src: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        });
      },
      { threshold: 0.25, rootMargin: "50px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [src]);
  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

export default function Solutions({ services }: { services: SolutionService[] }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const locale = useLocale();
  const list = services?.length ? services : [];

  const name = (s: SolutionService) => (locale === "en" && s.nameEN ? s.nameEN : s.nameEL);
  const desc = (s: SolutionService) => (locale === "en" && s.shortDescriptionEN ? s.shortDescriptionEN : s.shortDescriptionEL) || (s.shortDescriptionEL || s.shortDescriptionEN || "");
  const categoryTag = (s: SolutionService) => (locale === "en" && s.category?.nameEN ? s.category.nameEN : s.category?.nameEL) || s.category?.nameEN || "Service";

  const sectionTitle = locale === "el" ? "Οι Λύσεις & Υπηρεσίες Μας" : "Our Solutions & Services";
  const sectionLabel = locale === "el" ? "Οι Λύσεις μας" : "Our Solutions";
  const ctaText = locale === "el" ? "Ο ψηφιακός μετασχηματισμός δεν είναι ένα project, αλλά μια συνεχής διαδικασία. Στη DGSOFT αναλαμβάνουμε ρόλο συμβούλου και τεχνικού συνεργάτη σε κάθε βήμα." : "Digital transformation is not a one-off project but an ongoing process. At DGSOFT we act as your advisor and technical partner every step of the way.";
  const ctaButton = locale === "el" ? "Δες όλες τις υπηρεσίες" : "View all services";

  return (
    <section id="solutions" className="py-32 bg-monks-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-monks-red-dark/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <span className="section-number">{sectionLabel}</span>
          <h2 className="text-display-md font-bold text-white max-w-4xl">
            {locale === "el" ? <>Οι Λύσεις & <span className="gradient-text">Υπηρεσίες</span> Μας</> : <>Our Solutions & <span className="gradient-text">Services</span></>}
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {list.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");
            return (
              <Link href={`/services/${service.slug}`} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: "backOut" }}
                  className="group relative h-full"
                >
                  <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-monks-gray border border-white/5 hover:border-monks-accent/50 transition-colors duration-500">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-monks-gray via-transparent to-transparent z-10" />
                      <div className="absolute inset-0 bg-monks-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                      {service.featureImage ? (
                        <>
                          {service.featureImage.endsWith(".mp4") ? (
                            <SolutionCardVideo src={service.featureImage} />
                          ) : (
                            <Image
                              src={service.featureImage}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          )}
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-monks-dark to-monks-gray flex items-center justify-center">
                          <span className="text-monks-light text-sm">{name(service)}</span>
                        </div>
                      )}

                      {/* Number Badge */}
                      <div className="absolute top-6 left-6 z-20">
                        <span className="text-6xl font-bold text-white/10 group-hover:text-monks-accent/30 transition-colors">
                          {number}
                        </span>
                      </div>

                      {/* Arrow Icon */}
                      <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-monks-accent transition-colors">
                        {name(service)}
                      </h3>
                      <p className="text-monks-light mb-6 leading-relaxed flex-grow line-clamp-3 text-justify">
                        {desc(service)}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium text-monks-light bg-white/5 rounded-full border border-white/10">
                          {categoryTag(service)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <p className="text-monks-light mb-8 max-w-2xl mx-auto text-justify">
            {ctaText}
          </p>
          <Link href="/services" className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white hover:text-monks-black transition-all duration-300">
            {ctaButton}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
