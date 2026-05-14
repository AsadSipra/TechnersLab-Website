"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  "Software Development", "QA & Testing", "SEO",
  "UI/UX Design", "WordPress", "Shopify",
  "ERP Systems", "CMS Development", "Ecommerce",
  "SaaS Development", "AI Development", "Vision AI",
  "Speech AI Bots", "Training / Course Enrollment",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const RATE_LIMIT_KEY = "sc_last_contact_ts";
  const COOLDOWN_S = 60;

  const [status, setStatus] = useState<Status>("idle");
  const [cooldown, setCooldown] = useState(0); // seconds remaining
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Start cooldown countdown
  const startCooldown = (seconds: number) => {
    setCooldown(seconds);
    timerRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Resume cooldown if user refreshes the page mid-cooldown
  useEffect(() => {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (stored) {
      const elapsed = Math.floor((Date.now() - Number(stored)) / 1000);
      const remaining = COOLDOWN_S - elapsed;
      if (remaining > 0) startCooldown(remaining);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side rate limit check
    if (cooldown > 0) return;

    setStatus("loading");

    const templateParams = {
      ...form,
      time: new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" }),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Send autoreply if template ID is set
      if (process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
      }

      setStatus("success");
      setForm({ from_name: "", from_email: "", phone: "", service: "", message: "" });
      // Record timestamp and start cooldown
      localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()));
      startCooldown(COOLDOWN_S);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-[#080C18]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#7C3AED]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#7C3AED] text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Request a Free Quote
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Tell us what you need and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 flex items-center justify-center">
                <CheckCircle2 size={32} className="text-[#7C3AED]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-[#94A3B8] max-w-sm">
                We've received your quote request and will respond within 24 hours. Check your inbox for a confirmation.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm text-[#7C3AED] hover:text-[#A855F7] transition-colors underline underline-offset-4"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#94A3B8]">Full Name *</label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-[#0A0E1A] border border-[#1E293B] focus:border-[#7C3AED]/60 focus:ring-1 focus:ring-[#7C3AED]/30 rounded-xl px-4 py-3 text-white text-sm placeholder-[#4B5563] outline-none transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#94A3B8]">Email Address *</label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="bg-[#0A0E1A] border border-[#1E293B] focus:border-[#7C3AED]/60 focus:ring-1 focus:ring-[#7C3AED]/30 rounded-xl px-4 py-3 text-white text-sm placeholder-[#4B5563] outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#94A3B8]">Phone Number <span className="text-[#4B5563]">(optional)</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                  className="bg-[#0A0E1A] border border-[#1E293B] focus:border-[#7C3AED]/60 focus:ring-1 focus:ring-[#7C3AED]/30 rounded-xl px-4 py-3 text-white text-sm placeholder-[#4B5563] outline-none transition-all duration-200"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#94A3B8]">Service Required *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="bg-[#0A0E1A] border border-[#1E293B] focus:border-[#7C3AED]/60 focus:ring-1 focus:ring-[#7C3AED]/30 rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-[#111827]">{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#94A3B8]">Project Details *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project, goals, timeline, or any specific requirements..."
                  className="bg-[#0A0E1A] border border-[#1E293B] focus:border-[#7C3AED]/60 focus:ring-1 focus:ring-[#7C3AED]/30 rounded-xl px-4 py-3 text-white text-sm placeholder-[#4B5563] outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading" || cooldown > 0}
                className="flex items-center justify-center gap-2 w-full bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#7C3AED]/30 active:scale-[0.98] mt-1"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : cooldown > 0 ? (
                  <>
                    <Loader2 size={16} className="opacity-60" />
                    Try again in {cooldown}s
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Quote Request
                  </>
                )}
              </button>

              <p className="text-center text-xs text-[#4B5563]">
                We respond within 24 hours · No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}