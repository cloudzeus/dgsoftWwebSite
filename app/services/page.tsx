import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { getPublicServices } from "@/app/lib/queries/public-services"
import { ServicesGrid } from "./ServicesGrid"
import ServicesHero from "./ServicesHero"

export const dynamic = "force-dynamic"

export default async function ServicesPage() {
    const services = await getPublicServices()

    return (
        <main className="min-h-screen bg-monks-black flex flex-col">
            <Navigation />

            {/* Hero Section - locale-aware */}
            <ServicesHero />

            {/* Services Grid - from DB */}
            <section className="py-24 relative flex-grow">
                <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                    <ServicesGrid services={services} />
                </div>
            </section>

            <Footer />
        </main>
    )
}
