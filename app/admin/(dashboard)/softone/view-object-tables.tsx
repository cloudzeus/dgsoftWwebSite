"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Loader2Icon, TableIcon } from "lucide-react"
import type { SoftOneTableItem, SoftOneFieldItem } from "@/lib/softone"

type Props = {
  disabled?: boolean
}

export function ViewObjectTables({ disabled }: Props) {
  const [objectName, setObjectName] = useState("")
  const [open, setOpen] = useState(false)
  const [tables, setTables] = useState<SoftOneTableItem[] | null>(null)
  const [tablesError, setTablesError] = useState<string | null>(null)
  const [loadingTables, setLoadingTables] = useState(false)
  const [fieldsByTable, setFieldsByTable] = useState<Record<string, SoftOneFieldItem[]>>({})
  const [fieldErrorsByTable, setFieldErrorsByTable] = useState<Record<string, string>>({})
  const [loadingTable, setLoadingTable] = useState<string | null>(null)
  const [expandedValue, setExpandedValue] = useState<string | undefined>(undefined)

  const loadTables = useCallback(async (name: string) => {
    if (!name.trim()) return
    setLoadingTables(true)
    setTablesError(null)
    setTables(null)
    try {
      const res = await fetch(`/api/softone/objects/${encodeURIComponent(name.trim())}/tables`, {
        credentials: "include",
      })
      const data = await res.json()
      if (!res.ok) {
        setTablesError(data.error ?? `Error ${res.status}`)
        setTables(null)
        return
      }
      setTables(data.tables ?? [])
      setTablesError(null)
    } catch (e) {
      setTablesError(e instanceof Error ? e.message : "Failed to load tables")
      setTables(null)
    } finally {
      setLoadingTables(false)
    }
  }, [])

  const handleViewTables = () => {
    const name = objectName.trim()
    if (!name) return
    setOpen(true)
    loadTables(name)
  }

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen)
      if (!isOpen) {
        setExpandedValue(undefined)
        setFieldsByTable({})
        setFieldErrorsByTable({})
        setTables(null)
        setTablesError(null)
      }
    },
    []
  )

  const loadFieldsForTable = useCallback(
    async (objName: string, table: SoftOneTableItem) => {
      const key = table.name
      if (fieldsByTable[key]) return
      setLoadingTable(key)
      setFieldErrorsByTable((prev) => ({ ...prev, [key]: "" }))
      try {
        const url = new URL(
          `/api/softone/objects/${encodeURIComponent(objName)}/tables/${encodeURIComponent(table.name)}/fields`,
          window.location.origin
        )
        if (table.dbname && table.dbname !== table.name) {
          url.searchParams.set("dbname", table.dbname)
        }
        const res = await fetch(url.toString(), { credentials: "include" })
        const data = await res.json()
        if (!res.ok) {
          setFieldErrorsByTable((prev) => ({ ...prev, [key]: data.error ?? `Error ${res.status}` }))
          return
        }
        setFieldsByTable((prev) => ({ ...prev, [key]: data.fields ?? [] }))
        setFieldErrorsByTable((prev) => ({ ...prev, [key]: "" }))
      } catch (e) {
        setFieldErrorsByTable((prev) => ({
          ...prev,
          [key]: e instanceof Error ? e.message : "Failed to load fields",
        }))
      } finally {
        setLoadingTable(null)
      }
    },
    [fieldsByTable]
  )

  const handleAccordionValueChange = useCallback(
    (value: string | undefined) => {
      setExpandedValue(value)
      const name = objectName.trim()
      if (value && tables && name) {
        const table = tables.find((t) => t.name === value)
        if (table) loadFieldsForTable(name, table)
      }
    },
    [objectName, tables, loadFieldsForTable]
  )

  const displayName = objectName.trim() || "Object"

  return (
    <>
      <div className="flex flex-wrap items-end gap-2">
        <div className="space-y-2">
          <Label htmlFor="object-name">Object name</Label>
          <Input
            id="object-name"
            placeholder="e.g. CUSTOMER, SALDOC"
            value={objectName}
            onChange={(e) => setObjectName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleViewTables()}
            className="font-mono w-48"
            disabled={disabled}
          />
        </div>
        <Button
          type="button"
          variant="secondary"
          onClick={handleViewTables}
          disabled={disabled || !objectName.trim()}
          title="Load tables for this object only"
        >
          <TableIcon className="h-4 w-4" />
          View tables
        </Button>
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="flex max-h-[90vh] w-[min(32rem,95vw)] max-w-2xl flex-col gap-4 overflow-hidden p-6">
          <DialogHeader className="shrink-0 space-y-1.5 text-left">
            <DialogTitle className="font-mono">{displayName}</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Tables for object — expand a table to see its fields.
            </p>
          </DialogHeader>

          <div className="min-h-[200px] flex-1 shrink overflow-y-auto rounded-md border bg-muted/30 p-3">
            {loadingTables && (
              <div className="flex items-center justify-center py-12 text-muted-foreground">
                <Loader2Icon className="h-8 w-8 animate-spin" />
              </div>
            )}
            {tablesError && (
              <p className="py-4 text-sm text-destructive">{tablesError}</p>
            )}
            {!loadingTables && tables && tables.length === 0 && !tablesError && (
              <p className="py-4 text-sm text-muted-foreground">No tables for this object.</p>
            )}
            {!loadingTables && tables && tables.length > 0 && (
              <>
                <h4 className="mb-3 text-sm font-semibold text-foreground">
                  Related tables ({tables.length})
                </h4>
                <Accordion
                  type="single"
                  collapsible
                  value={expandedValue}
                  onValueChange={handleAccordionValueChange}
                  className="w-full rounded-lg border bg-background"
                >
                  {tables.map((table) => (
                    <AccordionItem key={table.name} value={table.name} className="border-b px-3 last:border-b-0">
                      <AccordionTrigger className="py-3 text-left hover:no-underline">
                        <span className="font-mono text-sm font-medium">{table.name}</span>
                        {table.dbname && table.dbname !== table.name && (
                          <span className="ml-2 font-mono text-muted-foreground">
                            ({table.dbname})
                          </span>
                        )}
                        {table.caption && table.caption !== table.name && (
                          <span className="ml-2 text-muted-foreground">
                            — {table.caption}
                          </span>
                        )}
                      </AccordionTrigger>
                      <AccordionContent className="pb-3 pt-1">
                        {loadingTable === table.name && (
                          <div className="flex items-center gap-2 py-2 text-muted-foreground">
                            <Loader2Icon className="h-4 w-4 animate-spin" />
                            <span className="text-xs">Loading fields…</span>
                          </div>
                        )}
                        {fieldErrorsByTable[table.name] && (
                          <p className="py-2 text-xs text-destructive">{fieldErrorsByTable[table.name]}</p>
                        )}
                        {fieldsByTable[table.name] && (
                          <>
                            <p className="mb-2 text-xs font-medium text-muted-foreground">Fields</p>
                            <ul className="space-y-1 text-xs">
                              {fieldsByTable[table.name].map((field) => (
                                <li
                                  key={field.name}
                                  className="flex items-baseline gap-2 border-b border-border/50 py-1 last:border-0"
                                >
                                  <span className="shrink-0 font-mono text-foreground">{field.name}</span>
                                  {field.caption && (
                                    <span className="truncate text-muted-foreground">{field.caption}</span>
                                  )}
                                  {field.type && (
                                    <span className="shrink-0 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                                      {field.type}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
