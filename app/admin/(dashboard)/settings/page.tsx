import { Metadata } from "next";
import { getAdminSiteSettings } from "@/app/lib/actions/settings";
import { SettingsPageEditor } from "@/components/admin/settings/settings-page-editor";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Ρυθμίσεις | Admin" };

export default async function AdminSettingsPage() {
  const data = await getAdminSiteSettings();
  return <SettingsPageEditor initial={data} />;
}
