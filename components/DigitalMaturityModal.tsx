"use client";

import { useState, useTransition } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle2, Search, Building2, Sparkles } from "lucide-react";

type CompanyInfo = {
  name?: string | null;
  address?: string | null;
  city?: string | null;
  zip?: string | null;
  legalStatus?: string | null;
  kads?: { firm_act_descr: string; firm_act_kind: boolean }[];
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function DigitalMaturityModal({ open, onOpenChange }: Props) {
  const [afm, setAfm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [company, setCompany] = useState<CompanyInfo | null>(null);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [pending, startTransition] = useTransition();

  function resetAll() {
    setAfm("");
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setNotes("");
    setCompany(null);
    setLookupError(null);
    setSubmitError(null);
    setSuccess(false);
  }

  async function lookupAfm() {
    const trimmed = afm.trim();
    if (!/^\d{9}$/.test(trimmed)) {
      setLookupError("Το ΑΦΜ πρέπει να είναι 9 ψηφία.");
      setCompany(null);
      return;
    }
    setLookupError(null);
    setLookupLoading(true);
    try {
      const res = await fetch("/api/digital-maturity/lookup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ afm: trimmed }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setLookupError(data.error || "Δεν βρέθηκαν στοιχεία για το ΑΦΜ.");
        setCompany(null);
      } else {
        setCompany(data.company);
      }
    } catch {
      setLookupError("Σφάλμα δικτύου κατά την αναζήτηση ΑΦΜ.");
    } finally {
      setLookupLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    if (!company) {
      setSubmitError("Παρακαλώ καταχωρήστε έγκυρο ΑΦΜ πρώτα.");
      return;
    }
    if (!name.trim() || !email.trim() || !phone.trim() || !date || !time) {
      setSubmitError("Συμπληρώστε όλα τα υποχρεωτικά πεδία.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/digital-maturity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            afm: afm.trim(),
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            date,
            time,
            notes: notes.trim(),
            company,
          }),
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          setSubmitError(data.error || "Η υποβολή απέτυχε. Παρακαλώ δοκιμάστε ξανά.");
          return;
        }
        setSuccess(true);
      } catch {
        setSubmitError("Σφάλμα δικτύου. Δοκιμάστε ξανά.");
      }
    });
  }

  // Min date = tomorrow
  const minDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) setTimeout(resetAll, 300);
        onOpenChange(o);
      }}
    >
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-white/10 bg-monks-black p-0 text-white sm:rounded-2xl">
        {/* Header with gradient */}
        <div className="relative overflow-hidden rounded-t-2xl border-b border-white/10 bg-gradient-to-br from-monks-accent/20 via-monks-black to-monks-red-dark/20 p-6 sm:p-8">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-monks-accent/30 blur-3xl" aria-hidden />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-monks-red-dark/30 blur-3xl" aria-hidden />
          <DialogHeader className="relative">
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-monks-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Δωρεάν εκτίμηση
            </div>
            <DialogTitle className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              Αξιολόγηση Ψηφιακής Ωριμότητας
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm text-monks-light sm:text-base">
              Συμπληρώστε τα στοιχεία σας και επιλέξτε ημερομηνία επικοινωνίας. Η ομάδα μας θα επικοινωνήσει μαζί σας για μια αναλυτική εκτίμηση χωρίς καμία οικονομική επιβάρυνση.
            </DialogDescription>
          </DialogHeader>
        </div>

        {success ? (
          <div className="flex flex-col items-center gap-4 px-6 py-12 text-center sm:px-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-monks-accent/20">
              <CheckCircle2 className="h-9 w-9 text-monks-accent" />
            </div>
            <h3 className="text-xl font-semibold text-white">Το αίτημά σας καταχωρήθηκε!</h3>
            <p className="max-w-md text-sm text-monks-light">
              Λάβατε email επιβεβαίωσης με τις λεπτομέρειες και σύνδεσμο για το ημερολόγιό σας. Η ομάδα μας θα επικοινωνήσει μαζί σας την ημέρα και ώρα που επιλέξατε.
            </p>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="mt-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-monks-black transition hover:bg-monks-accent hover:text-white"
            >
              Κλείσιμο
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8 sm:py-7">
            {/* AFM */}
            <div className="space-y-2">
              <Label htmlFor="dm-afm" className="text-xs font-medium uppercase tracking-wider text-monks-light">
                ΑΦΜ Επιχείρησης *
              </Label>
              <div className="flex gap-2">
                <Input
                  id="dm-afm"
                  inputMode="numeric"
                  pattern="\d{9}"
                  maxLength={9}
                  placeholder="9 ψηφία"
                  value={afm}
                  onChange={(e) => {
                    setAfm(e.target.value.replace(/\D/g, "").slice(0, 9));
                    setCompany(null);
                    setLookupError(null);
                  }}
                  onBlur={() => afm.length === 9 && !company && lookupAfm()}
                  className="h-11 border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-monks-accent focus-visible:ring-monks-accent/30"
                />
                <button
                  type="button"
                  onClick={lookupAfm}
                  disabled={lookupLoading || afm.length !== 9}
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-monks-accent px-4 text-sm font-semibold text-white transition hover:bg-monks-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {lookupLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
                  Αναζήτηση
                </button>
              </div>
              {lookupError && <p className="text-xs text-red-400">{lookupError}</p>}
            </div>

            {/* Company info card */}
            {company && (
              <div className="rounded-xl border border-monks-accent/30 bg-monks-accent/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-monks-accent">
                  <Building2 className="h-4 w-4" />
                  Στοιχεία Επιχείρησης
                </div>
                <div className="space-y-1 text-sm">
                  {company.name && <div className="font-semibold text-white">{company.name}</div>}
                  {(company.address || company.city) && (
                    <div className="text-monks-light">
                      {[company.address, company.zip, company.city].filter(Boolean).join(", ")}
                    </div>
                  )}
                  {company.legalStatus && (
                    <div className="text-xs text-monks-light/80">{company.legalStatus}</div>
                  )}
                </div>
              </div>
            )}

            {/* Contact grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="dm-name" className="text-xs font-medium uppercase tracking-wider text-monks-light">
                  Ονοματεπώνυμο *
                </Label>
                <Input
                  id="dm-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-11 border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-monks-accent focus-visible:ring-monks-accent/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dm-phone" className="text-xs font-medium uppercase tracking-wider text-monks-light">
                  Τηλέφωνο *
                </Label>
                <Input
                  id="dm-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="h-11 border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-monks-accent focus-visible:ring-monks-accent/30"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="dm-email" className="text-xs font-medium uppercase tracking-wider text-monks-light">
                  Email *
                </Label>
                <Input
                  id="dm-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-monks-accent focus-visible:ring-monks-accent/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dm-date" className="text-xs font-medium uppercase tracking-wider text-monks-light">
                  Ημερομηνία επικοινωνίας *
                </Label>
                <Input
                  id="dm-date"
                  type="date"
                  min={minDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="h-11 border-white/15 bg-white/5 text-white [color-scheme:dark] focus-visible:border-monks-accent focus-visible:ring-monks-accent/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dm-time" className="text-xs font-medium uppercase tracking-wider text-monks-light">
                  Ώρα *
                </Label>
                <select
                  id="dm-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="h-11 w-full rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white focus:border-monks-accent focus:outline-none focus:ring-2 focus:ring-monks-accent/30"
                >
                  <option value="" disabled className="bg-monks-black">Επιλέξτε ώρα</option>
                  {Array.from({ length: 9 }, (_, i) => `${String(9 + i).padStart(2, "0")}:00`).map((slot) => (
                    <option key={slot} value={slot} className="bg-monks-black">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="dm-notes" className="text-xs font-medium uppercase tracking-wider text-monks-light">
                  Σύντομο μήνυμα (προαιρετικό)
                </Label>
                <textarea
                  id="dm-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Πείτε μας λίγα λόγια για τις ανάγκες σας..."
                  className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-monks-accent focus:outline-none focus:ring-2 focus:ring-monks-accent/30"
                />
              </div>
            </div>

            {submitError && (
              <div className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {submitError}
              </div>
            )}

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Άκυρο
              </button>
              <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-monks-accent px-8 py-3 text-sm font-semibold text-white transition hover:bg-monks-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending && <Loader2 className="h-4 w-4 animate-spin" />}
                {pending ? "Υποβολή..." : "Υποβολή Αιτήματος"}
              </button>
            </div>

            <p className="text-center text-[11px] leading-relaxed text-monks-light/60">
              Πατώντας Υποβολή συμφωνείτε με την επικοινωνία από την ομάδα DGSOFT για τους σκοπούς της αξιολόγησης.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
