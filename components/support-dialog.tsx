"use client"

import * as React from "react"
import Link from "next/link"
import { CheckCircle2Icon, LoaderIcon, PaperclipIcon, XIcon } from "lucide-react"

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
import { saveTicket, tokenFromStatusUrl } from "@/lib/support-tickets"

type SubmitResult = {
  code?: string
  statusUrl?: string
  duplicate?: boolean
  attachments?: number
}

const MAX_FILES = 3
const MAX_FILE_BYTES = 5 * 1024 * 1024
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"]

export function SupportDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [result, setResult] = React.useState<SubmitResult | null>(null)
  const [files, setFiles] = React.useState<File[]>([])
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) {
      setError(null)
      setResult(null)
      setSubmitting(false)
      setFiles([])
    }
  }

  function addFiles(list: FileList | null) {
    if (!list) return
    setError(null)
    const next = [...files]
    for (const f of Array.from(list)) {
      if (next.length >= MAX_FILES) {
        setError(`Έως ${MAX_FILES} εικόνες ανά αίτημα.`)
        break
      }
      if (!ALLOWED_TYPES.includes(f.type)) {
        setError("Επιτρέπονται μόνο εικόνες JPG, PNG ή WebP.")
        continue
      }
      if (f.size > MAX_FILE_BYTES) {
        setError(`Το «${f.name}» ξεπερνά τα 5MB.`)
        continue
      }
      if (!next.some((x) => x.name === f.name && x.size === f.size)) next.push(f)
    }
    setFiles(next)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const form = e.currentTarget
    const fd = new FormData(form)
    const subject = String(fd.get("subject") ?? "")

    try {
      let res: Response
      if (files.length > 0) {
        const out = new FormData()
        out.set("name", String(fd.get("name") ?? ""))
        out.set("email", String(fd.get("email") ?? ""))
        out.set("subject", subject)
        out.set("body", String(fd.get("body") ?? ""))
        out.set("website", String(fd.get("website") ?? "")) // honeypot
        for (const f of files) out.append("files", f, f.name)
        res = await fetch("/api/support", { method: "POST", body: out })
      } else {
        res = await fetch("/api/support", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: String(fd.get("name") ?? ""),
            email: String(fd.get("email") ?? ""),
            subject,
            body: String(fd.get("body") ?? ""),
            website: String(fd.get("website") ?? ""),
          }),
        })
      }
      const data = await res.json().catch(() => null)

      if (!res.ok) {
        const messages: Record<number, string> = {
          401: "Σφάλμα ταυτοποίησης με το σύστημα υποστήριξης.",
          403: "Η προέλευση του αιτήματος δεν επιτρέπεται.",
          413: "Τα αρχεία είναι πολύ μεγάλα.",
          422: "Ελλιπή ή μη έγκυρα πεδία — ελέγξτε τη φόρμα.",
          429: "Πολλά αιτήματα — δοκιμάστε ξανά σε λίγη ώρα.",
        }
        setError(
          data?.error || messages[res.status] || "Η υποβολή απέτυχε. Δοκιμάστε ξανά."
        )
        return
      }

      const code: string | undefined = data?.code ?? data?.ticket?.code
      const statusUrl: string | undefined =
        data?.statusUrl ?? data?.ticket?.statusUrl
      if (code && statusUrl) {
        saveTicket({
          code,
          subject,
          statusUrl,
          token: data?.publicToken ?? tokenFromStatusUrl(statusUrl),
          createdAt: new Date().toISOString(),
          attachments:
            typeof data?.attachments === "number" ? data.attachments : files.length,
        })
      }

      setResult({
        code,
        statusUrl,
        duplicate: data?.duplicate === true,
        attachments: typeof data?.attachments === "number" ? data.attachments : undefined,
      })
      form.reset()
      setFiles([])
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
            {typeof result.attachments === "number" && result.attachments > 0 && (
              <p className="text-sm text-muted-foreground">
                Επισυνάφθηκαν {result.attachments}{" "}
                {result.attachments === 1 ? "εικόνα" : "εικόνες"}.
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
            <Link
              href="/support/tickets"
              className="text-sm text-muted-foreground underline underline-offset-4"
              onClick={() => handleOpenChange(false)}
            >
              Δείτε όλα τα αιτήματά σας
            </Link>
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

            <div className="grid gap-2">
              <Label htmlFor="support-files">
                Εικόνες <span className="text-muted-foreground">(προαιρετικά, έως 3 × 5MB)</span>
              </Label>
              <input
                ref={fileInputRef}
                id="support-files"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                disabled={submitting || files.length >= MAX_FILES}
                onChange={(e) => addFiles(e.target.files)}
                className="text-sm file:mr-3 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm file:font-medium"
              />
              {files.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {files.map((f) => (
                    <li
                      key={`${f.name}-${f.size}`}
                      className="flex items-center gap-1.5 rounded-md bg-secondary px-2 py-1 text-xs"
                    >
                      <PaperclipIcon className="size-3" />
                      <span className="max-w-40 truncate">{f.name}</span>
                      <span className="text-muted-foreground">
                        {(f.size / 1024 / 1024).toFixed(1)}MB
                      </span>
                      <button
                        type="button"
                        aria-label={`Αφαίρεση ${f.name}`}
                        onClick={() =>
                          setFiles(files.filter(
                            (x) => !(x.name === f.name && x.size === f.size)
                          ))
                        }
                        disabled={submitting}
                        className="ml-0.5 rounded p-0.5 hover:bg-black/10"
                      >
                        <XIcon className="size-3" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
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
