"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import {
    ChevronDown,
    Plus,
    GripVertical,
    Trash2,
    Sparkles,
    Image as ImageIcon,
    Star,
    X,
    TrendingUp,
    Clock,
    Users,
    CheckCircle,
    BarChart2,
    Database,
    Zap,
    Shield,
    Globe,
    Award,
    RefreshCcw,
    ExternalLink,
    Layout,
} from "lucide-react"

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { createWork, updateWork, deleteWork, updateWorkOrder } from "@/app/lib/actions/work"
import { GenericDataTable } from "../shared/generic-data-table"
import { MultiSelectCombobox } from "./multi-select-combobox"

// ─── Types ───────────────────────────────────────────────────────────────────

export type WorkMedia = { id: string, type: string, url: string, featured: boolean, order: number }
export type WorkStat = { icon: string, value: string, textEL: string, textEN: string }
export type WorkCustomer = { id: string, NAME: string, CODE: string, logo?: string | null }
export type WorkService = { id: string, nameEL: string, nameEN?: string | null, slug: string }
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

const ICON_MAP: Record<string, React.ElementType> = {
    TrendingUp, Clock, Users, CheckCircle, BarChart2, Database, Zap, Shield, Globe, Award
}

const MediaSortableItem = ({ item, isFeatured, onSetFeatured, onDelete }: {
    item: WorkMedia
    isFeatured: boolean
    onSetFeatured: () => void
    onDelete: (id: string) => void
}) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id || item.url })
    const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 }
    return (
        <div ref={setNodeRef} style={style} className="flex items-center gap-3 p-3 border border-[#EDEBE9] rounded-lg bg-white mb-2 group hover:border-[#C7E0F4] transition-all">
            <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-1.5 hover:bg-[#F3F2F1] rounded">
                <GripVertical className="h-4 w-4 text-[#A19F9D]" />
            </div>
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#F3F2F1] border border-[#EDEBE9] shrink-0">
                {item.type === "IMAGE" ? (
                    <img src={item.url} alt="media" className="w-full h-full object-cover" />
                ) : (
                    <video src={item.url} className="w-full h-full object-cover" muted />
                )}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-[#A19F9D] truncate">{item.url.split('/').pop()}</p>
                <div className="mt-1.5 flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px] uppercase font-semibold text-[#605E5C] border-[#C8C6C4]">{item.type}</Badge>
                    {isFeatured && (
                        <Badge className="bg-amber-500/10 text-amber-600 border-none text-[10px] font-semibold px-2">
                            <Star className="w-3 h-3 mr-1 fill-amber-500" /> Featured
                        </Badge>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-2">
                {!isFeatured && (
                    <Button size="sm" variant="ghost" onClick={onSetFeatured} className="h-8 px-3 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] rounded">
                        Set Main
                    </Button>
                )}
                <Button size="icon" variant="ghost" onClick={() => onDelete(item.id || item.url)} className="text-[#A19F9D] hover:text-red-500 h-8 w-8 hover:bg-red-50 rounded">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export function DataTableWorks({ data: initialData, allCustomers, allServices }: {
    data: Work[]
    allCustomers: WorkCustomer[]
    allServices: WorkService[]
}) {
    const [data, setData] = React.useState<Work[]>(initialData || [])
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => { setIsMounted(true) }, [])

    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingWork, setEditingWork] = React.useState<Work | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isGenerating, setIsGenerating] = React.useState(false)

    const [formData, setFormData] = React.useState({
        slug: "", titleEL: "", titleEN: "", challengeEL: "", challengeEN: "", completionDate: "", customerId: "",
        servicesUsed: [] as string[], stepsEL: [] as string[], stepsEN: [] as string[],
        stats: [] as WorkStat[], published: false, media: [] as WorkMedia[]
    })

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    )

    const handleReorder = async (newData: Work[]) => {
        setData(newData)
        try {
            await updateWorkOrder(newData.map(d => d.id))
            toast.success("Operational sequence updated")
        } catch {
            setData(initialData)
            toast.error("Sequence sync failed")
        }
    }

    const openEdit = (work?: Work) => {
        if (work) {
            setEditingWork(work)
            setFormData({
                slug: work.slug, titleEL: work.titleEL, titleEN: work.titleEN || "",
                challengeEL: work.challengeEL || "", challengeEN: work.challengeEN || "",
                completionDate: work.completionDate || "", customerId: work.customerId || "",
                servicesUsed: (work.servicesUsed as string[]) || [],
                stepsEL: (work.stepsEL as string[]) || [], stepsEN: (work.stepsEN as string[]) || [],
                stats: (work.stats as WorkStat[])?.length > 0 ? work.stats as WorkStat[] : [
                    { icon: "TrendingUp", value: "", textEL: "", textEN: "" },
                    { icon: "Clock", value: "", textEL: "", textEN: "" },
                    { icon: "Users", value: "", textEL: "", textEN: "" },
                    { icon: "CheckCircle", value: "", textEL: "", textEN: "" },
                ],
                published: work.published, media: work.media || []
            })
        } else {
            setEditingWork(null)
            setFormData({
                slug: "", titleEL: "", titleEN: "", challengeEL: "", challengeEN: "",
                completionDate: "", customerId: "", servicesUsed: [], stepsEL: [], stepsEN: [],
                stats: [], published: false, media: []
            })
        }
        setIsDialogOpen(true)
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            const payload = { ...formData, customerId: formData.customerId || null }
            if (editingWork) {
                const res = await updateWork(editingWork.id, payload)
                setData(data.map(d => d.id === res.id ? res as any : d))
                toast.success("Case study updated")
            } else {
                const res = await createWork(payload)
                setData([...data, res as any])
                toast.success("Case study initialized")
            }
            setIsDialogOpen(false)
        } catch (err: any) { toast.error(err.message) }
        finally { setIsSaving(false) }
    }

    const handleGenerate = async () => {
        if (!formData.titleEL) return toast.error("Provide a Greek title first")
        setIsGenerating(true)
        const tid = toast.loading("AI Engine is mapping the success story...")
        try {
            const customer = allCustomers.find(c => c.id === formData.customerId)
            const services = allServices.filter(s => formData.servicesUsed.includes(s.id))
            const res = await fetch("/api/admin/works/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ titleEL: formData.titleEL, customerName: customer?.NAME, servicesUsed: services.map(s => s.nameEL) })
            })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)
            setFormData(prev => ({
                ...prev,
                titleEN: d.titleEN || prev.titleEN, challengeEL: d.challengeEL || prev.challengeEL, challengeEN: d.challengeEN || prev.challengeEN,
                stepsEL: d.stepsEL?.length === 5 ? d.stepsEL : prev.stepsEL, stepsEN: d.stepsEN?.length === 5 ? d.stepsEN : prev.stepsEN,
                stats: d.stats?.length === 4 ? d.stats : prev.stats,
                slug: d.slug || prev.slug || formData.titleEL.toLowerCase().replace(/[^a-z0-9α-ωάέήίόύώ]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
            }))
            toast.success("Intelligence Draft Generated", { id: tid })
        } catch (err: any) { toast.error(err.message, { id: tid }) }
        finally { setIsGenerating(false) }
    }

    const handleMediaUpload = async (files: FileList | null, workId?: string) => {
        if (!files || files.length === 0) return
        const tid = toast.loading(`Uploading ${files.length} evidence assets...`)
        try {
            let currentMedia = workId ? data.find(w => w.id === workId)?.media || [] : [...formData.media]
            for (let i = 0; i < files.length; i++) {
                const fd = new FormData(); fd.append("file", files[i]);
                const res = await fetch("/api/admin/works/upload", { method: "POST", body: fd })
                const d = await res.json()
                if (!res.ok) throw new Error(d.error)
                currentMedia.push({ id: `new_${Date.now()}_${i}`, url: d.url, type: d.type, featured: false, order: currentMedia.length })
            }
            if (workId) {
                const updated = await updateWork(workId, { ...data.find(w => w.id === workId)!, media: currentMedia })
                setData(data.map(item => item.id === updated.id ? updated as any : item))
            } else {
                setFormData(prev => ({ ...prev, media: currentMedia }))
            }
            toast.success("Visual library expanded", { id: tid })
        } catch (err: any) { toast.error(err.message, { id: tid }) }
    }

    const columns: ColumnDef<Work>[] = [
        {
            id: "drag",
            header: "",
            cell: () => <GripVertical className="h-4 w-4 text-[#C8C6C4] opacity-0 group-hover:opacity-100 transition-opacity" />,
            size: 40
        },
        {
            id: "hero",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Media</span>,
            cell: ({ row }) => {
                const media = row.original.media || []
                const hero = media.find((m: WorkMedia) => m.featured) || media[0]
                return (
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-[#EDEBE9] bg-[#F3F2F1] shrink-0 flex items-center justify-center">
                        {hero ? (
                            (hero.type || "IMAGE").toUpperCase() === "VIDEO" ? (
                                <video src={hero.url} className="w-full h-full object-cover" muted playsInline />
                            ) : (
                                <img src={hero.url} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            )
                        ) : (
                            <ImageIcon className="w-4 h-4 text-[#C8C6C4]" />
                        )}
                        {media.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-[#605E5C] text-white text-[9px] font-bold h-4 min-w-4 rounded-full flex items-center justify-center px-1">
                                {media.length}
                            </span>
                        )}
                    </div>
                )
            },
            size: 60
        },
        {
            accessorKey: "titleEL",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Case Study</span>,
            cell: ({ row }) => (
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#201F1E]">{row.original.titleEL}</span>
                    {row.original.titleEN && <span className="text-[11px] text-[#A19F9D] italic">{row.original.titleEN}</span>}
                    <span className="text-[11px] text-[#A19F9D] mt-0.5">
                        {row.original.customer?.NAME || "Independent Project"}
                    </span>
                </div>
            )
        },
        {
            accessorKey: "published",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Status</span>,
            cell: ({ row }) => row.original.published ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Public
                </span>
            ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8C6C4] shrink-0" />
                    Draft
                </span>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] hover:border-[#A19F9D] rounded gap-1">
                            Actions <ChevronDown className="w-3.5 h-3.5 text-[#A19F9D]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem onClick={() => openEdit(row.original)} className="text-sm">
                            <Layout className="w-3.5 h-3.5 mr-2 text-[#0078D4]" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => window.open(`/works/${row.original.slug}`, "_blank")} className="text-sm">
                            <ExternalLink className="w-3.5 h-3.5 mr-2" /> Preview
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500 text-sm" onClick={async () => {
                            if (confirm("Archive this case study?")) {
                                await deleteWork(row.original.id)
                                setData(data.filter(d => d.id !== row.original.id))
                            }
                        }}>
                            <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    const renderExpandedRow = (work: Work) => (
        <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
            <Tabs defaultValue="highlights">
                <div className="px-4 pt-3 pb-0">
                    <TabsList className="mb-0 bg-white border border-[#EDEBE9] p-0.5 h-8 rounded gap-0.5 w-fit">
                        <TabsTrigger value="highlights" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7 transition-all">
                            Highlights
                        </TabsTrigger>
                        <TabsTrigger value="media" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7 transition-all">
                            Media ({(work.media || []).length})
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="highlights" className="animate-in fade-in duration-300 p-4 space-y-4">
                    {work.stats && work.stats.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#EDEBE9] rounded-lg overflow-hidden">
                            {work.stats.map((stat, i) => {
                                const Icon = ICON_MAP[stat.icon] || TrendingUp
                                return (
                                    <div key={i} className="bg-white px-3 py-3 flex flex-col items-center text-center">
                                        <div className="w-8 h-8 bg-[#EFF6FC] border border-[#C7E0F4] rounded flex items-center justify-center mb-2">
                                            <Icon className="w-4 h-4 text-[#0078D4]" />
                                        </div>
                                        <span className="text-sm font-bold text-[#201F1E]">{stat.value}</span>
                                        <span className="text-[10px] font-semibold uppercase text-[#605E5C] tracking-wide">{stat.textEL || "—"}</span>
                                        {stat.textEN && <span className="text-[10px] text-[#A19F9D] italic">({stat.textEN})</span>}
                                    </div>
                                )
                            })}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#EDEBE9] rounded-lg overflow-hidden">
                        <div className="bg-white p-4 space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Strategic Challenge</p>
                            <p className="text-sm leading-relaxed text-[#605E5C] italic">
                                &quot;{work.challengeEL || "Challenge briefing not yet defined."}&quot;
                            </p>
                            {work.challengeEN && <p className="text-[11px] text-[#A19F9D] italic">EN: &quot;{work.challengeEN}&quot;</p>}
                        </div>
                        <div className="bg-white p-4 space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Services Used</p>
                            <div className="flex flex-wrap gap-1.5">
                                {work.servicesUsed?.map(sid => {
                                    const s = allServices.find(x => x.id === sid)
                                    return s ? (
                                        <Badge key={sid} variant="secondary" className="bg-[#F3F2F1] text-[#605E5C] border-none rounded text-xs font-semibold">
                                            {s.nameEL}{s.nameEN ? ` / ${s.nameEN}` : ""}
                                        </Badge>
                                    ) : null
                                })}
                            </div>
                            <div className="pt-3 border-t border-[#EDEBE9] flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {(work.media || []).slice(0, 3).map((m, i) => (
                                        <div key={m.id || m.url || i} className="w-8 h-8 rounded-lg border border-[#EDEBE9] overflow-hidden bg-[#F3F2F1]">
                                            {m.type === "VIDEO"
                                                ? <video src={m.url} className="w-full h-full object-cover" muted />
                                                : <img src={m.url} alt="" className="w-full h-full object-cover" />}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[10px] font-semibold uppercase text-[#A19F9D]">{(work.media || []).length} media assets</span>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="media" className="animate-in fade-in duration-300 p-4">
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Production Assets ({(work.media || []).length})</p>
                        <Label className="cursor-pointer h-8 px-4 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded inline-flex items-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                            <Plus className="w-3.5 h-3.5" /> Add Media
                            <input type="file" className="hidden" multiple accept="image/*,video/*" onChange={e => handleMediaUpload(e.target.files, work.id)} />
                        </Label>
                    </div>
                    <div className="space-y-1">
                        {(work.media || []).length === 0 ? (
                            <div className="py-8 text-center rounded-lg border border-dashed border-[#EDEBE9] bg-white">
                                <ImageIcon className="w-8 h-8 mx-auto text-[#C8C6C4] mb-2" />
                                <p className="text-sm font-medium text-[#A19F9D]">No media yet. Upload images or videos.</p>
                            </div>
                        ) : (
                            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
                                const { active, over } = e
                                if (active.id !== over?.id) {
                                    const mediaList = work.media || []
                                    const oldIdx = mediaList.findIndex(i => (i.id || i.url) === active.id)
                                    const newIdx = mediaList.findIndex(i => (i.id || i.url) === over?.id)
                                    const newMediaList = arrayMove(mediaList, oldIdx, newIdx)
                                    updateWork(work.id, { ...work, media: newMediaList }).then(res => setData(data.map(w => w.id === res.id ? res as any : w)))
                                }
                            }}>
                                <SortableContext items={(work.media || []).map(m => m.id || m.url)} strategy={verticalListSortingStrategy}>
                                    {(work.media || []).map(m => (
                                        <MediaSortableItem
                                            key={m.id || m.url} item={m} isFeatured={m.featured}
                                            onDelete={async (id) => {
                                                if (confirm("Delete asset?")) {
                                                    const mediaList = work.media || []
                                                    const upd = await updateWork(work.id, { ...work, media: mediaList.filter(x => (x.id || x.url) !== id) })
                                                    setData(data.map(w => w.id === upd.id ? upd as any : w))
                                                }
                                            }}
                                            onSetFeatured={async () => {
                                                const mediaList = work.media || []
                                                const upd = await updateWork(work.id, { ...work, media: mediaList.map(x => ({ ...x, featured: x.url === m.url })) })
                                                setData(data.map(w => w.id === upd.id ? upd as any : w))
                                                toast.success("Featured media updated")
                                            }}
                                        />
                                    ))}
                                </SortableContext>
                            </DndContext>
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )

    if (!isMounted) return null

    return (
        <div className="space-y-4">
            <GenericDataTable
                columns={columns} data={data} searchPlaceholder="Αναζήτηση έργου..." searchColumn="titleEL"
                onAddClick={() => openEdit()} addButtonLabel="Νέο Έργο"
                isSortable={true} rowIdKey="id" onReorder={handleReorder}
                renderExpandedRow={renderExpandedRow}
            />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-6xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
                    {/* Dialog Header */}
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] p-1 flex items-center justify-center shrink-0">
                                    <Layout className="w-4 h-4 text-[#0078D4]" />
                                </div>
                                <div>
                                    <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                        {editingWork ? 'Ενημέρωση Μελέτης' : 'Νέα Μελέτη Περίπτωσης'}
                                    </DialogTitle>
                                    <DialogDescription className="text-[11px] text-[#A19F9D]">
                                        Δημιουργία μελετών αντικτύπου με μετρήσεις απόδοσης.
                                    </DialogDescription>
                                </div>
                            </div>
                            <Button size="sm" onClick={handleGenerate} disabled={isGenerating} className="h-8 px-4 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95">
                                {isGenerating ? <RefreshCcw className="w-3.5 h-3.5 animate-spin mr-1.5" /> : <Sparkles className="w-3.5 h-3.5 mr-1.5" />}
                                Forge with AI
                            </Button>
                        </div>
                    </DialogHeader>

                    {/* Dialog Body */}
                    <div className="bg-[#F3F2F1] max-h-[75vh] overflow-y-auto">
                        <Tabs defaultValue="base">
                            <div className="px-5 pt-4 pb-0 bg-white border-b border-[#EDEBE9]">
                                <TabsList className="bg-[#F3F2F1] p-0.5 h-8 rounded gap-0.5 w-fit border border-[#EDEBE9]">
                                    <TabsTrigger value="base" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7">Core</TabsTrigger>
                                    <TabsTrigger value="impact" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7">Steps</TabsTrigger>
                                    <TabsTrigger value="metrics" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7">Metrics</TabsTrigger>
                                    <TabsTrigger value="media" className="data-[state=active]:bg-white data-[state=active]:shadow-sm text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7">Media</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="base" className="animate-in fade-in duration-300 p-4 space-y-3">
                                {/* Identity */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Ταυτότητα</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Τίτλος (Ελληνικά)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="Περιγραφή έργου..." value={formData.titleEL} onChange={e => setFormData({ ...formData, titleEL: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Τίτλος (English)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="Project name in English..." value={formData.titleEN} onChange={e => setFormData({ ...formData, titleEN: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Slug</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] font-mono text-xs text-[#0078D4]" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Έτος Ολοκλήρωσης</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="2024" value={formData.completionDate} onChange={e => setFormData({ ...formData, completionDate: e.target.value })} maxLength={10} />
                                        </div>
                                    </div>
                                </div>
                                {/* Connection */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Σύνδεση</p>
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Συνεργάτης (Customer)</Label>
                                        <Select value={formData.customerId} onValueChange={v => setFormData({ ...formData, customerId: v })}>
                                            <SelectTrigger className="h-9 rounded border-[#C8C6C4] text-sm">
                                                <SelectValue placeholder="Επιλέξτε οργανισμό..." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {allCustomers.map(c => <SelectItem key={c.id} value={c.id}>{c.NAME}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Υπηρεσίες</Label>
                                        <MultiSelectCombobox
                                            options={allServices.map(s => ({ value: s.id, label: s.nameEL }))}
                                            selectedValues={formData.servicesUsed}
                                            onSelect={(values) => setFormData(prev => ({ ...prev, servicesUsed: values }))}
                                            placeholder="Επιλέξτε υπηρεσίες..."
                                            searchPlaceholder="Αναζήτηση..."
                                            className="rounded border border-[#C8C6C4]"
                                        />
                                    </div>
                                </div>
                                {/* Challenge */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Πρόκληση</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Πρόκληση (Ελληνικά)</Label>
                                            <Textarea className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm p-2 min-h-[100px]" placeholder="Περιγράψτε το πρόβλημα που λύθηκε..." value={formData.challengeEL} onChange={e => setFormData({ ...formData, challengeEL: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Πρόκληση (English)</Label>
                                            <Textarea className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm p-2 min-h-[100px]" placeholder="Outline the complex problems solved..." value={formData.challengeEN || ""} onChange={e => setFormData({ ...formData, challengeEN: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="impact" className="animate-in fade-in duration-300 p-4 space-y-4">
                                <div className="bg-white p-4 rounded-lg border border-[#EDEBE9] space-y-3">
                                    <div className="flex justify-between items-center">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Βήματα (Ελληνικά)</p>
                                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] rounded gap-1" onClick={() => setFormData(prev => ({ ...prev, stepsEL: [...prev.stepsEL, ""] }))}>
                                            <Plus className="w-3 h-3" /> Προσθήκη
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.stepsEL.map((s, i) => (
                                            <div key={i} className="flex gap-3 items-center group bg-[#F3F2F1] px-3 py-2 rounded border border-[#EDEBE9]">
                                                <div className="w-6 h-6 rounded bg-[#EFF6FC] border border-[#C7E0F4] text-[#0078D4] flex items-center justify-center text-[10px] font-bold shrink-0">{i + 1}</div>
                                                <Input className="flex-1 border-none bg-transparent shadow-none text-sm h-8 focus-visible:ring-0" placeholder="Στρατηγικό ορόσημο..." value={s} onChange={e => {
                                                    const arr = [...formData.stepsEL]; arr[i] = e.target.value; setFormData({ ...formData, stepsEL: arr })
                                                }} />
                                                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 text-[#A19F9D] hover:text-red-500 h-7 w-7 transition-all" onClick={() => setFormData(prev => ({ ...prev, stepsEL: prev.stepsEL.filter((_, idx) => idx !== i) }))}>
                                                    <X className="w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-[#EDEBE9] space-y-3">
                                    <div className="flex justify-between items-center">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Βήματα (English)</p>
                                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] rounded gap-1" onClick={() => setFormData(prev => ({ ...prev, stepsEN: [...prev.stepsEN, ""] }))}>
                                            <Plus className="w-3 h-3" /> Add Step
                                        </Button>
                                    </div>
                                    <div className="space-y-2">
                                        {formData.stepsEN.map((s, i) => (
                                            <div key={i} className="flex gap-3 items-center group bg-[#F3F2F1] px-3 py-2 rounded border border-[#EDEBE9]">
                                                <div className="w-6 h-6 rounded bg-[#F3F2F1] border border-[#EDEBE9] text-[#605E5C] flex items-center justify-center text-[10px] font-bold shrink-0">{i + 1}</div>
                                                <Input className="flex-1 border-none bg-transparent shadow-none text-sm h-8 focus-visible:ring-0" placeholder="Strategic milestone in English..." value={s} onChange={e => {
                                                    const arr = [...formData.stepsEN]; arr[i] = e.target.value; setFormData({ ...formData, stepsEN: arr })
                                                }} />
                                                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 text-[#A19F9D] hover:text-red-500 h-7 w-7 transition-all" onClick={() => setFormData(prev => ({ ...prev, stepsEN: prev.stepsEN.filter((_, idx) => idx !== i) }))}>
                                                    <X className="w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="metrics" className="animate-in fade-in duration-300 p-4">
                                <div className="grid grid-cols-2 gap-3">
                                    {formData.stats.map((stat, i) => (
                                        <div key={i} className="bg-white px-3 py-3 rounded-lg border border-[#EDEBE9] space-y-3">
                                            <div className="flex justify-between items-center">
                                                <Select value={stat.icon} onValueChange={v => { const arr = [...formData.stats]; arr[i].icon = v; setFormData({ ...formData, stats: arr }) }}>
                                                    <SelectTrigger className="w-[160px] h-8 rounded border-[#C8C6C4] text-[11px] font-semibold">
                                                        <div className="flex items-center gap-2">
                                                            {React.createElement(ICON_MAP[stat.icon] || TrendingUp, { className: "w-3.5 h-3.5" })}
                                                            <SelectValue />
                                                        </div>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {Object.keys(ICON_MAP).map(k => <SelectItem key={k} value={k} className="text-xs font-semibold">{k}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>
                                                <Button variant="ghost" size="icon" className="h-7 w-7 text-[#C8C6C4] hover:text-red-500 hover:bg-red-50" onClick={() => setFormData(prev => ({ ...prev, stats: prev.stats.filter((_, idx) => idx !== i) }))}>
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="space-y-1">
                                                    <Label className="text-[11px] font-semibold text-[#605E5C]">KPI Value</Label>
                                                    <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-bold text-[#0078D4]" value={stat.value} onChange={e => { const arr = [...formData.stats]; arr[i].value = e.target.value; setFormData({ ...formData, stats: arr }) }} placeholder="e.g. +45%" />
                                                </div>
                                                <div className="space-y-1">
                                                    <Label className="text-[11px] font-semibold text-[#605E5C]">Label (EL)</Label>
                                                    <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={stat.textEL} onChange={e => { const arr = [...formData.stats]; arr[i].textEL = e.target.value; setFormData({ ...formData, stats: arr }) }} placeholder="Αύξηση ROI" />
                                                </div>
                                                <div className="space-y-1 col-span-2">
                                                    <Label className="text-[11px] font-semibold text-[#605E5C]">Label (EN)</Label>
                                                    <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={stat.textEN || ""} onChange={e => { const arr = [...formData.stats]; arr[i].textEN = e.target.value; setFormData({ ...formData, stats: arr }) }} placeholder="ROI Growth" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Button variant="outline" className="w-full mt-3 h-9 rounded border-dashed border-[#C8C6C4] hover:bg-[#F3F2F1] text-[12px] font-semibold text-[#605E5C]" onClick={() => setFormData(prev => ({ ...prev, stats: [...prev.stats, { icon: "TrendingUp", value: "", textEL: "", textEN: "" }] }))}>
                                    <Plus className="w-3.5 h-3.5 mr-1.5" /> Add Data Point
                                </Button>
                            </TabsContent>

                            <TabsContent value="media" className="animate-in fade-in duration-300 p-4">
                                <div className="bg-white p-4 rounded-lg border border-[#EDEBE9] text-center space-y-3">
                                    <div className="w-9 h-9 bg-[#EFF6FC] border border-[#C7E0F4] rounded-lg flex items-center justify-center mx-auto">
                                        <ImageIcon className="w-4 h-4 text-[#0078D4]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#201F1E]">Media Library</p>
                                        <p className="text-[11px] text-[#A19F9D]">Attach images or videos and set a featured image.</p>
                                    </div>
                                    <Label className="inline-flex h-8 items-center justify-center rounded bg-[#0078D4] hover:bg-[#106EBE] px-4 text-[12px] font-semibold text-white cursor-pointer active:scale-95 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)]">
                                        Upload Files
                                        <input type="file" className="hidden" multiple accept="image/*,video/*" onChange={e => handleMediaUpload(e.target.files)} />
                                    </Label>
                                    {formData.media.length > 0 && (
                                        <div className="mt-3 grid grid-cols-4 gap-3 text-left">
                                            {formData.media.map((m, i) => (
                                                <div key={i} className={`relative aspect-square rounded-lg overflow-hidden border ${m.featured ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-[#EDEBE9]'}`}>
                                                    {m.type === "VIDEO"
                                                        ? <video src={m.url} className="w-full h-full object-cover" muted />
                                                        : <img src={m.url} alt="" className="w-full h-full object-cover" />}
                                                    <button onClick={() => setFormData(prev => ({ ...prev, media: prev.media.map((x, idx) => ({ ...x, featured: idx === i })) }))} className={`absolute top-1.5 right-1.5 w-6 h-6 rounded flex items-center justify-center shadow transition-all ${m.featured ? 'bg-amber-400 text-white' : 'bg-white/90 text-[#A19F9D] hover:text-amber-400'}`}>
                                                        <Star className="w-3 h-3 fill-current" />
                                                    </button>
                                                    <button onClick={() => setFormData(prev => ({ ...prev, media: prev.media.filter((_, idx) => idx !== i) }))} className="absolute bottom-1.5 right-1.5 w-6 h-6 bg-black/50 rounded flex items-center justify-center text-white hover:bg-red-500 transition-all">
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </TabsContent>
                        </Tabs>

                        {/* Visibility toggle */}
                        <div className="mx-4 mb-4 mt-3 bg-white rounded-lg border border-[#EDEBE9] px-4 py-3 flex items-center justify-between">
                            <div>
                                <p className="text-[11px] font-semibold text-[#201F1E]">Ορατότητα</p>
                                <p className="text-[10px] text-[#A19F9D]">Εμφάνιση σε δημόσιο ιστότοπο.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className={`text-[11px] font-semibold ${formData.published ? 'text-emerald-600' : 'text-[#A19F9D]'}`}>
                                    {formData.published ? 'Δημοσίο' : 'Πρόχειρο'}
                                </span>
                                <Switch checked={formData.published} onCheckedChange={v => setFormData({ ...formData, published: v })} className="data-[state=checked]:bg-emerald-500" />
                            </div>
                        </div>
                    </div>

                    {/* Dialog Footer */}
                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] hover:text-[#201F1E] rounded">
                            Ακύρωση
                        </Button>
                        <Button disabled={isSaving} onClick={handleSave} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] transition-colors active:scale-95">
                            {isSaving ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : "Αποθήκευση"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
