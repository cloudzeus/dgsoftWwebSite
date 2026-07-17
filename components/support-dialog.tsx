"use client"

import * as React from "react"
import { CheckCircle2Icon, LoaderIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type SubmitResult = {
  code?: string
  statusUrl?: string
  duplicate?: boolean
}

export function SupportDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [result, setResult] = React.useState<SubmitResult | null>(null)

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) {
      setError(null)
      setResult(null)
      setSubmitting(false)
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      body: String(fd.get("body") ?? ""),
      website: String(fd.get("website") ?? ""), // honeypot
    }

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => null)

      if (!res.ok) {
        const messages: Record<number, string> = {
          401: "Σφάλμα ταυτοποίησης με το σύστημα υποστήριξης.",
          403: "Η προέλευση του αιτήματος δεν επιτρέπεται.",
          422: "Ελλιπή ή μη έγκυρα πεδία — ελέγξτε τη φόρμα.",
          429: "Πολλά αιτήματα — δοκιμάστε ξανά σε λίγη ώρα.",
        }
        setError(
          data?.error || messages[res.status] || "Η υποβολή απέτυχε. Δοκιμάστε ξανά."
        )
        return
      }

      setResult({
        code: data?.code ?? data?.ticket?.code,
        statusUrl: data?.statusUrl ?? data?.ticket?.statusUrl,
        duplicate: data?.duplicate === true,
      })
      form.reset()
    } catch {
      setError("Δεν ήταν δυνατή η επικοινωνία με τον διακομιστή.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Υποστήριξη</DialogTitle>
          <DialogDescription>
            Στείλτε μας το αίτημά σας και θα λάβετε email επιβεβαίωσης με τον
            κωδικό του ticket.
          </DialogDescription>
        </DialogHeader>

        {result ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2Icon className="size-10 text-green-600" />
            <p className="font-medium">
              {result.duplicate
                ? "Το αίτημά σας έχει ήδη καταχωρηθεί."
                : "Το αίτημά σας καταχωρήθηκε επιτυχώς."}
            </p>
            {result.code && (
              <p className="text-sm text-muted-foreground">
                Κωδικός: <span className="font-mono font-semibold">{result.code}</span>
              </p>
            )}
            {result.statusUrl && (
              <a
                href={result.statusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary underline underline-offset-4"
              >
                Παρακολούθηση κατάστασης ticket
              </a>
            )}
            <Button
              variant="outline"
              className="mt-2"
              onClick={() => setResult(null)}
            >
              Νέο αίτημα
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-2">
              <Label htmlFor="support-name">Όνομα</Label>
              <Input id="support-name" name="name" required disabled={submitting} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="support-email">Email</Label>
              <Input
                id="support-email"
                name="email"
                type="email"
                required
                disabled={submitting}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="support-subject">Θέμα</Label>
              <Input
                id="support-subject"
                name="subject"
                maxLength={200}
                required
                disabled={submitting}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="support-body">Περιγραφή</Label>
              <Textarea
                id="support-body"
                name="body"
                rows={6}
                maxLength={5000}
                required
                disabled={submitting}
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button type="submit" disabled={submitting}>
              {submitting && <LoaderIcon className="size-4 animate-spin" />}
              Αποστολή
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
