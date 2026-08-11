import { motion } from 'framer-motion'
import HeroSection from '../../components/home/HeroSection'
import FeaturedProjects from '../../components/home/FeaturedProjects'
import SkillsSection from '../../components/home/SkillsSection'
import AboutSection from '../../components/home/AboutSection'
import ExperienceSection from '../../components/home/ExperienceSection'
import EducationSection from '../../components/home/EducationSection'
import CTASection from '../../components/home/CTASection'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FeaturedProjects />
      <ExperienceSection />
      <EducationSection />
      <CTASection />
    </motion.div>
  )
}
