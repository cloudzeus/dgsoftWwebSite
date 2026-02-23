"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
export default function ClientPage({ slug }: { slug: string }) {
    const title = slug.replace(/-/g, " ").toUpperCase();

    return (
        <main className="min-h-screen bg-monks-black flex flex-col">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden flex-grow border-b border-white/10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-monks-red-dark/10 rounded-full blur-[150px] -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-monks-accent/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />

                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
                    <Link href="/services" className="inline-flex items-center gap-2 text-monks-light hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="grid lg:grid-cols-2 gap-16"
                    >
                        <div>
                            <div className="mb-4 text-sm font-medium text-monks-accent tracking-wider uppercase">
                                ENTERPRISE SOLUTION
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-[1.1] capitalize">
                                {title.toLowerCase()}
                            </h1>
                            <p className="text-xl text-monks-light mb-12 leading-relaxed">
                                Empower your business with cutting edge integration and architecture. This represents the detailed breakdown of the {title} offering, featuring unparalleled scalability, secure infrastructure, and intelligent automation.
                            </p>

                            <div className="flex flex-col gap-4">
                                {['Seamless Cloud Integration', 'Real-time Data Processing', 'End-to-end Encryption', '24/7 Priority Support'].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3 text-white">
                                        <CheckCircle className="w-5 h-5 text-monks-accent flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:block relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-monks-gray to-monks-dark rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                                {/* Visual abstract representation */}
                                <div className="w-[150%] h-[150%] absolute border-[1px] border-monks-accent/20 rounded-full animate-[spin_60s_linear_infinite]" />
                                <div className="w-[100%] h-[100%] absolute border-[1px] border-white/5 rounded-full animate-[spin_40s_linear_reverse_infinite]" />
                                <div className="w-32 h-32 bg-monks-accent/20 backdrop-blur-md rounded-full shadow-[0_0_50px_rgba(230,57,70,0.4)] flex items-center justify-center p-6 text-monks-light text-center text-xs">
                                    Abstract Visualization
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Body */}
            <section className="py-24 relative">
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-monks-light text-lg leading-relaxed space-y-8">
                    <h2 className="text-3xl text-white font-bold mb-6">Service Overview</h2>
                    <p>
                        Behind every successful modern enterprise lies a robust digital infrastructure. With our <span className="text-white font-medium">{title.toLowerCase()}</span> platform, organizations can automate their workflows, minimize operational bottlenecks, and maintain compliance standards simultaneously. Our certified teams assess your unique ecosystem to integrate modules perfectly tailored to your business model.
                    </p>
                    <p>
                        Advanced intelligence and machine learning components ensure that your analytics dashboard learns from historical patterns, delivering predictive forecasting that drastically improves decision-making capabilities inside the boardroom.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
