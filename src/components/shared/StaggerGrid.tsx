import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface StaggerGridProps {
  children: ReactNode
  className?: string
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function GridContainer({ children, className }: StaggerGridProps) {
  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, margin: '-60px' }} className={className}>
      {children}
    </motion.div>
  )
}

export function GridItem({ children, className }: StaggerGridProps) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
