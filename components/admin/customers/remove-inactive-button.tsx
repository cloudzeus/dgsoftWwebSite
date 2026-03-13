"use client"

import { useState } from "react"
import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Trash2, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { deleteInactiveCustomers } from "@/app/lib/actions/trdr"

export function RemoveInactiveButton() {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleConfirm = () => {
    startTransition(async () => {
      try {
        const result = await deleteInactiveCustomers()
        if (result.success) {
          toast.success(`${result.deleted} inactive customer(s) removed from database.`, { duration: 4000 })
          setOpen(false)
          router.refresh()
        } else {
          toast.error(result.message ?? "Failed to remove inactive customers")
        }
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Failed to remove inactive customers")
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          title="Permanently delete all customers with ISACTIVE = 0 from the database."
          className="text-xs font-medium border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground shrink-0"
        >
          <Trash2 className="mr-1.5 h-3.5 w-3.5" />
          Remove inactive (ISACTIVE=0)
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Remove inactive customers</DialogTitle>
          <DialogDescription>
            This will permanently delete all customers with <strong>ISACTIVE = 0</strong> from the database. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isPending}>
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={handleConfirm}
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
            ) : (
              <Trash2 className="mr-1.5 h-3.5 w-3.5" />
            )}
            Delete all (ISACTIVE = 0)
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
