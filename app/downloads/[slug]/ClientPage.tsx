"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Download, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const downloadsData: Record<string, any> = {
    "cloud-security-guide-2024": {
        title: "Ασφάλεια Δεδομένων στο Cloud: Οδηγός 2024",
        category: "Οδηγός PDF",
        desc: "Στις επιχειρηματικές λειτουργίες της νέας εποχής, η ασφάλεια των δεδομένων σας πρέπει να είναι προτεραιότητα. Κατεβάστε τον πλήρη οδηγό.",
        fileSize: "2.4 MB",
        fileType: "PDF"
    },
    "erp-implementation-checklist": {
        title: "Checklist Υλοποίησης ERP 2024",
        category: "Checklist",
        desc: "Τα βήματα-κλειδιά για την ομαλή μετάβαση ή αναβάθμιση του ERP της εταιρείας σας.",
        fileSize: "1.1 MB",
        fileType: "PDF"
    },
    "eu-grants-whitepaper": {
        title: "Επιδοτήσεις & Μετασχηματισμός (Whitepaper)",
        category: "Whitepaper",
        desc: "Έκθεση μελέτης σχετικά με τη βελτιστοποίηση απορρόφησης κονδυλίων.",
        fileSize: "3.8 MB",
        fileType: "Whitepaper"
    }
};

export default function ClientPage({ slug }: { slug: string }) {
    const file = downloadsData[slug] || downloadsData["cloud-security-guide-2024"];
    const [downloading, setDownloading] = useState(false);
    const [downloaded, setDownloaded] = useState(false);

    const handleDownload = () => {
        setDownloading(true);

        setTimeout(() => {
            setDownloading(false);
            setDownloaded(true);
            setTimeout(() => setDownloaded(false), 3000); // Reset UI after 3s
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-monks-black flex flex-col pt-32 selection:bg-monks-accent selection:text-white">
            <Navigation />

            <article className="flex-grow pb-32">
                <div className="max-w-[1000px] mx-auto px-6 md:px-12 pt-16">
                    <Link href="/downloads" className="inline-flex items-center gap-2 text-monks-light hover:text-white transition-colors mb-12 group text-sm font-bold tracking-wider">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        ΠΙΣΩ ΣΤΑ ΑΡΧΕΙΑ
                    </Link>

                    <div className="flex gap-4 mb-6">
                        <span className="px-3 py-1 bg-white/10 text-white/50 text-xs font-bold rounded-full border border-white/5">
                            {file.fileSize}
                        </span>
                        <div className="flex items-center gap-2 text-xs font-bold bg-monks-accent/20 text-monks-accent px-3 py-1 rounded-full border border-monks-accent/20">
                            {file.fileType}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] capitalize">
                        {file.title}
                    </h1>

                    <p className="text-xl text-monks-light leading-relaxed mb-12 border-l-2 border-monks-accent pl-6">
                        {file.desc}
                    </p>

                    <div className="bg-monks-gray border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-monks-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                        <div className="flex items-center gap-6 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-monks-dark flex items-center justify-center border border-white/5 shadow-inner">
                                <FileText className="w-8 h-8 text-white/40" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">{file.title}</h3>
                                <span className="text-sm text-monks-light">Προετοιμασία Λήψης • {file.fileSize}</span>
                            </div>
                        </div>

                        <button
                            onClick={handleDownload}
                            disabled={downloading}
                            className={`relative z-10 px-8 py-4 rounded-full font-bold transition-all shadow-xl flex items-center justify-center gap-3 w-full md:w-auto
                                ${downloading ? 'bg-monks-dark text-white/50 cursor-not-allowed' :
                                    downloaded ? 'bg-[#22c55e] text-white hover:bg-[#1fb254]' :
                                        'bg-monks-accent text-white hover:bg-monks-red-dark hover:scale-105'}
                            `}
                        >
                            {downloading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                    Λήψη...
                                </>
                            ) : downloaded ? (
                                <>
                                    <CheckCircle2 className="w-5 h-5" />
                                    Ολοκληρώθηκε
                                </>
                            ) : (
                                <>
                                    <Download className="w-5 h-5" />
                                    Λήψη ({file.fileSize})
                                </>
                            )}
                        </button>
                    </div>

                </div>
            </article>

            <Footer />
        </main>
    );
}
