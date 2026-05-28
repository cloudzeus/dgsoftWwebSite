"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Loader2, X, CheckCircle2, ShieldCheck } from "lucide-react";

type SignupState = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full bg-monks-gray border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-monks-light/50 focus:border-monks-accent focus:outline-none transition-colors text-sm";

export default function NewsletterSignup() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [accepted, setAccepted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<SignupState>("idle");
  const [message, setMessage] = React.useState<string | null>(null);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  function openModal(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setMessage(null);
    setState("idle");
    setOpen(true);
  }

  function closeModal() {
    if (state === "loading") return;
    setOpen(false);
  }

  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, state]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!accepted) {
      setState("error");
      setMessage("Πρέπει να αποδεχτείτε τους όρους.");
      return;
    }
    setState("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || null,
          termsAccepted: accepted,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setState("error");
        setMessage(data?.error || "Σφάλμα κατά την εγγραφή.");
        return;
      }
      setState("success");
      setMessage("Η εγγραφή ολοκληρώθηκε. Ελέγξτε το email σας!");
      setEmail("");
      setName("");
      setAccepted(false);
      setTimeout(() => setOpen(false), 1800);
    } catch {
      setState("error");
      setMessage("Σφάλμα δικτύου. Δοκιμάστε ξανά.");
    }
  }

  const modal =
    typeof window === "undefined"
      ? null
      : createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                ref={overlayRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
                onClick={(e) => {
                  if (e.target === overlayRef.current) closeModal();
                }}
              >
                <div className="absolute inset-0 bg-monks-black/80 backdrop-blur-sm" />

                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#111115] border border-white/10 rounded-2xl shadow-2xl"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between p-6 md:p-8 pb-0">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black text-white mb-1">
                        Εγγραφή στο newsletter
                      </h2>
                      <p className="text-monks-light text-sm">
                        Επιβεβαιώστε τα στοιχεία σας και αποδεχθείτε τους όρους.
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="ml-4 shrink-0 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-monks-light hover:text-white hover:bg-white/10 transition-all"
                      aria-label="Κλείσιμο"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-start gap-3 px-6 md:px-8 pt-5">
                    <ShieldCheck className="w-4 h-4 text-monks-accent shrink-0 mt-0.5" />
                    <p className="text-xs text-monks-light leading-relaxed">
                      Σεβόμαστε την ιδιωτικότητά σας. Δεν μοιραζόμαστε τα στοιχεία σας με τρίτους.
                    </p>
                  </div>

                  <div className="h-px bg-white/10 mx-6 md:mx-8 my-5" />

                  {/* Form */}
                  <form onSubmit={submit} className="px-6 md:px-8 pb-8 space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-monks-light mb-2 font-semibold">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className={inputCls}
                        autoFocus
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-monks-light mb-2 font-semibold">
                        Όνομα <span className="text-monks-light/60 normal-case font-normal">(προαιρετικό)</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="π.χ. Γιώργος Παπαδόπουλος"
                        className={inputCls}
                      />
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer group">
                      <span className="relative flex shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={accepted}
                          onChange={(e) => setAccepted(e.target.checked)}
                          className="peer sr-only"
                          required
                        />
                        <span className="w-5 h-5 rounded-md border border-white/20 bg-monks-gray peer-checked:bg-monks-accent peer-checked:border-monks-accent transition-colors flex items-center justify-center">
                          {accepted && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                        </span>
                      </span>
                      <span className="text-sm text-monks-light leading-relaxed">
                        Αποδέχομαι τους{" "}
                        <a
                          href="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white underline decoration-white/30 hover:decoration-monks-accent hover:text-monks-accent transition-colors"
                        >
                          όρους
                        </a>{" "}
                        και την{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white underline decoration-white/30 hover:decoration-monks-accent hover:text-monks-accent transition-colors"
                        >
                          πολιτική απορρήτου
                        </a>{" "}
                        για τη λήψη του newsletter.
                      </span>
                    </label>

                    {message && (
                      <div
                        className={`text-sm rounded-xl px-4 py-3 border ${
                          state === "success"
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                            : state === "error"
                            ? "bg-red-500/10 border-red-500/30 text-red-300"
                            : "bg-white/5 border-white/10 text-monks-light"
                        }`}
                      >
                        {message}
                      </div>
                    )}

                    <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                      <button
                        type="button"
                        onClick={closeModal}
                        disabled={state === "loading"}
                        className="px-6 py-3.5 rounded-xl border border-white/10 text-monks-light hover:text-white hover:bg-white/5 transition-all text-sm font-medium disabled:opacity-50"
                      >
                        Ακύρωση
                      </button>
                      <button
                        type="submit"
                        disabled={state === "loading" || !accepted}
                        className="flex-1 px-6 py-3.5 rounded-xl bg-monks-accent text-white text-sm font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all inline-flex items-center justify-center gap-2"
                      >
                        {state === "loading" && (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        )}
                        Ολοκλήρωση εγγραφής
                      </button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        );

  return (
    <div className="mb-8 max-w-sm">
      <h3 className="text-white font-semibold mb-3 text-sm">
        Εγγραφή στο newsletter
      </h3>
      <form onSubmit={openModal} className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-monks-light pointer-events-none" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Το email σας"
            className="w-full pl-9 pr-3 py-2.5 rounded-full bg-monks-gray text-white text-sm placeholder:text-monks-light/60 outline-none border border-white/10 focus:border-monks-accent transition-colors"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2.5 rounded-full bg-monks-accent text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Εγγραφή
        </button>
      </form>

      {modal}
    </div>
  );
}
