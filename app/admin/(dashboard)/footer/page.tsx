import { getAdminFooter } from "@/app/lib/actions/footer";
import { FooterPageEditor } from "@/components/admin/footer/footer-page-editor";

export const dynamic = "force-dynamic";

export default async function AdminFooterPage() {
  const data = await getAdminFooter();
  return (
    <FooterPageEditor initialEL={data.contentEL} initialEN={data.contentEN} />
  );
}
