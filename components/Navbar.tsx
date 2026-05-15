"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Training", href: "#training" },
  { label: "Why Us", href: "#whyus" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#111827]/90 backdrop-blur-md border-b border-[#1E293B] shadow-lg shadow-black/20"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-1 text-xl font-bold text-white tracking-tight"
        >
          <Zap size={20} className="text-[#7C3AED] fill-[#7C3AED]" />
          <span>TechnersLab</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mb-3 ml-0.5" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="text-[#94A3B8] hover:text-white text-sm font-medium transition-colors duration-200 hover:text-[#A855F7]"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#7C3AED]/30 active:scale-95"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#94A3B8] hover:text-white transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#111827] border-b border-[#1E293B]"
          >
            <ul className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left text-[#94A3B8] hover:text-white hover:bg-[#1A2235] px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-200"
                >
                  Get Free Quote
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}