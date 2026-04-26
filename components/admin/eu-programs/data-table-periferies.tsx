"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import {
    ChevronDown,
    ChevronRight,
    Plus,
    RefreshCcw,
    Globe,
    DownloadCloud,
    Edit,
    Trash2,
    MapPin,
    Layers,
    Navigation,
    Home
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import {
    createPeriferia,
    updatePeriferia,
    deletePeriferia,
    importKallikratis,
    translateAllPeriferies
} from "@/app/lib/actions/eu-program"
import { GeocodePeriferiesButton } from "./geocode-periferies-button"
import { GenericDataTable } from "../shared/generic-data-table"

export type PeriferiaType = {
    id: string
    code: string
    nameEL: string
    nameEN: string | null
    level: number
    parentCode: string | null
    latitude?: number | null
    longitude?: number | null
    children?: PeriferiaType[]
}

const LEVEL_META: Record<number, { label: string; color: string; bg: string; icon: any }> = {
    3: { label: "Περιφέρεια", color: "text-blue-700", bg: "bg-blue-50/50 dark:bg-blue-900/10", icon: Globe },
    4: { label: "Νομός", color: "text-emerald-700", bg: "bg-emerald-50/40 dark:bg-emerald-900/10", icon: MapPin },
    5: { label: "Δήμος", color: "text-amber-700", bg: "bg-amber-50/30 dark:bg-amber-900/10", icon: Navigation },
    6: { label: "Περιοχή", color: "text-purple-700", bg: "bg-purple-50/20 dark:bg-purple-900/10", icon: Home },
}

export function DataTablePeriferies({ data: initialData }: { data: PeriferiaType[] }) {
    const [data, setData] = React.useState<PeriferiaType[]>(initialData || [])
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
        setFormData({ code: "", nameEL: "", nameEN: "", level: Math.min(parent.level + 1, 6), parentCode: parent.code })
        setIsDialogOpen(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Διαγραφή περιοχής και όλων των υποπεριοχών;")) return
        try {
            await deletePeriferia(id)
            toast.success("Διαγράφηκε")
            window.location.reload()
        } catch (err: any) { toast.error(err.message) }
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            const payload = { ...formData, parentCode: formData.parentCode || null }
            if (editingItem) await updatePeriferia(editingItem.id, payload)
            else await createPeriferia(payload)
            toast.success("Αποθηκεύτηκε")
            window.location.reload()
        } catch (err: any) { toast.error(err.message) }
        finally { setIsSaving(false) }
    }

    const handleImport = async () => {
        setIsImporting(true)
        const tid = toast.loading("Συγχρονισμός Καλλικράτη...")
        try {
            await importKallikratis()
            toast.success("Συγχρονίστηκε", { id: tid })
            window.location.reload()
        } catch (err: any) { toast.error(err.message, { id: tid }) }
        finally { setIsImporting(false) }
    }

    const handleTranslateAll = async () => {
        setIsTranslating(true)
        const tid = toast.loading("Μετάφραση μέσω AI...")
        try {
            const res = await translateAllPeriferies()
            toast.success(`Μεταφράστηκαν ${res.count} περιοχές`, { id: tid })
            window.location.reload()
        } catch (err: any) { toast.error(err.message, { id: tid }) }
        finally { setIsTranslating(false) }
    }

    const columns: ColumnDef<PeriferiaType>[] = [
        {
            id: "expander",
            header: () => null,
            cell: ({ row }) => (row.original.children?.length || 0) > 0 ? (
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={e => { e.stopPropagation(); row.toggleExpanded() }}>
                    <ChevronRight className={`h-4 w-4 transition-transform ${row.getIsExpanded() ? 'rotate-90' : ''}`} />
                </Button>
            ) : null,
            size: 40
        },
        {
            accessorKey: "level",
            header: "Επίπεδο",
            cell: ({ row }) => {
                const meta = LEVEL_META[row.original.level] || LEVEL_META[6]
                const Icon = meta.icon
                return (
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${meta.color} bg-white border border-current/20`}>
                        <Icon className="w-3 h-3" /> {meta.label}
                    </span>
                )
            }
        },
        {
            accessorKey: "nameEL",
            header: "Όνομα Περιοχής",
            cell: ({ row }) => (
                <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-[#201F1E]">{row.original.nameEL}</span>
                    {row.original.nameEN && <span className="text-[11px] text-[#A19F9D]">{row.original.nameEN}</span>}
                </div>
            )
        },
        {
            accessorKey: "code",
            header: "Κωδικός Καλλικράτη",
            cell: ({ row }) => <code className="text-[10px] font-mono bg-[#F3F2F1] px-2 py-0.5 rounded text-[#605E5C]">{row.original.code}</code>
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold border-[#C8C6C4] hover:bg-[#EDEBE9] rounded">
                            Ενέργειες <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {row.original.level < 6 && <DropdownMenuItem onClick={() => openAddChild(row.original)}><Plus className="w-4 h-4 mr-2" /> Προσθήκη Υποπεριοχής</DropdownMenuItem>}
                        <DropdownMenuItem onClick={() => openEdit(row.original)}><Edit className="w-4 h-4 mr-2" /> Επεξεργασία</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleDelete(row.original.id)} className="text-red-500"><Trash2 className="w-4 h-4 mr-2" /> Διαγραφή</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    return (
        <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-white rounded-lg border border-[#EDEBE9]">
                <div className="flex flex-wrap gap-2">
                    {Object.entries(LEVEL_META).map(([lvl, meta]) => (
                        <div key={lvl} className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-semibold ${meta.color} border border-current/20 bg-white`}>
                            <meta.icon className="w-3 h-3" /> {meta.label}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleTranslateAll} disabled={isTranslating} className="h-8 px-3 text-[12px] font-semibold border-[#C8C6C4] hover:bg-[#EDEBE9] rounded">
                        {isTranslating ? <RefreshCcw className="w-3 h-3 animate-spin mr-2" /> : <Globe className="w-3 h-3 mr-2" />} Μετάφραση Όλων
                    </Button>
                    <Button size="sm" onClick={handleImport} disabled={isImporting} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                        {isImporting ? <RefreshCcw className="w-3 h-3 animate-spin mr-2" /> : <DownloadCloud className="w-3 h-3 mr-2" />} Συγχρονισμός Καλλικράτη
                    </Button>
                    <GeocodePeriferiesButton />
                </div>
            </div>

            <GenericDataTable
                columns={columns}
                data={data}
                searchPlaceholder="Αναζήτηση περιοχών..."
                searchColumn="nameEL"
                onAddClick={openAddRoot}
                addButtonLabel="Προσθήκη Κύριας Περιοχής"
                getSubRows={row => row.children}
                getRowClassName={row => LEVEL_META[row.level]?.bg || ""}
                renderExpandedRow={(region) => (
                    <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
                        <div className="grid grid-cols-2 divide-x divide-[#EDEBE9]">
                            <div className="p-4 space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-2"><Layers className="w-3 h-3" /> Μεταδεδομένα Περιοχής</p>
                                <div className="space-y-2 text-sm">
                                    <div>
                                        <Label className="text-[11px] font-semibold text-[#605E5C] block mb-0.5">Ιεραρχική Διαδρομή</Label>
                                        <p className="font-mono text-[11px] text-[#201F1E]">{region.parentCode ? `${region.parentCode} → ${region.code}` : region.code}</p>
                                    </div>
                                    <div>
                                        <Label className="text-[11px] font-semibold text-[#605E5C] block mb-0.5">Συντεταγμένες</Label>
                                        <p className="font-mono text-[11px] text-[#201F1E]">
                                            {region.latitude != null && region.longitude != null
                                                ? `${region.latitude.toFixed(4)}, ${region.longitude.toFixed(4)}`
                                                : "—"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Υποπεριοχές</p>
                                <div>
                                    <Label className="text-[11px] font-semibold text-[#605E5C] block mb-0.5">Σύνολο Υποπεριοχών</Label>
                                    <p className="text-sm font-bold text-[#0078D4]">{region.children?.length || 0} Υποπεριοχές</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />

            {/* Edit / Create dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-xl p-0 overflow-hidden rounded-lg">
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                <MapPin className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                    {editingItem ? `Επεξεργασία: ${editingItem.nameEL}` : addingToParent ? `Προσθήκη υποπεριοχής στη ${addingToParent.nameEL}` : "Δημιουργία Κύριας Περιοχής"}
                                </DialogTitle>
                                <p className="text-[11px] text-[#A19F9D]">
                                    {editingItem ? "Ενημέρωση στοιχείων περιοχής" : addingToParent ? `Κωδικός γονέα: ${addingToParent.code}` : "Προσθήκη περιοχής κορυφής ιεραρχίας"}
                                </p>
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="bg-[#F3F2F1] p-4">
                        <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <Label className="text-[11px] font-semibold text-[#605E5C]">Κωδικός</Label>
                                    <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono" value={formData.code} onChange={e => setFormData(f => ({ ...f, code: e.target.value }))} />
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-[11px] font-semibold text-[#605E5C]">Επίπεδο Περιοχής</Label>
                                    <Select value={String(formData.level)} onValueChange={v => setFormData(f => ({ ...f, level: parseInt(v) }))}>
                                        <SelectTrigger className="h-9 rounded border-[#C8C6C4] focus:ring-[#0078D4] text-sm">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="3">Περιφέρεια</SelectItem>
                                            <SelectItem value="4">Νομός / Ενότητα</SelectItem>
                                            <SelectItem value="5">Δήμος</SelectItem>
                                            <SelectItem value="6">Περιοχή</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[11px] font-semibold text-[#605E5C]">Πλήρες Όνομα (Ελληνικά)</Label>
                                <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.nameEL} onChange={e => setFormData(f => ({ ...f, nameEL: e.target.value }))} />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[11px] font-semibold text-[#605E5C]">Πλήρες Όνομα (Αγγλικά)</Label>
                                <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={formData.nameEN} onChange={e => setFormData(f => ({ ...f, nameEN: e.target.value }))} />
                            </div>
                        </div>
                    </div>

                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">Ακύρωση</Button>
                        <Button disabled={isSaving} onClick={handleSave} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                            {isSaving ? <RefreshCcw className="w-3 h-3 animate-spin mr-2" /> : null}
                            {isSaving ? "Αποθήκευση..." : "Αποθήκευση Περιοχής"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
