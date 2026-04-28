"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useLocale } from "@/app/context/LocaleContext";
import { LegalModal } from "@/components/legal/legal-modal";

const STORAGE_KEY = "dg-cookie-consent";

type ConsentValue = { analytics: boolean; marketing: boolean; ts: number };

function getStored(): ConsentValue | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentValue;
  } catch {
    return null;
  }
}

function store(val: ConsentValue) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  } catch {}
}

const T = {
  el: {
    title: "Χρησιμοποιούμε cookies",
    body: "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία πλοήγησής σας, να αναλύσουμε την επισκεψιμότητα και να προσαρμόσουμε το περιεχόμενο. Μπορείτε να επιλέξετε ποια cookies αποδέχεστε.",
    policyLink: "Πολιτική Cookies",
    acceptAll: "Αποδοχή Όλων",
    necessary: "Μόνο Αναγκαία",
  },
  en: {
    title: "We use cookies",
    body: "We use cookies to enhance your browsing experience, analyse traffic and personalise content. You can choose which cookies to accept.",
    policyLink: "Cookie Policy",
    acceptAll: "Accept All",
    necessary: "Necessary Only",
  },
};

export function CookieBanner() {
  const locale = useLocale();
  const t = T[locale] ?? T.el;
  const [visible, setVisible] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't flash on first paint
    const timer = setTimeout(() => {
      if (!getStored()) setVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  function acceptAll() {
    store({ analytics: true, marketing: true, ts: Date.now() });
    setVisible(false);
  }

  function acceptNecessary() {
    store({ analytics: false, marketing: false, ts: Date.now() });
    setVisible(false);
  }

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[300] px-4 pb-4 md:px-6 md:pb-6"
            role="dialog"
            aria-label={t.title}
            aria-modal="false"
          >
            <div className="max-w-4xl mx-auto bg-[#18181c] border border-white/10 rounded-2xl shadow-[0_8px_64px_rgba(0,0,0,0.6)] p-5 md:p-6">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 w-10 h-10 rounded-full bg-monks-accent/10 border border-monks-accent/20 flex items-center justify-center mt-0.5">
                  <Cookie className="w-5 h-5 text-monks-accent" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm mb-1">{t.title}</p>
                  <p className="text-monks-light text-xs leading-relaxed">
                    {t.body}{" "}
                    <button
                      onClick={() => setPolicyOpen(true)}
                      className="text-monks-accent hover:underline focus-visible:outline-none"
                    >
                      {t.policyLink}
                    </button>
                    .
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <button
                      onClick={acceptAll}
                      className="px-5 py-2.5 bg-monks-accent text-white text-sm font-semibold rounded-full hover:bg-monks-accent/90 transition-colors"
                    >
                      {t.acceptAll}
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/15 transition-colors border border-white/10"
                    >
                      {t.necessary}
                    </button>
                  </div>
                </div>

                {/* Close (same as necessary) */}
                <button
                  onClick={acceptNecessary}
                  className="shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-monks-light hover:text-white hover:bg-white/10 transition-all mt-0.5"
                  aria-label="Κλείσιμο"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <LegalModal
        slug={policyOpen ? "cookie-policy" : null}
        locale={locale}
        onClose={() => setPolicyOpen(false)}
      />
    </>
  );
}
