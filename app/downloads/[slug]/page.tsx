import ClientPage from "./ClientPage";
import db from "../../../data/db.json";
import { PageSeo } from "@/app/components/PageSeo";
import { buildMetadataFor } from "@/lib/seo/metadata";

const downloads = ((db as any).downloads || []) as Array<{ slug: string }>;

export function generateStaticParams() {
    return downloads.map((d) => ({ slug: d.slug }));
}

export const generateMetadata = buildMetadataFor("download");

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <>
            <PageSeo type="download" slug={slug} />
            <ClientPage slug={slug} />
        </>
    );
}
