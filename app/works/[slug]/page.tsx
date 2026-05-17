import ClientPage from "./ClientPage";
import { getPublicWorkBySlug } from "@/app/lib/queries/work";
import { notFound } from "next/navigation";
import { PageSeo } from "@/app/components/PageSeo";
import { buildMetadataFor } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

export const generateMetadata = buildMetadataFor("work");

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const work = await getPublicWorkBySlug(slug);
    if (!work) notFound();
    return (
        <>
            <PageSeo type="work" slug={slug} />
            <ClientPage initialWork={work} />
        </>
    );
}
