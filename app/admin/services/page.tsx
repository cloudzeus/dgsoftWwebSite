import { getServices, getServiceCategories } from "@/app/lib/actions/service"
import { ServicesTableClient } from "./ServicesTableClient"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"

export const dynamic = "force-dynamic"

export default async function ServicesPage() {
    const session = await auth()
    if (!session || session.user?.role !== "ADMIN") redirect("/admin/login")

    const [services, categories] = await Promise.all([
        getServices(),
        getServiceCategories()
    ])

    return (
        <SidebarProvider>
            <AppSidebar variant="inset" user={{
                name: session?.user?.name || "Admin",
                email: session?.user?.email || "",
                avatar: session?.user?.image || ""
            }} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6 space-y-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">Services Management</h1>
                    </div>
                    <ServicesTableClient
                        initialServices={services}
                        categories={categories}
                    />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
