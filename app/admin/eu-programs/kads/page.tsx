import { Metadata } from 'next';
import { getAllKadsList, getEuPrograms } from "@/app/lib/actions/eu-program"
import { DataTableKads } from "@/components/admin/eu-programs/data-table-kads"
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
    title: 'KAD Management | Admin Dashboard',
};

export default async function KadsPage() {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') redirect('/admin/login');

    const [kads, programs] = await Promise.all([
        getAllKadsList(),
        getEuPrograms(),
    ])

    const sidebarUser = {
        name: session.user?.name || "Admin",
        email: session.user?.email || "",
        avatar: session.user?.image || "",
    }

    return (
        <SidebarProvider>
            <AppSidebar variant="inset" user={sidebarUser} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">Government KADs Directory</h1>
                    </div>
                    <DataTableKads data={kads as any} programs={programs as any} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
