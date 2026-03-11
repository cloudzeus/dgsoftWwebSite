"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useSetLocale } from "../context/LocaleContext";

const navLinksConfig = {
  el: [
    { name: "Αρχική", href: "/" },
    { name: "Λύσεις", href: "/services" },
    { name: "Έργα", href: "/works" },
    { name: "Ευρωπαϊκά", href: "/eu-programs" },
    { name: "Καριέρα", href: "/careers" },
    { name: "Νέα", href: "/blog" },
    { name: "Λήψεις", href: "/downloads" },
  ],
  en: [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/services" },
    { name: "Work", href: "/works" },
    { name: "EU Grants", href: "/eu-programs" },
    { name: "Careers", href: "/careers" },
    { name: "News", href: "/blog" },
    { name: "Downloads", href: "/downloads" },
  ]
};

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lang = useLocale();
  const setLang = useSetLocale();

  const navLinks = navLinksConfig[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-monks-black/90 backdrop-blur-md" : "bg-transparent"
          }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <img src="/logo.svg" alt="DGSOFT Logo" className="h-[35px]" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                // Ensure home route highlighting is exact
                const isExact = pathname === "/" && link.href === "/";
                const activeVal = isActive && !isExact ? true : isExact ? true : false;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold tracking-wider transition-colors line-animation ${activeVal ? "text-monks-accent" : "text-monks-light hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex items-center gap-4 border-l border-white/20 pl-4">
                <button
                  onClick={() => setLang(lang === "el" ? "en" : "el")}
                  className="text-sm font-semibold text-monks-light hover:text-white transition-colors"
                >
                  {lang === "el" ? "EN" : "EL"}
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-monks-black font-semibold text-sm rounded-full hover:bg-monks-accent hover:text-white transition-colors"
                >
                  {lang === "el" ? "Επικοινωνία" : "Get in Touch"}
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-monks-black"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                const isExact = pathname === "/" && link.href === "/";
                const activeVal = isActive && !isExact ? true : isExact ? true : false;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-5xl font-black transition-colors ${activeVal ? "text-monks-accent" : "text-white hover:text-monks-light"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="mt-8 flex flex-col items-center gap-6">
                <button
                  onClick={() => {
                    setLang(lang === "el" ? "en" : "el");
                    setIsMenuOpen(false);
                  }}
                  className="text-xl font-bold text-monks-light py-2 px-6 border border-white/20 rounded-full"
                >
                  {lang === "el" ? "Switch to English" : "Αλλαγή σε Ελληνικά"}
                </button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="px-8 py-4 bg-monks-accent text-white font-semibold rounded-full"
                >
                  {lang === "el" ? "Επικοινωνία" : "Get in Touch"}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
