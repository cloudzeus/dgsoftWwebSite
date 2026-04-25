"use client"

import * as React from "react"
import { ColumnDef, RowSelectionState } from "@tanstack/react-table"
import {
    ChevronDown,
    Plus,
    RefreshCcw,
    FileCode,
    Link2,
    Edit,
    Trash2,
    CheckCircle2,
    Type
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

import { createKad, updateKad, deleteKad, linkKadToProgram } from "@/app/lib/actions/eu-program"
import { Textarea } from "@/components/ui/textarea"
import { GenericDataTable } from "../shared/generic-data-table"

export type KadType = {
    id: string; code: string; dotcode: string | null; nameEL: string | null; nameEN: string | null;
};

export type EuProgramType = {
    id: string; nameEL: string | null; nameEN: string | null;
};

export function DataTableKads({
    data: initialData,
    programs = [],
}: {
    data: KadType[];
    programs?: EuProgramType[];
}) {
    const [data, setData] = React.useState<KadType[]>(initialData || [])
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [isAssignOpen, setIsAssignOpen] = React.useState(false)
    const [editingItem, setEditingItem] = React.useState<KadType | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isUploading, setIsUploading] = React.useState(false)
    const [isAssigning, setIsAssigning] = React.useState(false)
    const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
    const [selectedProgramId, setSelectedProgramId] = React.useState("")
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const [formData, setFormData] = React.useState({
        code: "", nameEL: "", nameEN: ""
    })

    const openEdit = (item?: KadType) => {
        if (item) {
            setEditingItem(item)
            setFormData({ code: item.code, nameEL: item.nameEL || "", nameEN: item.nameEN || "" })
        } else {
            setEditingItem(null)
            setFormData({ code: "", nameEL: "", nameEN: "" })
        }
        setIsDialogOpen(true)
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            if (!formData.code) throw new Error("Code is required")
            const cleanData = { code: formData.code.trim(), nameEL: formData.nameEL.trim(), nameEN: formData.nameEN.trim() || null }
            if (editingItem) {
                const updated = await updateKad(editingItem.id, cleanData)
                setData(prev => prev.map(d => d.id === updated.id ? updated as any : d))
                toast.success("KAD updated")
            } else {
                const created = await createKad(cleanData)
                setData(prev => [created as any, ...prev])
                toast.success("KAD created")
            }
            setIsDialogOpen(false)
        } catch (err: any) { toast.error(err.message) }
        finally { setIsSaving(false) }
    }

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        e.target.value = ""
        setIsUploading(true)
        const tid = toast.loading(`Uploading "${file.name}"...`)
        try {
            const form = new FormData()
            form.append("file", file)
            const res = await fetch("/api/admin/eu-programs/upload-kads", { method: "POST", body: form })
            const json = await res.json()
            if (!res.ok) throw new Error(json.error || "Upload failed")
            toast.success(`Synced ${json.count} KADs`, { id: tid })
            setTimeout(() => window.location.reload(), 1200)
        } catch (err: any) { toast.error(err.message, { id: tid }) }
        finally { setIsUploading(false) }
    }

    const handleBulkAssign = async () => {
        if (!selectedProgramId) return toast.error("Select a program")
        const selectedIndices = Object.keys(rowSelection).filter(k => rowSelection[k])
        // Since GenericDataTable handles its own filtering/sorting, rowSelection indices refer to the current visible rows in the table instance.
        // This is a limitation if we use index-based selection.
        // Better to use rowIdKey="id" in GenericDataTable so rowSelection uses IDs as keys.
        const kadIds = selectedIndices;

        setIsAssigning(true)
        const tid = toast.loading(`Linking ${kadIds.length} KADs...`)
        try {
            for (const id of kadIds) await linkKadToProgram(selectedProgramId, id)
            toast.success("Linked successfully", { id: tid })
            setRowSelection({})
            setIsAssignOpen(false)
        } catch (err: any) { toast.error(err.message, { id: tid }) }
        finally { setIsAssigning(false) }
    }

    const columns: ColumnDef<KadType>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
                    onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(v) => row.toggleSelected(!!v)}
                    aria-label="Select row"
                    onClick={e => e.stopPropagation()}
                />
            ),
            enableSorting: false,
            enableHiding: false,
            size: 40,
        },
        {
            accessorKey: "code",
            header: "KAD Code",
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold font-mono bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]">{row.original.code}</span>
                    {row.original.dotcode && <span className="text-[10px] text-[#A19F9D] italic">({row.original.dotcode})</span>}
                </div>
            )
        },
        {
            accessorKey: "nameEL",
            header: "KAD Description",
            cell: ({ row }) => (
                <div className="min-w-[200px] max-w-[500px] space-y-0.5" title={row.original.nameEL || ""}>
                    <p className="text-sm font-semibold text-[#201F1E] line-clamp-2 leading-snug">{row.original.nameEL || "—"}</p>
                    {row.original.nameEN && (
                        <p className="text-[11px] text-[#A19F9D] line-clamp-1 italic">{row.original.nameEN}</p>
                    )}
                </div>
            ),
            enableHiding: false,
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold border-[#C8C6C4] hover:bg-[#EDEBE9] rounded">
                            Actions <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEdit(row.original)}><Edit className="w-4 h-4 mr-2" /> Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={async () => {
                            if (confirm("Delete KAD?")) {
                                await deleteKad(row.original.id)
                                setData(prev => prev.filter(d => d.id !== row.original.id))
                                toast.success("Deleted")
                            }
                        }} className="text-red-500"><Trash2 className="w-4 h-4 mr-2" /> Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    const selectedCount = Object.keys(rowSelection).length

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <input ref={fileInputRef} type="file" className="hidden" accept=".xlsx,.xls,.csv" onChange={handleFileUpload} />
                    <Button variant="outline" className="h-8 px-3 text-[12px] font-semibold border-[#C8C6C4] hover:bg-[#EDEBE9] rounded" onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
                        <FileCode className="w-3 h-3 mr-2" /> Bulk Upload (Excel)
                    </Button>
                    {selectedCount > 0 && (
                        <Button className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]" onClick={() => setIsAssignOpen(true)}>
                            <Link2 className="w-3 h-3 mr-2" /> Assign {selectedCount} to Program
                        </Button>
                    )}
                </div>
            </div>

            <GenericDataTable
                columns={columns}
                data={data}
                searchPlaceholder="Search KAD codes or descriptions..."
                searchColumn="nameEL"
                onAddClick={() => openEdit()}
                addButtonLabel="Add KAD"
                rowIdKey="id"
                enableRowSelection={true}
                rowSelection={rowSelection}
                onRowSelectionChange={setRowSelection}
                renderExpandedRow={(kad) => (
                    <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
                        <div className="grid grid-cols-2 divide-x divide-[#EDEBE9]">
                            <div className="p-4 space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-2"><Type className="w-3 h-3" /> Full Description (Greek)</p>
                                <p className="text-sm leading-relaxed text-[#201F1E]">{kad.nameEL || "No description provided."}</p>
                            </div>
                            <div className="p-4 space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] flex items-center gap-2"><CheckCircle2 className="w-3 h-3" /> English Metadata</p>
                                <p className="text-sm leading-relaxed text-[#201F1E]">{kad.nameEN || "Translation not available."}</p>
                            </div>
                        </div>
                    </div>
                )}
            />

            {/* Edit / Create KAD dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-xl p-0 overflow-hidden rounded-lg">
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                <FileCode className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">{editingItem ? "Edit KAD" : "Create KAD"}</DialogTitle>
                                <p className="text-[11px] text-[#A19F9D]">{editingItem ? `Code: ${editingItem.code}` : "Add a new KAD code to the registry"}</p>
                            </div>
                        </div>
                    </DialogHeader>
                    <div className="bg-[#F3F2F1] p-4">
                        <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-4">
                            <div className="space-y-1">
                                <Label className="text-[11px] font-semibold text-[#605E5C]">Government Code</Label>
                                <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono" placeholder="62.01" value={formData.code} onChange={e => setFormData({ ...formData, code: e.target.value })} />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[11px] font-semibold text-[#605E5C]">Description (Greek)</Label>
                                <Textarea className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm min-h-[90px]" placeholder="Δραστηριότητες προγραμματισμού..." value={formData.nameEL} onChange={e => setFormData({ ...formData, nameEL: e.target.value })} />
                            </div>
                            <div className="space-y-1">
                                <Label className="text-[11px] font-semibold text-[#605E5C]">Description (English)</Label>
                                <Textarea className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm min-h-[90px]" placeholder="Computer programming activities..." value={formData.nameEN} onChange={e => setFormData({ ...formData, nameEN: e.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">Cancel</Button>
                        <Button disabled={isSaving} onClick={handleSave} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                            {isSaving ? <RefreshCcw className="w-3 h-3 animate-spin mr-2" /> : null}
                            {isSaving ? "Saving..." : "Save KAD"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Assign to program dialog */}
            <Dialog open={isAssignOpen} onOpenChange={setIsAssignOpen}>
                <DialogContent className="max-w-lg p-0 overflow-hidden rounded-lg">
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                <Link2 className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">Assign to Program</DialogTitle>
                                <p className="text-[11px] text-[#A19F9D]">Link {selectedCount} selected KAD codes to an EU Program.</p>
                            </div>
                        </div>
                    </DialogHeader>
                    <div className="bg-[#F3F2F1] p-4">
                        <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-2">
                            <Label className="text-[11px] font-semibold text-[#605E5C]">Choose EU Program</Label>
                            <Select value={selectedProgramId} onValueChange={setSelectedProgramId}>
                                <SelectTrigger className="h-9 rounded border-[#C8C6C4] focus:ring-[#0078D4] text-sm">
                                    <SelectValue placeholder="Search target program..." />
                                </SelectTrigger>
                                <SelectContent>
                                    {programs.map(p => <SelectItem key={p.id} value={p.id}>{p.nameEL || p.id}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setIsAssignOpen(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">Cancel</Button>
                        <Button disabled={isAssigning || !selectedProgramId} onClick={handleBulkAssign} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                            {isAssigning ? <RefreshCcw className="w-3 h-3 animate-spin mr-2" /> : null}
                            {isAssigning ? "Linking..." : "Link KADs Now"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
