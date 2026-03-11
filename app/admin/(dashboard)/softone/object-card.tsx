"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
import { TableIcon, Loader2Icon } from "lucide-react"
import type { SoftOneObjectItem, SoftOneTableItem, SoftOneFieldItem } from "@/lib/softone"

type Props = {
  object: SoftOneObjectItem
}

export function SoftOneObjectCard({ object }: Props) {
  const [open, setOpen] = useState(false)
  const [selectedObjectName, setSelectedObjectName] = useState<string | null>(null)
  const [tables, setTables] = useState<SoftOneTableItem[] | null>(null)
  const [tablesError, setTablesError] = useState<string | null>(null)
  const [loadingTables, setLoadingTables] = useState(false)
  const [fieldsByTable, setFieldsByTable] = useState<Record<string, SoftOneFieldItem[]>>({})
  const [fieldErrorsByTable, setFieldErrorsByTable] = useState<Record<string, string>>({})
  const [loadingTable, setLoadingTable] = useState<string | null>(null)
  const [expandedValue, setExpandedValue] = useState<string | undefined>(undefined)

  const objectNameForRequest = selectedObjectName ?? object.name

  const loadTables = useCallback(async (objectName: string) => {
    setLoadingTables(true)
    setTablesError(null)
    const url = `/api/softone/objects/${encodeURIComponent(objectName)}/tables`
    try {
      const res = await fetch(url, { credentials: "include" })
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

  const handleOpenTables = useCallback(() => {
    const name = object.name
    setSelectedObjectName(name)
    setOpen(true)
    setTables(null)
    setTablesError(null)
    loadTables(name)
  }, [object.name, loadTables])

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      setOpen(isOpen)
      if (!isOpen) {
        setSelectedObjectName(null)
        setExpandedValue(undefined)
        setFieldsByTable({})
        setFieldErrorsByTable({})
      }
    },
    []
  )

  const loadFieldsForTable = useCallback(
    async (table: SoftOneTableItem) => {
      const key = table.name
      const objName = objectNameForRequest
      if (!objName) return
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
    [objectNameForRequest, fieldsByTable]
  )

  const handleAccordionValueChange = useCallback(
    (value: string | undefined) => {
      setExpandedValue(value)
      if (value && tables) {
        const table = tables.find((t) => t.name === value)
        if (table) loadFieldsForTable(table)
      }
    },
    [loadFieldsForTable, tables]
  )

  return (
    <>
      <Card className="relative overflow-hidden">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1 h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground"
          onClick={handleOpenTables}
          title="View tables and fields"
          aria-label="View tables and fields"
        >
          <TableIcon className="h-4 w-4" />
        </Button>
        <CardHeader className="pb-2 pr-10">
          <CardTitle className="text-sm font-medium font-mono">{object.name}</CardTitle>
          <CardDescription className="text-xs">{object.caption || object.type}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
            {object.type}
          </span>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="flex max-h-[90vh] w-[min(90vw,72rem)] max-w-[72rem] flex-col gap-3 overflow-hidden p-4 text-xs">
          <DialogHeader className="shrink-0 space-y-1 text-left">
            <DialogTitle className="text-sm">
              {object.caption || object.name}
            </DialogTitle>
            <p className="text-xs text-muted-foreground">
              Object: <span className="font-mono">{object.name}</span> — expand a table to see its fields.
            </p>
          </DialogHeader>

          <div className="min-h-[200px] flex-1 shrink overflow-y-auto rounded-md border bg-muted/30 p-2 text-xs">
            {loadingTables && (
              <div className="flex items-center justify-center py-12 text-muted-foreground text-xs">
                <Loader2Icon className="h-6 w-6 animate-spin" />
              </div>
            )}
            {tablesError && (
              <p className="py-4 text-xs text-destructive">{tablesError}</p>
            )}
            {!loadingTables && tables && tables.length === 0 && !tablesError && (
              <p className="py-4 text-xs text-muted-foreground">No tables for this object.</p>
            )}
            {!loadingTables && tables && tables.length > 0 && (
              <>
                <h4 className="mb-2 text-xs font-semibold text-foreground">
                  Related tables ({tables.length})
                </h4>
                <Accordion
                  type="single"
                  collapsible
                  value={expandedValue}
                  onValueChange={handleAccordionValueChange}
                  className="w-full rounded-lg border bg-background text-xs"
                >
                  {tables.map((table) => (
                    <AccordionItem key={table.name} value={table.name} className="border-b px-2 py-0 last:border-b-0">
                      <AccordionTrigger className="py-2 text-left text-xs hover:no-underline">
                        <span className="font-mono font-medium">{table.name}</span>
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
                      <AccordionContent className="pb-2 pt-0.5 text-xs">
                        {loadingTable === table.name && (
                          <div className="flex items-center gap-2 py-1.5 text-muted-foreground text-[10px]">
                            <Loader2Icon className="h-4 w-4 animate-spin" />
                            <span>Loading fields…</span>
                          </div>
                        )}
                        {fieldErrorsByTable[table.name] && (
                          <p className="py-1.5 text-[10px] text-destructive">{fieldErrorsByTable[table.name]}</p>
                        )}
                        {fieldsByTable[table.name] && (
                          <>
                            <p className="mb-1.5 text-[10px] font-medium text-muted-foreground">Fields</p>
                            <ul className="space-y-0.5 text-[10px]">
                              {fieldsByTable[table.name].map((field) => (
                                <li
                                  key={field.name}
                                  className="flex items-baseline gap-2 border-b border-border/50 py-0.5 last:border-0"
                                >
                                  <span className="shrink-0 font-mono text-foreground">
                                    {field.name}
                                  </span>
                                  {field.caption && (
                                    <span className="truncate text-muted-foreground">
                                      {field.caption}
                                    </span>
                                  )}
                                  {field.type && (
                                    <span className="shrink-0 rounded bg-muted px-1 py-0.5 text-[9px] text-muted-foreground">
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
