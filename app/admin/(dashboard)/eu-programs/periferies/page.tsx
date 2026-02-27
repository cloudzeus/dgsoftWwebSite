import { Metadata } from "next"
import { getAllPeriferies } from "@/app/lib/actions/eu-program"
import { PeriferiasTableClient } from "@/app/admin/eu-programs/periferies/PeriferiasTableClient"

export const metadata: Metadata = { title: "Periferies | Admin Dashboard" }

export default async function PeriferiesPage() {
  const periferies = await getAllPeriferies()

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Periferies Management</h1>
      </div>
      <PeriferiasTableClient data={periferies as any} />
    </div>
  )
}
