import ClientPage from "./ClientPage";
import { getPublicWorkBySlug } from "@/app/lib/queries/work";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const work = await getPublicWorkBySlug(slug);

    if (!work) notFound();

    return <ClientPage initialWork={work} />;
}
