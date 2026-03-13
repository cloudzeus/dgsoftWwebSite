"use client"

import * as React from "react"
import Link from "next/link"
import {
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  MapPinIcon,
  BriefcaseIcon,
  GlobeIcon,
  WrenchIcon,
  PlugIcon,
  MailIcon,
  SendIcon,
  LayoutTemplateIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import dynamic from "next/dynamic"

const NavUser = dynamic(
  () => import("@/components/nav-user").then((m) => m.NavUser),
  { ssr: false, loading: () => <div className="h-12" /> }
)
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar,
} from "@/components/ui/sidebar"

const navData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboardIcon,
    },

    {
      title: "Customers",
      url: "/admin/customers",
      icon: UsersIcon,
    },
    {
      title: "Articles",
      url: "/admin/articles",
      icon: FileTextIcon,
    },
    {
      title: "Services",
      url: "/admin/services",
      icon: WrenchIcon,
    },
    {
      title: "Downloads",
      url: "/admin/downloads",
      icon: FolderIcon,
    },
    {
      title: "Careers",
      url: "/admin/careers",
      icon: UsersIcon,
    },
    {
      title: "CV Applications",
      url: "/admin/cv-applications",
      icon: FileTextIcon,
    },
    {
      title: "System Users",
      url: "/admin/users",
      icon: UsersIcon,
    },
    {
      title: "Location",
      url: "/admin/locations",
      icon: MapPinIcon,
    },
    {
      title: "Projects",
      url: "/admin/works",
      icon: FolderIcon,
    },
    {
      title: "Send email",
      url: "/admin/email",
      icon: MailIcon,
    },
  ],
  navNewsletter: [
    {
      title: "Templates",
      url: "/admin/newsletter/templates",
      icon: LayoutTemplateIcon,
    },
    {
      title: "Campaigns",
      url: "/admin/newsletter/campaigns",
      icon: SendIcon,
    },
    {
      title: "Media gallery",
      url: "/admin/newsletter/media",
      icon: CameraIcon,
    },
  ],
  navFunding: [
    {
      title: "EU Programs",
      url: "/admin/eu-programs",
      icon: BriefcaseIcon,
    },
    {
      title: "Periferies",
      url: "/admin/eu-programs/periferies",
      icon: GlobeIcon,
    },
    {
      title: "Address → Region",
      url: "/admin/eu-programs/address-mapping",
      icon: MapPinIcon,
    },
    {
      title: "KAD Management",
      url: "/admin/eu-programs/kads",
      icon: FileCodeIcon,
    }
  ],
  navSoftone: [
    {
      title: "Connection & Status",
      url: "/admin/softone",
      icon: PlugIcon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],

}

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  user?: { name: string; email: string; avatar: string }
}) {
  const resolvedUser = user ?? { name: "Admin", email: "", avatar: "" }
  const { state } = useSidebar()
  const logoExpanded = "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404552985-q91g8r.webp"
  const logoCollapsed = "https://dgsmart.b-cdn.net/newsletter/newsletter-1773404641179-7ql2ec.webp"
  const logoSrc = state === "collapsed" ? logoCollapsed : logoExpanded

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a
                href="/admin/dashboard"
                className={`flex items-center overflow-hidden ${state === "expanded" ? "justify-start" : "justify-center"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoSrc}
                  alt="DGSmart"
                  className="h-8 w-auto max-w-full object-contain object-left"
                />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navData.navMain} />

        <SidebarGroup>
          <SidebarGroupLabel>Newsletter</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {navData.navNewsletter.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Funding & European Programs</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {navData.navFunding.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>SOFTONE</SidebarGroupLabel>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {navData.navSoftone.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <NavSecondary items={navData.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={resolvedUser} />
      </SidebarFooter>
    </Sidebar>
  )
}
