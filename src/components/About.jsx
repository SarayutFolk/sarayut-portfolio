import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTool, FiZap, FiUser, FiBriefcase, FiMail, FiPhone, FiMapPin, FiGlobe, FiGithub, FiLinkedin } from 'react-icons/fi';
import Profile1 from '../assets/Profile1.jpg';

const highlights = [
  { icon: <FiCode />, label: 'Automation' },
  { icon: <FiDatabase />, label: 'Oracle DB' },
  { icon: <FiZap />, label: 'RPA & Process' },
  { icon: <FiTool />, label: 'Microsoft 365' },
];

const quickInfo = [
  { label: 'Name', value: 'Sarayut Thanakham', icon: <FiUser />, href: null },
  { label: 'Role', value: 'Software Developer', icon: <FiBriefcase />, href: null },
  { label: 'Email', value: 'folk446@gmail.com', icon: <FiMail />, href: 'mailto:folk446@gmail.com' },
  { label: 'Phone', value: '083-473-3264', icon: <FiPhone />, href: 'tel:0834733264' },
  { label: 'Location', value: 'Bangkok, Thailand', icon: <FiMapPin />, href: null },
  { label: 'Languages', value: 'Thai (Native), English (Intermediate)', icon: <FiGlobe />, href: null },
];

const socialLinks = [
  { icon: <FiGithub />, href: 'https://github.com/SarayutFolk', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/sarayut-thanakham-802a962b6', label: 'LinkedIn' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-secondary">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-glow/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">About Me</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Professional <span className="bg-gradient-to-r from-accent to-glow bg-clip-text text-transparent">Summary</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-text-secondary">
              Software Developer with experience in Oracle Database and PL/SQL on Oracle
              E-Business Suite, Python-based automation integrated with enterprise systems,
              and front-end development with React, Next.js, and Tailwind CSS.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Built tools that automated about 15 recurring reports, saving around 20 minutes
              of manual work per report. Experienced in both application development and system
              support, with a strong interest in automation and process improvement.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3 backdrop-blur transition-colors hover:border-accent/40 hover:bg-accent/10"
                >
                  <span className="text-xl text-accent">{item.icon}</span>
                  <span className="text-sm font-medium text-text-secondary">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-2xl border border-border bg-surface p-8 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <img
                src={Profile1}
                alt="Sarayut Thanakham"
                loading="lazy"
                decoding="async"
                className="h-16 w-16 rounded-2xl border border-border object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-text">Quick Info</h3>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-medium text-emerald-300">Open to Work</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {quickInfo.map((item, i) => (
                <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-b-0 last:pb-0">
                  <span className="flex items-center gap-2 text-sm text-text-faint">
                    <span className="text-accent">{item.icon}</span>
                    {item.label}
                  </span>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-text-secondary transition-colors hover:text-accent">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-text-secondary">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/10"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}