import { getPublicArticleBySlug } from "../../lib/queries/public-articles";
import ArticleDetailClient from "./ArticleDetailClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = decodeURIComponent((await params).slug);
    const article = await getPublicArticleBySlug(slug);
    if (!article) return {};

    const a = article as any;

    return {
        title: a.metaTitleEL || a.titleEL || "DGSOFT - Άρθρο",
        description: a.metaDescriptionEL || a.shortDescriptionEL || "",
        keywords: a.keywordsEL || "",
        openGraph: {
            title: a.metaTitleEL || a.titleEL,
            description: a.metaDescriptionEL || a.shortDescriptionEL || "",
            images: a.featureImage ? [{ url: a.featureImage }] : [],
            type: "article",
            locale: "el_GR",
        },
        twitter: {
            card: "summary_large_image",
            title: a.metaTitleEL || a.titleEL,
            description: a.metaDescriptionEL || a.shortDescriptionEL || "",
            images: a.featureImage ? [a.featureImage] : [],
        },
        alternates: {
            canonical: `/blog/${slug}`,
            languages: {
                "el-GR": `/blog/${slug}`,
            }
        }
    };
}

export default async function ArticlePage({ params }: Props) {
    const slug = decodeURIComponent((await params).slug);
    const article = await getPublicArticleBySlug(slug);
    if (!article) return notFound();
    return <ArticleDetailClient article={article as any} />;
}
