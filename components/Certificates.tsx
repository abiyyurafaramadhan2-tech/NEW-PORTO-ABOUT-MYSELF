"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { certificates } from "@/lib/data";

export default function Certificates() {
  const { ref, inView } = useScrollReveal();
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
            <span className="section-label">Sertifikat</span>
            <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
            Pencapaian & <span className="italic text-gradient-gold">Sertifikasi</span>
          </h2>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div key={cert.name} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.15 }}
              className="rounded-3xl p-8 card-hover relative overflow-hidden group" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>{cert.badge}</div>
                <div>
                  <h3 className="font-display font-semibold text-lg leading-snug mb-1" style={{ color: "var(--text-primary)" }}>{cert.name}</h3>
                  <p className="text-sm mb-1" style={{ color: "var(--gold)" }}>{cert.issuer}</p>
                  <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{cert.year}</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full" style={{ background: "var(--gold)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
