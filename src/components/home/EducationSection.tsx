import { educations } from '../../data/portfolio'
import Reveal from '../shared/Reveal'
import SectionTitle from '../shared/SectionTitle'
import { useLanguage } from '../../contexts/LanguageContext'

export default function EducationSection() {
  const { text } = useLanguage()
  return (
    <section id="education" className="scroll-mt-24 border-y-4 border-black bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal><SectionTitle>{text('Pendidikan', 'Education')}</SectionTitle></Reveal>
        <div className="mt-6 grid max-w-4xl gap-5 md:grid-cols-2">
          {educations.map((education, index) => (
            <Reveal key={education.id} delay={index * 0.1}>
              <article className="neo-card h-full">
                <div className="flex h-full flex-col justify-between gap-5">
                  <div>
                    <p className="font-heading text-sm font-black uppercase tracking-[0.14em] text-accent">
                      {text('Pendidikan', 'Education')}
                    </p>
                    <h3 className="mt-2 text-2xl font-black">{text(education.program, education.program_en)}</h3>
                    <p className="mt-2 font-heading font-bold text-slate-700">{education.institution}</p>
                  </div>
                  {education.period && (
                    <span className="w-fit rounded-full border-2 border-black bg-accent/10 px-3 py-1 text-sm font-bold">
                      {education.period}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
