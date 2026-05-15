"use client";

import { motion } from "framer-motion";
import { GraduationCap, Rocket, RefreshCw, Check, ArrowRight } from "lucide-react";
import {
  SiReact, SiNodedotjs, SiExpress, SiAngular, SiMongodb,
  SiPostgresql, SiDocker, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiPython, SiKubernetes, SiFigma, SiGraphql,
} from "react-icons/si";

const tracks = [
  {
    icon: GraduationCap,
    audience: "University Students",
    tag: "Structured Batches",
    accent: "#5b3ff8",
    bg: "#5b3ff812",
    desc: "Proper semester-style course batches designed around academic schedules. Build real projects, graduate job-ready.",
    courses: ["MERN Stack", "MEAN Stack", "AI Development", "QA Engineering", "SEO Mastery"],
    delay: 0,
  },
  {
    icon: Rocket,
    audience: "Beginners",
    tag: "Zero to Hero",
    accent: "#00c2a8",
    bg: "#00c2a812",
    desc: "Start from absolute zero and build practical, marketable skills fast. No prior experience required.",
    courses: ["WordPress Dev", "Vibe Coding", "AI-Assisted Coding", "SEO Fundamentals", "UI/UX Basics"],
    delay: 0.1,
    featured: true,
  },
  {
    icon: RefreshCw,
    audience: "Career Switchers",
    tag: "Fast-Track Program",
    accent: "#ff6b35",
    bg: "#ff6b3512",
    desc: "Switching into tech? Our intensive programs get you industry-ready in the shortest possible time.",
    courses: ["Full Stack Dev", "AI & ML", "QA Automation", "Vibe Coding", "Freelancing"],
    delay: 0.2,
  },
];

const TECH_SKILLS = [
  { Icon: SiReact,             name: "React",      color: "#61DAFB" },
  { Icon: SiNodedotjs,         name: "Node.js",    color: "#339933" },
  { Icon: SiExpress,           name: "Express",    color: "#888888" },
  { Icon: SiAngular,           name: "Angular",    color: "#DD0031" },
  { Icon: SiMongodb,           name: "MongoDB",    color: "#47A248" },
  { Icon: SiPostgresql,        name: "PostgreSQL", color: "#4169E1" },
  { Icon: SiDocker,            name: "Docker",     color: "#2496ED" },
  { Icon: SiTypescript,        name: "TypeScript", color: "#3178C6" },
  { Icon: SiNextdotjs,         name: "Next.js",    color: "#111111" },
  { Icon: SiTailwindcss,       name: "Tailwind",   color: "#06B6D4" },
  { Icon: SiPython,            name: "Python",     color: "#3776AB" },
  { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { Icon: SiFigma,             name: "Figma",      color: "#F24E1E" },
  { Icon: SiGraphql,           name: "GraphQL",    color: "#E10098" },
];

const WAVE_SIZES = [56, 68, 52, 64, 72, 58, 66];

function TechWave() {
  const doubled = [...TECH_SKILLS, ...TECH_SKILLS];
  return (
    <div className="relative overflow-hidden py-10 mb-12">
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="flex items-center gap-5 marquee w-max" style={{ paddingTop: 36, paddingBottom: 36 }}>
        {doubled.map((skill, i) => {
          const sz = WAVE_SIZES[i % WAVE_SIZES.length];
          const yOff = Math.round(Math.sin((i / doubled.length) * Math.PI * 6) * 30);
          return (
            <div
              key={i}
              title={skill.name}
              className="float flex-shrink-0 flex items-center justify-center rounded-full border"
              style={{
                width: sz, height: sz,
                marginTop: yOff,
                background: `${skill.color}12`,
                borderColor: `${skill.color}35`,
                animationDelay: `${(i % 7) * 0.45}s`,
                boxShadow: `0 4px 18px ${skill.color}20`,
              }}
            >
              <skill.Icon size={sz * 0.44} style={{ color: skill.color }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default function Training() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="training" className="relative py-28 bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />

      {/* Subtle orb */}
      <div
        className="orb w-[500px] h-[500px] top-0 right-[-150px]"
        style={{ background: "#00c2a8", opacity: 0.04 }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#a8a8a8] mb-4">
            Learn With Us
          </p>
          <h2 className="text-[40px] sm:text-[52px] font-black tracking-[-0.03em] text-[#0a0a0a] leading-tight mb-4">
            Training for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00c2a8, #5b3ff8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              every stage.
            </span>
          </h2>
          <p className="text-[16px] text-[#6b6b6b] max-w-lg mx-auto leading-relaxed">
            Hands-on programs for students, beginners, and career switchers ready to break into tech.
          </p>
        </motion.div>

        {/* Marquee */}
        <TechWave />

        {/* Track cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {tracks.map((track) => (
            <motion.div
              key={track.audience}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: track.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative bg-white rounded-4xl p-8 border flex flex-col gap-6 transition-all duration-500 hover:-translate-y-2 ${track.featured
                ? "border-[#00c2a8]/30 shadow-[0_8px_32px_rgba(0,194,168,0.12)]"
                : "border-black/[0.06] shadow-float hover:shadow-float-hover"
                }`}
            >
              {/* Featured badge */}
              {track.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00c2a8] text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon + tag */}
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: track.bg }}
                >
                  <track.icon size={22} style={{ color: track.accent }} strokeWidth={1.8} />
                </div>
                <span
                  className="text-[11px] font-semibold px-3 py-1 rounded-full"
                  style={{ background: track.bg, color: track.accent }}
                >
                  {track.tag}
                </span>
              </div>

              {/* Title + desc */}
              <div>
                <h3 className="text-[20px] font-bold text-[#0a0a0a] tracking-tight mb-2">
                  {track.audience}
                </h3>
                <p className="text-[14px] text-[#6b6b6b] leading-relaxed">{track.desc}</p>
              </div>

              {/* Course list */}
              <ul className="flex flex-col gap-2.5">
                {track.courses.map((course) => (
                  <li key={course} className="flex items-center gap-2.5 text-[13.5px] text-[#6b6b6b]">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: track.bg }}
                    >
                      <Check size={9} style={{ color: track.accent }} strokeWidth={3} />
                    </div>
                    {course}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className="group/btn mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-[13.5px] font-semibold transition-all duration-300 border"
                style={{
                  borderColor: `${track.accent}30`,
                  color: track.accent,
                  background: track.bg,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = track.accent;
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderColor = track.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = track.bg;
                  e.currentTarget.style.color = track.accent;
                  e.currentTarget.style.borderColor = `${track.accent}30`;
                }}
              >
                Enroll Now
                <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}