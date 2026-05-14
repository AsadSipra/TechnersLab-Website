"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
import { Zap, Users, Trophy, HeartHandshake } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 13, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

const valueProps = [
  {
    icon: Zap,
    title: "End-to-End Execution",
    desc: "We handle everything from discovery and design to deployment and support — no handoffs, no gaps.",
    color: "text-[#7C3AED]",
    bg: "bg-[#7C3AED]/10",
    border: "border-[#7C3AED]/20",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Senior developers, AI engineers, QA specialists, and SEO experts — all under one roof.",
    color: "text-[#06B6D4]",
    bg: "bg-[#06B6D4]/10",
    border: "border-[#06B6D4]/20",
  },
  {
    icon: Trophy,
    title: "Training + Services",
    desc: "Unique combination: we build products AND train your team, so you grow in both directions.",
    color: "text-[#A855F7]",
    bg: "bg-[#A855F7]/10",
    border: "border-[#A855F7]/20",
  },
  {
    icon: HeartHandshake,
    title: "AI-Ready from Day One",
    desc: "Every solution we build is AI-ready — from Vision AI to Speech Bots to intelligent automation.",
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
    border: "border-[#F59E0B]/20",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function WhyUs() {
  return (
    <section id="whyus" className="relative w-full py-24 bg-[#0A0E1A]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#A855F7]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#A855F7] text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Built different. Delivered better.
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            We're not just another agency. We're your long-term tech partner.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-[#111827] border border-[#1E293B] rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-white mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#94A3B8] text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Value props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valueProps.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              className={`bg-[#111827] border ${prop.border} rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className={`${prop.bg} ${prop.color} w-11 h-11 rounded-xl flex items-center justify-center border ${prop.border}`}>
                <prop.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-2">{prop.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{prop.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}