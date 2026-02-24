"use server"

import db from "@/lib/prisma"
import { revalidatePath } from "next/cache"

// CATEGORIES
export async function getServiceCategories() {
    return await db.serviceCategory.findMany({
        orderBy: { order: 'asc' },
        include: {
            _count: {
                select: { services: true }
            }
        }
    })
}

export async function createServiceCategory(data: any) {
    const category = await db.serviceCategory.create({
        data: {
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            icon: data.icon,
            order: data.order || 0
        }
    })
    revalidatePath("/admin/services")
    return category
}

export async function updateServiceCategory(id: string, data: any) {
    const category = await db.serviceCategory.update({
        where: { id },
        data: {
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            icon: data.icon,
            order: data.order
        }
    })
    revalidatePath("/admin/services")
    return category
}

export async function deleteServiceCategory(id: string) {
    await db.serviceCategory.delete({ where: { id } })
    revalidatePath("/admin/services")
}

// SERVICES
export async function getServices() {
    return await db.service.findMany({
        orderBy: { order: 'asc' },
        include: {
            category: true,
            features: { orderBy: { order: 'asc' } },
            media: { orderBy: { order: 'asc' } }
        }
    })
}

export async function createService(data: any) {
    const service = await db.service.create({
        data: {
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            shortDescriptionEL: data.shortDescriptionEL,
            shortDescriptionEN: data.shortDescriptionEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            slug: data.slug,
            featureImage: data.featureImage,
            brandName: data.brandName,
            brandLogo: data.brandLogo,
            order: data.order || 0,
            categoryId: data.categoryId
        }
    })
    revalidatePath("/admin/services")
    return service
}

export async function updateService(id: string, data: any) {
    const service = await db.service.update({
        where: { id },
        data: {
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            shortDescriptionEL: data.shortDescriptionEL,
            shortDescriptionEN: data.shortDescriptionEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            slug: data.slug,
            featureImage: data.featureImage,
            brandName: data.brandName,
            brandLogo: data.brandLogo,
            order: data.order,
            categoryId: data.categoryId
        }
    })
    revalidatePath("/admin/services")
    return service
}

export async function deleteService(id: string) {
    await db.service.delete({ where: { id } })
    revalidatePath("/admin/services")
}

export async function updateServicesOrder(items: { id: string, order: number }[]) {
    await db.$transaction(
        items.map(item => db.service.update({
            where: { id: item.id },
            data: { order: item.order }
        }))
    )
    revalidatePath("/admin/services")
}

// FEATURES
export async function createServiceFeature(data: any) {
    const feature = await db.serviceFeature.create({
        data: {
            serviceId: data.serviceId,
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            order: data.order || 0
        }
    })
    revalidatePath("/admin/services")
    return feature
}

export async function updateServiceFeature(id: string, data: any) {
    const feature = await db.serviceFeature.update({
        where: { id },
        data: {
            nameEL: data.nameEL,
            nameEN: data.nameEN,
            descriptionEL: data.descriptionEL,
            descriptionEN: data.descriptionEN,
            order: data.order
        }
    })
    revalidatePath("/admin/services")
    return feature
}

export async function deleteServiceFeature(id: string) {
    await db.serviceFeature.delete({ where: { id } })
    revalidatePath("/admin/services")
}

// MEDIA
export async function createServiceMedia(data: any) {
    const media = await db.serviceMedia.create({
        data: {
            serviceId: data.serviceId,
            url: data.url,
            mediaType: data.mediaType,
            order: data.order || 0
        }
    })
    revalidatePath("/admin/services")
    return media
}

export async function deleteServiceMedia(id: string) {
    await db.serviceMedia.delete({ where: { id } })
    revalidatePath("/admin/services")
}
