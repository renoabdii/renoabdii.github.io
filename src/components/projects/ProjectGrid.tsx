import { motion } from 'framer-motion'
import type { Project } from '../../types'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
  projects: Project[]
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: '-60px' }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  )
}
