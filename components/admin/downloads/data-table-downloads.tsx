"use client";

import * as React from "react";
import { toast } from "sonner";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    DndContext, closestCenter, PointerSensor, KeyboardSensor,
    useSensor, useSensors, DragEndEvent
} from "@dnd-kit/core";
import {
    SortableContext, sortableKeyboardCoordinates,
    useSortable, verticalListSortingStrategy, arrayMove
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Plus, ChevronDown, RefreshCcw, Wand2, Upload, FileDown, Trash2, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    createDownload, updateDownload, deleteDownload, updateDownloadOrder
} from "@/app/lib/actions/download";

type Download = {
    id: string;
    nameEL: string;
    nameEN?: string | null;
    descriptionEL?: string | null;
    descriptionEN?: string | null;
    fileUrl: string;
    fileSize?: string | null;
    fileType?: string | null;
    category?: string | null;
    published: boolean;
    order: number;
    createdAt: Date;
};

const DEEPSEEK_URL = process.env.NEXT_PUBLIC_DEEPSEEK_API_URL || "https://api.deepseek.com/v1";

async function translateText(text: string): Promise<string> {
    const res = await fetch("/api/admin/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, targetLang: "English" }),
    });
    if (!res.ok) throw new Error("Translation failed");
    const d = await res.json();
    return d.translated || text;
}

function SortableRow({ row, flexRender }: { row: any; flexRender: any }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: row.original.id });
    const style = { transform: CSS.Transform.toString(transform), transition };
    return (
        <TableRow ref={setNodeRef} style={style} className="border-b transition-colors hover:bg-muted/50">
            {row.getVisibleCells().map((cell: any) => (
                <TableCell key={cell.id} {...(cell.column.id === "drag" ? { ...attributes, ...listeners } : {})}
                    className="p-2 align-middle cursor-default">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
            ))}
        </TableRow>
    );
}

const EMPTY_FORM = {
    nameEL: "",
    nameEN: "",
    descriptionEL: "",
    descriptionEN: "",
    fileUrl: "",
    fileSize: "",
    fileType: "",
    category: "",
    published: true,
    order: 0,
};

export function DataTableDownloads({ data: initialData }: { data: Download[] }) {
    const [data, setData] = React.useState<Download[]>(initialData || []);
    const [isMounted, setIsMounted] = React.useState(false);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [editingItem, setEditingItem] = React.useState<Download | null>(null);
    const [isSaving, setIsSaving] = React.useState(false);
    const [isUploading, setIsUploading] = React.useState(false);
    const [formData, setFormData] = React.useState({ ...EMPTY_FORM });

    React.useEffect(() => { setIsMounted(true); }, []);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const openEdit = (item?: Download) => {
        if (item) {
            setEditingItem(item);
            setFormData({
                nameEL: item.nameEL || "",
                nameEN: item.nameEN || "",
                descriptionEL: item.descriptionEL || "",
                descriptionEN: item.descriptionEN || "",
                fileUrl: item.fileUrl || "",
                fileSize: item.fileSize || "",
                fileType: item.fileType || "",
                category: item.category || "",
                published: item.published,
                order: item.order,
            });
        } else {
            setEditingItem(null);
            setFormData({ ...EMPTY_FORM, order: data.length });
        }
        setIsDialogOpen(true);
    };

    const handleFileUpload = async (file: File) => {
        setIsUploading(true);
        toast.loading("Uploading file...", { id: "dl-upload" });
        try {
            const fd = new FormData();
            fd.append("file", file);
            const res = await fetch("/api/admin/downloads/upload", { method: "POST", body: fd });
            const d = await res.json();
            if (!res.ok) throw new Error(d.error);
            setFormData(prev => ({
                ...prev,
                fileUrl: d.url,
                fileSize: d.fileSize || prev.fileSize,
                fileType: d.fileType || prev.fileType,
            }));
            toast.success("File uploaded to CDN!", { id: "dl-upload" });
        } catch (err: any) {
            toast.error(err.message, { id: "dl-upload" });
        } finally {
            setIsUploading(false);
        }
    };

    const translateField = async (text: string, field: keyof typeof formData) => {
        if (!text.trim()) return;
        toast.loading("Translating...", { id: `tr-${field}` });
        try {
            const translated = await translateText(text);
            setFormData(prev => ({ ...prev, [field]: translated }));
            toast.success("Translated!", { id: `tr-${field}` });
        } catch (err: any) {
            toast.error(err.message, { id: `tr-${field}` });
        }
    };

    const handleSave = async () => {
        if (!formData.nameEL.trim()) { toast.error("Greek name is required"); return; }
        if (!formData.fileUrl.trim()) { toast.error("File URL is required — please upload a file first"); return; }
        setIsSaving(true);
        toast.loading("Saving...", { id: "dl-save" });
        try {
            const payload = {
                nameEL: formData.nameEL,
                nameEN: formData.nameEN || undefined,
                descriptionEL: formData.descriptionEL || undefined,
                descriptionEN: formData.descriptionEN || undefined,
                fileUrl: formData.fileUrl,
                fileSize: formData.fileSize || undefined,
                fileType: formData.fileType || undefined,
                category: formData.category || undefined,
                published: formData.published,
                order: Number(formData.order) || 0,
            };
            if (editingItem) {
                const updated = await updateDownload(editingItem.id, payload);
                setData(prev => prev.map(d => d.id === updated.id ? updated as any : d));
            } else {
                const created = await createDownload(payload as any);
                setData(prev => [...prev, created as any]);
            }
            toast.success("Saved!", { id: "dl-save" });
            setIsDialogOpen(false);
        } catch (err: any) {
            toast.error(err.message, { id: "dl-save" });
        } finally {
            setIsSaving(false);
        }
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = data.findIndex(i => i.id === active.id);
            const newIndex = data.findIndex(i => i.id === over?.id);
            const newData = arrayMove(data, oldIndex, newIndex);
            setData(newData);
            try {
                await updateDownloadOrder(newData.map(d => d.id));
                toast.success("Order updated", { id: "dl-order" });
            } catch {
                toast.error("Failed to update order", { id: "dl-order" });
                setData(data);
            }
        }
    };

    const columns: ColumnDef<Download>[] = [
        {
            id: "drag",
            header: "",
            cell: () => <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />,
        },
        {
            accessorKey: "order",
            header: "#",
            cell: ({ row }) => <span className="text-xs text-muted-foreground font-mono">{row.original.order}</span>,
        },
        {
            accessorKey: "nameEL",
            header: "Name (GR)",
            cell: ({ row }) => (
                <div>
                    <div className="font-medium text-foreground truncate max-w-[180px]">{row.original.nameEL}</div>
                    {row.original.nameEN && <div className="text-xs text-muted-foreground truncate max-w-[180px]">{row.original.nameEN}</div>}
                </div>
            ),
        },
        {
            accessorKey: "category",
            header: "Category",
            cell: ({ row }) => row.original.category
                ? <Badge variant="outline" className="text-xs">{row.original.category}</Badge>
                : <span className="text-muted-foreground text-xs">—</span>,
        },
        {
            accessorKey: "fileType",
            header: "Type",
            cell: ({ row }) => (
                <div className="text-xs font-mono text-muted-foreground">
                    <div>{row.original.fileType || "—"}</div>
                    <div>{row.original.fileSize || ""}</div>
                </div>
            ),
        },
        {
            accessorKey: "published",
            header: "Status",
            cell: ({ row }) => (
                <Badge variant={row.original.published ? "default" : "secondary"}>
                    {row.original.published ? "Published" : "Draft"}
                </Badge>
            ),
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 text-foreground">
                            Actions <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-background text-foreground border border-input">
                        <DropdownMenuItem className="cursor-pointer" onClick={() => openEdit(row.original)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer" onClick={() => window.open(row.original.fileUrl, "_blank")}>
                            <ExternalLink className="w-3 h-3 mr-1" /> Open File
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-500" onClick={async () => {
                            if (!confirm("Delete this download?")) return;
                            await deleteDownload(row.original.id);
                            setData(prev => prev.filter(d => d.id !== row.original.id));
                            toast.success("Deleted");
                        }}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        }
    ];

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    if (!isMounted) return <div className="p-8 text-center text-muted-foreground animate-pulse">Loading downloads...</div>;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Button onClick={() => openEdit()} className="bg-primary shadow-md">
                    <Plus className="mr-2 h-4 w-4" /> Add Download
                </Button>
            </div>

            <div className="rounded-md border bg-card text-card-foreground shadow overflow-hidden">
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <Table>
                        <TableHeader className="bg-muted">
                            {table.getHeaderGroups().map(hg => (
                                <TableRow key={hg.id}>
                                    {hg.headers.map(h => (
                                        <TableHead key={h.id}>
                                            {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            <SortableContext items={data.map(d => d.id)} strategy={verticalListSortingStrategy}>
                                {table.getRowModel().rows.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="text-center py-12 text-muted-foreground">
                                            No downloads yet. Click "Add Download" to create one.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    table.getRowModel().rows.map(row => (
                                        <SortableRow key={row.id} row={row} flexRender={flexRender} />
                                    ))
                                )}
                            </SortableContext>
                        </TableBody>
                    </Table>
                </DndContext>
            </div>

            {/* Edit / Create Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="w-[95vw] md:max-w-[65vw] max-h-[90vh] overflow-y-auto bg-background text-foreground md:p-8">
                    <DialogHeader>
                        <DialogTitle className="text-2xl text-foreground">
                            {editingItem ? "Edit Download" : "Add Download"}
                        </DialogTitle>
                    </DialogHeader>

                    <Tabs defaultValue="greek" className="w-full py-4">
                        <TabsList className="grid w-full grid-cols-2 mb-4 max-w-[400px]">
                            <TabsTrigger value="greek">Greek Content</TabsTrigger>
                            <TabsTrigger value="english">English Content</TabsTrigger>
                        </TabsList>

                        {/* GREEK TAB */}
                        <TabsContent value="greek" className="space-y-4">
                            <div>
                                <Label className="text-foreground font-bold">Name (Greek) *</Label>
                                <Input className="bg-background mt-1" value={formData.nameEL}
                                    onChange={e => setFormData({ ...formData, nameEL: e.target.value })} />
                            </div>
                            <div>
                                <Label className="text-foreground font-bold">Description (Greek)</Label>
                                <Textarea className="bg-background mt-1" rows={4} value={formData.descriptionEL}
                                    onChange={e => setFormData({ ...formData, descriptionEL: e.target.value })} />
                            </div>
                        </TabsContent>

                        {/* ENGLISH TAB */}
                        <TabsContent value="english" className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <Label className="text-foreground font-bold">Name (English)</Label>
                                    <Button type="button" variant="ghost" size="sm" className="h-6 text-xs gap-1 text-indigo-600 hover:text-indigo-700"
                                        onClick={() => translateField(formData.nameEL, "nameEN")}>
                                        <Wand2 className="w-3 h-3" /> Auto-translate
                                    </Button>
                                </div>
                                <Input className="bg-background mt-1" value={formData.nameEN}
                                    onChange={e => setFormData({ ...formData, nameEN: e.target.value })} />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <Label className="text-foreground font-bold">Description (English)</Label>
                                    <Button type="button" variant="ghost" size="sm" className="h-6 text-xs gap-1 text-indigo-600 hover:text-indigo-700"
                                        onClick={() => translateField(formData.descriptionEL, "descriptionEN")}>
                                        <Wand2 className="w-3 h-3" /> Auto-translate
                                    </Button>
                                </div>
                                <Textarea className="bg-background mt-1" rows={4} value={formData.descriptionEN}
                                    onChange={e => setFormData({ ...formData, descriptionEN: e.target.value })} />
                            </div>
                        </TabsContent>
                    </Tabs>

                    {/* FILE UPLOAD SECTION */}
                    <div className="space-y-4 border-t pt-4">
                        <Label className="text-foreground font-bold block">File Upload</Label>

                        <div className="border-2 border-dashed border-input rounded-xl p-6 text-center bg-muted/20 relative">
                            <FileDown className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground mb-3">Upload any file (PDF, DOCX, XLSX, ZIP...)</p>
                            <Label className="cursor-pointer bg-primary text-primary-foreground px-4 py-2 rounded-md font-bold hover:bg-primary/90 transition flex items-center gap-2 w-fit mx-auto">
                                <Upload className="w-4 h-4" />
                                {isUploading ? "Uploading..." : "Choose File"}
                                <input type="file" className="hidden"
                                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar,.csv,.txt,.png,.jpg,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,*"
                                    disabled={isUploading}
                                    onChange={e => { if (e.target.files?.[0]) handleFileUpload(e.target.files[0]); }} />
                            </Label>
                            {formData.fileUrl && (
                                <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800 text-left">
                                    <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-1">✓ File uploaded to CDN</p>
                                    <a href={formData.fileUrl} target="_blank" rel="noopener noreferrer"
                                        className="text-xs text-blue-600 hover:underline break-all flex items-center gap-1">
                                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                                        {formData.fileUrl}
                                    </a>
                                    {formData.fileSize && <p className="text-xs text-muted-foreground mt-1">Size: {formData.fileSize} · {formData.fileType}</p>}
                                </div>
                            )}
                        </div>

                        {/* Manual URL input */}
                        <div>
                            <Label className="text-foreground text-xs font-bold">Or paste file URL manually</Label>
                            <Input className="bg-background mt-1 text-xs font-mono" value={formData.fileUrl}
                                onChange={e => setFormData({ ...formData, fileUrl: e.target.value })}
                                placeholder="https://cdn.example.com/file.pdf" />
                        </div>
                    </div>

                    {/* META FIELDS */}
                    <div className="grid grid-cols-2 gap-4 border-t pt-4">
                        <div>
                            <Label className="text-foreground font-bold text-xs">Category</Label>
                            <Input className="bg-background mt-1 text-xs" value={formData.category}
                                placeholder="e.g. ERP, Guides, Whitepapers"
                                onChange={e => setFormData({ ...formData, category: e.target.value })} />
                        </div>
                        <div>
                            <Label className="text-foreground font-bold text-xs">Order</Label>
                            <Input type="number" className="bg-background mt-1 text-xs" value={formData.order}
                                onChange={e => setFormData({ ...formData, order: Number(e.target.value) })} />
                        </div>
                        <div>
                            <Label className="text-foreground font-bold text-xs">File Size (auto-filled)</Label>
                            <Input className="bg-background mt-1 text-xs" value={formData.fileSize}
                                onChange={e => setFormData({ ...formData, fileSize: e.target.value })} />
                        </div>
                        <div>
                            <Label className="text-foreground font-bold text-xs">File Type (auto-filled)</Label>
                            <Input className="bg-background mt-1 text-xs" value={formData.fileType}
                                onChange={e => setFormData({ ...formData, fileType: e.target.value })} />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <Switch checked={formData.published} onCheckedChange={c => setFormData({ ...formData, published: c })} />
                        <Label className="text-foreground font-bold">Published</Label>
                    </div>

                    <div className="flex justify-end pt-4 mt-2 border-t">
                        <Button disabled={isSaving} onClick={handleSave}>
                            {isSaving ? <RefreshCcw className="h-4 w-4 animate-spin mr-2" /> : null}
                            Save Download
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
