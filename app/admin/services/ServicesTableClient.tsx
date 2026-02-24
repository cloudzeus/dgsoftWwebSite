"use client"

import dynamic from "next/dynamic"
import { ServiceType, ServiceCategoryType } from "@/components/admin/services/services-table"

const ServicesTable = dynamic(
    () => import("@/components/admin/services/services-table").then(m => m.ServicesTable),
    { ssr: false, loading: () => <div className="h-96 flex items-center justify-center">Loading services...</div> }
)

export function ServicesTableClient({
    initialServices,
    categories
}: {
    initialServices: ServiceType[],
    categories: ServiceCategoryType[]
}) {
    return (
        <ServicesTable
            initialData={initialServices}
            categories={categories}
        />
    )
}
