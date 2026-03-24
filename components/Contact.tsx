"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const { ref, inView } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari Portfolio — ${form.name}`);
    const body = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, "_blank");
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--bg-secondary)", border: "1px solid var(--border)",
    color: "var(--text-primary)", borderRadius: "12px", padding: "12px 16px",
    width: "100%", fontSize: "14px", outline: "none", fontFamily: "var(--font-dm-sans)",
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative">
      <div className="blob w-96 h-96 bottom-0 right-0 opacity-5" style={{ background: "var(--gold)" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
            <span className="section-label">Kontak</span>
            <span className="inline-block w-8 h-px" style={{ background: "var(--gold)" }} />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4" style={{ color: "var(--text-primary)" }}>
            Mari <span className="italic text-gradient-gold">Terhubung</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="lg:col-span-2 flex flex-col gap-4">
            {[
              { icon: "📧", label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: "📱", label: "Telepon", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: "📍", label: "Lokasi", value: personalInfo.location, href: null },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-5 flex items-center gap-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0" style={{ background: "var(--bg-secondary)" }}>{item.icon}</div>
                <div>
                  <div className="section-label text-[10px] mb-0.5">{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="text-sm hover:text-[var(--gold)] transition-colors" style={{ color: "var(--text-secondary)" }}>{item.value}</a>
                    : <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.value}</p>}
                </div>
              </div>
            ))}
            <a href={`https://wa.me/${personalInfo.whatsapp}?text=Halo%20Abiyyu!`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 rounded-2xl font-medium text-sm hover:scale-105 transition-transform hover:shadow-xl"
              style={{ background: "var(--gold)", color: "#0D0D0D" }}>
              💬 Chat via WhatsApp
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }} className="lg:col-span-3">
            <div className="rounded-3xl p-8 md:p-10" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <h3 className="font-display font-semibold text-2xl mb-6" style={{ color: "var(--text-primary)" }}>Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="section-label text-[10px]">Nama</label>
                    <input type="text" required placeholder="Nama kamu" style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="section-label text-[10px]">Email</label>
                    <input type="email" required placeholder="email@kamu.com" style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="section-label text-[10px]">Pesan</label>
                  <textarea required rows={5} placeholder="Tuliskan pesan kamu..." style={{ ...inputStyle, resize: "vertical" }} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium hover:scale-105 transition-transform hover:shadow-xl mt-2" style={{ background: "var(--gold)", color: "#0D0D0D" }}>
                  Kirim Pesan →
                </button>
                <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>Form akan membuka email client kamu secara otomatis.</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
                                                                               }
