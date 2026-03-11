"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowUpRight, FileText, Download, Calendar } from "lucide-react";
import Link from "next/link";
import { useLocale } from "../context/LocaleContext";

export default function LatestInsightsClient({ articles = [] }: { articles: any[] }) {
    const { ref, isVisible } = useScrollAnimation(0.1);
    const locale = useLocale();
    const title = (item: any) => (locale === "en" && item.titleEN) ? item.titleEN : item.titleEL;
    const categoryName = (item: any) => (locale === "en" && item.categories?.[0]?.nameEN) ? item.categories[0].nameEN : (item.categories?.[0]?.nameEL || (locale === "el" ? "Νέα" : "News"));

    return (
        <section className="py-24 bg-monks-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-monks-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
                >
                    <div>
                        <span className="text-monks-accent font-medium tracking-widest block mb-4">{locale === "el" ? "Ανακαλύψτε" : "Discover"}</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            {locale === "el" ? <>Νέα & <span className="gradient-text">Downloads</span></> : <>News & <span className="gradient-text">Downloads</span></>}
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <Link href="/blog" className="px-6 py-3 rounded-full border border-white/10 text-white text-sm font-bold hover:bg-white hover:text-monks-black transition-all">
                            {locale === "el" ? "Όλα τα Άρθρα" : "All Articles"}
                        </Link>
                        <Link href="/downloads" className="px-6 py-3 rounded-full bg-monks-gray border border-white/5 text-monks-light text-sm font-bold hover:text-white hover:border-white/20 transition-all flex items-center gap-2">
                            <Download className="w-4 h-4" /> {locale === "el" ? "Υλικό" : "Resources"}
                        </Link>
                    </div>
                </motion.div>

                {articles.length === 0 ? (
                    <div className="text-center text-monks-light py-16 border border-white/5 rounded-3xl text-justify">
                        {locale === "el" ? "Δεν υπάρχουν άρθρα ακόμα." : "No articles yet."}
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {[...articles].reverse().map((item, i) => {
                            const catName = categoryName(item);
                            const hasMedia = !!item.featureImage;
                            return (
                                <Link href={`/blog/${item.slug}`} key={item.id || i} className="block h-full">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.8, delay: i * 0.15 }}
                                        className="group relative bg-[#0d1017] rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500 outline-none flex flex-col h-full overflow-hidden hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        {/* Feature image — always visible */}
                                        {hasMedia && (
                                            <div className="absolute inset-0 z-0">
                                                <img
                                                    src={item.featureImage}
                                                    alt={title(item)}
                                                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                                                />
                                                {/* Gradient so text stays legible */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-monks-black via-monks-black/75 to-monks-black/20" />
                                            </div>
                                        )}

                                        {/* Card content */}
                                        <div className="relative z-10 p-8 flex flex-col h-full">
                                            <div className="flex items-center justify-between mb-8">
                                                <div className="flex gap-2">
                                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-monks-light/10 text-monks-light group-hover:bg-monks-accent/20 group-hover:text-monks-accent transition-colors">
                                                        {locale === "el" ? "Άρθρο" : "Article"}
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full text-xs text-white/40 border border-white/5">
                                                        {catName}
                                                    </span>
                                                </div>
                                                <FileText className="w-6 h-6 text-monks-light group-hover:text-monks-accent group-hover:scale-110 transition-all duration-300" />
                                            </div>

                                            <div className="mt-auto">
                                                <div className="flex items-center gap-2 text-xs text-monks-light mb-3">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(item.createdAt).toLocaleDateString(locale === "el" ? "el-GR" : "en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-monks-accent transition-colors line-clamp-2">
                                                    {title(item)}
                                                </h3>

                                                <span className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all w-fit">
                                                    {locale === "el" ? "Διαβάστε Περισσότερα" : "Read More"}
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
