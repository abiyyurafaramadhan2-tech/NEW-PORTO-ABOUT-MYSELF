"use client";
import { marqueeItems } from "@/lib/data";

const repeated = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

export default function MarqueeSection() {
  return (
    <div className="py-10 overflow-hidden" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="marquee-wrapper mb-3">
        <div className="marquee-track">
          {repeated.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4">
              <span className="font-display italic text-2xl md:text-3xl font-semibold" style={{ color: "var(--text-primary)", opacity: 0.7 }}>{item}</span>
              <span style={{ color: "var(--gold)" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "22s" }}>
          {[...repeated].reverse().map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4">
              <span className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">{item}</span>
              <span style={{ color: "var(--border)" }}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
