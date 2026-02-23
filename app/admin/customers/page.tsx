import { Metadata } from 'next';
import { getCustomers } from '@/app/lib/actions/trdr';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { CustomersDataTable } from '@/components/admin/customers/data-table-customers';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
    title: 'Customers | Admin Dashboard',
};

export default async function CustomersPage() {
    const session = await auth();
    if (!session) redirect('/admin/login');

    const customers = await getCustomers();

    return (
        <SidebarProvider>
            <AppSidebar variant="inset" user={{ name: session?.user?.name || "Admin", email: session?.user?.email || "", avatar: session?.user?.image || "" }} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">Customers</h1>
                    </div>
                    <CustomersDataTable data={customers} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
