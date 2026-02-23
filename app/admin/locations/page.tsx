import { Metadata } from 'next';
import { getLocations } from "@/app/lib/actions/location"
import { DataTableLocations } from "@/components/admin/locations/data-table-locations"
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
    title: 'Locations | Admin Dashboard',
};

export default async function LocationsPage() {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') redirect('/admin/login');

    const locations = await getLocations()

    return (
        <SidebarProvider>
            <AppSidebar variant="inset" user={{ name: session?.user?.name || "Admin", email: session?.user?.email || "", avatar: session?.user?.image || "" }} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">Locations (Presence)</h1>
                    </div>
                    <DataTableLocations data={locations as any} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
