"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Server, Activity, Lock, Cpu, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const worksData: Record<string, any> = {
    "soft1-cloud-erp-series-6": {
        title: "Soft1 Cloud ERP Series 6",
        client: "Επιχειρηματικός Μετασχηματισμός",
        solutions: "Soft1 ERP, Cloud, Στατιστική Ανάλυση",
        year: "2024",
        challenge: "Η επιχείρηση αντιμετώπιζε δυσκολίες στην παρακολούθηση αποθεμάτων, καθυστερήσεις στην τιμολόγηση και έλλειψη ενοποιημένης εικόνας μεταξύ πωλήσεων και παραγωγής. Απαιτούταν ένας ριζικός ανασχεδιασμός της μηχανογράφησης.",
        metrics: [
            { icon: Activity, title: "+65%", desc: "Ταχύτητα Επιβεβαίωσης Παραγγελιών" },
            { icon: Lock, title: "100%", desc: "Ασφάλεια & Δεδομένα στο Cloud" }
        ],
        steps: [
            "Παραμετροποίηση εγκατάστασης Soft1 ERP",
            "Υλοποίηση κυκλώματος Παραγωγής",
            "Διασύνδεση με Λογιστικά Συστήματα",
            "Ανάπτυξη custom reporting με Power BI"
        ]
    },
    "soft1-cloud-crm-series-6": {
        title: "Soft1 Cloud CRM Series 6",
        client: "Αυτοματοποίηση Πωλήσεων",
        solutions: "Soft1 CRM, Cloud Τηλεφωνία, CTI",
        year: "2024",
        challenge: "Ανάγκη για άμεση οργάνωση του πελατολογίου, παρακολούθηση πορείας πωλήσεων σε πραγματικό χρόνο, και ενσωμάτωση κλήσεων (CTI) εντός της καρτέλας πελάτη.",
        metrics: [
            { icon: Activity, title: "-60%", desc: "Μείωση Χρόνου Διαχείρισης" },
            { icon: Lock, title: "360°", desc: "Πλήρης Εικόνα Πελάτη" }
        ],
        steps: [
            "Ανάλυση Sales Funnel & Παραμετροποίηση CRM",
            "Διασύνδεση VoIP Κέντρου (CTI)",
            "Υλοποίηση διαδικασιών After-Sales Support",
            "Εκπαίδευση ομάδας Πωλήσεων"
        ]
    },
    "ariadne-service-hub": {
        title: "Ariadne Service Hub",
        client: "Ενοποίηση Διαδικασιών",
        solutions: "B2B Portal, Soft1 API, React",
        year: "2023",
        challenge: "Ψηφιοποίηση της διαδικασίας εξυπηρέτησης χρηστών (Helpdesk/Ticketing) και B2B παραγγελιών μέσω σύγχρονου custom Portal άμεσα συνδεδεμένου με το ERP.",
        metrics: [
            { icon: Activity, title: "2M+", desc: "Συναλλαγές Ετησίως" },
            { icon: Lock, title: "24/7", desc: "Διαθεσιμότητα Υπηρεσιών B2B" }
        ],
        steps: [
            "Σχεδιασμός UI/UX Custom Εφαρμογής",
            "Ανάπτυξη Portal μέσω React & Web APIs",
            "Live Web Service διασύνδεση με Soft1",
            "Ενσωμάτωση Module Αιτημάτων"
        ]
    },
    "digital-tools-exodologia": {
        title: "Εξοδολογία & DocuSign",
        client: "Ψηφιακά Εργαλεία",
        solutions: "DocuSign, Email Tool, Soft1 Connectors",
        year: "2023",
        challenge: "Αυτοματοποίηση υπογραφής εγγράφων εξ αποστάσεως και μαζική αποστολή προσωποποιημένων email με δυναμική καταχώρηση δαπανών εξοδολογίου.",
        metrics: [
            { icon: Activity, title: "100%", desc: "Paperless Λειτουργία" },
            { icon: Lock, title: "GDPR", desc: "Νόμιμη Ψηφιακή Υπογραφή" }
        ],
        steps: [
            "Ενσωμάτωση DocuSign API στο ERP",
            "Παραμετροποίηση DGSOFT Email Tool",
            "Αυτοματισμοί Εγκρίσεων Εξοδολογίων",
            "Secure & Authenticated Workflows"
        ]
    }
};

export default function ClientPage({ slug }: { slug: string }) {
    const data = worksData[slug] || worksData["soft1-cloud-erp-series-6"];

    const container = useRef(null);
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
                        <span className="text-sm font-bold tracking-wider">Πίσω στα έργα</span>
                    </Link>

                    <div className="grid lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-monks-gray/50 border border-white/10 text-monks-accent text-sm font-bold tracking-wider mb-8">
                                    <Server className="w-4 h-4" /> Case Study
                                </div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-black text-white mb-8">
                                    {data.title}
                                </h1>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-4 border-l border-white/10 pl-8">
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                <h4 className="text-xs text-monks-light tracking-widest mb-1">Πελάτης</h4>
                                <p className="font-medium text-white text-lg">{data.client}</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                                <h4 className="text-xs text-monks-light tracking-widest mb-1">Λύσεις</h4>
                                <p className="font-medium text-white text-lg">{data.solutions}</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                                <h4 className="text-xs text-monks-light tracking-widest mb-1">Έτος Ολοκλήρωσης</h4>
                                <p className="font-medium text-white text-lg">{data.year}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Metrics Grid */}
            <section className="py-24 relative bg-[#0a0b0d]">
                <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-6 lg:col-start-1 text-2xl md:text-3xl text-monks-light font-light leading-relaxed">
                        <span className="text-white font-bold">Η Πρόκληση:</span> {data.challenge}
                    </div>

                    <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-2 gap-6">
                        {data.metrics.map((metric: any, i: number) => {
                            const MetricIcon = metric.icon;
                            return (
                                <div key={i} className="border border-white/5 rounded-[2rem] p-8 bg-monks-black hover:border-monks-accent/30 transition-colors">
                                    <MetricIcon className="w-8 h-8 text-monks-accent mb-6" />
                                    <span className="block text-4xl text-white font-black mb-2">{metric.title}</span>
                                    <span className="text-xs text-monks-light tracking-widest leading-tight block">{metric.desc}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Abstract Systems Architecture Visual */}
            <section className="py-24 px-6 md:px-12 bg-monks-black">
                <div className="max-w-[1500px] mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12">Η Αρχιτεκτονική Λύση</h2>

                    <div className="rounded-[3rem] overflow-hidden bg-monks-gray relative p-8 md:p-16 border border-white/5 flex flex-col lg:flex-row gap-12 items-center justify-between">
                        <div className="flex-1 space-y-6 z-10">
                            {data.steps.map((feat: string, i: number) => (
                                <div key={i} className="flex items-center gap-4 text-lg text-white font-medium bg-monks-black/50 p-4 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
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

            <Footer />
        </main>
    );
}
