import { profile } from '../../data/portfolio'
import SectionTitle from '../shared/SectionTitle'
import Reveal from '../shared/Reveal'
import { useLanguage } from '../../contexts/LanguageContext'

export default function AboutSection() {
  const { language, text } = useLanguage()
  return (
    <section id="about" className="scroll-mt-24 border-y-4 border-black bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle>{text('Tentang Saya', 'About Me')}</SectionTitle>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <Reveal delay={0.1} direction="left">
            <div className="neo-card max-w-3xl">
              <p className="whitespace-pre-wrap text-base leading-relaxed text-gray-700 sm:text-lg">{language === 'en' ? profile.bio_en : profile.bio}</p>
            </div>
          </Reveal>
          <Reveal delay={0.2} direction="right">
            <div className="flex flex-wrap gap-3 text-sm font-bold lg:max-w-xs lg:flex-col">
              {profile.location && <span className="rounded-lg border-2 border-black bg-mint px-4 py-3">📍 {profile.location}</span>}
              {profile.email && <a className="break-all rounded-lg border-2 border-black bg-accent/10 px-4 py-3 transition-colors hover:bg-accent hover:text-white" href={`mailto:${profile.email}`}>✉ {profile.email}</a>}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
