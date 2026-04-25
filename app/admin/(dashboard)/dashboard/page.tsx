export const dynamic = "force-dynamic";

import Link from "next/link";
import prisma from "@/lib/prisma";
import { CampaignChart } from "@/components/admin/dashboard/campaign-chart";
import {
  UsersIcon,
  FileTextIcon,
  WrenchIcon,
  FolderIcon,
  BriefcaseIcon,
  MapPinIcon,
  SendIcon,
  ClipboardListIcon,
  UserCheckIcon,
  DownloadIcon,
  PlusIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  CalendarIcon,
  ShieldIcon,
  CookieIcon,
  LayoutDashboardIcon,
} from "lucide-react";

// ─── Data fetching ────────────────────────────────────────────────────────────

async function getDashboardData() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const [
    // Content counts
    articleCount, publishedArticleCount,
    serviceCount,
    workCount, publishedWorkCount,
    downloadCount,
    // People
    customerCount,
    locationCount,
    // Jobs
    positionCount, openPositionCount,
    cvNew, cvReviewed, cvShortlisted, cvRejected,
    cvThisMonth,
    // EU Programs
    euProgramCount, publishedEuProgramCount,
    // Newsletter
    campaignsSent, campaignsDraft,
    totalEmailsSent,
    // Recent data
    recentCvApplications,
    recentArticles,
    campaignStats,
  ] = await Promise.all([
    prisma.article.count(),
    prisma.article.count({ where: { published: true } }),
    prisma.service.count(),
    prisma.work.count(),
    prisma.work.count({ where: { published: true } }),
    prisma.download.count(),
    prisma.tRDR.count(),
    prisma.presence.count(),
    prisma.position.count(),
    prisma.position.count({ where: { published: true } }),
    prisma.cvApplication.count({ where: { status: "NEW" } }),
    prisma.cvApplication.count({ where: { status: "REVIEWED" } }),
    prisma.cvApplication.count({ where: { status: "SHORTLISTED" } }),
    prisma.cvApplication.count({ where: { status: "REJECTED" } }),
    prisma.cvApplication.count({ where: { createdAt: { gte: startOfMonth } } }),
    prisma.euProgram.count(),
    prisma.euProgram.count({ where: { active: true } }),
    prisma.newsletterCampaign.count({ where: { status: "sent" } }),
    prisma.newsletterCampaign.count({ where: { status: "draft" } }),
    prisma.newsletterCampaignRecipient.count({ where: { status: { not: "pending" } } }),
    prisma.cvApplication.findMany({
      take: 6,
      orderBy: { createdAt: "desc" },
      include: { position: { select: { titleEL: true } } },
    }),
    prisma.article.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        titleEL: true,
        published: true,
        createdAt: true,
        author: { select: { firstName: true, lastName: true } },
      },
    }),
    prisma.newsletterCampaign.findMany({
      where: { status: "sent" },
      orderBy: { sentAt: "desc" },
      take: 8,
      select: {
        id: true,
        name: true,
        sentAt: true,
        _count: { select: { recipients: true } },
      },
    }),
  ]);

  return {
    articles: { total: articleCount, published: publishedArticleCount },
    services: serviceCount,
    works: { total: workCount, published: publishedWorkCount },
    downloads: downloadCount,
    customers: customerCount,
    locations: locationCount,
    positions: { total: positionCount, open: openPositionCount },
    cv: {
      new: cvNew,
      reviewed: cvReviewed,
      shortlisted: cvShortlisted,
      rejected: cvRejected,
      thisMonth: cvThisMonth,
      total: cvNew + cvReviewed + cvShortlisted + cvRejected,
    },
    euPrograms: { total: euProgramCount, published: publishedEuProgramCount },
    newsletter: { sent: campaignsSent, draft: campaignsDraft, totalEmails: totalEmailsSent },
    recentCvApplications,
    recentArticles,
    campaignStats: campaignStats.reverse().map((c) => ({
      name: c.name,
      sentAt: c.sentAt?.toISOString() ?? null,
      recipients: c._count.recipients,
    })),
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const CV_STATUS_STYLES: Record<string, string> = {
  NEW: "bg-blue-50 text-blue-700 border border-blue-200",
  REVIEWED: "bg-amber-50 text-amber-700 border border-amber-200",
  SHORTLISTED: "bg-green-50 text-green-700 border border-green-200",
  REJECTED: "bg-red-50 text-red-600 border border-red-200",
};
const CV_STATUS_LABELS: Record<string, string> = {
  NEW: "Νέα",
  REVIEWED: "Σε εξέταση",
  SHORTLISTED: "Επιλεγμένη",
  REJECTED: "Απορρίφθηκε",
};

function formatDate(d: Date | string) {
  return new Date(d).toLocaleDateString("el-GR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function KpiCard({
  label,
  value,
  sub,
  href,
  accent,
}: {
  label: string;
  value: string | number;
  sub?: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <Link href={href} className="group block">
      <div
        className={`relative bg-white rounded-lg px-5 py-4 h-full
          shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_14px_rgba(0,0,0,0.05)]
          hover:shadow-[0_2px_6px_rgba(0,0,0,0.10),0_8px_24px_rgba(0,0,0,0.08)]
          transition-shadow duration-150 border border-[#EDEBE9] overflow-hidden`}
      >
        {accent && (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0078D4]" />
        )}
        <p className="text-xs font-medium text-[#605E5C] uppercase tracking-[0.08em] mb-2">
          {label}
        </p>
        <p className="text-3xl font-semibold text-[#201F1E] tabular-nums leading-none mb-1">
          {typeof value === "number" ? value.toLocaleString("el-GR") : value}
        </p>
        {sub && <p className="text-xs text-[#605E5C] mt-1.5 line-clamp-1">{sub}</p>}
        <ArrowRightIcon className="absolute bottom-4 right-4 w-4 h-4 text-[#C8C6C4] group-hover:text-[#0078D4] transition-colors duration-150" />
      </div>
    </Link>
  );
}

function SectionHeader({ title, href }: { title: string; href?: string }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-xs font-semibold text-[#605E5C] uppercase tracking-[0.08em]">
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="text-xs text-[#0078D4] hover:underline flex items-center gap-1"
        >
          Όλα <ArrowRightIcon className="w-3 h-3" />
        </Link>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function DashboardPage() {
  const d = await getDashboardData();

  const today = new Date().toLocaleDateString("el-GR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-1 flex-col min-h-0">
      <div className="flex flex-col gap-6 px-4 py-6 lg:px-6 max-w-[1600px] mx-auto w-full">

        {/* ── Page header ──────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#0078D4] flex items-center justify-center shrink-0">
              <LayoutDashboardIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-[#201F1E] leading-tight">Dashboard</h1>
              <p className="text-xs text-[#605E5C] capitalize">{today}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              href="/admin/articles"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium
                bg-[#0078D4] text-white hover:bg-[#106EBE] transition-colors duration-150
                shadow-[0_1px_2px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,120,212,0.20)]"
            >
              <PlusIcon className="w-3.5 h-3.5" />
              Νέο άρθρο
            </Link>
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium
                bg-white text-[#201F1E] border border-[#EDEBE9] hover:bg-[#F3F2F1] transition-colors duration-150
                shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)]"
            >
              <ExternalLinkIcon className="w-3.5 h-3.5" />
              Ιστοσελίδα
            </Link>
          </div>
        </div>

        {/* ── KPI cards ────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <KpiCard
            label="Πελάτες"
            value={d.customers}
            sub="Σύνολο εγγεγραμμένων"
            href="/admin/customers"
            accent
          />
          <KpiCard
            label="Αιτήσεις CV"
            value={d.cv.new}
            sub={`${d.cv.total} συνολικά · ${d.cv.thisMonth} αυτόν τον μήνα`}
            href="/admin/cv-applications"
            accent={d.cv.new > 0}
          />
          <KpiCard
            label="Εκστρατείες Email"
            value={d.newsletter.sent}
            sub={`${d.newsletter.totalEmails.toLocaleString("el-GR")} email εστάλησαν`}
            href="/admin/newsletter/campaigns"
          />
          <KpiCard
            label="ΕΠ / ΕΣΠΑ"
            value={d.euPrograms.published}
            sub={`${d.euPrograms.total} συνολικά`}
            href="/admin/eu-programs"
          />
        </div>

        {/* ── Chart + Recent CV ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Campaign chart */}
          <div className="lg:col-span-3 bg-white rounded-lg border border-[#EDEBE9]
            shadow-[0_1px_3px_rgba(0,0,0,0.07),0_4px_14px_rgba(0,0,0,0.04)] p-5">
            <SectionHeader
              title="Εκστρατείες Newsletter — Παραλήπτες"
              href="/admin/newsletter/campaigns"
            />
            <p className="text-xs text-[#605E5C] mb-4">
              Τελευταίες {d.campaignStats.length} αποσταλμένες εκστρατείες
            </p>
            <CampaignChart data={d.campaignStats} />
          </div>

          {/* Recent CV Applications */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-[#EDEBE9]
            shadow-[0_1px_3px_rgba(0,0,0,0.07),0_4px_14px_rgba(0,0,0,0.04)] p-5">
            <SectionHeader title="Πρόσφατες Αιτήσεις CV" href="/admin/cv-applications" />

            {/* Status pills summary */}
            <div className="flex gap-2 flex-wrap mb-4">
              {[
                { label: "Νέες", count: d.cv.new, cls: "bg-blue-50 text-blue-700 border-blue-200" },
                { label: "Εξέταση", count: d.cv.reviewed, cls: "bg-amber-50 text-amber-700 border-amber-200" },
                { label: "Επιλεγμένες", count: d.cv.shortlisted, cls: "bg-green-50 text-green-700 border-green-200" },
              ].map((s) => (
                <span
                  key={s.label}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border ${s.cls}`}
                >
                  {s.count} {s.label}
                </span>
              ))}
            </div>

            {d.recentCvApplications.length === 0 ? (
              <p className="text-sm text-[#605E5C] py-6 text-center">
                Δεν υπάρχουν αιτήσεις ακόμα.
              </p>
            ) : (
              <div className="space-y-1">
                {d.recentCvApplications.map((app) => (
                  <Link
                    key={app.id}
                    href="/admin/cv-applications"
                    className="flex items-center justify-between gap-3 px-3 py-2 rounded hover:bg-[#F3F2F1] transition-colors group"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#201F1E] truncate">
                        {app.firstName} {app.lastName}
                      </p>
                      <p className="text-xs text-[#605E5C] truncate">
                        {app.position?.titleEL ?? "Γενική αίτηση"} · {formatDate(app.createdAt)}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 px-2 py-0.5 rounded text-[11px] font-medium ${
                        CV_STATUS_STYLES[app.status] ?? "bg-gray-50 text-gray-600 border border-gray-200"
                      }`}
                    >
                      {CV_STATUS_LABELS[app.status] ?? app.status}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Recent articles + Content inventory ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Recent articles */}
          <div className="lg:col-span-3 bg-white rounded-lg border border-[#EDEBE9]
            shadow-[0_1px_3px_rgba(0,0,0,0.07),0_4px_14px_rgba(0,0,0,0.04)] p-5">
            <SectionHeader title="Πρόσφατα Άρθρα" href="/admin/articles" />
            {d.recentArticles.length === 0 ? (
              <p className="text-sm text-[#605E5C] py-6 text-center">
                Δεν υπάρχουν άρθρα ακόμα.
              </p>
            ) : (
              <div className="divide-y divide-[#EDEBE9]">
                {d.recentArticles.map((a) => (
                  <div key={a.id} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0">
                    <div
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        a.published ? "bg-green-500" : "bg-[#D2D0CE]"
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#201F1E] truncate">
                        {a.titleEL}
                      </p>
                      <p className="text-xs text-[#605E5C]">
                        {a.author
                          ? `${a.author.firstName ?? ""} ${a.author.lastName ?? ""}`.trim()
                          : "—"}{" "}
                        · {formatDate(a.createdAt)}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 px-2 py-0.5 rounded text-[11px] font-medium border ${
                        a.published
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-[#F3F2F1] text-[#605E5C] border-[#EDEBE9]"
                      }`}
                    >
                      {a.published ? "Δημοσιευμένο" : "Draft"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content inventory */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-[#EDEBE9]
            shadow-[0_1px_3px_rgba(0,0,0,0.07),0_4px_14px_rgba(0,0,0,0.04)] p-5">
            <SectionHeader title="Περιεχόμενο Ιστοσελίδας" />
            <div className="space-y-1">
              {[
                {
                  icon: FileTextIcon,
                  label: "Άρθρα",
                  href: "/admin/articles",
                  total: d.articles.total,
                  published: d.articles.published,
                },
                {
                  icon: WrenchIcon,
                  label: "Υπηρεσίες",
                  href: "/admin/services",
                  total: d.services,
                },
                {
                  icon: FolderIcon,
                  label: "Έργα",
                  href: "/admin/works",
                  total: d.works.total,
                  published: d.works.published,
                },
                {
                  icon: DownloadIcon,
                  label: "Downloads",
                  href: "/admin/downloads",
                  total: d.downloads,
                },
                {
                  icon: BriefcaseIcon,
                  label: "ΕΠ / ΕΣΠΑ",
                  href: "/admin/eu-programs",
                  total: d.euPrograms.total,
                  published: d.euPrograms.published,
                },
                {
                  icon: ClipboardListIcon,
                  label: "Θέσεις εργασίας",
                  href: "/admin/careers",
                  total: d.positions.total,
                  published: d.positions.open,
                },
                {
                  icon: MapPinIcon,
                  label: "Τοποθεσίες",
                  href: "/admin/locations",
                  total: d.locations,
                },
                {
                  icon: UsersIcon,
                  label: "Χρήστες συστήματος",
                  href: "/admin/users",
                  total: null,
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between gap-2 px-3 py-2 rounded hover:bg-[#F3F2F1] transition-colors group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <item.icon className="w-4 h-4 text-[#605E5C] shrink-0" />
                    <span className="text-sm text-[#201F1E]">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {item.total !== null && item.total !== undefined && (
                      <span className="text-sm font-semibold text-[#201F1E] tabular-nums">
                        {item.total.toLocaleString("el-GR")}
                      </span>
                    )}
                    {item.published !== undefined && (
                      <span className="text-xs text-[#605E5C] tabular-nums">
                        ({item.published} δημ.)
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Quick actions footer row ──────────────────────────── */}
        <div className="bg-white rounded-lg border border-[#EDEBE9]
          shadow-[0_1px_3px_rgba(0,0,0,0.07),0_4px_14px_rgba(0,0,0,0.04)] p-4">
          <h2 className="text-xs font-semibold text-[#605E5C] uppercase tracking-[0.08em] mb-3">
            Γρήγορες ενέργειες
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/admin/newsletter/campaigns", icon: SendIcon, label: "Νέα εκστρατεία" },
              { href: "/admin/eu-programs", icon: BriefcaseIcon, label: "Νέο ΕΠ" },
              { href: "/admin/first-page", icon: LayoutDashboardIcon, label: "Αρχική σελίδα" },
              { href: "/admin/footer", icon: LayoutDashboardIcon, label: "Footer" },
              { href: "/admin/legal/privacy-policy", icon: ShieldIcon, label: "Πολιτική Απορρήτου" },
              { href: "/admin/legal/cookie-policy", icon: CookieIcon, label: "Πολιτική Cookies" },
              { href: "/admin/cv-applications", icon: UserCheckIcon, label: "CV Αιτήσεις" },
              { href: "/admin/customers", icon: UsersIcon, label: "Πελάτες" },
            ].map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium
                  bg-[#F3F2F1] text-[#201F1E] border border-[#EDEBE9]
                  hover:bg-[#EDEBE9] hover:border-[#C8C6C4] transition-colors duration-150"
              >
                <a.icon className="w-3.5 h-3.5 text-[#605E5C]" />
                {a.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
