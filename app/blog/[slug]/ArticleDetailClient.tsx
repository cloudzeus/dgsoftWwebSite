"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";

export default function ArticleDetailClient({ article }: { article: any }) {
    const authorName = article.author
        ? `${article.author.firstName} ${article.author.lastName}`
        : "DGSOFT Team";
    const categoryName = article.categories?.[0]?.nameEL || "Άρθρο";
    const hasHero = !!article.featureImage;

    return (
        <main className="min-h-screen bg-monks-black flex flex-col selection:bg-monks-accent selection:text-white">
            <Navigation />

            {/* Full-Width Hero Image / Video */}
            {hasHero ? (
                <div className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
                    <img
                        src={article.featureImage}
                        alt={article.titleEL}
                        className="w-full h-full object-cover"
                    />
                    {/* Deep gradient overlay so text is always readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-monks-black via-monks-black/50 to-transparent" />

                    {/* Back button floating over the hero */}
                    <div className="absolute top-28 left-6 md:left-12 z-10">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group text-sm font-bold tracking-wider backdrop-blur-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            ΠΙΣΩ ΣΤΑ ΑΡΘΡΑ
                        </Link>
                    </div>

                    {/* Title & category centered/upper area with staggered animation */}
                    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 pt-24">
                        <div className="max-w-[900px] mx-auto w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex gap-3 mb-6"
                            >
                                <span className="px-4 py-1.5 bg-monks-accent/90 text-white text-xs font-bold rounded-full tracking-widest uppercase backdrop-blur-sm">
                                    {categoryName}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 35 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] drop-shadow-2xl"
                            >
                                {article.titleEL}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                                style={{ originX: 0 }}
                                className="h-0.5 w-24 bg-monks-accent mt-6"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                /* No image — simple dark hero section with text */
                <div className="relative pt-40 pb-16 px-6 md:px-12 border-b border-white/5 bg-[#080c12]">
                    <div className="max-w-[1000px] mx-auto">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-monks-light hover:text-white transition-colors mb-8 group text-sm font-bold tracking-wider">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            ΠΙΣΩ ΣΤΑ ΑΡΘΡΑ
                        </Link>
                        <div className="flex gap-3 mb-5">
                            <span className="px-3 py-1 bg-monks-accent/20 text-monks-accent text-xs font-bold rounded-full border border-monks-accent/20">
                                {categoryName}
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-black text-white leading-[1.2]">
                            {article.titleEL}
                        </h1>
                    </div>
                </div>
            )}

            <article className="flex-grow pb-32">
                <div className="max-w-[1000px] mx-auto px-6 md:px-12 pt-12">

                    {/* Author + Date meta bar */}
                    <div className="flex items-center gap-8 py-6 border-b border-white/10 mb-12">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-monks-gray border border-white/10 flex items-center justify-center">
                                <User className="w-5 h-5 text-white/50" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-sm font-bold">{authorName}</span>
                                <span className="text-monks-light text-xs">Συγγραφέας</span>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-white/10" />

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-monks-gray border border-white/10 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-white/50" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-sm font-bold">
                                    {new Date(article.createdAt).toLocaleDateString("el-GR", { day: "2-digit", month: "short", year: "numeric" })}
                                </span>
                                <span className="text-monks-light text-xs">Δημοσίευση</span>
                            </div>
                        </div>
                    </div>

                    {/* Short Description pull-quote */}
                    {article.shortDescriptionEL && (
                        <p className="text-lg text-monks-light leading-relaxed mb-10 border-l-4 border-monks-accent pl-6 italic">
                            {article.shortDescriptionEL}
                        </p>
                    )}

                    {/* Main Content */}
                    {article.descriptionEL && (
                        <div
                            className="prose prose-invert prose-lg max-w-none text-monks-light
                                prose-h2:text-white prose-h2:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                                prose-h3:text-white prose-h3:font-semibold prose-h3:text-xl
                                prose-p:leading-relaxed prose-p:text-monks-light
                                prose-strong:text-white prose-strong:font-bold
                                prose-ul:text-monks-light prose-li:marker:text-monks-accent"
                            dangerouslySetInnerHTML={{ __html: article.descriptionEL }}
                        />
                    )}

                    {/* Media Gallery — non-cover items */}
                    {article.media && article.media.filter((m: any) => m.url !== article.featureImage).length > 0 && (
                        <div className="mt-16 border-t border-white/10 pt-12">
                            <h3 className="text-white text-xl font-bold mb-6">Φωτογραφίες</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {article.media.filter((m: any) => m.url !== article.featureImage).map((m: any, i: number) => (
                                    <div key={i} className="aspect-video rounded-xl overflow-hidden border border-white/10 group">
                                        {m.type === "VIDEO" ? (
                                            <video src={m.url} className="w-full h-full object-cover" controls muted />
                                        ) : (
                                            <img src={m.url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>

            <Footer />
        </main>
    );
}
