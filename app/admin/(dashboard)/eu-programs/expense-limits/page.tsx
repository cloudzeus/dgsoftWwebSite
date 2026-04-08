import { Metadata } from "next"
import { getEuProgramExpenseLimits } from "@/app/lib/actions/eu-program"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList } from "lucide-react"

export const metadata: Metadata = { title: "Program Expense Limits | Admin Dashboard" }

function toPct(value: number | null | undefined): string {
  if (value == null) return "—"
  return `${(value * 100).toFixed(2)}%`
}

function toMoney(value: unknown): string {
  if (value == null || value === "") return "—"
  const n = Number(value)
  if (!Number.isFinite(n)) return String(value)
  return `${n.toLocaleString("el-GR")} EUR`
}

export default async function ExpenseLimitsPage() {
  const limits = await getEuProgramExpenseLimits()

  return (
    <div className="p-4 md:p-6 space-y-6">
      <Card className="overflow-hidden border-border/80 shadow-sm">
        <CardHeader className="border-b bg-muted/30 px-4 py-5 md:px-6 md:py-6 space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <ClipboardList className="h-4 w-4 shrink-0" aria-hidden />
            <span className="text-xs font-medium uppercase tracking-wide">EU funding</span>
          </div>
          <CardTitle className="text-xl md:text-2xl font-semibold tracking-tight">
            EU program expense limits
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed max-w-2xl">
            All programs and categories in one list. Percentages are stored as fractions in the database
            and shown as percent values here.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b bg-muted/40 hover:bg-muted/40">
                <TableHead className="h-11 pl-4 md:pl-6 font-semibold text-foreground">Program</TableHead>
                <TableHead className="h-11 w-[100px] font-semibold text-foreground">Code</TableHead>
                <TableHead className="h-11 font-semibold text-foreground">Category</TableHead>
                <TableHead className="h-11 font-semibold text-foreground">Min %</TableHead>
                <TableHead className="h-11 font-semibold text-foreground">Max %</TableHead>
                <TableHead className="h-11 font-semibold text-foreground">Max amount</TableHead>
                <TableHead className="h-11 pr-4 md:pr-6 font-semibold text-foreground">Mandatory</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {limits.map((row: any) => (
                <TableRow
                  key={row.id}
                  className="border-b border-border/60 transition-colors hover:bg-muted/35"
                >
                  <TableCell className="pl-4 md:pl-6 text-sm font-medium text-foreground">
                    {row.euProgram?.nameEL || "—"}
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex rounded-md border border-border/80 bg-muted/60 px-2 py-0.5 font-mono text-xs dark:bg-muted/40">
                      {row.expenseCategory?.code || "—"}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground max-w-md">
                    {row.expenseCategory?.descriptionEL || "—"}
                  </TableCell>
                  <TableCell className="text-sm tabular-nums">{toPct(row.minPercentage)}</TableCell>
                  <TableCell className="text-sm tabular-nums">{toPct(row.maxPercentage)}</TableCell>
                  <TableCell className="text-sm tabular-nums">{toMoney(row.maxAmount)}</TableCell>
                  <TableCell className="pr-4 md:pr-6">
                    {row.isMandatory ? (
                      <Badge className="font-medium">Yes</Badge>
                    ) : (
                      <Badge variant="secondary" className="font-medium">
                        No
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {limits.length === 0 && (
                <TableRow className="hover:bg-transparent">
                  <TableCell colSpan={7} className="py-14 text-center text-sm text-muted-foreground">
                    No expense limits imported yet.
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
