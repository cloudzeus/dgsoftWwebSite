"use client"

import { useTransition } from "react"
import { createPortal } from "react-dom"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CloudDownload, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { syncAllFromSoftOne } from "@/app/lib/actions/trdr"

const STEPS = [
  "Syncing lookups (Country, TRDPGROUP, TRDBUSINESS)…",
  "Syncing customers from SoftOne (TRDR)…",
  "Saving to database…",
]

export function SyncAllFromSoftOneButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSync = () => {
    startTransition(async () => {
      try {
        const result = await syncAllFromSoftOne()
        if (result.success && result.customers) {
          const c = result.customers
          const l = result.lookups?.counts
          const parts = [`${c.synced} customers (${c.created} new, ${c.updated} updated)`]
          if (l) parts.unshift(`${l.country} countries, ${l.trdpGroup} groups, ${l.trdBusiness} businesses`)
          toast.success(parts.join(" · "), { duration: 5000 })
          router.refresh()
        } else {
          toast.error(result.message ?? "Sync failed", { duration: 5000 })
          if (result.lookups?.counts) router.refresh()
        }
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Sync failed")
      }
    })
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
            <h3 className="text-lg font-semibold">Sync all from SoftOne</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Syncing lookups (country, group, business) then customers. This may take a moment.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {STEPS.map((step, i) => (
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
        title="Sync lookups (Country, TRDPGROUP, TRDBUSINESS) then customers from SoftOne. Use this to fill country and category/group data."
        className="text-xs"
      >
        {isPending ? (
          <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
        ) : (
          <CloudDownload className="mr-1.5 h-3.5 w-3.5" />
        )}
        Sync all from SoftOne
      </Button>
      {preloader}
    </>
  )
}
