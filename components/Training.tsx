"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
import { GraduationCap, Rocket, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";

const tracks = [
  {
    icon: GraduationCap,
    audience: "University Students",
    tag: "Structured Batches",
    tagColor: "bg-[#7C3AED]/10 text-[#A855F7] border-[#7C3AED]/30",
    accentColor: "border-[#7C3AED]/40",
    iconColor: "text-[#7C3AED]",
    glowColor: "hover:shadow-[#7C3AED]/15",
    desc: "Proper course batches designed around university schedules. Build real projects and graduate job-ready.",
    courses: ["MERN Stack", "MEAN Stack", "AI Development", "QA Engineering", "SEO Mastery"],
    delay: 0,
  },
  {
    icon: Rocket,
    audience: "Beginners",
    tag: "Zero to Hero",
    tagColor: "bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/30",
    accentColor: "border-[#06B6D4]/40",
    iconColor: "text-[#06B6D4]",
    glowColor: "hover:shadow-[#06B6D4]/15",
    desc: "Start from scratch and build practical skills fast. No prior experience needed — just the drive to learn.",
    courses: ["WordPress Development", "Vibe Coding", "AI-Assisted Coding", "SEO Fundamentals", "UI/UX Basics"],
    delay: 0.1,
  },
  {
    icon: RefreshCw,
    audience: "Career Switchers",
    tag: "Fast-Track Program",
    tagColor: "bg-[#A855F7]/10 text-[#A855F7] border-[#A855F7]/30",
    accentColor: "border-[#A855F7]/40",
    iconColor: "text-[#A855F7]",
    glowColor: "hover:shadow-[#A855F7]/15",
    desc: "Switching careers into tech? Our intensive programs get you industry-ready in the shortest time possible.",
    courses: ["Full Stack Development", "AI & Machine Learning", "QA Automation", "Vibe Coding", "Freelancing Kickstart"],
    delay: 0.2,
  },
];

const allCourses = [
  "MERN Stack", "MEAN Stack", "AI-Assisted Coding", "Vibe Coding",
  "QA Engineering", "SEO Mastery", "AI Development", "WordPress",
];

export default function Training() {
  const scrollToContact = (subject?: string) => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="training" className="relative w-full py-24 bg-[#080C18]">
      {/* Top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#06B6D4]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#06B6D4] text-sm font-semibold tracking-widest uppercase mb-3">
            Learn With Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Training & Courses
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Hands-on training programs for every stage of your journey — from first line of code to career switch.
          </p>
        </motion.div>

        {/* Course pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {allCourses.map((course) => (
            <span
              key={course}
              className="text-xs font-medium bg-[#111827] border border-[#1E293B] text-[#94A3B8] px-3 py-1.5 rounded-full"
            >
              {course}
            </span>
          ))}
        </motion.div>

        {/* Track cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <motion.div
              key={track.audience}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: track.delay, ease: EASE }}
              className={`group bg-[#111827] border border-[#1E293B] ${track.accentColor} rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${track.glowColor}`}
            >
              {/* Icon + Tag */}
              <div className="flex items-start justify-between">
                <div className={`${track.iconColor} bg-[#0A0E1A] rounded-xl p-3 border border-[#1E293B]`}>
                  <track.icon size={24} strokeWidth={1.5} />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${track.tagColor}`}>
                  {track.tag}
                </span>
              </div>

              {/* Title + Desc */}
              <div>
                <h3 className="text-white font-bold text-xl mb-2">{track.audience}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{track.desc}</p>
              </div>

              {/* Course list */}
              <ul className="flex flex-col gap-2">
                {track.courses.map((course) => (
                  <li key={course} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <CheckCircle2 size={14} className={track.iconColor} />
                    {course}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => scrollToContact(track.audience)}
                className={`group/btn mt-auto flex items-center justify-center gap-2 w-full border ${track.accentColor} text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200 hover:bg-white/5`}
              >
                Enroll Now
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}