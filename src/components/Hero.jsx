import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const GradientGlow = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0"
  >
    <div className="absolute -inset-40 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.22),transparent_55%)] blur-2xl" />
  </div>
);

export default function Hero({ onViewProjects, onContact }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0b0e13] text-white">
      <GradientGlow />

      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* animated background code lines */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/4 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute left-1/2 h-full w-px bg-gradient-to-b from-transparent via-indigo-500/40 to-transparent animate-[pulse_7s_ease-in-out_infinite_1s]" />
        <div className="absolute left-3/4 h-full w-px bg-gradient-to-b from-transparent via-violet-500/40 to-transparent animate-[pulse_8s_ease-in-out_infinite_2s]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="backdrop-blur-md/30 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl shadow-indigo-500/10"
          >
            <div className="flex flex-col items-center text-center">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300"
              >
                Rohan Das
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-4 text-base md:text-lg text-white/80"
              >
                <span className="inline-block align-middle">&#x275A; </span>
                <TypingText text="AI Engineer | Full Stack Developer | Innovator" />
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-4"
              >
                <button
                  onClick={onViewProjects}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-700/30 transition-transform hover:scale-[1.02] focus:outline-none"
                >
                  <span className="relative z-10">View Projects</span>
                  <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-white/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
                </button>
                <button
                  onClick={onContact}
                  className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  Contact Me
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest">
        SCROLL
      </div>
    </section>
  );
}

function TypingText({ text }) {
  const [display, setDisplay] = React.useState('');
  React.useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, [text]);
  return (
    <span className="font-medium tracking-wide text-cyan-200/90">
      {display}
      <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-cyan-300 align-middle" />
    </span>
  );
}
