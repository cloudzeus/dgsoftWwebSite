import ClientPage from "./ClientPage";
import db from "../../../data/db.json";
import { PageSeo } from "@/app/components/PageSeo";
import { buildMetadataFor } from "@/lib/seo/metadata";

const positions = ((db as any).careers || []) as Array<{ slug: string }>;

export function generateStaticParams() {
    return positions.map((p) => ({ slug: p.slug }));
}

export const generateMetadata = buildMetadataFor("position");

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <>
            <PageSeo type="position" slug={slug} />
            <ClientPage slug={slug} />
        </>
    );
}
