import { getAdminLegalPage } from "@/app/lib/actions/legal";
import { LegalPageEditor } from "@/components/admin/legal/legal-page-editor";

export const dynamic = "force-dynamic";

export default async function AdminCookiePolicyPage() {
  const data = await getAdminLegalPage("cookie-policy");
  return (
    <div className="flex flex-1 flex-col p-6">
      <LegalPageEditor initial={data} pageLabel="Cookie Policy / Πολιτική Cookies" />
    </div>
  );
}
