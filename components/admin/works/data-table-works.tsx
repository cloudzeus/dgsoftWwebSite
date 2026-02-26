"use client"

import * as React from "react"
import {
    ColumnDef, flexRender, getCoreRowModel, getExpandedRowModel, useReactTable, ExpandedState,
} from "@tanstack/react-table"
import {
    ChevronDown, ChevronRight, Plus, GripVertical, Trash2, Wand2, Sparkles,
    Image as ImageIcon, Star, X, TrendingUp, Clock, Users, CheckCircle,
    BarChart2, Database, Zap, Shield, Globe, Award
} from "lucide-react"

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { createWork, updateWork, deleteWork, updateWorkOrder } from "@/app/lib/actions/work"

// ─── Types ───────────────────────────────────────────────────────────────────

export type WorkMedia = {
    id: string
    type: string
    url: string
    featured: boolean
    order: number
}

export type WorkStat = {
    icon: string
    value: string
    textEL: string
    textEN: string
}

export type WorkCustomer = {
    id: string
    NAME: string
    CODE: string
    logo?: string | null
}

export type WorkService = {
    id: string
    nameEL: string
    nameEN?: string | null
    slug: string
}

export type Work = {
    id: string
    slug: string
    titleEL: string
    titleEN?: string | null
    challengeEL?: string | null
    challengeEN?: string | null
    completionDate?: string | null
    servicesUsed?: string[] | null
    stepsEL?: string[] | null
    stepsEN?: string[] | null
    stats?: WorkStat[] | null
    customerId?: string | null
    customer?: WorkCustomer | null
    order: number
    published: boolean
    media: WorkMedia[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ElementType> = {
    TrendingUp, Clock, Users, CheckCircle, BarChart2, Database, Zap, Shield, Globe, Award
}

const ICON_OPTIONS = Object.keys(ICON_MAP)

const emptyForm = () => ({
    slug: "",
    titleEL: "",
    titleEN: "",
    challengeEL: "",
    challengeEN: "",
    completionDate: "",
    customerId: "",
    servicesUsed: [] as string[],
    stepsEL: ["", "", "", "", ""] as string[],
    stepsEN: ["", "", "", "", ""] as string[],
    stats: [
        { icon: "TrendingUp", value: "", textEL: "", textEN: "" },
        { icon: "Clock", value: "", textEL: "", textEN: "" },
        { icon: "Users", value: "", textEL: "", textEN: "" },
        { icon: "CheckCircle", value: "", textEL: "", textEN: "" },
    ] as WorkStat[],
    published: false,
    media: [] as WorkMedia[],
})

// ─── Sortable Row ─────────────────────────────────────────────────────────────

const SortableRow = ({ row, flexRender, columns }: any) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: row.original.id })
    const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1, zIndex: isDragging ? 2 : 1 }
    return (
        <TableRow ref={setNodeRef} style={style} className={isDragging ? "bg-muted shadow-md relative" : ""}>
            {row.getVisibleCells().map((cell: any) => {
                if (cell.column.id === "drag") {
                    return (
                        <TableCell key={cell.id} {...attributes} {...listeners} className="cursor-grab w-10 active:cursor-grabbing">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                    )
                }
                return (
                    <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                )
            })}
        </TableRow>
    )
}

// ─── Media Sortable Item ──────────────────────────────────────────────────────

const MediaSortableItem = ({
    item, isFeatured, onSetFeatured, onDelete
}: {
    item: WorkMedia
    isFeatured: boolean
    onSetFeatured: () => void
    onDelete: (id: string) => void
}) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id || item.url })
    const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 }
    return (
        <div ref={setNodeRef} style={style} className="flex items-center gap-3 p-2 border rounded-md bg-background mb-2">
            <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-1">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
            </div>
            {item.type === "IMAGE" ? (
                <img src={item.url} alt="media" className="w-16 h-16 object-cover rounded-sm border" />
            ) : (
                <video src={item.url} className="w-16 h-16 object-cover rounded-sm border" muted />
            )}
            <div className="flex-1 text-xs font-mono text-muted-foreground truncate">{item.url.split('/').pop()}</div>
            <div className="flex items-center gap-2 shrink-0">
                <Badge variant="outline">{item.type}</Badge>
                {isFeatured ? (
                    <Badge className="bg-amber-500 hover:bg-amber-600 text-white gap-1">
                        <Star className="h-3 w-3 fill-white" /> Featured
                    </Badge>
                ) : (
                    <Button size="sm" variant="secondary" onClick={onSetFeatured} className="h-7 text-xs hover:bg-amber-100 hover:text-amber-700">
                        Set Featured
                    </Button>
                )}
                <Button size="icon" variant="ghost" onClick={() => onDelete(item.id || item.url)} className="text-red-500 hover:text-red-600 hover:bg-red-50 h-7 w-7">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function DataTableWorks({
    data: initialData,
    allCustomers,
    allServices,
}: {
    data: Work[]
    allCustomers: WorkCustomer[]
    allServices: WorkService[]
}) {
    const [data, setData] = React.useState<Work[]>(initialData || [])
    const [expanded, setExpanded] = React.useState<ExpandedState>({})
    const [isMounted, setIsMounted] = React.useState(false)

    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingWork, setEditingWork] = React.useState<Work | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isGenerating, setIsGenerating] = React.useState(false)
    const [formData, setFormData] = React.useState(emptyForm())

    React.useEffect(() => { setIsMounted(true) }, [])

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    )

    // ── Translate helper ────────────────────────────────────────────────────
    const translate = async (sourceText: string, targetField: string) => {
        if (!sourceText) return
        toast.loading("Translating...", { id: targetField })
        try {
            const res = await fetch("/api/admin/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: sourceText, targetLang: "en" })
            })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)
            setFormData(prev => ({ ...prev, [targetField]: d.text }))
            toast.success("Translated", { id: targetField })
        } catch (err: any) {
            toast.error(err.message, { id: targetField })
        }
    }

    // ── AI Generate ─────────────────────────────────────────────────────────
    const handleGenerate = async () => {
        if (!formData.titleEL) {
            toast.error("Enter a Greek title first!")
            return
        }
        setIsGenerating(true)
        toast.loading("AI is generating case study content...", { id: "gen" })
        try {
            const customer = allCustomers.find(c => c.id === formData.customerId)
            const services = allServices.filter(s => formData.servicesUsed.includes(s.id))

            const res = await fetch("/api/admin/works/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    titleEL: formData.titleEL,
                    customerName: customer?.NAME,
                    servicesUsed: services.map(s => s.nameEL)
                })
            })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)

            setFormData(prev => ({
                ...prev,
                titleEN: d.titleEN || prev.titleEN,
                challengeEL: d.challengeEL || prev.challengeEL,
                challengeEN: d.challengeEN || prev.challengeEN,
                stepsEL: d.stepsEL?.length === 5 ? d.stepsEL : prev.stepsEL,
                stepsEN: d.stepsEN?.length === 5 ? d.stepsEN : prev.stepsEN,
                stats: d.stats?.length === 4 ? d.stats : prev.stats,
            }))
            toast.success("Content generated successfully!", { id: "gen" })
        } catch (err: any) {
            toast.error(err.message, { id: "gen" })
        } finally {
            setIsGenerating(false)
        }
    }

    // ── Row drag ────────────────────────────────────────────────────────────
    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event
        if (active.id !== over?.id) {
            const oldIndex = data.findIndex(i => i.id === active.id)
            const newIndex = data.findIndex(i => i.id === over?.id)
            const newData = arrayMove(data, oldIndex, newIndex)
            setData(newData)
            try {
                await updateWorkOrder(newData.map(d => d.id))
                toast.success("Order updated", { id: "order" })
            } catch {
                toast.error("Failed to update order", { id: "order" })
                setData(data)
            }
        }
    }

    // ── Open dialog ─────────────────────────────────────────────────────────
    const openEdit = (work?: Work) => {
        if (work) {
            setEditingWork(work)
            setFormData({
                slug: work.slug,
                titleEL: work.titleEL,
                titleEN: work.titleEN || "",
                challengeEL: work.challengeEL || "",
                challengeEN: work.challengeEN || "",
                completionDate: work.completionDate || "",
                customerId: work.customerId || "",
                servicesUsed: (work.servicesUsed as string[]) || [],
                stepsEL: (work.stepsEL as string[])?.length === 5 ? work.stepsEL as string[] : ["", "", "", "", ""],
                stepsEN: (work.stepsEN as string[])?.length === 5 ? work.stepsEN as string[] : ["", "", "", "", ""],
                stats: (work.stats as WorkStat[])?.length === 4 ? work.stats as WorkStat[] : [
                    { icon: "TrendingUp", value: "", textEL: "", textEN: "" },
                    { icon: "Clock", value: "", textEL: "", textEN: "" },
                    { icon: "Users", value: "", textEL: "", textEN: "" },
                    { icon: "CheckCircle", value: "", textEL: "", textEN: "" },
                ],
                published: work.published,
                media: work.media || [],
            })
        } else {
            setEditingWork(null)
            setFormData(emptyForm())
        }
        setIsDialogOpen(true)
    }

    // ── Save ─────────────────────────────────────────────────────────────────
    const handleSave = async () => {
        if (!formData.titleEL || !formData.slug) {
            toast.error("Title (Greek) and Slug are required")
            return
        }
        setIsSaving(true)
        try {
            const payload = {
                ...formData,
                customerId: formData.customerId || null,
                stepsEL: formData.stepsEL.filter(s => s.trim()),
                stepsEN: formData.stepsEN.filter(s => s.trim()),
                stats: formData.stats.filter(s => s.value.trim()),
            }
            if (editingWork) {
                const res = await updateWork(editingWork.id, payload)
                setData(data.map(d => d.id === res.id ? res as any : d))
                toast.success("Work updated")
            } else {
                const res = await createWork(payload)
                setData([...data, res as any])
                toast.success("Work created")
            }
            setIsDialogOpen(false)
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    // ── Media: upload (inline accordion tab) ─────────────────────────────────
    const handleInlineMediaUpload = async (files: FileList | null, work: Work) => {
        if (!files || files.length === 0) return
        toast.loading(`Uploading ${files.length} file(s)...`, { id: "upload" })
        try {
            let currentMedia = [...work.media]
            for (let i = 0; i < files.length; i++) {
                const fd = new FormData()
                fd.append("file", files[i])
                const res = await fetch("/api/admin/works/upload", { method: "POST", body: fd })
                const d = await res.json()
                if (!res.ok) throw new Error(d.error)
                currentMedia.push({ id: `new_${Date.now()}_${i}`, url: d.url, type: d.type, featured: false, order: currentMedia.length })
            }
            const updated = await updateWork(work.id, { ...work, media: currentMedia })
            setData(data.map(item => item.id === updated.id ? updated as any : item))
            toast.success("Media uploaded!", { id: "upload" })
        } catch (err: any) {
            toast.error(err.message, { id: "upload" })
        }
    }

    // ── Media: inline drag ────────────────────────────────────────────────────
    const handleInlineMediaDragEnd = async (event: DragEndEvent, work: Work) => {
        const { active, over } = event
        if (active.id !== over?.id) {
            const oldIndex = work.media.findIndex(i => (i.id || i.url) === active.id)
            const newIndex = work.media.findIndex(i => (i.id || i.url) === over?.id)
            const newMedia = arrayMove(work.media, oldIndex, newIndex)
            try {
                const updated = await updateWork(work.id, { ...work, media: newMedia })
                setData(data.map(item => item.id === updated.id ? updated as any : item))
            } catch {
                toast.error("Failed to reorder media")
            }
        }
    }

    // ── Media: set featured ───────────────────────────────────────────────────
    const handleSetFeatured = async (work: Work, mediaUrl: string) => {
        const newMedia = work.media.map(m => ({ ...m, featured: m.url === mediaUrl }))
        try {
            const updated = await updateWork(work.id, { ...work, media: newMedia })
            setData(data.map(item => item.id === updated.id ? updated as any : item))
            toast.success("Featured image set!")
        } catch {
            toast.error("Failed to set featured image")
        }
    }

    // ── Media: delete ─────────────────────────────────────────────────────────
    const handleDeleteMedia = async (work: Work, mediaId: string) => {
        if (!confirm("Remove this media?")) return
        const newMedia = work.media.filter(m => (m.id || m.url) !== mediaId)
        const updated = await updateWork(work.id, { ...work, media: newMedia })
        setData(data.map(item => item.id === updated.id ? updated as any : item))
    }

    // ── Form media upload (dialog) ────────────────────────────────────────────
    const handleFormMediaUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return
        toast.loading(`Uploading ${files.length} file(s)...`, { id: "upload-form" })
        try {
            let currentMedia = [...formData.media]
            for (let i = 0; i < files.length; i++) {
                const fd = new FormData()
                fd.append("file", files[i])
                const res = await fetch("/api/admin/works/upload", { method: "POST", body: fd })
                const d = await res.json()
                if (!res.ok) throw new Error(d.error)
                currentMedia.push({ id: `new_${Date.now()}_${i}`, url: d.url, type: d.type, featured: false, order: currentMedia.length })
            }
            setFormData(prev => ({ ...prev, media: currentMedia }))
            toast.success("Media attached!", { id: "upload-form" })
        } catch (err: any) {
            toast.error(err.message, { id: "upload-form" })
        }
    }

    const handleFormMediaDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        if (active.id !== over?.id) {
            const oldIndex = formData.media.findIndex(i => (i.id || i.url) === active.id)
            const newIndex = formData.media.findIndex(i => (i.id || i.url) === over?.id)
            setFormData(prev => ({ ...prev, media: arrayMove(prev.media, oldIndex, newIndex) }))
        }
    }

    const toggleService = (serviceId: string) => {
        setFormData(prev => ({
            ...prev,
            servicesUsed: prev.servicesUsed.includes(serviceId)
                ? prev.servicesUsed.filter(s => s !== serviceId)
                : [...prev.servicesUsed, serviceId]
        }))
    }

    // ── Columns ───────────────────────────────────────────────────────────────
    const columns: ColumnDef<Work>[] = [
        {
            id: "drag",
            header: "",
            cell: () => <GripVertical className="h-4 w-4 text-muted-foreground" />,
        },
        {
            id: "expander",
            header: () => null,
            cell: ({ row }) => (
                <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); row.toggleExpanded() }}>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${row.getIsExpanded() ? 'rotate-90' : ''}`} />
                </Button>
            ),
        },
        {
            id: "thumbnail",
            header: "Image",
            cell: ({ row }) => {
                const featured = row.original.media.find(m => m.featured) || row.original.media[0]
                if (!featured) return <div className="h-8 w-14 bg-muted rounded flex items-center justify-center text-xs text-muted-foreground">N/A</div>
                if (featured.type === "VIDEO") return <video src={featured.url} className="h-8 w-14 object-cover rounded" muted />
                return <img src={featured.url} alt="thumb" className="h-8 w-14 object-cover rounded" />
            }
        },
        {
            accessorKey: "titleEL",
            header: "Title (GR)",
            cell: ({ row }) => <div className="font-medium truncate max-w-[220px]">{row.original.titleEL}</div>
        },
        {
            id: "customer",
            header: "Customer",
            cell: ({ row }) => row.original.customer
                ? <div className="text-xs text-muted-foreground truncate max-w-[130px]">{row.original.customer.NAME}</div>
                : <span className="text-xs text-muted-foreground">—</span>
        },
        {
            accessorKey: "completionDate",
            header: "Year",
            cell: ({ row }) => <span className="text-sm">{row.original.completionDate || "—"}</span>
        },
        {
            accessorKey: "published",
            header: "Status",
            cell: ({ row }) => (
                <Badge variant={row.original.published ? "default" : "secondary"}>
                    {row.original.published ? "Published" : "Draft"}
                </Badge>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8">Actions <ChevronDown className="h-4 w-4 ml-1" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-background text-foreground border border-input">
                        <DropdownMenuItem className="cursor-pointer" onClick={() => openEdit(row.original)}>Edit Work</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-500" onClick={async () => {
                            if (confirm("Delete this work?")) {
                                await deleteWork(row.original.id)
                                setData(data.filter(d => d.id !== row.original.id))
                                toast.success("Work deleted")
                            }
                        }}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        onExpandedChange: setExpanded,
        state: { expanded }
    })

    if (!isMounted) return <div className="p-8 text-center text-muted-foreground animate-pulse">Loading works interface...</div>

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Button onClick={() => openEdit()} className="bg-primary shadow hover:shadow-lg transition-all">
                    <Plus className="mr-2 h-4 w-4" /> Add Work
                </Button>
            </div>

            {/* ── TABLE ── */}
            <div className="rounded-md border bg-card text-card-foreground shadow overflow-hidden">
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <Table>
                        <TableHeader className="bg-muted">
                            {table.getHeaderGroups().map(hg => (
                                <TableRow key={hg.id}>
                                    {hg.headers.map(header => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            <SortableContext items={data.map(d => d.id)} strategy={verticalListSortingStrategy}>
                                {table.getRowModel().rows.map(row => (
                                    <React.Fragment key={row.id}>
                                        <SortableRow row={row} flexRender={flexRender} columns={columns} />
                                        {row.getIsExpanded() && (
                                            <TableRow className="bg-muted/10">
                                                <TableCell colSpan={columns.length} className="p-4 border-b">
                                                    <Tabs defaultValue="info">
                                                        <TabsList className="mb-4">
                                                            <TabsTrigger value="info">Main Data</TabsTrigger>
                                                            <TabsTrigger value="media">Media Library</TabsTrigger>
                                                        </TabsList>

                                                        {/* ── Info Tab ── */}
                                                        <TabsContent value="info" className="space-y-3 p-4 bg-background rounded-md border text-sm">
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                                <div><strong className="text-muted-foreground text-xs block">Title (GR)</strong>{row.original.titleEL}</div>
                                                                <div><strong className="text-muted-foreground text-xs block">Title (EN)</strong>{row.original.titleEN || "—"}</div>
                                                                <div><strong className="text-muted-foreground text-xs block">Slug</strong><span className="font-mono text-xs">{row.original.slug}</span></div>
                                                                <div><strong className="text-muted-foreground text-xs block">Year</strong>{row.original.completionDate || "—"}</div>
                                                            </div>
                                                            {row.original.challengeEL && (
                                                                <div className="border-t pt-3">
                                                                    <strong className="text-muted-foreground text-xs block mb-1">Challenge (GR)</strong>
                                                                    <p className="text-sm leading-relaxed line-clamp-3">{row.original.challengeEL}</p>
                                                                </div>
                                                            )}
                                                            {row.original.stepsEL && (row.original.stepsEL as string[]).length > 0 && (
                                                                <div className="border-t pt-3">
                                                                    <strong className="text-muted-foreground text-xs block mb-2">Steps</strong>
                                                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                                                        {(row.original.stepsEL as string[]).map((s, i) => <li key={i}>{s}</li>)}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                            {row.original.stats && (row.original.stats as WorkStat[]).length > 0 && (
                                                                <div className="border-t pt-3">
                                                                    <strong className="text-muted-foreground text-xs block mb-2">Stats</strong>
                                                                    <div className="flex flex-wrap gap-3">
                                                                        {(row.original.stats as WorkStat[]).map((stat, i) => {
                                                                            const Icon = ICON_MAP[stat.icon] || TrendingUp
                                                                            return (
                                                                                <div key={i} className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg text-xs">
                                                                                    <Icon className="h-4 w-4 text-primary" />
                                                                                    <span className="font-bold">{stat.value}</span>
                                                                                    <span className="text-muted-foreground">{stat.textEL}</span>
                                                                                </div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {row.original.servicesUsed && (row.original.servicesUsed as string[]).length > 0 && (
                                                                <div className="border-t pt-3">
                                                                    <strong className="text-muted-foreground text-xs block mb-2">Services Used</strong>
                                                                    <div className="flex flex-wrap gap-1">
                                                                        {(row.original.servicesUsed as string[]).map(sid => {
                                                                            const svc = allServices.find(s => s.id === sid)
                                                                            return svc ? <Badge key={sid} variant="outline">{svc.nameEL}</Badge> : null
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </TabsContent>

                                                        {/* ── Media Tab ── */}
                                                        <TabsContent value="media" className="p-4 bg-background rounded-md border min-h-[200px]">
                                                            <div className="flex justify-between items-center mb-4">
                                                                <h4 className="font-semibold text-sm">Media ({row.original.media.length} files)</h4>
                                                                <Label className="cursor-pointer bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-primary/90 transition-colors">
                                                                    Upload
                                                                    <input type="file" className="hidden" multiple accept="image/*,video/*" onChange={(e) => handleInlineMediaUpload(e.target.files, row.original)} />
                                                                </Label>
                                                            </div>
                                                            {row.original.media.length === 0 ? (
                                                                <div className="text-center text-sm text-muted-foreground py-8 border-2 border-dashed rounded-md">No media yet.</div>
                                                            ) : (
                                                                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => handleInlineMediaDragEnd(e, row.original)}>
                                                                    <SortableContext items={row.original.media.map(m => m.id || m.url)} strategy={verticalListSortingStrategy}>
                                                                        {row.original.media.map(m => (
                                                                            <MediaSortableItem
                                                                                key={m.id || m.url}
                                                                                item={m}
                                                                                isFeatured={m.featured}
                                                                                onSetFeatured={() => handleSetFeatured(row.original, m.url)}
                                                                                onDelete={(id) => handleDeleteMedia(row.original, id)}
                                                                            />
                                                                        ))}
                                                                    </SortableContext>
                                                                </DndContext>
                                                            )}
                                                        </TabsContent>
                                                    </Tabs>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </React.Fragment>
                                ))}
                            </SortableContext>
                            {data.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                                        No works yet. Click "Add Work" to create your first case study.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </DndContext>
            </div>

            {/* ── EDIT / CREATE DIALOG ── */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="w-[96vw] md:max-w-[80vw] max-h-[92vh] overflow-y-auto bg-background text-foreground p-6 md:p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">{editingWork ? "Edit Work" : "Create Work"}</DialogTitle>
                    </DialogHeader>

                    <Tabs defaultValue="greek" className="w-full mt-2">
                        <TabsList className="grid w-full grid-cols-4 mb-6 max-w-2xl">
                            <TabsTrigger value="greek">🇬🇷 Greek</TabsTrigger>
                            <TabsTrigger value="english">🇬🇧 English</TabsTrigger>
                            <TabsTrigger value="details">Details</TabsTrigger>
                            <TabsTrigger value="media" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">📁 Media</TabsTrigger>
                        </TabsList>

                        {/* ── GREEK TAB ── */}
                        <TabsContent value="greek" className="space-y-5">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-foreground">Greek Content</h3>
                                <Button
                                    type="button" variant="outline" size="sm"
                                    className="h-8 text-xs bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:border-indigo-800 dark:text-indigo-300 font-semibold"
                                    onClick={handleGenerate} disabled={isGenerating}
                                >
                                    <Sparkles className={`w-3 h-3 mr-1.5 ${isGenerating ? 'animate-spin' : ''}`} />
                                    {isGenerating ? 'AI Generating...' : 'Auto-Generate via AI'}
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="font-bold">Title (Greek) *</Label>
                                    <Input className="bg-background mt-1" value={formData.titleEL}
                                        onChange={e => {
                                            const val = e.target.value
                                            const autoSlug = val.trim().toLowerCase().replace(/[\s_]+/g, '-').replace(/[^a-z0-9α-ωάέήίόύώ-]/g, '')
                                            setFormData(prev => ({ ...prev, titleEL: val, slug: !editingWork ? autoSlug : prev.slug }))
                                        }}
                                    />
                                </div>
                                <div>
                                    <Label className="font-bold">Slug *</Label>
                                    <Input className="bg-background mt-1 font-mono text-sm" value={formData.slug}
                                        onChange={e => setFormData(prev => ({ ...prev, slug: e.target.value }))} />
                                </div>
                            </div>

                            <div>
                                <Label className="font-bold">Challenge / Description (Greek)</Label>
                                <Textarea className="bg-background mt-1" rows={5} value={formData.challengeEL}
                                    onChange={e => setFormData(prev => ({ ...prev, challengeEL: e.target.value }))} />
                            </div>

                            <div>
                                <Label className="font-bold">Implementation Steps (Greek) — 5 bullet points</Label>
                                <div className="space-y-2 mt-1">
                                    {formData.stepsEL.map((step, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-muted-foreground w-5 shrink-0">{i + 1}.</span>
                                            <Input className="bg-background text-sm" placeholder={`Step ${i + 1}...`}
                                                value={step} onChange={e => {
                                                    const arr = [...formData.stepsEL]
                                                    arr[i] = e.target.value
                                                    setFormData(prev => ({ ...prev, stepsEL: arr }))
                                                }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* ── ENGLISH TAB ── */}
                        <TabsContent value="english" className="space-y-5">
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <Label className="font-bold">Title (English)</Label>
                                    <Wand2 className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-primary" onClick={() => translate(formData.titleEL, 'titleEN')} />
                                </div>
                                <Input className="bg-background" value={formData.titleEN}
                                    onChange={e => setFormData(prev => ({ ...prev, titleEN: e.target.value }))} />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <Label className="font-bold">Challenge / Description (English)</Label>
                                    <Wand2 className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-primary" onClick={() => translate(formData.challengeEL, 'challengeEN')} />
                                </div>
                                <Textarea className="bg-background" rows={5} value={formData.challengeEN}
                                    onChange={e => setFormData(prev => ({ ...prev, challengeEN: e.target.value }))} />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <Label className="font-bold">Implementation Steps (English)</Label>
                                </div>
                                <div className="space-y-2">
                                    {formData.stepsEN.map((step, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-muted-foreground w-5 shrink-0">{i + 1}.</span>
                                            <Input className="bg-background text-sm" placeholder={`Step ${i + 1}...`}
                                                value={step} onChange={e => {
                                                    const arr = [...formData.stepsEN]
                                                    arr[i] = e.target.value
                                                    setFormData(prev => ({ ...prev, stepsEN: arr }))
                                                }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>

                        {/* ── DETAILS TAB ── */}
                        <TabsContent value="details" className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="font-bold">Customer</Label>
                                    <Select value={formData.customerId} onValueChange={v => setFormData(prev => ({ ...prev, customerId: v === "none" ? "" : v }))}>
                                        <SelectTrigger className="bg-background mt-1">
                                            <SelectValue placeholder="Select customer..." />
                                        </SelectTrigger>
                                        <SelectContent className="bg-background text-foreground border border-input max-h-60">
                                            <SelectItem value="none">— None —</SelectItem>
                                            {allCustomers.map(c => (
                                                <SelectItem key={c.id} value={c.id}>{c.NAME}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label className="font-bold">Completion Year</Label>
                                    <Input className="bg-background mt-1" placeholder="e.g. 2024" maxLength={4}
                                        value={formData.completionDate}
                                        onChange={e => setFormData(prev => ({ ...prev, completionDate: e.target.value }))} />
                                </div>
                            </div>

                            {/* Services Used */}
                            <div>
                                <Label className="font-bold">Services Used</Label>
                                <div className="flex flex-wrap gap-2 mt-2 p-3 border rounded-md bg-muted/20 min-h-[50px]">
                                    {allServices.map(svc => {
                                        const active = formData.servicesUsed.includes(svc.id)
                                        return (
                                            <Badge key={svc.id} variant={active ? "default" : "outline"}
                                                className="cursor-pointer transition-colors"
                                                onClick={() => toggleService(svc.id)}>
                                                {svc.nameEL}
                                            </Badge>
                                        )
                                    })}
                                    {allServices.length === 0 && <span className="text-xs text-muted-foreground">No services available.</span>}
                                </div>
                            </div>

                            {/* Stats */}
                            <div>
                                <Label className="font-bold">Stats Cards (4 items)</Label>
                                <div className="space-y-3 mt-2">
                                    {formData.stats.map((stat, i) => {
                                        const Icon = ICON_MAP[stat.icon] || TrendingUp
                                        return (
                                            <div key={i} className="grid grid-cols-5 gap-2 items-center p-3 border rounded-md bg-muted/10">
                                                <div className="col-span-1">
                                                    <Label className="text-xs text-muted-foreground">Icon</Label>
                                                    <Select value={stat.icon} onValueChange={v => {
                                                        const arr = [...formData.stats]
                                                        arr[i] = { ...arr[i], icon: v }
                                                        setFormData(prev => ({ ...prev, stats: arr }))
                                                    }}>
                                                        <SelectTrigger className="bg-background mt-1 h-8 text-xs">
                                                            <div className="flex items-center gap-1.5">
                                                                <Icon className="h-3 w-3" />
                                                                <span>{stat.icon}</span>
                                                            </div>
                                                        </SelectTrigger>
                                                        <SelectContent className="bg-background text-foreground border border-input">
                                                            {ICON_OPTIONS.map(ico => {
                                                                const Ico = ICON_MAP[ico]
                                                                return (
                                                                    <SelectItem key={ico} value={ico}>
                                                                        <div className="flex items-center gap-2"><Ico className="h-3 w-3" />{ico}</div>
                                                                    </SelectItem>
                                                                )
                                                            })}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="col-span-1">
                                                    <Label className="text-xs text-muted-foreground">Value</Label>
                                                    <Input className="bg-background mt-1 h-8 text-sm font-bold" placeholder="40%" value={stat.value}
                                                        onChange={e => {
                                                            const arr = [...formData.stats]
                                                            arr[i] = { ...arr[i], value: e.target.value }
                                                            setFormData(prev => ({ ...prev, stats: arr }))
                                                        }} />
                                                </div>
                                                <div className="col-span-1">
                                                    <Label className="text-xs text-muted-foreground">Label (GR)</Label>
                                                    <Input className="bg-background mt-1 h-8 text-xs" placeholder="Αύξηση..." value={stat.textEL}
                                                        onChange={e => {
                                                            const arr = [...formData.stats]
                                                            arr[i] = { ...arr[i], textEL: e.target.value }
                                                            setFormData(prev => ({ ...prev, stats: arr }))
                                                        }} />
                                                </div>
                                                <div className="col-span-1">
                                                    <Label className="text-xs text-muted-foreground">Label (EN)</Label>
                                                    <Input className="bg-background mt-1 h-8 text-xs" placeholder="Increase..." value={stat.textEN}
                                                        onChange={e => {
                                                            const arr = [...formData.stats]
                                                            arr[i] = { ...arr[i], textEN: e.target.value }
                                                            setFormData(prev => ({ ...prev, stats: arr }))
                                                        }} />
                                                </div>
                                                <div className="col-span-1 flex items-end justify-center pb-0.5">
                                                    <div className="flex items-center gap-2 px-2 py-1 bg-muted rounded text-xs">
                                                        <Icon className="h-3.5 w-3.5 text-primary" />
                                                        <strong>{stat.value || "—"}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Publish */}
                            <div className="flex items-center space-x-3 pt-2 border-t">
                                <Switch checked={formData.published} onCheckedChange={c => setFormData(prev => ({ ...prev, published: c }))} />
                                <Label className="font-semibold">{formData.published ? "Published" : "Draft"}</Label>
                            </div>
                        </TabsContent>

                        {/* ── MEDIA TAB ── */}
                        <TabsContent value="media" className="p-4 bg-muted/20 border rounded-md min-h-[300px]">
                            <div className="flex justify-between items-center mb-6 border-b pb-4">
                                <div>
                                    <h3 className="font-bold text-lg">Media Library</h3>
                                    <p className="text-xs text-muted-foreground">Images converted to WebP, max 1920px. Mark one as featured.</p>
                                </div>
                                <Label className="cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold shadow hover:bg-primary/90 transition-all flex items-center gap-2">
                                    <Plus className="w-4 h-4" /> Upload Files
                                    <input type="file" className="hidden" multiple accept="image/*,video/*" onChange={e => handleFormMediaUpload(e.target.files)} />
                                </Label>
                            </div>
                            {formData.media.length === 0 ? (
                                <div className="text-center text-sm text-muted-foreground py-16 border-2 border-dashed rounded-md bg-background">
                                    No media attached. Upload images or videos above.
                                </div>
                            ) : (
                                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleFormMediaDragEnd}>
                                    <SortableContext items={formData.media.map(m => m.id || m.url)} strategy={verticalListSortingStrategy}>
                                        <div className="space-y-2">
                                            {formData.media.map(m => (
                                                <MediaSortableItem
                                                    key={m.id || m.url}
                                                    item={m}
                                                    isFeatured={m.featured}
                                                    onSetFeatured={() => setFormData(prev => ({
                                                        ...prev,
                                                        media: prev.media.map(x => ({ ...x, featured: x.id === m.id || x.url === m.url }))
                                                    }))}
                                                    onDelete={(mediaId) => {
                                                        if (!confirm("Remove this file?")) return
                                                        setFormData(prev => ({ ...prev, media: prev.media.filter(x => (x.id || x.url) !== mediaId) }))
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </SortableContext>
                                </DndContext>
                            )}
                        </TabsContent>
                    </Tabs>

                    {/* ── Save / Cancel ── */}
                    <div className="flex justify-end gap-3 pt-4 border-t mt-2">
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button onClick={handleSave} disabled={isSaving} className="min-w-[120px]">
                            {isSaving ? "Saving..." : editingWork ? "Update Work" : "Create Work"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
