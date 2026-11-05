import { useState, useEffect, useRef } from 'react';
import {
  motion, AnimatePresence, useReducedMotion, useScroll, useTransform,
} from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload, FiArrowDown, FiArrowUpRight,
} from 'react-icons/fi';
import Profile1 from '../assets/Profile1.jpg';
import Profile2 from '../assets/Profile2.jpg';
import Profile3 from '../assets/Profile3.jpg';
import ResumePdf from '../assets/Resume.pdf';
import { MaskText } from './Motion';

const profileImages = [Profile1, Profile2, Profile3];
const SLIDE_MS = 3000;
const EASE = [0.22, 1, 0.36, 1];

const enter = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

function ProfileCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % profileImages.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [paused, index]);

  // New portrait wipes up over the previous one (plain crossfade for reduced motion).
  const slide = reduce
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, zIndex: 2 },
        exit: { opacity: 0, zIndex: 1 },
      }
    : {
        initial: { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.12, zIndex: 2 },
        animate: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, zIndex: 2 },
        exit: { zIndex: 1, scale: 1.04, transition: { duration: 1.1, ease: EASE } },
      };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
      className="group relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        {/* Offset keyline behind the frame */}
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-3 translate-y-3 border border-accent/60 transition-transform duration-700 ease-editorial group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        />

        <div className="relative aspect-[4/5] overflow-hidden bg-surface">
          <AnimatePresence initial={false}>
            <motion.img
              key={index}
              src={profileImages[index]}
              alt="Sarayut Thanakham"
              {...slide}
              transition={{ duration: 1.1, ease: EASE }}
              className="absolute inset-0 h-full w-full object-cover [filter:saturate(0.9)_contrast(1.04)]"
              decoding="async"
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pb-4 pt-16">
            <h3 className="font-display text-xl text-white">Sarayut Thanakham</h3>
            <p className="label-mono mt-1 text-white/70">Software Developer</p>
          </div>
        </div>
      </div>

      <figcaption className="relative mt-8 flex items-center justify-between gap-4">
        <span className="label-mono text-text-faint">
          Fig. <span className="text-text">{String(index + 1).padStart(2, '0')}</span> / {String(profileImages.length).padStart(2, '0')}
        </span>
        <div className="flex items-center gap-4">
          {profileImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Profile ${i + 1}`}
              aria-current={i === index}
              className="group/dot flex flex-col items-start gap-1.5 py-1"
            >
              <span className={`font-mono text-[0.65rem] transition-colors ${i === index ? 'text-text' : 'text-text-faint group-hover/dot:text-text-muted'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="relative block h-px w-8 overflow-hidden bg-rule">
                {i === index && (
                  <motion.span
                    key={`${index}-${paused}`}
                    className="absolute inset-0 origin-left bg-accent"
                    initial={{ scaleX: paused ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: paused ? 0 : SLIDE_MS / 1000, ease: 'linear' }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </figcaption>
    </motion.figure>
  );
}

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/SarayutFolk', label: 'GitHub', external: true },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/sarayut-thanakham-802a962b6', label: 'LinkedIn', external: true },
  { icon: <FiMail size={18} />, href: 'mailto:folk446@gmail.com', label: 'Email', external: false },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const nameY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 pb-14 md:pt-32"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-12 gap-x-6 gap-y-14 px-5 sm:px-8">
        <motion.div style={{ y: nameY }} className="col-span-12 flex flex-col lg:col-span-7">
          <motion.p {...enter(0)} className="label-mono flex items-center gap-3 text-text-muted">
            <span className="inline-block h-1.5 w-1.5 bg-accent" />
            Welcome to my portfolio
          </motion.p>

          <h1 className="font-display mt-8 text-[clamp(3.6rem,9vw,8.5rem)] font-normal leading-[0.86] tracking-[-0.04em] text-text">
            <MaskText text="Sarayut" onMount delay={0.1} className="block" />
            <span className="block pl-[0.55em] font-light italic text-accent">
              <MaskText text="Thanakham" onMount delay={0.22} />
            </span>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-[auto_1fr] md:gap-10">
            <motion.h2 {...enter(0.45)} className="label-mono whitespace-nowrap pt-1 text-text">
              Software Developer
            </motion.h2>
            <motion.p {...enter(0.55)} className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-[1.0625rem]">
              Software Developer with experience in Oracle Database and PL/SQL on Oracle
              E-Business Suite, Python-based automation integrated with enterprise systems,
              and front-end development with React, Next.js, and Tailwind CSS.
            </motion.p>
          </div>

          <motion.div {...enter(0.7)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href="#experience"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-text px-7 py-4 text-sm font-medium text-primary"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100"
              />
              <span className="relative">View Experience</span>
              <FiArrowUpRight className="relative transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-45" />
            </a>
            <a
              href={ResumePdf}
              download="Resume_Sarayut_Thanakham.pdf"
              className="link-draw inline-flex items-center gap-2 pb-1 text-sm font-medium text-text hover:text-accent"
            >
              <FiDownload size={16} />
              Download Resume
            </a>
            <a href="#contact" className="link-draw pb-1 text-sm font-medium text-text-secondary hover:text-accent">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: portraitY }} className="col-span-12 lg:col-span-5 lg:pt-6">
          <ProfileCarousel />
        </motion.div>
      </div>

      <motion.div
        {...enter(0.9)}
        className="relative z-10 mx-auto mt-14 w-full max-w-7xl px-5 sm:px-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-rule pt-5">
          <a href="#about" className="group label-mono flex items-center gap-3 text-text-muted hover:text-accent">
            <span className="relative block h-8 w-px overflow-hidden bg-rule">
              <span className="absolute inset-0 bg-accent animate-scroll-cue" />
            </span>
            Scroll
            <FiArrowDown className="transition-transform duration-500 ease-editorial group-hover:translate-y-0.5" />
          </a>

          <div className="flex flex-wrap items-center gap-6">
            <span className="label-mono flex items-center gap-2 text-text-muted">
              <FiMapPin size={13} /> Bangkok, Thailand
            </span>
            <span aria-hidden="true" className="hidden h-4 w-px bg-rule sm:block" />
            <div className="flex items-center gap-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex h-10 w-10 items-center justify-center text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
