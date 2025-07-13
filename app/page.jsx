import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechSatck";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <main className="bg-black text-white scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Projects />
      <TechStack />
  
      <Footer />
    </main>
  );
}
