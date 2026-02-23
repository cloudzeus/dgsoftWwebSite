"use server";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function getDownloads() {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");

    return await prisma.download.findMany({
        orderBy: { order: "asc" },
    });
}

export async function createDownload(data: {
    nameEL: string;
    nameEN?: string;
    descriptionEL?: string;
    descriptionEN?: string;
    fileUrl: string;
    fileSize?: string;
    fileType?: string;
    category?: string;
    published: boolean;
}) {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");

    const maxOrder = await prisma.download.aggregate({ _max: { order: true } });
    const nextOrder = (maxOrder._max.order ?? 0) + 1;

    return await prisma.download.create({
        data: { ...data, order: nextOrder },
    });
}

export async function updateDownload(id: string, data: {
    nameEL?: string;
    nameEN?: string;
    descriptionEL?: string;
    descriptionEN?: string;
    fileUrl?: string;
    fileSize?: string;
    fileType?: string;
    category?: string;
    published?: boolean;
}) {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");

    return await prisma.download.update({
        where: { id },
        data,
    });
}

export async function deleteDownload(id: string) {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");

    return await prisma.download.delete({ where: { id } });
}

export async function updateDownloadOrder(ids: string[]) {
    const session = await auth();
    if (!session) throw new Error("Unauthorized");

    await Promise.all(
        ids.map((id, index) =>
            prisma.download.update({ where: { id }, data: { order: index } })
        )
    );
}
