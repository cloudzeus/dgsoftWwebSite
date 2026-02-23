import prisma from "@/lib/prisma";

export async function getPublicDownloads() {
    try {
        return await prisma.download.findMany({
            where: { published: true },
            orderBy: { order: "asc" },
        });
    } catch (error) {
        console.error("Failed to fetch public downloads", error);
        return [];
    }
}
