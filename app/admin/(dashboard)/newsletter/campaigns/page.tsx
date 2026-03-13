import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getNewsletterCampaigns, getNewsletterFilterOptions, getNewsletterTemplates } from "@/app/lib/actions/newsletter";
import { NewsletterCampaignsClient } from "./NewsletterCampaignsClient";

export const dynamic = "force-dynamic";

export default async function NewsletterCampaignsPage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") redirect("/admin/login");

  const [campaigns, filterOptions, templates] = await Promise.all([
    getNewsletterCampaigns(),
    getNewsletterFilterOptions(),
    getNewsletterTemplates(),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Newsletter campaigns</h1>
        <p className="text-muted-foreground text-sm">
          Create campaigns, build recipient lists by region/city/legal/KAD, and send via Mailgun.
        </p>
      </div>
      <NewsletterCampaignsClient
        initialCampaigns={campaigns}
        filterOptions={filterOptions}
        templates={templates.map((t) => ({ id: t.id, name: t.name }))}
      />
    </div>
  );
}
