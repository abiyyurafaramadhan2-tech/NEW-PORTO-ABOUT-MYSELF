"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

const c = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } };
const i = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } } };

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: "80px" }}>
      <div className="blob w-96 h-96 top-0 right-0 opacity-10" style={{ background: "var(--gold)" }} />
      <div className="blob w-64 h-64 bottom-20 left-0 opacity-5" style={{ background: "var(--gold)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 md:py-32">
        <motion.div variants={c} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-6">
            <motion.div variants={i} className="flex items-center gap-3">
              <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
              <span className="section-label">Portfolio Profesional</span>
            </motion.div>

            <motion.h1 variants={i} className="font-display font-bold leading-tight">
              <span className="block text-5xl md:text-7xl" style={{ color: "var(--text-primary)" }}>Abiyyu</span>
              <span className="block text-5xl md:text-7xl italic text-gradient-gold">Rafa</span>
              <span className="block text-5xl md:text-7xl" style={{ color: "var(--text-primary)" }}>Ramadhan</span>
            </motion.h1>

            <motion.div variants={i} className="flex items-center gap-4 flex-wrap">
              <div className="px-4 py-1.5 rounded-full text-sm font-mono border" style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>{personalInfo.role}</div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>📍 {personalInfo.location}</div>
            </motion.div>

            <motion.p variants={i} className="text-lg leading-relaxed max-w-lg" style={{ color: "var(--text-secondary)" }}>{personalInfo.tagline}</motion.p>

            <motion.div variants={i} className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-transform hover:shadow-xl"
                style={{ background: "var(--gold)", color: "#0D0D0D" }}>
                Hubungi Saya →
              </a>
              <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium hover:scale-105 transition-transform border"
                style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>
                WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div variants={i} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 rounded-3xl p-8 relative overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "0 40px 100px var(--shadow)" }}>
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold font-display mb-6" style={{ background: "linear-gradient(135deg,#C9A84C,#E2C97E)", color: "#0D0D0D" }}>AR</div>
                <h3 className="font-display font-bold text-xl mb-1" style={{ color: "var(--text-primary)" }}>{personalInfo.name}</h3>
                <p className="text-sm mb-4" style={{ color: "var(--gold)" }}>{personalInfo.role}</p>
                <div className="divider mb-4" />
                {[["📍", personalInfo.location], ["📧", personalInfo.email], ["📱", personalInfo.phone]].map(([icon, val]) => (
                  <div key={val} className="flex items-center gap-2 mb-2">
                    <span className="text-sm">{icon}</span>
                    <span className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{val}</span>
                  </div>
                ))}
                <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4ADE80", display: "inline-block" }} />
                  Tersedia untuk kerja sama
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10" style={{ background: "var(--gold)" }} />
              </div>

              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -right-8 top-10 px-3 py-2 rounded-xl text-xs font-medium shadow-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>🏆 LSP 2026</motion.div>
              <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -left-8 bottom-16 px-3 py-2 rounded-xl text-xs font-medium shadow-xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>📜 Google PM</motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="section-label text-[10px]" style={{ color: "var(--text-muted)" }}>scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }} />
        </motion.div>
      </div>
    </section>
  );
}
