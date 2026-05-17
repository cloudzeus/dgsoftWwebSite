import { notFound } from "next/navigation"
import { getPublicServiceBySlug, getPublicServices } from "@/app/lib/queries/public-services"
import ClientPage from "./ClientPage"
import { PageSeo } from "@/app/components/PageSeo"
import { buildMetadataFor } from "@/lib/seo/metadata"

export const dynamic = "force-dynamic"

export const generateMetadata = buildMetadataFor("service")

export async function generateStaticParams() {
    const services = await getPublicServices()
    return services.map((s: { slug: string }) => ({ slug: s.slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = await getPublicServiceBySlug(slug)
    if (!service) notFound()
    return (
        <>
            <PageSeo type="service" slug={slug} />
            <ClientPage service={service} />
        </>
    )
}
