"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => { setDone(true); setTimeout(onComplete, 800); }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 3;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div className="preloader" exit={{ y: "-100%" }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
          <div className="text-center">
            <div className="text-gradient-gold font-display text-6xl font-bold">ARR</div>
            <div className="section-label mt-2" style={{ color: "var(--text-muted)" }}>Loading Portfolio</div>
          </div>
          <div className="mt-8 w-48">
            <div className="w-full h-px" style={{ background: "var(--border)" }}>
              <div className="h-full transition-all duration-100" style={{ background: "var(--gold)", width: `${Math.min(count, 100)}%` }} />
            </div>
            <div className="text-center mt-2 text-xs font-mono" style={{ color: "var(--text-muted)" }}>{Math.min(count, 100)}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
