"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Download, FileText, ArrowUpRight, FileSpreadsheet, Monitor, Archive, FileCheck } from "lucide-react";
import { useLocale } from "../context/LocaleContext";

function getFileIcon(fileType: string | null | undefined) {
    const t = (fileType || "").toLowerCase();
    if (t.includes("pdf")) return <FileCheck className="w-8 h-8 text-white/50 group-hover:text-monks-accent transition-colors duration-500" />;
    if (t.includes("ppt") || t.includes("presentation")) return <Monitor className="w-8 h-8 text-white/50 group-hover:text-monks-accent transition-colors duration-500" />;
    if (t.includes("xls") || t.includes("sheet") || t.includes("csv")) return <FileSpreadsheet className="w-8 h-8 text-white/50 group-hover:text-monks-accent transition-colors duration-500" />;
    if (t.includes("zip") || t.includes("rar")) return <Archive className="w-8 h-8 text-white/50 group-hover:text-monks-accent transition-colors duration-500" />;
    return <FileText className="w-8 h-8 text-white/50 group-hover:text-monks-accent transition-colors duration-500" />;
}

export default function DownloadsClient({ downloads = [] }: { downloads: any[] }) {
    const locale = useLocale();
    const name = (item: any) => (locale === "en" && item.nameEN) ? item.nameEN : item.nameEL;
    const description = (item: any) => (locale === "en" && item.descriptionEN) ? item.descriptionEN : (item.descriptionEL || item.descriptionEN);

    return (
        <main className="min-h-screen bg-monks-black flex flex-col pt-32">
            <Navigation />

            {/* Header Section */}
            <section className="relative px-6 md:px-12 max-w-[1500px] mx-auto w-full pt-16 pb-24">
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-monks-accent/5 rounded-full blur-[120px] -translate-y-1/2" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <span className="text-monks-accent font-medium tracking-widest mb-4 block text-sm">{locale === "el" ? "Χρήσιμο Υλικό" : "Useful Resources"}</span>
                    <h1 className="text-[clamp(3rem,5vw,5rem)] font-black text-white capitalize mb-8 leading-[1.1]">
                        {locale === "el" ? <>Λήψεις & <span className="text-monks-accent">Οδηγοί</span></> : <>Downloads & <span className="text-monks-accent">Guides</span></>}
                    </h1>
                    <p className="text-xl text-monks-light leading-relaxed text-justify">
                        {locale === "el"
                            ? "Κατεβάστε δωρεάν εξειδικευμένους οδηγούς, whitepapers και αρχεία που σας βοηθούν να κατανοήσετε την ψηφιακή μετάβαση της επιχειρησής σας."
                            : "Download free guides, whitepapers and files to help you understand your business digital transition."}
                    </p>
                </motion.div>
            </section>

            {/* Downloads Grid */}
            <section className="relative pb-32 flex-grow bg-[#0a0f18] border-t border-white/5 pt-24">
                <div className="max-w-[1500px] mx-auto px-6 md:px-12">
                    {downloads.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-24 text-monks-light"
                        >
                            <Download className="w-12 h-12 mx-auto mb-4 opacity-30" />
                            <p className="text-lg text-justify">{locale === "el" ? "Δεν υπάρχουν διαθέσιμες λήψεις αυτή τη στιγμή." : "No downloads available at the moment."}</p>
                        </motion.div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {downloads.map((item, index) => (
                                <a
                                    href={item.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={item.id || index}
                                    download
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group relative h-full flex flex-col bg-monks-gray border border-white/5 rounded-[2rem] p-8 md:p-10 hover:border-monks-accent/40 hover:bg-monks-dark transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                                    >
                                        {/* Icon + file type badges */}
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-monks-accent/10 transition-colors duration-500">
                                                {getFileIcon(item.fileType)}
                                            </div>
                                            <div className="text-right flex flex-col items-end gap-2">
                                                {item.fileSize && (
                                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-white/40 border border-white/5">
                                                        {item.fileSize}
                                                    </span>
                                                )}
                                                {item.fileType && (
                                                    <span className="px-3 py-1 bg-monks-accent/10 rounded-full text-xs font-bold text-monks-accent border border-monks-accent/20">
                                                        {item.fileType}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {item.category && (
                                            <span className="text-white/40 text-sm font-bold tracking-wider mb-2 block">
                                                {item.category}
                                            </span>
                                        )}

                                        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-monks-accent transition-colors duration-500 line-clamp-2">
                                            {name(item)}
                                        </h3>

                                        {description(item) && (
                                            <p className="text-monks-light text-sm leading-relaxed flex-grow mb-8 line-clamp-3 text-justify">
                                                {description(item)}
                                            </p>
                                        )}

                                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors cursor-pointer">
                                            <span className="text-white font-bold group-hover:text-monks-accent transition-colors flex items-center gap-2 text-sm">
                                                <Download className="w-4 h-4" /> {locale === "el" ? "Λήψη Αρχείου" : "Download File"}
                                            </span>
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-monks-accent transition-colors transform group-hover:translate-x-1">
                                                <ArrowUpRight className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
