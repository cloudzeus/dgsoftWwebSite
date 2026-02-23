"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogClient({ initialArticles = [] }: { initialArticles: any[] }) {
    return (
        <main className="min-h-screen bg-monks-black flex flex-col">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-48 pb-24 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-monks-accent/10 rounded-full blur-[150px] -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#0A3D73]/10 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] z-0" />

                <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-monks-accent font-medium tracking-widest mb-4 block text-sm">Ειδήσεις & Insights</span>
                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-white mb-6 leading-[1.1]">
                            Τεχνολογικά <span className="text-transparent bg-clip-text bg-gradient-to-r from-monks-light to-white/50">Νέα</span>
                        </h1>
                        <p className="text-xl text-monks-light max-w-2xl leading-relaxed">
                            Μάθετε πρώτοι για τις τεχνολογικές εξελίξεις, μελέτες επιτυχίας και τρόπους ανάπτυξης μέσα από τις τελευταίες μας δημοσιεύσεις.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-24 relative flex-grow bg-[#0a0f18] z-10">
                <div className="max-w-[1500px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {initialArticles.map((post, index) => {
                            const categoryName = post.categories?.[0]?.[`nameEL`] || "Ειδήσεις";
                            const authorName = post.author ? `${post.author.firstName} ${post.author.lastName}` : "DGSOFT Team";

                            return (
                                <Link href={`/blog/${post.slug}`} key={post.id || index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="group relative h-full flex flex-col overflow-hidden rounded-[2rem] bg-monks-black border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        {post.featureImage ? (
                                            <div className="h-64 w-full relative overflow-hidden border-b border-white/5">
                                                <img src={post.featureImage} alt={post.titleEL} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-monks-black/80 to-transparent" />
                                            </div>
                                        ) : (
                                            <div className="h-64 w-full bg-monks-gray relative overflow-hidden flex items-center justify-center border-b border-white/5">
                                                <div className="absolute inset-0 bg-gradient-to-tr from-monks-accent/20 to-transparent mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                                                <div className="w-1/2 h-full absolute flex space-x-2 -skew-x-[30deg] bg-white/5 group-hover:bg-monks-accent/5 transition-colors duration-500" />
                                                <span className="text-white/20 font-black text-4xl opacity-50 group-hover:scale-110 transition-transform duration-700 blur-sm">{categoryName.substring(0, 3).toUpperCase()}</span>
                                            </div>
                                        )}

                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center justify-between gap-4 mb-6">
                                                <span className="px-4 py-1.5 rounded-full text-xs font-bold text-monks-accent bg-monks-accent/10">
                                                    {categoryName}
                                                </span>
                                                <div className="flex items-center gap-2 text-xs text-monks-light font-medium">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(post.createdAt).toLocaleDateString('el-GR', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-monks-accent transition-colors duration-500 line-clamp-3">
                                                {post.titleEL}
                                            </h3>

                                            <p className="text-monks-light text-sm leading-relaxed flex-grow mb-8 line-clamp-4">
                                                {post.shortDescriptionEL}
                                            </p>

                                            <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between text-white text-sm font-bold group-hover:text-monks-light transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-monks-gray border border-white/10 flex items-center justify-center text-xs">{(authorName.substring(0, 2) || "DG").toUpperCase()}</div>
                                                    <span className="text-white/60 font-medium text-xs">{authorName}</span>
                                                </div>

                                                <div className="flex items-center gap-2 text-monks-accent group-hover:gap-4 transition-all">
                                                    Άρθρο
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
