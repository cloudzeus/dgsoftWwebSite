"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Award, Users, Globe, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const awards = [
  { title: "SoftOne Gold Partner", org: "2018-2024" },
  { title: "Best Cloud Implementations", org: "Partner Awards" },
  { title: "Customer Success 360", org: "DGSOFT Quality" },
];

const values = [
  {
    icon: Zap,
    title: "15+ Χρόνια Εμπειρίας",
    description: "Δίπλα στις επιχειρήσεις ως εξιδεικευμένος συνεργάτης από το 2006."
  },
  {
    icon: Users,
    title: "Επίσημος Συνεργάτης SoftOne",
    description: "Πιστοποιημένη τεχνογνωσία σε κάθε πτυχή λογισμικού."
  },
  {
    icon: Globe,
    title: "Εθνική & Κυπριακή Εμβέλεια",
    description: "Υποστήριξη σε Αθήνα, Θεσσαλονίκη, Ιωάννινα, Βόλο, και Κύπρο."
  },
  {
    icon: Award,
    title: "SLA-Based Υποστήριξη",
    description: "Η τεχνολογία έχει αξία μόνο όταν υποστηρίζεται και είμαστε δίπλα σας."
  }
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-32 bg-monks-black relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-bold text-white/[0.02] whitespace-nowrap">
          DGSOFT
        </span>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        {/* Main Statement */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <span className="section-number">Ποιοι Ειμαστε</span>
          <h2 className="text-display-lg font-bold text-white max-w-5xl mb-12">
            Από το 2006, σταθερά δίπλα στην <span className="gradient-text">επιχείρησή σας</span>.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <p className="text-xl text-monks-light leading-relaxed">
              Η DGSOFT είναι μια δυναμικά εξελισσόμενη εταιρεία πληροφορικής, με στενή και επίσημη συνεργασία με τη SoftOne. Εξειδικευόμαστε στη διάθεση και υλοποίηση πρωτοποριακών μηχανογραφικών λύσεων λογισμικού (ERP – CRM), βοηθώντας εκατοντάδες εταιρείες να οργανώσουν και να αυτοματοποιήσουν την καθημερινή τους λειτουργία.
            </p>
            <div className="flex flex-col items-start gap-8">
              <p className="text-xl text-monks-light leading-relaxed">
                Συνδυάζουμε τεχνογνωσία σε ERP, CRM και CTI για επιχειρήσεις και εμπόριο. Η ομάδα μας αποτελείται από έμπειρους επαγγελματίες και τεχνικούς, ώστε το έργο σας να ολοκληρώνεται με συνέπεια και μετρήσιμα αποτελέσματα.
              </p>
              <Link href="/careers" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-monks-black font-semibold rounded-full hover:bg-monks-accent hover:text-white transition-all duration-300 group">
                Join Our Team
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-32"
        >
          <h3 className="text-sm font-medium text-monks-light mb-12 tracking-widest uppercase">
            Διακρισεις
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="text-5xl font-bold text-white/10 group-hover:text-monks-accent/30 transition-colors mb-4">
                  0{index + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{award.title}</h4>
                <p className="text-monks-light">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-sm font-medium text-monks-light mb-12 tracking-widest uppercase">
            Η Προσεγγιση Μας
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-monks-gray/30 border border-white/5 hover:border-monks-accent/30 transition-all duration-300"
              >
                <value.icon className="w-8 h-8 text-monks-accent mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-monks-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2006", label: "Έτος Ίδρυσης" },
              { value: "3K+", label: "Άδειες" },
              { value: "5", label: "Κόμβοι (GR, CY)" },
              { value: "100%", label: "Εστίαση Πελάτη" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-monks-light text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
