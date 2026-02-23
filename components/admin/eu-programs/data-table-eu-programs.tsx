"use client"

import * as React from "react"
import {
    ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable,
} from "@tanstack/react-table"
import { ChevronDown, Plus, RefreshCcw, FileText, Settings, KeySquare, Map, FileCode, Check, Image as ImageIcon, Briefcase, FileSearch, Languages, Link as LinkIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import {
    createEuProgram, updateEuProgram, deleteEuProgram,
    getAllPeriferies, linkPeriferiaToProgram, unlinkPeriferiaFromProgram,
    processOcrAndCreateKads, linkKadToProgram, unlinkKadFromProgram, getAllKadsList
} from "@/app/lib/actions/eu-program"

// Provide standard CDN worker so next.js turbopack doesn't break
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export type EuProgramType = {
    id: string; nameEL: string; nameEN: string | null; shortDescriptionEL: string | null; shortDescriptionEN: string | null; descriptionEL: string | null; descriptionEN: string | null;
    announcedDate: Date | null; submissionDate: Date | null; endDate: Date | null; active: boolean; publicationFile: string | null; image: string | null;
    minimumCompanyYears: number | null; minimumEmployees: number | null; percentageOfFinance: string | null; maxBudget: number | null;
    technologiesEL: any; technologiesEN: any; companyTypes: any;
    kads?: { kad: { id: string; code: string; nameEL: string } }[];
    periferies?: { periferia: { id: string; nameEL: string } }[];
};

export function DataTableEuPrograms({ data: initialData }: { data: EuProgramType[] }) {
    const [data, setData] = React.useState<EuProgramType[]>(initialData || [])
    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingProgram, setEditingProgram] = React.useState<EuProgramType | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)

    // Master lists
    const [allPeriferies, setAllPeriferies] = React.useState<any[]>([])

    // States for relational links (stored temporarily before hitting save)
    const [selectedPeriferies, setSelectedPeriferies] = React.useState<Set<string>>(new Set())

    // OCR PDF states
    const [isOcrModalOpen, setIsOcrModalOpen] = React.useState(false)
    const [pdfFile, setPdfFile] = React.useState<File | null>(null)
    const [numPages, setNumPages] = React.useState<number | null>(null)
    const [pageNumber, setPageNumber] = React.useState(1)
    const [crop, setCrop] = React.useState<Crop>({ unit: '%', width: 50, height: 50, x: 25, y: 25 })
    const [isProcessingOcr, setIsProcessingOcr] = React.useState(false)
    const canvasRef = React.useRef<HTMLCanvasElement>(null)

    // Translation & KADs states
    const [isTranslating, setIsTranslating] = React.useState(false)
    const [allKads, setAllKads] = React.useState<any[]>([])
    const [selectedKads, setSelectedKads] = React.useState<Set<string>>(new Set())
    const [kadSearch, setKadSearch] = React.useState("")

    const [formData, setFormData] = React.useState({
        nameEL: "", nameEN: "", shortDescriptionEL: "", shortDescriptionEN: "", descriptionEL: "", descriptionEN: "",
        announcedDate: "", submissionDate: "", endDate: "", active: true, publicationFile: "", image: "",
        minimumCompanyYears: "", minimumEmployees: "", percentageOfFinance: "", maxBudget: "",
    })

    React.useEffect(() => {
        // Fetch all generic reference lists ONCE when table loads
        getAllPeriferies().then(p => setAllPeriferies(p || []))
        getAllKadsList().then(k => setAllKads(k || []))
    }, [])

    const openEdit = (program?: EuProgramType) => {
        if (program) {
            setEditingProgram(program)
            setFormData({
                nameEL: program.nameEL || "", nameEN: program.nameEN || "", shortDescriptionEL: program.shortDescriptionEL || "", shortDescriptionEN: program.shortDescriptionEN || "",
                descriptionEL: program.descriptionEL || "", descriptionEN: program.descriptionEN || "",
                announcedDate: program.announcedDate ? new Date(program.announcedDate).toISOString().split('T')[0] : "",
                submissionDate: program.submissionDate ? new Date(program.submissionDate).toISOString().split('T')[0] : "",
                endDate: program.endDate ? new Date(program.endDate).toISOString().split('T')[0] : "",
                active: program.active ?? true, publicationFile: program.publicationFile || "", image: program.image || "",
                minimumCompanyYears: program.minimumCompanyYears ? String(program.minimumCompanyYears) : "",
                minimumEmployees: program.minimumEmployees ? String(program.minimumEmployees) : "",
                percentageOfFinance: program.percentageOfFinance || "", maxBudget: program.maxBudget ? String(program.maxBudget) : ""
            })
            // Fill set for checkboxes
            const perifs = new Set(program.periferies?.map(p => p.periferia.id) || [])
            setSelectedPeriferies(perifs)

            const linkedKads = new Set(program.kads?.map(k => k.kad.id) || [])
            setSelectedKads(linkedKads)
        } else {
            setEditingProgram(null)
            setFormData({
                nameEL: "", nameEN: "", shortDescriptionEL: "", shortDescriptionEN: "", descriptionEL: "", descriptionEN: "",
                announcedDate: "", submissionDate: "", endDate: "", active: true, publicationFile: "", image: "",
                minimumCompanyYears: "", minimumEmployees: "", percentageOfFinance: "", maxBudget: ""
            })
            setSelectedPeriferies(new Set())
            setSelectedKads(new Set())
        }
        setIsDialogOpen(true)
    }

    const handleTranslate = async () => {
        setIsTranslating(true)
        toast.loading("Translating fields to English...", { id: "translate" })
        try {
            const updates: any = {}
            if (formData.nameEL && !formData.nameEN) {
                const res = await fetch("/api/admin/translate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: formData.nameEL, targetLang: "en" }) })
                const data = await res.json()
                if (data.translated) updates.nameEN = data.translated
            }
            if (formData.shortDescriptionEL && !formData.shortDescriptionEN) {
                const res = await fetch("/api/admin/translate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: formData.shortDescriptionEL, targetLang: "en" }) })
                const data = await res.json()
                if (data.translated) updates.shortDescriptionEN = data.translated
            }
            if (formData.descriptionEL && !formData.descriptionEN) {
                const res = await fetch("/api/admin/translate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: formData.descriptionEL, targetLang: "en" }) })
                const data = await res.json()
                if (data.translated) updates.descriptionEN = data.translated
            }
            if (Object.keys(updates).length > 0) {
                setFormData(prev => ({ ...prev, ...updates }))
                toast.success("Translation complete!", { id: "translate" })
            } else {
                toast.success("No empty English fields to translate.", { id: "translate" })
            }
        } catch (error: any) {
            toast.error(error.message, { id: "translate" })
        } finally {
            setIsTranslating(false)
        }
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            if (!formData.nameEL) throw new Error("Name (EL) is required!")

            let resProgram: any = null;
            if (editingProgram) {
                resProgram = await updateEuProgram(editingProgram.id, formData)
                toast.success("Program updated")
            } else {
                resProgram = await createEuProgram(formData)
                toast.success("Program created")
            }

            // Sync multi-select Periferies manually after creation to ensure ID mappings
            if (resProgram && resProgram.id) {
                // Remove deselected
                const previouslySelected = editingProgram?.periferies?.map((p: any) => p.periferia.id) || [];
                for (let prevId of previouslySelected) {
                    if (!selectedPeriferies.has(prevId)) await unlinkPeriferiaFromProgram(resProgram.id, prevId)
                }
                // Add newly selected
                for (let newId of Array.from(selectedPeriferies)) {
                    if (!previouslySelected.includes(newId)) await linkPeriferiaToProgram(resProgram.id, newId)
                }

                // Fetch the fully populated object manually to update table securely
                toast.success("Relationships updated.")

                // Sync Multi-select KADs
                const previouslySelectedKads = editingProgram?.kads?.map((k: any) => k.kad.id) || [];
                let kadsChanged = false;
                for (let prevId of previouslySelectedKads) {
                    if (!selectedKads.has(prevId)) {
                        await unlinkKadFromProgram(resProgram.id, prevId)
                        kadsChanged = true
                    }
                }
                for (let newId of Array.from(selectedKads)) {
                    if (!previouslySelectedKads.includes(newId)) {
                        await linkKadToProgram(resProgram.id, newId)
                        kadsChanged = true
                    }
                }

                if (kadsChanged) toast.success("KADs updated.")

                window.location.reload() // Or you can fetch the specific object again
            }

            setIsDialogOpen(false)
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    const handleFileUpload = async (file: File | null, field: "image" | "publicationFile") => {
        if (!file) return
        toast.loading(`Uploading ${field}...`, { id: "upload" })
        try {
            const uploadData = new FormData()
            uploadData.append("file", file)
            const res = await fetch("/api/admin/articles/upload", { method: "POST", body: uploadData })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)
            setFormData(prev => ({ ...prev, [field]: d.url }))
            toast.success("File uploaded!", { id: "upload" })
        } catch (error: any) {
            toast.error(error.message, { id: "upload" })
        }
    }

    const startOcrScan = async () => {
        if (!canvasRef.current || !editingProgram) return;

        setIsProcessingOcr(true);
        toast.loading("Cropping & Sending to OpenAI GPT-4 Vision for OCR...", { id: "ocr" })

        try {
            // Document dynamically rendered puts a canvas inside `.react-pdf__Page__canvas`
            const canvasElement = document.querySelector('.react-pdf__Page__canvas') as HTMLCanvasElement;
            if (!canvasElement) throw new Error("Could not find PDF canvas element on screen. Ensure page is fully loaded.");

            const scaleX = canvasElement.width / 100
            const scaleY = canvasElement.height / 100
            const cropCanvas = document.createElement('canvas')

            cropCanvas.width = (crop.width / 100) * canvasElement.width
            cropCanvas.height = (crop.height / 100) * canvasElement.height
            const ctx = cropCanvas.getContext('2d')
            if (!ctx) throw new Error("Could not get crop canvas context");

            ctx.drawImage(
                canvasElement,
                (crop.x / 100) * canvasElement.width,
                (crop.y / 100) * canvasElement.height,
                cropCanvas.width,
                cropCanvas.height,
                0, 0, cropCanvas.width, cropCanvas.height
            )

            const base64Image = cropCanvas.toDataURL("image/jpeg")

            // Send base64 crop to API route
            const res = await fetch("/api/admin/eu-programs/ocr", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ base64Image })
            })

            const aiData = await res.json()
            if (!res.ok) throw new Error(aiData.error)

            if (aiData.kads && aiData.kads.length > 0) {
                // Post into database via server action directly
                const result = await processOcrAndCreateKads(editingProgram.id, aiData.kads)
                toast.success(`OCR Complete! Successfully parsed and linked ${result.count} KADs to this program.`, { id: "ocr" })
                setIsOcrModalOpen(false)

                // Usually would update context, but for simplicity reloading table forces fresh relationships
                setTimeout(() => window.location.reload(), 1500)
            } else {
                toast.error("No KADs found in that region. Retry with better cropping.", { id: "ocr" })
            }
        } catch (error: any) {
            toast.error(error.message, { id: "ocr" })
        } finally {
            setIsProcessingOcr(false)
        }
    }

    const columns: ColumnDef<EuProgramType>[] = [
        {
            accessorKey: "nameEL",
            header: "Program Name",
            cell: ({ row }) => <div className="font-bold text-foreground">{row.original.nameEL}</div>,
        },
        {
            accessorKey: "announcedDate",
            header: "Announced",
            cell: ({ row }) => <div className="text-muted-foreground">{row.original.announcedDate ? new Date(row.original.announcedDate).toLocaleDateString() : "-"}</div>,
        },
        {
            accessorKey: "maxBudget",
            header: "Max Budget",
            cell: ({ row }) => <div className="text-muted-foreground">{row.original.maxBudget ? `€${row.original.maxBudget.toLocaleString()}` : "-"}</div>,
        },
        {
            id: "kads",
            header: "KADs Array",
            cell: ({ row }) => (
                <Badge variant={row.original.kads && row.original.kads.length > 0 ? "default" : "secondary"}>
                    {row.original.kads?.length || 0} KADs Linked
                </Badge>
            )
        },
        {
            accessorKey: "active",
            header: "Status",
            cell: ({ row }) => (
                <Badge variant={row.original.active ? "default" : "destructive"}>
                    {row.original.active ? "Active" : "Closed"}
                </Badge>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-8">Actions <ChevronDown className="h-4 w-4 ml-1" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-background text-foreground border border-input">
                            <DropdownMenuItem className="cursor-pointer" onClick={() => openEdit(row.original)}>Edit Details & Maps</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-red-500" onClick={async () => {
                                if (confirm("Delete program forever?")) {
                                    await deleteEuProgram(row.original.id)
                                    setData(data.filter(d => d.id !== row.original.id))
                                }
                            }}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            }
        }
    ]

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel(), getPaginationRowModel: getPaginationRowModel() })

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Button onClick={() => openEdit()} className="bg-primary shadow-md hover:shadow-lg transition-all">
                    <Plus className="mr-2 h-4 w-4" /> Add EU Program
                </Button>
            </div>

            <div className="rounded-md border bg-card text-card-foreground shadow overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">No Programs Found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-4xl w-full bg-background text-foreground md:p-8 max-h-[90vh] overflow-hidden flex flex-col">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-foreground">{editingProgram ? "Manage EU Program" : "Create New Program"}</DialogTitle>
                    </DialogHeader>

                    <Tabs defaultValue="general" className="w-full flex-1 overflow-y-auto pr-2">
                        <div className="sticky top-0 bg-background pt-2 pb-4 z-10 border-b mb-4">
                            <TabsList className="grid w-full grid-cols-4 bg-muted">
                                <TabsTrigger value="general"><FileText className="w-4 h-4 mr-2" /> General</TabsTrigger>
                                <TabsTrigger value="criteria"><Settings className="w-4 h-4 mr-2" /> Criteria & Budget</TabsTrigger>
                                <TabsTrigger value="regions"><Map className="w-4 h-4 mr-2" /> Periferies Map</TabsTrigger>
                                <TabsTrigger value="kads" disabled={!editingProgram}><FileCode className="w-4 h-4 mr-2" /> Allowed KADs (OCR)</TabsTrigger>
                            </TabsList>
                        </div>

                        {/* TAB 1: GENERAL INFO */}
                        <TabsContent value="general" className="m-0 space-y-4">
                            <div className="flex justify-between items-center bg-muted/30 p-3 rounded-lg border border-border/50">
                                <span className="text-sm text-muted-foreground">Tip: Fill Greek fields, then click translate to auto-generate English.</span>
                                <Button size="sm" variant="outline" type="button" onClick={handleTranslate} disabled={isTranslating} className="bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100">
                                    {isTranslating ? <RefreshCcw className="w-4 h-4 animate-spin mr-2" /> : <Languages className="w-4 h-4 mr-2" />} Translate to EN
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="font-bold">Name (EL) *</Label>
                                    <Input className="mt-1" value={formData.nameEL} onChange={e => setFormData({ ...formData, nameEL: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="font-bold">Name (EN)</Label>
                                    <Input className="mt-1" value={formData.nameEN} onChange={e => setFormData({ ...formData, nameEN: e.target.value })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="font-bold">Short Description (EL)</Label>
                                    <Textarea className="mt-1" value={formData.shortDescriptionEL} onChange={e => setFormData({ ...formData, shortDescriptionEL: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="font-bold">Short Description (EN)</Label>
                                    <Textarea className="mt-1" value={formData.shortDescriptionEN} onChange={e => setFormData({ ...formData, shortDescriptionEN: e.target.value })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="font-bold">Full Description (EL)</Label>
                                    <Textarea className="mt-1 h-32" value={formData.descriptionEL} onChange={e => setFormData({ ...formData, descriptionEL: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="font-bold">Full Description (EN)</Label>
                                    <Textarea className="mt-1 h-32" value={formData.descriptionEN} onChange={e => setFormData({ ...formData, descriptionEN: e.target.value })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 border p-4 rounded-lg bg-muted/50">
                                <div>
                                    <Label className="font-bold text-xs text-muted-foreground uppercase">Announced Date</Label>
                                    <Input type="date" className="mt-1 bg-background" value={formData.announcedDate} onChange={e => setFormData({ ...formData, announcedDate: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="font-bold text-xs text-muted-foreground uppercase">Submission Date</Label>
                                    <Input type="date" className="mt-1 bg-background" value={formData.submissionDate} onChange={e => setFormData({ ...formData, submissionDate: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="font-bold text-xs text-muted-foreground uppercase">End Date</Label>
                                    <Input type="date" className="mt-1 bg-background" value={formData.endDate} onChange={e => setFormData({ ...formData, endDate: e.target.value })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <Label className="font-bold block mb-1">Banner Image URL</Label>
                                    <div className="flex gap-2">
                                        <Input className="flex-1" value={formData.image} placeholder="Or upload below..." onChange={e => setFormData({ ...formData, image: e.target.value })} />
                                        <Label className="cursor-pointer bg-secondary hover:bg-secondary/80 flex items-center justify-center px-4 rounded-md border"><ImageIcon className="w-4 h-4 mr-2" /> Upload <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e.target.files?.[0] || null, "image")} /></Label>
                                    </div>
                                </div>
                                <div>
                                    <Label className="font-bold block mb-1">Publication PDF File</Label>
                                    <div className="flex gap-2">
                                        <Input className="flex-1" value={formData.publicationFile} placeholder="Or upload below..." onChange={e => setFormData({ ...formData, publicationFile: e.target.value })} />
                                        <Label className="cursor-pointer bg-secondary hover:bg-secondary/80 flex items-center justify-center px-4 rounded-md border"><FileText className="w-4 h-4 mr-2" /> Upload <input type="file" className="hidden" accept="application/pdf" onChange={(e) => handleFileUpload(e.target.files?.[0] || null, "publicationFile")} /></Label>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* TAB 2: CRITERIA AND BUDGET */}
                        <TabsContent value="criteria" className="m-0 space-y-4">
                            <div className="grid grid-cols-2 gap-6 pb-6 border-b">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-xs">Financial Rules</h4>
                                    <div>
                                        <Label className="font-bold">Max Subsidized Budget (€)</Label>
                                        <Input type="number" className="mt-1" placeholder="e.g. 500000" value={formData.maxBudget} onChange={e => setFormData({ ...formData, maxBudget: e.target.value })} />
                                    </div>
                                    <div>
                                        <Label className="font-bold">Percentage of Finance</Label>
                                        <Input className="mt-1" placeholder="e.g. 50% - 75%" value={formData.percentageOfFinance} onChange={e => setFormData({ ...formData, percentageOfFinance: e.target.value })} />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-xs">Eligibility Criteria</h4>
                                    <div>
                                        <Label className="font-bold">Minimum Company Activity Years</Label>
                                        <Input type="number" className="mt-1" placeholder="e.g. 2" value={formData.minimumCompanyYears} onChange={e => setFormData({ ...formData, minimumCompanyYears: e.target.value })} />
                                    </div>
                                    <div>
                                        <Label className="font-bold">Minimum Employees (EME)</Label>
                                        <Input type="number" className="mt-1" placeholder="e.g. 3" value={formData.minimumEmployees} onChange={e => setFormData({ ...formData, minimumEmployees: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2">
                                <label className="flex items-center space-x-2 cursor-pointer bg-muted p-4 rounded-lg border">
                                    <input type="checkbox" checked={formData.active} onChange={e => setFormData({ ...formData, active: e.target.checked })} className="form-checkbox h-5 w-5 text-primary rounded" />
                                    <span className="text-base font-bold">Program is Active & Accepting Applications</span>
                                </label>
                            </div>
                        </TabsContent>

                        {/* TAB 3: PERIFERIES */}
                        <TabsContent value="regions" className="m-0 space-y-4">
                            <h4 className="font-bold text-muted-foreground uppercase tracking-widest text-xs mb-4">Select Eligible Periferies</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                                {allPeriferies.map(p => (
                                    <div key={p.id} className="flex items-start space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                                        <Checkbox
                                            id={`p-${p.id}`}
                                            checked={selectedPeriferies.has(p.id)}
                                            onCheckedChange={(checked) => {
                                                const next = new Set(selectedPeriferies);
                                                if (checked) next.add(p.id);
                                                else next.delete(p.id);
                                                setSelectedPeriferies(next);
                                            }}
                                        />
                                        <div className="grid gap-1 leading-none cursor-pointer select-none">
                                            <label htmlFor={`p-${p.id}`} className="font-medium text-sm cursor-pointer">{p.nameEL}</label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-muted-foreground pt-4">Relationships will only update definitively once you press Save.</p>
                        </TabsContent>

                        {/* TAB 4: KADS (OCR) */}
                        <TabsContent value="kads" className="m-0 space-y-4">
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-center bg-indigo-50 border border-indigo-100 p-6 rounded-xl dark:bg-indigo-950/20 dark:border-indigo-900">
                                    <div>
                                        <h3 className="font-bold text-indigo-900 dark:text-indigo-300 text-lg flex items-center gap-2"><FileSearch className="w-5 h-5" /> KAD Table Data Entry (Google / OpenAI Vision OCR)</h3>
                                        <p className="text-sm text-indigo-700 dark:text-indigo-400 mt-1">Upload the governmental PDF describing eligible KADs. You can crop specific tables and AI will extract all codes dynamically into the database.</p>
                                    </div>
                                    <Button onClick={() => setIsOcrModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
                                        <FileCode className="w-4 h-4 mr-2" /> Launch OCR Scanner
                                    </Button>
                                </div>

                                <div className="flex gap-6 flex-col md:flex-row">
                                    {/* Linked KADs Table */}
                                    <div className="border rounded-md flex-1 overflow-hidden flex flex-col max-h-[400px]">
                                        <div className="bg-muted p-3 border-b font-bold flex justify-between items-center">
                                            <span>Linked KADs ({selectedKads.size})</span>
                                            <Badge variant="secondary">Will save on submit</Badge>
                                        </div>
                                        <div className="overflow-y-auto flex-1">
                                            <Table>
                                                <TableHeader className="bg-muted">
                                                    <TableRow>
                                                        <TableHead>KAD Code</TableHead>
                                                        <TableHead>Description</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {selectedKads.size === 0 ? (
                                                        <TableRow><TableCell colSpan={2} className="text-center py-6 text-muted-foreground">No KADs linked to this program yet.</TableCell></TableRow>
                                                    ) : (
                                                        allKads.filter(k => selectedKads.has(k.id)).map((k) => (
                                                            <TableRow key={k.id}>
                                                                <TableCell className="font-mono font-bold whitespace-nowrap">{k.code}</TableCell>
                                                                <TableCell className="text-xs text-muted-foreground">{k.nameEL}</TableCell>
                                                            </TableRow>
                                                        ))
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>

                                    {/* KAD Search & Add */}
                                    <div className="border rounded-md flex-1 overflow-hidden flex flex-col max-h-[400px]">
                                        <div className="bg-muted p-3 border-b border-t md:border-t-0 font-bold flex items-center justify-between">
                                            <span>Search & Multi-select</span>
                                        </div>
                                        <div className="p-3 border-b">
                                            <Input
                                                placeholder="Search KAD code or name... (e.g. 62.01)"
                                                value={kadSearch}
                                                onChange={e => setKadSearch(e.target.value)}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="overflow-y-auto flex-1 p-2 space-y-1 bg-zinc-50 dark:bg-zinc-950">
                                            {allKads.filter(k =>
                                                kadSearch ? (k.code.includes(kadSearch) || k.nameEL.toLowerCase().includes(kadSearch.toLowerCase())) : true
                                            ).slice(0, 100).map(kad => (
                                                <label key={kad.id} className="flex items-start space-x-3 p-2 rounded-md hover:bg-muted/50 transition-colors cursor-pointer border border-transparent hover:border-border/50">
                                                    <Checkbox
                                                        id={`kad-${kad.id}`}
                                                        checked={selectedKads.has(kad.id)}
                                                        onCheckedChange={(checked) => {
                                                            const next = new Set(selectedKads);
                                                            if (checked) next.add(kad.id);
                                                            else next.delete(kad.id);
                                                            setSelectedKads(next);
                                                        }}
                                                    />
                                                    <div className="grid gap-1 leading-none">
                                                        <span className="font-mono font-bold text-sm tracking-tight">{kad.code}</span>
                                                        <span className="text-xs text-muted-foreground line-clamp-2 leading-relaxed" title={kad.nameEL}>{kad.nameEL}</span>
                                                    </div>
                                                </label>
                                            ))}
                                            {allKads.length > 0 && kadSearch.length === 0 && (
                                                <div className="text-xs text-center p-4 text-muted-foreground">Showing first 100 KADs. Search to find more.</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>

                    <div className="flex justify-end pt-4 border-t mt-4 gap-2 shrink-0">
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button disabled={isSaving} onClick={handleSave}>
                            {isSaving ? <RefreshCcw className="h-4 w-4 animate-spin mr-2" /> : "Save Program"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* OCR SCANNER DIALOG */}
            <Dialog open={isOcrModalOpen} onOpenChange={setIsOcrModalOpen}>
                <DialogContent className="max-w-6xl w-full bg-background md:p-6 max-h-[95vh] overflow-hidden flex flex-col">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">PDF/Image Intelligent OCR Table Scanner</DialogTitle>
                        <DialogDescription>Upload your PDF file. Select the page, draw a box over the KAD Tables, and extract directly.</DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col flex-1 overflow-hidden min-h-[500px] border rounded-lg bg-zinc-950 relative">
                        {/* Toolbar */}
                        <div className="absolute top-0 w-full z-10 bg-zinc-900/80 backdrop-blur-md p-3 border-b border-zinc-800 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Label className="bg-white text-black px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-md font-bold text-sm shadow-md transition-colors flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" /> Choose PDF File
                                    <input type="file" className="hidden" accept="application/pdf" onChange={(e) => setPdfFile(e.target.files?.[0] || null)} />
                                </Label>

                                {numPages && (
                                    <div className="flex items-center gap-2 bg-zinc-800/80 rounded-md p-1 px-3 text-white">
                                        <Button variant="ghost" size="sm" onClick={() => setPageNumber(p => Math.max(1, p - 1))} className="h-7 w-7 p-0">&lt;</Button>
                                        <span className="text-sm font-mono">Page {pageNumber} of {numPages}</span>
                                        <Button variant="ghost" size="sm" onClick={() => setPageNumber(p => Math.min(numPages, p + 1))} className="h-7 w-7 p-0">&gt;</Button>
                                    </div>
                                )}
                            </div>

                            <Button disabled={!pdfFile || isProcessingOcr} onClick={startOcrScan} className="bg-blue-600 hover:bg-blue-500 text-white">
                                {isProcessingOcr ? <RefreshCcw className="w-4 h-4 animate-spin mr-2" /> : <Check className="w-4 h-4 mr-2" />}
                                Scan Cropped Area & Save
                            </Button>
                        </div>

                        {/* Viewer */}
                        <div className="flex-1 overflow-auto flex items-center justify-center p-8 mt-16 pb-16">
                            {!pdfFile ? (
                                <div className="text-zinc-500 flex flex-col items-center gap-4">
                                    <FileText className="w-16 h-16 opacity-30" />
                                    <p>Select a PDF file to render its pages.</p>
                                </div>
                            ) : (
                                <ReactCrop crop={crop} onChange={c => setCrop(c)} className="max-w-full relative shadow-lg">
                                    <Document file={pdfFile} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                                        <Page
                                            pageNumber={pageNumber}
                                            renderTextLayer={false}
                                            renderAnnotationLayer={false}
                                            width={800}
                                        />
                                    </Document>
                                </ReactCrop>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    )
}
