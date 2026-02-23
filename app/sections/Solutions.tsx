"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Soft1 Cloud ERP",
    description: "Το Soft1 Cloud ERP αποτελεί μία από τις πλέον σύγχρονες λύσεις business λογισμικού, σχεδιασμένη με υψηλές τεχνικές προδιαγραφές. Μέσα από ένα ενιαίο περιβάλλον διαχειρίζεστε οικονομικά, αποθήκη, εμπορική διαχείριση, παραγωγή, service και reporting.",
    tags: ["ERP", "Cloud", "Business"]
  },
  {
    number: "02",
    title: "Soft1 Cloud CRM",
    description: "Με το Soft1 Cloud CRM σχεδιάζετε και παρακολουθείτε όλο το ταξίδι του πελάτη. Αυτοματοποιείτε follow-ups, διαχειρίζεστε leads, οργανώνετε καμπάνιες marketing και ενοποιείτε όλα τα δεδομένα σε μία κεντρική πλατφόρμα.",
    tags: ["CRM", "Sales", "Marketing"]
  },
  {
    number: "03",
    title: "CTI – Contact Center Manager",
    description: "Το CCM/CTI της DGSOFT συνδέει το τηλεφωνικό σας κέντρο με το ERP/CRM. Προσφέρει αυτοματοποιημένη διαχείριση κλήσεων, δρομολόγηση με επιχειρησιακούς κανόνες, υλοποίηση σύνθετων IVR και αναλυτικό reporting.",
    tags: ["CTI", "VoIP", "Contact Center"]
  },
  {
    number: "04",
    title: "DGSOFT ePayments",
    description: "Αυτοματοποιεί τη διαδικασία είσπραξης οφειλών από πελάτες και συνεργάτες μέσω DIAS",
    tags: ["Payments", "DIAS", "Automation"]
  }
];

export default function Solutions() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="solutions" className="py-32 bg-monks-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-monks-red-dark/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <span className="section-number">Our Solutions</span>
          <h2 className="text-display-md font-bold text-white max-w-4xl">
            Οι Λύσεις & <span className="gradient-text">Υπηρεσίες</span> Μας
          </h2>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "backOut" }}
              className="group relative h-full"
            >
              <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-monks-gray border border-white/5 hover:border-monks-accent/50 transition-colors duration-500">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-monks-gray via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-monks-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-monks-dark to-monks-gray flex items-center justify-center">
                    <span className="text-monks-light text-sm">{solution.title}</span>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="text-6xl font-bold text-white/10 group-hover:text-monks-accent/30 transition-colors">
                      {solution.number}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-monks-accent transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-monks-light mb-6 leading-relaxed flex-grow">
                    {solution.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-monks-light bg-white/5 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 text-center"
        >
          <p className="text-monks-light mb-8 max-w-2xl mx-auto">
            Ο ψηφιακός μετασχηματισμός δεν είναι ένα project, αλλά μια συνεχής διαδικασία.
            Στη DGSOFT αναλαμβάνουμε ρόλο συμβούλου και τεχνικού συνεργάτη σε κάθε βήμα.
          </p>
          <Link href="/services" className="inline-block px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white hover:text-monks-black transition-all duration-300">
            Δες όλες τις υπηρεσίες
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
