import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ClipboardList, Euro, Layers } from "lucide-react"
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
    <div className="p-4 md:p-6 space-y-6">
      <Button variant="ghost" size="sm" className="-ml-2 h-8 w-fit" asChild>
        <Link href="/admin/eu-programs/expense-categories" className="gap-2 text-muted-foreground">
          <ArrowLeft className="h-4 w-4" /> All programs
        </Link>
      </Button>

      <Card className="overflow-hidden border-border/80 shadow-sm">
        <CardHeader className="border-b bg-muted/30 px-4 py-5 md:px-6 md:py-6 space-y-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Layers className="h-4 w-4 shrink-0" aria-hidden />
                <span className="text-xs font-medium uppercase tracking-wide">EU program</span>
              </div>
              <CardTitle className="text-xl md:text-2xl font-semibold tracking-tight">
                Expense categories (OPSKE)
              </CardTitle>
              <CardDescription className="text-base text-foreground/80 font-medium">
                {program.nameEL}
              </CardDescription>
              {program.nameEN ? (
                <p className="text-sm text-muted-foreground">{program.nameEN}</p>
              ) : null}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm" className="shadow-sm" asChild>
                <Link href={`/admin/eu-programs/${id}`}>Program details</Link>
              </Button>
              <Button variant="secondary" size="sm" className="shadow-sm" asChild>
                <Link href="/admin/eu-programs/expense-limits">
                  <ClipboardList className="mr-1.5 h-4 w-4" />
                  All expense limits
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            <div className="inline-flex items-center gap-2 rounded-lg border bg-background/80 px-3 py-2 text-sm shadow-sm">
              <span className="text-muted-foreground">Categories</span>
              <span className="font-semibold tabular-nums">{categories.length}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b bg-muted/40 hover:bg-muted/40">
                <TableHead className="h-11 min-w-[100px] pl-4 md:pl-6 font-semibold text-foreground">
                  Code
                </TableHead>
                <TableHead className="h-11 min-w-[200px] font-semibold text-foreground">
                  Description (EL)
                </TableHead>
                <TableHead className="h-11 min-w-[120px] font-semibold text-foreground">
                  Sub-category
                </TableHead>
                <TableHead className="h-11 w-[88px] text-right font-semibold text-foreground">
                  Min %
                </TableHead>
                <TableHead className="h-11 w-[88px] text-right font-semibold text-foreground">
                  Max %
                </TableHead>
                <TableHead className="h-11 min-w-[120px] text-right font-semibold text-foreground">
                  <span className="inline-flex items-center justify-end gap-1">
                    <Euro className="h-3.5 w-3.5 opacity-70" aria-hidden />
                    Max amount
                  </span>
                </TableHead>
                <TableHead className="h-11 w-[96px] text-center font-semibold text-foreground">
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
                            "inline-flex max-w-full rounded-md border border-border/80 bg-muted/60 px-2.5 py-1",
                            "font-mono text-xs font-medium tracking-tight text-foreground",
                            "dark:bg-muted/40"
                          )}
                        >
                          {row.code}
                        </span>
                      </TableCell>
                      <TableCell className="max-w-[min(28rem,55vw)] text-sm leading-snug text-foreground">
                        {row.descriptionEL}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {row.subCategoryEL || (
                          <span className="text-muted-foreground/50">—</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right text-sm tabular-nums text-foreground">
                        {toPct(lim?.minPercentage ?? null)}
                      </TableCell>
                      <TableCell className="text-right text-sm tabular-nums text-foreground">
                        {toPct(lim?.maxPercentage ?? null)}
                      </TableCell>
                      <TableCell className="text-right text-sm tabular-nums text-foreground">
                        {toMoney(lim?.maxAmount ?? null)}
                      </TableCell>
                      <TableCell className="text-center pr-4 md:pr-6">
                        {lim ? (
                          <Badge
                            variant={lim.isMandatory ? "default" : "secondary"}
                            className="font-medium"
                          >
                            {lim.isMandatory ? "Yes" : "No"}
                          </Badge>
                        ) : (
                          <span className="text-sm text-muted-foreground/60">—</span>
                        )}
                      </TableCell>
                    </TableRow>
                  )
                }
              )}
              {categories.length === 0 && (
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={7}
                    className="py-14 text-center text-sm text-muted-foreground"
                  >
                    No expense categories for this program yet. Add limits in program details or import
                    a PDF.
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
