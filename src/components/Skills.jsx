import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTailwindcss, SiGithub, SiPostman,
} from 'react-icons/si';
import { FiDatabase, FiTerminal, FiCode, FiCloud, FiMonitor, FiGrid, FiFileText, FiCheckCircle, FiNavigation2 } from 'react-icons/fi';
import { TbSql } from 'react-icons/tb';

const categories = [
  {
    title: 'Programming',
    description: 'Languages & scripting',
    accent: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'SQL / PL-SQL', icon: <FiDatabase /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Batch Script', icon: <FiTerminal /> },
      { name: 'VBA / VBS', icon: <FiCode /> },
      { name: 'HTML', icon: <FiCode /> },
      { name: 'CSS / Tailwind', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Automation & Tools',
    description: 'Efficiency & integration',
    accent: 'from-fuchsia-500 to-purple-500',
    skills: [
      { name: 'Power Automate Cloud', icon: <FiCloud /> },
      { name: 'Selenium', icon: <SiPython /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'VS Code', icon: <FiCode /> },
      { name: 'SQL Developer', icon: <TbSql /> },
      { name: 'SQL Navigator', icon: <FiNavigation2 /> },
    ],
  },
  {
    title: 'Microsoft & Database',
    description: 'Data platforms & BI',
    accent: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Microsoft 365', icon: <FiMonitor /> },
      { name: 'Microsoft Access', icon: <FiGrid /> },
      { name: 'SharePoint', icon: <FiFileText /> },
      { name: 'Oracle Database', icon: <FiDatabase /> },
      { name: 'BI Publisher', icon: <FiDatabase /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 bg-primary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl animate-aurora" />
        <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-glow/10 blur-3xl animate-aurora [animation-delay:3s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">Skills</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Technical <span className="bg-gradient-to-r from-accent to-glow bg-clip-text text-transparent">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.6 }}
              className="relative group overflow-hidden rounded-2xl border border-border bg-surface p-6 backdrop-blur-xl transition-all duration-300 hover:border-accent/40"
            >
              <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${cat.accent} opacity-10 blur-3xl transition-opacity group-hover:opacity-25`} />

              <div className="relative mb-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-text">
                  <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${cat.accent}`} />
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-text-faint">{cat.description}</p>
              </div>

              <div className="relative space-y-3">
                {cat.skills.map((skill, si) => (
                  <div
                    key={si}
                    className="group/skill flex items-center gap-3 rounded-xl border border-border bg-surface p-3 transition-all duration-200 hover:border-accent/40 hover:bg-accent/5"
                  >
                    <span className="text-xl text-accent transition-transform group-hover/skill:scale-110">{skill.icon}</span>
                    <span className="flex-1 text-sm font-medium text-text-secondary">{skill.name}</span>
                    <FiCheckCircle className="flex-shrink-0 text-accent/0 transition-colors group-hover/skill:text-accent" size={16} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}