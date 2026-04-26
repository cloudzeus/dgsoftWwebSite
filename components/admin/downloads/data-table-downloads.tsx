"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import {
    GripVertical,
    Plus,
    ChevronDown,
    RefreshCcw,
    Wand2,
    Trash2,
    Edit,
    CloudDownload,
    FileArchive,
    FileText,
    FileCode,
    FileType,
    Database,
    Zap,
    Loader2,
    CheckCircle2,
    ArrowUpDown
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

import { createDownload, updateDownload, deleteDownload, updateDownloadOrder } from "@/app/lib/actions/download"
import { GenericDataTable } from "../shared/generic-data-table"

type Download = {
    id: string
    nameEL: string
    nameEN?: string | null
    descriptionEL?: string | null
    descriptionEN?: string | null
    fileUrl: string
    fileSize?: string | null
    fileType?: string | null
    category?: string | null
    published: boolean
    order: number
    createdAt: Date
}

const EMPTY_FORM = {
    nameEL: "", nameEN: "", descriptionEL: "", descriptionEN: "",
    fileUrl: "", fileSize: "", fileType: "", category: "",
    published: true, order: 0,
}

/** Pick an icon for a file type string */
function FileTypeIcon({ type, className }: { type?: string | null; className?: string }) {
    const t = (type || "").toLowerCase()
    if (t === "pdf") return <FileText className={className} />
    if (["zip", "rar", "tar", "gz"].includes(t)) return <FileArchive className={className} />
    if (["js", "ts", "json", "xml", "html", "css"].includes(t)) return <FileCode className={className} />
    if (["doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(t)) return <FileType className={className} />
    return <FileText className={className} />
}

export function DataTableDownloads({ data: initialData }: { data: Download[] }) {
    const [data, setData] = React.useState<Download[]>(initialData || [])
    const [isMounted, setIsMounted] = React.useState(false)
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingItem, setEditingItem] = React.useState<Download | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isUploading, setIsUploading] = React.useState(false)
    const [translating, setTranslating] = React.useState(false)
    const [formData, setFormData] = React.useState({ ...EMPTY_FORM })

    React.useEffect(() => { setIsMounted(true) }, [])

    const openEdit = (item?: Download) => {
        if (item) {
            setEditingItem(item)
            setFormData({
                nameEL: item.nameEL || "", nameEN: item.nameEN || "",
                descriptionEL: item.descriptionEL || "", descriptionEN: item.descriptionEN || "",
                fileUrl: item.fileUrl || "", fileSize: item.fileSize || "",
                fileType: item.fileType || "", category: item.category || "",
                published: item.published, order: item.order,
            })
        } else {
            setEditingItem(null)
            setFormData({ ...EMPTY_FORM, order: data.length })
        }
        setIsDialogOpen(true)
    }

    const handleFileUpload = async (file: File) => {
        setIsUploading(true)
        const tid = toast.loading("Μεταφόρτωση αρχείου...")
        try {
            const fd = new FormData()
            fd.append("file", file)
            const res = await fetch("/api/admin/downloads/upload", { method: "POST", body: fd })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)
            setFormData(prev => ({ ...prev, fileUrl: d.url, fileSize: d.fileSize || prev.fileSize, fileType: d.fileType || prev.fileType }))
            toast.success("Το αρχείο μεταφορτώθηκε", { id: tid })
        } catch (err: any) {
            toast.error(err.message, { id: tid })
        } finally {
            setIsUploading(false)
        }
    }

    const runAiTranslation = async () => {
        setTranslating(true)
        const tid = toast.loading("Μετάφραση μεταδεδομένων...")
        try {
            const res = await fetch("/api/admin/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: JSON.stringify({ name: formData.nameEL, desc: formData.descriptionEL }), targetLang: "English" }),
            })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)
            const parsed = JSON.parse(d.translated)
            setFormData(prev => ({ ...prev, nameEN: parsed.name, descriptionEN: parsed.desc }))
            toast.success("Η μετάφραση εφαρμόστηκε", { id: tid })
        } catch (e: any) {
            toast.error(e.message, { id: tid })
        } finally {
            setTranslating(false)
        }
    }

    const handleSave = async () => {
        if (!formData.nameEL.trim()) return toast.error("Το όνομα αρχείου είναι υποχρεωτικό")
        if (!formData.fileUrl.trim()) return toast.error("Το URL αρχείου είναι υποχρεωτικό")
        setIsSaving(true)
        try {
            const payload = { ...formData, order: Number(formData.order) || 0 }
            if (editingItem) {
                const updated = await updateDownload(editingItem.id, payload as any)
                setData(prev => prev.map(d => d.id === updated.id ? updated as any : d))
                toast.success("Το αρχείο λήψης ενημερώθηκε")
            } else {
                const created = await createDownload(payload as any)
                setData(prev => [...prev, created as any])
                toast.success("Το αρχείο λήψης δημιουργήθηκε")
            }
            setIsDialogOpen(false)
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    const handleReorder = async (newData: Download[]) => {
        setData(newData)
        try {
            await updateDownloadOrder(newData.map(d => d.id))
            toast.success("Η σειρά ενημερώθηκε")
        } catch {
            toast.error("Αποτυχία αναδιάταξης")
        }
    }

    // ─── Columns ──────────────────────────────────────────────────────────────

    const columns: ColumnDef<Download>[] = [
        {
            id: "drag",
            header: "",
            cell: () => <GripVertical className="h-4 w-4 text-[#C8C6C4] opacity-0 group-hover:opacity-100 transition-opacity" />,
            size: 40
        },
        {
            accessorKey: "nameEL",
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide hover:text-[#201F1E]"
                >
                    Αρχείο <ArrowUpDown className="h-3 w-3" />
                </button>
            ),
            cell: ({ row }) => (
                <div className="flex items-center gap-3 py-1">
                    {/* Icon badge */}
                    <div className="w-9 h-9 rounded-lg bg-[#F3F2F1] border border-[#EDEBE9] p-1 flex items-center justify-center shrink-0">
                        <FileTypeIcon type={row.original.fileType} className="w-4 h-4 text-[#605E5C]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm text-[#201F1E] leading-tight">{row.original.nameEL}</span>
                        {row.original.descriptionEL && (
                            <span className="text-[11px] text-[#A19F9D] truncate max-w-[200px] mt-0.5">
                                {row.original.descriptionEL}
                            </span>
                        )}
                    </div>
                </div>
            )
        },
        {
            id: "meta",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Κατηγορία / Τύπος</span>,
            cell: ({ row }) => (
                <div className="flex flex-wrap items-center gap-1.5">
                    {row.original.category && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]">
                            {row.original.category}
                        </span>
                    )}
                    {row.original.fileType && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9] font-mono uppercase">
                            {row.original.fileType}
                        </span>
                    )}
                    {!row.original.category && !row.original.fileType && (
                        <span className="text-[11px] text-[#C8C6C4]">—</span>
                    )}
                </div>
            )
        },
        {
            id: "size",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Μέγεθος</span>,
            cell: ({ row }) => (
                <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#C8C6C4] shrink-0" />
                    <span className="text-xs font-mono text-[#605E5C]">{row.original.fileSize || <span className="text-[#C8C6C4]">N/A</span>}</span>
                </div>
            )
        },
        {
            accessorKey: "published",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Κατάσταση</span>,
            cell: ({ row }) => row.original.published ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Ενεργό
                </span>
            ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8C6C4] shrink-0" />
                    Πρόχειρο
                </span>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] hover:border-[#A19F9D] rounded gap-1">
                            Ενέργειες <ChevronDown className="h-3.5 w-3.5 text-[#A19F9D]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem onClick={() => openEdit(row.original)} className="text-sm">
                            <Edit className="w-3.5 h-3.5 mr-2 text-[#0078D4]" /> Επεξεργασία
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => window.open(row.original.fileUrl, "_blank")} className="text-sm">
                            <CloudDownload className="w-3.5 h-3.5 mr-2" /> Λήψη Αρχείου
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="text-red-500 text-sm focus:bg-red-50 focus:text-red-600"
                            onClick={() => {
                                if (confirm("Διαγραφή αυτής της λήψης;")) {
                                    deleteDownload(row.original.id).then(() => setData(d => d.filter(x => x.id !== row.original.id)))
                                }
                            }}
                        >
                            <Trash2 className="w-3.5 h-3.5 mr-2" /> Διαγραφή
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    // ─── Expanded row ─────────────────────────────────────────────────────────

    const renderExpandedRow = (item: Download) => (
        <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-[#EDEBE9]">

                {/* Left — file details */}
                <div className="p-4 space-y-3 bg-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Στοιχεία Αρχείου</p>
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#F3F2F1] border border-[#EDEBE9] p-1 flex items-center justify-center shrink-0">
                            <FileTypeIcon type={item.fileType} className="w-4 h-4 text-[#605E5C]" />
                        </div>
                        <div className="space-y-0.5">
                            <p className="text-sm font-semibold text-[#201F1E]">{item.nameEL}</p>
                            <div className="flex items-center gap-2">
                                {item.category && (
                                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]">
                                        {item.category}
                                    </span>
                                )}
                                {(item.fileSize || item.fileType) && (
                                    <span className="text-[11px] font-mono text-[#A19F9D]">
                                        {[item.fileSize, item.fileType?.toUpperCase()].filter(Boolean).join(" · ")}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    {item.descriptionEL && (
                        <p className="text-sm text-[#605E5C] leading-relaxed">{item.descriptionEL}</p>
                    )}
                    <Button
                        variant="outline"
                        className="w-full h-8 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] rounded gap-2"
                        onClick={() => window.open(item.fileUrl, "_blank")}
                    >
                        <CloudDownload className="w-3.5 h-3.5 text-[#0078D4]" /> Λήψη Αρχείου
                    </Button>
                </div>

                {/* Right — English localization */}
                <div className="p-4 space-y-3 bg-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Αγγλική Έκδοση</p>
                    <p className="text-sm font-semibold text-[#201F1E]">
                        {item.nameEN || <span className="text-[#A19F9D] font-normal italic">Δεν έχει μεταφραστεί</span>}
                    </p>
                    <p className="text-sm text-[#605E5C] leading-relaxed">
                        {item.descriptionEN || <span className="text-[#A19F9D] italic">Δεν υπάρχει αγγλική περιγραφή.</span>}
                    </p>
                    <div className="pt-2 border-t border-[#EDEBE9] flex items-center justify-between text-[11px] text-[#A19F9D]">
                        <span>Προστέθηκε: {new Date(item.createdAt).toLocaleDateString()}</span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Διαθέσιμο
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

    if (!isMounted) return null

    return (
        <div className="space-y-4">
            <GenericDataTable
                columns={columns} data={data} searchPlaceholder="Αναζήτηση λήψεων..." searchColumn="nameEL"
                onAddClick={() => openEdit()} addButtonLabel="Νέα Λήψη"
                isSortable={true} onReorder={handleReorder}
                renderExpandedRow={renderExpandedRow}
            />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-3xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">

                    {/* ── Dialog Header ─────────────────────────────────────── */}
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                    <CloudDownload className="w-4 h-4 text-[#0078D4]" />
                                </div>
                                <div>
                                    <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                        {editingItem ? "Επεξεργασία Λήψης" : "Νέα Λήψη"}
                                    </DialogTitle>
                                    <DialogDescription className="text-[11px] text-[#A19F9D]">
                                        {editingItem ? editingItem.nameEL : "Ρύθμιση μεταδεδομένων αρχείου και μεταφράσεων."}
                                    </DialogDescription>
                                </div>
                            </div>
                            <Button
                                size="sm"
                                onClick={runAiTranslation}
                                disabled={translating}
                                className="bg-[#0078D4] hover:bg-[#106EBE] h-8 px-4 text-[12px] font-semibold rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95"
                            >
                                {translating
                                    ? <RefreshCcw className="w-3.5 h-3.5 animate-spin mr-1.5" />
                                    : <Zap className="w-3.5 h-3.5 mr-1.5" />
                                }
                                Μετάφραση AI
                            </Button>
                        </div>
                    </DialogHeader>

                    {/* ── Dialog Body ───────────────────────────────────────── */}
                    <div className="bg-[#F3F2F1] px-5 py-4 max-h-[75vh] overflow-y-auto">
                        <Tabs defaultValue="el">
                            <TabsList className="bg-white border border-[#EDEBE9] p-1 h-8 rounded mb-4 w-fit gap-0.5">
                                <TabsTrigger value="el" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide px-3 h-6 rounded transition-all">
                                    ΕΛ
                                </TabsTrigger>
                                <TabsTrigger value="en" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide px-3 h-6 rounded transition-all">
                                    EN
                                </TabsTrigger>
                                <TabsTrigger value="file" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide px-3 h-6 rounded transition-all">
                                    Αρχείο & Ρυθμίσεις
                                </TabsTrigger>
                            </TabsList>

                            {/* ── ΕΛ tab ──────────────────────────────────────── */}
                            <TabsContent value="el" className="space-y-3 animate-in fade-in duration-300 mt-0">
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Ελληνικά</p>
                                    <div className="space-y-1.5">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">
                                            Όνομα <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                            placeholder="Οικονομική Έκθεση 2024..."
                                            value={formData.nameEL}
                                            onChange={e => setFormData({ ...formData, nameEL: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Περιγραφή</Label>
                                        <Textarea
                                            rows={5}
                                            className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                            placeholder="Περιγράψτε το αρχείο..."
                                            value={formData.descriptionEL}
                                            onChange={e => setFormData({ ...formData, descriptionEL: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            {/* ── EN tab ──────────────────────────────────────── */}
                            <TabsContent value="en" className="space-y-3 animate-in fade-in duration-300 mt-0">
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">English</p>
                                    <div className="space-y-1.5">
                                        <Label className="text-[11px] font-semibold text-[#605E5C] flex justify-between items-center">
                                            Όνομα (Αγγλικά)
                                            <button
                                                onClick={() => runAiTranslation()}
                                                className="text-[#0078D4] hover:text-[#106EBE] text-[11px] font-semibold transition-colors flex items-center gap-1"
                                            >
                                                <Wand2 className="w-3 h-3" /> Αυτόματη Μετάφραση
                                            </button>
                                        </Label>
                                        <Input
                                            className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                            placeholder="Annual Report 2024..."
                                            value={formData.nameEN || ""}
                                            onChange={e => setFormData({ ...formData, nameEN: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Περιγραφή (Αγγλικά)</Label>
                                        <Textarea
                                            rows={5}
                                            className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                            placeholder="Describe the file in English..."
                                            value={formData.descriptionEN || ""}
                                            onChange={e => setFormData({ ...formData, descriptionEN: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            {/* ── File & Settings tab ─────────────────────────── */}
                            <TabsContent value="file" className="space-y-3 animate-in fade-in duration-300 mt-0">

                                {/* Upload drop zone */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Μεταφόρτωση Αρχείου</p>
                                    <div className="border border-dashed border-[#C8C6C4] rounded-lg p-6 text-center bg-[#F3F2F1] hover:border-[#0078D4] transition-colors group">
                                        <CloudDownload className="w-8 h-8 mx-auto mb-3 text-[#C8C6C4] group-hover:text-[#0078D4] transition-colors" />
                                        <Label className="cursor-pointer inline-flex items-center gap-1.5 h-8 px-4 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95 transition-all">
                                            {isUploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
                                            Μεταφόρτωση
                                            <input
                                                type="file"
                                                className="hidden"
                                                disabled={isUploading}
                                                onChange={e => { if (e.target.files?.[0]) handleFileUpload(e.target.files[0]) }}
                                            />
                                        </Label>
                                        {formData.fileUrl && (
                                            <div className="mt-3 p-2 bg-emerald-50 text-[11px] font-mono text-emerald-700 rounded border border-emerald-200 truncate">
                                                {formData.fileUrl}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Manual URL */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">URL Αρχείου</p>
                                    <Label className="text-[11px] font-semibold text-[#605E5C]">
                                        Άμεσο URL <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono text-[#0078D4]"
                                        placeholder="https://cdn.dgsoft.gr/..."
                                        value={formData.fileUrl}
                                        onChange={e => setFormData({ ...formData, fileUrl: e.target.value })}
                                    />
                                </div>

                                {/* Metadata */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Μεταδεδομένα</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1.5">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Κατηγορία</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                                placeholder="π.χ. Αναφορές"
                                                value={formData.category}
                                                onChange={e => setFormData({ ...formData, category: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Τύπος Αρχείου</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono uppercase"
                                                placeholder="PDF, ZIP, DOCX..."
                                                value={formData.fileType}
                                                onChange={e => setFormData({ ...formData, fileType: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1.5">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Μέγεθος Αρχείου</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono"
                                                placeholder="π.χ. 2.4 MB"
                                                value={formData.fileSize}
                                                onChange={e => setFormData({ ...formData, fileSize: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Σειρά</Label>
                                            <Input
                                                type="number"
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                                value={formData.order}
                                                onChange={e => setFormData({ ...formData, order: Number(e.target.value) })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Visibility */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 flex items-center justify-between">
                                    <div className="flex flex-col gap-0.5">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Δημόσια Ορατότητα</Label>
                                        <p className="text-[11px] text-[#A19F9D]">Κάντε το αρχείο διαθέσιμο στους επισκέπτες.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[11px] font-semibold transition-colors ${formData.published ? 'text-emerald-600' : 'text-[#A19F9D]'}`}>
                                            {formData.published ? 'Ενεργό' : 'Ανενεργό'}
                                        </span>
                                        <Switch
                                            checked={formData.published}
                                            onCheckedChange={v => setFormData({ ...formData, published: v })}
                                            className="data-[state=checked]:bg-emerald-500 scale-90"
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* ── Dialog Footer ─────────────────────────────────────── */}
                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] hover:text-[#201F1E] rounded">
                            Ακύρωση
                        </Button>
                        <Button
                            disabled={isSaving}
                            onClick={handleSave}
                            className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] transition-colors active:scale-95"
                        >
                            {isSaving
                                ? <><RefreshCcw className="w-3 h-3 animate-spin mr-1.5" />Αποθήκευση…</>
                                : editingItem ? "Αποθήκευση" : "Δημιουργία"
                            }
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
