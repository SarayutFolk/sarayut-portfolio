import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail, FiMapPin, FiDownload, FiArrowDown,
} from 'react-icons/fi';
import folkImg from '../assets/folk-img.jpg';
import ResumePdf from '../assets/Resume.pdf';

function GridPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full text-text/[0.04] [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
      aria-hidden="true"
    >
      <defs>
        <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
  );
}

function Spotlight() {
  const ref = useRef(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      setXY({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener('mousemove', handleMove);
    return () => el.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -inset-px opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${xy.x}px ${xy.y}px, rgba(59,130,246,0.15), transparent 60%)`,
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary pt-20">
      {/* Animated aurora background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-3xl animate-aurora" />
        <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-glow/20 blur-3xl animate-aurora [animation-delay:2s]" />
        <div className="absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-3xl animate-aurora [animation-delay:4s]" />
        <GridPattern />
        <Spotlight />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto inline-block"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent via-glow to-fuchsia-500 blur opacity-60 animate-pulse" />
            <img
              src={folkImg}
              alt="Sarayut Thanakham"
              className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full border-4 border-border object-cover"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-4 font-mono text-sm tracking-widest text-accent uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-7xl"
        >
          <span className="bg-gradient-to-r from-text via-text to-text-muted bg-clip-text text-transparent">
            Sarayut Thanakham
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 text-xl font-light sm:text-2xl md:text-3xl"
        >
          <span className="bg-gradient-to-r from-accent via-glow to-fuchsia-500 bg-clip-text text-transparent">
            Computer Science Developer
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base"
        >
          Software Developer with experience in Oracle Database, PL/SQL, Microsoft 365,
          and Process Automation. Skilled in developing automation solutions to improve
          operational processes and monitoring workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#experience"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-glow px-8 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-105"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-[length:200%_100%] animate-shimmer"
            />
            <span className="relative">View Experience</span>
          </a>
          <a
            href={ResumePdf}
            download="Resume_Sarayut_Thanakham.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-8 py-3 font-semibold text-text backdrop-blur transition-colors hover:border-accent/50 hover:bg-accent/10"
          >
            <FiDownload size={18} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-text-secondary transition-colors hover:text-accent"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a href="https://github.com/SarayutFolk" target="_blank" rel="noopener noreferrer"
            className="rounded-full border border-border bg-surface p-3 text-text-muted transition-all hover:border-accent/50 hover:text-accent">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sarayut-thanakham-802a962b6" target="_blank" rel="noopener noreferrer"
            className="rounded-full border border-border bg-surface p-3 text-text-muted transition-all hover:border-accent/50 hover:text-accent">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:folk446@gmail.com"
            className="rounded-full border border-border bg-surface p-3 text-text-muted transition-all hover:border-accent/50 hover:text-accent">
            <FiMail size={20} />
          </a>
          <span className="flex items-center gap-1 text-sm text-text-muted">
            <FiMapPin size={16} /> Bangkok, Thailand
          </span>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted transition-colors hover:text-accent"
      >
        <FiArrowDown size={24} className="animate-bounce" />
      </motion.a>
    </section>
  );
}