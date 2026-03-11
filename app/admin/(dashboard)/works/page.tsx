import { Metadata } from "next"
import { getWorks, getWorkCustomers, getWorkServices } from "@/app/lib/actions/work"
import { DataTableWorks } from "@/components/admin/works/data-table-works"

export const dynamic = "force-dynamic"
export const metadata: Metadata = { title: "Project | Admin Dashboard" }

export default async function WorksPage() {
  const [works, customers, services] = await Promise.all([
    getWorks(),
    getWorkCustomers(),
    getWorkServices(),
  ])

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Διαχείριση Έργων / Project Management</h1>
          <p className="text-sm text-muted-foreground mt-1">Διαχείριση έργων χαρτοφυλακίου, μελετών περίπτωσης και ιστοριών επιτυχίας. / Manage portfolio projects, case studies, and client success stories.</p>
        </div>
      </div>
      <DataTableWorks
        data={works as any}
        allCustomers={customers as any}
        allServices={services as any}
      />
    </div>
  )
}
