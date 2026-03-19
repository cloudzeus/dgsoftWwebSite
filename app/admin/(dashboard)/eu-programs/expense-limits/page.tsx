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
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">EU Program Expense Limits</h1>
      </div>

      <div className="rounded-xl border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Program</TableHead>
              <TableHead className="w-[100px]">Code</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Min %</TableHead>
              <TableHead>Max %</TableHead>
              <TableHead>Max Amount</TableHead>
              <TableHead>Mandatory</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {limits.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell className="text-sm">{row.euProgram?.nameEL || "—"}</TableCell>
                <TableCell>
                  <code className="text-xs font-mono">{row.expenseCategory?.code || "—"}</code>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">{row.expenseCategory?.descriptionEL || "—"}</TableCell>
                <TableCell className="text-sm">{toPct(row.minPercentage)}</TableCell>
                <TableCell className="text-sm">{toPct(row.maxPercentage)}</TableCell>
                <TableCell className="text-sm">{toMoney(row.maxAmount)}</TableCell>
                <TableCell>
                  {row.isMandatory ? <Badge>Yes</Badge> : <Badge variant="secondary">No</Badge>}
                </TableCell>
              </TableRow>
            ))}
            {limits.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-sm text-muted-foreground py-8">
                  No expense limits imported yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
