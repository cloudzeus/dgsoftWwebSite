import ClientPage from "./ClientPage";
import { getPublicWorks } from "@/app/lib/queries/work";

export const dynamic = "force-dynamic";

export default async function Page() {
    const works = await getPublicWorks();
    return <ClientPage initialWorks={works} />;
}
