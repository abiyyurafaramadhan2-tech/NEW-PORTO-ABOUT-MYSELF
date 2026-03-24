"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import LenisProvider from "@/components/LenisProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setIsDark(saved !== "light");
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <title>Abiyyu Rafa Ramadhan — Customer Service</title>
        <meta name="description" content="Portfolio profesional Abiyyu Rafa Ramadhan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <LenisProvider>
          <CustomCursor />
          {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
          <div style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.6s ease" }}>
            <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
