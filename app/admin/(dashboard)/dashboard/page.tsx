export const dynamic = "force-dynamic"
import Link from "next/link"
import prisma from "@/lib/prisma"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
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

const adminLinksWithCountKeys = [
  { title: "Services", href: "/admin/services", icon: WrenchIcon, countKey: "services" as const },
  { title: "Customers", href: "/admin/customers", icon: UsersIcon, countKey: "customers" as const },
  { title: "Articles", href: "/admin/articles", icon: FileTextIcon, countKey: "articles" as const },
  { title: "Downloads", href: "/admin/downloads", icon: FolderIcon, countKey: "downloads" as const },
  { title: "Careers", href: "/admin/careers", icon: UsersIcon, countKey: "careers" as const },
  { title: "Projects", href: "/admin/works", icon: FolderIcon, countKey: "projects" as const },
  { title: "Locations", href: "/admin/locations", icon: MapPinIcon, countKey: "locations" as const },
  { title: "EU Programs", href: "/admin/eu-programs", icon: BriefcaseIcon, countKey: "euPrograms" as const },
]

type CountKeys = typeof adminLinksWithCountKeys[number]["countKey"]

async function getDashboardCounts(): Promise<Record<CountKeys, number>> {
  try {
    const [customers, services, articles, downloads, careers, projects, locations, euPrograms] = await Promise.all([
      prisma.tRDR.count(),
      prisma.service.count(),
      prisma.article.count(),
      prisma.download.count(),
      prisma.position.count(),
      prisma.work.count(),
      prisma.presence.count(),
      prisma.euProgram.count(),
    ])
    return {
      customers,
      services,
      articles,
      downloads,
      careers,
      projects,
      locations,
      euPrograms,
    }
  } catch {
    return {
      customers: 0,
      services: 0,
      articles: 0,
      downloads: 0,
      careers: 0,
      projects: 0,
      locations: 0,
      euPrograms: 0,
    }
  }
}

export default async function DashboardPage() {
  const counts = await getDashboardCounts()

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="px-4 lg:px-6">
            <h2 className="text-sm font-semibold text-muted-foreground mb-3">Quick links</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-3">
              {adminLinksWithCountKeys.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="hover:bg-muted/50 transition-colors h-full">
                    <CardHeader className="flex flex-row items-center justify-between gap-3 py-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <item.icon className="h-5 w-5 shrink-0 text-muted-foreground" />
                        <CardTitle className="text-sm font-medium truncate">{item.title}</CardTitle>
                      </div>
                      <span className="text-lg font-semibold tabular-nums shrink-0 text-muted-foreground">
                        {counts[item.countKey].toLocaleString()}
                      </span>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  )
}
