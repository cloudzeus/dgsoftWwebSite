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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, FolderTree } from "lucide-react"

export const metadata: Metadata = { title: "Expense Categories — Select program | Admin" }

export default async function ExpenseCategoriesProgramPickerPage() {
  const programs = await getEuPrograms()

  return (
    <div className="p-4 md:p-6 space-y-6">
      <Card className="overflow-hidden border-border/80 shadow-sm">
        <CardHeader className="border-b bg-muted/30 px-4 py-5 md:px-6 md:py-6 space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <FolderTree className="h-4 w-4 shrink-0" aria-hidden />
            <span className="text-xs font-medium uppercase tracking-wide">EU funding</span>
          </div>
          <CardTitle className="text-xl md:text-2xl font-semibold tracking-tight">
            Expense categories (OPSKE)
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed max-w-2xl">
            Categories and limits are stored per program. Choose a program to review OPSKE codes,
            percentages, and max amounts side by side.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b bg-muted/40 hover:bg-muted/40">
                <TableHead className="h-11 pl-4 md:pl-6 font-semibold text-foreground">
                  Program
                </TableHead>
                <TableHead className="h-11 w-[180px] text-right pr-4 md:pr-6 font-semibold text-foreground">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programs.map((p: { id: string; nameEL: string; nameEN?: string | null }) => (
                <TableRow
                  key={p.id}
                  className="border-b border-border/60 transition-colors hover:bg-muted/35"
                >
                  <TableCell className="pl-4 md:pl-6 py-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-foreground leading-snug">{p.nameEL}</span>
                      {p.nameEN ? (
                        <span className="text-xs text-muted-foreground">{p.nameEN}</span>
                      ) : null}
                    </div>
                  </TableCell>
                  <TableCell className="text-right pr-4 md:pr-6">
                    <Button variant="outline" size="sm" className="shadow-sm" asChild>
                      <Link href={`/admin/eu-programs/${p.id}/expense-categories`}>
                        Open
                        <ChevronRight className="ml-1 h-4 w-4 opacity-70" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {programs.length === 0 && (
                <TableRow className="hover:bg-transparent">
                  <TableCell
                    colSpan={2}
                    className="py-14 text-center text-sm text-muted-foreground"
                  >
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
