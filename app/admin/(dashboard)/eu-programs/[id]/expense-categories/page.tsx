import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ClipboardList, Euro, Layers, Sparkles } from "lucide-react"
import { getEuProgramById, getExpenseCategories } from "@/app/lib/actions/eu-program"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const metadata: Metadata = { title: "Expense Categories | Admin Dashboard" }

type Props = { params: Promise<{ id: string }> }

/** DB stores fractions (0.15 = 15%) — same as expense-limits page */
function toPct(value: number | null | undefined): string {
  if (value == null) return "—"
  return `${(value * 100).toFixed(2)}%`
}

function toMoney(value: unknown): string {
  if (value == null || value === "") return "—"
  const n = Number(value)
  if (!Number.isFinite(n)) return "—"
  return `${n.toLocaleString("el-GR", { minimumFractionDigits: 0, maximumFractionDigits: 2 })} €`
}

export default async function ProgramExpenseCategoriesPage({ params }: Props) {
  const { id } = await params
  const program = await getEuProgramById(id)
  if (!program) notFound()

  const categories = await getExpenseCategories(id)

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 p-4 md:p-6">
      <Button
        variant="ghost"
        size="sm"
        className="-ml-2 h-8 w-fit gap-1.5 text-[11px] text-muted-foreground hover:text-foreground"
        asChild
      >
        <Link href="/admin/eu-programs/expense-categories">
          <ArrowLeft className="h-3.5 w-3.5" /> All programs
        </Link>
      </Button>

      <div className="overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-slate-50/90 via-card to-emerald-50/25 dark:from-slate-950 dark:via-card dark:to-emerald-950/15 shadow-md shadow-primary/5">
        <div
          className="h-1 w-full shrink-0 bg-gradient-to-r from-amber-400 via-violet-500 to-emerald-500"
          aria-hidden
        />
        <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:p-5">
          <div className="flex min-w-0 flex-1 gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/18 to-emerald-500/18 text-primary ring-1 ring-primary/20">
              <Layers className="h-5 w-5" />
            </span>
            <div className="min-w-0 space-y-2">
              <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-violet-500" />
                EU program · OPSKE
              </p>
              <h1 className="text-[15px] font-semibold leading-snug tracking-tight text-foreground sm:text-base">
                Expense categories (OPSKE)
              </h1>
              <p className="text-[13px] font-semibold leading-snug text-foreground line-clamp-3">{program.nameEL}</p>
              {program.nameEN ? (
                <p className="line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">{program.nameEN}</p>
              ) : null}
              <div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-teal-500/8 px-2.5 py-1 text-[10px] font-medium text-emerald-900 dark:text-emerald-100">
                <span className="text-muted-foreground dark:text-emerald-200/80">Categories</span>
                <span className="tabular-nums font-semibold">{categories.length}</span>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-primary/20 bg-primary/[0.04] text-[11px] text-primary hover:bg-primary/[0.08]"
              asChild
            >
              <Link href={`/admin/eu-programs/${id}`}>Program details</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-violet-500/25 bg-violet-500/8 text-[11px] font-medium text-violet-900 hover:bg-violet-500/14 dark:text-violet-100 dark:bg-violet-500/12"
              asChild
            >
              <Link href="/admin/eu-programs/expense-limits">
                <ClipboardList className="mr-1.5 h-3.5 w-3.5" />
                All expense limits
              </Link>
            </Button>
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
                <TableHead className="h-10 min-w-[100px] pl-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:pl-6">
                  Code
                </TableHead>
                <TableHead className="h-10 min-w-[200px] text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Description (EL)
                </TableHead>
                <TableHead className="h-10 min-w-[120px] text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Sub-category
                </TableHead>
                <TableHead className="h-10 w-[88px] text-right text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Min %
                </TableHead>
                <TableHead className="h-10 w-[88px] text-right text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Max %
                </TableHead>
                <TableHead className="h-10 min-w-[120px] text-right text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  <span className="inline-flex items-center justify-end gap-1">
                    <Euro className="h-3 w-3 opacity-70" aria-hidden />
                    Max amount
                  </span>
                </TableHead>
                <TableHead className="h-10 w-[96px] text-center text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Required
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map(
                (row: {
                  id: string
                  code: string
                  descriptionEL: string
                  subCategoryEL: string | null
                  expenseLimits?: Array<{
                    minPercentage: number | null
                    maxPercentage: number | null
                    maxAmount: string | number | null
                    isMandatory: boolean
                  }>
                }) => {
                  const lim = row.expenseLimits?.[0]
                  return (
                    <TableRow
                      key={row.id}
                      className="group border-b border-border/60 transition-colors hover:bg-muted/35"
                    >
                      <TableCell className="pl-4 md:pl-6 align-middle">
                        <span
                          className={cn(
                            "inline-flex max-w-full rounded-md border border-violet-500/20 bg-violet-500/8 px-2 py-0.5",
                            "font-mono text-[11px] font-semibold tracking-tight text-foreground",
                            "dark:bg-violet-500/12"
                          )}
                        >
                          {row.code}
                        </span>
                      </TableCell>
                      <TableCell className="max-w-[min(28rem,55vw)] text-[12px] leading-snug text-foreground">
                        {row.descriptionEL}
                      </TableCell>
                      <TableCell className="text-[11px] text-muted-foreground">
                        {row.subCategoryEL || <span className="text-muted-foreground/50">—</span>}
                      </TableCell>
                      <TableCell className="text-right text-[11px] tabular-nums text-foreground">
                        {toPct(lim?.minPercentage ?? null)}
                      </TableCell>
                      <TableCell className="text-right text-[11px] tabular-nums text-foreground">
                        {toPct(lim?.maxPercentage ?? null)}
                      </TableCell>
                      <TableCell className="text-right text-[11px] tabular-nums text-foreground">
                        {toMoney(lim?.maxAmount ?? null)}
                      </TableCell>
                      <TableCell className="pr-4 text-center md:pr-6">
                        {lim ? (
                          <Badge
                            variant={lim.isMandatory ? "default" : "secondary"}
                            className={cn(
                              "text-[10px] font-medium",
                              lim.isMandatory &&
                                "border-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-600"
                            )}
                          >
                            {lim.isMandatory ? "Yes" : "No"}
                          </Badge>
                        ) : (
                          <span className="text-[11px] text-muted-foreground/60">—</span>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                }
              )}
              {categories.length === 0 && (
                <TableRow className="hover:bg-transparent">
                  <TableCell colSpan={7} className="py-14 text-center text-[11px] text-muted-foreground">
                    No expense categories for this program yet. Add limits in program details or import a PDF.
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
