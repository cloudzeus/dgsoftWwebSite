"use client";

import * as React from "react";
import { toast } from "sonner";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DndContext, closestCenter, PointerSensor, KeyboardSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
    GripVertical, Plus, ChevronDown, RefreshCcw, Wand2, X,
    ExternalLink, ChevronRight, Users, Mail, Phone, FileText, Calendar
} from "lucide-react";
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
import { createPosition, updatePosition, deletePosition, updatePositionOrder, updateCvStatus, deleteCvApplication } from "@/app/lib/actions/career";

type CvApplication = {
    id: string; firstName: string; lastName: string; phone?: string | null;
    email: string; cvUrl: string; coverLetter?: string | null;
    status: string; createdAt: Date;
};

type Position = {
    id: string; slug: string;
    titleEL: string; titleEN?: string | null;
    descriptionEL?: string | null; descriptionEN?: string | null;
    departmentEL?: string | null; departmentEN?: string | null;
    cityEL?: string | null; cityEN?: string | null;
    typeEL?: string | null; typeEN?: string | null;
    dutiesEL?: any | null; dutiesEN?: any | null;
    skillsEL?: any | null; skillsEN?: any | null;
    published: boolean; order: number;
    _count?: { applications: number };
    applications: CvApplication[];
};

const EMPTY = {
    titleEL: "", titleEN: "", descriptionEL: "", descriptionEN: "",
    departmentEL: "", departmentEN: "", cityEL: "", cityEN: "",
    typeEL: "", typeEN: "",
    dutiesEL: [] as string[], dutiesEN: [] as string[],
    skillsEL: [] as string[], skillsEN: [] as string[],
    published: true, order: 0, slug: "",
};

const CV_STATUS_COLORS: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
    NEW: "default", REVIEWED: "secondary", SHORTLISTED: "outline", REJECTED: "destructive",
};

async function translate(text: string): Promise<string> {
    if (!text.trim()) return text;
    const res = await fetch("/api/admin/translate", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, targetLang: "English" }),
    });
    const d = await res.json();
    if (!res.ok) throw new Error(d.error || "Translation failed");
    return d.translated || text;
}

async function translateAll(form: typeof EMPTY, setForm: (d: typeof EMPTY) => void) {
    const id = "tr-all";
    toast.loading("Translating all fields...", { id });
    try {
        const [titleEN, descriptionEN, departmentEN, cityEN, typeEN, dutiesEN, skillsEN] = await Promise.all([
            form.titleEL ? translate(form.titleEL) : Promise.resolve(form.titleEN),
            form.descriptionEL ? translate(form.descriptionEL) : Promise.resolve(form.descriptionEN),
            form.departmentEL ? translate(form.departmentEL) : Promise.resolve(form.departmentEN),
            form.cityEL ? translate(form.cityEL) : Promise.resolve(form.cityEN),
            form.typeEL ? translate(form.typeEL) : Promise.resolve(form.typeEN),
            form.dutiesEL?.length ? Promise.all(form.dutiesEL.map(d => translate(d))) : Promise.resolve(form.dutiesEN),
            form.skillsEL?.length ? Promise.all(form.skillsEL.map(s => translate(s))) : Promise.resolve(form.skillsEN),
        ]);
        setForm({ ...form, titleEN: titleEN || "", descriptionEN: descriptionEN || "", departmentEN: departmentEN || "", cityEN: cityEN || "", typeEN: typeEN || "", dutiesEN: dutiesEN as string[] || [], skillsEN: skillsEN as string[] || [] });
        toast.success("All fields translated!", { id });
    } catch (e: any) { toast.error(e.message, { id }); }
}

function generateSlug(t: string) {
    return t.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

function ArrayInput({ label, values, onChange }: { label: string; values: string[]; onChange: (v: string[]) => void }) {
    const [draft, setDraft] = React.useState("");
    return (
        <div>
            {label && <Label className="text-foreground font-bold text-xs mb-1 block">{label}</Label>}
            <div className="flex gap-2 mb-2">
                <Input className="bg-muted/40 border-input text-foreground text-xs h-8" value={draft} placeholder="Add item → Enter"
                    onChange={e => setDraft(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter" && draft.trim()) { onChange([...values, draft.trim()]); setDraft(""); e.preventDefault(); } }} />
                <Button type="button" size="sm" variant="outline" className="h-8 px-3 text-foreground" onClick={() => { if (draft.trim()) { onChange([...values, draft.trim()]); setDraft(""); } }}>Add</Button>
            </div>
            <div className="flex flex-wrap gap-2">
                {values.map((v, i) => (
                    <span key={i} className="flex items-center gap-1 px-2 py-1 bg-muted rounded-full text-xs font-medium">
                        {v}
                        <button onClick={() => onChange(values.filter((_, j) => j !== i))} className="text-muted-foreground hover:text-destructive ml-1"><X className="w-3 h-3" /></button>
                    </span>
                ))}
            </div>
        </div>
    );
}

// ── CV Applications sub-panel ──────────────────────────────────────────────
function CvApplicationsPanel({ positionId, applications: init, positionTitle }: { positionId: string; applications: CvApplication[]; positionTitle: string }) {
    const [apps, setApps] = React.useState(init);
    if (apps.length === 0)
        return <p className="text-xs text-muted-foreground py-4 text-center italic">No applications yet for this position.</p>;
    return (
        <div className="mt-4 border border-border rounded-xl overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center justify-between">
                <span className="text-xs font-bold text-foreground">{positionTitle} — CV Applications ({apps.length})</span>
            </div>
            <div className="divide-y divide-border">
                {apps.map(app => (
                    <div key={app.id} className="flex flex-wrap items-center gap-4 px-4 py-3 bg-card text-card-foreground hover:bg-muted/50 text-sm">
                        <div className="flex-1 min-w-[180px]">
                            <div className="font-medium text-foreground">{app.firstName} {app.lastName}</div>
                            <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{app.email}</span>
                                {app.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{app.phone}</span>}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {new Date(app.createdAt).toLocaleDateString("el-GR")}
                        </div>
                        <Badge variant={CV_STATUS_COLORS[app.status] || "default"} className="text-xs">{app.status}</Badge>
                        <div className="flex items-center gap-1">
                            <Button size="sm" variant="outline" className="h-7 px-2 text-xs gap-1" onClick={() => window.open(app.cvUrl, "_blank")}>
                                <FileText className="w-3 h-3" /> CV
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button size="sm" variant="ghost" className="h-7 px-2"><ChevronDown className="w-3 h-3" /></Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="bg-zinc-800 text-white border border-zinc-700 text-xs">
                                    {["REVIEWED", "SHORTLISTED", "REJECTED"].map(s => (
                                        <DropdownMenuItem key={s} onClick={async () => {
                                            await updateCvStatus(app.id, s);
                                            setApps(prev => prev.map(a => a.id === app.id ? { ...a, status: s } : a));
                                            toast.success(`Marked as ${s}`);
                                        }}>Mark {s}</DropdownMenuItem>
                                    ))}
                                    <DropdownMenuItem className="text-red-500" onClick={async () => {
                                        if (!confirm("Delete application?")) return;
                                        await deleteCvApplication(app.id);
                                        setApps(prev => prev.filter(a => a.id !== app.id));
                                        toast.success("Deleted");
                                    }}>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Sortable Row with expandable CVs ──────────────────────────────────────
function SortableRow({ row, expandedId, setExpandedId }: { row: any; expandedId: string | null; setExpandedId: (id: string | null) => void }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: row.original.id });
    const isExpanded = expandedId === row.original.id;
    return (
        <>
            <TableRow ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition }} className="hover:bg-muted/50">
                {row.getVisibleCells().map((cell: any) => (
                    <TableCell key={cell.id} {...(cell.column.id === "drag" ? { ...attributes, ...listeners } : {})} className="p-2 align-middle">
                        {cell.column.id === "expand"
                            ? <button onClick={() => setExpandedId(isExpanded ? null : row.original.id)} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                                <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                                <Users className="w-3 h-3" />
                                <span>{row.original._count?.applications ?? 0}</span>
                            </button>
                            : flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                ))}
            </TableRow>
            {isExpanded && (
                <TableRow>
                    <TableCell colSpan={10} className="bg-muted/20 px-6 py-2">
                        <CvApplicationsPanel
                            positionId={row.original.id}
                            applications={row.original.applications || []}
                            positionTitle={row.original.titleEL}
                        />
                    </TableCell>
                </TableRow>
            )}
        </>
    );
}

// ── Main component ─────────────────────────────────────────────────────────
export function DataTablePositions({ data: init }: { data: Position[] }) {
    const [data, setData] = React.useState<Position[]>(init || []);
    const [isMounted, setIsMounted] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [editing, setEditing] = React.useState<Position | null>(null);
    const [saving, setSaving] = React.useState(false);
    const [form, setForm] = React.useState({ ...EMPTY });
    const [expandedId, setExpandedId] = React.useState<string | null>(null);

    React.useEffect(() => { setIsMounted(true); }, []);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const openEdit = (item?: Position) => {
        if (item) {
            setEditing(item);
            setForm({
                titleEL: item.titleEL || "", titleEN: item.titleEN || "",
                descriptionEL: item.descriptionEL || "", descriptionEN: item.descriptionEN || "",
                departmentEL: item.departmentEL || "", departmentEN: item.departmentEN || "",
                cityEL: item.cityEL || "", cityEN: item.cityEN || "",
                typeEL: item.typeEL || "", typeEN: item.typeEN || "",
                dutiesEL: (item.dutiesEL as string[]) || [], dutiesEN: (item.dutiesEN as string[]) || [],
                skillsEL: (item.skillsEL as string[]) || [], skillsEN: (item.skillsEN as string[]) || [],
                published: item.published, order: item.order, slug: item.slug,
            });
        } else {
            setEditing(null);
            setForm({ ...EMPTY, order: data.length });
        }
        setOpen(true);
    };

    const handleSave = async () => {
        if (!form.titleEL.trim()) { toast.error("Greek title is required"); return; }
        setSaving(true);
        toast.loading("Saving...", { id: "pos-save" });
        try {
            const slug = form.slug || generateSlug(form.titleEL);
            const payload = { ...form, slug, order: Number(form.order) };
            if (editing) {
                const updated = await updatePosition(editing.id, payload);
                setData(prev => prev.map(d => d.id === editing.id ? { ...d, ...updated } : d));
            } else {
                const created = await createPosition(payload);
                setData(prev => [...prev, { ...(created as any), applications: [] }]);
            }
            toast.success("Saved!", { id: "pos-save" });
            setOpen(false);
        } catch (e: any) { toast.error(e.message, { id: "pos-save" }); }
        finally { setSaving(false); }
    };

    const handleDragEnd = async (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIdx = data.findIndex(d => d.id === active.id);
            const newIdx = data.findIndex(d => d.id === over?.id);
            const newData = arrayMove(data, oldIdx, newIdx);
            setData(newData);
            try { await updatePositionOrder(newData.map(d => d.id)); toast.success("Reordered"); }
            catch { toast.error("Reorder failed"); setData(data); }
        }
    };

    const translateField = async (src: keyof typeof form, dst: keyof typeof form) => {
        const text = form[src] as string;
        if (!text) return;
        const id = `tr-${dst}`;
        toast.loading("Translating...", { id });
        try {
            const translated = await translate(text);
            setForm(prev => ({ ...prev, [dst]: translated }));
            toast.success("Translated!", { id });
        } catch (e: any) { toast.error(e.message, { id }); }
    };

    const columns: ColumnDef<Position>[] = [
        { id: "drag", header: "", cell: () => <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" /> },
        { id: "expand", header: "CVs", cell: () => null }, // rendered in SortableRow
        { accessorKey: "order", header: "Order", cell: ({ row }) => <span className="text-xs font-mono text-muted-foreground">{row.original.order}</span> },
        {
            accessorKey: "titleEL", header: "Position",
            cell: ({ row }) => (
                <div>
                    <div className="font-medium text-foreground">{row.original.titleEL}</div>
                    {row.original.titleEN && <div className="text-xs text-muted-foreground">{row.original.titleEN}</div>}
                </div>
            )
        },
        { accessorKey: "departmentEL", header: "Dept", cell: ({ row }) => <span className="text-xs">{row.original.departmentEL || "—"}</span> },
        { accessorKey: "cityEL", header: "City", cell: ({ row }) => <span className="text-xs">{row.original.cityEL || "—"}</span> },
        { accessorKey: "typeEL", header: "Type", cell: ({ row }) => <Badge variant="outline" className="text-xs">{row.original.typeEL || "—"}</Badge> },
        {
            accessorKey: "published", header: "Status",
            cell: ({ row }) => (
                <Badge variant={row.original.published ? "default" : "secondary"}>
                    {row.original.published ? "✓ Active" : "Inactive"}
                </Badge>
            )
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="default" size="sm" className="h-8 bg-zinc-800 text-white hover:bg-zinc-700 border-none">Actions <ChevronDown className="h-3 w-3 ml-1" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-zinc-800 text-white border border-zinc-700">
                        <DropdownMenuItem className="cursor-pointer hover:bg-accent" onClick={() => openEdit(row.original)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer hover:bg-accent" onClick={() => setExpandedId(expandedId === row.original.id ? null : row.original.id)}>
                            {expandedId === row.original.id ? "Hide" : "View"} CVs ({row.original._count?.applications ?? 0})
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500" onClick={async () => {
                            if (!confirm("Delete this position and all its applications?")) return;
                            await deletePosition(row.original.id);
                            setData(prev => prev.filter(d => d.id !== row.original.id));
                            toast.success("Deleted");
                        }}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ];

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    if (!isMounted) return <div className="p-8 text-center text-muted-foreground animate-pulse">Loading...</div>;

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <Button onClick={() => openEdit()}><Plus className="mr-2 h-4 w-4" />Add Position</Button>
                <p className="text-xs text-muted-foreground">Click the <Users className="inline w-3 h-3" /> count to expand CVs per position</p>
            </div>

            <div className="rounded-md border bg-card text-card-foreground shadow overflow-hidden">
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <Table>
                        <TableHeader className="bg-muted">
                            {table.getHeaderGroups().map(hg => (
                                <TableRow key={hg.id}>{hg.headers.map(h => <TableHead key={h.id}>{!h.isPlaceholder && flexRender(h.column.columnDef.header, h.getContext())}</TableHead>)}</TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            <SortableContext items={data.map(d => d.id)} strategy={verticalListSortingStrategy}>
                                {table.getRowModel().rows.length === 0
                                    ? <TableRow><TableCell colSpan={columns.length} className="py-16 text-center text-muted-foreground">No positions yet. Click "Add Position" to start.</TableCell></TableRow>
                                    : table.getRowModel().rows.map(row => (
                                        <SortableRow key={row.id} row={row} expandedId={expandedId} setExpandedId={setExpandedId} />
                                    ))}
                            </SortableContext>
                        </TableBody>
                    </Table>
                </DndContext>
            </div>

            {/* Position Form Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="w-[95vw] md:max-w-[70vw] max-h-[92vh] overflow-y-auto bg-card text-card-foreground md:p-8">
                    <DialogHeader>
                        <div className="flex items-center justify-between">
                            <DialogTitle className="text-2xl text-foreground">{editing ? "Edit Position" : "New Position"}</DialogTitle>
                            <Button variant="outline" size="sm" className="gap-1 text-indigo-600 border-indigo-200"
                                onClick={() => translateAll(form, setForm)}>
                                <Wand2 className="w-4 h-4" /> Translate All to English
                            </Button>
                        </div>
                    </DialogHeader>

                    <Tabs defaultValue="greek" className="w-full pt-2">
                        <TabsList className="grid w-full grid-cols-2 max-w-sm mb-4">
                            <TabsTrigger value="greek">🇬🇷 Greek</TabsTrigger>
                            <TabsTrigger value="english">🇬🇧 English</TabsTrigger>
                        </TabsList>

                        <TabsContent value="greek" className="space-y-4">
                            <div>
                                <Label className="font-bold text-foreground">Title (Greek) *</Label>
                                <Input className="bg-muted/40 border-input text-foreground mt-1" value={form.titleEL}
                                    onChange={e => setForm({ ...form, titleEL: e.target.value, slug: form.slug || generateSlug(e.target.value) })} />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { label: "Department", field: "departmentEL" as const },
                                    { label: "City", field: "cityEL" as const },
                                    { label: "Type (e.g. Πλήρης)", field: "typeEL" as const },
                                ].map(({ label, field }) => (
                                    <div key={field}>
                                        <Label className="font-bold text-foreground text-xs">{label}</Label>
                                        <Input className="bg-muted/40 border-input text-foreground mt-1 text-xs" value={form[field] as string}
                                            onChange={e => setForm({ ...form, [field]: e.target.value })} />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Label className="font-bold text-foreground">Description</Label>
                                <Textarea className="bg-muted/40 border-input text-foreground mt-1" rows={4} value={form.descriptionEL}
                                    onChange={e => setForm({ ...form, descriptionEL: e.target.value })} />
                            </div>
                            <ArrayInput label="Duties / Καθήκοντα (Greek)" values={form.dutiesEL} onChange={v => setForm({ ...form, dutiesEL: v })} />
                            <ArrayInput label="Skills / Δεξιότητες (Greek)" values={form.skillsEL} onChange={v => setForm({ ...form, skillsEL: v })} />
                        </TabsContent>

                        <TabsContent value="english" className="space-y-4">
                            {([
                                { label: "Title (English)", src: "titleEL", dst: "titleEN", field: "titleEN" },
                                { label: "Department", src: "departmentEL", dst: "departmentEN", field: "departmentEN" },
                                { label: "City", src: "cityEL", dst: "cityEN", field: "cityEN" },
                                { label: "Type", src: "typeEL", dst: "typeEN", field: "typeEN" },
                            ] as const).map(({ label, src, dst, field }) => (
                                <div key={field}>
                                    <div className="flex justify-between items-center mb-1">
                                        <Label className="font-bold text-foreground text-xs">{label}</Label>
                                        <Button type="button" variant="ghost" size="sm" className="h-6 text-xs gap-1 text-indigo-600"
                                            onClick={() => translateField(src as keyof typeof form, dst as keyof typeof form)}>
                                            <Wand2 className="w-3 h-3" /> Translate
                                        </Button>
                                    </div>
                                    <Input className="bg-muted/40 border-input text-foreground mt-1 text-xs" value={form[field] as string}
                                        onChange={e => setForm({ ...form, [field]: e.target.value })} />
                                </div>
                            ))}
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <Label className="font-bold text-foreground text-xs">Description (English)</Label>
                                    <Button type="button" variant="ghost" size="sm" className="h-6 text-xs gap-1 text-indigo-600"
                                        onClick={() => translateField("descriptionEL", "descriptionEN")}>
                                        <Wand2 className="w-3 h-3" /> Translate
                                    </Button>
                                </div>
                                <Textarea className="bg-muted/40 border-input text-foreground mt-1 text-xs" rows={4} value={form.descriptionEN}
                                    onChange={e => setForm({ ...form, descriptionEN: e.target.value })} />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <Label className="font-bold text-foreground text-xs">Duties (English)</Label>
                                    <Button type="button" variant="ghost" size="sm" className="h-6 text-xs gap-1 text-indigo-600"
                                        onClick={async () => { const t = await Promise.all(form.dutiesEL.map(d => translate(d))); setForm(f => ({ ...f, dutiesEN: t })); toast.success("Done"); }}>
                                        <Wand2 className="w-3 h-3" /> Translate duties
                                    </Button>
                                </div>
                                <ArrayInput label="" values={form.dutiesEN} onChange={v => setForm({ ...form, dutiesEN: v })} />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <Label className="font-bold text-foreground text-xs">Skills (English)</Label>
                                    <Button type="button" variant="ghost" size="sm" className="h-6 text-xs gap-1 text-indigo-600"
                                        onClick={async () => { const t = await Promise.all(form.skillsEL.map(s => translate(s))); setForm(f => ({ ...f, skillsEN: t })); toast.success("Done"); }}>
                                        <Wand2 className="w-3 h-3" /> Translate skills
                                    </Button>
                                </div>
                                <ArrayInput label="" values={form.skillsEN} onChange={v => setForm({ ...form, skillsEN: v })} />
                            </div>
                        </TabsContent>
                    </Tabs>

                    {/* Meta */}
                    <div className="grid grid-cols-3 gap-4 border-t border-border pt-4 mt-2">
                        <div>
                            <Label className="font-bold text-foreground text-xs">Slug (auto-generated)</Label>
                            <Input className="bg-muted/40 border-input text-foreground mt-1 text-xs font-mono" value={form.slug}
                                onChange={e => setForm({ ...form, slug: e.target.value })} />
                        </div>
                        <div>
                            <Label className="font-bold text-foreground text-xs">Order (σειρά εμφάνισης)</Label>
                            <Input type="number" className="bg-muted/40 border-input text-foreground mt-1 text-xs" value={form.order}
                                onChange={e => setForm({ ...form, order: Number(e.target.value) })} />
                        </div>
                        <div className="flex items-end gap-3 pb-1">
                            <Switch checked={form.published} onCheckedChange={c => setForm({ ...form, published: c })} />
                            <div>
                                <Label className="font-bold text-foreground text-xs block">Active / Inactive</Label>
                                <span className="text-xs text-muted-foreground">{form.published ? "✓ Ενεργή" : "Ανενεργή"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t mt-2">
                        <Button disabled={saving} onClick={handleSave}>
                            {saving && <RefreshCcw className="h-4 w-4 animate-spin mr-2" />} Save Position
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
