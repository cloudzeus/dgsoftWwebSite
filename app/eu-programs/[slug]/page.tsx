import ClientPage from "./ClientPage";
import db from "../../../data/db.json";
import { PageSeo } from "@/app/components/PageSeo";
import { buildMetadataFor } from "@/lib/seo/metadata";

const programs = ((db as any).euPrograms || []) as Array<{ slug: string }>;

export function generateStaticParams() {
    return programs.map((p) => ({ slug: p.slug }));
}

export const generateMetadata = buildMetadataFor("euProgram");

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return (
        <>
            <PageSeo type="euProgram" slug={slug} />
            <ClientPage slug={slug} />
        </>
    );
}
