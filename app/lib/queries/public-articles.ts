import prisma from "@/lib/prisma";

export async function getPublicArticles() {
    try {
        return await prisma.article.findMany({
            where: { published: true },
            orderBy: { order: "asc" },
            include: {
                author: {
                    select: { firstName: true, lastName: true }
                },
                categories: true,
                media: { orderBy: { order: "asc" } }
            }
        });
    } catch (error) {
        console.error("Failed to fetch public articles", error);
        return [];
    }
}

export async function getPublicArticleBySlug(slug: string) {
    try {
        return await prisma.article.findUnique({
            where: { slug },
            include: {
                author: {
                    select: { firstName: true, lastName: true }
                },
                categories: true,
                media: { orderBy: { order: "asc" } }
            }
        });
    } catch (error) {
        console.error("Failed to fetch article by slug", error);
        return null;
    }
}

export async function getLatestPublicArticles(limit = 3) {
    try {
        return await prisma.article.findMany({
            where: { published: true },
            orderBy: { createdAt: "desc" },
            take: limit,
            include: {
                categories: true,
            }
        });
    } catch (error) {
        console.error("Failed to fetch latest articles", error);
        return [];
    }
}
