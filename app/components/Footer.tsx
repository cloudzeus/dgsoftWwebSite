"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Twitter, Instagram, Github } from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "Real-Time Platforms", href: "#" },
    { name: "Digital Orchestration", href: "#" },
    { name: "Immersive Experiences", href: "#" },
    { name: "AI Integration", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog / Νέα", href: "/blog" },
    { name: "Downloads", href: "/downloads" },
    { name: "Documentation", href: "/services" },
    { name: "Privacy Policy", href: "#" },
  ]
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-monks-black border-t border-white/10">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold">
                <span className="text-white">DG</span>
                <span className="gradient-text">SOFT</span>
              </span>
            </Link>
            <p className="text-monks-light max-w-sm mb-8">
              Accelerating growth through technology and creative innovation.
              Your trusted partner for digital transformation.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-monks-gray flex items-center justify-center text-monks-light hover:bg-monks-accent hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-monks-light hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-monks-light hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-monks-light hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-monks-light text-sm">
            © {new Date().getFullYear()} DGSOFT. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-monks-light hover:text-white transition-colors group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-monks-accent group-hover:border-monks-accent transition-all">
              <ArrowUpRight className="w-4 h-4 -rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
