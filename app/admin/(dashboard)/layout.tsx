import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) redirect("/admin/login")
  if (session.user?.role !== "ADMIN") redirect("/admin/login")

  return (
    <div className="admin-theme min-h-screen bg-background text-foreground">
      <SidebarProvider>
        <AppSidebar
          variant="inset"
          user={{
            name: session.user?.name || "Admin",
            email: session.user?.email || "",
            avatar: (session.user as { image?: string })?.image || "",
          }}
        />
        <SidebarInset>
          <SiteHeader />
          <main className="flex-1 p-4 md:p-6">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </div>
  )
}
