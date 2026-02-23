"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Target, Percent, Download } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import db from "../../../data/db.json";

export default function ClientPage({ slug }: { slug: string }) {
    const program = db.euPrograms.find(p => p.slug === slug);
    const title = program?.el.title || slug.replace(/-/g, " ");

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
                        Πίσω στα Προγράμματα
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="grid lg:grid-cols-2 gap-16"
                    >
                        <div>
                            <div className="mb-4 text-sm font-medium text-[#FFD700] tracking-wider">
                                ΕΠΙΔΟΤΟΥΜΕΝΟ ΠΡΟΓΡΑΜΜΑ
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.1] capitalize">
                                {title.toLowerCase()}
                            </h1>
                            <p className="text-xl text-monks-light mb-12 leading-relaxed">
                                {program?.el.desc || `Ολοκληρωμένη συμβουλευτική και υποστήριξη για την ένταξη στο πρόγραμμα ${title}. Από τον προέλεγχο επιλεξιμότητας μέχρι την τελική εκταμίευση.`}
                            </p>

                            <div className="flex flex-col gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                                <div className="flex items-start gap-4">
                                    <Target className="w-6 h-6 text-[#FFD700] mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Ποσοστό Επιδότησης</h4>
                                        <p className="text-monks-light">Έως 50% ή 70% του συνολικού εγκεκριμένου προϋπολογισμού (ανάλογα την περιοχή και το μέγεθος της επιχείρησης).</p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-white/10" />
                                <div className="flex items-start gap-4">
                                    <Percent className="w-6 h-6 text-[#FFD700] mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Status Αιτήσεων</h4>
                                        <p className="text-green-400">Ενεργό — Υποβολή αιτήσεων έως εξαντλήσεως προϋπολογισμού.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                {['Μελέτη σκοπιμότητας & Σχεδιασμός', 'Σύνταξη πλήρους φακέλου υποβολής', 'Παρακολούθηση πορείας έργου', 'Κατάθεση εκθέσεων προόδου'].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white">
                                        <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                                        <span>{benefit}</span>
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
                                        <span>Κατεβάστε το Αρχείο με τις Λεπτομέρειες</span>
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
                                    <h3 className="text-2xl font-bold text-white mb-2">Άμεση Χρηματοδότηση</h3>
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
                    <h2 className="text-3xl text-white font-bold mb-6">Σχετικά με το πρόγραμμα</h2>
                    <p>
                        Οι σύγχρονες χρηματοδοτήσεις ΕΣΠΑ και του Ταμείου Ανάκαμψης μοχλεύουν την ψηφιακή αναβάθμιση και βιωσιμότητα. Αναλαμβάνουμε συμβουλευτικά να χαράξουμε τη στρατηγική επιτυχίας, διασφαλίζοντας την αρτιότητα του φακέλου σας.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
