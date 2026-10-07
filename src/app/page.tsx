import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-20">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}