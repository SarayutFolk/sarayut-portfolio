import { useState } from 'react';
import {
  motion, AnimatePresence, useScroll, useMotionValueEvent,
} from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const EASE = [0.22, 1, 0.36, 1];

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setShow(y > 400));

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: EASE }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-text shadow-[0_0_0_1px_var(--rule)] transition-colors duration-300 hover:bg-text hover:text-primary"
        >
          {/* Ring fills with reading progress */}
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
            <motion.circle
              cx="24"
              cy="24"
              r="23"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <FiArrowUp size={18} className="relative transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
