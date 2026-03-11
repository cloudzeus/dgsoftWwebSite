import prisma from "@/lib/prisma";

export async function getPublicWorks() {
    try {
        const works = await prisma.work.findMany({
            where: { published: true },
            orderBy: { order: "asc" },
            include: {
                media: {
                    orderBy: { order: "asc" }
                },
                customer: {
                    select: {
                        NAME: true,
                        logo: true
                    }
                }
            }
        });

        // Resolve service names for each work so the list can show tech by locale
        const worksWithServices = await Promise.all(
            works.map(async (work) => {
                const serviceIds = (work.servicesUsed as string[]) || [];
                const services = serviceIds.length > 0
                    ? await prisma.service.findMany({
                        where: { id: { in: serviceIds } },
                        select: { nameEL: true, nameEN: true }
                    })
                    : [];
                return { ...work, serviceNames: services };
            })
        );

        return JSON.parse(JSON.stringify(worksWithServices));
    } catch (error) {
        console.error("Error fetching works:", error);
        return [];
    }
}

export async function getPublicWorkBySlug(slug: string) {
    try {
        const work = await prisma.work.findUnique({
            where: { slug, published: true },
            include: {
                media: {
                    orderBy: { order: "asc" }
                },
                customer: {
                    select: {
                        NAME: true,
                        logo: true
                    }
                }
            }
        });

        if (!work) return null;

        // Fetch service names for servicesUsed
        const serviceIds = (work.servicesUsed as string[]) || [];
        const services = await prisma.service.findMany({
            where: {
                id: { in: serviceIds }
            },
            select: {
                nameEL: true,
                nameEN: true
            }
        });

        return JSON.parse(JSON.stringify({
            ...work,
            serviceNames: services
        }));
    } catch (error) {
        console.error("Error fetching work by slug:", error);
        return null;
    }
}
