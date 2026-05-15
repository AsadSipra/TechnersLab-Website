"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Users, Trophy, HeartHandshake } from "lucide-react";

/* ── Animated counter ── */
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const totalSteps = 60;
    const increment = target / totalSteps;
    const stepTime = duration / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", accent: "#5b3ff8" },
  { value: 30, suffix: "+", label: "Happy Clients", accent: "#00c2a8" },
  { value: 13, suffix: "+", label: "Technologies", accent: "#ff6b35" },
  { value: 3, suffix: "+", label: "Years Experience", accent: "#5b3ff8" },
];

const valueProps = [
  {
    icon: Zap,
    title: "End-to-End Execution",
    desc: "We handle everything from discovery and design to deployment and ongoing support — no gaps, no handoffs.",
    accent: "#5b3ff8",
    bg: "#5b3ff80d",
    delay: 0,
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Senior developers, AI engineers, QA specialists, and SEO experts — all under one roof, one point of contact.",
    accent: "#00c2a8",
    bg: "#00c2a80d",
    delay: 0.08,
  },
  {
    icon: Trophy,
    title: "Services + Training",
    desc: "A unique combo: we build your products AND upskill your team — so you grow in capability and execution simultaneously.",
    accent: "#ff6b35",
    bg: "#ff6b350d",
    delay: 0.16,
  },
  {
    icon: HeartHandshake,
    title: "AI-Ready by Default",
    desc: "Every solution we build is AI-augmented from day one — Vision AI, Speech Bots, intelligent automation baked in.",
    accent: "#5b3ff8",
    bg: "#5b3ff80d",
    delay: 0.24,
  },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="relative py-28 bg-[#f8f8f6] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />

      {/* Decorative orbs */}
      <div
        className="orb w-[420px] h-[420px] bottom-[-100px] left-[-120px]"
        style={{ background: "#5b3ff8", opacity: 0.05 }}
      />
      <div
        className="orb w-[300px] h-[300px] top-[60px] right-[-80px]"
        style={{ background: "#ff6b35", opacity: 0.05 }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#a8a8a8] mb-4">
            Why Choose Us
          </p>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-[-0.03em] text-[#0a0a0a] leading-tight mb-4">
            Built different.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5b3ff8, #ff6b35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Delivered better.
            </span>
          </h2>
          <p className="text-[16px] text-[#6b6b6b] max-w-lg mx-auto leading-relaxed">
            We're not just another agency. We're your long-term technology partner.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-3xl p-7 text-center border border-black/[0.05] shadow-float group hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className="text-[44px] font-black tracking-[-0.04em] leading-none mb-2"
                style={{ color: stat.accent }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[13px] text-[#a8a8a8] font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Value props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valueProps.map((prop) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: prop.delay, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-6 border border-black/[0.05] shadow-float hover:shadow-float-hover hover:-translate-y-1.5 transition-all duration-400 group"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: prop.bg }}
              >
                <prop.icon size={19} style={{ color: prop.accent }} strokeWidth={1.8} />
              </div>
              <h3 className="text-[14.5px] font-semibold text-[#0a0a0a] mb-2 leading-snug">
                {prop.title}
              </h3>
              <p className="text-[13px] text-[#a8a8a8] leading-relaxed">{prop.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Large CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 rounded-4xl bg-white border border-black/[0.05] shadow-float p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* BG gradient blobs inside card */}
          <div
            className="orb w-[280px] h-[280px] -top-20 -left-20"
            style={{ background: "#5b3ff8", opacity: 0.06 }}
          />
          <div
            className="orb w-[200px] h-[200px] -bottom-16 right-10"
            style={{ background: "#00c2a8", opacity: 0.07 }}
          />

          <div className="relative z-10 text-center sm:text-left">
            <h3 className="text-[28px] sm:text-[36px] font-black tracking-[-0.03em] text-[#0a0a0a] mb-2">
              Ready to start building?
            </h3>
            <p className="text-[15px] text-[#6b6b6b]">
              Get a free quote in under 24 hours. No commitment.
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="relative z-10 flex-shrink-0 group overflow-hidden bg-[#0a0a0a] text-white text-[14px] font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_4px_24px_rgba(91,63,248,0.4)]"
          >
            <span className="relative z-10">Get Free Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5b3ff8] to-[#00c2a8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}