import { Metadata } from 'next';
import { getArticles, getArticleCategories } from "@/app/lib/actions/article"
import { DataTableArticles } from "@/components/admin/articles/data-table-articles"
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
    title: 'Articles | Admin Dashboard',
};

export default async function ArticlesPage() {
    const session = await auth();
    if (!session) redirect('/admin/login');

    const articles = await getArticles()
    const categories = await getArticleCategories()

    return (
        <SidebarProvider>
            <AppSidebar variant="inset" user={{ name: session?.user?.name || "Admin", email: session?.user?.email || "", avatar: session?.user?.image || "" }} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">Νέα & Άρθρα</h1>
                    </div>
                    <DataTableArticles data={articles as any} allCategories={categories as any} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
