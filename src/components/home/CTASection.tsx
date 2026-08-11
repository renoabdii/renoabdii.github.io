import Button from '../shared/Button'
import Reveal from '../shared/Reveal'
import { profile } from '../../data/portfolio'
import { useLanguage } from '../../contexts/LanguageContext'

export default function CTASection() {
  const { text } = useLanguage()
  return (
    <Reveal>
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
        <div className="neo-card paper-grid relative overflow-hidden bg-sunshine px-5 py-12 text-center sm:px-8 sm:py-16">
          <span className="absolute -left-8 -top-8 h-24 w-24 rounded-full border-4 border-black bg-coral" />
          <span className="absolute -bottom-8 -right-6 h-24 w-24 rotate-12 border-4 border-black bg-mint" />
          <p className="relative mb-3 text-sm font-black uppercase tracking-[0.2em]">{text('Punya ide?', 'Have an idea?')}</p>
          <h2 className="relative text-3xl font-black font-heading sm:text-4xl md:text-5xl">{text('Mari Bekerja Sama', "Let's Work Together")}</h2>
          <p className="relative mx-auto mt-4 max-w-lg text-base text-gray-700 sm:text-lg">
            {text('Punya proyek yang ingin diwujudkan? Mari membangun sesuatu yang menarik bersama.', "Have a project in mind? Let's build something amazing together.")}
          </p>
          <div className="relative mt-8">
            <a href={`mailto:${profile.email}?subject=Portfolio inquiry`}>
              <Button variant="accent" size="lg" className="w-full sm:w-auto">{text('Kirim Email', 'Email Me')}</Button>
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  )
}
