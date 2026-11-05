import { FiBookOpen } from 'react-icons/fi';
import { Reveal, SectionHeading } from './Motion';

const education = [
  {
    school: 'Srinakharinwirot University',
    degree: 'Bachelor of Computer Science',
    department: 'Department of Computer Science',
    duration: '2019 - 2022',
    gpax: null,
  },
  {
    school: 'Chiang Rai Municipality School 6',
    degree: 'Science and Mathematics',
    department: '',
    duration: '2016 - 2018',
    gpax: '3.50',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="04" eyebrow="Education" title="Academic" emphasis="Background" />

        <div className="grid gap-y-14 md:grid-cols-12 md:gap-x-6">
          {education.map((edu, i) => (
            <Reveal
              key={edu.school}
              delay={i * 0.12}
              className={`group md:col-span-6 lg:col-span-5 ${i === 1 ? 'md:mt-24 lg:col-start-8' : ''}`}
            >
              <article className="border-t border-text/80 pt-6">
                <div className="flex items-center justify-between">
                  <span className="label-mono text-text-muted">{edu.duration}</span>
                  <FiBookOpen className="text-text-faint transition-all duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:text-accent" size={18} />
                </div>
                <p className="font-display mt-8 text-[clamp(3rem,6vw,4.75rem)] font-light leading-none tracking-[-0.04em] text-text-faint transition-colors duration-500 group-hover:text-text">
                  {edu.duration.split(' - ')[1]}
                </p>
                <h3 className="font-display mt-6 text-2xl leading-snug text-text">{edu.school}</h3>
                <p className="mt-2 font-display text-lg italic text-accent">{edu.degree}</p>
                {edu.department && (
                  <p className="mt-3 text-sm text-text-muted">{edu.department}</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
