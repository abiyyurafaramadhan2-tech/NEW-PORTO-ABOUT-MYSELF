"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { personalInfo, education } from "@/lib/data";

export default function About() {
  const { ref, inView } = useScrollReveal();
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -60 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }}>
            <div className="rounded-3xl p-10 relative overflow-hidden mb-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="font-display text-8xl font-bold leading-none mb-4 opacity-20" style={{ color: "var(--gold)" }}>"</div>
              <blockquote className="font-display italic text-2xl leading-relaxed mb-6" style={{ color: "var(--text-primary)" }}>Melayani dengan hati, bekerja dengan tekad.</blockquote>
              <div className="flex items-center gap-3" style={{ color: "var(--text-muted)" }}>
                <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
                <span className="text-sm font-mono">{personalInfo.name}</span>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 rounded-tl-full" style={{ background: "var(--gold)" }} />
            </div>
            <div className="rounded-2xl p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="section-label mb-3">Pendidikan</div>
              {education.map((ed) => (
                <div key={ed.school}>
                  <h4 className="font-display font-semibold text-lg" style={{ color: "var(--text-primary)" }}>{ed.school}</h4>
                  <p className="text-sm mt-0.5" style={{ color: "var(--gold)" }}>{ed.major}</p>
                  <p className="text-xs mt-1 font-mono" style={{ color: "var(--text-muted)" }}>{ed.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 60 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.15 }} className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
              <span className="section-label">Tentang Saya</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight" style={{ color: "var(--text-primary)" }}>
              Teknis, Komunikatif, <span className="italic text-gradient-gold">Solutif</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{personalInfo.about}</p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[["3+", "Tahun Belajar"], ["2", "Sertifikat"], ["100%", "Komitmen"]].map(([num, label]) => (
                <div key={label} className="text-center py-4 rounded-2xl" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="font-display font-bold text-2xl text-gradient-gold">{num}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
