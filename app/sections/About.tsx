"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import {
  Award,
  Users,
  Globe,
  Zap,
  ArrowUpRight,
  Clock,
  Shield,
  Star,
  Check,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "../context/LocaleContext";
import type { AboutValueIcon, HomeLocaleContent } from "@/lib/home-content";

const ICON_MAP: Record<AboutValueIcon, LucideIcon> = {
  zap: Zap,
  users: Users,
  globe: Globe,
  award: Award,
  clock: Clock,
  shield: Shield,
  star: Star,
  check: Check,
};

type AboutProps = {
  contentEL: HomeLocaleContent;
  contentEN: HomeLocaleContent;
};

export default function About({ contentEL, contentEN }: AboutProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const locale = useLocale();
  const a = (locale === "en" ? contentEN : contentEL).about;

  return (
    <section id="about" className="py-32 bg-monks-black relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-bold text-white/[0.02] whitespace-nowrap">
          DGSOFT
        </span>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        {/* Main Statement */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <span className="section-number">{a.sectionLabel}</span>
          <h2 className="text-display-lg font-bold text-white max-w-5xl mb-12">
            {a.headingPrefix}
            <span className="gradient-text">{a.headingHighlight}</span>
            {a.headingSuffix}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <p className="text-xl text-monks-light leading-relaxed">
              {a.paragraphs[0]}
            </p>
            <div className="flex flex-col items-start gap-8">
              {a.paragraphs.slice(1).map((p, i) => (
                <p key={i} className="text-xl text-monks-light leading-relaxed">
                  {p}
                </p>
              ))}
              <Link
                href={a.joinCta.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-monks-black font-semibold rounded-full hover:bg-monks-accent hover:text-white transition-all duration-300 group"
              >
                {a.joinCta.label}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <h3 className="text-sm font-medium text-monks-light mb-12 tracking-widest uppercase">
            {a.awardsHeading}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {a.awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="text-5xl font-bold text-white/10 group-hover:text-monks-accent/30 transition-colors mb-4">
                  0{index + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{award.title}</h4>
                <p className="text-monks-light">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-sm font-medium text-monks-light mb-12 tracking-widest uppercase">
            {a.approachHeading}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {a.values.map((value, index) => {
              const Icon = ICON_MAP[value.icon] ?? Zap;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group p-6 rounded-2xl bg-monks-gray/30 border border-white/5 hover:border-monks-accent/30 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-monks-accent mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-monks-light">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {a.stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-monks-light text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
