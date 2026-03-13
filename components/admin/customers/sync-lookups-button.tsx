"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Database, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { syncSoftOneLookups } from "@/app/lib/actions/trdr"

export function SyncLookupsButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSync = () => {
    startTransition(async () => {
      try {
        const result = await syncSoftOneLookups()
        if (result.success && result.counts) {
          toast.success(
            `Lookups synced: ${result.counts.country} countries, ${result.counts.trdpGroup} groups, ${result.counts.trdBusiness} businesses.`,
            { duration: 4000 }
          )
          router.refresh()
        } else {
          toast.error(result.message ?? "Sync lookups failed")
        }
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Sync lookups failed")
      }
    })
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleSync}
      disabled={isPending}
      title="Sync SoftOne help tables (Country, TRDPGROUP, TRDBUSINESS) for display names."
      className="text-xs"
    >
      {isPending ? (
        <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
      ) : (
        <Database className="mr-1.5 h-3.5 w-3.5" />
      )}
      Sync lookups
    </Button>
  )
}
