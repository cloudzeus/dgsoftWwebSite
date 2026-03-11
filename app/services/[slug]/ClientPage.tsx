"use client"

import * as React from "react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import { motion } from "framer-motion"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLocale } from "@/app/context/LocaleContext"

export type PublicServiceDetail = {
    id: string
    slug: string
    nameEL: string
    nameEN: string | null
    shortDescriptionEL: string | null
    shortDescriptionEN: string | null
    descriptionEL: string | null
    descriptionEN: string | null
    featureImage: string | null
    brandName: string | null
    brandLogo: string | null
    category: { nameEL: string; nameEN: string | null }
    features: { id: string; nameEL: string; nameEN: string | null; descriptionEL: string | null; descriptionEN: string | null; order: number }[]
    media: { id: string; url: string; mediaType: string; order: number }[]
    benefitsEL?: string[] | null
    benefitsEN?: string[] | null
}

export default function ClientPage({ service }: { service: PublicServiceDetail }) {
    const locale = useLocale()
    const heroVideoRef = React.useRef<HTMLVideoElement>(null)
    const name = locale === "en" && service.nameEN ? service.nameEN : service.nameEL
    const shortDesc = locale === "en" && service.shortDescriptionEN ? service.shortDescriptionEN : (service.shortDescriptionEL || service.shortDescriptionEN || "")
    const description = locale === "en" && service.descriptionEN ? service.descriptionEN : (service.descriptionEL || service.descriptionEN || "")
    const categoryName = locale === "en" && service.category?.nameEN ? service.category.nameEN : (service.category?.nameEL ?? service.category?.nameEN ?? "Service")
    const benefitsEL = Array.isArray(service.benefitsEL) ? service.benefitsEL : []
    const benefitsEN = Array.isArray(service.benefitsEN) ? service.benefitsEN : []
    const benefits = locale === "en" && benefitsEN.length > 0 ? benefitsEN : benefitsEL
    const hasContent = service.descriptionEL || service.descriptionEN || service.features?.length || benefits.length

    React.useEffect(() => {
        const video = heroVideoRef.current
        if (video && service.featureImage?.endsWith(".mp4")) {
            video.muted = true
            video.loop = true
            video.playsInline = true
            video.play().catch(() => {})
        }
    }, [service.featureImage])

    return (
        <main className="min-h-screen bg-monks-black flex flex-col">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden flex-grow border-b border-white/10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-monks-red-dark/10 rounded-full blur-[150px] -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-monks-accent/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />

                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
                    <Link href="/services" className="inline-flex items-center gap-2 text-monks-light hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        {locale === "el" ? "Πίσω στις Υπηρεσίες" : "Back to Services"}
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="grid lg:grid-cols-2 gap-16"
                    >
                        <div>
                            <div className="mb-4 text-sm font-medium text-monks-accent tracking-wider uppercase">
                                {categoryName}
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
                                {name}
                            </h1>
                            <p className="text-xl text-monks-light mb-12 leading-relaxed text-justify">
                                {shortDesc}
                            </p>

                            {(benefitsEL.length > 0 || benefitsEN.length > 0) && (
                                <div className="flex flex-col gap-4">
                                    {benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3 text-white">
                                            <CheckCircle className="w-5 h-5 text-monks-accent flex-shrink-0" />
                                            <span className="text-justify">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="hidden lg:block relative">
                            {service.featureImage ? (
                                <div className="relative aspect-video rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl bg-monks-gray">
                                    {service.featureImage.endsWith(".mp4") ? (
                                        <video
                                            ref={heroVideoRef}
                                            src={service.featureImage}
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    ) : (
                                        <Image
                                            src={service.featureImage}
                                            alt=""
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    )}
                                </div>
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-tr from-monks-gray to-monks-dark rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                                    <div className="w-[150%] h-[150%] absolute border-[1px] border-monks-accent/20 rounded-full animate-[spin_60s_linear_infinite]" />
                                    <div className="w-32 h-32 bg-monks-accent/20 backdrop-blur-md rounded-full flex items-center justify-center p-6 text-monks-light text-center text-xs">
                                        {name}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Body */}
            {hasContent && (
                <section className="py-24 relative">
                    <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-monks-light text-lg leading-relaxed space-y-12">
                        {(service.descriptionEL || service.descriptionEN) && (
                            <div className="space-y-6">
                                <h2 className="text-3xl text-white font-bold">
                                    {locale === "el" ? "Τι κάνει στην πράξη" : "What it does in practice"}
                                </h2>
                                <div
                                    className="prose prose-invert prose-p:text-monks-light prose-li:text-monks-light max-w-none text-justify [&_p]:text-justify [&_li]:text-justify"
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                />
                            </div>
                        )}

                        {service.features && service.features.length > 0 && (
                            <div className="space-y-6">
                                <h2 className="text-3xl text-white font-bold">
                                    {locale === "el" ? "Βασικά χαρακτηριστικά" : "Key features"}
                                </h2>
                                <ul className="space-y-4">
                                    {service.features.map((f) => {
                                        const fName = locale === "en" && f.nameEN ? f.nameEN : (f.nameEL || f.nameEN)
                                        const fDesc = locale === "en" && f.descriptionEN ? f.descriptionEN : (f.descriptionEL || f.descriptionEN)
                                        return (
                                        <li key={f.id} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-monks-accent flex-shrink-0 mt-0.5" />
                                            <div className="text-justify">
                                                <span className="font-medium text-white">{fName}</span>
                                                {fDesc && (
                                                    <p className="text-monks-light mt-1">{fDesc}</p>
                                                )}
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )}

                        {service.media && service.media.length > 0 && (
                            <div className="space-y-6">
                                <h2 className="text-3xl text-white font-bold">Media</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {service.media.map((m) => (
                                        <div key={m.id} className="relative aspect-video rounded-2xl overflow-hidden bg-monks-gray border border-white/10">
                                            {m.mediaType === "VIDEO" ? (
                                                <video src={m.url} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                                            ) : (
                                                <Image src={m.url} alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(service.brandName || service.brandLogo) && (
                            <div className="pt-8 border-t border-white/10 flex items-center gap-4">
                                {service.brandLogo && (
                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                                        <Image src={service.brandLogo} alt="" fill className="object-contain p-2" sizes="64px" />
                                    </div>
                                )}
                                {service.brandName && (
                                    <span className="text-xl font-semibold text-white">{service.brandName}</span>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            )}

            <Footer />
        </main>
    )
}
