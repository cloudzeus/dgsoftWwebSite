"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Cookie } from "lucide-react";

type LegalPageData = {
  titleEl: string;
  titleEn: string;
  contentEl: string;
  contentEn: string;
};

type Props = {
  slug: string | null;
  locale: "el" | "en";
  onClose: () => void;
};

const SLUG_ICON: Record<string, React.ElementType> = {
  "privacy-policy": Shield,
  "cookie-policy": Cookie,
};

export function LegalModal({ slug, locale, onClose }: Props) {
  const [data, setData] = React.useState<LegalPageData | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!slug) {
      setData(null);
      return;
    }
    setLoading(true);
    fetch(`/api/legal/${slug}`)
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [slug]);

  // Lock body scroll + close on Escape
  React.useEffect(() => {
    if (!slug) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handler);
    };
  }, [slug, onClose]);

  const title = data ? (locale === "en" ? data.titleEn : data.titleEl) : "";
  const content = data ? (locale === "en" ? data.contentEn : data.contentEl) : "";
  const Icon = slug ? (SLUG_ICON[slug] ?? Shield) : Shield;

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {slug && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="w-full max-w-2xl max-h-[88vh] bg-[#0d1117] border border-white/10 rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-8 pt-8 pb-6 border-b border-white/5 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-monks-accent/10 border border-monks-accent/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-monks-accent" />
                </div>
                <div>
                  {loading ? (
                    <div className="h-6 w-48 bg-white/5 rounded-lg animate-pulse" />
                  ) : (
                    <h2 className="text-xl font-black text-white leading-tight">
                      {title}
                    </h2>
                  )}
                  <p className="text-monks-accent text-xs font-bold mt-0.5 tracking-widest uppercase">
                    DGSOFT
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-monks-light hover:text-white transition-all duration-150 shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6 scrollbar-thin">
              {loading ? (
                <div className="space-y-3 py-4">
                  {[100, 90, 75, 95, 60, 80].map((w, i) => (
                    <div
                      key={i}
                      className="h-4 bg-white/5 rounded-lg animate-pulse"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="
                    prose prose-invert prose-sm max-w-none
                    prose-headings:text-white prose-headings:font-black
                    prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
                    prose-p:text-monks-light prose-p:leading-relaxed
                    prose-a:text-monks-accent prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white
                    prose-ul:text-monks-light prose-ol:text-monks-light
                    prose-li:marker:text-monks-accent
                    prose-hr:border-white/10
                    prose-blockquote:border-l-monks-accent prose-blockquote:text-monks-light
                  "
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-white/5 shrink-0 flex items-center justify-between gap-4">
              <p className="text-monks-light text-xs">
                © {new Date().getFullYear()} DGSOFT.{" "}
                {locale === "el"
                  ? "Με την επιφύλαξη παντός δικαιώματος."
                  : "All rights reserved."}
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-monks-accent text-white text-sm font-bold hover:bg-monks-accent/90 active:scale-95 transition-all shadow-lg shadow-monks-accent/20"
              >
                {locale === "el" ? "Κλείσιμο" : "Close"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
