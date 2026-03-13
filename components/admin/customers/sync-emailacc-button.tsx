"use client"

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Mail, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { syncEmailAccFromSoftOne } from "@/app/lib/actions/trdr"

export function SyncEmailAccButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSync = () => {
    startTransition(async () => {
      try {
        const result = await syncEmailAccFromSoftOne()
        if (result.success) {
          toast.success(`Email fields (EMAILACC, CCCEMAILMAR) updated for ${result.updated} customer(s).`, { duration: 4000 })
          router.refresh()
        } else {
          toast.error(result.message ?? "EMAILACC sync failed")
          if (result.updated > 0) router.refresh()
        }
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Email fields sync failed")
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
      title="Fetch EMAILACC and CCCEMAILMAR from SoftOne and update our database for all matching customers."
      className="text-xs"
    >
      {isPending ? (
        <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
      ) : (
        <Mail className="mr-1.5 h-3.5 w-3.5" />
      )}
      Update email fields
    </Button>
  )
}
