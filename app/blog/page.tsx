import { getPublicArticles } from "../lib/queries/public-articles";
import BlogClient from "./BlogClient";
import { CollectionPageSeo } from "@/app/components/PageSeo";
import { buildCollectionMetadataFor } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

export const metadata = {
    ...buildCollectionMetadataFor("article"),
    keywords: "ERP, CRM, AI, ψηφιακός μετασχηματισμός, Soft1, DGSOFT, άρθρα, νέα",
};

export default async function BlogPage() {
    const articles = await getPublicArticles();
    return (
        <>
            <CollectionPageSeo type="article" />
            <BlogClient initialArticles={articles as any[]} />
        </>
    );
}
