"use client"

import * as React from "react"
import {
    ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel,
    useReactTable, RowSelectionState,
} from "@tanstack/react-table"
import { ChevronDown, Plus, RefreshCcw, FileCode, Link2, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { createKad, updateKad, deleteKad, linkKadToProgram } from "@/app/lib/actions/eu-program"
import { Textarea } from "@/components/ui/textarea"

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
    const [searchQuery, setSearchQuery] = React.useState("")
    const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({})
    const [selectedProgramId, setSelectedProgramId] = React.useState("")
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const [formData, setFormData] = React.useState({
        code: "", nameEL: "", nameEN: ""
    })

    // ── Filtering ────────────────────────────────────────────────────────────
    const filteredData = React.useMemo(() => {
        const q = searchQuery.toLowerCase().trim()
        if (!q) return data
        return data.filter(k =>
            k.code.toLowerCase().includes(q) ||
            (k.dotcode && k.dotcode.toLowerCase().includes(q)) ||
            (k.nameEL && k.nameEL.toLowerCase().includes(q))
        )
    }, [data, searchQuery])

    // Reset selection & page when search changes
    React.useEffect(() => {
        setRowSelection({})
        table.setPageIndex(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery])

    // ── Edit / Create ────────────────────────────────────────────────────────
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
            const cleanData = {
                code: formData.code.trim(),
                nameEL: formData.nameEL.trim(),
                nameEN: formData.nameEN.trim() || null,
            }
            if (editingItem) {
                const updated = await updateKad(editingItem.id, cleanData)
                setData(data.map(d => d.id === updated.id ? updated as any : d))
                toast.success("KAD updated")
            } else {
                const created = await createKad(cleanData)
                setData([created as any, ...data])
                toast.success("KAD created")
            }
            setIsDialogOpen(false)
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    // ── File Upload ──────────────────────────────────────────────────────────
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        e.target.value = ""
        setIsUploading(true)
        toast.loading(`Uploading "${file.name}"...`, { id: "xls-upload" })
        try {
            const form = new FormData()
            form.append("file", file)
            const res = await fetch("/api/admin/eu-programs/upload-kads", { method: "POST", body: form })
            const json = await res.json()
            if (!res.ok) throw new Error(json.error || "Upload failed")
            if (json.errors?.length > 0) {
                toast.success(`Inserted ${json.count} of ${json.total} KADs. Some errors: ${json.errors[0]}`, { id: "xls-upload", duration: 8000 })
            } else {
                toast.success(`✓ Successfully synced ${json.count} KADs to database!`, { id: "xls-upload" })
            }
            setTimeout(() => window.location.reload(), 1200)
        } catch (err: any) {
            toast.error(`Upload failed: ${err.message}`, { id: "xls-upload", duration: 8000 })
        } finally {
            setIsUploading(false)
        }
    }

    // ── Bulk Assign ──────────────────────────────────────────────────────────
    const selectedIds = Object.keys(rowSelection).filter(k => rowSelection[k])
    // Map row indices to actual KAD ids from filtered+paginated view
    const selectedKadIds = React.useMemo(() => {
        return selectedIds
            .map(idx => filteredData[parseInt(idx)]?.id)
            .filter(Boolean) as string[]
    }, [selectedIds, filteredData])

    const handleBulkAssign = async () => {
        if (!selectedProgramId) {
            toast.error("Please select a program first.")
            return
        }
        if (selectedKadIds.length === 0) {
            toast.error("No KADs selected.")
            return
        }
        setIsAssigning(true)
        toast.loading(`Linking ${selectedKadIds.length} KADs...`, { id: "bulk-assign" })
        try {
            let linked = 0
            for (const kadId of selectedKadIds) {
                await linkKadToProgram(selectedProgramId, kadId)
                linked++
            }
            toast.success(`✓ Linked ${linked} KADs to program successfully!`, { id: "bulk-assign" })
            setRowSelection({})
            setIsAssignOpen(false)
            setSelectedProgramId("")
        } catch (err: any) {
            toast.error(`Failed: ${err.message}`, { id: "bulk-assign", duration: 6000 })
        } finally {
            setIsAssigning(false)
        }
    }

    // ── Columns ──────────────────────────────────────────────────────────────
    const columns: ColumnDef<KadType>[] = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected() ? true : table.getIsSomePageRowsSelected() ? "indeterminate" : false}
                    onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(v) => row.toggleSelected(!!v)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
            size: 40,
        },
        {
            accessorKey: "dotcode",
            header: "Formatted KAD",
            cell: ({ row }) => <div className="font-mono text-muted-foreground">{row.original.dotcode || "—"}</div>,
        },
        {
            accessorKey: "code",
            header: "Raw Code",
            cell: ({ row }) => <div className="font-mono font-bold text-primary">{row.original.code}</div>,
        },
        {
            accessorKey: "nameEL",
            header: "Description (Greek)",
            cell: ({ row }) => (
                <div className="text-muted-foreground max-w-lg truncate" title={row.original.nameEL || ""}>
                    {row.original.nameEL || "—"}
                </div>
            ),
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8">
                            Actions <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem className="cursor-pointer" onClick={() => openEdit(row.original)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-500" onClick={async () => {
                            if (confirm("Delete this KAD forever? Avoid if used by active programs.")) {
                                await deleteKad(row.original.id)
                                setData(data.filter(d => d.id !== row.original.id))
                                toast.success("KAD deleted")
                            }
                        }}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ]

    // ── Table ────────────────────────────────────────────────────────────────
    const table = useReactTable({
        data: filteredData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onRowSelectionChange: setRowSelection,
        state: { rowSelection },
        initialState: { pagination: { pageSize: 25 } },
    })

    const totalSelected = selectedKadIds.length
    const pageCount = table.getPageCount()
    const pageIndex = table.getState().pagination.pageIndex
    const pageSize = table.getState().pagination.pageSize

    return (
        <div className="space-y-4 relative">

            {/* Upload overlay */}
            {isUploading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-background rounded-2xl shadow-2xl p-10 flex flex-col items-center gap-5 max-w-sm w-full mx-4">
                        <RefreshCcw className="w-12 h-12 text-indigo-500 animate-spin" />
                        <div className="text-center">
                            <p className="text-lg font-semibold">Importing KADs...</p>
                            <p className="text-sm text-muted-foreground mt-1">Parsing file and inserting into database. This may take a moment.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Toolbar */}
            <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <Input
                        placeholder="Search KAD codes or descriptions..."
                        className="max-w-sm border-muted-foreground/30 focus-visible:ring-primary text-zinc-800"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    {totalSelected > 0 && (
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                            {totalSelected} selected
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Assign button — only visible when rows selected */}
                    {totalSelected > 0 && (
                        <Button
                            variant="default"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
                            onClick={() => setIsAssignOpen(true)}
                        >
                            <Link2 className="h-4 w-4 mr-2" />
                            Assign {totalSelected} to Program
                        </Button>
                    )}

                    {/* Hidden file input */}
                    <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept=".xlsx,.xls,.csv"
                        onChange={handleFileUpload}
                    />
                    <Button
                        variant="outline"
                        className="bg-black hover:bg-black/80 text-white border-black shadow-md text-sm font-medium"
                        disabled={isUploading}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <FileCode className="h-4 w-4 mr-2" />
                        Bulk Upload XLS
                    </Button>
                    <Button
                        onClick={() => openEdit()}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-all"
                    >
                        <Plus className="mr-2 h-4 w-4" /> Add KAD
                    </Button>
                </div>
            </div>

            {/* Table */}
            <div className="rounded-md border bg-card text-card-foreground shadow overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted">
                        {table.getHeaderGroups().map((hg) => (
                            <TableRow key={hg.id}>
                                {hg.headers.map((h) => (
                                    <TableHead key={h.id} style={{ width: h.column.getSize() !== 150 ? h.column.getSize() : undefined }}>
                                        {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className={row.getIsSelected() ? "bg-indigo-50 dark:bg-indigo-950/30" : ""}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                                    No KADs found for this criteria.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                {/* Rows per page */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="whitespace-nowrap">Rows per page</span>
                    <Select
                        value={String(pageSize)}
                        onValueChange={(v) => {
                            table.setPageSize(Number(v))
                            table.setPageIndex(0)
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {[10, 25, 50, 100, 250].map(n => (
                                <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <span className="whitespace-nowrap">
                        {filteredData.length === 0 ? "0 results" : `${pageIndex * pageSize + 1}–${Math.min((pageIndex + 1) * pageSize, filteredData.length)} of ${filteredData.length}`}
                    </span>
                </div>

                {/* Page buttons */}
                <div className="flex items-center gap-1">
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-zinc-700 hover:bg-zinc-600 border-zinc-700 text-white disabled:opacity-40" onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
                        <ChevronsLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-zinc-700 hover:bg-zinc-600 border-zinc-700 text-white disabled:opacity-40" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground px-2 whitespace-nowrap">
                        Page {pageIndex + 1} / {pageCount || 1}
                    </span>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-zinc-700 hover:bg-zinc-600 border-zinc-700 text-white disabled:opacity-40" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-zinc-700 hover:bg-zinc-600 border-zinc-700 text-white disabled:opacity-40" onClick={() => table.setPageIndex(pageCount - 1)} disabled={!table.getCanNextPage()}>
                        <ChevronsRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Edit / Create Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-xl w-full bg-background text-foreground md:p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl flex items-center gap-2">
                            <FileCode className="w-5 h-5" /> {editingItem ? "Edit KAD" : "Add KAD"}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                        <div>
                            <Label className="font-bold">Code *</Label>
                            <Input className="mt-1 font-mono" placeholder="e.g. 62.01" value={formData.code} onChange={e => setFormData({ ...formData, code: e.target.value })} />
                            <p className="text-xs text-muted-foreground mt-1">Include dots matching government standards.</p>
                        </div>
                        <div>
                            <Label className="font-bold">Description (Greek) *</Label>
                            <Textarea className="mt-1" placeholder="e.g. Παραγωγή λογισμικού..." value={formData.nameEL} onChange={e => setFormData({ ...formData, nameEL: e.target.value })} />
                        </div>
                        <div>
                            <Label className="font-bold">Description (English)</Label>
                            <Textarea className="mt-1" value={formData.nameEN} onChange={e => setFormData({ ...formData, nameEN: e.target.value })} />
                        </div>
                    </div>
                    <div className="flex justify-end pt-4 border-t mt-4 gap-2">
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button disabled={isSaving} onClick={handleSave}>
                            {isSaving ? <RefreshCcw className="h-4 w-4 animate-spin mr-2" /> : null}
                            Save KAD
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Bulk Assign Dialog */}
            <Dialog open={isAssignOpen} onOpenChange={setIsAssignOpen}>
                <DialogContent className="max-w-lg w-full bg-background text-foreground md:p-8">
                    <DialogHeader>
                        <DialogTitle className="text-xl flex items-center gap-2">
                            <Link2 className="w-5 h-5 text-indigo-500" />
                            Assign {totalSelected} KADs to EU Program
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 mt-2">
                        <p className="text-sm text-muted-foreground">
                            The selected <strong>{totalSelected}</strong> KADs will be linked to the program you choose below.
                            Existing links won't be overwritten.
                        </p>

                        <div>
                            <Label className="font-bold mb-2 block">Select EU Program *</Label>
                            {programs.length === 0 ? (
                                <p className="text-sm text-destructive">No EU programs found. Create one first.</p>
                            ) : (
                                <Select value={selectedProgramId} onValueChange={setSelectedProgramId}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Choose a program..." />
                                    </SelectTrigger>
                                    <SelectContent className="max-h-72">
                                        {programs.map((p) => (
                                            <SelectItem key={p.id} value={p.id}>
                                                {p.nameEL || p.nameEN || p.id}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t mt-4 gap-2">
                        <Button variant="outline" onClick={() => setIsAssignOpen(false)} disabled={isAssigning}>
                            Cancel
                        </Button>
                        <Button
                            disabled={isAssigning || !selectedProgramId || programs.length === 0}
                            onClick={handleBulkAssign}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white"
                        >
                            {isAssigning
                                ? <><RefreshCcw className="h-4 w-4 animate-spin mr-2" />Linking...</>
                                : `Link ${totalSelected} KADs`
                            }
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
