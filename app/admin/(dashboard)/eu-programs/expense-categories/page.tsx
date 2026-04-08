import { Metadata } from "next"
import Link from "next/link"
import { getEuPrograms } from "@/app/lib/actions/eu-program"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, FolderTree, Sparkles } from "lucide-react"

export const metadata: Metadata = { title: "Expense Categories — Select program | Admin" }

export default async function ExpenseCategoriesProgramPickerPage() {
  const programs = await getEuPrograms()

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 p-4 md:p-6">
      <div className="overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-slate-50/90 via-card to-violet-50/30 dark:from-slate-950 dark:via-card dark:to-violet-950/20 shadow-md shadow-primary/5">
        <div
          className="h-1 w-full shrink-0 bg-gradient-to-r from-amber-400 via-violet-500 to-emerald-500"
          aria-hidden
        />
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:gap-4 sm:p-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/18 to-violet-500/18 text-primary ring-1 ring-primary/20">
            <FolderTree className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1 space-y-2">
            <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-violet-500" />
              EU funding · OPSKE
            </p>
            <h1 className="text-[15px] font-semibold leading-snug tracking-tight text-foreground sm:text-base">
              Expense categories (OPSKE)
            </h1>
            <p className="max-w-2xl text-[11px] leading-relaxed text-muted-foreground">
              Categories and limits are stored per program. Choose a program to review OPSKE codes,
              percentages, and max amounts side by side.
            </p>
          </div>
        </div>
      </div>

      <Card className="overflow-hidden rounded-2xl border border-primary/12 bg-card/80 shadow-md shadow-primary/5">
        <div
          className="h-0.5 w-full shrink-0 bg-gradient-to-r from-sky-400/70 via-violet-500/60 to-emerald-400/70"
          aria-hidden
        />
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border/60 hover:bg-transparent bg-gradient-to-r from-slate-50/95 to-violet-50/35 dark:from-slate-900/80 dark:to-violet-950/25">
                <TableHead className="h-10 pl-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:pl-6">
                  Program
                </TableHead>
                <TableHead className="h-10 w-[180px] pr-4 text-right text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:pr-6">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programs.map((p: { id: string; nameEL: string; nameEN?: string | null }) => (
                <TableRow
                  key={p.id}
                  className="border-b border-border/60 transition-colors hover:bg-muted/40"
                >
                  <TableCell className="py-3 pl-4 md:pl-6">
                    <div className="flex max-w-xl flex-col gap-0.5">
                      <span className="text-[13px] font-semibold leading-snug tracking-tight text-foreground line-clamp-2">
                        {p.nameEL}
                      </span>
                      {p.nameEN ? (
                        <span className="line-clamp-1 text-[10px] leading-tight text-muted-foreground">
                          {p.nameEN}
                        </span>
                      ) : null}
                    </div>
                  </TableCell>
                  <TableCell className="py-3 pr-4 text-right md:pr-6">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 border-primary/20 bg-primary/[0.04] text-[11px] text-primary hover:bg-primary/[0.08]"
                      asChild
                    >
                      <Link href={`/admin/eu-programs/${p.id}/expense-categories`}>
                        Open
                        <ChevronRight className="ml-1 h-3.5 w-3.5 opacity-70" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {programs.length === 0 && (
                <TableRow className="hover:bg-transparent">
                  <TableCell colSpan={2} className="py-14 text-center text-[11px] text-muted-foreground">
                    No EU programs yet. Create one under EU Programs first.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
