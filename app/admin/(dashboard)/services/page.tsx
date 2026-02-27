import { getServices, getServiceCategories } from "@/app/lib/actions/service"
import { ServicesTableClient } from "@/app/admin/services/ServicesTableClient"

export const dynamic = "force-dynamic"

export default async function ServicesPage() {
  const [services, categories] = await Promise.all([
    getServices(),
    getServiceCategories(),
  ])

  return (
    <div className="flex flex-1 flex-col p-4 md:p-6 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Services Management</h1>
      </div>
      <ServicesTableClient initialServices={services} categories={categories} />
    </div>
  )
}
