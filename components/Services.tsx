"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
import {
  Code2, ShieldCheck, Search, Palette, Globe, ShoppingBag,
  Database, FileStack, Store, Layers, Brain, Eye, Mic
} from "lucide-react";

const services = [
  { icon: Code2, title: "Software Development", desc: "Custom web & mobile apps built to scale", color: "text-[#7C3AED]", glow: "group-hover:shadow-[#7C3AED]/20", border: "group-hover:border-[#7C3AED]/40" },
  { icon: ShieldCheck, title: "QA & Testing", desc: "Manual & automated testing for flawless products", color: "text-[#06B6D4]", glow: "group-hover:shadow-[#06B6D4]/20", border: "group-hover:border-[#06B6D4]/40" },
  { icon: Search, title: "SEO", desc: "Rank higher, drive traffic, grow organically", color: "text-[#A855F7]", glow: "group-hover:shadow-[#A855F7]/20", border: "group-hover:border-[#A855F7]/40" },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive interfaces that convert", color: "text-[#F59E0B]", glow: "group-hover:shadow-[#F59E0B]/20", border: "group-hover:border-[#F59E0B]/40" },
  { icon: Globe, title: "WordPress", desc: "Custom themes, plugins & full site builds", color: "text-[#06B6D4]", glow: "group-hover:shadow-[#06B6D4]/20", border: "group-hover:border-[#06B6D4]/40" },
  { icon: ShoppingBag, title: "Shopify", desc: "Stores that sell — setup, theme & apps", color: "text-[#7C3AED]", glow: "group-hover:shadow-[#7C3AED]/20", border: "group-hover:border-[#7C3AED]/40" },
  { icon: Database, title: "ERP Systems", desc: "Enterprise resource planning built for your ops", color: "text-[#A855F7]", glow: "group-hover:shadow-[#A855F7]/20", border: "group-hover:border-[#A855F7]/40" },
  { icon: Store, title: "Ecommerce", desc: "End-to-end online store development", color: "text-[#F59E0B]", glow: "group-hover:shadow-[#F59E0B]/20", border: "group-hover:border-[#F59E0B]/40" },
  { icon: Layers, title: "SaaS Development", desc: "Scalable software-as-a-service platforms", color: "text-[#7C3AED]", glow: "group-hover:shadow-[#7C3AED]/20", border: "group-hover:border-[#7C3AED]/40" },
  { icon: Brain, title: "AI Development", desc: "Custom AI models, integrations & automation", color: "text-[#06B6D4]", glow: "group-hover:shadow-[#06B6D4]/20", border: "group-hover:border-[#06B6D4]/40" },
  { icon: Eye, title: "Vision AI", desc: "Computer vision for detection & analysis", color: "text-[#A855F7]", glow: "group-hover:shadow-[#A855F7]/20", border: "group-hover:border-[#A855F7]/40" },
  { icon: Mic, title: "Speech AI Bots", desc: "Voice assistants & conversational AI bots", color: "text-[#F59E0B]", glow: "group-hover:shadow-[#F59E0B]/20", border: "group-hover:border-[#F59E0B]/40" },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative w-full py-24 bg-[#0A0E1A]">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            From idea to deployment — we cover every layer of your tech stack.
          </p>
        </motion.div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
            >
              <div
                className={`group relative bg-[#111827] border border-[#1E293B] ${service.border} rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${service.glow} cursor-pointer overflow-hidden`}
              >
                {/* Top glow line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${service.color.replace("text-", "via-")} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`${service.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}