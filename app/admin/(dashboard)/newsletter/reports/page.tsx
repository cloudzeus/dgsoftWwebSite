import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getMailgunNewsletterReports } from "@/app/lib/actions/mailgun-reports";
import { NewsletterReportsClient } from "./NewsletterReportsClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Newsletter reports (Mailgun) | Admin",
  description: "Mailgun domain stats and event log for newsletter sending",
};

export default async function NewsletterReportsPage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") redirect("/admin/login");

  const initial = await getMailgunNewsletterReports("7d");

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-6 p-4 md:p-6">
      <NewsletterReportsClient initial={initial} />
    </div>
  );
}
