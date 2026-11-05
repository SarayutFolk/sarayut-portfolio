import { useState, useEffect, useRef } from 'react';
import { motion, animate, useInView, useReducedMotion } from 'framer-motion';
import { FiBriefcase, FiZap, FiDatabase } from 'react-icons/fi';

const EASE = [0.22, 1, 0.36, 1];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: reduce ? 0 : 1.8,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix && <span className="text-accent">{suffix}</span>}
    </span>
  );
}

const stats = [
  { icon: <FiBriefcase />, value: 2, suffix: '+', label: 'Years of Experience' },
  { icon: <FiZap />, value: 15, suffix: '+', label: 'Reports Automated' },
  { icon: <FiDatabase />, value: 7, suffix: '', label: 'Oracle EBS Modules' },
];

// Inverted band: flips the page's ink and paper for one strong typographic moment.
export default function Stats() {
  return (
    <section aria-label="Highlights" className="relative bg-text text-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-1 px-5 sm:grid-cols-3 sm:px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ delay: i * 0.12, duration: 0.9, ease: EASE }}
            className="group flex flex-col justify-between gap-10 border-primary/15 py-10 sm:border-l sm:px-8 sm:py-14 sm:first:border-l-0 sm:first:pl-0 max-sm:border-t max-sm:first:border-t-0"
          >
            <div className="flex items-center justify-between">
              <span className="label-mono text-primary/55">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-lg text-primary/50 transition-all duration-500 ease-editorial group-hover:-rotate-12 group-hover:text-accent">
                {stat.icon}
              </span>
            </div>
            <div>
              <p className="font-display text-[clamp(4rem,9vw,7.5rem)] font-light leading-none tracking-[-0.04em]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="label-mono mt-4 text-primary/70">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
