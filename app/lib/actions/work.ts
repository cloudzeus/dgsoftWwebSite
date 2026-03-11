"use server";

import prisma from "@/lib/prisma"
import { auth } from "@/auth"
import { normalizeWorkSlug } from "@/app/lib/slug"

export async function getWorks() {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const res = await prisma.work.findMany({
            orderBy: { order: "asc" },
            include: {
                customer: {
                    select: { id: true, NAME: true, CODE: true, logo: true }
                },
                media: { orderBy: { order: "asc" } }
            }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("GET WORKS Error:", error)
        throw new Error(error.message)
    }
}

export async function createWork(data: any) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const { media, customer, id, createdAt, updatedAt, ...workData } = data

        let slug = normalizeWorkSlug(workData.slug, workData.titleEL, workData.titleEN)
        const existing = await prisma.work.findUnique({ where: { slug } })
        if (existing) {
            const base = slug.replace(/-?\d+$/, "")
            let n = 1
            while (await prisma.work.findUnique({ where: { slug: `${base}-${n}` } })) n++
            slug = `${base}-${n}`
        }

        const res = await prisma.work.create({
            data: {
                ...workData,
                slug,
                media: media?.length ? {
                    create: media.map((m: any, idx: number) => ({
                        type: m.type,
                        url: m.url,
                        featured: m.featured || false,
                        order: idx
                    }))
                } : undefined
            },
            include: {
                customer: { select: { id: true, NAME: true, CODE: true, logo: true } },
                media: { orderBy: { order: "asc" } }
            }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("CREATE WORK Error:", error)
        throw new Error(error.message)
    }
}

export async function updateWork(workId: string, data: any) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const { media, customer, id, createdAt, updatedAt, ...workData } = data

        let slug = normalizeWorkSlug(workData.slug, workData.titleEL, workData.titleEN)
        const existing = await prisma.work.findUnique({ where: { slug } })
        if (existing && existing.id !== workId) {
            const base = slug.replace(/-?\d+$/, "")
            let n = 1
            let candidate = `${base}-${n}`
            while (await prisma.work.findUnique({ where: { slug: candidate } })) {
                n++
                candidate = `${base}-${n}`
            }
            slug = candidate
        }

        const res = await prisma.work.update({
            where: { id: workId },
            data: {
                ...workData,
                slug,
                media: {
                    deleteMany: {},
                    create: media?.map((m: any, idx: number) => ({
                        type: m.type,
                        url: m.url,
                        featured: m.featured || false,
                        order: idx
                    })) || []
                }
            },
            include: {
                customer: { select: { id: true, NAME: true, CODE: true, logo: true } },
                media: { orderBy: { order: "asc" } }
            }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("UPDATE WORK Error:", error)
        throw new Error(error.message)
    }
}

export async function updateWorkOrder(orderedIds: string[]) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        await prisma.$transaction(
            orderedIds.map((id, index) =>
                prisma.work.update({ where: { id }, data: { order: index } })
            )
        )
        return true
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function deleteWork(id: string) {
    const session = await auth()
    if (!session) throw new Error("Unauthorized")

    try {
        const res = await prisma.work.delete({ where: { id } })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        console.error("DELETE WORK Error:", error)
        throw new Error(error.message)
    }
}

export async function getWorkCustomers() {
    try {
        const res = await prisma.tRDR.findMany({
            orderBy: { NAME: "asc" },
            select: { id: true, NAME: true, CODE: true, logo: true }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        throw new Error(error.message)
    }
}

export async function getWorkServices() {
    try {
        const res = await prisma.service.findMany({
            orderBy: { order: "asc" },
            select: { id: true, nameEL: true, nameEN: true, slug: true }
        })
        return JSON.parse(JSON.stringify(res))
    } catch (error: any) {
        throw new Error(error.message)
    }
}
