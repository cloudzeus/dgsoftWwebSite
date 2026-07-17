"use client"

import * as React from "react"
import {
  ExternalLinkIcon,
  LoaderIcon,
  PaperclipIcon,
  RefreshCwIcon,
  Trash2Icon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SupportDialog } from "@/components/support-dialog"
import { loadTickets, removeTicket, type StoredTicket } from "@/lib/support-tickets"

type LiveStatus = {
  status: string
  statusLabel: string
  events?: { type: string; label?: string; at?: string }[]
}

const STATUS_STYLE: Record<string, string> = {
  resolved: "bg-green-100 text-green-800",
  closed: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  needs_info: "bg-amber-100 text-amber-900",
  merged: "bg-muted text-muted-foreground",
}

const dateFmt = new Intl.DateTimeFormat("el-GR", {
  dateStyle: "medium",
  timeStyle: "short",
})

export function TicketHistory() {
  const [tickets, setTickets] = React.useState<StoredTicket[] | null>(null)
  const [statuses, setStatuses] = React.useState<Record<string, LiveStatus>>({})
  const [refreshing, setRefreshing] = React.useState(false)

  const refresh = React.useCallback(async (list: StoredTicket[]) => {
    setRefreshing(true)
    const next: Record<string, LiveStatus> = {}
    await Promise.all(
      list.map(async (t) => {
        try {
          const res = await fetch(
            `/api/support/status?code=${encodeURIComponent(t.code)}&token=${encodeURIComponent(t.token)}`,
            { cache: "no-store" }
          )
          if (!res.ok) return
          const data = await res.json()
          if (data?.status && data?.statusLabel) {
            next[t.code] = { status: data.status, statusLabel: data.statusLabel }
          }
        } catch {
          // αδιάφορο — η γραμμή απλώς δεν θα δείξει live κατάσταση
        }
      })
    )
    setStatuses((prev) => ({ ...prev, ...next }))
    setRefreshing(false)
  }, [])

  React.useEffect(() => {
    const list = loadTickets()
    setTickets(list)
    if (list.length > 0) void refresh(list)
  }, [refresh])

  function handleRemove(code: string) {
    removeTicket(code)
    setTickets((prev) => (prev ? prev.filter((t) => t.code !== code) : prev))
  }

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Τα αιτήματα υποστήριξής μου
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Το ιστορικό αποθηκεύεται μόνο σε αυτόν τον browser. Για κάθε αίτημα
            έχετε λάβει και email με τον σύνδεσμο παρακολούθησης.
          </p>
        </div>
        <div className="flex gap-2">
          {tickets && tickets.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => tickets && refresh(tickets)}
              disabled={refreshing}
            >
              {refreshing ? (
                <LoaderIcon className="size-4 animate-spin" />
              ) : (
                <RefreshCwIcon className="size-4" />
              )}
              Ανανέωση
            </Button>
          )}
          <SupportDialog>
            <Button size="sm">Νέο αίτημα</Button>
          </SupportDialog>
        </div>
      </div>

      {tickets === null ? (
        <p className="text-sm text-muted-foreground">Φόρτωση…</p>
      ) : tickets.length === 0 ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Δεν υπάρχουν αιτήματα</CardTitle>
            <CardDescription>
              Όταν υποβάλετε αίτημα υποστήριξης από αυτόν τον browser, θα
              εμφανίζεται εδώ με την τρέχουσα κατάστασή του.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {tickets.map((t) => {
            const live = statuses[t.code]
            const badgeClass =
              (live && STATUS_STYLE[live.status]) ?? "bg-blue-100 text-blue-800"
            return (
              <Card key={t.code}>
                <CardContent className="flex flex-wrap items-center justify-between gap-3 py-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-sm font-semibold">
                        {t.code}
                      </span>
                      <Badge variant="secondary" className={badgeClass}>
                        {live?.statusLabel ?? "—"}
                      </Badge>
                      {typeof t.attachments === "number" && t.attachments > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <PaperclipIcon className="size-3" />
                          {t.attachments}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 truncate text-sm">{t.subject}</p>
                    <p className="text-xs text-muted-foreground">
                      {dateFmt.format(new Date(t.createdAt))}
                    </p>
                    {live?.status === "needs_info" && (
                      <p className="mt-1 text-xs font-medium text-amber-700">
                        Η ομάδα περιμένει την απάντησή σας — ανοίξτε το ticket για
                        να απαντήσετε.
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Button asChild variant="outline" size="sm">
                      <a href={t.statusUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="size-4" />
                        Προβολή
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Αφαίρεση ${t.code} από το ιστορικό`}
                      onClick={() => handleRemove(t.code)}
                    >
                      <Trash2Icon className="size-4 text-muted-foreground" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </main>
  )
}
