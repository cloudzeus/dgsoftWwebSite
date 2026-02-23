"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    client: "Retail Chain S.A.",
    title: "Μετάβαση στο Soft1 Cloud ERP",
    description: "Πλήρης μηχανογράφηση 15 καταστημάτων και ενοποίηση αποθήκης.",
    category: "ERP & Εμπόριο",
    year: "2024",
    color: "from-monks-red-dark to-monks-accent"
  },
  {
    client: "Telecom Partner",
    title: "Αυτοματοποίηση με 3K Billing",
    description: "Διαχείριση σύνθετων τηλεπικοινωνιακών χρεώσεων και έκδοση 50.000 λογαριασμών/μήνα.",
    category: "Τιμολόγηση",
    year: "2024",
    color: "from-monks-accent to-monks-red-light"
  },
  {
    client: "Υπηρεσίες Υγείας",
    title: "Ενοποίηση CRM & CTI",
    description: "Call center integration με άμεση αναγνώριση κλήσης ασθενών.",
    category: "CRM & CTI",
    year: "2023",
    color: "from-monks-red-dark to-monks-red-light"
  },
  {
    client: "B2B Διανομέας",
    title: "Mobile Πωλήσεις μέσω Soft1 SFA",
    description: "Πλήρης εικόνα αποθέματος και άμεση παραγγελιοληψία στο tablet του πωλητή.",
    category: "Field Sales",
    year: "2023",
    color: "from-monks-red-light to-monks-accent"
  }
];

export default function Work() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="work" className="py-32 bg-monks-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-monks-accent/10 rounded-full blur-[150px] translate-y-1/2" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8"
        >
          <div>
            <span className="section-number">Κλαδοι</span>
            <h2 className="text-display-md font-bold text-white">
              <span className="gradient-text">Λύσεις</span> για κάθε<br />
              επιχείρηση.
            </h2>
          </div>
          <Link href="/works" className="mt-4 md:mt-0 flex items-center gap-2 text-monks-light hover:text-white transition-colors group px-6 py-3 rounded-full border border-white/20 hover:border-white">
            <span className="font-semibold text-sm tracking-wider">View All Projects</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
              className="group border-t border-white/10 last:border-b hover:border-monks-accent/50 transition-colors duration-500"
            >
              <div className="py-8 md:py-12 grid md:grid-cols-12 gap-6 md:gap-8 items-center cursor-pointer">
                {/* Year & Category */}
                <div className="md:col-span-2 flex md:flex-col gap-4 md:gap-2 text-sm text-monks-light">
                  <span>{project.year}</span>
                  <span className="text-monks-accent">{project.category}</span>
                </div>

                {/* Title & Client */}
                <div className="md:col-span-5">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-monks-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-monks-light">{project.client}</p>
                </div>

                {/* Description */}
                <div className="md:col-span-4">
                  <p className="text-monks-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-monks-accent group-hover:border-monks-accent transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          className="mt-20 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-monks-accent/20 to-monks-red-dark/20" />
          <div className="absolute inset-0 bg-monks-black/60 backdrop-blur-sm" />

          <div className="relative z-10 p-8 md:p-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-monks-accent font-medium mb-4 block">Επιδοτούμενα Προγράμματα</span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Κάνε την ψηφιακή αναβάθμιση με επιδότηση
              </h3>
              <p className="text-monks-light mb-8 text-lg">
                Η DGSOFT σε βοηθά να αποκτήσεις Soft1 ERP, CRM, CTI και ειδικές
                πλατφόρμες με σημαντική επιδότηση ή και χωρίς ίδιο κόστος επένδυσης.
              </p>
              <Link href="/eu-programs" className="inline-block px-8 py-4 bg-white text-monks-black font-semibold rounded-full hover:bg-monks-accent hover:text-white transition-all duration-300">
                Μάθε Περισσότερα
              </Link>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-monks-gray to-monks-dark flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-2">ΕΣΠΑ</div>
                <div className="text-monks-light">Ψηφιακά Εργαλεία</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
