import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0e13] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-20 bottom-10 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg shadow-indigo-500/5">
            <p className="text-white/85 leading-relaxed">
              Hi, I'm Rohan Das, currently pursuing B.Tech in CSE (AI & ML) at the University of Engineering and Management, Kolkata. I’m passionate about Artificial Intelligence, Full-Stack Development, and building scalable software solutions. I love combining technology and design to build applications that make life easier.
            </p>
          </div>
          <div className="grid gap-4">
            <InfoCard title="Location" value="Kolkata, India" />
            <InfoCard title="Focus" value="AI, Full-Stack, Product Design" />
            <InfoCard title="Interests" value="Generative AI, LLMOps, Mobile, Cloud" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({ title, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-4 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 transition"
    >
      <div className="text-xs uppercase tracking-wider text-white/60">{title}</div>
      <div className="mt-1 text-base font-medium text-white/90">{value}</div>
    </motion.div>
  );
}
