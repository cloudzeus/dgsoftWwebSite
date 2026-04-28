"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/lib/actions/contact";

type Locale = "el" | "en";

const T = {
  el: {
    name: "Όνομα",
    namePh: "Όνομα Επώνυμο",
    email: "Email",
    emailPh: "email@εταιρεία.gr",
    company: "Εταιρεία",
    companyPh: "Επωνυμία επιχείρησης",
    message: "Μήνυμα",
    messagePh: "Πώς μπορούμε να σας βοηθήσουμε;",
    send: "Αποστολή Μηνύματος",
    sending: "Αποστολή…",
    successTitle: "Το μήνυμά σας στάλθηκε!",
    successBody: "Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.",
    sendAnother: "Αποστολή νέου μηνύματος",
  },
  en: {
    name: "Name",
    namePh: "First Last",
    email: "Email",
    emailPh: "email@company.com",
    company: "Company",
    companyPh: "Company name",
    message: "Message",
    messagePh: "How can we help you?",
    send: "Send Message",
    sending: "Sending…",
    successTitle: "Message sent!",
    successBody: "We'll get back to you as soon as possible.",
    sendAnother: "Send another message",
  },
};

type Props = { locale?: Locale; onSuccess?: () => void };

export function ContactForm({ locale = "el", onSuccess }: Props) {
  const t = T[locale];
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const inputCls =
    "w-full bg-monks-gray border border-white/10 rounded-xl px-5 py-4 text-white placeholder-monks-light/50 focus:border-monks-accent focus:outline-none transition-colors";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await submitContactForm(form);
    setLoading(false);
    if (res.success) {
      setSuccess(true);
      onSuccess?.();
    } else {
      setError(res.error ?? "Σφάλμα αποστολής.");
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <div>
          <p className="text-xl font-semibold text-white mb-1">{t.successTitle}</p>
          <p className="text-monks-light text-sm">{t.successBody}</p>
        </div>
        <button
          onClick={() => { setSuccess(false); setForm({ name: "", email: "", company: "", message: "" }); }}
          className="text-sm text-monks-light hover:text-white underline underline-offset-4 transition-colors"
        >
          {t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-monks-light mb-2">{t.name}</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls}
            placeholder={t.namePh}
          />
        </div>
        <div>
          <label className="block text-sm text-monks-light mb-2">{t.email}</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls}
            placeholder={t.emailPh}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-monks-light mb-2">{t.company}</label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className={inputCls}
          placeholder={t.companyPh}
        />
      </div>

      <div>
        <label className="block text-sm text-monks-light mb-2">{t.message}</label>
        <textarea
          rows={5}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputCls} resize-none`}
          placeholder={t.messagePh}
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-monks-black font-bold py-5 rounded-xl hover:bg-monks-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t.sending}
          </>
        ) : (
          <>
            {t.send}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}
