import { Metadata } from "next"
import { getPositions } from "@/app/lib/actions/career"
import { DataTablePositions } from "@/components/admin/careers/data-table-positions"

export const metadata: Metadata = { title: "Careers - Positions | Admin" }

export default async function CareersPage() {
  const positions = await getPositions()

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Open Positions</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage job listings. Drag to reorder.</p>
      </div>
      <DataTablePositions data={positions as any} />
    </div>
  )
}
