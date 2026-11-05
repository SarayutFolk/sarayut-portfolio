import { FiBriefcase, FiCalendar, FiTool } from 'react-icons/fi';
import { Reveal, Stagger, RevealItem, Rule, SectionHeading } from './Motion';

const experiences = [
  {
    company: 'Krungthai Card Public Company Limited',
    role: 'Junior Developer',
    team: 'Internal Controlling & Monitoring',
    duration: 'June 2026 - Present',
    type: 'Permanent',
    tools: 'Python, VBA, Batch Script',
    responsibilities: [
      'Automated approximately 15 recurring reports: built Batch scripts to retrieve text and Excel files from SharePoint paths, applied data conditioning and queries in Microsoft Access, and wrote VBA procedures triggered via VBS and Windows Task Scheduler, saving about 20 minutes of manual work per report',
      'Built Python (Selenium) scripts to extract data from the company core system for report conditions',
      'Built Power Automate flows to store processed output in SharePoint and notify relevant business units to verify the data',
      'Developed Power BI dashboards using SharePoint lists as the data source for internal monitoring',
    ],
  },
  {
    company: 'MCR Consulting Co. Ltd',
    role: 'Junior Developer',
    team: 'Technical',
    duration: 'Mar 2025 - May 2026',
    type: 'Permanent',
    tools: null,
    responsibilities: [
      'Developed SQL/PL-SQL programs for Oracle Database',
      'Supported Oracle E-Business Suite (AR, AP, FA, GL, PO, PR and HR)',
      'Created reports and BI Publisher XML reports',
      'Maintained Value Sets and Flexfields',
      'Assisted with production issue resolution',
      'Supported testing and system documentation',
      'Training users for PL/SQL programming language for Oracle Database',
    ],
  },
  {
    company: 'Bangkok MSP Company Limited',
    role: 'SOC (T1)',
    team: 'Security Operations Center (SOC)',
    duration: 'August 2024 - Feb 2025',
    type: 'Permanent',
    tools: null,
    responsibilities: [
      'Monitored and analyzed security alerts using SIEM',
      'Performed initial incident triage and escalation',
      'Investigated basic security incidents and phishing alerts',
      'Documented incidents according to SOC procedures',
    ],
  },
  {
    company: 'We Wasana D Company Limited',
    role: 'Front-end Developer',
    team: 'Developer',
    duration: 'June 2022 - July 2022',
    type: 'Internship',
    tools: 'Next.js, React, Tailwind CSS',
    responsibilities: [
      'Responsive Web Design',
      'Single Page Application (SPA) Development',
      'Front-end Architecture Design',
      'Performance Optimization',
      'Component-Based Development',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-secondary py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="03" eyebrow="Experience" title="Work" emphasis="History" />

        <ol>
          {experiences.map((exp, i) => (
            <li key={exp.company} className="group relative">
              {i > 0 && <Rule />}
              <div className="grid gap-8 py-12 md:grid-cols-12 md:gap-6 md:py-16">
                {/* Meta column — sticks while the long entries scroll past */}
                <Reveal className="md:col-span-4 lg:col-span-3">
                  <div className="md:sticky md:top-28">
                    <span className="font-display block text-6xl font-light leading-none text-text-faint transition-colors duration-500 group-hover:text-accent md:text-7xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="label-mono mt-6 flex items-center gap-2 text-text">
                      <FiCalendar size={12} className="text-accent" /> {exp.duration}
                    </p>
                    <span className="label-mono mt-3 inline-block border border-rule px-2 py-1 text-text-muted">
                      {exp.type}
                    </span>
                  </div>
                </Reveal>

                <div className="md:col-span-8 lg:col-span-8 lg:col-start-5">
                  <Reveal delay={0.05}>
                    <h3 className="font-display text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.08] tracking-[-0.02em] text-text">
                      {exp.company}
                    </h3>
                    <p className="mt-3 text-lg italic text-accent font-display">{exp.role}</p>
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted">
                      <span className="flex items-center gap-2"><FiBriefcase size={13} /> {exp.team}</span>
                      {exp.tools && (
                        <span className="flex items-center gap-2"><FiTool size={13} /> {exp.tools}</span>
                      )}
                    </div>
                  </Reveal>

                  <Stagger as="ul" className="mt-8 space-y-3.5" delay={0.15} gap={0.06}>
                    {exp.responsibilities.map((r) => (
                      <RevealItem
                        as="li"
                        key={r}
                        y={10}
                        className="grid grid-cols-[1.5rem_1fr] text-[0.95rem] leading-relaxed text-text-secondary"
                      >
                        <span aria-hidden="true" className="mt-[0.65em] h-0.5 w-2.5 bg-accent" />
                        <span>{r}</span>
                      </RevealItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
