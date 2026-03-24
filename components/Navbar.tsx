"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Keahlian", href: "#skills" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 40));
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? (isDark ? "rgba(13,13,13,0.92)" : "rgba(245,240,232,0.92)") : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "var(--gold)", color: "#0D0D0D" }}>AR</div>
            <span className="font-display font-semibold hidden sm:block" style={{ color: "var(--text-primary)" }}>
              {personalInfo.name.split(" ")[0]} <span style={{ color: "var(--gold)" }}>{personalInfo.name.split(" ").slice(1).join(" ")}</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button onClick={() => go(l.href)} className="text-sm font-medium hover:text-[var(--gold)] transition-colors" style={{ color: "var(--text-secondary)" }}>{l.label}</button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{ border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)" }}>
              {isDark ? "☀️" : "🌙"}
            </button>
            <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full hover:scale-105 transition-transform" style={{ background: "var(--gold)", color: "#0D0D0D" }}>
              WhatsApp
            </a>
            <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
              <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} style={{ background: "var(--text-primary)" }} />
              <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "var(--text-primary)" }} />
              <span className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} style={{ background: "var(--text-primary)" }} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed top-16 left-0 right-0 z-40 md:hidden px-6 py-6 flex flex-col gap-4"
            style={{ background: isDark ? "rgba(13,13,13,0.97)" : "rgba(245,240,232,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)" }}>
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} className="text-left text-lg font-display font-medium py-2 border-b" style={{ color: "var(--text-primary)", borderColor: "var(--border)" }}>{l.label}</button>
            ))}
            <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="mt-2 px-6 py-3 text-center text-sm font-medium rounded-full" style={{ background: "var(--gold)", color: "#0D0D0D" }}>Chat WhatsApp</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
      }
