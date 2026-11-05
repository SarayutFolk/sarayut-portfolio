import { FiCode, FiDatabase, FiTool, FiZap, FiUser, FiBriefcase, FiMail, FiPhone, FiMapPin, FiGlobe, FiGithub, FiLinkedin } from 'react-icons/fi';
import Profile1 from '../assets/Profile1.jpg';
import { Reveal, Stagger, RevealItem, SectionHeading } from './Motion';

const highlights = [
  { icon: <FiCode />, label: 'Automation' },
  { icon: <FiDatabase />, label: 'Oracle DB' },
  { icon: <FiZap />, label: 'RPA & Process' },
  { icon: <FiTool />, label: 'Microsoft 365' },
];

const quickInfo = [
  { label: 'Name', value: 'Sarayut Thanakham', icon: <FiUser />, href: null },
  { label: 'Role', value: 'Software Developer', icon: <FiBriefcase />, href: null },
  { label: 'Email', value: 'folk446@gmail.com', icon: <FiMail />, href: 'mailto:folk446@gmail.com' },
  { label: 'Phone', value: '083-473-3264', icon: <FiPhone />, href: 'tel:0834733264' },
  { label: 'Location', value: 'Bangkok, Thailand', icon: <FiMapPin />, href: null },
  { label: 'Languages', value: 'Thai (Native), English (Intermediate)', icon: <FiGlobe />, href: null },
];

const socialLinks = [
  { icon: <FiGithub />, href: 'https://github.com/SarayutFolk', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/sarayut-thanakham-802a962b6', label: 'LinkedIn' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="01" eyebrow="About Me" title="Professional" emphasis="Summary" />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7 lg:pr-10">
            <Reveal>
              <p className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-light leading-[1.3] tracking-[-0.01em] text-text">
                Software Developer with experience in Oracle Database and PL/SQL on Oracle
                E-Business Suite, Python-based automation integrated with enterprise systems,
                and front-end development with React, Next.js, and Tailwind CSS.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary md:ml-[12%] md:text-[1.0625rem]">
                Built tools that automated about 15 recurring reports, saving around 20 minutes
                of manual work per report. Experienced in both application development and system
                support, with a strong interest in automation and process improvement.
              </p>
            </Reveal>

            <Stagger as="ul" className="mt-14 grid grid-cols-2 border-t border-rule md:ml-[12%]" delay={0.1}>
              {highlights.map((item, i) => (
                <RevealItem
                  as="li"
                  key={item.label}
                  className="group flex items-center gap-3 border-b border-rule py-5 odd:pr-4 even:border-l even:pl-5"
                >
                  <span className="font-mono text-[0.65rem] text-text-faint">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-base text-text-muted transition-colors duration-300 group-hover:text-accent">{item.icon}</span>
                  <span className="text-sm font-medium text-text-secondary transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                    {item.label}
                  </span>
                </RevealItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.15} className="lg:col-span-5 lg:mt-24">
            <aside className="relative border border-rule bg-secondary p-6 sm:p-8">
              <span aria-hidden="true" className="absolute -top-px left-8 h-px w-16 bg-accent" />

              <div className="mb-8 flex items-center gap-5">
                <div className="h-16 w-16 shrink-0 overflow-hidden">
                  <img
                    src={Profile1}
                    alt="Sarayut Thanakham"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-editorial hover:scale-105 hover:grayscale-0"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-text">Quick Info</h3>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
                    </span>
                    <span className="label-mono text-moss">Open to Work</span>
                  </div>
                </div>
              </div>

              <dl>
                {quickInfo.map((item) => (
                  <div key={item.label} className="grid grid-cols-[7.5rem_1fr] items-baseline gap-3 border-t border-rule py-3.5">
                    <dt className="label-mono flex items-center gap-2 text-text-faint">
                      <span className="text-text-muted">{item.icon}</span>
                      {item.label}
                    </dt>
                    <dd className="text-right text-sm text-text-secondary">
                      {item.href ? (
                        <a href={item.href} className="link-draw hover:text-accent">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 flex gap-2 border-t border-rule pt-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center border border-rule text-text-muted transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-ink"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
