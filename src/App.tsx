import { useEffect, useState } from "react";
import Links from "./components/header/Links";
import Menu from "./components/header/Menu";
import Skills from "./components/main/Skills";
import Education from "./components/main/Education";
import Projects from "./components/main/Projects";
import AboutMe from "./components/main/AboutMe";

export default function App() {

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="bg-[#0f172a] text-slate-300 selection:bg-indigo-500/30">
    <div className="pointer-events-none fixed inset-0 z-10"
        style={{background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`}}/>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 lg:px-24">

        <div className="lg:flex lg:justify-between lg:gap-12"> 
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between py-12 lg:py-24 text-left">
            <Menu />
            <Links />
          </header>

          <main className="lg:w-1/2 py-12 lg:py-24 space-y-32">
            <section id="about-me" className="scroll-mt-24">
              <AboutMe />
            </section>

            <section id="skills" className="mb-24 scroll-mt-16">
              <Skills />
            </section>

            <section id="education" className="mb-24 scroll-mt-16 lg:mb-36">
              <Education />
            </section>

            <section id="projects" className="scroll-mt-24">
              <Projects />
            </section>
          </main>
        </div>

    </div>
    </div>
  );
}