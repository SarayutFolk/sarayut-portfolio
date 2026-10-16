import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <a href="#home" className="text-2xl font-bold text-accent">
              ST<span className="text-text">.</span>
            </a>
            <p className="mt-1 text-sm text-text-faint">Software Developer</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/SarayutFolk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-all hover:scale-110 hover:text-accent"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sarayut-thanakham-802a962b6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-all hover:scale-110 hover:text-accent"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:folk446@gmail.com"
              className="text-text-muted transition-all hover:scale-110 hover:text-accent"
            >
              <FiMail size={20} />
            </a>
          </div>

          
        </div>
      </div>
    </footer>
  );
}