import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTool, FiZap } from 'react-icons/fi';

const highlights = [
  { icon: <FiCode />, label: 'Automation' },
  { icon: <FiDatabase />, label: 'Oracle DB' },
  { icon: <FiZap />, label: 'RPA & Process' },
  { icon: <FiTool />, label: 'Microsoft 365' },
];

const quickInfo = [
  { label: 'Name', value: 'Sarayut Thanakham' },
  { label: 'Title', value: 'Computer Science Developer' },
  { label: 'Email', value: 'folk446@gmail.com' },
  { label: 'Phone', value: '083-473-3264' },
  { label: 'Location', value: 'Bangkok, Thailand' },
  { label: 'Languages', value: 'Thai, English' },
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
              Software Developer with experience in Oracle Database, PL/SQL, Microsoft 365,
              and Process Automation. Skilled in developing automation solutions using Python,
              Power Automate Cloud, Microsoft Access, and Batch Script to improve operational
              processes, data processing, and monitoring workflows.
            </p>
            <p className="text-lg leading-relaxed text-text-secondary">
              Experienced in both application development and system support, with a strong
              interest in Automation, RPA, and Process Improvement. I enjoy building tools
              that make work more efficient and reliable.
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
            <h3 className="mb-6 text-xl font-semibold text-text">Quick Info</h3>
            <div className="space-y-4">
              {quickInfo.map((item, i) => (
                <div key={i} className="flex justify-between border-b border-border pb-2">
                  <span className="text-sm text-text-faint">{item.label}</span>
                  <span className="text-sm font-medium text-text-secondary">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}