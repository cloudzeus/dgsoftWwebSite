import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getPositions } from "@/app/lib/actions/career";
import { DataTablePositions } from "@/components/admin/careers/data-table-positions";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = { title: "Careers - Positions | Admin" };

export default async function PositionsPage() {
    const session = await auth();
    if (!session || session.user?.role !== "ADMIN") redirect("/admin/login");
    const positions = await getPositions();
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" user={{ name: session?.user?.name || "Admin", email: session?.user?.email || "", avatar: session?.user?.image || "" }} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">Open Positions</h1>
                        <p className="text-muted-foreground text-sm mt-1">Manage job listings. Drag to reorder.</p>
                    </div>
                    <DataTablePositions data={positions as any} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
