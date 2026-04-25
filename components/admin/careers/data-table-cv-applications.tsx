"use client";

import * as React from "react";
import { toast } from "sonner";
import { ColumnDef } from "@tanstack/react-table";
import {
    ExternalLink,
    ChevronDown,
    Trash2,
    Mail,
    Phone,
    Calendar,
    Briefcase,
    UserCheck,
    UserX,
    FileSpreadsheet,
    FileText,
    ArrowUpDown,
    CheckCircle2,
    AlertCircle,
    Clock,
    Search,
    UserCircle,
    Plus,
    X,
    RefreshCcw
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { updateCvStatus, deleteCvApplication } from "@/app/lib/actions/career";
import { GenericDataTable } from "../shared/generic-data-table";

const STATUS_COLORS: Record<string, string> = {
    NEW: "bg-[#EFF6FC] text-[#0078D4] border border-[#C7E0F4]",
    REVIEWED: "bg-[#F3F2F1] text-[#605E5C] border border-[#EDEBE9]",
    SHORTLISTED: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    REJECTED: "bg-red-50 text-red-600 border border-red-200",
};

export function DataTableCvApplications({ data: init }: { data: any[] }) {
    const [data, setData] = React.useState(init || []);
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => { setIsMounted(true); }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Purge applicant profile?")) return;
        try {
            await deleteCvApplication(id);
            setData((prev: any[]) => prev.filter(d => d.id !== id));
            toast.success("Identity record decommissioned");
        } catch (e: any) { toast.error(e.message); }
    };

    const columns: ColumnDef<any>[] = [
        {
            id: "firstName",
            accessorKey: "firstName",
            header: () => null,
            cell: () => null,
            enableHiding: false,
        },
        {
            id: "identity",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Applicant</span>,
            cell: ({ row }) => (
                <div className="flex items-center gap-3 py-1">
                    <div className="w-9 h-9 rounded-lg bg-[#F3F2F1] border border-[#EDEBE9] flex items-center justify-center shrink-0 text-[#605E5C] font-semibold text-[11px]">
                        {row.original.firstName[0]}{row.original.lastName[0]}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm text-[#201F1E] leading-tight">{row.original.firstName} {row.original.lastName}</span>
                        <div className="flex items-center gap-3 text-[11px] text-[#A19F9D] mt-0.5">
                            <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {row.original.email}</span>
                            {row.original.phone && (
                                <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {row.original.phone}</span>
                            )}
                        </div>
                    </div>
                </div>
            )
        },
        {
            accessorKey: "position",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Position</span>,
            cell: ({ row }) => (
                <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#A19F9D] shrink-0" />
                    <span className="text-xs font-semibold text-[#605E5C]">
                        {row.original.position?.titleEL || <span className="text-[#C8C6C4] italic">General Application</span>}
                    </span>
                </div>
            )
        },
        {
            accessorKey: "status",
            header: () => <span className="text-[11px] font-semibold text-[#605E5C] uppercase tracking-wide">Status</span>,
            cell: ({ row }) => (
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${STATUS_COLORS[row.original.status] || "bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]"}`}>
                    {row.original.status}
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
                    <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem className="text-sm" onClick={() => window.open(row.original.cvUrl, "_blank")}>
                            <FileSpreadsheet className="w-3.5 h-3.5 mr-2 text-[#0078D4]" /> View CV
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <div className="px-2 py-1 text-[10px] font-bold uppercase text-[#A19F9D] tracking-widest">Update Status</div>
                        {["REVIEWED", "SHORTLISTED", "REJECTED"].map(s => (
                            <DropdownMenuItem key={s} className="text-sm" onClick={async () => {
                                await updateCvStatus(row.original.id, s);
                                setData((prev: any[]) => prev.map(d => d.id === row.original.id ? { ...d, status: s } : d));
                                toast.success(`Status: ${s}`);
                            }}>
                                <span className={`w-2 h-2 rounded-full mr-2 shrink-0 ${s === "REVIEWED" ? "bg-[#605E5C]" : s === "SHORTLISTED" ? "bg-emerald-500" : "bg-red-500"}`} />
                                Mark {s.charAt(0) + s.slice(1).toLowerCase()}
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleDelete(row.original.id)} className="text-sm text-red-500 focus:bg-red-50 focus:text-red-600">
                            <UserX className="w-3.5 h-3.5 mr-2" /> Remove Application
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
                columns={columns}
                data={data}
                searchPlaceholder="Search applicant by name..."
                searchColumn="firstName"
                initialColumnVisibility={{ firstName: false }}
                renderExpandedRow={(item) => (
                    <div className="mx-4 mb-3 mt-1 rounded-lg border border-[#EDEBE9] bg-[#F3F2F1] overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#EDEBE9]">
                            <div className="bg-white p-4 space-y-3">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Applicant Identity</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-[#F3F2F1] border border-[#EDEBE9] flex items-center justify-center shrink-0 text-[#605E5C] font-bold text-sm">
                                        {item.firstName[0]}{item.lastName[0]}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#201F1E]">{item.firstName} {item.lastName}</p>
                                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${STATUS_COLORS[item.status] || "bg-[#F3F2F1] text-[#A19F9D] border border-[#EDEBE9]"}`}>{item.status}</span>
                                    </div>
                                </div>
                                <div className="pt-3 border-t border-[#EDEBE9] space-y-1.5">
                                    <div className="flex items-center gap-2 text-xs text-[#605E5C]">
                                        <Mail className="w-3 h-3 text-[#A19F9D] shrink-0" />
                                        {item.email}
                                    </div>
                                    {item.phone && (
                                        <div className="flex items-center gap-2 text-xs text-[#605E5C]">
                                            <Phone className="w-3 h-3 text-[#A19F9D] shrink-0" />
                                            {item.phone}
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2 text-xs text-[#605E5C]">
                                        <Calendar className="w-3 h-3 text-[#A19F9D] shrink-0" />
                                        Applied: {new Date(item.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-4 space-y-3">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#A19F9D] mb-3">Cover Letter</p>
                                <p className="text-sm leading-relaxed text-[#605E5C] italic">
                                    {item.coverLetter ? `"${item.coverLetter}"` : <span className="not-italic text-[#A19F9D]">No cover letter provided.</span>}
                                </p>
                                <div className="pt-3 border-t border-[#EDEBE9]">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-8 px-4 text-[12px] font-semibold text-[#201F1E] border-[#C8C6C4] hover:bg-[#EDEBE9] rounded gap-2"
                                        onClick={() => window.open(item.cvUrl, "_blank")}
                                    >
                                        <FileSpreadsheet className="w-3.5 h-3.5 text-[#0078D4]" /> Download CV
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            />
        </div>
    );
}
