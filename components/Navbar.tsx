"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.06] shadow-sm"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-7 h-7 flex-shrink-0">
            <div className="absolute inset-0 rounded-full border border-[#5b3ff8]/40 group-hover:scale-125 transition-transform duration-500" />
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#5b3ff8] to-[#00c2a8]" />
            <div className="absolute inset-[6px] rounded-full bg-white" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-[#0a0a0a]">
            TechnersLab
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-[13.5px] font-medium text-[#6b6b6b] hover:text-[#0a0a0a] rounded-full hover:bg-black/[0.04] transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo("#contact")}
            className="group relative overflow-hidden bg-[#0a0a0a] text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_4px_20px_rgba(91,63,248,0.35)]"
          >
            <span className="relative z-10 transition-colors duration-300">Get Free Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5b3ff8] to-[#00c2a8] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[0.04] transition-colors text-[#6b6b6b]"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-black/[0.06]"
          >
            <ul className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-3 text-[14px] font-medium text-[#6b6b6b] hover:text-[#0a0a0a] hover:bg-black/[0.03] rounded-xl transition-all duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-black/[0.06]">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full bg-[#0a0a0a] text-white text-[14px] font-medium px-4 py-3 rounded-xl"
                >
                  Get Free Quote
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}