import { getPublicArticleBySlug } from "../../lib/queries/public-articles";
import ArticleDetailClient from "./ArticleDetailClient";
import { notFound } from "next/navigation";
import { PageSeo } from "@/app/components/PageSeo";
import { buildMetadataFor } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export const generateMetadata = buildMetadataFor("article");

export default async function ArticlePage({ params }: Props) {
    const slug = decodeURIComponent((await params).slug);
    const article = await getPublicArticleBySlug(slug);
    if (!article) return notFound();
    return (
        <>
            <PageSeo type="article" slug={slug} />
            <ArticleDetailClient article={article as any} />
        </>
    );
}
