import {
  SiPython, SiJavascript, SiTailwindcss, SiGithub, SiPostman,
} from 'react-icons/si';
import { FiDatabase, FiTerminal, FiCode, FiCloud, FiMonitor, FiGrid, FiCheckCircle, FiGitBranch, FiClock, FiList } from 'react-icons/fi';
import { BsBarChart } from 'react-icons/bs';
import { Reveal, Stagger, RevealItem, SectionHeading } from './Motion';

const categories = [
  {
    title: 'Programming',
    description: 'Languages & scripting',
    skills: [
      { name: 'Python (Selenium)', icon: <SiPython /> },
      { name: 'SQL / PL-SQL', icon: <FiDatabase /> },
      { name: 'Batch Script', icon: <FiTerminal /> },
      { name: 'VBA / VBS', icon: <FiCode /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'CSS / Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'HTML', icon: <FiCode /> },
    ],
  },
  {
    title: 'Automation & Tools',
    description: 'Efficiency & integration',
    skills: [
      { name: 'Power Automate Cloud', icon: <FiCloud /> },
      { name: 'Windows Task Scheduler', icon: <FiClock /> },
      { name: 'BI Publisher', icon: <BsBarChart /> },
      { name: 'Git / GitKraken', icon: <FiGitBranch /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Visual Studio Code', icon: <FiCode /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
  {
    title: 'Microsoft & Database',
    description: 'Data platforms & BI',
    skills: [
      { name: 'Microsoft 365', icon: <FiMonitor /> },
      { name: 'Microsoft Access', icon: <FiGrid /> },
      { name: 'SharePoint Lists', icon: <FiList /> },
      { name: 'Oracle Database', icon: <FiDatabase /> },
      { name: 'Oracle E-Business Suite', icon: <FiDatabase /> },
    ],
  },
];

// Columns step down the page for a staggered, ledger-like rhythm.
const columnOffset = ['', 'md:mt-16', 'md:mt-32'];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="02" eyebrow="Skills" title="Technical" emphasis="Expertise" />

        <div className="grid gap-14 md:grid-cols-3 md:gap-10 lg:gap-14">
          {categories.map((cat, ci) => (
            <div key={cat.title} className={columnOffset[ci]}>
              <Reveal delay={ci * 0.08} className="mb-6">
                <p className="font-mono text-xs text-accent">{String.fromCharCode(65 + ci)}.</p>
                <h3 className="font-display mt-3 text-[1.75rem] leading-tight tracking-[-0.01em] text-text">{cat.title}</h3>
                <p className="label-mono mt-2 text-text-faint">{cat.description}</p>
              </Reveal>

              <Stagger as="ul" className="border-t border-text/80" delay={0.1 + ci * 0.08} gap={0.05}>
                {cat.skills.map((skill) => (
                  <RevealItem
                    as="li"
                    key={skill.name}
                    y={10}
                    className="group/skill relative flex items-center gap-3 border-b border-rule py-3.5"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-0.5 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-editorial group-hover/skill:scale-y-100"
                    />
                    <span className="text-base text-text-faint transition-all duration-500 ease-editorial group-hover/skill:translate-x-3 group-hover/skill:text-accent">
                      {skill.icon}
                    </span>
                    <span className="flex-1 text-[0.95rem] text-text-secondary transition-all duration-500 ease-editorial group-hover/skill:translate-x-3 group-hover/skill:text-text">
                      {skill.name}
                    </span>
                    <FiCheckCircle
                      className="shrink-0 -translate-x-2 text-accent opacity-0 transition-all duration-500 ease-editorial group-hover/skill:translate-x-0 group-hover/skill:opacity-100"
                      size={15}
                    />
                  </RevealItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
