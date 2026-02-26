import { Service, ServiceCategory, ServiceFeature, ServiceMedia } from "@prisma/client"

export type ServiceCategoryWithCount = ServiceCategory & {
    _count?: {
        services: number
    }
}

export type ServiceWithRelations = Service & {
    category: ServiceCategory
    features: ServiceFeature[]
    media: ServiceMedia[]
}

export type ServiceFormValues = {
    nameEL: string
    nameEN: string
    shortDescriptionEL: string
    shortDescriptionEN: string
    descriptionEL: string
    descriptionEN: string
    slug: string
    categoryId: string
    brandName: string
    order: number
    featuresEL: string[]
    featuresEN: string[]
}
