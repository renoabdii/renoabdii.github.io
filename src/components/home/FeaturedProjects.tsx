import { Link } from 'react-router-dom'
import { projects } from '../../data/portfolio'
import SectionTitle from '../shared/SectionTitle'
import ProjectGrid from '../projects/ProjectGrid'
import Button from '../shared/Button'
import Reveal from '../shared/Reveal'
import { useLanguage } from '../../contexts/LanguageContext'

export default function FeaturedProjects() {
  const { text } = useLanguage()
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)
  if (featuredProjects.length === 0) return null

  return (
    <Reveal>
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8 flex flex-col items-start gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <SectionTitle>{text('Proyek Pilihan', 'Featured Projects')}</SectionTitle>
            <p className="-mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">{text('Karya pilihan yang menunjukkan masalah, keputusan teknis, dan solusi yang saya bangun.', 'Selected work showing the problems, technical decisions, and solutions I built.')}</p>
          </div>
          <Link to="/projects">
            <Button variant="outline" size="sm" className="mt-2 sm:mt-0">{text('Lihat Semua', 'View All')}</Button>
          </Link>
        </div>
        <ProjectGrid projects={featuredProjects} />
      </section>
    </Reveal>
  )
}
