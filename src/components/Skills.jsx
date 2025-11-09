import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Languages: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript'],
  Frameworks: ['React', 'Next.js', 'Flutter', 'TensorFlow', 'PyTorch'],
  Tools: ['GitHub', 'Docker', 'SQL Server', 'MATLAB', 'Postman'],
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#0b0e13] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg shadow-indigo-500/5"
            >
              <div className="text-sm uppercase tracking-wider text-white/60">{category}</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {items.map((item) => (
                  <SkillPill key={item} label={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillPill({ label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(99,102,241,0.35)' }}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-violet-600/10 px-3 py-2 text-sm font-medium text-white/90"
    >
      <span className="relative z-10">{label}</span>
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.25),transparent_40%)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
    </motion.div>
  );
}
