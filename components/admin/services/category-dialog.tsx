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
    Languages,
    Sparkles,
    Layers
} from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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
            <DialogContent className="max-w-2xl bg-white dark:bg-zinc-950 p-0 overflow-hidden rounded-2xl border-zinc-200 dark:border-zinc-800">
                <DialogHeader className="p-0 border-none bg-zinc-900">
                    <div className="flex justify-between items-center p-6">
                        <DialogTitle className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                            <Layers className="w-5 h-5" /> Service Categories
                        </DialogTitle>
                        {!isFormOpen && (
                            <Button size="sm" onClick={() => { resetForm(); setIsFormOpen(true); }} className="bg-zinc-600 text-white hover:bg-zinc-700 font-bold border-none shadow-lg">
                                <Plus className="w-4 h-4 mr-2" /> New Category
                            </Button>
                        )}
                    </div>
                </DialogHeader>

                <div className="p-0">
                    {isFormOpen ? (
                        <div className="p-6 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="grid grid-cols-2 gap-6 p-6 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                <div className="space-y-2">
                                    <Label className="text-xs font-bold uppercase text-zinc-500">Name (Greek) *</Label>
                                    <Input
                                        value={formData.nameEL}
                                        onChange={e => setFormData({ ...formData, nameEL: e.target.value })}
                                        placeholder="π.χ. Λύσεις ERP"
                                        className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-xs font-bold uppercase text-zinc-500">Name (English)</Label>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="h-6 px-2 text-[10px] font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50"
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
                                        className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 p-6 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                <div className="space-y-2">
                                    <Label className="text-xs font-bold uppercase text-zinc-500">Description (Greek)</Label>
                                    <Textarea
                                        value={formData.descriptionEL}
                                        onChange={e => setFormData({ ...formData, descriptionEL: e.target.value })}
                                        placeholder="Περιγράψτε την κατηγορία..."
                                        className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 h-32"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-xs font-bold uppercase text-zinc-500">Description (English)</Label>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="h-6 px-2 text-[10px] font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50"
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
                                        className="bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 h-32 italic"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-6 p-6 bg-zinc-900 rounded-2xl border border-zinc-800 text-white">
                                <div className="space-y-2 flex-1">
                                    <Label className="text-xs font-bold uppercase text-zinc-400">Category Icon</Label>
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-xl border-2 border-dashed border-zinc-700 flex items-center justify-center bg-zinc-800 overflow-hidden relative group">
                                            {formData.icon ? (
                                                <>
                                                    <img src={formData.icon} className="w-full h-full object-contain p-2" />
                                                    <button onClick={() => setFormData({ ...formData, icon: "" })} className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </>
                                            ) : (
                                                <div className="relative">
                                                    {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5 text-zinc-400" />}
                                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleIconUpload} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 text-[11px] text-zinc-400 leading-relaxed font-medium">
                                            Upload an SVG or PNG icon. Icons should be clear and minimalist to represent the category across the site.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 p-6 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/10">
                                <Button variant="outline" size="sm" onClick={() => setIsFormOpen(false)} className="font-bold border-zinc-200 dark:border-zinc-800">Cancel</Button>
                                <Button size="sm" onClick={handleSave} disabled={isSaving} className="bg-zinc-600 text-white hover:bg-zinc-700 min-w-[120px] font-bold shadow-lg shadow-zinc-600/20">
                                    {isSaving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Check className="w-4 h-4 mr-2" />}
                                    Save Category
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="p-6 space-y-3 max-h-[500px] overflow-y-auto custom-scrollbar">
                            {categories.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center bg-zinc-50 dark:bg-zinc-900/20 rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-800">
                                    <Layers className="w-10 h-10 text-zinc-200 mb-3" />
                                    <p className="text-sm font-medium text-zinc-400">No categories found.<br />Click "New Category" to get started.</p>
                                </div>
                            ) : (
                                categories.map(cat => (
                                    <div key={cat.id} className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 hover:shadow-lg hover:border-zinc-200 dark:hover:border-zinc-700 transition-all group">
                                        <div className="flex items-center gap-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 cursor-grab">
                                            <GripVertical className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-inner">
                                                {cat.icon ? <img src={cat.icon} className="w-full h-full object-contain p-2" /> : <ImageIcon className="w-5 h-5 text-zinc-300" />}
                                            </div>
                                            <div>
                                                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 block">{cat.nameEL}</span>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Badge variant="secondary" className="text-[9px] font-black tracking-wider uppercase px-2 py-0 bg-zinc-900 text-white dark:bg-zinc-800">{cat._count?.services || 0} services</Badge>
                                                    {cat.nameEN && <span className="text-[10px] text-zinc-400 italic"> - {cat.nameEN}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon" onClick={() => handleEdit(cat)} className="h-9 w-9 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg">
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={() => handleDelete(cat.id)} className="h-9 w-9 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
