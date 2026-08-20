import { notFound } from "next/navigation";
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

    // Previously any unknown slug silently rendered the first hard-coded entry,
    // so these URLs answered 200 with the wrong document. Answer 404 instead.
    if (!downloads.some((d) => d.slug === slug)) notFound();

    return (
        <>
            <PageSeo type="download" slug={slug} />
            <ClientPage slug={slug} />
        </>
    );
}
