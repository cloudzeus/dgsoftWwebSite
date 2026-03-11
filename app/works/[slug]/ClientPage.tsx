"use client";

import { useRef } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Server, Activity, Lock, Cpu, CheckCircle, TrendingUp, Clock, Users, BarChart2, Database, Zap, Shield, Globe, Award } from "lucide-react";
import Link from "next/link";
import { useLocale } from "../../context/LocaleContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ICON_MAP: Record<string, React.ElementType> = {
    Activity, Lock, Server, Cpu, TrendingUp, Clock, Users, CheckCircle, BarChart2, Database, Zap, Shield, Globe, Award
};

export default function ClientPage({ initialWork }: { initialWork: any }) {
    const locale = useLocale();

    const data = {
        title: (locale === "en" && initialWork.titleEN) ? initialWork.titleEN : initialWork.titleEL,
        client: initialWork.customer?.NAME || (locale === "el" ? "Πελάτης" : "Client"),
        serviceNames: (initialWork.serviceNames || []).map((s: any) => (locale === "en" && s.nameEN) ? s.nameEN : s.nameEL),
        year: initialWork.completionDate || "—",
        challenge: (locale === "en" && initialWork.challengeEN) ? initialWork.challengeEN : (initialWork.challengeEL || initialWork.challengeEN || "—"),
        metrics: (initialWork.stats || []).map((s: any) => ({
            icon: ICON_MAP[s.icon] || Activity,
            title: s.value,
            desc: (locale === "en" && s.textEN) ? s.textEN : (s.textEL || s.textEN || "")
        })),
        steps: (locale === "en" && initialWork.stepsEN?.length) ? initialWork.stepsEN : (initialWork.stepsEL || initialWork.stepsEN || []),
        media: initialWork.media || []
    };

    const SERVICE_BADGE_COLORS = [
        "bg-monks-accent/20 text-monks-accent border-monks-accent/50",
        "bg-emerald-500/20 text-emerald-400 border-emerald-500/50",
        "bg-blue-500/20 text-blue-400 border-blue-500/50",
        "bg-amber-500/20 text-amber-400 border-amber-500/50",
        "bg-violet-500/20 text-violet-400 border-violet-500/50",
        "bg-cyan-500/20 text-cyan-400 border-cyan-500/50",
    ];

    const container = useRef<HTMLElement>(null);
    const milestonesRef = useRef<HTMLDivElement>(null);
    const milestoneItemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const items = milestoneItemsRef.current.filter(Boolean) as HTMLDivElement[];
        if (items.length === 0) return;
        const triggerEl = milestonesRef.current;
        gsap.fromTo(
            items,
            { opacity: 0, x: -48 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: triggerEl,
                    start: "top 75%",
                    end: "top 40%",
                    toggleActions: "play none none none",
                },
            }
        );
        return () => {
            ScrollTrigger.getAll().filter(t => t.trigger === triggerEl).forEach(t => t.kill());
        };
    }, { dependencies: [data.steps.length], scope: container });

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <main ref={container} className="min-h-screen bg-monks-black flex flex-col font-sans selection:bg-monks-accent selection:text-white">
            <Navigation />

            {/* Abstract Tech Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/10">

                {/* Abstract Data Flow Background */}
                <motion.div style={{ y }} className="absolute inset-0 -z-10 opacity-30">
                    <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-monks-accent/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
                </motion.div>

                <div className="max-w-[1500px] w-full mx-auto px-6 md:px-12 relative z-20">
                    <Link href="/works" className="inline-flex items-center gap-2 text-monks-light hover:text-white transition-colors mb-12 group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                        <span className="text-sm font-bold tracking-wider">{locale === "el" ? "Πίσω στα έργα" : "Back to works"}</span>
                    </Link>

                    <div className="grid lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-monks-gray/50 border border-white/10 text-monks-accent text-sm font-bold tracking-wider mb-8">
                                    <Server className="w-4 h-4" /> {locale === "el" ? "Μελέτη Περίπτωσης" : "Case Study"}
                                </div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-black text-white mb-8">
                                    {data.title}
                                </h1>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-4 border-l border-white/10 pl-8">
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                <h4 className="text-xs text-monks-light tracking-widest mb-1">{locale === "el" ? "Πελάτης" : "Client"}</h4>
                                <p className="font-medium text-white text-lg">{data.client}</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                                <h4 className="text-xs text-monks-light tracking-widest mb-2">{locale === "el" ? "Λύσεις" : "Solutions"}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {data.serviceNames.length > 0 ? data.serviceNames.map((name: string, i: number) => (
                                        <span key={i} className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold border ${SERVICE_BADGE_COLORS[i % SERVICE_BADGE_COLORS.length]}`}>
                                            {name}
                                        </span>
                                    )) : <p className="font-medium text-white text-lg">—</p>}
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                                <h4 className="text-xs text-monks-light tracking-widest mb-1">{locale === "el" ? "Έτος Ολοκλήρωσης" : "Completion Year"}</h4>
                                <p className="font-medium text-white text-lg">{data.year}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats first, then full-width challenge */}
            <section className="py-24 relative bg-[#0a0b0d]">
                <div className="max-w-[1500px] mx-auto px-6 md:px-12">
                    {data.metrics.length > 0 && (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {data.metrics.map((metric: any, i: number) => {
                                const MetricIcon = metric.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="border border-white/5 rounded-[2rem] p-8 bg-monks-black hover:border-monks-accent/30 transition-colors"
                                    >
                                        <MetricIcon className="w-8 h-8 text-monks-accent mb-6" />
                                        <span className="block text-4xl text-white font-black mb-2">{metric.title}</span>
                                        <span className="text-xs text-monks-light tracking-widest leading-tight block">{metric.desc}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-full text-2xl md:text-3xl text-monks-light font-light leading-relaxed text-justify"
                    >
                        <span className="text-white font-bold">{locale === "el" ? "Η Πρόκληση:" : "The Challenge:"}</span> {data.challenge}
                    </motion.div>
                </div>
            </section>

            {/* Abstract Systems Architecture Visual */}
            <section className="py-24 px-6 md:px-12 bg-monks-black">
                <div className="max-w-[1500px] mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12">{locale === "el" ? "Η Αρχιτεκτονική Λύση" : "The Solution Architecture"}</h2>

                    <div className="rounded-[3rem] overflow-hidden bg-monks-gray relative p-8 md:p-16 border border-white/5 flex flex-col lg:flex-row gap-12 items-center justify-between">
                        <div ref={milestonesRef} className="flex-1 space-y-6 z-10">
                            {data.steps.map((feat: string, i: number) => (
                                <div
                                    key={i}
                                    ref={el => { if (el) milestoneItemsRef.current[i] = el as HTMLDivElement; }}
                                    className="flex items-center gap-4 text-lg text-white font-medium bg-monks-black/50 p-4 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl"
                                >
                                    <CheckCircle className="w-6 h-6 text-monks-accent flex-shrink-0" />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>

                        {/* Abstract Datacenter Element */}
                        <div className="flex-1 relative h-[300px] lg:h-[400px] w-full flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-monks-accent/10 to-transparent rounded-full blur-3xl opacity-50" />
                            <div className="relative w-48 h-48 lg:w-64 lg:h-64 border-[0.5px] border-monks-accent/30 rounded-full animate-[spin_40s_linear_infinite] flex items-center justify-center">
                                <div className="w-32 h-32 lg:w-48 lg:h-48 border-[1px] border-white/10 rounded-full animate-[spin_25s_linear_reverse_infinite] flex items-center justify-center divide-x divide-white/10">
                                    <div className="w-20 h-20 lg:w-32 lg:h-32 bg-monks-black rounded-full shadow-[0_0_40px_rgba(230,57,70,0.2)] flex items-center justify-center border border-monks-accent/20">
                                        <Cpu className="w-8 h-8 lg:w-12 lg:h-12 text-monks-accent" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Media gallery */}
            {data.media.length > 0 && (
                <section className="py-24 px-6 md:px-12 bg-monks-black border-t border-white/10">
                    <div className="max-w-[1500px] mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-12">{locale === "el" ? "Μέσα & Επισκόπηση" : "Media & Overview"}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.media.map((m: any, i: number) => {
                                const isVideo = (m.type || "IMAGE").toUpperCase() === "VIDEO";
                                return (
                                    <motion.div
                                        key={m.id || m.url || i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="relative aspect-video rounded-2xl overflow-hidden bg-monks-gray border border-white/5"
                                    >
                                        {isVideo ? (
                                            <video src={m.url} className="w-full h-full object-cover" controls muted playsInline />
                                        ) : (
                                            <img src={m.url} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
