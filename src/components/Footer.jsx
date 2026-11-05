import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const links = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/SarayutFolk', label: 'GitHub', external: true },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/sarayut-thanakham-802a962b6', label: 'LinkedIn', external: true },
  { icon: <FiMail size={18} />, href: 'mailto:folk446@gmail.com', label: 'Email', external: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-primary py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <a href="#home" className="group inline-flex items-baseline font-display text-5xl tracking-tight text-text">
              ST
              <span className="text-accent transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">.</span>
            </a>
            <p className="label-mono mt-3 text-text-faint">Software Developer</p>
          </div>

          <div className="flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                aria-label={l.label}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-11 w-11 items-center justify-center text-text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
