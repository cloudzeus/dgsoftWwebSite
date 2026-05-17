import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { getPublicServices } from "@/app/lib/queries/public-services"
import { ServicesGrid } from "./ServicesGrid"
import ServicesHero from "./ServicesHero"
import { CollectionPageSeo } from "@/app/components/PageSeo"
import { buildCollectionMetadataFor } from "@/lib/seo/metadata"

export const dynamic = "force-dynamic"

export const metadata = buildCollectionMetadataFor("service")

export default async function ServicesPage() {
    const services = await getPublicServices()
    return (
        <>
            <CollectionPageSeo type="service" />
            <main className="min-h-screen bg-monks-black flex flex-col">
                <Navigation />
                <ServicesHero />
                <section className="py-24 relative flex-grow">
                    <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                        <ServicesGrid services={services} />
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}
