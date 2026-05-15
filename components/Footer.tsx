"use client";

import { GitBranch, Briefcase, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

const footerSections = [
  {
    title: "Services",
    links: [
      "Software Development", "AI Development", "QA & Testing",
      "SEO", "UI/UX Design", "Shopify & WordPress",
    ],
    href: "#services",
  },
  {
    title: "Training",
    links: [
      "MERN Stack", "MEAN Stack", "AI-Assisted Coding",
      "Vibe Coding", "QA Engineering", "WordPress",
    ],
    href: "#training",
  },
  {
    title: "Company",
    links: [
      { label: "Why Us", href: "#whyus" },
      { label: "Contact", href: "#contact" },
      { label: "Get a Quote", href: "#contact" },
    ],
    href: null,
  },
];

const socials = [
  { icon: GitBranch, href: "#", label: "GitHub" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: MessageCircle, href: "#", label: "Twitter / X" },
  { icon: Mail, href: "mailto:[EMAIL_ADDRESS]", label: "Email" },
];

function scrollTo(href: string) {
  if (!href || href === "#") return;
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer className="relative bg-[#f8f8f6] border-t border-black/[0.06]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#5b3ff8]/30 to-transparent" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">

          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2.5 w-fit group"
            >
              <div className="relative w-7 h-7 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border border-[#5b3ff8]/40 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#5b3ff8] to-[#00c2a8]" />
                <div className="absolute inset-[6px] rounded-full bg-[#f8f8f6]" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-[#0a0a0a]">
                TechnersLab
              </span>
            </a>

            <p className="text-[13.5px] text-[#a8a8a8] leading-relaxed max-w-[260px]">
              We build software, train developers, and power businesses with AI. Your end-to-end tech partner.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-xl bg-white border border-black/[0.07] flex items-center justify-center text-[#a8a8a8] hover:text-[#0a0a0a] hover:border-black/[0.15] hover:shadow-sm transition-all duration-200"
                >
                  <s.icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((sec) => (
            <div key={sec.title}>
              <h4 className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#a8a8a8] mb-4">
                {sec.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {sec.links.map((link) => {
                  const isObj = typeof link === "object";
                  const label = isObj ? link.label : link;
                  const href = isObj ? link.href : sec.href ?? "#";
                  return (
                    <li key={label}>
                      <button
                        onClick={() => scrollTo(href)}
                        className="text-[13px] text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors duration-150 text-left flex items-center gap-1 group"
                      >
                        {label}
                        {isObj && label === "Get a Quote" && (
                          <ArrowUpRight
                            size={11}
                            className="text-[#a8a8a8] group-hover:text-[#0a0a0a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150"
                          />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#c8c8c8]">
            © {new Date().getFullYear()} TechnersLab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12px] text-[#c8c8c8] hover:text-[#6b6b6b] transition-colors duration-150"
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