"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { experience } from "@/lib/data";

export default function Experience() {
  const { ref, inView } = useScrollReveal();
  return (
    <section id="experience" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
              <span className="section-label">Pengalaman</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
              Perjalanan <span className="italic text-gradient-gold">Profesional</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>Fondasi kuat di bidang komunikasi, teknis, dan kerja sama tim yang dibangun selama masa sekolah.</p>
          </motion.div>

          <div className="lg:col-span-3 flex flex-col gap-6">
            {experience.map((exp, i) => (
              <motion.div key={exp.title} initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}>
                <div className="rounded-2xl p-6 card-hover" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div>
                      <h3 className="font-display font-semibold text-lg" style={{ color: "var(--text-primary)" }}>{exp.title}</h3>
                      <p className="text-sm mt-0.5" style={{ color: "var(--gold)" }}>{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full shrink-0" style={{ background: "var(--bg-secondary)", color: "var(--text-muted)" }}>{exp.period}</span>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "var(--bg-secondary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
