import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getNewsletterTemplates } from "@/app/lib/actions/newsletter";
import { NewsletterTemplatesClient } from "./NewsletterTemplatesClient";

export const dynamic = "force-dynamic";

export default async function NewsletterTemplatesPage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") redirect("/admin/login");

  const templates = await getNewsletterTemplates();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Newsletter templates</h1>
        <p className="text-muted-foreground text-sm">
          Create and edit email templates with the visual designer.
        </p>
      </div>
      <NewsletterTemplatesClient initialTemplates={templates} />
    </div>
  );
}
