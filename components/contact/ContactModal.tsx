"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./ContactForm";

type Locale = "el" | "en";

const T = {
  el: {
    heading: "Ας μιλήσουμε",
    sub: "Συμπληρώστε τη φόρμα ή επικοινωνήστε απευθείας.",
    email: "info@dgsoft.gr",
    phone: "210 5711581",
    address: "Λεωφ. Κηφισού 48, Περιστέρι",
  },
  en: {
    heading: "Let's talk",
    sub: "Fill in the form or reach us directly.",
    email: "info@dgsoft.gr",
    phone: "210 5711581",
    address: "48 Kifisou Ave., Peristeri",
  },
};

type Props = {
  open: boolean;
  onClose: () => void;
  locale?: Locale;
};

export function ContactModal({ open, onClose, locale = "el" }: Props) {
  const t = T[locale];
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Escape/Tab-trap to close + body scroll lock + focus management
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    // Move focus into the dialog once mounted
    const focusTimer = setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
      clearTimeout(focusTimer);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-monks-black/80 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111115] border border-white/10 rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 md:p-8 pb-0">
              <div>
                <h2 id="contact-modal-title" className="text-2xl md:text-3xl font-black text-white mb-1">{t.heading}</h2>
                <p className="text-monks-light text-sm">{t.sub}</p>
              </div>
              <button
                ref={closeBtnRef}
                onClick={onClose}
                className="ml-4 shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-monks-light hover:text-white hover:bg-white/10 transition-all"
                aria-label="Κλείσιμο"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Quick contact info */}
            <div className="flex flex-wrap gap-4 px-6 md:px-8 pt-5 pb-2">
              <a
                href={`mailto:${t.email}`}
                className="flex items-center gap-2 text-xs text-monks-light hover:text-monks-red-light transition-colors"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {t.email}
              </a>
              <a
                href="tel:+302105711581"
                className="flex items-center gap-2 text-xs text-monks-light hover:text-monks-red-light transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {t.phone}
              </a>
              <span className="flex items-center gap-2 text-xs text-monks-light">
                <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                {t.address}
              </span>
            </div>

            <div className="h-px bg-white/10 mx-6 md:mx-8 my-5" />

            {/* Form */}
            <div className="px-6 md:px-8 pb-8">
              <ContactForm locale={locale} onSuccess={() => setTimeout(onClose, 2000)} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
