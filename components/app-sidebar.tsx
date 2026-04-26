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
  CalendarDaysIcon,
  FileCode2Icon,
  HomeIcon,
  PanelBottomIcon,
  ShieldIcon,
  CookieIcon,
  Wand2Icon,
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
      title: "Πίνακας Ελέγχου",
      url: "/admin/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Αρχική Σελίδα",
      url: "/admin/first-page",
      icon: HomeIcon,
    },
    {
      title: "Υποσέλιδο",
      url: "/admin/footer",
      icon: PanelBottomIcon,
    },

    {
      title: "Πελάτες",
      url: "/admin/customers",
      icon: UsersIcon,
    },
    {
      title: "Άρθρα",
      url: "/admin/articles",
      icon: FileTextIcon,
    },
    {
      title: "Υπηρεσίες",
      url: "/admin/services",
      icon: WrenchIcon,
    },
    {
      title: "Σελίδα Ariadni",
      url: "/admin/ariadni",
      icon: PlugIcon,
    },
    {
      title: "Λήψεις",
      url: "/admin/downloads",
      icon: FolderIcon,
    },
    {
      title: "Καριέρα",
      url: "/admin/careers",
      icon: UsersIcon,
    },
    {
      title: "Αιτήσεις CV",
      url: "/admin/cv-applications",
      icon: FileTextIcon,
    },
    {
      title: "Χρήστες Συστήματος",
      url: "/admin/users",
      icon: UsersIcon,
    },
    {
      title: "Τοποθεσίες",
      url: "/admin/locations",
      icon: MapPinIcon,
    },
    {
      title: "Έργα",
      url: "/admin/works",
      icon: FolderIcon,
    },
    {
      title: "Αποστολή Email",
      url: "/admin/email",
      icon: MailIcon,
    },
    {
      title: "Ημερολόγιο Ομάδας",
      url: "/admin/teams-calendar",
      icon: CalendarDaysIcon,
    },
    {
      title: "Πολιτική Απορρήτου",
      url: "/admin/legal/privacy-policy",
      icon: ShieldIcon,
    },
    {
      title: "Πολιτική Cookies",
      url: "/admin/legal/cookie-policy",
      icon: CookieIcon,
    },
  ],
  navNewsletter: [
    {
      title: "Οδηγός Δημιουργίας",
      url: "/admin/newsletter/wizard",
      icon: Wand2Icon,
    },
    {
      title: "Πρότυπα Email",
      url: "/admin/newsletter/templates",
      icon: LayoutTemplateIcon,
    },
    {
      title: "Βασικά Πρότυπα",
      url: "/admin/newsletter/base-templates",
      icon: FileCode2Icon,
    },
    {
      title: "Εκστρατείες",
      url: "/admin/newsletter/campaigns",
      icon: SendIcon,
    },
    {
      title: "Γκαλερί Μέσων",
      url: "/admin/newsletter/media",
      icon: CameraIcon,
    },
    {
      title: "Λίστες ΕΕ",
      url: "/admin/newsletter/eu-lists",
      icon: ListIcon,
    },
    {
      title: "Αναφορές",
      url: "/admin/newsletter/reports",
      icon: BarChartIcon,
    },
  ],
  navFunding: [
    {
      title: "Προγράμματα ΕΕ",
      url: "/admin/eu-programs",
      icon: BriefcaseIcon,
    },
    {
      title: "Περιφέρειες",
      url: "/admin/eu-programs/periferies",
      icon: GlobeIcon,
    },
    {
      title: "Αντιστοίχιση Διεύθυνσης",
      url: "/admin/eu-programs/address-mapping",
      icon: MapPinIcon,
    },
    {
      title: "Διαχείριση ΚΑΔ",
      url: "/admin/eu-programs/kads",
      icon: FileCodeIcon,
    },
    {
      title: "Κατηγορίες Δαπανών",
      url: "/admin/eu-programs/expense-categories",
      icon: DatabaseIcon,
    },
    {
      title: "Όρια Δαπανών",
      url: "/admin/eu-programs/expense-limits",
      icon: ClipboardListIcon,
    },
  ],
  navSoftone: [
    {
      title: "Σύνδεση & Κατάσταση",
      url: "/admin/softone",
      icon: PlugIcon,
    },
  ],
  navSecondary: [
    {
      title: "Ρυθμίσεις",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Βοήθεια",
      url: "#",
      icon: HelpCircleIcon,
    },
    {
      title: "Αναζήτηση",
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
          <SidebarGroupLabel>Ενημερωτικό Δελτίο</SidebarGroupLabel>
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
          <SidebarGroupLabel>Χρηματοδότηση & Ευρωπαϊκά Προγράμματα</SidebarGroupLabel>
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
