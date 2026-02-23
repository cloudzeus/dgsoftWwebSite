"use client"

import * as React from "react"
import {
    ColumnDef, flexRender, getCoreRowModel, getExpandedRowModel, useReactTable, ExpandedState,
} from "@tanstack/react-table"
import { ChevronDown, ChevronRight, Plus, GripVertical, Settings2, Trash2, Wand2, RefreshCcw, Sparkles, Image as ImageIcon, Bold, Italic, Link as LinkIcon, List } from "lucide-react"

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { createArticle, updateArticle, deleteArticle, updateArticleOrder, createArticleCategory } from "@/app/lib/actions/article"

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

const SortableRow = ({ row, flexRender }: any) => {
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

const MediaSortableItem = ({ item, isCover, onSetCover, onDelete }: { item: ArticleMedia, isCover: boolean, onSetCover: () => void, onDelete: (id: string) => void }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id || item.url })
    const style = { transform: CSS.Transform.toString(transform), transition, opacity: isDragging ? 0.5 : 1 }
    return (
        <div ref={setNodeRef} style={style} className="flex items-center gap-3 p-2 border rounded-md bg-white mb-2">
            <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-1">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
            </div>
            {item.type === "IMAGE" ? (
                <img src={item.url} alt="media" className="w-16 h-16 object-cover rounded-sm border" />
            ) : (
                <video src={item.url} className="w-16 h-16 object-cover rounded-sm border" muted />
            )}
            <div className="flex-1 text-sm truncate font-mono text-xs text-muted-foreground">{item.url.split('/').pop()}</div>
            <div className="flex items-center gap-2">
                <Badge variant="outline">{item.type}</Badge>
                {isCover ? (
                    <Badge className="bg-emerald-600 hover:bg-emerald-700 font-semibold gap-1"><ImageIcon className="h-3 w-3" /> Cover</Badge>
                ) : (
                    <Button size="sm" variant="secondary" onClick={onSetCover} className="h-7 text-xs font-semibold hover:bg-emerald-100 hover:text-emerald-700">Set Cover</Button>
                )}
                <Button size="icon" variant="ghost" onClick={() => onDelete(item.id || item.url)} className="text-red-500 hover:text-red-600 hover:bg-red-50 h-7 w-7">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}

export function DataTableArticles({ data: initialData, allCategories: initialCategories }: { data: Article[], allCategories: ArticleCategory[] }) {
    const [data, setData] = React.useState<Article[]>(initialData || [])
    const [allCategories, setAllCategories] = React.useState<ArticleCategory[]>(initialCategories || [])
    const [expanded, setExpanded] = React.useState<ExpandedState>({})
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    const [isDialogOpen, setIsDialogOpen] = React.useState(false)
    const [editingArticle, setEditingArticle] = React.useState<Article | null>(null)
    const [isSaving, setIsSaving] = React.useState(false)
    const [isGenerating, setIsGenerating] = React.useState(false)
    const [newTagInput, setNewTagInput] = React.useState("")

    // Form states
    const [formData, setFormData] = React.useState({
        titleEL: "",
        titleEN: "",
        slug: "",
        shortDescriptionEL: "",
        shortDescriptionEN: "",
        descriptionEL: "",
        descriptionEN: "",
        metaTitleEL: "",
        metaTitleEN: "",
        metaDescriptionEL: "",
        metaDescriptionEN: "",
        keywordsEL: "",
        keywordsEN: "",
        featureImage: "",
        published: true,
        categories: [] as ArticleCategory[],
        media: [] as ArticleMedia[]
    })

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    )

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event
        if (active.id !== over?.id) {
            const oldIndex = data.findIndex(i => i.id === active.id)
            const newIndex = data.findIndex(i => i.id === over?.id)
            const newData = arrayMove(data, oldIndex, newIndex)
            setData(newData)
            try {
                await updateArticleOrder(newData.map(d => d.id))
                toast.success("Order updated successfully", { id: "order" })
            } catch (err) {
                toast.error("Failed to update order", { id: "order" })
                setData(data)
            }
        }
    }

    const openEdit = (article?: Article) => {
        if (article) {
            setEditingArticle(article)
            setFormData({
                titleEL: article.titleEL,
                titleEN: article.titleEN || "",
                slug: article.slug,
                shortDescriptionEL: article.shortDescriptionEL || "",
                shortDescriptionEN: article.shortDescriptionEN || "",
                descriptionEL: article.descriptionEL || "",
                descriptionEN: article.descriptionEN || "",
                metaTitleEL: article.metaTitleEL || "",
                metaTitleEN: article.metaTitleEN || "",
                metaDescriptionEL: article.metaDescriptionEL || "",
                metaDescriptionEN: article.metaDescriptionEN || "",
                keywordsEL: article.keywordsEL || "",
                keywordsEN: article.keywordsEN || "",
                featureImage: article.featureImage || "",
                published: article.published,
                categories: article.categories || [],
                media: article.media || []
            })
        } else {
            setEditingArticle(null)
            setFormData({
                titleEL: "", titleEN: "", slug: "", shortDescriptionEL: "", shortDescriptionEN: "",
                descriptionEL: "", descriptionEN: "", featureImage: "", published: true,
                metaTitleEL: "", metaTitleEN: "", metaDescriptionEL: "", metaDescriptionEN: "", keywordsEL: "", keywordsEN: "",
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
        if (!sourceText) return;
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
            toast.success("Translated successfully", { id: targetField })
        } catch (err: any) {
            toast.error(err.message, { id: targetField })
        }
    }

    const handleGenerateArticle = async () => {
        if (!formData.titleEL) {
            toast.error("Please enter a Title (Greek) first!");
            return;
        }
        setIsGenerating(true)
        toast.loading("DeepSeek is generating your SEO Post...", { id: "gen" })
        try {
            const res = await fetch("/api/admin/articles/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: formData.titleEL })
            })
            const d = await res.json()
            if (!res.ok) throw new Error(d.error)

            const mappedCategories: ArticleCategory[] = [];
            let categoriesList = [...allCategories];

            if (d.categories && Array.isArray(d.categories)) {
                for (const cat of d.categories) {
                    const existing = categoriesList.find(c => c.nameEL.toLowerCase() === cat.nameEL.toLowerCase());
                    if (existing) {
                        mappedCategories.push(existing);
                    } else {
                        // Create immediately to save state accurately
                        const catSlug = cat.nameEL.toLowerCase().replace(/[^a-z0-9α-ωάέήίόύώ]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
                        try {
                            const newCat = await createArticleCategory({
                                nameEL: cat.nameEL,
                                nameEN: cat.nameEN || "",
                                slug: catSlug || `cat-${Date.now()}`
                            }) as any;
                            categoriesList.push(newCat);
                            mappedCategories.push(newCat);
                        } catch (e) {
                            console.error("Failed auto creating category", e);
                        }
                    }
                }
            }

            setAllCategories(categoriesList);

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
                slug: prev.slug || formData.titleEL.toLowerCase().replace(/[^a-z0-9α-ωάέήίόύώ]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
            }))

            toast.success("Article & SEO successfully generated and mapped!", { id: "gen" })

        } catch (error: any) {
            toast.error(error.message, { id: "gen" })
        } finally {
            setIsGenerating(false)
        }
    }

    const toggleCategory = (cat: ArticleCategory) => {
        setFormData(prev => {
            const exists = prev.categories.some(c => c.id === cat.id)
            if (exists) return { ...prev, categories: prev.categories.filter(c => c.id !== cat.id) }
            return { ...prev, categories: [...prev.categories, cat] }
        })
    }

    const columns: ColumnDef<Article>[] = [
        {
            id: "drag",
            header: "",
            cell: () => <GripVertical className="h-4 w-4 text-muted-foreground" />,
            enableSorting: false,
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
            accessorKey: "featureImage",
            header: "Image",
            cell: ({ row }) => {
                const img = row.original.featureImage
                if (!img) return <div className="h-8 w-12 bg-muted rounded-sm flex justify-center items-center text-xs text-muted-foreground">N/A</div>
                return <img src={img} alt="cover" className="h-8 w-12 object-cover rounded-sm" />
            }
        },
        {
            accessorKey: "titleEL",
            header: "Title (GR)",
            cell: ({ row }) => <div className="font-medium text-foreground truncate max-w-[200px]">{row.original.titleEL}</div>,
        },
        {
            accessorKey: "slug",
            header: "Slug",
            cell: ({ row }) => <div className="text-xs text-muted-foreground truncate max-w-[150px]">{row.original.slug}</div>,
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
            cell: ({ row }) => {
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="h-8">Actions <ChevronDown className="h-4 w-4 ml-1" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-background text-foreground border border-input">
                            <DropdownMenuItem className="cursor-pointer" onClick={() => openEdit(row.original)}>Edit Article</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-red-500" onClick={async () => {
                                if (confirm("Delete article?")) {
                                    await deleteArticle(row.original.id)
                                    setData(data.filter(d => d.id !== row.original.id))
                                }
                            }}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            }
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

    const handleMediaUpload = async (files: FileList | null) => {
        if (!files || files.length === 0 || !editingArticle) return
        toast.loading(`Uploading ${files.length} file(s)...`, { id: "upload" })
        try {
            let currentMediaArray = [...editingArticle.media];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const formData = new FormData()
                formData.append("file", file)
                const res = await fetch("/api/admin/articles/upload", { method: "POST", body: formData })
                const d = await res.json()
                if (!res.ok) throw new Error(d.error)

                const newMedia = { id: `new_${Date.now()}_${i}`, url: d.url, type: d.type, order: currentMediaArray.length }
                currentMediaArray.push(newMedia);
            }

            const payload = {
                ...editingArticle,
                categories: editingArticle.categories,
                media: currentMediaArray
            }

            const updated = await updateArticle(editingArticle.id, payload)
            setData(data.map(item => item.id === updated.id ? updated as any : item))
            setEditingArticle(updated as any)
            toast.success("Media uploaded successfully!", { id: "upload" })
        } catch (error: any) {
            toast.error(error.message, { id: "upload" })
        }
    }

    const handleMediaDragEnd = async (event: DragEndEvent, parentArticleId: string) => {
        const { active, over } = event
        if (active.id !== over?.id) {
            const article = data.find(d => d.id === parentArticleId)
            if (!article) return
            const oldIndex = article.media.findIndex(i => (i.id || i.url) === active.id)
            const newIndex = article.media.findIndex(i => (i.id || i.url) === over?.id)
            const newMediaList = arrayMove(article.media, oldIndex, newIndex)

            // Immediately save order to backend
            const payload = { ...article, media: newMediaList }
            try {
                const updated = await updateArticle(article.id, payload)
                setData(data.map(item => item.id === updated.id ? updated as any : item))
            } catch (error) {
                toast.error("Failed to reorder media")
            }
        }
    }

    const handleFormMediaUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return
        toast.loading(`Uploading ${files.length} file(s) directly to form...`, { id: "upload-form" })
        try {
            let currentMediaArray = [...formData.media];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const uploadForm = new FormData()
                uploadForm.append("file", file)
                const res = await fetch("/api/admin/articles/upload", { method: "POST", body: uploadForm })
                const d = await res.json()
                if (!res.ok) throw new Error(d.error)

                const newMedia = { id: `new_${Date.now()}_${i}`, url: d.url, type: d.type, order: currentMediaArray.length }
                currentMediaArray.push(newMedia);
            }

            setFormData(prev => ({ ...prev, media: currentMediaArray }))
            toast.success("Media attached successfully!", { id: "upload-form" })
        } catch (error: any) {
            toast.error(error.message, { id: "upload-form" })
        }
    }

    const handleFormMediaDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        if (active.id !== over?.id) {
            const oldIndex = formData.media.findIndex(i => (i.id || i.url) === active.id)
            const newIndex = formData.media.findIndex(i => (i.id || i.url) === over?.id)
            const newMediaList = arrayMove(formData.media, oldIndex, newIndex)
            setFormData(prev => ({ ...prev, media: newMediaList }))
        }
    }

    if (!isMounted) {
        return <div className="p-8 text-center text-muted-foreground animate-pulse">Loading articles interface...</div>
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Button onClick={() => openEdit()} className="bg-primary shadow-md hover:shadow-lg transition-all">
                    <Plus className="mr-2 h-4 w-4" /> Add Article
                </Button>
            </div>

            <div className="rounded-md border bg-card text-card-foreground shadow overflow-hidden">
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
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
                            <SortableContext items={data.map(d => d.id)} strategy={verticalListSortingStrategy}>
                                {table.getRowModel().rows.map(row => (
                                    <React.Fragment key={row.id}>
                                        <SortableRow row={row} flexRender={flexRender} />
                                        {row.getIsExpanded() && (
                                            <TableRow className="bg-muted/10 h-full">
                                                <TableCell colSpan={columns.length} className="p-4 border-b">
                                                    <Tabs defaultValue="media">
                                                        <TabsList className="mb-4">
                                                            <TabsTrigger value="info">Fast Info</TabsTrigger>
                                                            <TabsTrigger value="media">Library & Media</TabsTrigger>
                                                        </TabsList>
                                                        <TabsContent value="info" className="space-y-2 p-4 bg-white rounded-md border text-sm">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div><strong>Title:</strong> {row.original.titleEL}</div>
                                                                <div><strong>Title (EN):</strong> {row.original.titleEN || "N/A"}</div>
                                                            </div>
                                                            <div className="text-muted-foreground mt-2 border-t pt-2">
                                                                {row.original.shortDescriptionEL}
                                                            </div>
                                                        </TabsContent>
                                                        <TabsContent value="media" className="p-4 bg-white rounded-md border min-h-[200px]">
                                                            <div className="flex justify-between items-center mb-4">
                                                                <h4 className="font-semibold text-sm">Attached Media</h4>
                                                                <Label className="cursor-pointer bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-primary/90 transition-colors">
                                                                    Upload New
                                                                    <input type="file" className="hidden" multiple accept="image/*,video/*" onChange={(e) => {
                                                                        setEditingArticle(row.original)
                                                                        handleMediaUpload(e.target.files)
                                                                    }} />
                                                                </Label>
                                                            </div>
                                                            {row.original.media.length === 0 ? (
                                                                <div className="text-center text-sm text-muted-foreground py-8">No media uploaded yet. drag here?</div>
                                                            ) : (
                                                                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={(e) => handleMediaDragEnd(e, row.original.id)}>
                                                                    <SortableContext items={row.original.media.map(m => m.id || m.url)} strategy={verticalListSortingStrategy}>
                                                                        {row.original.media.map((m) => (
                                                                            <MediaSortableItem
                                                                                key={m.id || m.url}
                                                                                item={m}
                                                                                isCover={row.original.featureImage === m.url}
                                                                                onSetCover={async () => {
                                                                                    toast.loading("Setting cover...", { id: "cover" });
                                                                                    try {
                                                                                        const updated = await updateArticle(row.original.id, { ...row.original, featureImage: m.url });
                                                                                        setData(data.map(item => item.id === updated.id ? updated as any : item))
                                                                                        toast.success("Cover image set!", { id: "cover" });
                                                                                    } catch (e) {
                                                                                        toast.error("Failed to set cover", { id: "cover" })
                                                                                    }
                                                                                }}
                                                                                onDelete={async (mediaId) => {
                                                                                    if (!confirm("Remove media?")) return
                                                                                    const payload = { ...row.original, media: row.original.media.filter(x => (x.id || x.url) !== mediaId) }
                                                                                    const updated = await updateArticle(row.original.id, payload)
                                                                                    setData(data.map(item => item.id === updated.id ? updated as any : item))
                                                                                }}
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
                        </TableBody>
                    </Table>
                </DndContext>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="w-[95vw] md:max-w-[70vw] max-h-[90vh] overflow-y-auto bg-background text-foreground md:p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-foreground">{editingArticle ? "Edit Article" : "Create Article"}</DialogTitle>
                    </DialogHeader>

                    <Tabs defaultValue="greek" className="w-full py-4">
                        <TabsList className="grid w-full grid-cols-3 mb-4 max-w-[600px]">
                            <TabsTrigger value="greek">Greek Content</TabsTrigger>
                            <TabsTrigger value="english">English Content</TabsTrigger>
                            <TabsTrigger value="media" className="bg-emerald-50 text-emerald-700 data-[state=active]:bg-emerald-600 data-[state=active]:text-white">Media Library</TabsTrigger>
                        </TabsList>

                        <TabsContent value="greek" className="space-y-4">
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <Label className="text-foreground font-bold">Title (Ηλεκτρονικά Άρθρα)</Label>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="h-7 text-xs bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:border-indigo-800 dark:text-indigo-300 transition-all font-semibold"
                                        onClick={handleGenerateArticle}
                                        disabled={isGenerating}
                                    >
                                        <Sparkles className={`w-3 h-3 mr-1 ${isGenerating ? 'animate-spin' : ''}`} />
                                        {isGenerating ? 'AI Generating...' : 'Auto-Generate via AI'}
                                    </Button>
                                </div>
                                <Input className="bg-background mt-1" value={formData.titleEL} onChange={e => {
                                    const val = e.target.value;
                                    const autoSlug = val.trim().toLowerCase().replace(/[\s_]+/g, '-').replace(/[^a-z0-9α-ωάέήίόύώ-]/g, '');
                                    setFormData({ ...formData, titleEL: val, slug: !editingArticle ? autoSlug : formData.slug })
                                }} />
                            </div>
                            <div>
                                <Label className="text-foreground font-bold">Slug (Url)</Label>
                                <Input className="bg-background mt-1" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} />
                            </div>
                            <div>
                                <Label className="text-foreground font-bold">Short Description</Label>
                                <Textarea className="bg-background mt-1" value={formData.shortDescriptionEL} rows={3} onChange={e => setFormData({ ...formData, shortDescriptionEL: e.target.value })} />
                            </div>

                            {/* SEO SECTION (GREEK) */}
                            <div className="p-4 rounded-md border bg-muted/20 space-y-4 my-4">
                                <Label className="font-bold text-foreground block border-b pb-2">Greek SEO Metadata</Label>
                                <div>
                                    <Label className="text-foreground text-xs font-bold">Meta Title (Max 60 chars)</Label>
                                    <Input className="bg-background mt-1 text-xs" value={formData.metaTitleEL} onChange={e => setFormData({ ...formData, metaTitleEL: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground text-xs font-bold">Meta Description (Max 160 chars)</Label>
                                    <Textarea className="bg-background mt-1 text-xs" rows={2} value={formData.metaDescriptionEL} onChange={e => setFormData({ ...formData, metaDescriptionEL: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground text-xs font-bold">Keywords (Comma separated)</Label>
                                    <Input className="bg-background mt-1 text-xs" value={formData.keywordsEL} onChange={e => setFormData({ ...formData, keywordsEL: e.target.value })} />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-end mb-1">
                                    <Label className="text-foreground font-bold flex gap-2">
                                        Description (Rich HTML)
                                        <div className="flex gap-1 ml-4 border rounded bg-muted/50 p-0.5">
                                            <Button type="button" variant="ghost" size="icon" className="h-5 w-5"><Bold className="w-3 h-3" /></Button>
                                            <Button type="button" variant="ghost" size="icon" className="h-5 w-5"><Italic className="w-3 h-3" /></Button>
                                            <Button type="button" variant="ghost" size="icon" className="h-5 w-5"><LinkIcon className="w-3 h-3" /></Button>
                                            <Button type="button" variant="ghost" size="icon" className="h-5 w-5"><List className="w-3 h-3" /></Button>
                                        </div>
                                    </Label>
                                </div>
                                <Textarea value={formData.descriptionEL} rows={6} className="bg-background font-mono text-sm" onChange={e => setFormData({ ...formData, descriptionEL: e.target.value })} />
                            </div>
                        </TabsContent>

                        <TabsContent value="english" className="space-y-4">
                            <div>
                                <div className="flex justify-between"><Label className="text-foreground font-bold">Title</Label> <Wand2 className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-primary" onClick={() => translateField(formData.titleEL, 'titleEN')} /></div>
                                <Input className="bg-background mt-1" value={formData.titleEN} onChange={e => setFormData({ ...formData, titleEN: e.target.value })} />
                            </div>
                            <div>
                                <div className="flex justify-between"><Label className="text-foreground font-bold">Short Description</Label> <Wand2 className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-primary" onClick={() => translateField(formData.shortDescriptionEL, 'shortDescriptionEN')} /></div>
                                <Textarea className="bg-background mt-1" value={formData.shortDescriptionEN} rows={3} onChange={e => setFormData({ ...formData, shortDescriptionEN: e.target.value })} />
                            </div>

                            {/* SEO SECTION (ENGLISH) */}
                            <div className="p-4 rounded-md border bg-muted/20 space-y-4 my-4">
                                <Label className="font-bold text-foreground block border-b pb-2">English SEO Metadata</Label>
                                <div>
                                    <Label className="text-foreground text-xs font-bold">Meta Title (Max 60 chars)</Label>
                                    <Input className="bg-background mt-1 text-xs" value={formData.metaTitleEN} onChange={e => setFormData({ ...formData, metaTitleEN: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground text-xs font-bold">Meta Description (Max 160 chars)</Label>
                                    <Textarea className="bg-background mt-1 text-xs" rows={2} value={formData.metaDescriptionEN} onChange={e => setFormData({ ...formData, metaDescriptionEN: e.target.value })} />
                                </div>
                                <div>
                                    <Label className="text-foreground text-xs font-bold">Keywords (Comma separated)</Label>
                                    <Input className="bg-background mt-1 text-xs" value={formData.keywordsEN} onChange={e => setFormData({ ...formData, keywordsEN: e.target.value })} />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-end mb-1">
                                    <Label className="text-foreground font-bold flex items-center gap-2">
                                        Description (Rich HTML)
                                        <div className="flex gap-1 ml-4 border rounded bg-muted/50 p-0.5">
                                            <Button type="button" variant="ghost" size="icon" className="h-5 w-5"><Bold className="w-3 h-3" /></Button>
                                            <Button type="button" variant="ghost" size="icon" className="h-5 w-5"><Italic className="w-3 h-3" /></Button>
                                            <Button type="button" variant="ghost" size="icon" className="h-5 w-5"><LinkIcon className="w-3 h-3" /></Button>
                                            <Button type="button" variant="ghost" size="icon" className="h-5 w-5"><List className="w-3 h-3" /></Button>
                                        </div>
                                    </Label>
                                    <Wand2 className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-primary" onClick={() => translateField(formData.descriptionEL, 'descriptionEN')} />
                                </div>
                                <Textarea value={formData.descriptionEN} rows={6} className="bg-background font-mono text-sm" onChange={e => setFormData({ ...formData, descriptionEN: e.target.value })} />
                            </div>
                        </TabsContent>

                        <TabsContent value="media" className="p-4 bg-muted/20 border rounded-md min-h-[300px]">
                            <div className="flex justify-between items-center mb-6 border-b pb-4">
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Media Library</h3>
                                    <p className="text-xs text-muted-foreground">Upload and manage images/videos for this article.</p>
                                </div>
                                <Label className="cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold shadow-md hover:bg-primary/90 transition-all flex items-center gap-2">
                                    <Plus className="w-4 h-4" /> Upload Files
                                    <input type="file" className="hidden" multiple accept="image/*,video/*" onChange={(e) => handleFormMediaUpload(e.target.files)} />
                                </Label>
                            </div>

                            {formData.media.length === 0 ? (
                                <div className="text-center text-sm text-muted-foreground py-16 border-2 border-dashed rounded-md bg-background">No media attached to this article. Click "Upload Files" to begin.</div>
                            ) : (
                                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleFormMediaDragEnd}>
                                    <SortableContext items={formData.media.map(m => m.id || m.url)} strategy={verticalListSortingStrategy}>
                                        <div className="grid gap-2">
                                            {formData.media.map((m) => (
                                                <MediaSortableItem
                                                    key={m.id || m.url}
                                                    item={m}
                                                    isCover={formData.featureImage === m.url}
                                                    onSetCover={() => setFormData(prev => ({ ...prev, featureImage: m.url }))}
                                                    onDelete={(mediaId) => {
                                                        if (!confirm("Remove this media file?")) return;
                                                        setFormData(prev => ({
                                                            ...prev,
                                                            media: prev.media.filter(x => (x.id || x.url) !== mediaId),
                                                            featureImage: prev.featureImage === mediaId ? "" : prev.featureImage
                                                        }));
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </SortableContext>
                                </DndContext>
                            )}
                        </TabsContent>
                    </Tabs>

                    <div className="space-y-4 border-t pt-4">
                        <Label className="text-foreground font-bold">Categories (Tags)</Label>
                        <div className="flex flex-col gap-2">
                            <Input
                                className="bg-background max-w-sm"
                                placeholder="Type a new tag and press Enter..."
                                value={newTagInput}
                                onChange={e => setNewTagInput(e.target.value)}
                                onKeyDown={async (e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        const val = newTagInput.trim();
                                        if (!val) return;

                                        const exists = allCategories.find(c => c.nameEL.toLowerCase() === val.toLowerCase());
                                        if (exists) {
                                            if (!formData.categories.some(c => c.id === exists.id)) {
                                                setFormData(prev => ({ ...prev, categories: [...prev.categories, exists] }));
                                            }
                                            setNewTagInput("");
                                            return;
                                        }

                                        toast.loading("Saving tag...", { id: "add-tag" });
                                        try {
                                            const autoSlug = val.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^a-z0-9α-ωάέήίόύώ-]/g, '');
                                            const newCat = await createArticleCategory({
                                                nameEL: val,
                                                nameEN: "",
                                                slug: autoSlug || `tag-${Date.now()}`
                                            }) as any;
                                            setAllCategories(prev => [...prev, newCat]);
                                            setFormData(prev => ({ ...prev, categories: [...prev.categories, newCat] }));
                                            setNewTagInput("");
                                            toast.success("Tag added", { id: "add-tag" });
                                        } catch (err: any) {
                                            toast.error(err.message, { id: "add-tag" });
                                        }
                                    }
                                }}
                            />
                            <div className="flex flex-wrap gap-2 p-3 border rounded-md bg-muted/20 min-h-[50px]">
                                {allCategories.map(cat => {
                                    const active = formData.categories.some(c => c.id === cat.id)
                                    return (
                                        <Badge key={cat.id}
                                            variant={active ? "default" : "outline"}
                                            className="cursor-pointer transition-colors"
                                            onClick={() => toggleCategory(cat)}
                                        >
                                            {cat.nameEL}
                                        </Badge>
                                    )
                                })}
                                {allCategories.length === 0 && <span className="text-xs text-muted-foreground">No tags saved yet.</span>}
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                            <Switch checked={formData.published} onCheckedChange={c => setFormData({ ...formData, published: c })} />
                            <Label className="text-foreground font-bold">Published Visibility</Label>
                        </div>

                    </div>

                    <div className="flex justify-end pt-4 mt-4 border-t">
                        <Button disabled={isSaving} onClick={handleSave}>
                            {isSaving ? <RefreshCcw className="h-4 w-4 animate-spin mr-2" /> : "Save Article"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
