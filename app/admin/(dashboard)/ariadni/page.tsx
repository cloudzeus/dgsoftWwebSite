import { Metadata } from "next";
import { getAdminAriadniPage } from "@/app/lib/actions/ariadni";
import { AriadniPageEditor } from "@/components/admin/ariadni/ariadni-page-editor";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Σελίδα Ariadni | Admin" };

export default async function AdminAriadniPage() {
  const data = await getAdminAriadniPage();
  return (
    <div className="flex flex-1 flex-col">
      <AriadniPageEditor
        initialLogoUrl={data.logoUrl}
        initialEspaPdfUrl={data.espaPdfUrl}
        initialEspaPdfBannerUrl={data.espaPdfBannerUrl}
        initialEL={data.contentEL}
        initialEN={data.contentEN}
      />
    </div>
  );
}
