import prisma from "@/lib/prisma"

function serialize(obj: unknown) {
    return JSON.parse(JSON.stringify(obj))
}

export async function getPublicServices() {
    try {
        const services = await prisma.service.findMany({
            orderBy: { order: "asc" },
            include: {
                category: true,
                features: { orderBy: { order: "asc" } },
                media: { orderBy: { order: "asc" } },
            },
        })
        return serialize(services)
    } catch (error) {
        console.error("Failed to fetch public services", error)
        return []
    }
}

export async function getPublicServiceBySlug(slug: string) {
    try {
        const service = await prisma.service.findUnique({
            where: { slug },
            include: {
                category: true,
                features: { orderBy: { order: "asc" } },
                media: { orderBy: { order: "asc" } },
            },
        })
        return service ? serialize(service) : null
    } catch (error) {
        console.error("Failed to fetch service by slug", error)
        return null
    }
}
