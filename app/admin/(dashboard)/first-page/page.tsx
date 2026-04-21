import { getAdminHomePage } from "@/app/lib/actions/home";
import { HomePageEditor } from "@/components/admin/home/home-page-editor";

export const dynamic = "force-dynamic";

export default async function AdminFirstPage() {
  const data = await getAdminHomePage();
  return (
    <div className="flex flex-1 flex-col">
      <HomePageEditor initialEL={data.contentEL} initialEN={data.contentEN} />
    </div>
  );
}
