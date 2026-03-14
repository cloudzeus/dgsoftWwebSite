"use client"

import { useState } from "react"
import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { BadgeCheck, Loader2 } from "lucide-react"
import { toast } from "sonner"
import {
  getCustomersKadSyncStatus,
  syncKadAndLegalForAllMissing,
} from "@/app/lib/actions/trdr"

type Step = "idle" | "checking" | "syncing" | "done"

export function SyncKadLegalButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>("idle")
  const [status, setStatus] = useState<{
    alreadyComplete: number
    toSyncCount: number
    noGreekAfm: number
  } | null>(null)
  const [result, setResult] = useState<{
    alreadyComplete: number
    synced: number
    errors: string[]
  } | null>(null)

  const handleOpen = () => {
    setStep("idle")
    setStatus(null)
    setResult(null)
    setOpen(true)
  }

  const handleStart = () => {
    startTransition(async () => {
      try {
        setStep("checking")
        const statusRes = await getCustomersKadSyncStatus()
        if (!statusRes.success) {
          toast.error(statusRes.message ?? "Failed to get sync status")
          setOpen(false)
          return
        }
        setStatus({
          alreadyComplete: statusRes.alreadyComplete,
          toSyncCount: statusRes.toSync.length,
          noGreekAfm: statusRes.noGreekAfm,
        })
        if (statusRes.toSync.length === 0) {
          setResult({
            alreadyComplete: statusRes.alreadyComplete,
            synced: 0,
            errors: [],
          })
          setStep("done")
          toast.success(
            `All customers with Greek AFM already have KAD & legal data (${statusRes.alreadyComplete} complete, ${statusRes.noGreekAfm} skipped – no Greek AFM).`
          )
          return
        }
        setStep("syncing")
        const syncRes = await syncKadAndLegalForAllMissing()
        setResult({
          alreadyComplete: syncRes.alreadyComplete,
          synced: syncRes.synced,
          errors: syncRes.errors ?? [],
        })
        setStep("done")
        if (syncRes.errors.length > 0) {
          toast.warning(
            `KAD & legal sync finished: ${syncRes.synced} synced, ${syncRes.errors.length} error(s).`,
            { description: syncRes.errors.slice(0, 2).join("; "), duration: 6000 }
          )
        } else {
          toast.success(
            `KAD & legal sync completed: ${syncRes.alreadyComplete} already had data, ${syncRes.synced} synced.`,
            { duration: 4000 }
          )
        }
        router.refresh()
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Sync failed")
        setOpen(false)
      }
    })
  }

  const handleClose = () => {
    if (step !== "checking" && step !== "syncing") setOpen(false)
  }

  const isLoading = step === "checking" || step === "syncing"

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleOpen}
        title="Fetch KAD, legal status and established (regist date) from vat.wwa.gr for customers that don't have them yet."
        className="text-xs"
      >
        <BadgeCheck className="mr-1.5 h-3.5 w-3.5" />
        Sync KAD & legal
      </Button>
      <Dialog open={open} onOpenChange={(v) => !isLoading && setOpen(v)}>
        <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => isLoading && e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Sync KAD & legal for customers</DialogTitle>
            <DialogDescription>
              Fetches KADs, legal status and establishment date from vat.wwa.gr for customers with Greek AFM that
              don&apos;t have this data yet.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-2">
            {step === "idle" && (
              <>
                <p className="text-sm text-muted-foreground">
                  First we&apos;ll find which customers already have data, then sync the rest.
                </p>
                <Button onClick={handleStart} disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  Start
                </Button>
              </>
            )}
            {step === "checking" && (
              <div className="flex items-center gap-3 text-sm">
                <Loader2 className="h-5 w-5 shrink-0 animate-spin text-muted-foreground" />
                <span>Checking which customers already have KAD & legal data…</span>
              </div>
            )}
            {step === "syncing" && (
              <div className="flex items-center gap-3 text-sm">
                <Loader2 className="h-5 w-5 shrink-0 animate-spin text-muted-foreground" />
                <span>
                  Syncing KAD & legal for {status?.toSyncCount ?? "…"} customer(s). This may take a few minutes…
                </span>
              </div>
            )}
            {step === "done" && result && (
              <div className="space-y-2 text-sm">
                <p className="font-medium">Completed</p>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  <li>{result.alreadyComplete} already had data</li>
                  <li>{result.synced} synced</li>
                  {result.errors.length > 0 && (
                    <li className="text-destructive">{result.errors.length} error(s)</li>
                  )}
                </ul>
                {result.errors.length > 0 && result.errors.length <= 5 && (
                  <pre className="max-h-32 overflow-auto rounded bg-muted p-2 text-xs">
                    {result.errors.join("\n")}
                  </pre>
                )}
                {result.errors.length > 5 && (
                  <pre className="max-h-32 overflow-auto rounded bg-muted p-2 text-xs">
                    {result.errors.slice(0, 5).join("\n")}
                    {"\n"}… and {result.errors.length - 5} more
                  </pre>
                )}
                <Button onClick={() => setOpen(false)} className="mt-2">
                  Close
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
