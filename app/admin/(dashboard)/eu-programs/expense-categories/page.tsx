import { Metadata } from "next"
import { getExpenseCategories } from "@/app/lib/actions/eu-program"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = { title: "Expense Categories | Admin Dashboard" }

export default async function ExpenseCategoriesPage() {
  const categories = await getExpenseCategories()

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Expense Categories (OPSKE)</h1>
      </div>

      <div className="rounded-xl border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[140px]">Code</TableHead>
              <TableHead>Description (EL)</TableHead>
              <TableHead>Sub-category</TableHead>
              <TableHead className="text-right">Program Limits</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell>
                  <code className="text-xs font-mono">{row.code}</code>
                </TableCell>
                <TableCell className="text-sm">{row.descriptionEL}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{row.subCategoryEL || "—"}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="secondary">{row._count?.expenseLimits ?? 0}</Badge>
                </TableCell>
              </TableRow>
            ))}
            {categories.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-sm text-muted-foreground py-8">
                  No expense categories yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
