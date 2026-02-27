export const dynamic = "force-dynamic"
import { Metadata } from "next"
import { getLocations } from "@/app/lib/actions/location"
import { DataTableLocations } from "@/components/admin/locations/data-table-locations"

export const metadata: Metadata = { title: "Locations | Admin Dashboard" }

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Locations (Presence)</h1>
      </div>
      <DataTableLocations data={locations as any} />
    </div>
  )
}
