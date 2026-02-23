"use client";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, ArrowUpRight, X, Upload, CheckCircle, Briefcase, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

export default function CareersClient({ positions }: { positions: any[] }) {
    const [applyModal, setApplyModal] = useState<any | null>(null);
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-monks-black flex flex-col pt-32">
            <Navigation />

            {/* Header */}
            <section className="relative px-6 md:px-12 max-w-[1500px] mx-auto w-full pt-16 pb-24">
                <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-monks-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-monks-accent font-medium tracking-widest mb-4 block text-sm">Καριέρα</span>
                        <h1 className="text-[clamp(3rem,6vw,6rem)] leading-[0.9] font-black text-white capitalize mb-8">
                            Build the <span className="text-monks-accent">Future</span> With Us
                        </h1>
                        <p className="text-xl text-monks-light leading-relaxed">
                            Γίνε μέλος μιας ομάδας ψηφιακών πρωτοπόρων. Στη DGSOFT σχεδιάζουμε enterprise-grade ecosystems που αλλάζουν τον τρόπο λειτουργίας των επιχειρήσεων.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
                        className="relative lg:h-[500px] hidden lg:flex items-center justify-center p-8">
                        <div className="absolute top-1/4 right-0 w-64 h-80 bg-monks-gray border border-white/5 rounded-3xl -rotate-6 shadow-2xl overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-tr from-monks-dark/80 to-transparent flex items-end p-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-monks-accent">Athens HQ</span>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 bg-[#111318] border border-monks-accent/20 rounded-3xl rotate-3 z-20 shadow-[0_30px_60px_-15px_rgba(230,57,70,0.3)] overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-b from-transparent to-monks-accent/20 flex items-end p-6">
                                <span className="font-bold text-white text-xl">Life at DGSOFT</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Positions */}
            <section className="relative pb-32 flex-grow bg-[#0a0b0d]">
                <div className="max-w-[1500px] mx-auto px-6 md:px-12 pt-24">
                    <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Ανοιχτές Θέσεις</h2>
                        <span className="px-4 py-2 bg-monks-accent/10 text-monks-accent rounded-full text-sm font-bold">
                            {positions.length} {positions.length === 1 ? "Θέση" : "Θέσεις"}
                        </span>
                    </div>

                    {positions.length === 0 ? (
                        <div className="text-center py-24 text-monks-light">
                            <UserPlus className="w-12 h-12 mx-auto mb-4 opacity-30" />
                            <p className="text-lg mb-8">Δεν υπάρχουν ανοιχτές θέσεις αυτή τη στιγμή.</p>
                            <button onClick={() => setApplyModal({ titleEL: "Γενική Αίτηση", id: null })}
                                className="px-8 py-3 rounded-full bg-monks-accent text-white font-bold hover:bg-monks-accent/90 transition-all">
                                Αποστολή Αυθόρμητης Αίτησης
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-5">
                            {positions.map((pos, i) => {
                                const isExpanded = expandedId === pos.id;
                                return (
                                    <motion.div key={pos.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        className="bg-monks-gray border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 transition-all duration-300">

                                        {/* Row */}
                                        <div className="grid md:grid-cols-12 gap-4 items-center p-8 md:p-10">
                                            <div className="md:col-span-1 hidden md:flex">
                                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                                                    <Briefcase className="w-7 h-7 text-white/40" />
                                                </div>
                                            </div>
                                            <div className="md:col-span-5">
                                                {pos.departmentEL && (
                                                    <span className="text-monks-accent text-xs font-bold uppercase tracking-wider mb-1 block">{pos.departmentEL}</span>
                                                )}
                                                <h3 className="text-xl md:text-2xl font-bold text-white">{pos.titleEL}</h3>
                                            </div>
                                            <div className="md:col-span-3 flex flex-wrap gap-3">
                                                {pos.cityEL && (
                                                    <span className="flex items-center gap-1 text-xs text-monks-light border border-white/10 rounded-full px-3 py-1">
                                                        <MapPin className="w-3 h-3 text-monks-accent" />{pos.cityEL}
                                                    </span>
                                                )}
                                                {pos.typeEL && (
                                                    <span className="flex items-center gap-1 text-xs text-monks-light border border-white/10 rounded-full px-3 py-1">
                                                        <Clock className="w-3 h-3" />{pos.typeEL}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="md:col-span-3 flex items-center justify-end gap-3">
                                                <button
                                                    onClick={() => setExpandedId(isExpanded ? null : pos.id)}
                                                    className="flex items-center gap-1 text-xs text-white/50 hover:text-white transition-colors border border-white/10 rounded-full px-3 py-2">
                                                    {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                                    Λεπτομέρειες
                                                </button>
                                                <button
                                                    onClick={() => setApplyModal(pos)}
                                                    className="flex items-center gap-2 bg-monks-accent text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-monks-accent/90 active:scale-95 transition-all shadow-lg shadow-monks-accent/20">
                                                    <Upload className="w-4 h-4" /> Αίτηση
                                                </button>
                                            </div>
                                        </div>

                                        {/* Expandable details */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden border-t border-white/5">
                                                    <div className="p-8 md:p-10 md:pl-28 space-y-10">

                                                        {pos.descriptionEL && (
                                                            <p className="text-monks-light text-base leading-[1.8] text-justify">{pos.descriptionEL}</p>
                                                        )}

                                                        <div className="grid md:grid-cols-2 gap-10">
                                                            {/* ΚΑΘΗΚΟΝΤΑ */}
                                                            {pos.dutiesEL?.length > 0 && (
                                                                <div>
                                                                    <h4 className="text-white font-black text-sm mb-5 uppercase tracking-[0.15em]">
                                                                        Καθήκοντα
                                                                    </h4>
                                                                    <ul className="space-y-4">
                                                                        {pos.dutiesEL.map((d: string, idx: number) => (
                                                                            <li key={idx} className="flex gap-4 text-monks-light text-base leading-relaxed">
                                                                                <span className="text-monks-accent text-2xl leading-none flex-shrink-0 mt-0.5">▸</span>
                                                                                <span>{d}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}

                                                            {/* ΔΕΞΙΟΤΗΤΕΣ — same style as ΚΑΘΗΚΟΝΤΑ */}
                                                            {pos.skillsEL?.length > 0 && (
                                                                <div>
                                                                    <h4 className="text-white font-black text-sm mb-5 uppercase tracking-[0.15em]">
                                                                        Δεξιότητες
                                                                    </h4>
                                                                    <ul className="space-y-4">
                                                                        {pos.skillsEL.map((s: string, idx: number) => (
                                                                            <li key={idx} className="flex gap-4 text-monks-light text-base leading-relaxed">
                                                                                <span className="text-monks-accent text-2xl leading-none flex-shrink-0 mt-0.5">▸</span>
                                                                                <span>{s}</span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </div>

                                                        <button onClick={() => setApplyModal(pos)}
                                                            className="flex items-center gap-2 bg-monks-accent text-white font-bold px-8 py-3 rounded-full hover:bg-monks-accent/90 transition-all">
                                                            <Upload className="w-4 h-4" /> Αποστολή Βιογραφικού για αυτή τη θέση
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}

                    {positions.length > 0 && (
                        <div className="mt-16 p-8 border border-white/5 rounded-3xl text-center bg-monks-gray/30">
                            <h3 className="text-white font-bold text-xl mb-2">Δεν βρήκες κατάλληλη θέση;</h3>
                            <p className="text-monks-light text-sm mb-5">Στείλε μας το βιογραφικό σου και θα επικοινωνήσουμε μαζί σου όταν ανοίξει σχετική θέση.</p>
                            <button onClick={() => setApplyModal({ titleEL: "Γενική Αίτηση", id: null })}
                                className="px-8 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-monks-black transition-all inline-flex items-center gap-2">
                                <ArrowUpRight className="w-4 h-4" /> Αυθόρμητη Αίτηση
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <AnimatePresence>
                {applyModal && <CvModal position={applyModal} onClose={() => setApplyModal(null)} />}
            </AnimatePresence>

            <Footer />
        </main>
    );
}

/* ─────────────────────────────────────────────── */
/* CV Modal                                        */
/* ─────────────────────────────────────────────── */
function CvModal({ position, onClose }: { position: any; onClose: () => void }) {
    const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "" });
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        if (!cvFile) { setError("Παρακαλώ επισυνάψτε το βιογραφικό σας."); return; }
        setUploading(true);
        try {
            const fd = new FormData();
            fd.append("file", cvFile);
            const uploadRes = await fetch("/api/careers/upload-cv", { method: "POST", body: fd });
            const uploadData = await uploadRes.json();
            if (!uploadRes.ok || !uploadData.url) throw new Error(uploadData.error || "Σφάλμα ανεβάσματος αρχείου");

            const applyRes = await fetch("/api/careers/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, cvUrl: uploadData.url, positionId: position.id || null }),
            });
            const applyData = await applyRes.json();
            if (!applyRes.ok) throw new Error(applyData.error || "Σφάλμα αποστολής");
            setSubmitted(true);
        } catch (e: any) { setError(e.message); }
        finally { setUploading(false); }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={onClose}>
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }} transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-md bg-[#0d1117] border border-white/10 rounded-3xl p-8 shadow-2xl"
                onClick={e => e.stopPropagation()}>

                {submitted ? (
                    <div className="text-center py-6">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}>
                            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-black text-white mb-2">Ευχαριστούμε!</h3>
                        <p className="text-monks-light leading-relaxed mb-2">
                            Λάβαμε την αίτησή σας για τη θέση <span className="text-monks-accent font-bold">«{position.titleEL}»</span>.
                        </p>
                        <p className="text-monks-light text-sm mb-6">
                            Θα επικοινωνήσουμε μαζί σας σύντομα στο <span className="text-white">{form.email}</span>.
                        </p>
                        <button onClick={onClose} className="px-8 py-2.5 rounded-full bg-monks-accent text-white font-bold hover:bg-monks-accent/90 transition-all">
                            Κλείσιμο
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-black text-white">Αποστολή Αίτησης</h3>
                                <p className="text-monks-accent text-sm font-bold mt-0.5">«{position.titleEL}»</p>
                            </div>
                            <button onClick={onClose} className="text-monks-light hover:text-white transition-colors p-1"><X className="w-5 h-5" /></button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-xs font-bold text-monks-light block mb-1">Όνομα *</label>
                                    <input required placeholder="Γιώργος" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-monks-accent transition-colors" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-monks-light block mb-1">Επώνυμο *</label>
                                    <input required placeholder="Παπαδόπουλος" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-monks-accent transition-colors" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-monks-light block mb-1">Email *</label>
                                <input required type="email" placeholder="example@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-monks-accent transition-colors" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-monks-light block mb-1">Τηλέφωνο</label>
                                <input type="tel" placeholder="+30 694 000 0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-monks-accent transition-colors" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-monks-light block mb-1">Βιογραφικό (PDF / DOC) *</label>
                                <label className="flex items-center gap-3 w-full bg-white/5 border-2 border-dashed border-white/15 rounded-xl px-4 py-4 cursor-pointer hover:border-monks-accent/60 transition-colors group">
                                    <Upload className="w-5 h-5 text-monks-light group-hover:text-monks-accent transition-colors flex-shrink-0" />
                                    <span className="text-sm text-monks-light group-hover:text-white transition-colors truncate">
                                        {cvFile ? cvFile.name : "Επιλέξτε αρχείο..."}
                                    </span>
                                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={e => setCvFile(e.target.files?.[0] || null)} />
                                </label>
                            </div>
                            {error && <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-2">{error}</p>}
                            <button type="submit" disabled={uploading}
                                className="w-full py-3.5 rounded-xl bg-monks-accent text-white font-black text-sm hover:bg-monks-accent/90 transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-monks-accent/20">
                                {uploading
                                    ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Αποστολή...</>
                                    : <><Upload className="w-4 h-4" /> Αποστολή Αίτησης</>}
                            </button>
                            <p className="text-xs text-center text-white/20">Τα στοιχεία σας προστατεύονται και χρησιμοποιούνται μόνο για αξιολόγηση.</p>
                        </form>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
}
