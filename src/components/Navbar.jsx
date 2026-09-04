import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

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
  const [active, setActive] = useState('#home');
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    const sections = navLinks.map((l) =>
      document.querySelector(l.href)
    );

    const onScroll = () => {
      const pos = window.scrollY + 120;
      let current = '#home';
      sections.forEach((section, i) => {
        if (section && section.offsetTop <= pos) current = navLinks[i].href;
      });
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-5xl rounded-2xl ${
        scrolled
          ? 'bg-surface-strong/60 backdrop-blur-xl border border-border shadow-lg shadow-black/10 py-2'
          : 'bg-transparent border border-transparent py-2'
      }`}
    >
      <div className="px-5">
        <div className="flex items-center justify-between h-12">
          <a href="#home" className="text-accent font-bold text-xl tracking-tight">
            ST<span className="text-text">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  active === link.href
                    ? 'text-text bg-surface-strong'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-all hover:border-accent/50 hover:text-accent"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-text-muted hover:text-accent transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-3 pt-1 space-y-1 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  active === link.href
                    ? 'text-text bg-surface-strong'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}