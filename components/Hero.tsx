"use client";
import { motion, type Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Code2, Brain, Layers } from "lucide-react";

const floatingBadges = [
  { icon: Code2, label: "Full Stack Dev", color: "text-[#7C3AED]", bg: "bg-[#7C3AED]/10 border-[#7C3AED]/30", delay: 0 },
  { icon: Brain, label: "AI & Vision", color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10 border-[#06B6D4]/30", delay: 0.2 },
  { icon: Layers, label: "ERP & SaaS", color: "text-[#A855F7]", bg: "bg-[#A855F7]/10 border-[#A855F7]/30", delay: 0.4 },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
};

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0E1A]">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06B6D4]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-full px-4 py-1.5 text-sm text-[#A855F7] font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
              Software · AI · Training
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-4"
            >
              We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">
                <TypeAnimation
                  sequence={[
                    "Build Software.",
                    2500,
                    "Train Developers.",
                    2500,
                    "Power Businesses.",
                    2500,
                    "Deploy AI.",
                    2500,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-[#94A3B8] text-lg leading-relaxed mb-8 max-w-lg"
            >
              From custom software and AI solutions to hands-on developer training —
              we deliver end-to-end tech services that help your business grow faster.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="group flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#7C3AED]/30 active:scale-95"
              >
                Get Free Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="flex items-center justify-center gap-2 border border-[#1E293B] hover:border-[#7C3AED]/50 text-[#94A3B8] hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 bg-white/5 hover:bg-[#7C3AED]/10"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="flex gap-8 mt-10 pt-8 border-t border-[#1E293B]"
            >
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "30+", label: "Happy Clients" },
                { num: "13+", label: "Technologies" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.num}</div>
                  <div className="text-xs text-[#94A3B8] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* Code window mockup */}
            <div className="bg-[#111827] border border-[#1E293B] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E293B] bg-[#0D1117]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-4 text-xs text-[#94A3B8] font-mono">app.tsx</span>
              </div>
              {/* Code lines */}
              <div className="p-5 font-mono text-sm leading-7">
                <div><span className="text-[#7C3AED]">const</span> <span className="text-[#06B6D4]">company</span> <span className="text-white">= {"{"}</span></div>
                <div className="pl-4"><span className="text-[#A855F7]">services</span><span className="text-white">:</span> <span className="text-[#34D399]">"Software · AI · ERP"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-[#A855F7]">training</span><span className="text-white">:</span> <span className="text-[#34D399]">"MERN · AI · QA · SEO"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-[#A855F7]">mission</span><span className="text-white">:</span> <span className="text-[#34D399]">"Empower businesses"</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-[#A855F7]">status</span><span className="text-white">:</span> <span className="text-[#06B6D4]">true</span></div>
                <div><span className="text-white">{"}"}</span></div>
                <div className="mt-2 flex items-center gap-1">
                  <span className="w-2 h-4 bg-[#7C3AED] animate-pulse rounded-sm" />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="flex gap-3 flex-wrap">
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + badge.delay, duration: 0.4 }}
                  className={`flex items-center gap-2 ${badge.bg} border rounded-xl px-4 py-2.5 text-sm font-medium ${badge.color}`}
                >
                  <badge.icon size={15} />
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#7C3AED] animate-pulse" />
        <span className="text-[10px] text-[#94A3B8] tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}