"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp, HandCoins, Building2, Globe2, Smartphone, X, Search, Loader2 } from "lucide-react";
import Link from "next/link";
import { useLocale } from "../context/LocaleContext";
import db from "../../data/db.json";

const iconMap: Record<string, typeof Smartphone> = {
    Smartphone,
    HandCoins,
    TrendingUp,
    Building2,
};

export default function EUProgramsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vat, setVat] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [contactTime, setContactTime] = useState("morning");
    const [contactMethod, setContactMethod] = useState("phone");
    const [isLoading, setIsLoading] = useState(false);
    const locale = useLocale();
    const programs = (db as any).euPrograms || [];

    const handleFetchVat = async () => {
        if (!vat) return;
        setIsLoading(true);
        try {
            const res = await fetch("/api/vat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ afm: vat })
            });
            const data = await res.json();
            if (data.basic_rec) {
                setCompanyName(data.basic_rec.onomasia || "");
                const addr = `${data.basic_rec.postal_address || ""} ${data.basic_rec.postal_address_no || ""}`.trim();
                setAddress(addr);
                setZipCode(data.basic_rec.postal_zip_code || "");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-monks-black flex flex-col relative">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-48 pb-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0A3D73]/30 rounded-full blur-[150px] -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#FFD700]/10 rounded-full blur-[150px] translate-y-1/3 translate-x-1/3" />

                <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-display-sm md:text-display-md font-bold text-white mb-6 leading-[1.1]">
                            {locale === "el" ? <>Ευρωπαϊκά <span className="bg-gradient-to-r from-[#FFD700] to-[#E3AA00] text-transparent bg-clip-text">Προγράμματα</span></> : <>European <span className="bg-gradient-to-r from-[#FFD700] to-[#E3AA00] text-transparent bg-clip-text">Programs</span></>}
                        </h1>
                        <p className="text-xl text-monks-light max-w-3xl leading-relaxed mb-8 text-justify">
                            {locale === "el"
                                ? "Αξιοποιήστε τα τρέχοντα ευρωπαϊκά και εθνικά προγράμματα επιδότησης. Σας βοηθάμε να πετύχετε την απόλυτη ψηφιακή αναβάθμιση της επιχείρησής σας, αναλαμβάνοντας όλη τη διαδικασία υποβολής και υλοποίησης."
                                : "Make the most of current European and national funding programs. We help you achieve full digital upgrade of your business, handling the entire submission and implementation process."}
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-gradient-to-r from-[#FFD700] to-[#E3AA00] text-monks-black font-semibold px-8 py-4 rounded-full hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300"
                        >
                            {locale === "el" ? "Ελέγξτε την Επιλεξιμότητά σας" : "Check Your Eligibility"}
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-24 relative flex-grow">
                <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        {programs.map((program: any, index: number) => {
                            const lang = program[locale] || program.el || {};
                            const Icon = iconMap[program.icon] || Smartphone;
                            return (
                                <Link href={`/eu-programs/${program.slug}`} key={program.slug || index}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
                                        className="group relative h-full"
                                    >
                                        <div className="relative h-full flex flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-monks-gray via-[#111318] to-monks-black border border-white/5 hover:border-[#FFD700]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,215,0,0.1)] p-10 mt-1">

                                            <div className="absolute bottom-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                                <ArrowUpRight className="w-8 h-8 text-[#FFD700]" />
                                            </div>

                                            <div className="flex justify-between items-start mb-8 relative z-10">
                                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#FFD700]/10 transition-colors duration-500 outline outline-1 outline-white/10 group-hover:outline-[#FFD700]/20">
                                                    <Icon className="w-8 h-8 text-white group-hover:text-[#FFD700] transition-colors duration-500" />
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs text-monks-light tracking-wide block mb-1">{locale === "el" ? "Προϋπολογισμός" : "Budget"}</span>
                                                    <span className="font-bold text-[#FFD700] bg-[#FFD700]/10 px-3 py-1 rounded-full text-sm shadow-sm backdrop-blur-sm">
                                                        {lang.amount || ""}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mb-4 text-sm font-medium text-white/50 tracking-wider flex items-center gap-2">
                                                <Globe2 className="w-4 h-4 text-[#0A3D73] group-hover:text-[#FFD700] transition-colors duration-300" />
                                                {lang.category || ""}
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FFD700] transition-colors duration-500 pr-8">
                                                {lang.title || ""}
                                            </h3>

                                            <p className="text-monks-light leading-relaxed flex-grow text-justify">
                                                {lang.desc || ""}
                                            </p>

                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-monks-gray border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 relative shadow-2xl"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <h2 className="text-2xl font-bold text-white mb-6">{locale === "el" ? "Στοιχεία Επικοινωνίας" : "Contact Details"}</h2>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-monks-light mb-2">ΑΦΜ / VAT Number</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={vat}
                                            onChange={(e) => setVat(e.target.value)}
                                            placeholder={locale === "el" ? "π.χ. 801946016" : "e.g. 801946016"}
                                            className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                                        />
                                        <button
                                            onClick={handleFetchVat}
                                            disabled={isLoading || !vat}
                                            className="bg-white/10 hover:bg-white/20 text-white px-4 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50"
                                        >
                                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin text-[#FFD700]" /> : <Search className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    <p className="text-xs text-monks-light mt-1">{locale === "el" ? "Συμπληρώστε το ΑΦΜ και κάντε αναζήτηση για αυτόματη συμπλήρωση." : "Enter VAT number and search for auto-fill."}</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-monks-light mb-2">{locale === "el" ? "Όνομα Εταιρίας" : "Company Name"}</label>
                                    <input
                                        type="text"
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-monks-light mb-2">{locale === "el" ? "Διεύθυνση" : "Address"}</label>
                                        <input
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-monks-light mb-2">{locale === "el" ? "Τ.Κ. (Zip Code)" : "Zip Code"}</label>
                                        <input
                                            type="text"
                                            value={zipCode}
                                            onChange={(e) => setZipCode(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-monks-light mb-2">{locale === "el" ? "Τηλέφωνο Επικοινωνίας" : "Contact Phone"}</label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder={locale === "el" ? "π.χ. 2101234567" : "e.g. 2101234567"}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-monks-light mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="π.χ. email@company.gr"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-monks-light mb-2">{locale === "el" ? "Ιδανική Ώρα Επικοινωνίας" : "Preferred Contact Time"}</label>
                                        <select
                                            value={contactTime}
                                            onChange={(e) => setContactTime(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors appearance-none"
                                        >
                                            <option value="morning">{locale === "el" ? "Πρωί (09:00 - 12:00)" : "Morning (09:00 - 12:00)"}</option>
                                            <option value="afternoon">{locale === "el" ? "Μεσημέρι (12:00 - 15:00)" : "Noon (12:00 - 15:00)"}</option>
                                            <option value="evening">{locale === "el" ? "Απόγευμα (15:00 - 18:00)" : "Afternoon (15:00 - 18:00)"}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-monks-light mb-2">{locale === "el" ? "Τρόπος Επικοινωνίας" : "Contact Method"}</label>
                                        <div className="flex bg-white/5 border border-white/10 rounded-lg overflow-hidden p-1">
                                            <button
                                                type="button"
                                                onClick={() => setContactMethod("phone")}
                                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${contactMethod === 'phone' ? 'bg-[#FFD700] text-monks-black' : 'text-monks-light hover:text-white'}`}
                                            >
                                                {locale === "el" ? "Τηλέφωνο" : "Phone"}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setContactMethod("teams")}
                                                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${contactMethod === 'teams' ? 'bg-[#FFD700] text-monks-black' : 'text-monks-light hover:text-white'}`}
                                            >
                                                Microsoft Teams
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="w-full bg-[#FFD700] text-monks-black font-semibold py-3 rounded-lg hover:bg-[#E3AA00] transition-colors mt-2"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        alert(locale === "el" ? "Το αίτημά σας καταχωρήθηκε! Θα επικοινωνήσουμε μαζί σας σύντομα." : "Your request has been submitted! We will contact you soon.");
                                    }}
                                >
                                    {locale === "el" ? "Υποβολή Αιτήματος" : "Submit Request"}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
