"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MapPin, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { syncGeodataForCustomers } from "@/app/lib/actions/trdr"

export function SyncGeodataButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSync = () => {
    startTransition(async () => {
      try {
        const result = await syncGeodataForCustomers()
        if (result.success) {
          toast.success(`Geodata updated for ${result.updated} customer(s).`, { duration: 4000 })
          router.refresh()
        } else {
          toast.error(result.message ?? "Geodata sync failed", {
            description: result.errors?.slice(0, 2).join("; "),
            duration: 5000,
          })
          if (result.updated > 0) router.refresh()
        }
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Geodata sync failed")
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
      title="Get latitude/longitude for each customer from address (geocode.maps.co API)."
      className="text-xs"
    >
      {isPending ? (
        <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
      ) : (
        <MapPin className="mr-1.5 h-3.5 w-3.5" />
      )}
      Get coordinates
    </Button>
  )
}
