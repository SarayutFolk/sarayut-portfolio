import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';

const education = [
  {
    school: 'Srinakharinwirot University',
    degree: 'Bachelor of Computer Science',
    department: 'Department of Computer Science',
    duration: '2019 - 2022',
    gpax: null,
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    school: 'Chiang Rai Municipality School 6',
    degree: 'Science and Mathematics',
    department: '',
    duration: '2016 - 2018',
    gpax: '3.50',
    accent: 'from-emerald-500 to-teal-500',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-24 bg-primary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-aurora" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-glow/10 blur-3xl animate-aurora [animation-delay:3s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent">Education</p>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Academic <span className="bg-gradient-to-r from-accent to-glow bg-clip-text text-transparent">Background</span>
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 backdrop-blur-xl transition-all duration-300 hover:border-accent/40"
            >
              <div className={`absolute -top-14 -right-14 h-36 w-36 rounded-full bg-gradient-to-br ${edu.accent} opacity-10 blur-3xl transition-opacity group-hover:opacity-25`} />

              <div className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${edu.accent} bg-clip-padding text-white/90 transition-transform group-hover:scale-110`}>
                <FiBookOpen size={28} />
              </div>

              <h3 className="relative mb-2 text-lg font-bold text-text">{edu.school}</h3>
              <p className={`relative mb-1 font-medium bg-gradient-to-r ${edu.accent} bg-clip-text text-transparent`}>{edu.degree}</p>
              {edu.department && (
                <p className="relative mb-4 text-sm text-text-muted">{edu.department}</p>
              )}
              {!edu.department && <div className="relative mb-4" />}

              <div className="relative flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm text-text-muted">{edu.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}