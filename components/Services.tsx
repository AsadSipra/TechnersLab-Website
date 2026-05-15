"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2, ShieldCheck, Search, Palette, Globe, ShoppingBag,
  Database, FileStack, Store, Layers, Brain, Eye, Mic, type LucideIcon,
} from "lucide-react";

const SERVICES: {
  icon: LucideIcon; title: string; desc: string; accent: string;
  span?: number; featured?: boolean; tag?: string;
}[] = [
  { icon: Code2,       title: "Software Development", desc: "Full-cycle web & mobile apps — from MVP to enterprise scale.", accent: "#5b3ff8", span: 2, featured: true, tag: "Core Service" },
  { icon: ShieldCheck, title: "QA & Testing",          desc: "Manual & automated testing for zero-defect products.",          accent: "#00c2a8" },
  { icon: Search,      title: "SEO",                   desc: "Rank higher, drive traffic, grow organically.",                 accent: "#ff6b35" },
  { icon: Palette,     title: "UI/UX Design",          desc: "Beautiful, intuitive interfaces that convert visitors.",        accent: "#5b3ff8" },
  { icon: Globe,       title: "WordPress",             desc: "Custom themes, plugins & full site builds.",                   accent: "#00c2a8" },
  { icon: ShoppingBag, title: "Shopify",               desc: "Stores that sell — setup, theme & app integrations.",           accent: "#ff6b35" },
  { icon: Database,    title: "ERP Systems",           desc: "Enterprise resource planning tailored for your ops.",           accent: "#5b3ff8" },
  { icon: FileStack,   title: "CMS Development",       desc: "Content management tailored to your workflow.",                 accent: "#00c2a8" },
  { icon: Store,       title: "Ecommerce",             desc: "End-to-end online store development & optimization.",           accent: "#ff6b35" },
  { icon: Layers,      title: "SaaS Development",      desc: "Scalable software-as-a-service platforms built to grow.",      accent: "#5b3ff8", span: 2, featured: true, tag: "Popular" },
  { icon: Brain,       title: "AI Development",        desc: "Custom AI models, integrations & intelligent automation.",     accent: "#00c2a8", span: 2, featured: true, tag: "New" },
  { icon: Eye,         title: "Vision AI",             desc: "Computer vision for detection & real-time analysis.",          accent: "#ff6b35" },
  { icon: Mic,         title: "Speech AI Bots",        desc: "Voice assistants & conversational AI bots that engage.",       accent: "#5b3ff8" },
];

/* ── Animated dot-grid background for featured cards ── */
function DotGrid({ accent }: { accent: string }) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute", inset: 0, overflow: "hidden",
        backgroundImage: `radial-gradient(circle, ${accent} 1.2px, transparent 1.2px)`,
        backgroundSize: "24px 24px",
        opacity: 0.07,
        animation: "gradient-flow 12s ease infinite",
      }}
    />
  );
}

/* ── Animated glow orb ── */
function GlowOrb({ accent, size = 180 }: { accent: string; size?: number }) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute", right: -size * 0.3, top: -size * 0.3,
        width: size, height: size, borderRadius: "50%",
        background: `radial-gradient(circle, ${accent}30 0%, transparent 70%)`,
        animation: "glow-ring 4s ease-in-out infinite",
        pointerEvents: "none",
      }}
    />
  );
}

/* ── Featured card (col-span-2) ── */
function FeaturedCard({ s, i, inView }: { s: typeof SERVICES[0]; i: number; inView: boolean }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`lg:col-span-2`}
    >
      <div
        className="group relative overflow-hidden rounded-3xl p-8 h-full border cursor-default"
        style={{
          background: `linear-gradient(135deg, ${s.accent}08 0%, white 40%, ${s.accent}05 100%)`,
          backgroundSize: "300% 300%",
          animation: "gradient-flow 10s ease infinite",
          borderColor: `${s.accent}22`,
          boxShadow: `0 4px 24px ${s.accent}15, 0 1px 0 rgba(255,255,255,0.8) inset`,
          minHeight: 180,
        }}
      >
        <DotGrid accent={s.accent} />
        <GlowOrb accent={s.accent} size={220} />

        {/* Top row */}
        <div className="relative flex items-start justify-between gap-3 mb-6">
          <div
            className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{
              background: `${s.accent}14`,
              boxShadow: `0 0 0 1px ${s.accent}25, 0 8px 20px ${s.accent}20`,
              animation: "glow-ring 3s ease-in-out infinite",
            }}
          >
            <Icon size={26} style={{ color: s.accent }} strokeWidth={1.8} />
          </div>
          {s.tag && (
            <span
              className="hidden sm:inline-block shrink-0 text-center text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full"
              style={{ background: `${s.accent}14`, color: s.accent, border: `1px solid ${s.accent}25` }}
            >
              {s.tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-[20px] font-black tracking-tight text-[#0a0a0a] mb-2 leading-tight">
            {s.title}
          </h3>
          <p className="text-[14px] text-[#6b6b6b] leading-relaxed max-w-sm">{s.desc}</p>
        </div>

        {/* Animated bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

/* ── Regular card (col-span-1) ── */
function RegularCard({ s, i, inView }: { s: typeof SERVICES[0]; i: number; inView: boolean }) {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="group relative overflow-hidden bg-white rounded-3xl p-6 h-full border border-black/[0.05] shadow-float hover:shadow-float-hover transition-all duration-500 hover:-translate-y-1.5 cursor-default"
      >
        {/* Hover gradient fill */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(ellipse at 20% 20%, ${s.accent}08 0%, transparent 70%)` }}
        />

        <div className="relative">
          {/* Icon */}
          <div
            className="w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
            style={{ background: `${s.accent}12` }}
          >
            <Icon size={20} style={{ color: s.accent }} strokeWidth={1.9} />
          </div>

          <h3 className="text-[14px] font-bold text-[#0a0a0a] mb-2 leading-snug tracking-tight">
            {s.title}
          </h3>
          <p className="text-[12.5px] text-[#a8a8a8] leading-relaxed">{s.desc}</p>

          {/* Hover accent line */}
          <div
            className="mt-5 h-[2px] rounded-full w-0 group-hover:w-full transition-all duration-500"
            style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="relative py-28 bg-[#f8f8f6]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#a8a8a8] mb-4">
            What We Do
          </p>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-[-0.03em] text-[#0a0a0a] leading-tight mb-4">
            Every layer of your stack,{" "}
            <span style={{ background: "linear-gradient(135deg, #5b3ff8, #00c2a8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              covered.
            </span>
          </h2>
          <p className="text-[16px] text-[#6b6b6b] max-w-lg mx-auto leading-relaxed">
            From front-end to AI — we build, deploy, and scale whatever your business needs.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {SERVICES.map((s, i) =>
            s.featured ? (
              <FeaturedCard key={s.title} s={s} i={i} inView={inView} />
            ) : (
              <RegularCard key={s.title} s={s} i={i} inView={inView} />
            )
          )}
        </div>
      </div>
    </section>
  );
}