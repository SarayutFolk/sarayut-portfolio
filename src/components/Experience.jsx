import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const experiences = [
  {
    company: 'Krungthai Card Public Company Limited',
    role: 'Developer',
    team: 'Internal Controlling & Monitoring',
    duration: 'June 2026 - Present',
    type: 'Permanent',
    accent: 'from-blue-500 to-indigo-500',
    responsibilities: [
      'Developed automation tools using Python, Power Automate Cloud, and Microsoft 365',
      'Automated data processing and workflow for operational monitoring',
      'Developed data processing solutions using Microsoft Access and SQL',
      'Created automated alert and notification workflows',
      'Supported monitoring, reporting, and process improvement',
    ],
  },
  {
    company: 'MCR Consulting Co. Ltd',
    role: 'Developer',
    team: 'Technical',
    duration: 'Mar 2025 - May 2026',
    type: 'Permanent',
    accent: 'from-fuchsia-500 to-purple-500',
    responsibilities: [
      'Developed SQL/PLSQL programs for Oracle Database',
      'Supported Oracle E-Business Suite (AR, AP, FA, GL, PO, PR, and HR)',
      'Created reports and BI Publisher XML reports',
      'Maintained Value Sets and Flexfields',
      'Assisted with production issue resolution',
      'Supported testing and system documentation',
    ],
  },
  {
    company: 'Bangkok MSP Company Limited',
    role: 'SOC Analyst (T1)',
    team: 'Security Operations Center',
    duration: 'August 2024 - Feb 2025',
    type: 'Permanent',
    accent: 'from-emerald-500 to-teal-500',
    responsibilities: [
      'Monitored and analyzed security alerts using SIEM',
      'Performed initial incident triage and escalation',
      'Investigated basic security incidents and phishing alerts',
      'Documented incidents according to SOC procedures',
    ],
  },
  {
    company: 'We Wasana D Company Limited',
    role: 'Front-end Developer (Intern)',
    team: 'Developer',
    duration: 'June 2022 - July 2022',
    type: 'Internship',
    accent: 'from-amber-500 to-orange-500',
    responsibilities: [
      'Responsive Web Design',
      'Single Page Application (SPA) Development',
      'Front-end Architecture Design',
      'Performance Optimization',
      'Component-Based Development',
      'Problem Solving and Debugging',
      'Team Collaboration and Communication',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 bg-secondary">
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-glow/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">Experience</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Work <span className="bg-gradient-to-r from-accent to-glow bg-clip-text text-transparent">History</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-glow to-transparent md:left-8" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2 top-1 flex h-4 w-4 items-center justify-center md:left-6">
                  <div className={`h-4 w-4 rounded-full bg-gradient-to-br ${exp.accent}`} />
                  <div className="absolute h-4 w-4 animate-ping rounded-full bg-accent/30" />
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 backdrop-blur-xl transition-all duration-300 hover:border-accent/40">
                  <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${exp.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`} />

                  <div className="relative mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-text">{exp.company}</h3>
                      <p className={`font-medium bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent`}>{exp.role}</p>
                    </div>
                    <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {exp.type}
                    </span>
                  </div>

                  <div className="relative mb-4 flex flex-wrap gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1"><FiBriefcase size={14} /> {exp.team}</span>
                    <span className="flex items-center gap-1"><FiCalendar size={14} /> {exp.duration}</span>
                  </div>

                  <ul className="relative space-y-2">
                    {exp.responsibilities.map((r, ri) => (
                      <li key={ri} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className={`mt-1.5 text-xs bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent`}>●</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}