import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/folk446@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Portfolio Contact - ${formData.name}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactItems = [
    { icon: <FiMail />, label: 'Email', value: 'folk446@gmail.com', href: 'mailto:folk446@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '083-473-3264', href: 'tel:0834733264' },
    { icon: <FiMapPin />, label: 'Address', value: 'Bangkok, Thailand', href: null },
  ];

  const inputClasses =
    'w-full px-4 py-3 rounded-xl border border-border bg-surface text-text placeholder:text-text-faint backdrop-blur transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent';

  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-secondary">
      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-glow/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">Contact</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Get In <span className="bg-gradient-to-r from-accent to-glow bg-clip-text text-transparent">Touch</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-lg leading-relaxed text-text-secondary">
              I'm always open to discussing new opportunities, collaborations, or just having a
              chat about technology and automation.
            </p>

            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <div key={i} className="group flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent backdrop-blur transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-text-faint">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-text transition-colors hover:text-accent">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-text">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/SarayutFolk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-accent backdrop-blur transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:bg-accent hover:text-white"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sarayut-thanakham-802a962b6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-accent backdrop-blur transition-all duration-300 hover:scale-105 hover:border-accent/40 hover:bg-accent hover:text-white"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-surface p-8 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-text-muted">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your name or Email"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-text-muted">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Mail@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-text-muted">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-accent to-glow px-8 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-[length:200%_100%] animate-shimmer" />
                <span className="relative flex items-center justify-center gap-2">
                  <FiSend size={18} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </span>
              </button>
              {status === 'success' && (
                <p className="text-center text-sm font-medium text-emerald-400">
                  Message sent! Thank you for reaching out. I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-sm font-medium text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}