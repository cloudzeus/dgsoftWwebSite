import { Metadata } from 'next';
import { getAllPeriferies } from "@/app/lib/actions/eu-program"
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { PeriferiasTableClient } from './PeriferiasTableClient';

export const metadata: Metadata = {
    title: 'Periferies | Admin Dashboard',
};

export default async function PeriferiesPage() {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') redirect('/admin/login');

    const periferies = await getAllPeriferies()

    return (
        <SidebarProvider>
            <AppSidebar variant="inset" user={{ name: session?.user?.name || "Admin", email: session?.user?.email || "", avatar: session?.user?.image || "" }} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">Periferies Management</h1>
                    </div>
                    <PeriferiasTableClient data={periferies as any} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
