"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import {
    ChevronDown,
    GripVertical,
    Trash2,
    ImageIcon,
    RefreshCcw,
    Plus,
    Sparkles,
    Wand2,
    Layout,
    FileText,
    ExternalLink,
    Tag,
    ArrowUpDown
} from "lucide-react"

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { createArticle, updateArticle, deleteArticle, updateArticleOrder, createArticleCategory } from "@/app/lib/actions/article"
import { GenericDataTable } from "../shared/generic-data-table"

export type ArticleMedia = { id: string, type: string, url: string, order: number }
export type ArticleCategory = { id: string, nameEL: string, nameEN: string }
export type Article = {
    id: string
    titleEL: string
    titleEN: string | null
    slug: string
    shortDescriptionEL: string | null
    shortDescriptionEN: string | null
    descriptionEL: string | null
    descriptionEN: string | null
    metaTitleEL: string | null
    metaTitleEN: string | null
    metaDescriptionEL: string | null
    metaDescriptionEN: string | null
    keywordsEL: string | null
    keywordsEN: string | null
    featureImage: string | null
    published: boolean
    order: number
    categories: ArticleCategory[]
    media: ArticleMedia[]
}

const MediaSortableItem = ({
    item, isCover, onSetCover, onDelete
}: {
    item: ArticleMedia
    isCover: boolean
    onSetCover: () => void
    onDelete: (id: string) => void
}) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id || item.url })
    const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 }
    return (
        <div ref={setNodeRef} style={style} className="flex items-center gap-3 p-3 border border-[#EDEBE9] rounded-lg bg-white mb-1.5 group hover:shadow-sm transition-all">
            <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-1.5 hover:bg-[#F3F2F1] rounded">
                <GripVertical className="h-4 w-4 text-[#A19F9D]" />
            </div>
            <div className="w-9 h-9 rounded-lg overflow-hidden bg-[#F3F2F1] border border-[#EDEBE9] shrink-0">
                {item.type === "IMAGE"
                    ? <img src={item.url} alt="media" className="w-full h-full object-cover" />
                    : <video src={item.url} className="w-full h-full object-cover" muted />
                }
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-[#605E5C] truncate">{item.url.split('/').pop()}</p>
                <div className="mt-1 flex items-center gap-2">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9] uppercase">
                        {item.type}
                    </span>
                    {isCover && (
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" /> Cover
                        </span>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-1.5">
                {!isCover && (
                    <Button size="sm" variant="ghost" onClick={onSetCover} className="h-7 text-[11px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9]">
                        Set Cover
                    </Button>
                )}
                <Button size="icon" variant="ghost" onClick={() => onDelete(item.id || item.url)} className="text-[#A19F9D] hover:text-red-500 h-7 w-7 hover:bg-red-50">
                    <Trash2 className="h-3.5 w-3.5" />
                </Button>
            </div>
        </div>
    )
}

export function DataTableArticles({
    data: initialData,
    allCategories: initialCategories
}: {
    data: Article[]
    allCategories: ArticleCategory[]
}) {
    const [data, setData] = React.useState<Article[]>(initialData || [])
    const [allCategories, setAllCategories] = React.useState<ArticleCategory[]>(initialCategories || [])
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => { setIsMounted(true) }, [])

    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingArticle, setEditingArticle] = React.useState<Article | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isGenerating, setIsGenerating] = React.useState(false)

    const [formData, setFormData] = React.useState({
        titleEL: "", titleEN: "", slug: "", shortDescriptionEL: "", shortDescriptionEN: "",
        descriptionEL: "", descriptionEN: "", featureImage: "", published: true,
        metaTitleEL: "", metaTitleEN: "", metaDescriptionEL: "", metaDescriptionEN: "",
        keywordsEL: "", keywordsEN: "",
        categories: [] as ArticleCategory[], media: [] as ArticleMedia[]
    })

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    )

    const handleReorder = async (newData: Article[]) => {
        setData(newData)
        try {
            await updateArticleOrder(newData.map(d => d.id))
            toast.success("Order synchronized")
        } catch {
            toast.error("Order sync failed")
            setData(initialData)
        }
    }

    const openEdit = (article?: Article) => {
        if (article) {
            setEditingArticle(article)
            setFormData({
                titleEL: article.titleEL, titleEN: article.titleEN || "", slug: article.slug,
                shortDescriptionEL: article.shortDescriptionEL || "", shortDescriptionEN: article.shortDescriptionEN || "",
                descriptionEL: article.descriptionEL || "", descriptionEN: article.descriptionEN || "",
                metaTitleEL: article.metaTitleEL || "", metaTitleEN: article.metaTitleEN || "",
                metaDescriptionEL: article.metaDescriptionEL || "", metaDescriptionEN: article.metaDescriptionEN || "",
                keywordsEL: article.keywordsEL || "", keywordsEN: article.keywordsEN || "",
                featureImage: article.featureImage || "", published: article.published,
                categories: article.categories || [], media: article.media || []
            })
        } else {
            setEditingArticle(null)
            setFormData({
                titleEL: "", titleEN: "", slug: "", shortDescriptionEL: "", shortDescriptionEN: "",
                descriptionEL: "", descriptionEN: "", featureImage: "", published: true,
                metaTitleEL: "", metaTitleEN: "", metaDescriptionEL: "", metaDescriptionEN: "",
                keywordsEL: "", keywordsEN: "",
                categories: [], media: []
            })
        }
        setIsDialogOpen(true)
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            if (editingArticle) {
                const res = await updateArticle(editingArticle.id, formData)
                setData(data.map(d => d.id === res.id ? res as any : d))
                toast.success("Article updated")
            } else {
                const res = await createArticle(formData)
                setData([...data, res as any])
                toast.success("Article created")
            }
            setIsDialogOpen(false)
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsSaving(false)
        }
    }

    const translateField = async (sourceText: string, targetField: string) => {
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
            toast.success("Translation applied", { id: targetField })
        } catch (err: any) {
            toast.error(err.message, { id: targetField })
        }
    }

    const handleGenerateArticle = async () => {
        if (!formData.titleEL) return toast.error("Enter a Greek Title first!")
        setIsGenerating(true)
        const tid = toast.loading("DeepSeek is crafting your SEO post...")
        try {
            const res = await fetch("/api/admin/articles/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: formData.titleEL })
            })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)

            const mappedCategories: ArticleCategory[] = []
            let currentCats = [...allCategories]

            if (d.categories && Array.isArray(d.categories)) {
                for (const cat of d.categories) {
                    const existing = currentCats.find(c => c.nameEL.toLowerCase() === cat.nameEL.toLowerCase())
                    if (existing) {
                        mappedCategories.push(existing)
                    } else {
                        try {
                            const newCat = await createArticleCategory({
                                nameEL: cat.nameEL, nameEN: cat.nameEN || "",
                                slug: cat.nameEL.toLowerCase().replace(/ /g, '-')
                            }) as any
                            currentCats.push(newCat)
                            mappedCategories.push(newCat)
                        } catch (e) { console.error(e) }
                    }
                }
            }
            setAllCategories(currentCats)
            setFormData(prev => ({
                ...prev,
                titleEN: d.titleEN || prev.titleEN,
                shortDescriptionEL: d.shortDescriptionEL || prev.shortDescriptionEL,
                shortDescriptionEN: d.shortDescriptionEN || prev.shortDescriptionEN,
                descriptionEL: d.descriptionEL || prev.descriptionEL,
                descriptionEN: d.descriptionEN || prev.descriptionEN,
                metaTitleEL: d.metaTitleEL || prev.metaTitleEL,
                metaTitleEN: d.metaTitleEN || prev.metaTitleEN,
                metaDescriptionEL: d.metaDescriptionEL || prev.metaDescriptionEL,
                metaDescriptionEN: d.metaDescriptionEN || prev.metaDescriptionEN,
                keywordsEL: d.keywordsEL || prev.keywordsEL,
                keywordsEN: d.keywordsEN || prev.keywordsEN,
                categories: mappedCategories,
                slug: d.slug || prev.slug || formData.titleEL.toLowerCase().replace(/[^a-z0-9α-ωάέήίόύώ]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
            }))
            toast.success("Article Draft Generated", { id: tid })
        } catch (error: any) {
            toast.error(error.message, { id: tid })
        } finally {
            setIsGenerating(false)
        }
    }

    const handleMediaUpload = async (files: FileList | null, article: Article) => {
        if (!files || files.length === 0) return
        const tid = toast.loading("Uploading resources...")
        try {
            let currentMedia = [...article.media]
            for (let i = 0; i < files.length; i++) {
                const fData = new FormData()
                fData.append("file", files[i])
                const res = await fetch("/api/admin/articles/upload", { method: "POST", body: fData })
                const d = await res.json()
                if (!res.ok) throw new Error(d.error)
                currentMedia.push({ id: `new_${Date.now()}_${i}`, url: d.url, type: d.type, order: currentMedia.length })
            }
            const updated = await updateArticle(article.id, { ...article, media: currentMedia })
            setData(data.map(item => item.id === updated.id ? updated as any : item))
            toast.success("Library updated", { id: tid })
        } catch (error: any) {
            toast.error(error.message, { id: tid })
        }
    }

    // ─── Columns ──────────────────────────────────────────────────────────────

    const columns: ColumnDef<Article>[] = [
        {
            id: "drag",
            header: "",
            cell: () => <GripVertical className="h-4 w-4 text-[#C8C6C4] opacity-0 group-hover:opacity-100 transition-opacity" />,
            size: 40
        },
        {
            accessorKey: "featureImage",
            header: "",
            cell: ({ row }) => (
                <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#EDEBE9] bg-[#F3F2F1] shrink-0 flex items-center justify-center">
                    {row.original.featureImage
                        ? <img src={row.original.featureImage} className="w-full h-full object-cover" />
                        : <ImageIcon className="w-3.5 h-3.5 text-[#C8C6C4]" />
                    }
                </div>
            ),
            size: 52
        },
        {
            accessorKey: "titleEL",
            header: ({ column }) => (
                <button
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide hover:text-[#201F1E]"
                >
                    Post Title <ArrowUpDown className="h-3 w-3" />
                </button>
            ),
            cell: ({ row }) => (
                <div className="flex flex-col">
                    <span className="font-semibold text-sm text-[#201F1E] leading-tight">{row.original.titleEL}</span>
                    <span className="text-[10px] font-mono text-[#A19F9D] truncate max-w-[180px] mt-0.5">/{row.original.slug}</span>
                </div>
            )
        },
        {
            id: "categories",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Category</span>,
            cell: ({ row }) => {
                const cats = row.original.categories
                if (!cats || cats.length === 0) {
                    return <span className="text-[11px] text-[#C8C6C4]">—</span>
                }
                return (
                    <div className="flex flex-wrap gap-1">
                        {cats.slice(0, 2).map(c => (
                            <span key={c.id} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]">
                                <Tag className="w-2.5 h-2.5 shrink-0" />
                                {c.nameEL}
                            </span>
                        ))}
                        {cats.length > 2 && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]">
                                +{cats.length - 2}
                            </span>
                        )}
                    </div>
                )
            }
        },
        {
            accessorKey: "published",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Status</span>,
            cell: ({ row }) => row.original.published ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Live
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
                            Actions <ChevronDown className="h-3.5 w-3.5 text-[#A19F9D]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuItem onClick={() => openEdit(row.original)} className="text-sm">
                            <Layout className="w-3.5 h-3.5 mr-2 text-[#0078D4]" /> Edit Article
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => window.open(`/blog/${row.original.slug}`, '_blank')} className="text-sm">
                            <ExternalLink className="w-3.5 h-3.5 mr-2" /> View Post
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500 text-sm" onClick={async () => {
                            if (confirm("Permanently delete this article?")) {
                                await deleteArticle(row.original.id)
                                setData(data.filter(d => d.id !== row.original.id))
                                toast.success("Article removed")
                            }
                        }}>
                            <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ]

    // ─── Expanded row ─────────────────────────────────────────────────────────

    const renderExpandedRow = (article: Article) => (
        <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
            <Tabs defaultValue="overview">
                <div className="px-4 pt-3 pb-0 bg-[#F3F2F1] border-b border-[#EDEBE9]">
                    <TabsList className="bg-transparent p-0 h-8 rounded-none border-0 gap-1">
                        <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:border-[#EDEBE9] data-[state=active]:shadow-sm text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide px-4 h-7 rounded border border-transparent transition-all">
                            Overview
                        </TabsTrigger>
                        <TabsTrigger value="media" className="data-[state=active]:bg-white data-[state=active]:border-[#EDEBE9] data-[state=active]:shadow-sm text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide px-4 h-7 rounded border border-transparent transition-all">
                            Media Library
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="overview" className="m-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-[#EDEBE9]">
                        <div className="p-4 space-y-2 bg-white">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Short Snippet (Greek)</p>
                            <p className="text-sm leading-relaxed text-[#605E5C] italic">
                                "{article.shortDescriptionEL || "No description available yet."}"
                            </p>
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-[#EDEBE9]">
                            <div className="p-4 space-y-2 bg-white">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Categories</p>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                    {article.categories.map(c => (
                                        <span key={c.id} className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]">
                                            {c.nameEL}
                                        </span>
                                    ))}
                                    {article.categories.length === 0 && (
                                        <span className="text-xs text-[#A19F9D]">Uncategorized</span>
                                    )}
                                </div>
                            </div>
                            <div className="p-4 space-y-2 bg-white">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">SEO Health</p>
                                <div className="mt-1 flex items-center gap-2">
                                    <div className={`w-2.5 h-2.5 rounded-full ${article.metaTitleEL && article.metaDescriptionEL ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                                    <span className="text-xs font-semibold text-[#201F1E]">
                                        {article.metaTitleEL && article.metaDescriptionEL ? 'Optimized' : 'Needs attention'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="media" className="m-0 animate-in fade-in duration-500">
                    <div className="p-4 bg-white">
                        <div className="flex justify-between items-center mb-3">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Media Library</p>
                                <p className="text-xs text-[#605E5C] mt-0.5">Drag to reorder. First image becomes the cover.</p>
                            </div>
                            <Label className="cursor-pointer inline-flex items-center gap-1.5 h-8 px-3 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95 transition-all">
                                <Plus className="w-3.5 h-3.5" /> Add Assets
                                <input type="file" className="hidden" multiple accept="image/*,video/*" onChange={e => handleMediaUpload(e.target.files, article)} />
                            </Label>
                        </div>
                        <div className="grid grid-cols-1 gap-0 max-w-3xl">
                            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
                                const { active, over } = e
                                if (active.id !== over?.id) {
                                    const oldIndex = article.media.findIndex(i => (i.id || i.url) === active.id)
                                    const newIndex = article.media.findIndex(i => (i.id || i.url) === over?.id)
                                    const newMediaList = arrayMove(article.media, oldIndex, newIndex)
                                    updateArticle(article.id, { ...article, media: newMediaList }).then(updated => {
                                        setData(data.map(item => item.id === updated.id ? updated as any : item))
                                    })
                                }
                            }}>
                                <SortableContext items={article.media.map(m => m.id || m.url)} strategy={verticalListSortingStrategy}>
                                    {article.media.map(m => (
                                        <MediaSortableItem
                                            key={m.id || m.url} item={m} isCover={article.featureImage === m.url}
                                            onDelete={async (id) => {
                                                if (confirm("Remove this asset?")) {
                                                    const updated = await updateArticle(article.id, { ...article, media: article.media.filter(x => (x.id || x.url) !== id) })
                                                    setData(data.map(item => item.id === updated.id ? updated as any : item))
                                                }
                                            }}
                                            onSetCover={async () => {
                                                const updated = await updateArticle(article.id, { ...article, featureImage: m.url })
                                                setData(data.map(item => item.id === updated.id ? updated as any : item))
                                                toast.success("Main cover image updated")
                                            }}
                                        />
                                    ))}
                                    {article.media.length === 0 && (
                                        <div className="border border-dashed border-[#C8C6C4] rounded-lg p-6 flex flex-col items-center justify-center text-[#A19F9D] gap-2">
                                            <ImageIcon className="w-8 h-8 opacity-30" />
                                            <p className="text-xs font-semibold">No media assets in library.</p>
                                        </div>
                                    )}
                                </SortableContext>
                            </DndContext>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )

    if (!isMounted) return null

    return (
        <div className="space-y-4">
            <GenericDataTable
                columns={columns} data={data}
                searchPlaceholder="Search by title..." searchColumn="titleEL"
                onAddClick={() => openEdit()} addButtonLabel="New Article"
                isSortable={true} rowIdKey="id" onReorder={handleReorder}
                renderExpandedRow={renderExpandedRow}
            />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">

                    {/* ── Dialog Header ─────────────────────────────────────── */}
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                    <FileText className="w-4 h-4 text-[#0078D4]" />
                                </div>
                                <div>
                                    <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                        {editingArticle ? 'Edit Article' : 'New Article'}
                                    </DialogTitle>
                                    <DialogDescription className="text-[11px] text-[#A19F9D]">
                                        {editingArticle ? editingArticle.titleEL : 'Draft and optimize blog posts with AI assistance.'}
                                    </DialogDescription>
                                </div>
                            </div>
                            <Button
                                size="sm"
                                onClick={handleGenerateArticle}
                                disabled={isGenerating}
                                className="bg-[#0078D4] hover:bg-[#106EBE] h-8 px-4 text-[12px] font-semibold rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] active:scale-95"
                            >
                                {isGenerating
                                    ? <RefreshCcw className="w-3.5 h-3.5 animate-spin mr-1.5" />
                                    : <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                                }
                                Smart Autocomplete
                            </Button>
                        </div>
                    </DialogHeader>

                    {/* ── Dialog Body ───────────────────────────────────────── */}
                    <div className="bg-[#F3F2F1] px-5 py-4 max-h-[75vh] overflow-y-auto">
                        <Tabs defaultValue="el">
                            {/* Tab bar */}
                            <TabsList className="bg-white border border-[#EDEBE9] p-1 h-8 rounded mb-4 w-fit gap-0.5">
                                <TabsTrigger value="el" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide px-3 h-6 rounded transition-all">
                                    ΕΛ
                                </TabsTrigger>
                                <TabsTrigger value="en" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide px-3 h-6 rounded transition-all">
                                    EN
                                </TabsTrigger>
                                <TabsTrigger value="seo" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide px-3 h-6 rounded transition-all">
                                    SEO
                                </TabsTrigger>
                                <TabsTrigger value="settings" className="data-[state=active]:bg-[#F3F2F1] data-[state=active]:text-[#201F1E] text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide px-3 h-6 rounded transition-all">
                                    Settings
                                </TabsTrigger>
                            </TabsList>

                            {/* ── EL tab ──────────────────────────────────────── */}
                            <TabsContent value="el" className="space-y-3 animate-in fade-in duration-300 mt-0">
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Ελληνικά</p>
                                    <div className="space-y-1.5">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">
                                            Τίτλος <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                            placeholder="Πως να αναβαθμίσετε την ιστοσελίδα σας..."
                                            value={formData.titleEL}
                                            onChange={e => setFormData({ ...formData, titleEL: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Σύντομη Περιγραφή</Label>
                                        <Textarea
                                            className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm min-h-[80px]"
                                            placeholder="Μια σύντομη περίληψη για τα social media και την αρχική σελίδα..."
                                            value={formData.shortDescriptionEL}
                                            onChange={e => setFormData({ ...formData, shortDescriptionEL: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Πλήρες Κείμενο</p>
                                    <Textarea
                                        className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm min-h-[280px]"
                                        placeholder="Γράψτε το περιεχόμενο σας εδώ..."
                                        value={formData.descriptionEL}
                                        onChange={e => setFormData({ ...formData, descriptionEL: e.target.value })}
                                    />
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">URL</p>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A19F9D] font-mono text-xs">/blog/</span>
                                        <Input
                                            className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm pl-[52px] font-mono text-[#0078D4]"
                                            value={formData.slug}
                                            onChange={e => setFormData({ ...formData, slug: e.target.value })}
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
                                            Title (EN)
                                            <button
                                                onClick={() => translateField(formData.titleEL, "titleEN")}
                                                className="text-[#0078D4] hover:text-[#106EBE] text-[11px] font-semibold transition-colors flex items-center gap-1"
                                            >
                                                <Wand2 className="w-3 h-3" /> Auto-translate
                                            </button>
                                        </Label>
                                        <Input
                                            className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                            placeholder="How to upgrade your website..."
                                            value={formData.titleEN}
                                            onChange={e => setFormData({ ...formData, titleEN: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[11px] font-semibold text-[#605E5C] flex justify-between items-center">
                                            Short Description (EN)
                                            <button
                                                onClick={() => translateField(formData.shortDescriptionEL, "shortDescriptionEN")}
                                                className="text-[#0078D4] hover:text-[#106EBE] text-[11px] font-semibold transition-colors flex items-center gap-1"
                                            >
                                                <Wand2 className="w-3 h-3" /> Auto-translate
                                            </button>
                                        </Label>
                                        <Textarea
                                            className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm min-h-[80px]"
                                            placeholder="A short summary for social media and the homepage..."
                                            value={formData.shortDescriptionEN}
                                            onChange={e => setFormData({ ...formData, shortDescriptionEN: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <Label className="text-[11px] font-semibold text-[#605E5C] flex justify-between items-center">
                                        Full Post (EN)
                                        <button
                                            onClick={() => translateField(formData.descriptionEL, "descriptionEN")}
                                            className="text-[#0078D4] hover:text-[#106EBE] text-[11px] font-semibold transition-colors flex items-center gap-1"
                                        >
                                            <Wand2 className="w-3 h-3" /> Apply AI Translation
                                        </button>
                                    </Label>
                                    <Textarea
                                        className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm min-h-[280px]"
                                        placeholder="Write your content here..."
                                        value={formData.descriptionEN}
                                        onChange={e => setFormData({ ...formData, descriptionEN: e.target.value })}
                                    />
                                </div>
                            </TabsContent>

                            {/* ── SEO tab ─────────────────────────────────────── */}
                            <TabsContent value="seo" className="space-y-3 animate-in fade-in duration-300 mt-0">
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Meta Titles</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1.5">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Meta Title (ΕΛ)</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                                value={formData.metaTitleEL}
                                                onChange={e => setFormData({ ...formData, metaTitleEL: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Meta Title (EN)</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                                value={formData.metaTitleEN}
                                                onChange={e => setFormData({ ...formData, metaTitleEN: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Meta Descriptions</p>
                                    <div className="space-y-1.5">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Meta Description (ΕΛ)</Label>
                                        <Textarea
                                            className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm min-h-[80px]"
                                            value={formData.metaDescriptionEL}
                                            onChange={e => setFormData({ ...formData, metaDescriptionEL: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Meta Description (EN)</Label>
                                        <Textarea
                                            className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm min-h-[80px]"
                                            value={formData.metaDescriptionEN}
                                            onChange={e => setFormData({ ...formData, metaDescriptionEN: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Keywords</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1.5">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Keywords (ΕΛ)</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                                placeholder="λέξεις, κλειδιά"
                                                value={formData.keywordsEL}
                                                onChange={e => setFormData({ ...formData, keywordsEL: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Keywords (EN)</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                                placeholder="comma, separated, keywords"
                                                value={formData.keywordsEN}
                                                onChange={e => setFormData({ ...formData, keywordsEN: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* ── Settings tab ────────────────────────────────── */}
                            <TabsContent value="settings" className="space-y-3 animate-in fade-in duration-300 mt-0">
                                {/* Feature image */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Feature Image</p>
                                    <div className="flex items-start gap-4">
                                        <div className="w-20 h-20 rounded-lg bg-[#F3F2F1] border border-[#EDEBE9] flex items-center justify-center shrink-0 overflow-hidden">
                                            {formData.featureImage
                                                ? <img src={formData.featureImage} className="w-full h-full object-cover" />
                                                : <ImageIcon className="w-6 h-6 text-[#C8C6C4]" />
                                            }
                                        </div>
                                        <div className="flex-1 space-y-1.5">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Image URL</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono text-[#0078D4]"
                                                placeholder="https://cdn.dgsoft.gr/..."
                                                value={formData.featureImage}
                                                onChange={e => setFormData({ ...formData, featureImage: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Visibility */}
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 flex items-center justify-between">
                                    <div className="flex flex-col gap-0.5">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-1">Visibility</p>
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Visibility Status</Label>
                                        <p className="text-[11px] text-[#A19F9D]">Control if this article is visible to public visitors.</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`text-[11px] font-semibold transition-colors ${formData.published ? 'text-emerald-600' : 'text-[#A19F9D]'}`}>
                                            {formData.published ? 'Published' : 'Draft'}
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
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] transition-colors active:scale-95"
                        >
                            {isSaving
                                ? <><RefreshCcw className="w-3 h-3 animate-spin mr-1.5" />Saving…</>
                                : editingArticle ? "Save Article" : "Publish Post"
                            }
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
