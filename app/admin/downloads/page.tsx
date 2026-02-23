import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getDownloads } from "@/app/lib/actions/download";
import { DataTableDownloads } from "@/components/admin/downloads/data-table-downloads";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = { title: "Downloads | Admin Dashboard" };

export default async function DownloadsPage() {
    const session = await auth();
    if (!session || session.user?.role !== "ADMIN") redirect("/admin/login");

    const downloads = await getDownloads();

    return (
        <SidebarProvider>
            <AppSidebar variant="inset" user={{ name: session?.user?.name || "Admin", email: session?.user?.email || "", avatar: session?.user?.image || "" }} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-foreground">Downloads</h1>
                            <p className="text-muted-foreground text-sm mt-1">
                                Manage downloadable files visible on the website. Drag rows to reorder.
                            </p>
                        </div>
                    </div>
                    <DataTableDownloads data={downloads as any} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
