import { Metadata } from "next"
import { getAllKadsList, getEuPrograms } from "@/app/lib/actions/eu-program"
import { DataTableKads } from "@/components/admin/eu-programs/data-table-kads"

export const metadata: Metadata = { title: "KAD Management | Admin Dashboard" }

export default async function KadsPage() {
  const [kads, programs] = await Promise.all([
    getAllKadsList(),
    getEuPrograms(),
  ])

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Government KADs Directory</h1>
      </div>
      <DataTableKads data={kads as any} programs={programs as any} />
    </div>
  )
}
