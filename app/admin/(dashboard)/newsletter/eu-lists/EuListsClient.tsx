"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  FileCode2,
  Loader2,
  Mail,
  MapPin,
  Sparkles,
  Trash2,
  Users,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  deleteEuProgramRecipientList,
  getEuProgramRecipientListTableDetail,
  type EuListCriteriaSummary,
  type EuListRecipientTableRow,
  type EuProgramRecipientListSummary,
} from "@/app/lib/actions/eu-program-recipient-list";

function CriteriaPanel({ criteria }: { criteria: EuListCriteriaSummary }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-primary/15 bg-gradient-to-br from-slate-50 via-white to-violet-50/80 dark:from-slate-950 dark:via-card dark:to-violet-950/40 shadow-md shadow-primary/5">
      <div className="flex flex-col divide-y divide-border/60">
        <div className="relative p-4 sm:p-5">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-orange-500" />
          <div className="flex items-center gap-2 mb-3 pl-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/30">
              <FileCode2 className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700/90 dark:text-amber-400/90">
                Eligible KADs
              </p>
              <p className="text-[10px] text-muted-foreground">Prefix match vs program</p>
            </div>
          </div>
          {criteria.programKadLabels.length === 0 ? (
            <p className="text-[11px] leading-relaxed text-muted-foreground pl-2 pr-1">
              None linked — <span className="text-sky-700 dark:text-sky-300 font-medium">any</span> customer KAD qualifies.
            </p>
          ) : (
            <div className="flex flex-wrap gap-1.5 pl-2">
              {criteria.programKadLabels.map((k) => (
                <Badge
                  key={k}
                  className="font-mono text-[10px] px-2 py-0.5 font-medium border-0 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-950 dark:from-amber-950/50 dark:to-orange-950/50 dark:text-amber-100 shadow-sm ring-1 ring-amber-500/25"
                >
                  {k}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="relative p-4 sm:p-5">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-emerald-500" />
          <div className="flex items-center gap-2 mb-3 pl-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/30">
              <MapPin className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700/90 dark:text-emerald-400/90">
                Program regions
              </p>
              <p className="text-[10px] text-muted-foreground">Address → periferia</p>
            </div>
          </div>
          {!criteria.regionFilterActive ? (
            <p className="text-[11px] leading-relaxed text-muted-foreground pl-2 pr-1">
              <span className="inline-flex items-center rounded-md bg-slate-200/80 dark:bg-slate-800 px-1.5 py-0.5 text-[10px] font-medium text-slate-800 dark:text-slate-200 mr-1">
                Open
              </span>
              No regional filter — all addresses allowed (KAD rules still apply).
            </p>
          ) : criteria.programRegionLabels.length === 0 ? (
            <p className="text-[11px] text-amber-800/80 dark:text-amber-200/80 pl-2">Regions linked but names missing.</p>
          ) : (
            <div className="flex flex-wrap gap-1.5 pl-2">
              {criteria.programRegionLabels.map((r) => (
                <Badge
                  key={r}
                  className="text-[10px] px-2 py-0.5 font-normal border-0 bg-gradient-to-r from-sky-100 to-emerald-100 text-emerald-950 dark:from-sky-950/40 dark:to-emerald-950/40 dark:text-emerald-100 shadow-sm ring-1 ring-emerald-500/20 max-w-[200px] truncate"
                  title={r}
                >
                  {r}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-violet-200/50 dark:border-violet-900/40 bg-gradient-to-r from-violet-500/8 via-transparent to-sky-500/8 px-4 py-2.5">
        <p className="text-[10px] leading-snug text-muted-foreground text-center sm:text-left">
          <span className="text-violet-700 dark:text-violet-300 font-semibold">KAD match</span> column = company code vs program prefix ·{" "}
          <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Region</span> = mapped address when regional filter applies
        </p>
      </div>
    </div>
  );
}

function SortableHeader({ column, label }: { column: { getIsSorted: () => false | "asc" | "desc"; toggleSorting: (desc?: boolean) => void }; label: string }) {
  const sorted = column.getIsSorted();
  return (
    <Button
      variant="ghost"
      className="-ml-2.5 h-7 px-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground"
      onClick={() => column.toggleSorting(sorted === "asc")}
    >
      {label}
      {sorted === "asc" ? (
        <ArrowUp className="ml-0.5 h-3 w-3 shrink-0" />
      ) : sorted === "desc" ? (
        <ArrowDown className="ml-0.5 h-3 w-3 shrink-0" />
      ) : (
        <ArrowUpDown className="ml-0.5 h-3 w-3 shrink-0 opacity-35" />
      )}
    </Button>
  );
}

function KadMatchCell({ text }: { text: string }) {
  const open = text.startsWith("Any KAD");
  const dash = text === "—";
  return (
    <span
      className={
        dash
          ? "inline-block max-w-[min(200px,28vw)] text-[10px] leading-tight text-muted-foreground"
          : open
            ? "inline-flex max-w-[min(200px,28vw)] rounded-md bg-slate-100 dark:bg-slate-800/80 px-1.5 py-1 text-[10px] leading-tight text-slate-700 dark:text-slate-300 ring-1 ring-slate-200/80 dark:ring-slate-700"
            : "inline-flex max-w-[min(220px,30vw)] rounded-md bg-violet-500/10 dark:bg-violet-500/15 px-1.5 py-1 text-[10px] leading-tight text-violet-900 dark:text-violet-200 ring-1 ring-violet-400/25"
      }
    >
      {text}
    </span>
  );
}

function RegionMatchCell({ text }: { text: string }) {
  const open = text.startsWith("Not filtered");
  const mapped = text.startsWith("Mapped:");
  const noMap = text.startsWith("No address");
  return (
    <span
      className={
        open
          ? "inline-flex max-w-[min(200px,28vw)] rounded-md bg-slate-100 dark:bg-slate-800/80 px-1.5 py-1 text-[10px] leading-tight text-slate-600 dark:text-slate-400 ring-1 ring-slate-200/70 dark:ring-slate-700"
          : mapped
            ? "inline-flex max-w-[min(200px,28vw)] rounded-md bg-emerald-500/12 dark:bg-emerald-500/18 px-1.5 py-1 text-[10px] leading-tight text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-500/25"
            : noMap
              ? "inline-flex max-w-[min(200px,28vw)] rounded-md bg-amber-500/12 dark:bg-amber-500/15 px-1.5 py-1 text-[10px] leading-tight text-amber-950 dark:text-amber-100 ring-1 ring-amber-500/30"
              : "inline-block max-w-[min(200px,28vw)] text-[10px] leading-tight text-muted-foreground"
      }
    >
      {text}
    </span>
  );
}

const columns: ColumnDef<EuListRecipientTableRow>[] = [
  {
    accessorKey: "customerName",
    header: ({ column }) => <SortableHeader column={column} label="Company" />,
    cell: ({ row }) => (
      <span className="font-medium text-[11px] leading-tight text-foreground">{row.original.customerName}</span>
    ),
  },
  {
    accessorKey: "customerCode",
    header: ({ column }) => <SortableHeader column={column} label="Code" />,
    cell: ({ row }) => (
      <span className="font-mono text-[10px] leading-tight text-muted-foreground tabular-nums">{row.original.customerCode}</span>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortableHeader column={column} label="Email" />,
    cell: ({ row }) => (
      <span className="text-[10px] leading-tight text-sky-700 dark:text-sky-300 break-all">{row.original.email}</span>
    ),
  },
  {
    accessorKey: "kadMatch",
    header: ({ column }) => <SortableHeader column={column} label="KAD" />,
    cell: ({ row }) => <KadMatchCell text={row.original.kadMatch} />,
  },
  {
    accessorKey: "regionMatch",
    header: ({ column }) => <SortableHeader column={column} label="Region" />,
    cell: ({ row }) => <RegionMatchCell text={row.original.regionMatch} />,
  },
];

function RecipientsModalTable({ data }: { data: EuListRecipientTableRow[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: (row, _columnId, filterValue) => {
      const q = String(filterValue).toLowerCase();
      if (!q) return true;
      const r = row.original;
      return [r.customerName, r.customerCode, r.email, r.kadMatch, r.regionMatch].some((v) =>
        String(v).toLowerCase().includes(q)
      );
    },
    initialState: { pagination: { pageSize: 25 } },
  });

  return (
    <div className="flex flex-col gap-2.5 min-h-0">
      <Input
        placeholder="Filter…"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="max-w-sm h-8 text-[11px] rounded-lg border-slate-200/80 bg-white/80 dark:bg-background/80 shadow-sm"
      />
      <div className="rounded-xl border border-slate-200/90 dark:border-slate-700/80 shadow-sm bg-white/60 dark:bg-card/40 max-h-[min(52vh,520px)] overflow-y-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((hg) => (
              <TableRow key={hg.id} className="hover:bg-transparent border-b border-slate-200/70 dark:border-slate-800 bg-gradient-to-r from-slate-50/95 to-violet-50/40 dark:from-slate-900/90 dark:to-violet-950/30">
                {hg.headers.map((h) => (
                  <TableHead key={h.id} className="whitespace-nowrap py-2 px-2.5">
                    {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <TableRow
                  key={row.id}
                  className={
                    i % 2 === 0
                      ? "border-b border-slate-100/90 dark:border-slate-800/50 bg-transparent"
                      : "border-b border-slate-100/90 dark:border-slate-800/50 bg-slate-50/40 dark:bg-slate-900/20"
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="align-top py-1.5 px-2.5">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-20 text-center text-muted-foreground text-[11px]">
                  No rows.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between gap-2 text-[10px] text-muted-foreground">
        <span>
          {table.getFilteredRowModel().rows.length} row{table.getFilteredRowModel().rows.length === 1 ? "" : "s"}
          {globalFilter ? ` (filtered)` : ""}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-7 w-7 px-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </Button>
          <span className="tabular-nums">
            {table.getState().pagination.pageIndex + 1} / {table.getPageCount() || 1}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="h-7 w-7 px-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export function EuListsClient({ initialLists }: { initialLists: EuProgramRecipientListSummary[] }) {
  const router = useRouter();
  const [deletingId, setDeletingId] = React.useState<string | null>(null);
  const [viewId, setViewId] = React.useState<string | null>(null);
  const [viewLoading, setViewLoading] = React.useState(false);
  const [viewDetail, setViewDetail] = React.useState<{
    programNameSnapshot: string;
    euProgramId: string;
    criteria: EuListCriteriaSummary;
    rows: EuListRecipientTableRow[];
  } | null>(null);

  const openView = async (id: string) => {
    setViewId(id);
    setViewDetail(null);
    setViewLoading(true);
    try {
      const detail = await getEuProgramRecipientListTableDetail(id);
      if (!detail) {
        toast.error("List not found");
        setViewId(null);
        return;
      }
      setViewDetail(detail);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to load list");
      setViewId(null);
    } finally {
      setViewLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this saved list? This cannot be undone.")) return;
    setDeletingId(id);
    try {
      await deleteEuProgramRecipientList(id);
      toast.success("List deleted");
      router.refresh();
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      {initialLists.length === 0 ? (
        <Card className="overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-slate-50/90 via-card to-violet-50/30 dark:from-slate-950 dark:via-card dark:to-violet-950/20 shadow-md">
          <div className="h-1 bg-gradient-to-r from-amber-400 via-violet-500 to-emerald-500" aria-hidden />
          <CardHeader className="p-5">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-violet-500/15 text-primary ring-1 ring-primary/20">
                <Mail className="h-5 w-5" />
              </span>
              <div className="space-y-1">
                <CardTitle className="text-sm font-semibold tracking-tight">No lists yet</CardTitle>
                <CardDescription className="text-[11px] leading-relaxed">
                  Open{" "}
                  <Link href="/admin/eu-programs" className="text-primary font-medium underline underline-offset-2">
                    EU Programs
                  </Link>
                  , then <span className="text-foreground/80">Actions → Generate email list</span> and save to see cards here.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {initialLists.map((list) => (
            <Card
              key={list.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-slate-50/90 via-card to-violet-50/35 dark:from-slate-950 dark:via-card dark:to-violet-950/25 shadow-md shadow-primary/5 transition-all hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="h-1 w-full shrink-0 bg-gradient-to-r from-amber-400 via-violet-500 to-emerald-500" aria-hidden />
              <CardHeader className="space-y-3 p-4 pb-3">
                <div className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/18 to-violet-500/18 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-[1.02]">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1 space-y-2">
                    <CardTitle className="text-[13px] font-semibold leading-snug tracking-tight text-foreground line-clamp-3">
                      {list.programNameSnapshot}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge
                        className="h-6 gap-1 border-0 px-2 text-[10px] font-medium tabular-nums bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm ring-1 ring-emerald-700/30"
                      >
                        <Users className="h-3 w-3 text-white/90" />
                        {list.recipientCount} recipients
                      </Badge>
                      <Badge
                        variant="outline"
                        className="h-6 border-slate-200/80 bg-white/50 px-2 text-[10px] font-normal text-muted-foreground dark:border-slate-700 dark:bg-slate-900/40"
                      >
                        {new Date(list.createdAt).toLocaleString(undefined, {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 px-4 pb-3 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-full text-[11px] border-primary/20 bg-primary/[0.04] hover:bg-primary/[0.08] text-primary"
                  asChild
                >
                  <Link href={`/admin/eu-programs/${list.euProgramId}`}>
                    <Briefcase className="h-3.5 w-3.5 mr-1.5" />
                    Open program
                  </Link>
                </Button>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 border-t border-border/60 bg-muted/20 px-4 py-3">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="h-8 flex-1 text-[11px] bg-violet-500/12 text-violet-950 hover:bg-violet-500/18 dark:text-violet-100 dark:bg-violet-500/15 dark:hover:bg-violet-500/22 border border-violet-500/20"
                  onClick={() => openView(list.id)}
                >
                  <Mail className="h-3.5 w-3.5 mr-1.5" />
                  Recipients
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="h-8 text-[11px]"
                  disabled={deletingId === list.id}
                  onClick={() => handleDelete(list.id)}
                >
                  {deletingId === list.id ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <>
                      <Trash2 className="h-3.5 w-3.5 mr-1.5" />
                      Delete
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <Dialog
        open={viewId != null}
        onOpenChange={(o) => {
          if (!o) {
            setViewId(null);
            setViewDetail(null);
          }
        }}
      >
        <DialogContent className="max-w-5xl w-[calc(100vw-2rem)] max-h-[90vh] flex flex-col gap-0 p-0 overflow-hidden rounded-2xl border border-primary/20 shadow-2xl shadow-primary/10 bg-card">
          <div className="h-1.5 w-full shrink-0 bg-gradient-to-r from-amber-400 via-violet-500 to-emerald-500" aria-hidden />
          <DialogHeader className="p-5 pb-4 shrink-0 space-y-3 bg-gradient-to-br from-primary/[0.07] via-transparent to-violet-500/[0.06] border-b border-border/80">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-violet-500/20 text-primary ring-1 ring-primary/20">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1 space-y-1">
                <DialogTitle className="text-base font-bold tracking-tight sm:text-lg bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                  Companies &amp; matching criteria
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="space-y-1.5">
                    <p className="text-[12px] leading-snug text-foreground/85 line-clamp-3 font-medium">
                      {viewDetail?.programNameSnapshot ?? "…"}
                    </p>
                    {viewDetail ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 text-[10px] gap-1 border-primary/25 bg-primary/5 hover:bg-primary/10 text-primary"
                        asChild
                      >
                        <Link href={`/admin/eu-programs/${viewDetail.euProgramId}`}>
                          <Briefcase className="h-3 w-3" />
                          Open EU program
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3.5 min-h-0">
            {viewLoading ? (
              <div className="flex flex-col items-center justify-center py-14 text-muted-foreground gap-2">
                <Loader2 className="h-6 w-6 animate-spin text-violet-500" />
                <span className="text-xs">Loading companies…</span>
              </div>
            ) : viewDetail ? (
              <>
                <CriteriaPanel criteria={viewDetail.criteria} />
                <RecipientsModalTable data={viewDetail.rows} />
              </>
            ) : (
              <p className="text-center text-muted-foreground py-8 text-sm">Nothing to show.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
