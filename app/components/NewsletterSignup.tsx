"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Loader2 } from "lucide-react";

type SignupState = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [accepted, setAccepted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<SignupState>("idle");
  const [message, setMessage] = React.useState<string | null>(null);

  function openModal(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setMessage(null);
    setState("idle");
    setOpen(true);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!accepted) {
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
      setMessage("Η εγγραφή ολοκληρώθηκε. Ευχαριστούμε!");
      setEmail("");
      setName("");
      setAccepted(false);
      setTimeout(() => setOpen(false), 1500);
    } catch {
      setState("error");
      setMessage("Σφάλμα δικτύου. Δοκιμάστε ξανά.");
    }
  }

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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Εγγραφή στο newsletter</DialogTitle>
            <DialogDescription>
              Επιβεβαιώστε τα στοιχεία σας και αποδεχθείτε τους όρους.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Email *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Όνομα (προαιρετικό)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="π.χ. Γιώργος Παπαδόπουλος"
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm"
              />
            </div>
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1"
                required
              />
              <span className="text-muted-foreground">
                Αποδέχομαι τους{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  όρους
                </a>{" "}
                και την{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  πολιτική απορρήτου
                </a>{" "}
                για τη λήψη του newsletter.
              </span>
            </label>

            {message && (
              <p
                className={`text-sm ${
                  state === "success"
                    ? "text-green-600"
                    : state === "error"
                    ? "text-red-600"
                    : "text-muted-foreground"
                }`}
              >
                {message}
              </p>
            )}

            <DialogFooter>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-md border text-sm hover:bg-muted transition-colors"
              >
                Ακύρωση
              </button>
              <button
                type="submit"
                disabled={state === "loading" || !accepted}
                className="px-4 py-2 rounded-md bg-monks-accent text-white text-sm font-medium hover:opacity-90 disabled:opacity-50 inline-flex items-center gap-2"
              >
                {state === "loading" && (
                  <Loader2 className="w-4 h-4 animate-spin" />
                )}
                Ολοκλήρωση εγγραφής
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
