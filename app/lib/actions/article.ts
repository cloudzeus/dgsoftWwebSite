"use server";

import prisma from "@/lib/prisma"
import { auth } from "@/auth"

export async function getArticles() {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const res = await prisma.article.findMany({
            orderBy: { order: "asc" },
            include: {
                author: true,
                categories: true,
                media: {
                    orderBy: { order: "asc" }
                }
            }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("GET ARTICLES Error:", error)
        throw new Error(error.message)
    }
}

export async function getArticleCategories() {
    try {
        const res = await prisma.articleCategory.findMany({
            orderBy: { order: "asc" }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function createArticleCategory(data: any) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")
    try {
        const res = await prisma.articleCategory.create({ data })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function createArticle(data: any) {
    const session = await auth()
    if (!session?.user?.id) throw new Error("Unauthorized")

    try {
        const { categories, media, id, author, authorId, createdAt, updatedAt, ...articleData } = data;

        const res = await prisma.article.create({
            data: {
                ...articleData,
                authorId: session.user.id,
                categories: categories?.length ? {
                    connect: categories.map((c: any) => ({ id: c.id }))
                } : undefined,
                media: media?.length ? {
                    create: media.map((m: any, idx: number) => ({ ...m, order: idx }))
                } : undefined
            },
            include: { author: true, categories: true, media: true }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("CREATE ARTICLE Error:", error)
        throw new Error(error.message)
    }
}

export async function updateArticle(articleId: string, data: any) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const { categories, media, id, author, authorId, createdAt, updatedAt, ...articleData } = data;

        const res = await prisma.article.update({
            where: { id: articleId },
            data: {
                ...articleData,
                categories: {
                    set: categories?.map((c: any) => ({ id: c.id })) || []
                },
                media: {
                    deleteMany: {},
                    create: media?.map((m: any, idx: number) => ({
                        type: m.type,
                        url: m.url,
                        order: idx
                    })) || []
                }
            },
            include: { author: true, categories: true, media: { orderBy: { order: "asc" } } }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("UPDATE ARTICLE Error:", error)
        throw new Error(error.message)
    }
}

export async function updateArticleOrder(orderedIds: string[]) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        await prisma.$transaction(
            orderedIds.map((id, index) =>
                prisma.article.update({
                    where: { id },
                    data: { order: index }
                })
            )
        )
        return true
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function deleteArticle(id: string) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const res = await prisma.article.delete({ where: { id } })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("DELETE ARTICLE Error:", error)
        throw new Error(error.message)
    }
}
