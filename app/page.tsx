import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import MarqueeSection from "@/components/MarqueeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Certificates />
      <MarqueeSection />
      <Contact />
      <Footer />
    </main>
  );
}
