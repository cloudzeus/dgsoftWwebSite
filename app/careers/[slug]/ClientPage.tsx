"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, MapPin, BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ClientPage({ slug }: { slug: string }) {
    const title = slug.replace(/-/g, " ");

    return (
        <main className="min-h-screen bg-monks-black flex flex-col pt-32 selection:bg-monks-accent selection:text-white">
            <Navigation />

            {/* Header Info Banner */}
            <section className="relative px-6 md:px-12 max-w-[1200px] mx-auto w-full pt-16 pb-16 border-b border-white/10">

                <Link href="/careers" className="inline-flex items-center gap-2 text-monks-light hover:text-white transition-colors mb-12 group text-sm font-bold tracking-wider">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    ΠΙΣΩ ΣΤΙΣ ΘΕΣΕΙΣ
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white capitalize leading-[1.1]">
                        {title.toLowerCase()}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 md:gap-12 mt-4 bg-white/5 py-4 px-6 md:px-8 rounded-full border border-white/10 w-fit">
                        <div className="flex items-center gap-2 text-monks-light font-medium">
                            <BriefcaseBusiness className="w-4 h-4 text-monks-accent" />
                            Τμήμα Υλοποίησης
                        </div>
                        <div className="hidden md:block w-1 h-4 bg-white/10" />
                        <div className="flex items-center gap-2 text-monks-light font-medium">
                            <MapPin className="w-4 h-4 text-monks-accent" />
                            Αθήνα / Θεσσαλονίκη / Remote
                        </div>
                        <div className="hidden md:block w-1 h-4 bg-white/10" />
                        <div className="flex items-center gap-2 text-monks-light font-medium">
                            <Clock className="w-4 h-4 text-monks-accent" />
                            Πλήρης Απασχόληση
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Main Job Description Body */}
            <section className="flex-grow py-24 relative">
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16">

                    {/* Detailed Text Block */}
                    <div className="lg:col-span-8 space-y-12 text-monks-light text-lg leading-relaxed">

                        <div>
                            <h2 className="text-2xl text-white font-bold mb-6">Σχετικά με τη Θέση</h2>
                            <p>
                                Είμαστε σε συνεχή αναζήτηση ταλέντων! Η συγκεκριμένη θέση είναι κρίσιμη για την αποστολή μας: να εκσυγχρονίσουμε και να σχεδιάσουμε κλιμακώσιμο επιχειρηματικό λογισμικό.
                                Θα συνεργάζεστε στενά με την ομάδα Customer Success, συμβάλλοντας στην αρχιτεκτονική και την υποστήριξη επιχειρήσεων πάνω σε λύσεις SoftOne.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl text-white font-bold mb-6">Κύριες Αρμοδιότητες.</h2>
                            <ul className="space-y-4">
                                {[
                                    'Παραμετροποίηση και υλοποίηση λύσεων Soft1 ERP/CRM εγκαταστάσεων.',
                                    'Ανάλυση αναγκών και διαδικασιών της επιχείρησης πελάτη.',
                                    'Εκπαίδευση χρηστών και υποστήριξη (Helpdesk & On-site).',
                                    'Παρακολούθηση και διασφάλιση εύρυθμης λειτουργίας συστημάτων.'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-monks-accent mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl text-white font-bold mb-6">Απαραίτητα Προσόντα.</h2>
                            <ul className="space-y-4">
                                {['Αποδεδειγμένη εργασιακή εμπειρία σε IT οργανισμούς και επιχειρηματικό λογισμικό.', 'Καλή γνώση συστημάτων RDBMS (π.χ. SQL Server, Oracle).', 'Ισχυρές αναλυτικές δεξιότητες και ικανότητα επίλυσης προβλημάτων.', 'Πτυχίο ΑΕΙ/ΤΕΙ Κατεύθυνσης Πληροφορικής ή Οικονομικής. '].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-monks-accent mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Sticky Action Sidebar */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-40 bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
                            <h3 className="text-2xl font-bold text-white mb-2">Κάντε Αίτηση</h3>
                            <p className="text-sm text-monks-light mb-8">Στείλτε μας το βιογραφικό σας. Θα χαρούμε να μάθουμε περισσότερα για εσάς.</p>
                            <a
                                href="mailto:hr@dgsoft.gr"
                                className="w-full block text-center bg-monks-accent text-white font-bold tracking-widest py-4 rounded-xl hover:bg-monks-red-dark transition-colors duration-300 shadow-[0_10px_30px_-10px_rgba(230,57,70,0.5)]"
                            >
                                Αποστολη CV
                            </a>
                            <p className="text-xs text-center text-monks-light/50 mt-4 tracking-wider">Απάντηση εντός 48 ωρών</p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
