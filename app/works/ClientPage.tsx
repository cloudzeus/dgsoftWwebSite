"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BarChart, Database, Cloud, Code2 } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const works = [
    {
        slug: "soft1-cloud-erp-series-6",
        title: "Soft1 Cloud ERP Series 6",
        client: "Επιχειρηματικός Μετασχηματισμός",
        category: "Ολοκληρωμένες Λύσεις Λογισμικού",
        year: "2024",
        metric: "+40% Παραγωγικότητα",
        icon: Database,
        tech: ["Soft1 ERP", "Cloud Computing", "Στατιστική Ανάλυση"],
        color: "from-[#111318] to-monks-black",
    },
    {
        slug: "soft1-cloud-crm-series-6",
        title: "Soft1 Cloud CRM Series 6",
        client: "Αυτοματοποίηση Πωλήσεων",
        category: "Διαχείριση Πελατών",
        year: "2024",
        metric: "-60% Χρόνος Διαχείρισης",
        icon: BarChart,
        tech: ["Soft1 CRM", "CTI Γέφυρες", "Cloud Τηλεφωνία"],
        color: "from-[#0a0f18] to-monks-dark",
    },
    {
        slug: "ariadne-service-hub",
        title: "Ariadne Service Hub",
        client: "Ενοποίηση Διαδικασιών",
        category: "Custom Β2Β & B2C Portal",
        year: "2023",
        metric: "2M+ Συναλλαγές",
        icon: Code2,
        tech: ["Soft1 API", "React", "Node.js"],
        color: "from-monks-dark to-monks-black",
    },
    {
        slug: "digital-tools-exodologia",
        title: "Εξοδολογία & DocuSign",
        client: "Ψηφιακά Εργαλεία",
        category: "Automations",
        year: "2023",
        metric: "100% Paperless",
        icon: Cloud,
        tech: ["Soft1 Connectors", "DocuSign", "Email Tools"],
        color: "from-[#160a0c] to-monks-black",
    },
];

const Card = ({ work, i, progress, range, targetScale }: any) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    const Icon = work.icon;

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0 min-h-[700px]">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className="relative flex flex-col w-full max-w-[1200px] h-[600px] lg:h-[650px] max-h-[85vh] rounded-[3rem] p-8 md:p-10 lg:p-16 border border-white/5 overflow-hidden origin-top hover:border-monks-accent/50 transition-colors duration-500 shadow-2xl"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${work.color}`} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />

                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-12">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <Link href={`/works/${work.slug}`} className="flex items-center gap-2 group cursor-pointer bg-white/5 px-6 py-3 rounded-full hover:bg-monks-accent transition-all duration-500 border border-white/10 hover:border-transparent">
                            <span className="text-white font-bold tracking-widest text-sm">Προβολή</span>
                            <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-bold tracking-wider mb-6">
                        <span className="text-monks-accent bg-monks-accent/10 px-4 py-2 rounded-full border border-monks-accent/20">{work.category}</span>
                        <span className="text-monks-light bg-white/5 px-4 py-2 rounded-full border border-white/10">{work.year}</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                        {work.title}
                    </h2>

                    <p className="text-xl md:text-2xl text-monks-light mb-12 flex-grow">
                        Πελάτης: <span className="text-white font-medium">{work.client}</span>
                    </p>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mt-auto pt-8 border-t border-white/10">
                        <div className="flex-1">
                            <span className="text-xs text-monks-light tracking-widest mb-4 block">Τεχνολογικό Stack</span>
                            <div className="flex flex-wrap gap-2">
                                {work.tech.map((t: string, idx: number) => (
                                    <span key={idx} className="text-sm text-white bg-white/10 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md">{t}</span>
                                ))}
                            </div>
                        </div>

                        <div className="lg:text-right">
                            <span className="text-xs text-monks-light tracking-widest mb-2 block">Κύριο Αποτέλεσμα</span>
                            <span className="text-3xl lg:text-5xl font-black text-white block">
                                {work.metric}
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default function WorksPage({ initialWorks }: { initialWorks?: any[] }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const displayWorks = initialWorks && initialWorks.length > 0
        ? initialWorks.map((w, idx) => ({
            slug: w.slug,
            title: w.titleEL,
            client: w.customer?.NAME || "Επιχειρηματικός Μετασχηματισμός",
            category: "Case Study",
            year: w.completionDate || "2024",
            metric: w.stats?.[0]?.value ? `${w.stats[0].value} ${w.stats[0].textEL}` : "+40% Παραγωγικότητα",
            icon: Database, // Fallback icon
            tech: w.servicesUsed?.slice(0, 3) || ["Soft1 ERP", "Cloud Computing"],
            color: idx % 2 === 0 ? "from-[#111318] to-monks-black" : "from-[#0a0f18] to-monks-dark",
            image: w.media?.find((m: any) => m.featured)?.url || w.media?.[0]?.url
        }))
        : works; // fallback to static if no dynamic data

    return (
        <main ref={container} className="relative bg-monks-black flex flex-col">
            <Navigation />

            {/* Dynamic Header */}
            <section className="relative px-6 md:px-12 max-w-[1500px] mx-auto w-full pt-32 pb-12 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-monks-accent font-medium tracking-widest mb-6 block">Case Studies</span>
                    <h1 className="text-[clamp(3rem,5vw,5rem)] font-black text-white capitalize mb-8 leading-[1.1] max-w-4xl">
                        Ιστορίες <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-monks-light to-white/30">Επιτυχίας</span> & <span className="gradient-text">Τεχνολογίας</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-monks-light max-w-3xl leading-relaxed">
                        Δείτε πώς βοηθήσαμε κορυφαίες επιχειρήσεις να μετασχηματίσουν την λειτουργία τους μέσω προηγμένων λύσεων λογισμικού, Cloud υποδομών και αυτοματισμών.
                    </p>
                </motion.div>
            </section>

            {/* Stacked Parallax Scroll Effect Layout */}
            <section className="relative mt-8 pb-0 px-6 md:px-12">
                {displayWorks.map((work: any, i: number) => {
                    const targetScale = 1 - ((displayWorks.length - i) * 0.05);
                    return (
                        <Card
                            key={i}
                            i={i}
                            work={work}
                            progress={scrollYProgress}
                            range={[i * (1 / (displayWorks.length || 1)), 1]}
                            targetScale={targetScale}
                        />
                    )
                })}
            </section>

            <div className="relative z-50 bg-monks-black">
                <Footer />
            </div>
        </main>
    );
}
