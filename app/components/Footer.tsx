"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
  Music2,
  type LucideIcon,
} from "lucide-react";
import {
  renderCopyright,
  type FooterLocaleContent,
  type FooterSocialIcon,
} from "@/lib/footer-content";
import { useFooterContent } from "../context/FooterContext";
import { useLocale } from "../context/LocaleContext";

/** TikTok has no official lucide icon in older versions — Music2 is used as a stand-in. */
const SOCIAL_ICON_MAP: Record<FooterSocialIcon, LucideIcon> = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  github: Github,
  youtube: Youtube,
  tiktok: Music2,
  mail: Mail,
};

function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

export default function Footer() {
  const ctx = useFooterContent();
  const locale = useLocale();

  if (!ctx) {
    return null;
  }

  const c: FooterLocaleContent =
    locale === "en" ? ctx.contentEN : ctx.contentEL;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-monks-black border-t border-white/10">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold">
                <span className="text-white">{c.brandPrefix}</span>
                <span className="gradient-text">{c.brandHighlight}</span>
              </span>
            </Link>
            <p className="text-monks-light max-w-sm mb-8">{c.tagline}</p>

            {/* Social Links */}
            <div className="flex gap-4 flex-wrap">
              {c.socials.map((social, index) => {
                const Icon = SOCIAL_ICON_MAP[social.icon] ?? Mail;
                const external = isExternal(social.href);
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full bg-monks-gray flex items-center justify-center text-monks-light hover:bg-monks-accent hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {c.columns.map((col, colIdx) => (
            <div key={colIdx}>
              <h4 className="text-white font-semibold mb-6">{col.heading}</h4>
              <ul className="space-y-4">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      target={isExternal(link.href) ? "_blank" : undefined}
                      rel={
                        isExternal(link.href)
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-monks-light hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-monks-light text-sm">
            {renderCopyright(c.copyright)}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-monks-light hover:text-white transition-colors group"
          >
            <span className="text-sm">{c.backToTop}</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-monks-accent group-hover:border-monks-accent transition-all">
              <ArrowUpRight className="w-4 h-4 -rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
