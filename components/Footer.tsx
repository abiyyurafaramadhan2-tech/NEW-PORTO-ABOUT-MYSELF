"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--bg-secondary)" }}>
        <div className="blob w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" style={{ background: "var(--gold)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" style={{ color: "var(--text-primary)" }}>Siap bekerja sama?</h2>
            <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>Hubungi saya sekarang dan mari wujudkan tujuan kita bersama.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform hover:shadow-xl" style={{ background: "var(--gold)", color: "#0D0D0D" }}>Kirim Email</a>
              <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium hover:scale-105 transition-transform border" style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "var(--gold)", color: "#0D0D0D" }}>AR</div>
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>{personalInfo.name}</span>
        </div>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>© {new Date().getFullYear()} · Purwakarta, Jawa Barat</p>
        <a href={`mailto:${personalInfo.email}`} className="text-xs hover:text-[var(--gold)] transition-colors" style={{ color: "var(--text-muted)" }}>{personalInfo.email}</a>
      </div>
    </footer>
  );
}
