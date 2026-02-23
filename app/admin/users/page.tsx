import { Metadata } from 'next';
import { getUsers } from "@/app/lib/actions/user"
import { DataTableUsers } from "@/components/admin/users/data-table-users"
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
    title: 'System Users | Admin Dashboard',
};

export default async function UsersPage() {
    const session = await auth();
    if (!session || session.user?.role !== 'ADMIN') redirect('/admin/login');

    const users = await getUsers()

    return (
        <SidebarProvider>
            <AppSidebar variant="inset" user={{ name: session?.user?.name || "Admin", email: session?.user?.email || "", avatar: session?.user?.image || "" }} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">System Users</h1>
                    </div>
                    <DataTableUsers data={users as any} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
