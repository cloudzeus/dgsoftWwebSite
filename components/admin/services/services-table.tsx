"use client"

import * as React from "react"
import {
    Plus,
    MoreHorizontal,
    GripVertical,
    Image as ImageIcon,
    Film,
    Trash2,
    Edit,
    LayoutList,
    Layers,
    Type,
    Link as LinkIcon,
    ChevronDown,
    ChevronUp,
    Upload,
    Check,
    Loader2,
    Sparkles
} from "lucide-react"
import { Label } from "@/components/ui/label"
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent
} from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    useSortable
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
    updateServicesOrder,
    deleteService,
    createServiceFeature,
    deleteServiceFeature,
    createServiceMedia,
    deleteServiceMedia
} from "@/app/lib/actions/service"
import { ServiceForm } from "./service-form"
import { CategoryDialog } from "./category-dialog"

export type ServiceCategoryType = {
    id: string
    nameEL: string
    nameEN: string | null
    descriptionEL: string | null
    descriptionEN: string | null
    icon: string | null
    order: number
    _count?: {
        services: number
    }
}

export type ServiceFeatureType = {
    id: string
    serviceId: string
    nameEL: string
    nameEN: string | null
    descriptionEL: string | null
    descriptionEN: string | null
    order: number
}

export type ServiceMediaType = {
    id: string
    serviceId: string
    url: string
    mediaType: string
    order: number
}

export type ServiceType = {
    id: string
    nameEL: string
    nameEN: string | null
    shortDescriptionEL: string | null
    shortDescriptionEN: string | null
    descriptionEL: string | null
    descriptionEN: string | null
    slug: string
    featureImage: string | null
    brandName: string | null
    brandLogo: string | null
    order: number
    categoryId: string
    category: ServiceCategoryType
    features: ServiceFeatureType[]
    media: ServiceMediaType[]
}

export function ServicesTable({
    initialData,
    categories: initialCategories
}: {
    initialData: ServiceType[],
    categories: ServiceCategoryType[]
}) {
    const [services, setServices] = React.useState(initialData)
    const [categories, setCategories] = React.useState(initialCategories)
    const [expandedRows, setExpandedRows] = React.useState<Set<string>>(new Set())

    // Dialog States
    const [isServiceFormOpen, setIsServiceFormOpen] = React.useState(false)
    const [selectedService, setSelectedService] = React.useState<ServiceType | undefined>()
    const [isCategoryDialogOpen, setIsCategoryDialogOpen] = React.useState(false)

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    )

    const refreshData = async () => {
        const { getServices } = await import("@/app/lib/actions/service")
        const s = await getServices()
        setServices(s as any)
    }

    const toggleRow = (id: string) => {
        const newExpanded = new Set(expandedRows)
        if (newExpanded.has(id)) newExpanded.delete(id)
        else newExpanded.add(id)
        setExpandedRows(newExpanded)
    }

    const openAddService = () => {
        setSelectedService(undefined)
        setIsServiceFormOpen(true)
    }

    const openEditService = (s: ServiceType) => {
        setSelectedService(s)
        setIsServiceFormOpen(true)
    }

    const handleDeleteService = async (id: string) => {
        if (!confirm("Delete this service? This cannot be undone.")) return
        try {
            await deleteService(id)
            setServices(services.filter(s => s.id !== id))
            toast.success("Service deleted")
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event
        if (over && active.id !== over.id) {
            const oldIndex = services.findIndex(s => s.id === active.id)
            const newIndex = services.findIndex(s => s.id === over.id)
            const newOrderedServices = arrayMove(services, oldIndex, newIndex)
            setServices(newOrderedServices)

            try {
                await updateServicesOrder(newOrderedServices.map((s, i) => ({ id: s.id, order: i })))
                toast.success("Order updated")
            } catch (err) {
                toast.error("Failed to update order")
                setServices(services)
            }
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-4">
                    <Badge variant="outline" className="px-3 py-1 border-zinc-300">
                        {services.length} Services
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1 border-zinc-300">
                        {categories.length} Categories
                    </Badge>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => setIsCategoryDialogOpen(true)} className="bg-zinc-600 text-white border-none hover:bg-zinc-700 font-bold">Manage Categories</Button>
                    <Button size="sm" onClick={openAddService} className="bg-zinc-900 text-white hover:bg-zinc-800">
                        <Plus className="w-4 h-4 mr-2" /> Add Service
                    </Button>
                </div>
            </div>

            <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 shadow-sm">
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={services.map(s => s.id)} strategy={verticalListSortingStrategy}>
                        <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
                            {services.map(service => (
                                <ServiceRow
                                    key={service.id}
                                    service={service}
                                    isExpanded={expandedRows.has(service.id)}
                                    onToggle={() => toggleRow(service.id)}
                                    onEdit={() => openEditService(service)}
                                    onDelete={() => handleDeleteService(service.id)}
                                    onRefresh={refreshData}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            </div>

            {/* Service Edit/Create Dialog */}
            <Dialog open={isServiceFormOpen} onOpenChange={setIsServiceFormOpen}>
                <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden bg-white dark:bg-zinc-950 p-0 rounded-3xl border-none">
                    <DialogHeader className="mb-0 bg-zinc-600 p-8">
                        <DialogTitle className="text-2xl font-bold text-white">{selectedService ? 'Edit Service' : 'Create New Service'}</DialogTitle>
                    </DialogHeader>
                    <div className="p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
                        <ServiceForm
                            service={selectedService}
                            categories={categories}
                            onSuccess={() => { setIsServiceFormOpen(false); refreshData(); }}
                            onCancel={() => setIsServiceFormOpen(false)}
                        />
                    </div>
                </DialogContent>
            </Dialog>

            {/* Categories Dialog */}
            <CategoryDialog
                open={isCategoryDialogOpen}
                onOpenChange={setIsCategoryDialogOpen}
                categories={categories}
                onCategoriesChange={(c) => setCategories(c)}
            />
        </div>
    )
}

function ServiceRow({ service, isExpanded, onToggle, onEdit, onDelete, onRefresh }: {
    service: ServiceType,
    isExpanded: boolean,
    onToggle: () => void,
    onEdit: () => void,
    onDelete: () => void,
    onRefresh: () => void
}) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: service.id })
    const style = { transform: CSS.Transform.toString(transform), transition, zIndex: isDragging ? 50 : 0 }

    const [isAddingFeature, setIsAddingFeature] = React.useState(false)
    const [featureForm, setFeatureForm] = React.useState({ nameEL: "", nameEN: "", descriptionEL: "", descriptionEN: "" })
    const [isSavingFeature, setIsSavingFeature] = React.useState(false)
    const [isUploadingMedia, setIsUploadingMedia] = React.useState(false)
    const [isTranslatingFeature, setIsTranslatingFeature] = React.useState<string | null>(null)

    const handleTranslateFeature = async (sourceField: 'nameEL' | 'descriptionEL', targetField: 'nameEN' | 'descriptionEN') => {
        const sourceValue = featureForm[sourceField]
        if (!sourceValue) {
            toast.error("Please enter some text in Greek first")
            return
        }

        setIsTranslatingFeature(targetField)
        try {
            const res = await fetch("/api/admin/translate", {
                method: "POST",
                body: JSON.stringify({ text: sourceValue, targetLang: "en" })
            })
            const data = await res.json()
            if (data.translated) {
                setFeatureForm(prev => ({ ...prev, [targetField]: data.translated }))
                toast.success("Translation complete")
            } else {
                throw new Error(data.error || "Translation failed")
            }
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsTranslatingFeature(null)
        }
    }

    const handleAddFeature = async () => {
        if (!featureForm.nameEL) return
        setIsSavingFeature(true)
        try {
            await createServiceFeature({ ...featureForm, serviceId: service.id, order: service.features.length })
            setFeatureForm({ nameEL: "", nameEN: "", descriptionEL: "", descriptionEN: "" })
            setIsAddingFeature(false)
            onRefresh()
            toast.success("Feature added")
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSavingFeature(false)
        }
    }

    const handleDeleteFeature = async (id: string) => {
        if (!confirm("Delete feature?")) return
        try {
            await deleteServiceFeature(id)
            onRefresh()
            toast.success("Feature deleted")
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    const handleUploadMedia = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        setIsUploadingMedia(true)
        const formData = new FormData()
        formData.append("file", file)
        formData.append("type", "media")

        try {
            const res = await fetch("/api/admin/services/upload", { method: "POST", body: formData })
            const data = await res.json()
            if (data.url) {
                await createServiceMedia({
                    serviceId: service.id,
                    url: data.url,
                    mediaType: file.type.startsWith("video/") ? "VIDEO" : "IMAGE",
                    order: service.media.length
                })
                onRefresh()
                toast.success("Media uploaded")
            }
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsUploadingMedia(false)
        }
    }

    const handleDeleteMedia = async (id: string) => {
        if (!confirm("Delete media?")) return
        try {
            await deleteServiceMedia(id)
            onRefresh()
            toast.success("Media deleted")
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    return (
        <div ref={setNodeRef} style={style} className={`${isDragging ? 'bg-zinc-50 ring-2 ring-zinc-200' : ''} transition-all`}>
            <div className="flex items-center p-4 gap-4 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30">
                <button {...attributes} {...listeners} className="cursor-grab text-zinc-400 hover:text-zinc-600 p-2">
                    <GripVertical className="w-5 h-5" />
                </button>

                <div className="w-16 h-16 rounded-xl bg-zinc-100 dark:bg-zinc-900 flex-shrink-0 flex items-center justify-center overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner">
                    {service.featureImage ? (
                        service.featureImage.endsWith('.mp4') ? (
                            <div className="bg-zinc-800 w-full h-full flex items-center justify-center"><Film className="w-6 h-6 text-white/50" /></div>
                        ) : <img src={service.featureImage} className="w-full h-full object-cover" />
                    ) : <ImageIcon className="w-6 h-6 text-zinc-300" />}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                        <h4 className="font-bold text-zinc-900 dark:text-zinc-100 truncate">{service.nameEL}</h4>
                        <Badge variant="secondary" className="text-[10px] uppercase font-black px-2 py-0.5 bg-zinc-900 text-white dark:bg-zinc-800">
                            {service.category.nameEL}
                        </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-1">
                        <p className="text-sm text-zinc-500 truncate max-w-sm">{service.shortDescriptionEL || service.nameEN || "No short description"}</p>
                        <div className="flex items-center gap-1.5 border-l pl-4 border-zinc-200">
                            <Layers className="w-3 h-3 text-zinc-400" />
                            <span className="text-[11px] font-bold text-zinc-400">{service.features.length}</span>
                            <ImageIcon className="w-3 h-3 text-zinc-400 ml-2" />
                            <span className="text-[11px] font-bold text-zinc-400">{service.media.length}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" onClick={onToggle} className="h-10 w-10 p-0 rounded-full hover:bg-zinc-100 transition-colors">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="sm" className="bg-zinc-900 text-white hover:bg-black font-bold h-9 px-4 rounded-xl shadow-lg border-none">
                                Actions <MoreHorizontal className="w-4 h-4 ml-2" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl shadow-2xl border-zinc-200 dark:border-zinc-800">
                            <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 font-medium" onClick={onEdit}>
                                <Edit className="w-4 h-4 mr-3" /> Edit Details
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="my-1.5" />
                            <DropdownMenuItem className="cursor-pointer rounded-lg py-2.5 font-medium text-red-600 focus:text-red-600 focus:bg-red-50" onClick={onDelete}>
                                <Trash2 className="w-4 h-4 mr-3" /> Delete Service
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {isExpanded && (
                <div className="px-14 pb-8 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-900/10">
                    <Tabs defaultValue="details" className="mt-6">
                        <TabsList className="bg-zinc-200/50 dark:bg-zinc-800/50 p-1 h-12 rounded-2xl border border-zinc-100 dark:border-zinc-900">
                            <TabsTrigger value="details" className="text-xs font-bold px-6 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-950 data-[state=active]:shadow-lg">DETAILS</TabsTrigger>
                            <TabsTrigger value="features" className="text-xs font-bold px-6 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-950 data-[state=active]:shadow-lg">FEATURES ({service.features.length})</TabsTrigger>
                            <TabsTrigger value="media" className="text-xs font-bold px-6 rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-950 data-[state=active]:shadow-lg">MEDIA GALLERY ({service.media.length})</TabsTrigger>
                        </TabsList>

                        <TabsContent value="details" className="mt-6 animate-in fade-in-50 slide-in-from-top-1 duration-300">
                            <div className="grid grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3">Service Profile (EL)</h5>
                                        <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
                                            <div>
                                                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Overview</label>
                                                <p className="text-sm mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">{service.descriptionEL || "Click edit to add content..."}</p>
                                            </div>
                                            {service.brandName && (
                                                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900">
                                                    <label className="text-[10px] font-black text-zinc-400 uppercase mb-3 block">Partner Brand</label>
                                                    <div className="flex items-center gap-4 bg-zinc-50 dark:bg-zinc-900/50 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800">
                                                        {service.brandLogo && <img src={service.brandLogo} className="w-12 h-12 object-contain" />}
                                                        <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{service.brandName}</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-3">Global Profile (EN)</h5>
                                        <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-5">
                                            <div>
                                                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">English Label</label>
                                                <p className="text-base font-bold mt-1 text-zinc-900 dark:text-zinc-100">{service.nameEN || "Translation Pending"}</p>
                                            </div>
                                            <div>
                                                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">English Description</label>
                                                <p className="text-sm mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400 italic">{service.descriptionEN || "Translation Pending..."}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="features" className="mt-6">
                            <div className="grid grid-cols-2 gap-4">
                                {service.features.map(f => (
                                    <div key={f.id} className="p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm relative group hover:border-zinc-400 transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                                                    <h6 className="text-sm font-bold">{f.nameEL}</h6>
                                                </div>
                                                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{f.descriptionEL || "No description provided."}</p>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-all flex gap-1">
                                                <Button variant="ghost" size="icon" onClick={() => handleDeleteFeature(f.id)} className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg">
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {isAddingFeature ? (
                                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-900 rounded-2xl space-y-4 shadow-xl">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <Label className="text-[10px] font-black uppercase text-zinc-400">Greek Content</Label>
                                                <Input
                                                    placeholder="Feature Name (Greek)"
                                                    value={featureForm.nameEL}
                                                    onChange={e => setFeatureForm({ ...featureForm, nameEL: e.target.value })}
                                                    className="bg-white text-sm font-bold h-10"
                                                />
                                                <Textarea
                                                    placeholder="Short Description..."
                                                    value={featureForm.descriptionEL}
                                                    onChange={e => setFeatureForm({ ...featureForm, descriptionEL: e.target.value })}
                                                    className="bg-white text-sm h-32"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <Label className="text-[10px] font-black uppercase text-zinc-400">English Translation</Label>
                                                    <div className="flex gap-2">
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-6 px-2 text-[10px] font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                                            onClick={() => handleTranslateFeature("nameEL", "nameEN")}
                                                            disabled={!!isTranslatingFeature}
                                                        >
                                                            {isTranslatingFeature === "nameEN" ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <Sparkles className="w-3 h-3 mr-1" />}
                                                            Name
                                                        </Button>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="h-6 px-2 text-[10px] font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                                            onClick={() => handleTranslateFeature("descriptionEL", "descriptionEN")}
                                                            disabled={!!isTranslatingFeature}
                                                        >
                                                            {isTranslatingFeature === "descriptionEN" ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <Sparkles className="w-3 h-3 mr-1" />}
                                                            Desc
                                                        </Button>
                                                    </div>
                                                </div>
                                                <Input
                                                    placeholder="Feature Name (English)"
                                                    value={featureForm.nameEN}
                                                    onChange={e => setFeatureForm({ ...featureForm, nameEN: e.target.value })}
                                                    className="bg-white text-sm font-bold h-10"
                                                />
                                                <Textarea
                                                    placeholder="English description..."
                                                    value={featureForm.descriptionEN}
                                                    onChange={e => setFeatureForm({ ...featureForm, descriptionEN: e.target.value })}
                                                    className="bg-white text-sm h-32 italic"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="sm" onClick={handleAddFeature} disabled={isSavingFeature} className="bg-zinc-900 text-white flex-1">
                                                {isSavingFeature ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4 mr-2" />} Save
                                            </Button>
                                            <Button size="sm" variant="ghost" onClick={() => setIsAddingFeature(false)}>Cancel</Button>
                                        </div>
                                    </div>
                                ) : (
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsAddingFeature(true)}
                                        className="border-dashed border-2 h-32 flex flex-col gap-3 rounded-2xl hover:bg-zinc-50 hover:border-zinc-400 group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                            <Plus className="w-5 h-5" />
                                        </div>
                                        <div className="text-center">
                                            <span className="text-xs font-black uppercase tracking-widest block">Add Service Feature</span>
                                            <span className="text-[10px] text-zinc-400">Highlight a unique selling point</span>
                                        </div>
                                    </Button>
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="media" className="mt-6">
                            <div className="grid grid-cols-4 gap-4">
                                {service.media.map(m => (
                                    <div key={m.id} className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 shadow-sm group">
                                        {m.mediaType === 'VIDEO' ? (
                                            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                                                <video src={m.url} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/20"><Film className="w-8 h-8 text-white/50" /></div>
                                            </div>
                                        ) : (
                                            <img src={m.url} className="w-full h-full object-cover" />
                                        )}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <Button variant="destructive" size="sm" onClick={() => handleDeleteMedia(m.id)} className="rounded-xl font-bold h-9 bg-red-600 hover:bg-red-700">
                                                <Trash2 className="w-4 h-4 mr-2" /> Remove
                                            </Button>
                                        </div>
                                    </div>
                                ))}

                                <label className={`border-dashed border-2 aspect-video flex flex-col items-center justify-center gap-3 rounded-2xl hover:bg-zinc-50 hover:border-zinc-400 cursor-pointer transition-all group ${isUploadingMedia ? 'opacity-50 pointer-events-none' : ''}`}>
                                    <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
                                        {isUploadingMedia ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                                    </div>
                                    <div className="text-center">
                                        <span className="text-xs font-black uppercase tracking-widest block">Upload Media</span>
                                        <span className="text-[10px] text-zinc-400">Image or Video</span>
                                    </div>
                                    <input type="file" className="hidden" onChange={handleUploadMedia} accept="image/*,video/*" />
                                </label>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            )}
        </div>
    )
}
