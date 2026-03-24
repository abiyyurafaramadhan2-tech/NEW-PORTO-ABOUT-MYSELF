"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { hardSkills, softSkills } from "@/lib/data";

export default function Skills() {
  const { ref, inView } = useScrollReveal();
  return (
    <section id="skills" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
            <span className="section-label">Keahlian</span>
            <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
            Hard & <span className="italic text-gradient-gold">Soft Skills</span>
          </h2>
        </div>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="rounded-3xl p-8" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <h3 className="font-display font-semibold text-xl mb-6" style={{ color: "var(--text-primary)" }}>⚙️ Hard Skills</h3>
            <div className="flex flex-col gap-5">
              {hardSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{skill.name}</span>
                    <span className="text-xs font-mono" style={{ color: "var(--gold)" }}>{skill.level}%</span>
                  </div>
                  <div className="w-full h-px rounded-full" style={{ background: "var(--border)" }}>
                    <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg,var(--gold),var(--gold-light))" }}
                      initial={{ width: 0 }} animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="rounded-3xl p-8" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <h3 className="font-display font-semibold text-xl mb-6" style={{ color: "var(--text-primary)" }}>🤝 Soft Skills</h3>
            <div className="flex flex-col gap-3">
              {softSkills.map((skill, i) => (
                <motion.div key={skill} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "var(--bg-secondary)" }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
