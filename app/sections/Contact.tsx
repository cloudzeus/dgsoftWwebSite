"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-32 bg-monks-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-monks-accent/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - CTA */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-number">Επικοινωνια</span>
            <h2 className="text-display-md font-bold text-white mb-8">
              Ας δημιουργήσουμε<br />
              <span className="gradient-text">κάτι</span><br />
              εξαιρετικό.
            </h2>
            <p className="text-xl text-monks-light mb-12 max-w-md">
              Είστε έτοιμοι να μετασχηματίσετε την επιχείρησή σας; Θέλετε να συζητήσουμε τις ανάγκες της δικής σας επιχείρησης σε Αθήνα, Θεσσαλονίκη, Κύπρο, Ιωάννινα ή Βόλο; Συμπληρώστε τη φόρμα ή καλέστε μας για να κλείσουμε μια στοχευμένη παρουσίαση.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <a href="mailto:info@dgsoft.gr" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-monks-gray flex items-center justify-center group-hover:bg-monks-accent transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-monks-light">Email</div>
                  <div className="text-white font-medium group-hover:text-monks-accent transition-colors">
                    info@dgsoft.gr
                  </div>
                </div>
              </a>

              <a href="tel:+302105711581" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-monks-gray flex items-center justify-center group-hover:bg-monks-accent transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-monks-light">Τηλέφωνο</div>
                  <div className="text-white font-medium group-hover:text-monks-accent transition-colors">
                    210 5711581
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-monks-gray flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-monks-light">Διεύθυνση</div>
                  <div className="text-white font-medium">
                    Λεωφ. Κηφισού 48, Περιστέρι – 121 33, 1ος όροφος
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-monks-light mb-2">Όνομα</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-monks-gray border border-white/10 rounded-xl px-5 py-4 text-white placeholder-monks-light/50 focus:border-monks-accent focus:outline-none transition-colors"
                    placeholder="Όνομα Επώνυμο"
                  />
                </div>
                <div>
                  <label className="block text-sm text-monks-light mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-monks-gray border border-white/10 rounded-xl px-5 py-4 text-white placeholder-monks-light/50 focus:border-monks-accent focus:outline-none transition-colors"
                    placeholder="email@εταιρεία.gr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-monks-light mb-2">Εταιρεία</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-monks-gray border border-white/10 rounded-xl px-5 py-4 text-white placeholder-monks-light/50 focus:border-monks-accent focus:outline-none transition-colors"
                  placeholder="Επωνυμία επιχείρησης"
                />
              </div>

              <div>
                <label className="block text-sm text-monks-light mb-2">Μήνυμα</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-monks-gray border border-white/10 rounded-xl px-5 py-4 text-white placeholder-monks-light/50 focus:border-monks-accent focus:outline-none transition-colors resize-none"
                  placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-monks-black font-bold py-5 rounded-xl hover:bg-monks-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Αποστολή Μηνύματος
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
