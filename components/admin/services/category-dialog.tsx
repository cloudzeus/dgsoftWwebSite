"use client"

import * as React from "react"
import {
    Plus,
    Trash2,
    Edit,
    Image as ImageIcon,
    Check,
    X,
    Loader2,
    GripVertical,
    Upload,
    Sparkles,
    Layers,
    RefreshCcw,
} from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
    createServiceCategory,
    updateServiceCategory,
    deleteServiceCategory
} from "@/app/lib/actions/service"
import { ServiceCategoryType } from "./services-table"

interface CategoryDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    categories: ServiceCategoryType[]
    onCategoriesChange: (categories: ServiceCategoryType[]) => void
}

export function CategoryDialog({ open, onOpenChange, categories, onCategoriesChange }: CategoryDialogProps) {
    const [editingCategory, setEditingCategory] = React.useState<ServiceCategoryType | null>(null)
    const [isFormOpen, setIsFormOpen] = React.useState(false)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isUploading, setIsUploading] = React.useState(false)
    const [isTranslating, setIsTranslating] = React.useState<string | null>(null)

    const [formData, setFormData] = React.useState({
        nameEL: "",
        nameEN: "",
        descriptionEL: "",
        descriptionEN: "",
        icon: "",
        order: 0
    })

    const resetForm = () => {
        setFormData({ nameEL: "", nameEN: "", descriptionEL: "", descriptionEN: "", icon: "", order: categories.length })
        setEditingCategory(null)
    }

    const handleEdit = (cat: ServiceCategoryType) => {
        setEditingCategory(cat)
        setFormData({
            nameEL: cat.nameEL,
            nameEN: cat.nameEN || "",
            descriptionEL: cat.descriptionEL || "",
            descriptionEN: cat.descriptionEN || "",
            icon: cat.icon || "",
            order: cat.order
        })
        setIsFormOpen(true)
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure? This will delete the category and all associated services.")) return
        try {
            await deleteServiceCategory(id)
            onCategoriesChange(categories.filter(c => c.id !== id))
            toast.success("Category deleted")
        } catch (err: any) {
            toast.error(err.message)
        }
    }

    const handleIconUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        setIsUploading(true)
        const uploadData = new FormData()
        uploadData.append("file", file)
        uploadData.append("type", "icon")
        try {
            const res = await fetch("/api/admin/services/upload", { method: "POST", body: uploadData })
            const data = await res.json()
            if (data.url) {
                setFormData(prev => ({ ...prev, icon: data.url }))
                toast.success("Icon uploaded")
            }
        } catch (err: any) {
            toast.error("Upload failed")
        } finally {
            setIsUploading(false)
        }
    }

    const handleTranslate = async (sourceField: keyof typeof formData, targetField: keyof typeof formData) => {
        const sourceValue = formData[sourceField]
        if (!sourceValue || typeof sourceValue !== 'string') {
            toast.error("Please enter some text in Greek first")
            return
        }
        setIsTranslating(String(targetField))
        try {
            const res = await fetch("/api/admin/translate", {
                method: "POST",
                body: JSON.stringify({ text: sourceValue, targetLang: "en" })
            })
            const data = await res.json()
            if (data.translated) {
                setFormData(prev => ({ ...prev, [targetField]: data.translated }))
                toast.success("Translation complete")
            } else {
                throw new Error(data.error || "Translation failed")
            }
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsTranslating(null)
        }
    }

    const handleSave = async () => {
        if (!formData.nameEL) return toast.error("Greek name is required")
        setIsSaving(true)
        try {
            if (editingCategory) {
                const updated = await updateServiceCategory(editingCategory.id, formData)
                onCategoriesChange(categories.map(c => c.id === updated.id ? { ...c, ...updated } : c))
                toast.success("Category updated")
            } else {
                const created = await createServiceCategory(formData)
                onCategoriesChange([...categories, created as any])
                toast.success("Category created")
            }
            setIsFormOpen(false)
            resetForm()
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
                {/* Dialog Header */}
                <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] p-1 flex items-center justify-center shrink-0">
                                <Layers className="w-4 h-4 text-[#0078D4]" />
                            </div>
                            <div>
                                <DialogTitle className="text-sm font-bold text-[#201F1E]">Service Categories</DialogTitle>
                                <DialogDescription className="text-[11px] text-[#A19F9D]">
                                    {isFormOpen
                                        ? editingCategory ? `Editing: ${editingCategory.nameEL}` : "Create a new category"
                                        : `${categories.length} ${categories.length === 1 ? 'category' : 'categories'}`}
                                </DialogDescription>
                            </div>
                        </div>
                        {!isFormOpen && (
                            <Button
                                size="sm"
                                onClick={() => { resetForm(); setIsFormOpen(true) }}
                                className="h-8 px-4 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95"
                            >
                                <Plus className="w-3 h-3 mr-1.5" /> New Category
                            </Button>
                        )}
                    </div>
                </DialogHeader>

                {isFormOpen ? (
                    <>
                        {/* Form body */}
                        <div className="bg-[#F3F2F1] max-h-[75vh] overflow-y-auto px-5 py-4 space-y-3">
                            {/* Names */}
                            <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-3">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Names</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">
                                            Name (Greek) <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            value={formData.nameEL}
                                            onChange={e => setFormData({ ...formData, nameEL: e.target.value })}
                                            placeholder="π.χ. Λύσεις ERP"
                                            className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Name (English)</Label>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 px-2 text-[11px] text-[#0078D4] hover:bg-[#EFF6FC]"
                                                onClick={() => handleTranslate("nameEL", "nameEN")}
                                                disabled={!!isTranslating}
                                            >
                                                {isTranslating === "nameEN" ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <Sparkles className="w-3 h-3 mr-1" />}
                                                Translate
                                            </Button>
                                        </div>
                                        <Input
                                            value={formData.nameEN}
                                            onChange={e => setFormData({ ...formData, nameEN: e.target.value })}
                                            placeholder="e.g. ERP Solutions"
                                            className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Descriptions */}
                            <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-3">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Descriptions</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Description (Greek)</Label>
                                        <Textarea
                                            value={formData.descriptionEL}
                                            onChange={e => setFormData({ ...formData, descriptionEL: e.target.value })}
                                            placeholder="Περιγράψτε την κατηγορία..."
                                            className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm h-28 resize-none"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Description (English)</Label>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                className="h-6 px-2 text-[11px] text-[#0078D4] hover:bg-[#EFF6FC]"
                                                onClick={() => handleTranslate("descriptionEL", "descriptionEN")}
                                                disabled={!!isTranslating}
                                            >
                                                {isTranslating === "descriptionEN" ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <Sparkles className="w-3 h-3 mr-1" />}
                                                Translate
                                            </Button>
                                        </div>
                                        <Textarea
                                            value={formData.descriptionEN}
                                            onChange={e => setFormData({ ...formData, descriptionEN: e.target.value })}
                                            placeholder="Describe the category..."
                                            className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm h-28 resize-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Icon */}
                            <div className="bg-white rounded-lg border border-[#EDEBE9] p-4 space-y-3">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Category Icon</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-lg border border-[#EDEBE9] flex items-center justify-center bg-[#F3F2F1] overflow-hidden relative group shrink-0">
                                        {formData.icon ? (
                                            <>
                                                <img src={formData.icon} className="w-full h-full object-contain p-2" alt="" />
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, icon: "" })}
                                                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity rounded-lg"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </>
                                        ) : (
                                            <label className="relative flex flex-col items-center justify-center w-full h-full cursor-pointer text-[#A19F9D] hover:text-[#605E5C] transition-colors">
                                                {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                                                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleIconUpload} accept="image/*" />
                                            </label>
                                        )}
                                    </div>
                                    <p className="text-[11px] text-[#A19F9D] leading-relaxed">
                                        Upload an SVG or PNG icon. Icons should be clear and minimalist to represent the category across the site.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Form footer */}
                        <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => { setIsFormOpen(false); resetForm() }}
                                className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] hover:text-[#201F1E] rounded"
                            >
                                Cancel
                            </Button>
                            <Button
                                size="sm"
                                onClick={handleSave}
                                disabled={isSaving}
                                className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95"
                            >
                                {isSaving ? <RefreshCcw className="w-3 h-3 animate-spin mr-2" /> : <Check className="w-3 h-3 mr-2" />}
                                Save Category
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* List body */}
                        <div className="bg-[#F3F2F1] px-5 py-4 max-h-[75vh] overflow-y-auto">
                            {categories.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-10 text-center bg-white rounded-lg border border-[#EDEBE9]">
                                    <div className="w-9 h-9 rounded-lg bg-[#F3F2F1] border border-[#EDEBE9] flex items-center justify-center mb-3">
                                        <Layers className="w-4 h-4 text-[#A19F9D]" />
                                    </div>
                                    <p className="text-sm font-semibold text-[#201F1E]">No categories yet</p>
                                    <p className="text-[11px] text-[#A19F9D] mt-1">Click &quot;New Category&quot; to get started.</p>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {categories.map(cat => (
                                        <div
                                            key={cat.id}
                                            className="flex items-center justify-between p-3 rounded-lg border border-[#EDEBE9] bg-white hover:border-[#C7E0F4] transition-colors group"
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <GripVertical className="w-4 h-4 text-[#A19F9D] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 cursor-grab" />
                                                <div className="w-9 h-9 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] flex items-center justify-center overflow-hidden shrink-0">
                                                    {cat.icon
                                                        ? <img src={cat.icon} className="w-full h-full object-contain p-1.5" alt="" />
                                                        : <ImageIcon className="w-4 h-4 text-[#A19F9D]" />}
                                                </div>
                                                <div className="min-w-0">
                                                    <span className="text-sm font-semibold text-[#201F1E] block">{cat.nameEL}</span>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]">
                                                            {cat._count?.services || 0} services
                                                        </span>
                                                        {cat.nameEN && (
                                                            <span className="text-[11px] text-[#A19F9D] italic truncate">{cat.nameEN}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 shrink-0">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleEdit(cat)}
                                                    className="h-8 w-8 text-[#605E5C] hover:text-[#201F1E] hover:bg-[#EDEBE9] rounded"
                                                >
                                                    <Edit className="w-3.5 h-3.5" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleDelete(cat.id)}
                                                    className="h-8 w-8 text-[#605E5C] hover:text-red-500 hover:bg-red-50 rounded"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* List footer */}
                        <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end">
                            <Button
                                variant="ghost"
                                onClick={() => onOpenChange(false)}
                                className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] hover:text-[#201F1E] rounded"
                            >
                                Close
                            </Button>
                        </div>
                    </>
                )}
            </DialogContent>
        </Dialog>
    )
}
