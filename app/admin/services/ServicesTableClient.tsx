"use client"

import dynamic from "next/dynamic"
import { ServiceWithRelations, ServiceCategoryWithCount } from "@/app/lib/types/service"
import type { ServiceType } from "@/components/admin/services/services-table"

const ServicesTable = dynamic(
    () => import("@/components/admin/services/services-table").then(m => m.ServicesTable),
    { ssr: false, loading: () => <div className="h-96 flex items-center justify-center">Loading services...</div> }
)

function normalizeBenefits(val: unknown): string[] | null {
    if (val == null) return null
    if (Array.isArray(val)) return val.every((x): x is string => typeof x === "string") ? val : val.map(String)
    return null
}

export function ServicesTableClient({
    initialServices,
    categories
}: {
    initialServices: ServiceWithRelations[],
    categories: ServiceCategoryWithCount[]
}) {
    const initialData: ServiceType[] = initialServices.map((s) => ({
        ...s,
        benefitsEL: normalizeBenefits(s.benefitsEL),
        benefitsEN: normalizeBenefits(s.benefitsEN),
    })) as ServiceType[]
    return (
        <ServicesTable
            initialData={initialData}
            categories={categories}
        />
    )
}
