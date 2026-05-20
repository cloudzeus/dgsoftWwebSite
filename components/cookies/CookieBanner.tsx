"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings2 } from "lucide-react";
import { useLocale } from "@/app/context/LocaleContext";
import { LegalModal } from "@/components/legal/legal-modal";
import { readConsent, writeConsent } from "@/lib/cookie-consent";

const T = {
  el: {
    title: "Χρησιμοποιούμε cookies",
    body: "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία πλοήγησης, να αναλύσουμε την επισκεψιμότητα και για marketing. Επιλέξτε ποια αποδέχεστε.",
    policyLink: "Πολιτική Cookies",
    acceptAll: "Αποδοχή Όλων",
    necessary: "Μόνο Αναγκαία",
    customize: "Προσαρμογή",
    save: "Αποθήκευση επιλογών",
    catNecessary: "Αναγκαία",
    catNecessaryDesc: "Απαραίτητα για τη λειτουργία του site. Πάντα ενεργά.",
    catAnalytics: "Analytics",
    catAnalyticsDesc: "Μας βοηθούν να καταλάβουμε πώς χρησιμοποιείται το site (π.χ. Google Analytics).",
    catMarketing: "Marketing",
    catMarketingDesc: "Παρακολούθηση καμπανιών & εξατομικευμένες διαφημίσεις (π.χ. Facebook Pixel).",
  },
  en: {
    title: "We use cookies",
    body: "We use cookies to enhance browsing, analyse traffic and for marketing. Choose which to accept.",
    policyLink: "Cookie Policy",
    acceptAll: "Accept All",
    necessary: "Necessary Only",
    customize: "Customize",
    save: "Save preferences",
    catNecessary: "Necessary",
    catNecessaryDesc: "Required for the site to work. Always on.",
    catAnalytics: "Analytics",
    catAnalyticsDesc: "Help us understand how the site is used (e.g. Google Analytics).",
    catMarketing: "Marketing",
    catMarketingDesc: "Campaign tracking & personalised ads (e.g. Facebook Pixel).",
  },
};

export function CookieBanner() {
  const locale = useLocale();
  const t = T[locale] ?? T.el;
  const [visible, setVisible] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!readConsent()) setVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  function acceptAll() {
    writeConsent({ analytics: true, marketing: true });
    setVisible(false);
  }

  function acceptNecessary() {
    writeConsent({ analytics: false, marketing: false });
    setVisible(false);
  }

  function saveCustom() {
    writeConsent({ analytics, marketing });
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
                <div className="shrink-0 w-10 h-10 rounded-full bg-monks-accent/10 border border-monks-accent/20 flex items-center justify-center mt-0.5">
                  <Cookie className="w-5 h-5 text-monks-accent" />
                </div>

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

                  {customizing && (
                    <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
                      <CategoryRow
                        title={t.catNecessary}
                        desc={t.catNecessaryDesc}
                        checked
                        disabled
                        onChange={() => {}}
                      />
                      <CategoryRow
                        title={t.catAnalytics}
                        desc={t.catAnalyticsDesc}
                        checked={analytics}
                        onChange={setAnalytics}
                      />
                      <CategoryRow
                        title={t.catMarketing}
                        desc={t.catMarketingDesc}
                        checked={marketing}
                        onChange={setMarketing}
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 mt-4">
                    {!customizing ? (
                      <>
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
                        <button
                          onClick={() => setCustomizing(true)}
                          className="px-5 py-2.5 text-white/80 text-sm font-medium rounded-full hover:bg-white/5 transition-colors inline-flex items-center gap-2"
                        >
                          <Settings2 className="w-3.5 h-3.5" />
                          {t.customize}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={saveCustom}
                          className="px-5 py-2.5 bg-monks-accent text-white text-sm font-semibold rounded-full hover:bg-monks-accent/90 transition-colors"
                        >
                          {t.save}
                        </button>
                        <button
                          onClick={acceptAll}
                          className="px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/15 transition-colors border border-white/10"
                        >
                          {t.acceptAll}
                        </button>
                      </>
                    )}
                  </div>
                </div>

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

function CategoryRow({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 accent-monks-accent"
      />
      <div>
        <p className="text-white text-xs font-semibold">{title}</p>
        <p className="text-monks-light text-[11px] leading-snug">{desc}</p>
      </div>
    </label>
  );
}
