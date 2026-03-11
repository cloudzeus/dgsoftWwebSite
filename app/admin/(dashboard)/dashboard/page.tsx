export const dynamic = "force-dynamic"
import Link from "next/link"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import data from "./data.json"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileTextIcon,
  FolderIcon,
  UsersIcon,
  WrenchIcon,
  BriefcaseIcon,
  MapPinIcon,
} from "lucide-react"

const adminLinks = [
  { title: "Services", href: "/admin/services", icon: WrenchIcon },
  { title: "Customers", href: "/admin/customers", icon: UsersIcon },
  { title: "Articles", href: "/admin/articles", icon: FileTextIcon },
  { title: "Downloads", href: "/admin/downloads", icon: FolderIcon },
  { title: "Careers", href: "/admin/careers", icon: UsersIcon },
  { title: "Projects", href: "/admin/works", icon: FolderIcon },
  { title: "Locations", href: "/admin/locations", icon: MapPinIcon },
  { title: "EU Programs", href: "/admin/eu-programs", icon: BriefcaseIcon },
]

export default async function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <h2 className="text-sm font-semibold text-muted-foreground mb-3">Quick links</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3">
              {adminLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="hover:bg-muted/50 transition-colors h-full">
                    <CardHeader className="flex flex-row items-center gap-3 py-4">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  )
}
