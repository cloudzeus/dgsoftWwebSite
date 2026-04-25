"use client"

import * as React from "react"
import { ChevronDown, ChevronRight, ClipboardList, Euro, Percent } from "lucide-react"

type ExpenseLimit = {
  id: string
  maxPercentage: number | null
  minPercentage: number | null
  maxAmount: string | number | null
  isMandatory: boolean
  notes: string | null
  expenseCategory: { id: string; code: string; descriptionEL: string } | null
}

type ProgramGroup = {
  programId: string
  programName: string
  limits: ExpenseLimit[]
}

function toPct(v: number | null | undefined) {
  if (v == null) return "—"
  return `${(v * 100).toFixed(2)}%`
}

function toMoney(v: unknown) {
  if (v == null || v === "") return "—"
  const n = Number(v)
  if (!Number.isFinite(n)) return String(v)
  return n.toLocaleString("el-GR") + " €"
}

function ProgramRow({ group }: { group: ProgramGroup }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="border border-[#EDEBE9] rounded-lg overflow-hidden">
      {/* Program header — clickable */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-[#F3F2F1] transition-colors text-left"
      >
        <div className="w-7 h-7 rounded-md bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
          <ClipboardList className="w-3.5 h-3.5 text-[#0078D4]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#201F1E] leading-tight truncate">
            {group.programName}
          </p>
          <p className="text-[11px] text-[#A19F9D] mt-0.5">
            {group.limits.length} κατηγορί{group.limits.length === 1 ? "α" : "ες"}
          </p>
        </div>
        {open
          ? <ChevronDown className="w-4 h-4 text-[#A19F9D] shrink-0" />
          : <ChevronRight className="w-4 h-4 text-[#A19F9D] shrink-0" />}
      </button>

      {/* Expense limits table */}
      {open && (
        <div className="border-t border-[#EDEBE9] bg-[#F3F2F1]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#EDEBE9] bg-white">
                  <th className="px-4 py-2 text-left text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Κωδ.</th>
                  <th className="px-4 py-2 text-left text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Κατηγορία δαπάνης</th>
                  <th className="px-4 py-2 text-right text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Min %</th>
                  <th className="px-4 py-2 text-right text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Max %</th>
                  <th className="px-4 py-2 text-right text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Max ποσό</th>
                  <th className="px-4 py-2 text-center text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Υποχρ.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDEBE9]">
                {group.limits.map(limit => (
                  <tr key={limit.id} className="bg-white hover:bg-[#F3F2F1] transition-colors">
                    <td className="px-4 py-2.5">
                      <span className="font-mono text-[11px] bg-[#F3F2F1] border border-[#EDEBE9] rounded px-1.5 py-0.5 text-[#605E5C]">
                        {limit.expenseCategory?.code || "—"}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-[#201F1E] max-w-sm">
                      <span className="text-sm">{limit.expenseCategory?.descriptionEL || "—"}</span>
                      {limit.notes && (
                        <p className="text-[11px] text-[#A19F9D] mt-0.5 truncate max-w-xs">{limit.notes}</p>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm text-[#605E5C]">
                      {toPct(limit.minPercentage)}
                    </td>
                    <td className="px-4 py-2.5 text-right tabular-nums">
                      {limit.maxPercentage != null ? (
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0078D4]">
                          <Percent className="w-3 h-3" />
                          {(limit.maxPercentage * 100).toFixed(2)}
                        </span>
                      ) : <span className="text-sm text-[#A19F9D]">—</span>}
                    </td>
                    <td className="px-4 py-2.5 text-right tabular-nums">
                      {limit.maxAmount != null && limit.maxAmount !== "" ? (
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#201F1E]">
                          <Euro className="w-3 h-3 text-[#A19F9D]" />
                          {toMoney(limit.maxAmount)}
                        </span>
                      ) : <span className="text-sm text-[#A19F9D]">—</span>}
                    </td>
                    <td className="px-4 py-2.5 text-center">
                      {limit.isMandatory ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          Ναι
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8C6C4] shrink-0" />
                          Όχι
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export function ExpenseLimitsClient({ limits }: { limits: any[] }) {
  // Group by program
  const groups = React.useMemo<ProgramGroup[]>(() => {
    const map = new Map<string, ProgramGroup>()
    for (const row of limits) {
      const pid = row.euProgram?.id ?? "unknown"
      if (!map.has(pid)) {
        map.set(pid, {
          programId: pid,
          programName: row.euProgram?.nameEL ?? "—",
          limits: [],
        })
      }
      map.get(pid)!.limits.push(row)
    }
    return Array.from(map.values()).sort((a, b) => a.programName.localeCompare(b.programName, "el"))
  }, [limits])

  const [allOpen, setAllOpen] = React.useState(false)

  if (groups.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-[#A19F9D]">
        <ClipboardList className="w-10 h-10 mb-3 opacity-40" />
        <p className="text-sm font-medium">Δεν υπάρχουν δεδομένα ορίων δαπανών.</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex items-center justify-between pb-1">
        <p className="text-[11px] text-[#A19F9D]">
          {groups.length} προγράμματα · {limits.length} κατηγορίες
        </p>
        <button
          type="button"
          onClick={() => setAllOpen(o => !o)}
          className="text-[11px] font-semibold text-[#0078D4] hover:underline"
        >
          {allOpen ? "Σύμπτυξη όλων" : "Ανάπτυξη όλων"}
        </button>
      </div>

      {groups.map(g => (
        <ControlledProgramRow key={g.programId} group={g} forceOpen={allOpen} />
      ))}
    </div>
  )
}

function ControlledProgramRow({ group, forceOpen }: { group: ProgramGroup; forceOpen: boolean }) {
  const [open, setOpen] = React.useState(false)

  // Sync with expand-all toggle
  React.useEffect(() => {
    setOpen(forceOpen)
  }, [forceOpen])

  return (
    <div className="border border-[#EDEBE9] rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-[#F3F2F1] transition-colors text-left"
      >
        <div className="w-7 h-7 rounded-md bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
          <ClipboardList className="w-3.5 h-3.5 text-[#0078D4]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#201F1E] leading-tight truncate">
            {group.programName}
          </p>
          <p className="text-[11px] text-[#A19F9D] mt-0.5">
            {group.limits.length} κατηγορί{group.limits.length === 1 ? "α" : "ες"}
          </p>
        </div>
        {open
          ? <ChevronDown className="w-4 h-4 text-[#A19F9D] shrink-0" />
          : <ChevronRight className="w-4 h-4 text-[#A19F9D] shrink-0" />}
      </button>

      {open && (
        <div className="border-t border-[#EDEBE9] bg-[#F3F2F1]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#EDEBE9] bg-white">
                  <th className="px-4 py-2 text-left text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Κωδ.</th>
                  <th className="px-4 py-2 text-left text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Κατηγορία δαπάνης</th>
                  <th className="px-4 py-2 text-right text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Min %</th>
                  <th className="px-4 py-2 text-right text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Max %</th>
                  <th className="px-4 py-2 text-right text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Max ποσό</th>
                  <th className="px-4 py-2 text-center text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Υποχρ.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDEBE9]">
                {group.limits.map(limit => (
                  <tr key={limit.id} className="bg-white hover:bg-[#F3F2F1] transition-colors">
                    <td className="px-4 py-2.5">
                      <span className="font-mono text-[11px] bg-[#F3F2F1] border border-[#EDEBE9] rounded px-1.5 py-0.5 text-[#605E5C]">
                        {limit.expenseCategory?.code || "—"}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-[#201F1E]">
                      <span className="text-sm">{limit.expenseCategory?.descriptionEL || "—"}</span>
                      {limit.notes && (
                        <p className="text-[11px] text-[#A19F9D] mt-0.5">{limit.notes}</p>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-sm text-[#605E5C]">
                      {toPct(limit.minPercentage)}
                    </td>
                    <td className="px-4 py-2.5 text-right tabular-nums">
                      {limit.maxPercentage != null ? (
                        <span className="inline-flex items-center justify-end gap-1 text-sm font-semibold text-[#0078D4]">
                          <Percent className="w-3 h-3" />
                          {(limit.maxPercentage * 100).toFixed(2)}
                        </span>
                      ) : <span className="text-sm text-[#A19F9D]">—</span>}
                    </td>
                    <td className="px-4 py-2.5 text-right tabular-nums">
                      {limit.maxAmount != null && limit.maxAmount !== "" ? (
                        <span className="inline-flex items-center justify-end gap-1 text-sm font-semibold text-[#201F1E]">
                          <Euro className="w-3 h-3 text-[#A19F9D]" />
                          {toMoney(limit.maxAmount)}
                        </span>
                      ) : <span className="text-sm text-[#A19F9D]">—</span>}
                    </td>
                    <td className="px-4 py-2.5 text-center">
                      {limit.isMandatory ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          Ναι
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8C6C4] shrink-0" />
                          Όχι
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
