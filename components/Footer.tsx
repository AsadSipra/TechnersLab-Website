"use client";

import { Zap, GitBranch, Briefcase, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    "Software Development", "AI Development", "QA & Testing",
    "SEO", "UI/UX Design", "ERP & CMS",
  ],
  Training: [
    "MERN Stack", "MEAN Stack", "AI-Assisted Coding",
    "Vibe Coding", "QA Engineering", "WordPress",
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Why Us", href: "#whyus" },
    { label: "Contact", href: "#contact" },
    { label: "Get a Quote", href: "#contact" },
  ],
};

const socials = [
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@sevencore.io", label: "Email" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#080C18] border-t border-[#1E293B]">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-1.5 text-xl font-bold text-white w-fit">
              <Zap size={20} className="text-[#7C3AED] fill-[#7C3AED]" />
              <span>SevenCore</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mb-3 ml-0.5" />
            </a>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              We build software, train developers, and power businesses with AI.
              Your end-to-end tech partner.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-[#111827] border border-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#7C3AED]/40 transition-all duration-200"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Services.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Training</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Training.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo("#training")}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.Company.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                  >
                    {item.label}
                    {item.label === "Get a Quote" && (
                      <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E293B] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#4B5563] text-xs">
            © {new Date().getFullYear()} SevenCore. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#4B5563] hover:text-[#94A3B8] text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}