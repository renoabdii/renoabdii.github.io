import { FaGithub } from 'react-icons/fa'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../../data/portfolio'
import { useLanguage } from '../../contexts/LanguageContext'
import Button from '../../components/shared/Button'
import TechStackBadge from '../../components/projects/TechStackBadge'

export default function ProjectDetailPage() {
  const { language, text } = useLanguage()
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return (
    <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
      <h1 className="text-4xl font-bold">{text('Proyek tidak ditemukan', 'Project not found')}</h1>
      <Link to="/projects" className="mt-6 inline-block neo-btn-outline text-sm px-4 py-2">← {text('Kembali ke Proyek', 'Back to Projects')}</Link>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20"
    >
      <Link to="/projects" className="inline-block mb-8 neo-btn-outline text-sm px-4 py-2">
        ← {text('Kembali ke Proyek', 'Back to Projects')}
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="aspect-video bg-gray-200 border-4 border-black mb-8 overflow-hidden"
      >
        {project.image_url ? (
          <img src={project.image_url} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500 font-heading font-bold text-xl">{text('Tangkapan Layar Proyek', 'Project Screenshot')}</div>
        )}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="break-words text-3xl font-black font-heading sm:text-4xl md:text-5xl"
      >
        {project.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-6"
      >
        <TechStackBadge techs={project.tech_stack} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="mt-10 space-y-8"
      >
        <section>
          <h2 className="text-2xl font-heading font-bold mb-4 border-b-4 border-black pb-2 inline-block">{text('Ringkasan', 'Overview')}</h2>
          <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{language === 'en' ? project.description_en || project.description : project.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-bold mb-4 border-b-4 border-black pb-2 inline-block">{text('Masalah', 'Problem')}</h2>
          <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{language === 'en' ? project.problem_en || project.problem : project.problem}</p>
        </section>

        <section>
          <h2 className="text-2xl font-heading font-bold mb-4 border-b-4 border-black pb-2 inline-block">{text('Solusi', 'Solution')}</h2>
          <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{language === 'en' ? project.solution_en || project.solution : project.solution}</p>
        </section>

        {project.architecture && <section>
          <h2 className="text-2xl font-heading font-bold mb-4 border-b-4 border-black pb-2 inline-block">{text('Arsitektur & Keputusan', 'Architecture & Decisions')}</h2>
          <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{language === 'en' ? project.architecture_en || project.architecture : project.architecture}</p>
        </section>}

        {project.screenshots?.length > 0 && <section>
          <h2 className="text-2xl font-heading font-bold mb-6 border-b-4 border-black pb-2 inline-block">{text('Galeri Proyek', 'Project Gallery')}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.screenshots.map((screenshot, index) => (
              <a key={screenshot} href={screenshot} target="_blank" rel="noopener noreferrer" className="overflow-hidden border-4 border-black bg-gray-100 shadow-brutal">
                <img src={screenshot} alt={`${project.title} screenshot ${index + 1}`} className="aspect-video h-full w-full object-cover transition-transform hover:scale-105" loading="lazy" />
              </a>
            ))}
          </div>
        </section>}
      </motion.div>

      {(project.github_url || project.demo_url) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
              <Button variant="accent"><FaGithub className="mr-2" />{text('Repositori GitHub', 'GitHub Repo')}</Button>
            </a>
          )}
          {project.demo_url && (
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Live Demo</Button>
            </a>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
