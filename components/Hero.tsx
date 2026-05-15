"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  SiOpenai, SiReact, SiSelenium, SiGoogleanalytics, SiOpencv, SiFigma,
} from "react-icons/si";

/* ── Floating orbit ring (pure CSS, inspired by the antigravity particle rings) ── */
function OrbitRing({
  size,
  speed,
  color,
  delay = 0,
}: {
  size: number;
  speed: number;
  color: string;
  delay?: number;
}) {
  return (
    <div
      className="absolute rounded-full border pointer-events-none"
      style={{
        width: size,
        height: size,
        borderColor: color,
        opacity: 0.18,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: `spin-slow ${speed}s linear infinite`,
        animationDelay: `${delay}s`,
        borderStyle: "dashed",
      }}
    />
  );
}

function FloatingBadge({
  label, Icon, accent, style, delay,
}: {
  label: string;
  Icon: React.ElementType;
  accent: string;
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute hidden lg:flex items-center gap-2 bg-white rounded-2xl px-4 py-2.5 shadow-float border border-black/[0.06] text-[12px] font-medium text-[#0a0a0a] float"
      style={style}
    >
      <div
        style={{
          width: 22, height: 22, borderRadius: 8,
          background: `${accent}14`,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}
      >
        <Icon size={13} style={{ color: accent }} />
      </div>
      {label}
    </motion.div>
  );
}

const floatingBadges = [
  { label: "AI Development",  Icon: SiOpenai,         accent: "#5b3ff8", style: { top: "14%",   left: "6%",   animationDelay: "0s"   }, delay: 0.8 },
  { label: "Full Stack Dev",  Icon: SiReact,          accent: "#61DAFB", style: { top: "22%",   right: "5%",  animationDelay: "1s"   }, delay: 1.0 },
  { label: "QA & Testing",    Icon: SiSelenium,       accent: "#00c2a8", style: { bottom: "30%",left: "3%",   animationDelay: "2s"   }, delay: 1.2 },
  { label: "SEO & Growth",    Icon: SiGoogleanalytics,accent: "#ff6b35", style: { bottom: "25%",right: "4%",  animationDelay: "1.5s" }, delay: 1.4 },
  { label: "Vision AI",       Icon: SiOpencv,         accent: "#00c2a8", style: { top: "60%",   left: "10%",  animationDelay: "0.5s" }, delay: 1.6 },
  { label: "UI / UX Design",  Icon: SiFigma,          accent: "#F24E1E", style: { top: "55%",   right: "8%",  animationDelay: "2.5s" }, delay: 1.8 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* ── Background orb blobs ── */}
      <div className="orb w-[600px] h-[600px] top-[-200px] left-[-200px] bg-[#5b3ff8]" style={{ opacity: 0.06 }} />
      <div className="orb w-[500px] h-[500px] bottom-[-150px] right-[-150px] bg-[#00c2a8]" style={{ opacity: 0.07 }} />
      <div className="orb w-[300px] h-[300px] top-[40%] left-[40%] bg-[#ff6b35]" style={{ opacity: 0.05 }} />

      {/* ── Orbit rings centered ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <OrbitRing size={380} speed={30} color="#5b3ff8" delay={0} />
        <OrbitRing size={540} speed={50} color="#00c2a8" delay={-5} />
        <OrbitRing size={700} speed={70} color="#ff6b35" delay={-10} />
      </div>

      {/* ── Floating badges ── */}
      {floatingBadges.map((b) => (
        <FloatingBadge key={b.label} {...b} />
      ))}

      {/* ── Main content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-28 pb-20 text-center"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[52px] sm:text-[68px] lg:text-[84px] font-black tracking-[-0.04em] leading-[1.0] text-[#0a0a0a] mb-6"
        >
          We{" "}
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #5b3ff8 0%, #00c2a8 55%, #ff6b35 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            <TypeAnimation
              sequence={[
                "Build.",
                2000,
                "Train.",
                2000,
                "Innovate.",
                2000,
                "Deploy AI.",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[17px] sm:text-[19px] text-[#6b6b6b] leading-relaxed max-w-2xl mx-auto mb-10 font-[380]"
        >
          From custom software and AI solutions to hands-on developer training —
          your end-to-end technology partner for building, growing, and scaling.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white text-[14px] font-medium px-7 py-3.5 rounded-full transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_24px_rgba(91,63,248,0.4)]"
          >
            Get Free Quote
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="flex items-center gap-2 bg-white border border-black/[0.1] hover:border-black/[0.2] text-[#0a0a0a] text-[14px] font-medium px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-[#f8f8f6]"
          >
            Explore Services
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center justify-center gap-8 sm:gap-12 mt-16 pt-10 border-t border-black/[0.06]"
        >
          {[
            { num: "50+", label: "Projects" },
            { num: "30+", label: "Clients" },
            { num: "13+", label: "Technologies" },
            { num: "3+", label: "Years" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[22px] font-bold text-[#0a0a0a] tracking-tight">{s.num}</div>
              <div className="text-[12px] text-[#a8a8a8] mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#5b3ff8]/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}