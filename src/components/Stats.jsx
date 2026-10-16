import { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { FiBriefcase, FiZap, FiDatabase } from 'react-icons/fi';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="bg-gradient-to-r from-accent to-glow bg-clip-text text-transparent">
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: <FiBriefcase />,
    value: 2,
    suffix: '+',
    label: 'Years of Experience',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <FiZap />,
    value: 15,
    suffix: '+',
    label: 'Reports Automated',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <FiDatabase />,
    value: 7,
    suffix: '',
    label: 'Oracle EBS Modules',
    accent: 'from-amber-500 to-orange-500',
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-16 bg-secondary">
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-glow/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-accent/5"
            >
              <div className={`absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${stat.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`} />

              <div className={`relative mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-transform group-hover:scale-110`}>
                {stat.icon}
              </div>
              <p className="relative text-4xl font-bold sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="relative mt-2 text-sm text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}