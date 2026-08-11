import { skills } from '../../data/portfolio'
import { getTechIcon } from '../../lib/techIcons'
import type { Skill } from '../../types'
import SectionTitle from '../shared/SectionTitle'
import Reveal from '../shared/Reveal'
import { useLanguage } from '../../contexts/LanguageContext'
import { FaCode, FaDatabase, FaLayerGroup, FaTools } from 'react-icons/fa'

const primarySkills = new Set(['javascript', 'typescript', 'react', 'tailwind'])

const categoryMeta = {
  Frontend: {
    icon: FaLayerGroup,
    label: ['Frontend', 'Frontend'],
    description: ['Membangun antarmuka web yang responsif dan mudah digunakan.', 'Building responsive and user-friendly web interfaces.'],
    color: 'bg-primary',
  },
  Backend: {
    icon: FaCode,
    label: ['Backend', 'Backend'],
    description: ['Mengembangkan logika aplikasi dan pengolahan data.', 'Developing application logic and data processing.'],
    color: 'bg-secondary',
  },
  Database: {
    icon: FaDatabase,
    label: ['Database', 'Database'],
    description: ['Mengelola dan menyusun data aplikasi secara terstruktur.', 'Managing and organizing application data effectively.'],
    color: 'bg-accent',
  },
  Other: {
    icon: FaTools,
    label: ['Tools', 'Tools'],
    description: ['Perangkat pendukung untuk desain dan kolaborasi kode.', 'Supporting tools for design and code collaboration.'],
    color: 'bg-green-400',
  },
} as const

export default function SkillsSection() {
  const { text } = useLanguage()
  if (skills.length === 0) return null

  const groupedSkills = skills.reduce<Record<string, Skill[]>>((groups, skill) => {
    (groups[skill.category] ??= []).push(skill)
    return groups
  }, {})

  return (
    <section id="skills" className="scroll-mt-24 border-y-4 border-black bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionTitle>{text('Keahlian', 'Skills')}</SectionTitle>
          <p className="mt-3 max-w-2xl text-base font-medium text-slate-600 sm:text-lg">
            {text(
              'Teknologi yang saya gunakan untuk membangun aplikasi web yang responsif, terstruktur, dan mudah digunakan.',
              'Technologies I use to build responsive, structured, and user-friendly web applications.',
            )}
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:gap-6">
        {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
          <Reveal key={category} delay={index * 0.08}>
            <div className="neo-card h-full">
              {(() => {
                const meta = categoryMeta[category as keyof typeof categoryMeta]
                const Icon = meta?.icon ?? FaCode
                return (
                  <div className="mb-5 flex items-start gap-4">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-black text-xl ${meta?.color ?? 'bg-white'}`}>
                      <Icon />
                    </span>
                    <div>
                      <h3 className="text-xl font-black text-slate-950">{meta ? text(meta.label[0], meta.label[1]) : category}</h3>
                      {meta && <p className="mt-1 text-sm font-medium leading-relaxed text-slate-600">{text(meta.description[0], meta.description[1])}</p>}
                    </div>
                  </div>
                )
              })()}
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.id}
                    className={`flex items-center gap-2 rounded-lg border-2 border-black px-3 py-2 text-sm font-heading font-bold transition-transform hover:-translate-y-0.5 ${primarySkills.has(skill.id) ? 'bg-yellow-200 shadow-[3px_3px_0_#000]' : 'bg-white'}`}
                  >
                    <span className="text-lg">{getTechIcon(skill.skill_name)}</span>{skill.skill_name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
        <Reveal delay={0.15}>
          <div className="flex flex-col gap-3 rounded-2xl border-2 border-black bg-slate-950 px-5 py-4 text-white shadow-[5px_5px_0_#facc15] sm:flex-row sm:items-center sm:justify-between">
            <span className="font-heading text-sm font-black uppercase tracking-[0.16em] text-yellow-300">
              {text('Fokus Saat Ini', 'Current Focus')}
            </span>
            <p className="font-heading text-sm font-bold sm:text-right sm:text-base">
              {text(
                'Full-Stack Development · Frontend · Backend · Database',
                'Full-Stack Development · Frontend · Backend · Database',
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
