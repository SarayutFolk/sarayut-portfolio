import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { Reveal, SectionHeading } from './Motion';

const EASE = [0.22, 1, 0.36, 1];

function Field({ label, name, index, children }) {
  return (
    <div className="group relative">
      <label htmlFor={name} className="label-mono flex items-center gap-2 text-text-muted transition-colors group-focus-within:text-accent">
        <span className="text-text-faint">{index}</span>
        {label}
      </label>
      {children}
      {/* Focus underline grows from the left over the resting hairline */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-focus-within:scale-x-100"
      />
    </div>
  );
}

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
    { icon: <FiMapPin />, label: 'Location', value: 'Bangkok, Thailand', href: null },
  ];

  const inputClasses =
    'mt-2 w-full border-0 border-b border-rule bg-transparent px-0 py-3 text-lg text-text placeholder:text-text-faint focus:outline-none focus-visible:outline-none';

  return (
    <section id="contact" className="relative bg-secondary py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="05" eyebrow="Contact" title="Get In" emphasis="Touch" />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-6">
          <Reveal className="space-y-10 lg:col-span-5">
            <p className="font-display text-2xl font-light leading-snug text-text md:text-[1.75rem]">
              I'm always open to discussing new opportunities, collaborations, or just having a
              chat about technology and automation.
            </p>

            <dl className="border-t border-rule">
              {contactItems.map((item) => (
                <div key={item.label} className="group flex items-center gap-4 border-b border-rule py-4">
                  <span className="text-text-faint transition-colors duration-300 group-hover:text-accent">{item.icon}</span>
                  <dt className="label-mono w-20 text-text-faint">{item.label}</dt>
                  <dd className="flex-1">
                    {item.href ? (
                      <a href={item.href} className="link-draw text-text hover:text-accent">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-text">{item.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/SarayutFolk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex items-center gap-2 border border-rule px-4 py-2.5 text-sm text-text transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
              >
                <FiGithub size={17} />
                <FiArrowUpRight size={14} className="transition-transform duration-500 ease-editorial group-hover:rotate-45" />
              </a>
              <a
                href="https://www.linkedin.com/in/sarayut-thanakham-802a962b6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex items-center gap-2 border border-rule px-4 py-2.5 text-sm text-text transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
              >
                <FiLinkedin size={17} />
                <FiArrowUpRight size={14} className="transition-transform duration-500 ease-editorial group-hover:rotate-45" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <form onSubmit={handleSubmit} className="space-y-10">
              <Field label="Your Name" name="name" index="01">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your name or Email"
                />
              </Field>
              <Field label="Your Email" name="email" index="02">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Mail@example.com"
                />
              </Field>
              <Field label="Message" name="message" index="03">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Your message..."
                />
              </Field>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden bg-text px-8 py-4 text-sm font-medium text-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100 group-disabled:scale-x-0"
                  />
                  <span className="relative">{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                  <FiSend
                    size={16}
                    className={`relative transition-transform duration-500 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1 ${status === 'sending' ? 'animate-pulse' : ''}`}
                  />
                </button>

                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.p
                      key="success"
                      role="status"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="max-w-xs text-sm text-moss"
                    >
                      Message sent! Thank you for reaching out. I'll get back to you soon.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      key="error"
                      role="alert"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="max-w-xs text-sm text-accent"
                    >
                      Something went wrong. Please try again or email me directly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
