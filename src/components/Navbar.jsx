import { useState, useEffect } from 'react';
import {
  motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent,
} from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const EASE = [0.22, 1, 0.36, 1];
const pad = (n) => String(n).padStart(2, '0');

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('#home');
  const [theme, setTheme] = useTheme();

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  // Tuck the bar away while reading downward, bring it back on any upward scroll.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 320);
  });

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));

    const onScroll = () => {
      const pos = window.scrollY + 140;
      let current = '#home';
      sections.forEach((section, i) => {
        if (section && section.offsetTop <= pos) current = navLinks[i].href;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        animate={{ y: hidden && !isOpen ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || isOpen ? 'bg-primary/95 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="group flex items-baseline gap-1 font-display text-2xl tracking-tight text-text">
            <span>ST</span>
            <span className="text-accent transition-transform duration-500 ease-editorial group-hover:translate-x-1">.</span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link, i) => {
              const isActive = active === link.href;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`group relative flex items-baseline gap-1.5 py-2 text-sm transition-colors duration-300 ${
                      isActive ? 'text-text' : 'text-text-muted hover:text-text'
                    }`}
                  >
                    <span className={`font-mono text-[0.65rem] transition-colors ${isActive ? 'text-accent' : 'text-text-faint group-hover:text-accent'}`}>
                      {pad(i)}
                    </span>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full text-text-muted transition-colors hover:text-accent"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ y: 14, opacity: 0, rotate: -40 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -14, opacity: 0, rotate: 40 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="flex"
                >
                  {theme === 'dark' ? <FiSun size={17} /> : <FiMoon size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="label-mono flex h-10 items-center gap-2 pl-2 text-text md:hidden"
            >
              <span>{isOpen ? 'Close' : 'Menu'}</span>
              <span className="relative block h-2.5 w-5" aria-hidden="true">
                <span className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ease-editorial ${isOpen ? 'top-1/2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ease-editorial ${isOpen ? 'top-1/2 -rotate-45' : 'top-full'}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <div className="relative h-px bg-rule/60">
          <motion.div style={{ scaleX: progress }} className="absolute inset-0 origin-left bg-accent" />
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-primary px-5 pt-24 pb-10 md:hidden"
          >
            <motion.ul
              className="flex-1 space-y-1"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                  className="border-b border-rule"
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-baseline gap-4 py-3 font-display text-4xl tracking-tight ${
                      active === link.href ? 'italic text-accent' : 'text-text'
                    }`}
                  >
                    <span className="font-mono text-xs not-italic text-text-faint">{pad(i)}</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
