"use client";

import * as React from "react";
import { toast } from "sonner";
import { ColumnDef } from "@tanstack/react-table";
import {
    GripVertical,
    Plus,
    ChevronDown,
    RefreshCcw,
    Wand2,
    Upload,
    FileDown,
    Trash2,
    Edit,
    ExternalLink,
    Search,
    FileText,
    Shield,
    Globe,
    Zap,
    Rocket,
    CheckCircle2,
    Target,
    Database,
    CloudDownload,
    FileArchive,
    FileCode,
    FileType,
    Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createDownload, updateDownload, deleteDownload, updateDownloadOrder } from "@/app/lib/actions/download";
import { GenericDataTable } from "../shared/generic-data-table";

type Download = {
    id: string; nameEL: string; nameEN?: string | null;
    descriptionEL?: string | null; descriptionEN?: string | null;
    fileUrl: string; fileSize?: string | null; fileType?: string | null;
    category?: string | null; published: boolean; order: number; createdAt: Date;
};

const EMPTY_FORM = {
    nameEL: "", nameEN: "", descriptionEL: "", descriptionEN: "",
    fileUrl: "", fileSize: "", fileType: "", category: "",
    published: true, order: 0,
};

export function DataTableDownloads({ data: initialData }: { data: Download[] }) {
    const [data, setData] = React.useState<Download[]>(initialData || []);
    const [isMounted, setIsMounted] = React.useState(false);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const [editingItem, setEditingItem] = React.useState<Download | null>(null);
    const [isSaving, setIsSaving] = React.useState(false);
    const [isUploading, setIsUploading] = React.useState(false);
    const [translating, setTranslating] = React.useState(false);
    const [formData, setFormData] = React.useState({ ...EMPTY_FORM });

    React.useEffect(() => { setIsMounted(true); }, []);

    const openEdit = (item?: Download) => {
        if (item) {
            setEditingItem(item);
            setFormData({
                nameEL: item.nameEL || "", nameEN: item.nameEN || "",
                descriptionEL: item.descriptionEL || "", descriptionEN: item.descriptionEN || "",
                fileUrl: item.fileUrl || "", fileSize: item.fileSize || "",
                fileType: item.fileType || "", category: item.category || "",
                published: item.published, order: item.order,
            });
        } else {
            setEditingItem(null);
            setFormData({ ...EMPTY_FORM, order: data.length });
        }
        setIsDialogOpen(true);
    };

    const handleFileUpload = async (file: File) => {
        setIsUploading(true);
        const tid = toast.loading("Syndicating file to global edge nodes...");
        try {
            const fd = new FormData(); fd.append("file", file);
            const res = await fetch("/api/admin/downloads/upload", { method: "POST", body: fd });
            const d = await res.json();
            if (!res.ok) throw new Error(d.error);
            setFormData(prev => ({ ...prev, fileUrl: d.url, fileSize: d.fileSize || prev.fileSize, fileType: d.fileType || prev.fileType }));
            toast.success("Binary Asset Deployed", { id: tid });
        } catch (err: any) { toast.error(err.message, { id: tid }); }
        finally { setIsUploading(false); }
    };

    const runAiTranslation = async () => {
        setTranslating(true);
        const tid = toast.loading("AI is localizing asset metadata...");
        try {
            const res = await fetch("/api/admin/translate", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: JSON.stringify({ name: formData.nameEL, desc: formData.descriptionEL }), targetLang: "English" }),
            });
            const d = await res.json();
            if (!res.ok) throw new Error(d.error);
            const parsed = JSON.parse(d.translated);
            setFormData(prev => ({ ...prev, nameEN: parsed.name, descriptionEN: parsed.desc }));
            toast.success("Metadata Localized", { id: tid });
        } catch (e: any) { toast.error(e.message, { id: tid }); }
        finally { setTranslating(false); }
    };

    const handleSave = async () => {
        if (!formData.nameEL.trim()) return toast.error("Asset name is required");
        if (!formData.fileUrl.trim()) return toast.error("Binary link is required");
        setIsSaving(true);
        try {
            const payload = { ...formData, order: Number(formData.order) || 0 };
            if (editingItem) {
                const updated = await updateDownload(editingItem.id, payload as any);
                setData(prev => prev.map(d => d.id === updated.id ? updated as any : d));
                toast.success("Asset parameters updated");
            } else {
                const created = await createDownload(payload as any);
                setData(prev => [...prev, created as any]);
                toast.success("New binary asset cataloged");
            }
            setIsDialogOpen(false);
        } catch (err: any) { toast.error(err.message); }
        finally { setIsSaving(false); }
    };

    const handleReorder = async (newData: Download[]) => {
        setData(newData);
        try { await updateDownloadOrder(newData.map(d => d.id)); toast.success("Repository hierarchy updated"); }
        catch { toast.error("Reorder synchronization failed"); }
    };

    const columns: ColumnDef<Download>[] = [
        { id: "drag", header: "", cell: () => <GripVertical className="h-4 w-4 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" />, size: 40 },
        {
            accessorKey: "nameEL",
            header: "Binary Repository",
            cell: ({ row }) => (
                <div className="flex items-center gap-4 py-1">
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center shadow-sm">
                        <FileText className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-sm text-zinc-800 dark:text-zinc-200">{row.original.nameEL}</span>
                        <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="bg-zinc-800 text-white rounded-xl text-[8px] font-black uppercase tracking-widest px-2 py-0.5">{row.original.category || 'General'}</Badge>
                            <span className="text-[9px] font-black text-zinc-300 uppercase italic">/ {row.original.fileType}</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "volumetric",
            header: "Data Magnitude",
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-zinc-300" />
                    <span className="text-xs font-mono font-bold text-zinc-500">{row.original.fileSize || 'N/A'}</span>
                </div>
            )
        },
        {
            accessorKey: "published",
            header: "Cloud Status",
            cell: ({ row }) => row.original.published ? (
                <Badge className="bg-emerald-500/10 text-emerald-600 border-none text-[9px] font-black uppercase tracking-widest px-3 py-1">Edge Active</Badge>
            ) : (
                <Badge variant="outline" className="text-zinc-300 border-zinc-100 text-[9px] font-black uppercase tracking-widest px-3 py-1 uppercase">Local Cache</Badge>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={e => e.stopPropagation()}>
                        <Button variant="outline" size="sm" className="h-9 bg-zinc-800 text-white border-none font-bold hover:bg-zinc-700 rounded-xl px-4">
                            Actions <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px] rounded-2xl shadow-2xl p-2 border-zinc-100">
                        <DropdownMenuItem className="h-12 rounded-xl flex items-center gap-3 cursor-pointer" onClick={() => openEdit(row.original)}>
                            <Edit className="w-4 h-4 mr-2" /> Modify Scope
                        </DropdownMenuItem>
                        <DropdownMenuItem className="h-12 rounded-xl flex items-center gap-3 cursor-pointer" onClick={() => window.open(row.original.fileUrl, "_blank")}>
                            <CloudDownload className="w-4 h-4 mr-2" /> Retrieve Binary
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => { if (confirm("Decommission this asset?")) deleteDownload(row.original.id).then(() => setData(d => d.filter(x => x.id !== row.original.id))) }} className="h-12 rounded-xl text-red-500 focus:bg-red-50 focus:text-red-600 flex items-center gap-3 cursor-pointer">
                            <Trash2 className="w-4 h-4 mr-2" /> Purge Asset
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ];

    if (!isMounted) return null;

    return (
        <div className="space-y-4">
            <GenericDataTable
                columns={columns} data={data} searchPlaceholder="Locate binary asset..." searchColumn="nameEL"
                onAddClick={() => openEdit()} addButtonLabel="Catalog Asset"
                isSortable={true} onReorder={handleReorder}
                renderExpandedRow={(item) => (
                    <div className="py-10 px-10 bg-[#f8fafc] dark:bg-zinc-950/50 rounded-[40px] border border-zinc-200 dark:border-zinc-800 shadow-inner grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-3"><Database className="w-4 h-4" /> Repository Analytics</h4>
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border shadow-sm space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-20 rounded-3xl bg-zinc-800 flex items-center justify-center text-white shadow-xl">
                                        <FileArchive className="w-10 h-10" />
                                    </div>
                                    <div className="space-y-1">
                                        <h5 className="text-2xl font-black text-zinc-800 dark:text-zinc-100 tracking-tighter">{item.nameEL}</h5>
                                        <div className="flex items-center gap-2">
                                            <Badge className="bg-indigo-500 text-white border-none rounded-xl px-4 py-1 text-[8px] font-black uppercase tracking-widest">{item.category || 'Global Binary'}</Badge>
                                            <span className="text-xs font-mono font-bold text-zinc-400 tracking-tighter">{item.fileSize} / {item.fileType}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm font-medium leading-[1.8] text-zinc-500 italic pb-2 border-b border-zinc-50">"{item.descriptionEL || "No strategic narrative provided for this repository."}"</p>
                                <Button variant="outline" className="w-full h-14 rounded-2xl border-zinc-200 text-zinc-600 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-zinc-50 transition-all flex items-center justify-center gap-3 shadow-sm" onClick={() => window.open(item.fileUrl, "_blank")}>
                                    <CloudDownload className="w-5 h-5 text-indigo-500" /> Execute Retrieval Protocol
                                </Button>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-3"><Globe className="w-4 h-4" /> Global Localization</h4>
                            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border shadow-sm min-h-[220px] flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h5 className="text-xl font-black text-zinc-800 dark:text-zinc-100 tracking-tighter">{item.nameEN || "Sync Draft Meta"}</h5>
                                        <Badge variant="outline" className="border-zinc-100 rounded-full px-3 py-1 text-[8px] font-black uppercase">EN_LOC</Badge>
                                    </div>
                                    <p className="text-sm font-medium leading-[1.8] text-zinc-400">{item.descriptionEN || "Global narrative mapping draft pending edge synchronization and localization check."}</p>
                                </div>
                                <div className="pt-6 border-t border-zinc-50 flex items-center justify-between text-[10px] font-black text-zinc-300 uppercase tracking-widest italic">
                                    <span>Last verified: {new Date(item.createdAt).toLocaleDateString()}</span>
                                    <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> CDN Synchronized</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-xl">
                    <DialogHeader className="bg-zinc-800 p-10">
                        <div className="flex items-center justify-between">
                            <div>
                                <DialogTitle className="text-3xl font-black text-white tracking-tighter mb-2">{editingItem ? "Refine Binary Metadata" : "Initialize Asset Repository"}</DialogTitle>
                                <DialogDescription className="text-zinc-400 font-medium">Configure cloud distribution parameters and localization mapping.</DialogDescription>
                            </div>
                            <Button size="lg" onClick={runAiTranslation} disabled={translating} className="bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-[0.2em] px-10 rounded-2xl h-14 shadow-xl shadow-indigo-600/20 transition-all active:scale-95">
                                {translating ? <RefreshCcw className="w-5 h-5 animate-spin mr-3" /> : <Zap className="w-5 h-5 mr-3" />} Metadata Sync
                            </Button>
                        </div>
                    </DialogHeader>

                    <div className="p-10 bg-[#f8fafc] dark:bg-zinc-950 max-h-[70vh] overflow-y-auto scrollbar-hide">
                        <Tabs defaultValue="greek">
                            <TabsList className="bg-zinc-200/50 dark:bg-zinc-800/50 p-1.5 h-12 rounded-[24px] mb-10 w-fit gap-2 border">
                                <TabsTrigger value="greek" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 font-black text-[10px] uppercase tracking-widest px-8 rounded-2xl">🇬🇷 Repository (GR)</TabsTrigger>
                                <TabsTrigger value="english" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 font-black text-[10px] uppercase tracking-widest px-8 rounded-2xl">🇬🇧 Localization (EN)</TabsTrigger>
                                <TabsTrigger value="infrastructure" className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 font-black text-[10px] uppercase tracking-widest px-8 rounded-2xl">⚡ Deployment</TabsTrigger>
                            </TabsList>

                            <TabsContent value="greek" className="space-y-8 animate-in fade-in duration-300">
                                <div className="space-y-4">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Binary Namespace (GR)</Label>
                                    <Input className="h-14 rounded-2xl text-lg font-bold border-zinc-200 shadow-sm" placeholder="Financial Report 2024..." value={formData.nameEL} onChange={e => setFormData({ ...formData, nameEL: e.target.value })} />
                                </div>
                                <div className="space-y-4">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Strategic Narrative (GR)</Label>
                                    <Textarea rows={6} className="rounded-[32px] border-zinc-200 shadow-sm p-8 text-sm leading-relaxed" placeholder="Explain the significance of this binary asset..." value={formData.descriptionEL} onChange={e => setFormData({ ...formData, descriptionEL: e.target.value })} />
                                </div>
                            </TabsContent>

                            <TabsContent value="english" className="space-y-8 animate-in fade-in duration-300">
                                <div className="space-y-4">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Global Namespace (EN)</Label>
                                    <Input className="h-14 rounded-2xl text-lg font-bold border-zinc-200 shadow-sm text-indigo-600 italic" value={formData.nameEN || ''} onChange={e => setFormData({ ...formData, nameEN: e.target.value })} />
                                </div>
                                <div className="space-y-4">
                                    <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Global Narrative (EN)</Label>
                                    <Textarea rows={6} className="rounded-[32px] border-zinc-200 shadow-sm p-8 text-sm leading-relaxed" value={formData.descriptionEN || ''} onChange={e => setFormData({ ...formData, descriptionEN: e.target.value })} />
                                </div>
                            </TabsContent>

                            <TabsContent value="infrastructure" className="space-y-8 animate-in fade-in duration-300">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Binary Integration</Label>
                                        <div className="border-2 border-dashed rounded-[32px] p-12 text-center bg-white shadow-sm border-zinc-100 hover:border-indigo-400 transition-colors group">
                                            <CloudDownload className="w-12 h-12 mx-auto mb-6 text-zinc-200 group-hover:text-indigo-400 transition-colors" />
                                            <Label className="cursor-pointer bg-zinc-800 text-white px-10 h-14 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-900 transition-all flex items-center justify-center shadow-xl shadow-zinc-800/20 active:scale-95">
                                                {isUploading ? <Loader2 className="w-5 h-5 animate-spin mr-3" /> : <Plus className="w-5 h-5 mr-3" />}
                                                Deploy To CDN
                                                <input type="file" className="hidden" disabled={isUploading} onChange={e => { if (e.target.files?.[0]) handleFileUpload(e.target.files[0]); }} />
                                            </Label>
                                            {formData.fileUrl && <div className="mt-8 p-4 bg-emerald-50 text-[10px] font-mono font-bold text-emerald-600 rounded-2xl border border-emerald-100 truncate shadow-inner">{formData.fileUrl}</div>}
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <Label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Manual Interface URI</Label>
                                            <Input className="h-14 rounded-2xl border-zinc-200 font-mono text-xs text-indigo-500 shadow-sm" placeholder="https://cdn.dgsoft.gr/..." value={formData.fileUrl} onChange={e => setFormData({ ...formData, fileUrl: e.target.value })} />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <Label className="text-[10px] font-black uppercase text-zinc-400">Asset Domain</Label>
                                                <Input className="h-12 rounded-xl border-zinc-200" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} />
                                            </div>
                                            <div className="space-y-3">
                                                <Label className="text-[10px] font-black uppercase text-zinc-400">Hierarchy</Label>
                                                <Input type="number" className="h-12 rounded-xl border-zinc-200" value={formData.order} onChange={e => setFormData({ ...formData, order: Number(e.target.value) })} />
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-[32px] border shadow-sm flex items-center justify-between">
                                            <div className="space-y-1">
                                                <h4 className="text-[10px] font-black uppercase text-zinc-800 dark:text-zinc-200 tracking-tighter">Public Visibility</h4>
                                                <p className="text-[9px] text-zinc-400 font-medium tracking-tight">Broadcast binary metadata to global repository.</p>
                                            </div>
                                            <Switch checked={formData.published} onCheckedChange={v => setFormData({ ...formData, published: v })} className="data-[state=checked]:bg-emerald-500" />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="p-10 border-t bg-white dark:bg-zinc-950 flex justify-end gap-4 rounded-b-[40px]">
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)} className="font-black text-xs uppercase tracking-[0.2em] text-zinc-400">Abort Protocol</Button>
                        <Button disabled={isSaving} onClick={handleSave} className="bg-zinc-800 text-white font-black text-xs uppercase tracking-[0.2em] h-14 px-12 rounded-[20px] shadow-2xl hover:bg-zinc-900 transition-all active:scale-95">
                            {isSaving ? <RefreshCcw className="w-5 h-5 animate-spin" /> : "Execute Cataloging"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
