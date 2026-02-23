"use client"

import * as React from "react"
import { ChevronDown, ChevronRight, Plus, RefreshCcw, Globe, DownloadCloud, MoreHorizontal, Edit, Trash2, Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { createPeriferia, updatePeriferia, deletePeriferia, importKallikratis, translateAllPeriferies } from "@/app/lib/actions/eu-program"

export type PeriferiaType = {
    id: string
    code: string
    nameEL: string
    nameEN: string | null
    level: number
    parentCode: string | null
    children?: PeriferiaType[]
}

// Level metadata
const LEVEL_META: Record<number, { label: string; color: string; bg: string; childLabel: string }> = {
    3: { label: "Περιφέρεια", color: "text-blue-700 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/40", childLabel: "Νομός / Ενότητα" },
    4: { label: "Νομός / Ενότητα", color: "text-emerald-700 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/30", childLabel: "Δήμος" },
    5: { label: "Δήμος", color: "text-amber-700 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/20", childLabel: "Περιοχή" },
    6: { label: "Περιοχή", color: "text-purple-700 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-950/20", childLabel: "" },
}

async function translateSingleNode(node: PeriferiaType): Promise<string | null> {
    const apiKey = process.env.NEXT_PUBLIC_TRANSLATE_ENABLED // just a UI clue; actual call goes through route
    // We call the existing /api/admin/translate route
    const res = await fetch("/api/admin/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: node.nameEL, targetLang: "en" })
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.translated || null;
}

function PeriferiaNode({
    node, depth, onEdit, onDelete, onAddChild, onTranslated
}: {
    node: PeriferiaType
    depth: number
    onEdit: (n: PeriferiaType) => void
    onDelete: (n: PeriferiaType) => void
    onAddChild: (n: PeriferiaType) => void
    onTranslated: (id: string, nameEN: string) => void
}) {
    const [expanded, setExpanded] = React.useState(depth === 0)
    const [translating, setTranslating] = React.useState(false)
    const hasChildren = node.children && node.children.length > 0
    const meta = LEVEL_META[node.level] ?? LEVEL_META[6]
    const indentPx = depth * 20

    const handleTranslate = async () => {
        setTranslating(true)
        try {
            const translated = await translateSingleNode(node)
            if (translated) {
                await updatePeriferia(node.id, { nameEN: translated })
                onTranslated(node.id, translated)
                toast.success(`Translated: ${translated}`)
            } else {
                toast.error("Translation failed")
            }
        } catch (e: any) {
            toast.error(e.message)
        } finally {
            setTranslating(false)
        }
    }

    return (
        <div>
            <div
                className={`flex items-center gap-2 px-3 py-2 hover:bg-muted/40 transition-colors border-b border-border/30 ${meta.bg}`}
                style={{ paddingLeft: `${12 + indentPx}px` }}
            >
                {/* Expand toggle */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className={`flex-shrink-0 p-0.5 rounded hover:bg-black/10 transition-opacity ${hasChildren ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    {expanded
                        ? <ChevronDown className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                        : <ChevronRight className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                    }
                </button>

                {/* Level badge */}
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded border flex-shrink-0 ${meta.color} border-current/30`}>
                    {meta.label}
                </span>

                {/* Code */}
                <span className="font-mono text-xs text-muted-foreground flex-shrink-0">{node.code}</span>

                {/* Name */}
                <span className="flex-1 text-sm font-medium text-foreground truncate">{node.nameEL}</span>

                {/* EN translation */}
                {node.nameEN
                    ? <span className="text-xs text-muted-foreground italic hidden md:block truncate max-w-[200px]">{node.nameEN}</span>
                    : <span className="text-xs text-muted-foreground/40 italic hidden md:block">no translation</span>
                }

                {/* Children count */}
                {hasChildren && (
                    <Badge variant="secondary" className="text-[10px] flex-shrink-0">{node.children!.length}</Badge>
                )}

                {/* Actions */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0 flex-shrink-0">
                            <MoreHorizontal className="h-3.5 w-3.5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        {meta.childLabel && (
                            <>
                                <DropdownMenuItem className="cursor-pointer text-xs" onClick={() => onAddChild(node)}>
                                    <Plus className="w-3.5 h-3.5 mr-2" />Add {meta.childLabel}
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                            </>
                        )}
                        <DropdownMenuItem className="cursor-pointer text-xs" onClick={() => onEdit(node)}>
                            <Edit className="w-3.5 h-3.5 mr-2" />Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-xs" onClick={handleTranslate} disabled={translating}>
                            {translating
                                ? <RefreshCcw className="w-3.5 h-3.5 mr-2 animate-spin" />
                                : <Languages className="w-3.5 h-3.5 mr-2" />
                            }
                            Translate to EN
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer text-xs text-red-500" onClick={() => onDelete(node)}>
                            <Trash2 className="w-3.5 h-3.5 mr-2" />Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Children */}
            {expanded && hasChildren && (
                <div>
                    {node.children!.map(child => (
                        <PeriferiaNode
                            key={child.id}
                            node={child}
                            depth={depth + 1}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onAddChild={onAddChild}
                            onTranslated={onTranslated}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export function DataTablePeriferies({ data: initialData }: { data: PeriferiaType[] }) {
    const [data, setData] = React.useState<PeriferiaType[]>(initialData || [])
    const [search, setSearch] = React.useState("")
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingItem, setEditingItem] = React.useState<PeriferiaType | null>(null)
    const [addingToParent, setAddingToParent] = React.useState<PeriferiaType | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isTranslating, setIsTranslating] = React.useState(false)
    const [isImporting, setIsImporting] = React.useState(false)

    const [formData, setFormData] = React.useState({
        code: "", nameEL: "", nameEN: "", level: 3, parentCode: ""
    })

    const openEdit = (item: PeriferiaType) => {
        setAddingToParent(null)
        setEditingItem(item)
        setFormData({ code: item.code, nameEL: item.nameEL, nameEN: item.nameEN || "", level: item.level, parentCode: item.parentCode || "" })
        setIsDialogOpen(true)
    }

    const openAddRoot = () => {
        setEditingItem(null)
        setAddingToParent(null)
        setFormData({ code: "", nameEL: "", nameEN: "", level: 3, parentCode: "" })
        setIsDialogOpen(true)
    }

    const openAddChild = (parent: PeriferiaType) => {
        setEditingItem(null)
        setAddingToParent(parent)
        const childLevel = Math.min(parent.level + 1, 6)
        setFormData({ code: "", nameEL: "", nameEN: "", level: childLevel, parentCode: parent.code })
        setIsDialogOpen(true)
    }

    const handleDelete = async (item: PeriferiaType) => {
        const meta = LEVEL_META[item.level] ?? LEVEL_META[6]
        if (!confirm(`Delete "${item.nameEL}" (${meta.label}) and all its sub-regions?`)) return
        try {
            await deletePeriferia(item.id)
            toast.success("Region deleted")
            setTimeout(() => window.location.reload(), 500)
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    const handleTranslated = (id: string, nameEN: string) => {
        // Update in local state tree
        const updateTree = (nodes: PeriferiaType[]): PeriferiaType[] =>
            nodes.map(n => n.id === id
                ? { ...n, nameEN }
                : { ...n, children: n.children ? updateTree(n.children) : undefined }
            )
        setData(prev => updateTree(prev))
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            if (!formData.nameEL.trim()) throw new Error("Greek name is required")
            if (!formData.code.trim()) throw new Error("Code is required")

            const payload = {
                code: formData.code.trim(),
                nameEL: formData.nameEL.trim(),
                nameEN: formData.nameEN.trim() || null,
                level: formData.level,
                parentCode: formData.parentCode.trim() || null
            }

            if (editingItem) {
                await updatePeriferia(editingItem.id, payload)
                toast.success("Region updated")
            } else {
                await createPeriferia(payload)
                toast.success("Region created")
            }
            setIsDialogOpen(false)
            setTimeout(() => window.location.reload(), 500)
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    const handleImport = async () => {
        if (!confirm("Sync Kallikratis directory from GitHub? This may take 30-60 seconds.")) return
        setIsImporting(true)
        toast.loading("Syncing Kallikratis data...", { id: 'import' })
        try {
            const res = await importKallikratis()
            toast.success(`Synced ${res.count} regions from Kallikratis!`, { id: 'import' })
            setTimeout(() => window.location.reload(), 1000)
        } catch (err: any) {
            toast.error(`Sync failed: ${err.message}`, { id: 'import' })
        } finally {
            setIsImporting(false)
        }
    }

    const handleTranslateAll = async () => {
        if (!confirm("Translate all regions without English names via AI? Runs in batches of 50.")) return
        setIsTranslating(true)
        toast.loading("AI translating regions...", { id: 'translate' })
        try {
            const res = await translateAllPeriferies()
            if (res.count === 0) {
                toast.success(res.message ?? "All regions already translated!", { id: 'translate' })
            } else {
                toast.success(`Translated ${res.count} regions. ${res.remaining} still pending.`, { id: 'translate' })
            }
            setTimeout(() => window.location.reload(), 1500)
        } catch (err: any) {
            toast.error(err.message, { id: 'translate' })
        } finally {
            setIsTranslating(false)
        }
    }

    // Simple search filter on names
    const filteredData = React.useMemo(() => {
        if (!search.trim()) return data
        const q = search.toLowerCase()
        const filterTree = (nodes: PeriferiaType[]): PeriferiaType[] =>
            nodes.flatMap(n => {
                const match = n.nameEL.toLowerCase().includes(q) || (n.nameEN?.toLowerCase().includes(q) ?? false) || n.code.includes(q)
                const filteredChildren = n.children ? filterTree(n.children) : []
                if (match || filteredChildren.length > 0) return [{ ...n, children: filteredChildren }]
                return []
            })
        return filterTree(data)
    }, [data, search])

    // Legend
    const levelEntries = Object.entries(LEVEL_META).filter(([, v]) => v.label)

    return (
        <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Input
                        placeholder="Search region, code..."
                        className="max-w-xs text-sm"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <Button variant="outline" size="sm" onClick={openAddRoot}>
                        <Plus className="w-4 h-4 mr-1" /> Add Root
                    </Button>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleTranslateAll}
                        disabled={isTranslating}
                        className="border-indigo-400/40 text-indigo-600 hover:bg-indigo-50"
                    >
                        {isTranslating ? <RefreshCcw className="w-4 h-4 mr-1.5 animate-spin" /> : <Globe className="w-4 h-4 mr-1.5" />}
                        Translate All (EN)
                    </Button>
                    <Button
                        size="sm"
                        onClick={handleImport}
                        disabled={isImporting}
                        className="bg-black hover:bg-black/80 text-white"
                    >
                        {isImporting ? <RefreshCcw className="w-4 h-4 mr-1.5 animate-spin" /> : <DownloadCloud className="w-4 h-4 mr-1.5" />}
                        Sync Kallikratis
                    </Button>
                </div>
            </div>

            {/* Level legend */}
            <div className="flex flex-wrap gap-2">
                {levelEntries.map(([lvl, meta]) => (
                    <span key={lvl} className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded border ${meta.color} border-current/30 ${meta.bg}`}>
                        Επίπεδο {lvl}: {meta.label}
                    </span>
                ))}
            </div>

            {/* Tree */}
            <div className="rounded-lg border bg-card shadow overflow-hidden">
                <div className="bg-muted px-4 py-2.5 border-b flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Ιεραρχική Δομή Περιφερειών</span>
                    <Badge variant="outline" className="text-xs">{filteredData.length} ρίζες</Badge>
                </div>

                <div className="max-h-[72vh] overflow-y-auto bg-background">
                    {filteredData.length > 0 ? (
                        filteredData.map(node => (
                            <PeriferiaNode
                                key={node.id}
                                node={node}
                                depth={0}
                                onEdit={openEdit}
                                onDelete={handleDelete}
                                onAddChild={openAddChild}
                                onTranslated={handleTranslated}
                            />
                        ))
                    ) : (
                        <div className="p-12 text-center text-muted-foreground text-sm">
                            {search ? "No regions match your search." : "No regions found. Click \"Sync Kallikratis\" to import the full Greek administrative directory."}
                        </div>
                    )}
                </div>
            </div>

            {/* Form dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-lg bg-background text-foreground">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            {editingItem
                                ? `Edit: ${editingItem.nameEL}`
                                : addingToParent
                                    ? `Add ${LEVEL_META[addingToParent.level + 1]?.label ?? "Sub-region"} under ${addingToParent.nameEL}`
                                    : "Add Root Περιφέρεια"
                            }
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 mt-2">
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <Label className="text-xs font-semibold">Code *</Label>
                                <Input className="mt-1 font-mono text-sm" value={formData.code} onChange={e => setFormData(f => ({ ...f, code: e.target.value }))} placeholder="e.g. 111, 11101" />
                            </div>
                            <div>
                                <Label className="text-xs font-semibold">Level</Label>
                                <Select value={String(formData.level)} onValueChange={v => setFormData(f => ({ ...f, level: parseInt(v) }))}>
                                    <SelectTrigger className="mt-1 text-sm"><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="3">3 – Περιφέρεια</SelectItem>
                                        <SelectItem value="4">4 – Νομός / Ενότητα</SelectItem>
                                        <SelectItem value="5">5 – Δήμος</SelectItem>
                                        <SelectItem value="6">6 – Περιοχή</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <Label className="text-xs font-semibold">Parent Code</Label>
                            <Input className="mt-1 font-mono text-sm" value={formData.parentCode} onChange={e => setFormData(f => ({ ...f, parentCode: e.target.value }))} placeholder="Leave empty for root" />
                        </div>

                        <div>
                            <Label className="text-xs font-semibold">Name (Greek) *</Label>
                            <Input className="mt-1" value={formData.nameEL} onChange={e => setFormData(f => ({ ...f, nameEL: e.target.value }))} />
                        </div>
                        <div>
                            <Label className="text-xs font-semibold">Name (English)</Label>
                            <Input className="mt-1" value={formData.nameEN} onChange={e => setFormData(f => ({ ...f, nameEN: e.target.value }))} />
                        </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-4 border-t mt-4">
                        <Button variant="outline" size="sm" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button size="sm" disabled={isSaving} onClick={handleSave} className="bg-black hover:bg-black/80 text-white">
                            {isSaving ? <RefreshCcw className="w-4 h-4 mr-1.5 animate-spin" /> : "Save"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
