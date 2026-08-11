import { profile } from '../../data/portfolio'
import Reveal from '../shared/Reveal'
import SectionTitle from '../shared/SectionTitle'
import { useLanguage } from '../../contexts/LanguageContext'

export default function EducationSection() {
  const { text } = useLanguage()
  return (
    <section id="education" className="scroll-mt-24 border-y-4 border-black bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal><SectionTitle>{text('Pendidikan', 'Education')}</SectionTitle></Reveal>
        <Reveal delay={0.1}>
          <div className="neo-card max-w-3xl">
            {!profile.education_institution && !profile.education_program ? (
              <p className="text-gray-600">{text('Belum ada data pendidikan yang ditampilkan.', 'No education data is currently displayed.')}</p>
            ) : (
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-black">{text(profile.education_program || '', 'Informatics Engineering')}</h3>
                <p className="mt-2 font-heading font-bold text-accent">{profile.education_institution}</p>
              </div>
              {profile.education_period && (
                <span className="w-fit rounded-full border-2 border-black bg-accent/10 px-3 py-1 text-sm font-bold">
                  {profile.education_period}
                </span>
              )}
            </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
