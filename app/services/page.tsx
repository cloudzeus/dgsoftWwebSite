"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Cloud, Database, Shield, Smartphone, Globe } from "lucide-react";
import Link from "next/link";

const services = [
    { slug: "soft1-cloud-erp", title: "Soft1 Cloud ERP", category: "Εταιρικες Λυσεις", icon: Cloud, desc: "Μια σύγχρονη λύση επιχειρηματικού λογισμικού, κατασκευασμένη με υψηλές τεχνικές προδιαγραφές." },
    { slug: "soft1-cloud-crm", title: "Soft1 Cloud CRM", category: "Διαχειριση Πελατων", icon: Globe, desc: "Χαρτογραφήστε και παρακολουθήστε ολόκληρο το ταξίδι του πελάτη από μία κεντρική πλατφόρμα." },
    { slug: "custom-software", title: "Custom Software", category: "Αναπτυξη", icon: Cpu, desc: "Εξατομικευμένες εφαρμογές σχεδιασμένες για να καλύπτουν τις δικές σας λειτουργικές ανάγκες." },
    { slug: "cybersecurity", title: "Υπηρεσίες Κυβερνοασφάλειας", category: "Ασφαλεια", icon: Shield, desc: "Αξιόπιστη προστασία για τα εταιρικά σας δεδομένα και την cloud υποδομή σας." },
    { slug: "mobile-apps", title: "Mobile App Development", category: "Mobile", icon: Smartphone, desc: "Native και cross-platform φορητές λύσεις για συσκευές iOS και Android." },
    { slug: "data-analytics", title: "Data & Analytics", category: "Business Intelligence", icon: Database, desc: "Μετατρέψτε τα δεδομένα σας σε αξιοποιήσιμες επιχειρηματικές λύσεις με προηγμένο BI." }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-monks-black flex flex-col">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-48 pb-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-monks-red-dark/10 rounded-full blur-[150px] -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-monks-accent/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />

                <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-display-sm md:text-display-md font-bold text-white mb-6 leading-[1.1]">
                            Οι <span className="gradient-text">Υπηρεσίες</span> μας
                        </h1>
                        <p className="text-xl text-monks-light max-w-3xl leading-relaxed">
                            Παρέχουμε κορυφαίες ψηφιακές λύσεις προσαρμοσμένες στις ανάγκες της επιχείρησής σας, με στόχο την επιτάχυνση της ανάπτυξής σας. Ανακαλύψτε το πλήρες φάσμα των υπηρεσιών μας.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 relative flex-grow">
                <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Link href={`/services/${service.slug}`} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
                                        className="group relative h-full"
                                    >
                                        <div className="relative h-full flex flex-col overflow-hidden rounded-[2rem] bg-monks-gray border border-white/5 hover:border-monks-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(230,57,70,0.15)] p-10">

                                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                                <ArrowUpRight className="w-8 h-8 text-monks-accent" />
                                            </div>

                                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-monks-accent/10 transition-colors duration-500">
                                                <Icon className="w-8 h-8 text-white group-hover:text-monks-accent transition-colors duration-500" />
                                            </div>

                                            <div className="mb-4 text-sm font-medium text-monks-accent tracking-wider uppercase">
                                                {service.category}
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-monks-accent transition-colors duration-500">
                                                {service.title}
                                            </h3>

                                            <p className="text-monks-light leading-relaxed flex-grow">
                                                {service.desc}
                                            </p>

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
