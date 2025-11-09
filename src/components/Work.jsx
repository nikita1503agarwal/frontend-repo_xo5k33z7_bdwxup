import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Sagnik Films – Cinesaga OTT Platform (Next.js & Firebase)',
    period: 'July 2025 – Sep 2025',
    desc: 'Developed and launched the Bengali OTT platform with authentication, Razorpay integration, and responsive Tailwind UI.',
    link: 'https://cinesaga.in',
  },
  {
    role: 'WeTax App (Switzerland-based AI Tax Application)',
    period: 'Sept 2025 – Present',
    desc: 'Developing an AI-powered tax automation app using React Native, Node.js, and AWS.',
  },
];

const projects = [
  {
    title: 'Stress Recognition Model',
    stack: 'Python, TensorFlow',
    desc: 'Built a multimodal ML model using speech, text, and physiological signals to detect stress levels.',
  },
];

const certs = [
  { title: 'Generative AI & LLMOps – LinkedIn Learning', date: 'Mar 2025' },
  { title: 'Artificial Intelligence & Application Security – LinkedIn Learning', date: 'Mar 2025' },
  { title: 'Cybersecurity Foundations – LinkedIn Learning', date: 'Jan 2025' },
];

const achievements = [
  'Mentored 500+ students at The RG Classes in AI/ML and Programming.',
  'Developed official websites for The RG Classes and Code Vichar, boosting online presence.',
];

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-[#0b0e13] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Experience Timeline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Experience
        </motion.h2>
        <div className="mt-8 space-y-6">
          {experiences.map((e, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg"
            >
              <div className="absolute left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 to-violet-500/50 rounded-full" />
              <div className="ml-6">
                <div className="text-lg font-semibold text-white/90">{e.role}</div>
                <div className="text-xs text-white/60 mt-1">{e.period}</div>
                <p className="mt-3 text-white/80">{e.desc}</p>
                {e.link && (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
                  >
                    Visit
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-3xl md:text-4xl font-bold tracking-tight"
        >
          Projects
        </motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <TiltCard key={p.title} title={p.title} stack={p.stack} desc={p.desc} />)
          )}
        </div>

        {/* Certifications Carousel (simple auto marquee) */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-3xl md:text-4xl font-bold tracking-tight"
        >
          Certifications
        </motion.h2>
        <div className="mt-6 overflow-hidden">
          <div className="flex gap-4 animate-[slide_18s_linear_infinite]" style={{ width: '200%'}}>
            {[...certs, ...certs].map((c, i) => (
              <div key={i} className="min-w-[280px] rounded-xl border border-white/10 bg-white/5 p-4 text-white/90 shadow">
                <div className="font-medium">{c.title}</div>
                <div className="text-xs text-white/60 mt-1">{c.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-3xl md:text-4xl font-bold tracking-tight"
        >
          Achievements
        </motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {achievements.map((a) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:shadow-cyan-500/10 hover:border-cyan-400/30 transition"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
                <p className="text-white/85">{a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ title, stack, desc }) {
  const ref = React.useRef(null);
  const [transform, setTransform] = React.useState('');

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = (y / rect.height - 0.5) * -10;
    const ry = (x / rect.width - 0.5) * 10;
    setTransform(`rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`);
  };

  const reset = () => setTransform('');

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transform }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 backdrop-blur-md shadow-lg"
    >
      <div className="text-lg font-semibold text-white/90">{title}</div>
      <div className="text-xs text-white/60 mt-1">{stack}</div>
      <p className="mt-3 text-white/85">{desc}</p>
    </motion.div>
  );
}
