"use client";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Link from "next/link";

const blogData: Record<string, any> = {
    "supply-chain-transformation": {
        author: "DGSOFT Team",
        published: "2024-10-20",
        imageUrl: "/blog/supply-chain.jpg",
        title: "Ο Μετασχηματισμός της Εφοδιαστικής μέσα από το ERP",
        category: "Digital Strategy",
        excerpt: "Μάθετε πώς ένα σύγχρονο ERP σύστημα μπορεί να αναδιαμορφώσει την εφοδιαστική αλυσίδα και να μειώσει τα κόστη. Αναλύουμε περιπτώσεις πελατών μας.",
        content: "<p>Η εφοδιαστική αλυσίδα αντιμετωπίζει πρωτοφανείς πιέσεις τα τελευταία χρόνια. Ένα σύγχρονο σύστημα ERP μπορεί να βελτιώσει σημαντικά τις διαδικασίες, προσφέροντας δεδομένα σε πραγματικό χρόνο και εργαλεία προβλέψεων.</p><p>Με τη χρήση του Soft1 Cloud ERP, οι εταιρείες μπορούν να παρακολουθούν το απόθεμά τους σε όλα τα σημεία της αλυσίδας...</p>"
    },
    "crm-sales-growth": {
        author: "Sales Team",
        published: "2024-12-05",
        imageUrl: "/blog/crm-growth.jpg",
        title: "Πώς το CRM αυξάνει τις πωλήσεις κατά 40%",
        category: "Sales Automation",
        excerpt: "Η αυτοματοποίηση των διαδικασιών πωλήσεων μέσω Soft1 CRM Series 6, προσφέρει μια πανοραμική εικόνα 360° του πελατολογίου, διευκολύνοντας την παραγωγικότητα.",
        content: "<p>Το CRM δεν είναι πλέον απλώς ένα εργαλείο καταγραφής επαφών. Αποτελεί το κέντρο ελέγχου κάθε σύγχρονης ομάδας πωλήσεων.</p><p>Μέσα από το Soft1 CRM Series 6, οι ομάδες αποκτούν εργαλεία για B2B στοχεύσεις, προσωποποιημένη εξυπηρέτηση, CTI γέφυρες και ενσωματωμένα email campaigns που αυξάνουν δραστικά τα έσοδα.</p>"
    },
    "ai-in-business-2025": {
        author: "Tech Staff",
        published: "2025-01-10",
        imageUrl: "/blog/ai-future.jpg",
        title: "Ο ρόλος του AI στις ελληνικές επιχειρήσεις το 2025",
        category: "Τεχνητή Νοημοσύνη",
        excerpt: "Μια ματιά στο μέλλον: Πώς οι υπηρεσίες τεχνητής νοημοσύνης μπαίνουν ραγδαία στο οργανόγραμμα των επιχειρήσεων μέσω εργαλείων αυτοματισμού.",
        content: "<p>Το AI είναι ήδη εδώ και δεν πρόκειται για επιστημονική φαντασία. Οι ελληνικές επιχειρήσεις αρχίζουν να το υιοθετούν σε τομείς όπως η εξυπηρέτηση πελατών μέσω chatbots, και η βελτιστοποίηση αποθηκών με Machine Learning αλγορίθμους.</p><p>Εξετάζουμε πώς μπορείτε να ενσωματώσετε εργαλεία AI στο υφιστάμενο Cloud περιβάλλον σας με ασφάλεια.</p>"
    }
};

export default function ClientPage({ slug }: { slug: string }) {
    const post = blogData[slug] || blogData["supply-chain-transformation"];

    return (
        <main className="min-h-screen bg-monks-black flex flex-col pt-32 selection:bg-monks-accent selection:text-white">
            <Navigation />

            <article className="flex-grow pb-32">
                <div className="max-w-[1000px] mx-auto px-6 md:px-12 pt-16">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-monks-light hover:text-white transition-colors mb-12 group text-sm font-bold tracking-wider">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        ΠΙΣΩ ΣΤΑ ΑΡΘΡΑ
                    </Link>

                    <div className="flex gap-4 mb-6">
                        <span className="px-3 py-1 bg-monks-accent/20 text-monks-accent text-xs font-bold rounded-full border border-monks-accent/20">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-monks-light font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
                            <Tag className="w-3 h-3" />
                            Άρθρο
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] capitalize">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-8 py-6 border-y border-white/10 mb-12">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-monks-gray border border-white/10 flex items-center justify-center">
                                <User className="w-5 h-5 text-white/50" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-sm font-bold">{post.author}</span>
                                <span className="text-monks-light text-xs">Συγγραφέας</span>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-white/10" />

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-monks-gray border border-white/10 flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-white/50" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-sm font-bold">
                                    {new Date(post.published).toLocaleDateString('el-GR', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </span>
                                <span className="text-monks-light text-xs">Δημοσίευση</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="prose prose-invert prose-lg max-w-none text-monks-light" dangerouslySetInnerHTML={{ __html: post.content }} />

                </div>
            </article>

            <Footer />
        </main>
    );
}
