import { Metadata } from "next"
import { getCustomers } from "@/app/lib/actions/trdr"
import { CustomersDataTable } from "@/components/admin/customers/data-table-customers"

export const metadata: Metadata = { title: "Customers | Admin Dashboard" }

export default async function CustomersPage() {
  const customers = await getCustomers()

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Customers</h1>
      </div>
      <CustomersDataTable data={customers} />
    </div>
  )
}
