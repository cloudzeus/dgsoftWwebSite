"use client"

import { useTransition } from "react"
import { createPortal } from "react-dom"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { RefreshCcw, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { syncCustomersFromSoftOne } from "@/app/lib/actions/trdr"

const SYNC_STEPS = [
  "Connecting to SoftOne (CUSTOMER / TRDR)…",
  "Fetching TRDR table data (iconv win1253 → UTF-8)…",
  "Enriching with vat.wwa.gr where AFM is present…",
  "Saving to database (create/update)…",
]

export function SyncCustomersButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSync = () => {
    console.log("[Sync] Button clicked, starting transition")
    startTransition(async () => {
      console.log("[Sync] Transition started, calling syncCustomersFromSoftOne()")
      try {
        const result = await syncCustomersFromSoftOne()
        console.log("[Sync] Server action returned:", {
          success: result.success,
          message: result.message,
          synced: result.synced,
          created: result.created,
          updated: result.updated,
          errorCount: result.errors?.length ?? 0,
        })
        if (result.success) {
          toast.success(
            `Synced ${result.synced} customers (${result.created} created, ${result.updated} updated).`,
            { duration: 5000 }
          )
          router.refresh()
          console.log("[Sync] Success toast + router.refresh()")
        } else {
          toast.error(result.message ?? "Sync failed", {
            description: result.errors?.length ? result.errors.slice(0, 3).join("; ") : undefined,
            duration: 6000,
          })
          console.log("[Sync] Error toast:", result.message, result.errors?.slice(0, 3))
        }
      } catch (e) {
        console.error("[Sync] Exception:", e)
        toast.error(e instanceof Error ? e.message : "Sync failed")
      }
    })
  }

  if (typeof document !== "undefined" && isPending) {
    console.log("[Sync] Preloader active (isPending=true)")
  }
  const preloader =
    typeof document !== "undefined" &&
    isPending &&
    createPortal(
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm"
        aria-busy="true"
        aria-live="polite"
      >
        <div className="bg-card border rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 space-y-6">
          <div className="flex items-center gap-3">
            <Loader2 className="h-10 w-10 animate-spin text-primary shrink-0" />
            <h3 className="text-lg font-semibold">Sync with SoftOne</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Syncing CUSTOMER object → TRDR table. This may take a moment.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {SYNC_STEPS.map((step, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="inline-block size-1.5 rounded-full bg-primary/60" />
                {step}
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground">Do not close this page.</p>
        </div>
      </div>,
      document.body
    )

  return (
    <>
      <Button
        type="button"
        variant="default"
        size="sm"
        onClick={handleSync}
        disabled={isPending}
        title="Sync with SoftOne CUSTOMER object (TRDR table). Uses vat.wwa.gr when available; keeps vat data when different from SoftOne."
      >
        {isPending ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <RefreshCcw className="mr-2 h-4 w-4" />
        )}
        Sync with SoftOne
      </Button>
      {preloader}
    </>
  )
}
