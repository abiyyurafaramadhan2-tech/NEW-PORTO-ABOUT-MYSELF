"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { services } from "@/lib/data";

export default function Services() {
  const { ref, inView } = useScrollReveal();
  return (
    <section id="services" className="py-24 md:py-36 relative">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(var(--gold) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
            <span className="section-label">Layanan</span>
            <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
            Yang Bisa Saya <span className="italic text-gradient-gold">Lakukan</span>
          </h2>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div key={svc.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group card-hover rounded-3xl p-8 relative overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>{svc.icon}</div>
              <h3 className="font-display font-semibold text-xl mb-3" style={{ color: "var(--text-primary)" }}>{svc.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{svc.description}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: "linear-gradient(90deg,var(--gold),var(--gold-light))" }} />
              <div className="absolute top-6 right-6 font-mono text-4xl font-bold opacity-5" style={{ color: "var(--gold)" }}>0{i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
