import { Metadata } from 'next'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { getWorks, getWorkCustomers, getWorkServices } from '@/app/lib/actions/work'
import { DataTableWorks } from '@/components/admin/works/data-table-works'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
    title: 'Project | Admin Dashboard',
}

export default async function WorksPage() {
    const session = await auth()
    if (!session) redirect('/admin/login')

    const [works, customers, services] = await Promise.all([
        getWorks(),
        getWorkCustomers(),
        getWorkServices(),
    ])

    return (
        <SidebarProvider>
            <AppSidebar
                variant="inset"
                user={{
                    name: session?.user?.name || 'Admin',
                    email: session?.user?.email || '',
                    avatar: session?.user?.image || '',
                }}
            />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-foreground">Project Management</h1>
                            <p className="text-sm text-muted-foreground mt-1">Manage portfolio projects, case studies, and client success stories.</p>
                        </div>
                    </div>
                    <DataTableWorks
                        data={works as any}
                        allCustomers={customers as any}
                        allServices={services as any}
                    />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
