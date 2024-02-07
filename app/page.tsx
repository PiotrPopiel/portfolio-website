import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 mt-[6rem] md:mt-[10rem] w-full items-center">
      <Intro />
      <TechStack />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
