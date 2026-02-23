"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function getPositions() {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");
    return await prisma.position.findMany({
        orderBy: { order: "asc" },
        include: {
            _count: { select: { applications: true } },
            applications: { orderBy: { createdAt: "desc" } },
        },
    });
}

export async function getPublicPositions() {
    return await prisma.position.findMany({
        where: { published: true },
        orderBy: { order: "asc" },
    });
}

export async function getPublicPositionBySlug(slug: string) {
    return await prisma.position.findUnique({ where: { slug } });
}

export async function createPosition(data: any) {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");
    const max = await prisma.position.aggregate({ _max: { order: true } });
    return await prisma.position.create({ data: { ...data, order: (max._max.order ?? 0) + 1 } });
}

export async function updatePosition(id: string, data: any) {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");
    return await prisma.position.update({ where: { id }, data });
}

export async function deletePosition(id: string) {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");
    return await prisma.position.delete({ where: { id } });
}

export async function updatePositionOrder(ids: string[]) {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");
    await Promise.all(ids.map((id, i) => prisma.position.update({ where: { id }, data: { order: i } })));
}

// CV Applications
export async function getCvApplications() {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");
    return await prisma.cvApplication.findMany({
        orderBy: { createdAt: "desc" },
        include: { position: { select: { titleEL: true } } },
    });
}

export async function updateCvStatus(id: string, status: string) {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");
    return await prisma.cvApplication.update({ where: { id }, data: { status } });
}

export async function deleteCvApplication(id: string) {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");
    return await prisma.cvApplication.delete({ where: { id } });
}
