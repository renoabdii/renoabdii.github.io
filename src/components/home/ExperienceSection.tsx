import { experiences } from '../../data/portfolio'
import SectionTitle from '../shared/SectionTitle'
import Reveal from '../shared/Reveal'
import { useLanguage } from '../../contexts/LanguageContext'

export default function ExperienceSection() {
  const { language, text } = useLanguage()
  return (
    <section id="experience" className="scroll-mt-24 border-y-4 border-black bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle>{text('Pengalaman', 'Experience')}</SectionTitle>
        </Reveal>

        {experiences.length === 0 ? (
          <Reveal delay={0.1}><div className="neo-card max-w-2xl text-gray-600">{text('Belum ada data pengalaman yang ditampilkan.', 'No experience data is currently displayed.')}</div></Reveal>
        ) : (

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-1 bg-black md:left-1/2 md:-translate-x-0.5" />

          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.1}>
              <div className={`relative mb-12 flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-4 z-10 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <div className="h-4 w-4 rotate-45 border-2 border-black bg-accent" />
                </div>

                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div className="rounded-xl border-2 border-black bg-white p-6 shadow-brutal">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold">{language === 'en' ? exp.role_en || exp.role : exp.role}</h3>
                      {(exp.start_date || exp.end_date) && (
                        <span className="rounded-full border-2 border-black bg-accent/10 px-3 py-1 text-xs font-bold">
                          {exp.start_date}{exp.start_date && exp.end_date ? ' — ' : ''}{exp.end_date || (exp.start_date ? text('Sekarang', 'Present') : '')}
                        </span>
                      )}
                    </div>
                    <p className="text-base font-semibold text-accent mb-3">{exp.company}</p>
                    <p className="text-sm leading-relaxed text-gray-700">{language === 'en' ? exp.description_en || exp.description : exp.description}</p>
                    {exp.tech_stack.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tech_stack.map((tech) => (
                          <span key={tech} className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        )}
      </div>
    </section>
  )
}
