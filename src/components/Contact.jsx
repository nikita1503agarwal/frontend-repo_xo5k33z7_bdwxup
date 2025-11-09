import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };

    try {
      // EmailJS client-side example using fetch to EmailJS REST API
      // Assumes user will later plug in their EmailJS service. For demo, we show success immediately.
      // Replace this with EmailJS SDK if credentials are available.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Message sent successfully!');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0e13] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center"
        >
          Contact
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md shadow-2xl"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Input name="name" placeholder="Your name" label="Name" />
            <Input name="email" placeholder="you@example.com" label="Email" type="email" />
          </div>
          <div className="mt-4">
            <Label>Message</Label>
            <textarea name="message" required rows={5} className="w-full resize-none rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Write your message..." />
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-700/30 transition-transform hover:scale-[1.02]">
              <span className="relative z-10">Send Message</span>
              <span className="pointer-events-none absolute inset-0 translate-y-full bg-gradient-to-t from-white/20 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
            </button>
            {status && <span className="text-sm text-white/80">{status}</span>}
          </div>

          <div className="mt-8 grid gap-2 text-sm text-white/80">
            <div>📧 dasrohan1214@gmail.com</div>
            <div>📞 +91 89104 89989</div>
            <div>
              💼 <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">LinkedIn</a>
              {' '}|{' '}
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:underline">GitHub</a>
            </div>
          </div>
        </motion.form>

        <div className="mt-12 text-center text-xs text-white/50">Designed & Developed by Rohan Das © 2025</div>
      </div>
    </section>
  );
}

function Label({ children }) {
  return <label className="mb-1 block text-xs uppercase tracking-wider text-white/60">{children}</label>;
}

function Input({ label, ...props }) {
  return (
    <div>
      <Label>{label}</Label>
      <input {...props} required className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" />
    </div>
  );
}
