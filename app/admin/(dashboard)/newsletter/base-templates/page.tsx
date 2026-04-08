import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getNewsletterBaseSettings, listNewsletterBaseTemplates } from "@/app/lib/actions/newsletter-base-templates";
import { NewsletterBaseTemplatesClient } from "./NewsletterBaseTemplatesClient";

export const dynamic = "force-dynamic";

export default async function NewsletterBaseTemplatesPage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") redirect("/admin/login");
  const [templates, settings] = await Promise.all([listNewsletterBaseTemplates(), getNewsletterBaseSettings()]);
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 p-4 md:p-6">
      <NewsletterBaseTemplatesClient initialTemplates={templates} initialSettings={settings} />
    </div>
  );
}
