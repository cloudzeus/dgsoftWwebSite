"use client";

import * as React from "react";
import { toast } from "sonner";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { updateCvStatus, deleteCvApplication } from "@/app/lib/actions/career";

const STATUS_COLORS: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
    NEW: "default", REVIEWED: "secondary", SHORTLISTED: "outline", REJECTED: "destructive",
};

export function DataTableCvApplications({ data: init }: { data: any[] }) {
    const [data, setData] = React.useState(init || []);
    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => { setIsMounted(true); }, []);

    const columns: ColumnDef<any>[] = [
        {
            accessorKey: "firstName", header: "Applicant",
            cell: ({ row }) => (
                <div>
                    <div className="font-semibold text-foreground">{row.original.firstName} {row.original.lastName}</div>
                    <div className="text-xs text-muted-foreground">{row.original.email}</div>
                    {row.original.phone && <div className="text-xs text-muted-foreground">{row.original.phone}</div>}
                </div>
            )
        },
        { accessorKey: "position", header: "Position", cell: ({ row }) => <span className="text-sm font-medium text-foreground">{row.original.position?.titleEL || <span className="text-muted-foreground italic">Γενική Αίτηση</span>}</span> },
        {
            accessorKey: "status", header: "Status",
            cell: ({ row }) => <Badge variant={STATUS_COLORS[row.original.status] || "default"}>{row.original.status}</Badge>
        },
        {
            accessorKey: "createdAt", header: "Date",
            cell: ({ row }) => <span className="text-xs text-muted-foreground">{new Date(row.original.createdAt).toLocaleDateString("el-GR")}</span>
        },
        {
            id: "actions",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="default" size="sm" className="h-8 bg-zinc-800 text-white hover:bg-zinc-700 border-none">Actions <ChevronDown className="h-3 w-3 ml-1" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-zinc-800 text-white border border-zinc-700" style={{ backgroundColor: "#27272a", color: "#ffffff" }}>
                        <DropdownMenuItem className="cursor-pointer hover:bg-zinc-700" onClick={() => window.open(row.original.cvUrl, "_blank")}>
                            <ExternalLink className="w-3 h-3 mr-1" /> View CV
                        </DropdownMenuItem>
                        {["REVIEWED", "SHORTLISTED", "REJECTED"].map(s => (
                            <DropdownMenuItem className="cursor-pointer hover:bg-zinc-700" key={s} onClick={async () => {
                                await updateCvStatus(row.original.id, s);
                                setData((prev: any[]) => prev.map(d => d.id === row.original.id ? { ...d, status: s } : d));
                                toast.success(`Marked as ${s}`);
                            }}>Mark as {s}</DropdownMenuItem>
                        ))}
                        <DropdownMenuItem className="text-red-500 cursor-pointer hover:bg-zinc-700 font-medium" onClick={async () => {
                            if (!confirm("Delete this application?")) return;
                            await deleteCvApplication(row.original.id);
                            setData((prev: any[]) => prev.filter(d => d.id !== row.original.id));
                            toast.success("Deleted");
                        }}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    ];

    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    if (!isMounted) return <div className="p-8 text-center animate-pulse text-muted-foreground">Loading...</div>;

    return (
        <div className="rounded-md border bg-card shadow overflow-hidden">
            <Table>
                <TableHeader className="bg-muted">
                    {table.getHeaderGroups().map(hg => (
                        <TableRow key={hg.id}>{hg.headers.map(h => <TableHead key={h.id}>{!h.isPlaceholder && flexRender(h.column.columnDef.header, h.getContext())}</TableHead>)}</TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.length === 0
                        ? <TableRow><TableCell colSpan={columns.length} className="py-16 text-center text-muted-foreground">No applications yet.</TableCell></TableRow>
                        : table.getRowModel().rows.map(row => (
                            <TableRow key={row.id} className="hover:bg-muted/50">
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id} className="p-3 align-middle">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </div>
    );
}
