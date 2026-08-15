import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <ParticleBackground />
      <ScrollProgressBar />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
