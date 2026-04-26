"use client"

import * as React from "react"
import {
    Plus,
    Image as ImageIcon,
    Film,
    Trash2,
    Edit,
    Layers,
    ChevronDown,
    Upload,
    Loader2,
    GripVertical,
    Zap,
    ExternalLink,
    RefreshCcw,
} from "lucide-react"
import { ColumnDef } from "@tanstack/react-table"
import { Label } from "@/components/ui/label"
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
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
    updateServicesOrder,
    deleteService,
    createServiceFeature,
    deleteServiceFeature,
    createServiceMedia,
    deleteServiceMedia,
    getServices
} from "@/app/lib/actions/service"
import { ServiceForm } from "./service-form"
import { CategoryDialog } from "./category-dialog"
import { GenericDataTable } from "../shared/generic-data-table"

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
    featuresEL: any
    featuresEN: any
    benefitsEL?: string[] | null
    benefitsEN?: string[] | null
    category: ServiceCategoryType
    features: ServiceFeatureType[]
    media: ServiceMediaType[]
}

export function ServicesTable({ initialData, categories: initialCategories }: {
    initialData: ServiceType[]
    categories: ServiceCategoryType[]
}) {
    const [services, setServices] = React.useState(initialData)
    const [categories, setCategories] = React.useState(initialCategories)
    const [isServiceFormOpen, setIsServiceFormOpen] = React.useState(false)
    const [selectedService, setSelectedService] = React.useState<ServiceType | undefined>()
    const [isCategoryDialogOpen, setIsCategoryDialogOpen] = React.useState(false)

    const refreshData = async () => {
        const s = await getServices()
        setServices(s as any)
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
        if (!confirm("Να διαγραφεί αυτή η υπηρεσία;")) return
        try {
            await deleteService(id)
            setServices(services.filter(s => s.id !== id))
            toast.success("Η υπηρεσία διαγράφηκε")
        } catch (err: any) { toast.error(err.message) }
    }

    const handleReorder = async (newData: ServiceType[]) => {
        setServices(newData)
        try {
            await updateServicesOrder(newData.map((s, i) => ({ id: s.id, order: i })))
            toast.success("Η σειρά ενημερώθηκε")
        } catch {
            toast.error("Αποτυχία ενημέρωσης σειράς")
            refreshData()
        }
    }

    const columns: ColumnDef<ServiceType>[] = [
        {
            id: "drag",
            header: "",
            cell: () => <GripVertical className="h-4 w-4 text-[#C8C6C4] opacity-0 group-hover:opacity-100 transition-opacity" />,
            size: 40
        },
        {
            id: "hero",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Εικόνα</span>,
            cell: ({ row }) => (
                <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#EDEBE9] bg-[#F3F2F1] shrink-0 flex items-center justify-center">
                    {row.original.featureImage ? (
                        row.original.featureImage.endsWith('.mp4')
                            ? <Film className="w-4 h-4 text-[#0078D4]" />
                            : <img src={row.original.featureImage} className="w-full h-full object-cover" />
                    ) : <ImageIcon className="w-4 h-4 text-[#C8C6C4]" />}
                </div>
            ),
            size: 60
        },
        {
            accessorKey: "nameEL",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Υπηρεσία</span>,
            cell: ({ row }) => (
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#201F1E]">{row.original.nameEL}</span>
                    <div className="flex items-center gap-2 mt-0.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]">
                            {row.original.category.nameEL}
                        </span>
                        {row.original.brandName && (
                            <span className="text-[11px] text-[#A19F9D] italic">{row.original.brandName}</span>
                        )}
                    </div>
                </div>
            )
        },
        {
            id: "payload",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Περιεχόμενο</span>,
            cell: ({ row }) => (
                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-[#201F1E]">{row.original.features?.length || 0}</span>
                        <span className="text-[10px] font-semibold uppercase text-[#A19F9D]">Χαρακτηριστικά</span>
                    </div>
                    <div className="w-px h-5 bg-[#EDEBE9]" />
                    <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-[#201F1E]">{row.original.media?.length || 0}</span>
                        <span className="text-[10px] font-semibold uppercase text-[#A19F9D]">Αρχεία</span>
                    </div>
                </div>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-8 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] hover:border-[#A19F9D] rounded gap-1">
                            Ενέργειες <ChevronDown className="w-3.5 h-3.5 text-[#A19F9D]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem onClick={() => openEditService(row.original)} className="text-sm">
                            <Edit className="w-3.5 h-3.5 mr-2 text-[#0078D4]" /> Επεξεργασία
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => window.open(`/services/${row.original.slug}`, '_blank')} className="text-sm">
                            <ExternalLink className="w-3.5 h-3.5 mr-2" /> Προβολή
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleDeleteService(row.original.id)} className="text-red-500 text-sm focus:bg-red-50 focus:text-red-600">
                            <Trash2 className="w-3.5 h-3.5 mr-2" /> Διαγραφή
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    return (
        <div className="space-y-4">
            {/* Stats bar */}
            <div className="flex justify-between items-center bg-white px-5 py-3 rounded-lg border border-[#EDEBE9] shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#201F1E]">{services.length}</span>
                        <span className="text-[10px] font-semibold uppercase text-[#A19F9D] tracking-wide">Ενεργές Υπηρεσίες</span>
                    </div>
                    <div className="w-px h-8 bg-[#EDEBE9]" />
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#201F1E]">{categories.length}</span>
                        <span className="text-[10px] font-semibold uppercase text-[#A19F9D] tracking-wide">Κατηγορίες</span>
                    </div>
                </div>
                <Button variant="outline" onClick={() => setIsCategoryDialogOpen(true)} className="h-8 px-4 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] hover:border-[#A19F9D] rounded">
                    Διαχείριση Κατηγοριών
                </Button>
            </div>

            <GenericDataTable
                columns={columns} data={services} searchPlaceholder="Αναζήτηση υπηρεσίας..." searchColumn="nameEL"
                onAddClick={openAddService} addButtonLabel="Νέα Υπηρεσία"
                isSortable={true} onReorder={handleReorder}
                renderExpandedRow={(service) => <ServiceExpandedContent service={service} onRefresh={refreshData} />}
            />

            {/* Service Form Dialog */}
            <Dialog open={isServiceFormOpen} onOpenChange={setIsServiceFormOpen}>
                <DialogContent className="max-w-6xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] p-1 flex items-center justify-center shrink-0">
                                <Layers className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                    {selectedService ? 'Επεξεργασία Υπηρεσίας' : 'Νέα Υπηρεσία'}
                                </DialogTitle>
                                <DialogDescription className="text-[11px] text-[#A19F9D]">
                                    Ορισμός υπηρεσιών και χαρτογράφηση χαρακτηριστικών.
                                </DialogDescription>
                            </div>
                        </div>
                    </DialogHeader>
                    <div className="bg-[#F3F2F1] max-h-[75vh] overflow-y-auto p-4">
                        <ServiceForm
                            service={selectedService}
                            categories={categories}
                            onSuccess={() => { setIsServiceFormOpen(false); refreshData() }}
                            onCancel={() => setIsServiceFormOpen(false)}
                        />
                    </div>
                </DialogContent>
            </Dialog>

            <CategoryDialog
                open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen}
                categories={categories} onCategoriesChange={setCategories}
            />
        </div>
    )
}

function ServiceExpandedContent({ service, onRefresh }: { service: ServiceType, onRefresh: () => void }) {
    const [isAddingFeature, setIsAddingFeature] = React.useState(false)
    const [featureForm, setFeatureForm] = React.useState({ nameEL: "", nameEN: "", descriptionEL: "", descriptionEN: "" })
    const [isSavingFeature, setIsSavingFeature] = React.useState(false)
    const [isUploadingMedia, setIsUploadingMedia] = React.useState(false)

    const handleAddFeature = async () => {
        if (!featureForm.nameEL) return
        setIsSavingFeature(true)
        try {
            await createServiceFeature({ ...featureForm, serviceId: service.id, order: service.features.length })
            setFeatureForm({ nameEL: "", nameEN: "", descriptionEL: "", descriptionEN: "" })
            setIsAddingFeature(false)
            onRefresh()
            toast.success("Το χαρακτηριστικό αποθηκεύτηκε")
        } catch (err: any) { toast.error(err.message) }
        finally { setIsSavingFeature(false) }
    }

    const handleUploadMedia = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; if (!file) return
        setIsUploadingMedia(true)
        const tid = toast.loading("Μεταφόρτωση αρχείου...")
        const formData = new FormData(); formData.append("file", file); formData.append("type", "media")
        try {
            const res = await fetch("/api/admin/services/upload", { method: "POST", body: formData })
            const data = await res.json()
            if (data.url) {
                await createServiceMedia({ serviceId: service.id, url: data.url, mediaType: file.type.startsWith("video/") ? "VIDEO" : "IMAGE", order: service.media.length })
                onRefresh()
                toast.success("Το αρχείο προστέθηκε", { id: tid })
            }
        } catch (err: any) { toast.error(err.message, { id: tid }) }
        finally { setIsUploadingMedia(false) }
    }

    return (
        <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
            <Tabs defaultValue="details">
                <div className="px-4 pt-3">
                    <TabsList className="mb-0 bg-white border border-[#EDEBE9] p-0.5 h-8 rounded gap-0.5 w-fit">
                        <TabsTrigger value="details" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7 transition-all">
                            Λεπτομέρειες
                        </TabsTrigger>
                        <TabsTrigger value="features" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7 transition-all">
                            Χαρακτηριστικά ({service.features.length})
                        </TabsTrigger>
                        <TabsTrigger value="media" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold uppercase tracking-wide px-4 rounded h-7 transition-all">
                            Αρχεία ({service.media.length})
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="details" className="animate-in fade-in duration-300 p-4 space-y-3">
                    <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Κύρια Περιγραφή</p>
                        <p className="text-sm leading-relaxed text-[#605E5C] italic">
                            &quot;{service.descriptionEL || "Η περιγραφή δεν έχει συμπληρωθεί."}&quot;
                        </p>
                        {service.brandName && (
                            <div className="pt-3 border-t border-[#EDEBE9] flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {service.brandLogo && (
                                        <div className="w-9 h-9 p-1.5 bg-[#F3F2F1] rounded-lg border border-[#EDEBE9] flex items-center justify-center">
                                            <img src={service.brandLogo} className="w-full h-full object-contain" />
                                        </div>
                                    )}
                                    <span className="font-bold text-sm text-[#201F1E]">{service.brandName}</span>
                                </div>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]">
                                    Πιστοποιημένος Συνεργάτης
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Αγγλικά (EN)</p>
                        <p className="text-sm font-bold text-[#201F1E]">{service.nameEN || "Απαιτείται μετάφραση"}</p>
                        <p className="text-sm leading-relaxed text-[#A19F9D]">{service.descriptionEN || "Η αγγλική περιγραφή εκκρεμεί."}</p>
                    </div>
                </TabsContent>

                <TabsContent value="features" className="animate-in fade-in duration-300 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map(f => (
                            <div key={f.id} className="px-3 py-2.5 bg-white border border-[#EDEBE9] rounded-lg relative group hover:border-[#C7E0F4] transition-all">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                                    <p className="text-sm font-semibold text-[#201F1E]">{f.nameEL}</p>
                                </div>
                                <p className="text-[11px] text-[#A19F9D] leading-relaxed">{f.descriptionEL}</p>
                                <Button
                                    variant="ghost" size="icon"
                                    onClick={() => deleteServiceFeature(f.id).then(() => onRefresh())}
                                    className="absolute top-2 right-2 h-7 w-7 text-[#C8C6C4] hover:text-red-500 hover:bg-red-50 rounded opacity-0 group-hover:opacity-100 transition-all"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </Button>
                            </div>
                        ))}
                        <Button
                            variant="outline"
                            onClick={() => setIsAddingFeature(true)}
                            className="border-dashed border-[#C8C6C4] h-auto min-h-[80px] rounded-lg bg-white hover:bg-[#F3F2F1] text-[#A19F9D] flex flex-col gap-2 transition-all"
                        >
                            <div className="w-8 h-8 bg-[#F3F2F1] border border-[#EDEBE9] rounded flex items-center justify-center">
                                <Plus className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-semibold uppercase tracking-wide">Προσθήκη Χαρακτηριστικού</span>
                        </Button>
                    </div>

                    {/* Add Feature Dialog */}
                    <Dialog open={isAddingFeature} onOpenChange={setIsAddingFeature}>
                        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
                            <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] p-1 flex items-center justify-center shrink-0">
                                        <Zap className="w-4 h-4 text-[#0078D4]" />
                                    </div>
                                    <div>
                                        <DialogTitle className="text-sm font-bold text-[#201F1E]">Νέο Χαρακτηριστικό</DialogTitle>
                                        <DialogDescription className="text-[11px] text-[#A19F9D]">
                                            Προσθήκη χαρακτηριστικού στην υπηρεσία.
                                        </DialogDescription>
                                    </div>
                                </div>
                            </DialogHeader>
                            <div className="bg-[#F3F2F1] max-h-[75vh] overflow-y-auto px-4 py-4 space-y-3">
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Ονομασίες</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Όνομα (GR)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="e.g. Συγχρονισμός σε πραγματικό χρόνο" value={featureForm.nameEL} onChange={e => setFeatureForm({ ...featureForm, nameEL: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Όνομα (EN)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" placeholder="e.g. Real-time Sync" value={featureForm.nameEN} onChange={e => setFeatureForm({ ...featureForm, nameEN: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Περιγραφές</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Περιγραφή (GR)</Label>
                                            <Textarea rows={3} className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm p-2" placeholder="Describe the utility..." value={featureForm.descriptionEL} onChange={e => setFeatureForm({ ...featureForm, descriptionEL: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Περιγραφή (EN)</Label>
                                            <Textarea rows={3} className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm p-2" placeholder="Localized narrative..." value={featureForm.descriptionEN} onChange={e => setFeatureForm({ ...featureForm, descriptionEN: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                                <Button variant="ghost" onClick={() => setIsAddingFeature(false)} className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] hover:text-[#201F1E] rounded">
                                    Ακύρωση
                                </Button>
                                <Button onClick={handleAddFeature} disabled={isSavingFeature} className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95">
                                    {isSavingFeature ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : "Αποθήκευση"}
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </TabsContent>

                <TabsContent value="media" className="animate-in fade-in duration-300 p-4">
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Αρχεία Προϊόντος</p>
                        <Label className={`cursor-pointer h-8 px-4 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded inline-flex items-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] ${isUploadingMedia ? 'opacity-50 pointer-events-none' : ''}`}>
                            {isUploadingMedia ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                            Μεταφόρτωση
                            <input type="file" className="hidden" onChange={handleUploadMedia} accept="image/*,video/*" />
                        </Label>
                    </div>
                    {service.media.length === 0 ? (
                        <div className="py-8 text-center rounded-lg border border-dashed border-[#EDEBE9] bg-white">
                            <ImageIcon className="w-8 h-8 mx-auto text-[#C8C6C4] mb-2" />
                            <p className="text-sm font-medium text-[#A19F9D]">Δεν υπάρχουν αρχεία. Μεταφορτώστε εικόνες ή βίντεο.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {service.media.map(m => (
                                <div key={m.id} className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#EDEBE9] group hover:border-[#C7E0F4] transition-all">
                                    {m.mediaType === 'VIDEO'
                                        ? <video src={m.url} className="w-full h-full object-cover" />
                                        : <img src={m.url} className="w-full h-full object-cover" />}
                                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-end">
                                        <Button variant="destructive" size="icon" className="h-7 w-7 rounded" onClick={() => deleteServiceMedia(m.id).then(() => onRefresh())}>
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </TabsContent>
            </Tabs>
        </div>
    )
}
