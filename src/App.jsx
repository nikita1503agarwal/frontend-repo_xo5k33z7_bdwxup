import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

export default function App() {
  const projectsRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const { scrollYProgress } = useScroll();

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen bg-[#070910] selection:bg-indigo-500/30 selection:text-white">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      />

      <Hero
        onViewProjects={() => scrollTo(projectsRef)}
        onContact={() => scrollTo(contactRef)}
      />

      <About />
      <Skills />

      <div ref={projectsRef}>
        <Work />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      {/* Floating cursor glow */}
      <CursorGlow />

      {/* Back to top */}
      <BackToTop />
    </div>
  );
}

function CursorGlow() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    const move = (e) => {
      if (!el) return;
      el.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div ref={ref} className="pointer-events-none fixed z-40 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />
  );
}

function BackToTop() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur border border-white/10 shadow-lg hover:bg-white/15"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
