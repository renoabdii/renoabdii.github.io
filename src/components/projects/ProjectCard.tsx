import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../../types'
import Card from '../shared/Card'
import Badge from '../shared/Badge'
import TechStackBadge from './TechStackBadge'
import { useLanguage } from '../../contexts/LanguageContext'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language, text } = useLanguage()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
    >
      <Card className="group relative flex h-full flex-col overflow-hidden">
        {project.featured && <span className="absolute right-2 top-2 z-10 rotate-3 rounded-full border-2 border-black bg-sunshine px-3 py-1 text-xs font-black shadow-[2px_2px_0_#0a0a0a]">{text('Pilihan', 'Featured')}</span>}
        <div className="mb-5 aspect-video overflow-hidden rounded-lg border-2 border-black bg-accent/10 flex items-center justify-center text-gray-500 font-heading font-bold">
          {project.image_url ? (
            <img src={project.image_url} alt={project.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
          ) : (
            text('Tangkapan Layar', 'Screenshot')
          )}
        </div>

        <h3 className="text-xl font-heading font-black tracking-tight">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{language === 'en' ? project.description_en || project.description : project.description}</p>

        <div className="mt-4">
          <TechStackBadge techs={project.tech_stack} />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={`/projects/${project.slug}`} className="neo-btn text-sm px-4 py-2">
            {text('Lihat Detail', 'View Detail')}
          </Link>
          {project.github_url && (
            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
              <Badge variant="accent"><FaGithub className="mr-1" />GitHub</Badge>
            </a>
          )}
          {project.demo_url && (
            <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
              <Badge>Demo</Badge>
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
