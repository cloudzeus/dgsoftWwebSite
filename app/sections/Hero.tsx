"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import Link from "next/link";

const titleText = "Business Forward";
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1]
    }
  }
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-monks-black">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-monks-accent/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-monks-red-dark/30 rounded-full blur-[100px]"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 py-32">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-monks-accent" />
            Από το ERP στο ολοκληρωμένο ψηφιακό σου οικοσύστημα
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-display-md font-bold text-white mb-8 leading-[1.1] flex flex-wrap"
          >
            {titleText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={textVariants}
                className={index >= 9 ? "gradient-text inline-block" : "inline-block"}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-monks-light max-w-4xl mb-12 leading-relaxed space-y-4 text-justify"
          >
            <p>
              <strong>DGSOFT</strong>, επίσημος και πιστοποιημένος συνεργάτης της ENTERSOFTONE, είναι ένας δυναμικά αναπτυσσόμενος όμιλος τεχνολογίας με παρουσία στην ελληνική αγορά από το 2006.
            </p>
            <p>
              Προσφέρουμε προηγμένες λύσεις Business Software, Web & Mobile εφαρμογών, AI & IoT, καθώς και συμβουλευτική ψηφιακού μετασχηματισμού, ειδικά σχεδιασμένες για τις ανάγκες μικρομεσαίων και μεγάλων επιχειρήσεων σε Ελλάδα και Κύπρο.
            </p>
            <p>
              Με έμφαση στην ποιότητα, την ταχύτητα υλοποίησης και την προσαρμοστικότητα, βοηθάμε τις εταιρείες να αυτοματοποιήσουν καθημερινές διαδικασίες, να μειώσουν κόστος και να επιταχύνουν την ανάπτυξή τους.
            </p>
            <p>
              Η έμπειρη ομάδα μας, με βαθιά γνώση της αγοράς πληροφορικής, αναλαμβάνει από τον σχεδιασμό μέχρι και την υποστήριξη κάθε έργου, ώστε οι συνεργάτες μας να έχουν έναν αξιόπιστο τεχνολογικό σύμμαχο στην πορεία τους.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              href="#contact"
              className="group px-8 py-4 bg-white text-monks-black font-semibold rounded-full hover:bg-monks-accent hover:text-white transition-all duration-300 flex items-center gap-3"
            >
              Κλείσε Παρουσίαση
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>

            <button className="group flex items-center gap-3 text-white hover:text-monks-accent transition-colors">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-monks-accent transition-colors">
                <ArrowDown className="w-5 h-5" />
              </div>
              <span className="font-medium">Ζητήστε αξιολόγηση ψηφιακής ωριμότητας</span>
            </button>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8 border-t border-white/10">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "10+", label: "Years Experience" },
              { number: "50+", label: "Global Clients" },
              { number: "25+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-monks-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-monks-light"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
