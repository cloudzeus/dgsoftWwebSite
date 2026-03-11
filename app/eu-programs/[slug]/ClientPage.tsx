"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Target, Percent, Download } from "lucide-react";
import Link from "next/link";
import { useLocale } from "../../context/LocaleContext";
import db from "../../../data/db.json";

export default function ClientPage({ slug }: { slug: string }) {
    const locale = useLocale();
    const program = (db as any).euPrograms?.find((p: any) => p.slug === slug);
    const lang = program?.[locale] || program?.el || {};
    const title = lang.title || slug.replace(/-/g, " ");

    return (
        <main className="min-h-screen bg-monks-black flex flex-col">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden flex-grow border-b border-white/10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0A3D73]/10 rounded-full blur-[150px] -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FFD700]/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />

                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
                    <Link href="/eu-programs" className="inline-flex items-center gap-2 text-monks-light hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        {locale === "el" ? "Πίσω στα Προγράμματα" : "Back to Programs"}
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="grid lg:grid-cols-2 gap-16"
                    >
                        <div>
                            <div className="mb-4 text-sm font-medium text-[#FFD700] tracking-wider">
                                {locale === "el" ? "ΕΠΙΔΟΤΟΥΜΕΝΟ ΠΡΟΓΡΑΜΜΑ" : "FUNDED PROGRAM"}
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.1] capitalize">
                                {title.toLowerCase()}
                            </h1>
                            <p className="text-xl text-monks-light mb-12 leading-relaxed text-justify">
                                {lang.desc || (locale === "el" ? `Ολοκληρωμένη συμβουλευτική και υποστήριξη για την ένταξη στο πρόγραμμα ${title}. Από τον προέλεγχο επιλεξιμότητας μέχρι την τελική εκταμίευση.` : `Full consulting and support for joining the ${title} program. From eligibility pre-check to final disbursement.`)}
                            </p>

                            <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                                <div className="flex items-start gap-4">
                                    <Target className="w-6 h-6 text-[#FFD700] mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{locale === "el" ? "Ποσοστό Επιδότησης" : "Funding Rate"}</h4>
                                        <p className="text-monks-light text-justify">{locale === "el" ? "Έως 50% ή 70% του συνολικού εγκεκριμένου προϋπολογισμού (ανάλογα την περιοχή και το μέγεθος της επιχείρησης)." : "Up to 50% or 70% of total approved budget (depending on region and company size)."}</p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-white/10" />
                                <div className="flex items-start gap-4">
                                    <Percent className="w-6 h-6 text-[#FFD700] mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{locale === "el" ? "Status Αιτήσεων" : "Application Status"}</h4>
                                        <p className="text-green-400">{locale === "el" ? "Ενεργό — Υποβολή αιτήσεων έως εξαντλήσεως προϋπολογισμού." : "Active — Applications open until budget is exhausted."}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                {(locale === "el"
                                    ? ['Μελέτη σκοπιμότητας & Σχεδιασμός', 'Σύνταξη πλήρους φακέλου υποβολής', 'Παρακολούθηση πορείας έργου', 'Κατάθεση εκθέσεων προόδου']
                                    : ['Feasibility study & Planning', 'Full application package preparation', 'Project progress monitoring', 'Progress report submission']
                                ).map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white">
                                        <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                                        <span className="text-justify">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {program?.fileUrl && (
                                <div className="mt-10">
                                            <a
                                                href={program.fileUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                download
                                                className="inline-flex flex-wrap items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#E3AA00] text-monks-black font-semibold rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                                            >
                                                <Download className="w-5 h-5 flex-shrink-0" />
                                                <span>{locale === "el" ? "Κατεβάστε το Αρχείο με τις Λεπτομέρειες" : "Download Details File"}</span>
                                                <span className="text-sm opacity-70">({program.fileType}, {program.fileSize})</span>
                                            </a>
                                </div>
                            )}
                        </div>

                        <div className="hidden lg:block relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#111318] to-monks-black rounded-[3rem] border border-[#FFD700]/10 overflow-hidden shadow-2xl flex items-center justify-center">
                                <div className="w-[100%] h-[100%] absolute border-[1px] border-[#0A3D73]/40 rounded-full animate-[spin_30s_linear_infinite]" />
                                <div className="w-[80%] h-[80%] absolute border-[1px] border-[#FFD700]/20 rounded-full animate-[spin_20s_linear_reverse_infinite]" />

                                <div className="text-center z-10">
                                    <div className="w-24 h-24 bg-[#FFD700]/10 backdrop-blur-md rounded-2xl shadow-[0_0_50px_rgba(255,215,0,0.1)] flex items-center justify-center mx-auto mb-6 text-[#FFD700]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{locale === "el" ? "Άμεση Χρηματοδότηση" : "Direct Funding"}</h3>
                                    <span className="text-monks-light">DGSOFT Grants Team</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Body */}
            <section className="py-24 relative">
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-monks-light text-lg leading-relaxed space-y-8">
                    <h2 className="text-3xl text-white font-bold mb-6">{locale === "el" ? "Σχετικά με το πρόγραμμα" : "About the program"}</h2>
                    <p className="text-justify">
                        {locale === "el"
                            ? "Οι σύγχρονες χρηματοδοτήσεις ΕΣΠΑ και του Ταμείου Ανάκαμψης μοχλεύουν την ψηφιακή αναβάθμιση και βιωσιμότητα. Αναλαμβάνουμε συμβουλευτικά να χαράξουμε τη στρατηγική επιτυχίας, διασφαλίζοντας την αρτιότητα του φακέλου σας."
                            : "Modern ESF+ and Recovery Fund financing leverages digital upgrade and sustainability. We provide advisory support to shape your success strategy and ensure the quality of your application package."}
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
