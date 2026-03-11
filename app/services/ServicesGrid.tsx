"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useLocale } from "@/app/context/LocaleContext"

export type PublicServiceItem = {
    id: string
    slug: string
    nameEL: string
    nameEN: string | null
    shortDescriptionEL: string | null
    shortDescriptionEN: string | null
    featureImage: string | null
    category: { nameEL: string; nameEN: string | null }
}

function ServiceCardVideo({ src }: { src: string }) {
    const ref = React.useRef<HTMLVideoElement>(null)
    const containerRef = React.useRef<HTMLDivElement>(null)
    React.useEffect(() => {
        const video = ref.current
        const container = containerRef.current
        if (!video || !container) return
        video.muted = true
        video.loop = true
        video.playsInline = true
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) video.play().catch(() => {})
                    else video.pause()
                })
            },
            { threshold: 0.25, rootMargin: "50px" }
        )
        observer.observe(container)
        return () => observer.disconnect()
    }, [src])
    return (
        <div ref={containerRef} className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-white/5">
            <video
                ref={ref}
                src={src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    )
}

export function ServicesGrid({ services }: { services: PublicServiceItem[] }) {
    const locale = useLocale()
    // When locale is EN we use EN fields; if EN is missing/empty we fall back to EL (so some cards stay Greek until EN content is added in admin)
    const name = (s: PublicServiceItem) => (locale === "en" && s.nameEN?.trim()) ? s.nameEN : s.nameEL
    const categoryName = (s: PublicServiceItem) => (locale === "en" && s.category?.nameEN?.trim() ? s.category.nameEN : s.category?.nameEL) ?? ""
    const shortDesc = (s: PublicServiceItem) => (locale === "en" && s.shortDescriptionEN?.trim() ? s.shortDescriptionEN : s.shortDescriptionEL) ?? ""

    if (!services.length) {
        return (
            <div className="py-24 text-center text-monks-light text-justify">
                <p className="text-lg">Δεν υπάρχουν διαθέσιμες υπηρεσίες προς το παρόν.</p>
            </div>
        )
    }
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <Link href={`/services/${service.slug}`} key={service.id}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
                        className="group relative h-full"
                    >
                        <div className="relative h-full flex flex-col overflow-hidden rounded-[2rem] bg-monks-gray border border-white/5 hover:border-monks-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(230,57,70,0.15)] p-10">
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                <ArrowUpRight className="w-8 h-8 text-monks-accent" />
                            </div>

                            {service.featureImage && (
                                service.featureImage.endsWith(".mp4") ? (
                                    <ServiceCardVideo src={service.featureImage} />
                                ) : (
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 bg-white/5">
                                        <Image
                                            src={service.featureImage}
                                            alt=""
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                )
                            )}
                            {!service.featureImage && (
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-monks-accent/10 transition-colors duration-500" />
                            )}

                            <div className="mb-4 text-sm font-medium text-monks-accent tracking-wider uppercase">
                                {categoryName(service)}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-monks-accent transition-colors duration-500">
                                {name(service)}
                            </h3>

                            <p className="text-monks-light leading-relaxed flex-grow text-justify">
                                {shortDesc(service)}
                            </p>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    )
}
