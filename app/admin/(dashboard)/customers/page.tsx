import { Metadata } from "next"
import { getCustomers, getSoftOneLookups } from "@/app/lib/actions/trdr"
import { getAddressRegionMap } from "@/app/lib/actions/address-region"
import { CustomersDataTable } from "@/components/admin/customers/data-table-customers"
import { SyncAllFromSoftOneButton } from "@/components/admin/customers/sync-all-from-softone-button"
import { SyncLookupsButton } from "@/components/admin/customers/sync-lookups-button"
import { SyncGeodataButton } from "@/components/admin/customers/sync-geodata-button"
import { SyncEmailAccButton } from "@/components/admin/customers/sync-emailacc-button"
import { RemoveInactiveButton } from "@/components/admin/customers/remove-inactive-button"

export const metadata: Metadata = { title: "Customers | Admin Dashboard" }

export default async function CustomersPage() {
  const [customers, lookups, addressRegionMap] = await Promise.all([
    getCustomers(),
    getSoftOneLookups(),
    getAddressRegionMap(),
  ])

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Customers</h1>
        <div className="flex flex-wrap items-center gap-2">
          <SyncAllFromSoftOneButton />
          <SyncLookupsButton />
          <SyncGeodataButton />
          <SyncEmailAccButton />
          <span className="w-px h-6 bg-border shrink-0" aria-hidden />
          <RemoveInactiveButton />
        </div>
      </div>
      <CustomersDataTable
        data={customers}
        lookups={lookups}
        mapStaticUrl={process.env.MAPTILER_API_KEY ? "/api/admin/map/static" : null}
        addressRegionMap={addressRegionMap}
      />
    </div>
  )
}
