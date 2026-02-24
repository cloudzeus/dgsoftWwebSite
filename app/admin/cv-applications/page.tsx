export const dynamic = "force-dynamic";
import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getCvApplications } from "@/app/lib/actions/career";
import { DataTableCvApplications } from "@/components/admin/careers/data-table-cv-applications";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = { title: "CV Applications | Admin" };

export default async function CvApplicationsPage() {
    const session = await auth();
    if (!session || session.user?.role !== "ADMIN") redirect("/admin/login");
    const applications = await getCvApplications();
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" user={{ name: session?.user?.name || "Admin", email: session?.user?.email || "", avatar: session?.user?.image || "" }} />
            <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col p-4 md:p-6">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold tracking-tight text-foreground">CV Applications</h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            {applications.length} application{applications.length !== 1 ? "s" : ""} received
                        </p>
                    </div>
                    <DataTableCvApplications data={applications as any} />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
