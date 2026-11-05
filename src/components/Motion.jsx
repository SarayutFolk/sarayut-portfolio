import { motion } from 'framer-motion';

// One easing curve for the whole site: quick out, long settle.
const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: '0px 0px -12% 0px' };

/** Fades + lifts its children into place when scrolled into view. */
export function Reveal({ children, className, delay = 0, y = 28, as = 'div', ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Parent that staggers any <RevealItem> children. */
export function Stagger({ children, className, delay = 0, gap = 0.07, as = 'div' }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ children, className, as = 'div', y = 18, ...rest }) {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Word-by-word masked reveal: each word slides up from behind its own line mask.
 * The full string is kept for assistive tech; the animated copy is aria-hidden.
 */
export function MaskText({ text, className = '', delay = 0, stagger = 0.06, onMount = false }) {
  const words = text.split(' ');
  const trigger = onMount
    ? { animate: { y: '0%' } }
    : { whileInView: { y: '0%' }, viewport: VIEWPORT };

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <span className="-mx-[0.12em] -mb-[0.12em] inline-block overflow-hidden px-[0.12em] pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block will-change-transform"
                initial={{ y: '105%' }}
                {...trigger}
                transition={{ duration: 1, ease: EASE, delay: delay + i * stagger }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </span>
    </span>
  );
}

/** A hairline that draws itself from left to right. */
export function Rule({ className = '', delay = 0 }) {
  return (
    <motion.div
      aria-hidden="true"
      className={`h-px origin-left bg-rule ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: 1.4, ease: EASE, delay }}
    />
  );
}

/**
 * Left-aligned editorial section header:
 *   (01) — EYEBROW
 *   Title *Emphasis*
 *   ───────────────
 */
export function SectionHeading({ index, eyebrow, title, emphasis, className = '' }) {
  return (
    <header className={`mb-14 md:mb-20 ${className}`}>
      <Reveal y={12} className="label-mono flex items-center gap-3 text-text-muted">
        <span className="text-accent">({index})</span>
        <span aria-hidden="true" className="h-px w-8 bg-rule" />
        <span>{eyebrow}</span>
      </Reveal>
      <h2 className="font-display mt-6 text-[clamp(2.6rem,6.5vw,5.75rem)] font-normal leading-[0.95] tracking-[-0.025em] text-text">
        <MaskText text={title} />{' '}
        <em className="font-light italic text-accent">
          <MaskText text={emphasis} delay={0.12} />
        </em>
      </h2>
      <Rule className="mt-10" delay={0.2} />
    </header>
  );
}
