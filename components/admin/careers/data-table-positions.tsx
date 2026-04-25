"use client";

import * as React from "react";
import { toast } from "sonner";
import { ColumnDef } from "@tanstack/react-table";
import {
    GripVertical,
    Plus,
    ChevronDown,
    RefreshCcw,
    X,
    Users,
    Mail,
    Phone,
    FileText,
    Calendar,
    Edit,
    Trash2,
    Briefcase,
    MapPin,
    Clock,
    Zap,
    ExternalLink,
    FileSpreadsheet,
    UserCheck,
    UserX,
    Search
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
import { createPosition, updatePosition, deletePosition, updatePositionOrder, updateCvStatus, deleteCvApplication } from "@/app/lib/actions/career";
import { GenericDataTable } from "../shared/generic-data-table";

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

const CV_STATUS_COLORS: Record<string, string> = {
    NEW: "bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]",
    REVIEWED: "bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]",
    SHORTLISTED: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    REJECTED: "bg-red-50 text-red-600 border border-red-200",
};

function ArrayInput({ label, values, onChange, placeholder }: { label: string; values: string[]; onChange: (v: string[]) => void, placeholder?: string }) {
    const [draft, setDraft] = React.useState("");
    return (
        <div className="space-y-1.5">
            <Label className="text-[11px] font-semibold text-[#605E5C]">{label}</Label>
            <div className="flex gap-1.5">
                <Input
                    className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                    value={draft}
                    placeholder={placeholder || "Add item…"}
                    onChange={e => setDraft(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter" && draft.trim()) { onChange([...values, draft.trim()]); setDraft(""); e.preventDefault(); } }}
                />
                <Button
                    size="icon"
                    className="h-9 w-9 shrink-0 rounded bg-[#0078D4] hover:bg-[#106EBE] text-white"
                    onClick={() => { if (draft.trim()) { onChange([...values, draft.trim()]); setDraft(""); } }}
                >
                    <Plus className="w-3.5 h-3.5" />
                </Button>
            </div>
            {values.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-0.5">
                    {values.map((v, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-1 pl-2 pr-1 py-0.5 rounded text-[11px] font-medium bg-[#F3F2F1] text-[#201F1E] border border-[#EDEBE9]"
                        >
                            {v}
                            <button
                                onClick={() => onChange(values.filter((_, j) => j !== i))}
                                className="w-3.5 h-3.5 rounded flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors"
                            >
                                <X className="w-2.5 h-2.5" />
                            </button>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export function DataTablePositions({ data: init }: { data: Position[] }) {
    const [data, setData] = React.useState<Position[]>(init || []);
    const [isMounted, setIsMounted] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [editing, setEditing] = React.useState<Position | null>(null);
    const [saving, setSaving] = React.useState(false);
    const [translating, setTranslating] = React.useState(false);
    const [form, setForm] = React.useState({ ...EMPTY });

    React.useEffect(() => { setIsMounted(true); }, []);

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
        if (!form.titleEL.trim()) return toast.error("Position title is required");
        setSaving(true);
        try {
            const slug = form.slug || form.titleEL.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
            const payload = { ...form, slug, order: Number(form.order) };
            if (editing) {
                const updated = await updatePosition(editing.id, payload);
                setData(prev => prev.map(d => d.id === editing.id ? { ...d, ...updated } : d));
                toast.success("Position updated");
            } else {
                const created = await createPosition(payload);
                setData(prev => [...prev, { ...(created as any), applications: [] }]);
                toast.success("Position created");
            }
            setOpen(false);
        } catch (e: any) { toast.error(e.message); }
        finally { setSaving(false); }
    };

    const handleReorder = async (newData: Position[]) => {
        setData(newData);
        try { await updatePositionOrder(newData.map(d => d.id)); toast.success("Order saved"); }
        catch { toast.error("Reorder failed"); }
    };

    const runAiTranslation = async () => {
        setTranslating(true);
        const tid = toast.loading("Translating position…");
        try {
            const res = await fetch("/api/admin/translate", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    text: JSON.stringify({
                        title: form.titleEL, desc: form.descriptionEL, dept: form.departmentEL, city: form.cityEL, type: form.typeEL,
                        duties: form.dutiesEL, skills: form.skillsEL
                    }), targetLang: "English"
                }),
            });
            const d = await res.json();
            if (!res.ok) throw new Error(d.error);
            const parsed = JSON.parse(d.translated);
            setForm(prev => ({
                ...prev, titleEN: parsed.title, descriptionEN: parsed.desc, departmentEN: parsed.dept, cityEN: parsed.city, typeEN: parsed.type,
                dutiesEN: parsed.duties, skillsEN: parsed.skills
            }));
            toast.success("Translation ready", { id: tid });
        } catch (e: any) { toast.error(e.message, { id: tid }); }
        finally { setTranslating(false); }
    };

    const columns: ColumnDef<Position>[] = [
        {
            id: "drag",
            header: "",
            cell: () => <GripVertical className="h-4 w-4 text-[#C8C6C4] opacity-0 group-hover:opacity-100 transition-opacity" />,
            size: 40
        },
        {
            id: "type-badge",
            header: "",
            cell: ({ row }) => (
                <div className="w-9 h-9 rounded-lg bg-[#F3F2F1] border border-[#EDEBE9] p-1 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4 h-4 text-[#A19F9D]" />
                </div>
            ),
            size: 48
        },
        {
            accessorKey: "titleEL",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Position</span>,
            cell: ({ row }) => (
                <div>
                    <p className="font-semibold text-sm text-[#201F1E] leading-tight">{row.original.titleEL}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                        {row.original.departmentEL && (
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A19F9D]">{row.original.departmentEL}</span>
                        )}
                        {row.original.departmentEL && row.original.cityEL && (
                            <span className="w-1 h-1 rounded-full bg-[#EDEBE9] shrink-0" />
                        )}
                        {row.original.cityEL && (
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#A19F9D] flex items-center gap-0.5">
                                <MapPin className="w-2.5 h-2.5" />{row.original.cityEL}
                            </span>
                        )}
                    </div>
                </div>
            )
        },
        {
            id: "type",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Type</span>,
            cell: ({ row }) => row.original.typeEL ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]">
                    <Clock className="w-3 h-3" />{row.original.typeEL}
                </span>
            ) : (
                <span className="text-[#C8C6C4] text-xs">—</span>
            )
        },
        {
            id: "yield",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Applications</span>,
            cell: ({ row }) => {
                const count = row.original._count?.applications ?? row.original.applications?.length ?? 0;
                return (
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-[#F3F2F1] border border-[#EDEBE9] p-1 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4 text-[#A19F9D]" />
                        </div>
                        <span className="text-xs font-semibold text-[#605E5C]">{count}</span>
                    </div>
                );
            }
        },
        {
            accessorKey: "published",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Status</span>,
            cell: ({ row }) => row.original.published ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                    Active
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
                            <Edit className="w-3.5 h-3.5 mr-2 text-[#0078D4]" /> Edit position
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => window.open(`/careers/${row.original.slug}`, "_blank")} className="text-sm">
                            <ExternalLink className="w-3.5 h-3.5 mr-2" /> View listing
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="text-red-500 text-sm"
                            onClick={() => { if (confirm("Delete this position?")) deletePosition(row.original.id).then(() => setData(d => d.filter(x => x.id !== row.original.id))) }}
                        >
                            <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete
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
                columns={columns} data={data} searchPlaceholder="Search positions…" searchColumn="titleEL"
                onAddClick={() => openEdit()} addButtonLabel="Open Position"
                isSortable={true} onReorder={handleReorder}
                renderExpandedRow={(item) => (
                    <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
                        {/* Expanded header */}
                        <div className="px-4 py-3 border-b border-[#EDEBE9] bg-white flex items-center justify-between">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D]">Candidate Applications</p>
                                <p className="text-sm font-semibold text-[#201F1E] mt-0.5">
                                    {item.applications?.length || 0} profiles for {item.titleEL}
                                </p>
                            </div>
                            <div className="flex gap-1.5">
                                {item.typeEL && (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]">
                                        {item.typeEL}
                                    </span>
                                )}
                                {item.cityEL && (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]">
                                        <MapPin className="w-3 h-3" />{item.cityEL}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="p-4">
                            <CvApplicationsPanel applications={item.applications || []} positionTitle={item.titleEL} />
                        </div>
                    </div>
                )}
            />

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.08)]">
                    {/* Header */}
                    <DialogHeader className="px-5 py-4 border-b border-[#EDEBE9] bg-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-lg bg-[#EFF6FC] border border-[#C7E0F4] flex items-center justify-center shrink-0">
                                    <Briefcase className="w-4 h-4 text-[#0078D4]" />
                                </div>
                                <div>
                                    <DialogTitle className="text-sm font-bold text-[#201F1E]">
                                        {editing ? "Edit Position" : "New Position"}
                                    </DialogTitle>
                                    <DialogDescription className="text-[11px] text-[#A19F9D]">
                                        {editing ? editing.titleEL : "Configure position requirements and skills."}
                                    </DialogDescription>
                                </div>
                            </div>
                            <Button
                                onClick={runAiTranslation}
                                disabled={translating}
                                className="bg-[#0078D4] hover:bg-[#106EBE] h-8 px-3 text-[12px] font-semibold rounded text-white gap-1.5"
                            >
                                {translating ? <RefreshCcw className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5" />}
                                AI Translate
                            </Button>
                        </div>
                    </DialogHeader>

                    {/* Body */}
                    <div className="bg-[#F3F2F1] px-5 py-4 max-h-[75vh] overflow-y-auto">
                        <Tabs defaultValue="greek">
                            <TabsList className="h-8 mb-4 gap-0.5 bg-white border border-[#EDEBE9] p-0.5 rounded">
                                <TabsTrigger value="greek" className="text-[11px] font-semibold px-3 h-7 rounded data-[state=active]:bg-[#F3F2F1] data-[state=active]:shadow-sm">
                                    Greek (GR)
                                </TabsTrigger>
                                <TabsTrigger value="english" className="text-[11px] font-semibold px-3 h-7 rounded data-[state=active]:bg-[#F3F2F1] data-[state=active]:shadow-sm">
                                    English (EN)
                                </TabsTrigger>
                                <TabsTrigger value="governance" className="text-[11px] font-semibold px-3 h-7 rounded data-[state=active]:bg-[#F3F2F1] data-[state=active]:shadow-sm">
                                    Settings
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="greek" className="space-y-3 animate-in fade-in duration-200 mt-0">
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Identity</p>
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Position Title <span className="text-red-500">*</span></Label>
                                        <Input
                                            className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-medium"
                                            placeholder="e.g. Marketing Director"
                                            value={form.titleEL}
                                            onChange={e => setForm({ ...form, titleEL: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Department</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={form.departmentEL} onChange={e => setForm({ ...form, departmentEL: e.target.value })} placeholder="e.g. Marketing" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">City</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={form.cityEL} onChange={e => setForm({ ...form, cityEL: e.target.value })} placeholder="e.g. Athens" />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Type</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={form.typeEL} onChange={e => setForm({ ...form, typeEL: e.target.value })} placeholder="e.g. Full-time" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Description</p>
                                    <Textarea
                                        rows={4}
                                        className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm resize-none"
                                        placeholder="Describe the role and its impact…"
                                        value={form.descriptionEL}
                                        onChange={e => setForm({ ...form, descriptionEL: e.target.value })}
                                    />
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Requirements</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <ArrayInput label="Duties" values={form.dutiesEL} onChange={v => setForm({ ...form, dutiesEL: v })} placeholder="Add duty…" />
                                        <ArrayInput label="Skills" values={form.skillsEL} onChange={v => setForm({ ...form, skillsEL: v })} placeholder="Add skill…" />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="english" className="space-y-3 animate-in fade-in duration-200 mt-0">
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Identity (EN)</p>
                                    <div className="space-y-1">
                                        <Label className="text-[11px] font-semibold text-[#605E5C]">Position Title (EN)</Label>
                                        <Input
                                            className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-medium"
                                            value={form.titleEN || ""}
                                            onChange={e => setForm({ ...form, titleEN: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Department (EN)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={form.departmentEN || ""} onChange={e => setForm({ ...form, departmentEN: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">City (EN)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={form.cityEN || ""} onChange={e => setForm({ ...form, cityEN: e.target.value })} />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Type (EN)</Label>
                                            <Input className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm" value={form.typeEN || ""} onChange={e => setForm({ ...form, typeEN: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Description (EN)</p>
                                    <Textarea
                                        rows={4}
                                        className="rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm resize-none"
                                        value={form.descriptionEN || ""}
                                        onChange={e => setForm({ ...form, descriptionEN: e.target.value })}
                                    />
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Requirements (EN)</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <ArrayInput label="Duties (EN)" values={form.dutiesEN} onChange={v => setForm({ ...form, dutiesEN: v })} />
                                        <ArrayInput label="Skills (EN)" values={form.skillsEN} onChange={v => setForm({ ...form, skillsEN: v })} />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="governance" className="space-y-3 animate-in fade-in duration-200 mt-0">
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">URL & Order</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">URL Slug</Label>
                                            <Input
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm font-mono text-[#0078D4]"
                                                value={form.slug}
                                                onChange={e => setForm({ ...form, slug: e.target.value })}
                                                placeholder="auto-generated-from-title"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <Label className="text-[11px] font-semibold text-[#605E5C]">Display Order</Label>
                                            <Input
                                                type="number"
                                                className="h-9 rounded border-[#C8C6C4] focus-visible:ring-[#0078D4] text-sm"
                                                value={form.order}
                                                onChange={e => setForm({ ...form, order: Number(e.target.value) })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white border border-[#EDEBE9] rounded-lg p-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-[11px] font-semibold text-[#605E5C]">Published</p>
                                        <p className="text-[11px] text-[#A19F9D] mt-0.5">Make this position visible to the public.</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[11px] font-bold ${form.published ? "text-emerald-600" : "text-[#A19F9D]"}`}>
                                            {form.published ? "Live" : "Draft"}
                                        </span>
                                        <Switch
                                            checked={form.published}
                                            onCheckedChange={v => setForm({ ...form, published: v })}
                                            className="data-[state=checked]:bg-emerald-500 scale-90"
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Footer */}
                    <div className="px-5 py-3 border-t border-[#EDEBE9] bg-white flex justify-end gap-2">
                        <Button
                            variant="ghost"
                            onClick={() => setOpen(false)}
                            className="h-8 px-4 text-[12px] font-semibold text-[#605E5C] hover:bg-[#EDEBE9] hover:text-[#201F1E] rounded"
                        >
                            Cancel
                        </Button>
                        <Button
                            disabled={saving}
                            onClick={handleSave}
                            className="h-8 px-5 text-[12px] font-semibold bg-[#0078D4] hover:bg-[#106EBE] text-white rounded shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,120,212,0.25)] transition-colors active:scale-95"
                        >
                            {saving ? <><RefreshCcw className="w-3 h-3 animate-spin mr-1.5" />Saving…</> : (editing ? "Save Changes" : "Create Position")}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

function CvApplicationsPanel({ applications: init, positionTitle }: { applications: CvApplication[]; positionTitle: string }) {
    const [apps, setApps] = React.useState(init);

    if (apps.length === 0) return (
        <div className="flex flex-col items-center justify-center py-10 border border-dashed border-[#EDEBE9] rounded-lg bg-white">
            <div className="w-10 h-10 bg-[#F3F2F1] rounded-lg border border-[#EDEBE9] flex items-center justify-center mb-3">
                <Search className="w-4.5 h-4.5 text-[#C8C6C4]" />
            </div>
            <p className="text-[11px] font-semibold text-[#A19F9D]">No applications yet</p>
        </div>
    );

    return (
        <div className="space-y-2">
            {apps.map(app => (
                <div
                    key={app.id}
                    className="bg-white rounded-lg border border-[#EDEBE9] px-4 py-3 flex flex-wrap items-center gap-4 hover:border-[#C7E0F4] transition-colors"
                >
                    {/* Initials badge */}
                    <div className="w-9 h-9 rounded-lg bg-[#F3F2F1] border border-[#EDEBE9] flex items-center justify-center shrink-0 text-[#605E5C] font-semibold text-[11px]">
                        {app.firstName[0]}{app.lastName[0]}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-[160px]">
                        <p className="text-sm font-semibold text-[#201F1E] leading-tight">{app.firstName} {app.lastName}</p>
                        <div className="flex items-center gap-3 mt-0.5">
                            <span className="text-[11px] text-[#605E5C] flex items-center gap-1">
                                <Mail className="w-3 h-3 text-[#A19F9D]" />{app.email}
                            </span>
                            {app.phone && (
                                <span className="text-[11px] text-[#605E5C] flex items-center gap-1">
                                    <Phone className="w-3 h-3 text-[#A19F9D]" />{app.phone}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className="text-[11px] text-[#A19F9D] flex items-center gap-1">
                            <Calendar className="w-3 h-3" />{new Date(app.createdAt).toLocaleDateString()}
                        </span>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${CV_STATUS_COLORS[app.status] || "bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]"}`}>
                            {app.status}
                        </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5 pl-4 border-l border-[#EDEBE9]">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-8 px-3 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] rounded gap-1"
                            onClick={() => window.open(app.cvUrl, "_blank")}
                        >
                            <FileSpreadsheet className="w-3.5 h-3.5 text-[#0078D4]" /> View CV
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 rounded border-[#C8C6C4] hover:bg-[#EDEBE9] text-[#605E5C]"
                                >
                                    <ChevronDown className="w-3.5 h-3.5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <div className="px-2 py-1.5 text-[10px] font-bold uppercase text-[#A19F9D] tracking-widest">Update Status</div>
                                {["REVIEWED", "SHORTLISTED", "REJECTED"].map(s => (
                                    <DropdownMenuItem
                                        key={s}
                                        onClick={async () => {
                                            await updateCvStatus(app.id, s);
                                            setApps(prev => prev.map(a => a.id === app.id ? { ...a, status: s } : a));
                                            toast.success(`Status: ${s}`);
                                        }}
                                    >
                                        <span className={`w-2 h-2 rounded-full mr-2 shrink-0 ${s === "REVIEWED" ? "bg-[#605E5C]" : s === "SHORTLISTED" ? "bg-emerald-500" : "bg-red-500"}`} />
                                        <span className="text-xs font-medium">{s.charAt(0) + s.slice(1).toLowerCase()}</span>
                                    </DropdownMenuItem>
                                ))}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="text-red-500 focus:bg-red-50 focus:text-red-600"
                                    onClick={async () => {
                                        if (!confirm("Remove this application?")) return;
                                        await deleteCvApplication(app.id);
                                        setApps(prev => prev.filter(a => a.id !== app.id));
                                        toast.success("Application removed");
                                    }}
                                >
                                    <UserX className="w-3.5 h-3.5 mr-2" />
                                    <span className="text-xs font-medium">Remove Application</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            ))}
        </div>
    );
}
