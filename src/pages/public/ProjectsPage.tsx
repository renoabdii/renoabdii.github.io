import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import SectionTitle from '../../components/shared/SectionTitle'
import ProjectGrid from '../../components/projects/ProjectGrid'
import { useLanguage } from '../../contexts/LanguageContext'

export default function ProjectsPage() {
  const { text } = useLanguage()

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionTitle>{text('Daftar Proyek', 'Selected Work')}</SectionTitle>
      <p className="mb-10 max-w-xl text-gray-600">{text('Kumpulan proyek yang telah saya bangun dan pelajari.', 'A collection of projects I have built and learned from.')}</p>
      {projects.length === 0
        ? <p className="py-12 text-center text-gray-500">{text('Belum ada proyek yang ditampilkan.', 'No projects published yet.')}</p>
        : <ProjectGrid projects={projects} />}
    </motion.div>
  )
}
