"use client";

import { useState, useEffect, FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send, CheckCircle2, Loader2,
  Mail, Phone, MessageSquare, Clock, Copy, Check, MapPin,
} from "lucide-react";

const services = [
  "Software Development", "QA & Testing", "SEO",
  "UI/UX Design", "WordPress", "Shopify",
  "ERP Systems", "CMS Development", "Ecommerce",
  "SaaS Development", "AI Development", "Vision AI",
  "Speech AI Bots", "Training / Course Enrollment",
];

type Status = "idle" | "loading" | "success" | "error";

/* ── Input field wrapper ── */
function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-[#6b6b6b] flex items-center gap-1.5">
        {label}
        {optional && (
          <span className="text-[11px] text-[#c8c8c8] font-normal">(optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-white border border-black/[0.1] focus:border-[#5b3ff8]/50 focus:ring-2 focus:ring-[#5b3ff8]/10 rounded-2xl px-4 py-3 text-[14px] text-[#0a0a0a] placeholder-[#c8c8c8] outline-none transition-all duration-200";

/* ── Copy-to-clipboard hook ── */
function useCopy(text: string) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return { copied, copy };
}

/* ── Single animated contact card ── */
function ContactCard({
  icon: Icon, label, value, accent, copyable, delay, extra,
}: {
  icon: React.ElementType; label: string; value: string; accent: string;
  copyable?: boolean; delay: number;
  extra?: React.ReactNode;
}) {
  const { copied, copy } = useCopy(value);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", overflow: "hidden",
        borderRadius: 20, padding: "16px 18px",
        border: `1px solid ${hovered ? `${accent}35` : "rgba(0,0,0,0.05)"}`,
        background: hovered ? `${accent}06` : "#f8f8f6",
        transition: "all 0.3s ease",
        cursor: copyable ? "pointer" : "default",
        boxShadow: hovered ? `0 4px 24px ${accent}15` : "none",
      }}
      onClick={copyable ? copy : undefined}
    >
      {/* Animated left accent bar */}
      <motion.div
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute", left: 0, top: 12, bottom: 12,
          width: 3, borderRadius: 4,
          background: `linear-gradient(180deg, ${accent}, ${accent}60)`,
          transformOrigin: "top",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Icon with pulse on hover */}
        <motion.div
          animate={{ scale: hovered ? 1.12 : 1 }}
          transition={{ duration: 0.25 }}
          style={{
            width: 40, height: 40, borderRadius: 14, flexShrink: 0,
            background: `${accent}14`,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: hovered ? `0 4px 14px ${accent}30` : "none",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <Icon size={17} style={{ color: accent }} strokeWidth={1.9} />
        </motion.div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, color: "#a8a8a8", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 3 }}>
            {label}
          </div>
          <div style={{ fontSize: 14, color: "#0a0a0a", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {value}
          </div>
          {extra}
        </div>

        {/* Copy button */}
        {copyable && (
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            style={{
              flexShrink: 0, width: 30, height: 30, borderRadius: 10,
              background: copied ? "#22c55e14" : `${accent}14`,
              border: `1px solid ${copied ? "#22c55e30" : `${accent}25`}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {copied
              ? <Check size={13} style={{ color: "#22c55e" }} />
              : <Copy size={13} style={{ color: accent }} />
            }
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Full animated contact info panel ── */
function ContactInfoPanel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <ContactCard
        icon={Mail} label="Email" value="asadsipra2002@gmail.com"
        accent="#5b3ff8" copyable delay={0.05}
      />
      <ContactCard
        icon={Phone} label="Phone" value="+92 349 4889301"
        accent="#00c2a8" copyable delay={0.15}
      />
      <ContactCard
        icon={MessageSquare} label="Response Time" value="Within 24 hours"
        accent="#ff6b35" delay={0.25}
        extra={
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e", animation: "glow-ring 2s ease-in-out infinite" }} />
            <span style={{ fontSize: 10.5, color: "#22c55e", fontWeight: 600 }}>Typically faster</span>
          </div>
        }
      />
      {/* Trust pills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.65 }}
        style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}
      >
        {["No spam, ever.", "24hr response.", "Free quote.", "No commitment."].map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.7 + i * 0.06 }}
            style={{
              fontSize: 11, color: "#a8a8a8", fontWeight: 500,
              background: "#f8f8f6", border: "1px solid rgba(0,0,0,0.05)",
              borderRadius: 20, padding: "4px 12px",
            }}
          >
            {t}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Contact() {

  const [status, setStatus] = useState<Status>("idle");
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const updateCooldown = () => {
      const lastSentStr = localStorage.getItem("lastContactSent");
      if (lastSentStr) {
        const lastSentTime = parseInt(lastSentStr, 10);
        const elapsed = Date.now() - lastSentTime;
        const remaining = Math.max(0, Math.ceil((30000 - elapsed) / 1000));
        setCooldown(remaining);
      }
    };

    updateCooldown();
    const interval = setInterval(updateCooldown, 1000);
    return () => clearInterval(interval);
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
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

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
      if (process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
      }
      localStorage.setItem("lastContactSent", Date.now().toString());
      setStatus("success");
      setForm({ from_name: "", from_email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />

      {/* Orb blobs */}
      <div className="orb w-[500px] h-[500px] top-[-100px] left-[-150px]" style={{ background: "#5b3ff8", opacity: 0.05 }} />
      <div className="orb w-[400px] h-[400px] bottom-[-100px] right-[-100px]" style={{ background: "#00c2a8", opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left — info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#a8a8a8] mb-4">
              Get In Touch
            </p>
            <h2 className="text-[40px] sm:text-[52px] font-black tracking-[-0.03em] text-[#0a0a0a] leading-tight mb-5">
              Let's build{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #5b3ff8, #00c2a8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                something great.
              </span>
            </h2>
            <p className="text-[16px] text-[#6b6b6b] leading-relaxed mb-10 max-w-md">
              Tell us about your project and we'll respond within 24 hours with a tailored quote — no fluff, no obligation.
            </p>

            {/* ── Animated contact info cards ── */}
            <ContactInfoPanel />
          </motion.div>

          {/* ── Right — form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#f8f8f6] rounded-4xl p-8 sm:p-10 border border-black/[0.05] shadow-float">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-5 text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "#5b3ff812" }}
                  >
                    <CheckCircle2 size={28} style={{ color: "#5b3ff8" }} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-bold text-[#0a0a0a] mb-1.5">Message sent!</h3>
                    <p className="text-[14px] text-[#6b6b6b] max-w-xs mx-auto">
                      We've received your request and will be in touch within 24 hours. Check your inbox.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[13px] text-[#5b3ff8] hover:text-[#4429e0] underline underline-offset-4 transition-colors"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full Name">
                      <input
                        type="text"
                        name="from_name"
                        value={form.from_name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email Address">
                      <input
                        type="email"
                        name="from_email"
                        value={form.from_email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  {/* Phone */}
                  <Field label="Phone Number" optional>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className={inputClass}
                    />
                  </Field>

                  {/* Service */}
                  <Field label="Service Required">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>Select service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>

                  {/* Message */}
                  <Field label="Project Details">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your project, goals, timeline, or any specific requirements..."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  {/* Error */}
                  {status === "error" && (
                    <p className="text-[13px] text-red-500 text-center">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading" || cooldown > 0}
                    className="group relative overflow-hidden flex items-center justify-center gap-2 w-full bg-[#0a0a0a] text-white text-[14px] font-medium py-4 rounded-2xl transition-all duration-300 disabled:opacity-50 hover:shadow-[0_4px_24px_rgba(91,63,248,0.35)] active:scale-[0.98] mt-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5b3ff8] to-[#00c2a8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2">
                      {status === "loading" ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          Sending…
                        </>
                      ) : cooldown > 0 ? (
                        <>
                          <Clock size={14} />
                          Wait {cooldown}s
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Quote Request
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}