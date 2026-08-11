import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { profile } from '../../data/portfolio'
import { useLanguage } from '../../contexts/LanguageContext'
import Button from '../shared/Button'

export default function HeroSection() {
  const { text } = useLanguage()
  const profilePhoto = profile.avatar_url || './images/reno-abdi-gustian.png'

  function scrollToExperience() {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="paper-grid relative flex min-h-[calc(100svh-72px)] scroll-mt-24 items-center overflow-hidden border-b-4 border-black bg-canvas py-10 sm:py-14 lg:py-8">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border-4 border-black bg-sunshine/70" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rotate-12 rounded-3xl border-4 border-black bg-coral/60" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -30, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: -2 }} transition={{ duration: 0.6 }} className="relative mx-auto w-[min(72vw,340px)]">
          <span className="absolute -left-4 -top-4 h-16 w-16 rounded-full border-4 border-black bg-mint" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-black bg-white p-2 shadow-[10px_10px_0_#0a0a0a]">
            <img src={profilePhoto} alt={`Portrait of ${profile.display_name}`} className="h-full w-full object-cover object-top" fetchPriority="high" />
          </div>
          <div className="absolute -bottom-4 right-1 flex rotate-2 items-center gap-2 rounded-lg border-2 border-black bg-white px-4 py-2 text-sm font-black shadow-[4px_4px_0_#0a0a0a] sm:right-[-12px]">
            <span className="h-3 w-3 rounded-full border border-black bg-mint" />
            {text('Tersedia', 'Available')}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center md:text-left">
          <p className="mb-4 inline-block rotate-[-1deg] rounded-full border-2 border-black bg-sunshine px-4 py-2 text-sm font-black uppercase tracking-[0.14em] shadow-[3px_3px_0_#0a0a0a] sm:text-base">
            {text('Selamat Datang', 'Welcome')}
          </p>
          <h1 className="text-balance font-heading text-4xl font-black leading-[0.95] tracking-[-0.045em] text-black sm:text-5xl lg:text-7xl">
            Reno Abdi <span className="relative inline-block text-accent"><span className="absolute inset-x-0 bottom-0 -z-10 h-4 rotate-[-1deg] border-y-2 border-black bg-sunshine sm:h-6" />Gustian</span>
          </h1>
          <p className="mt-5 border-l-4 border-accent pl-4 text-xl font-black text-accent sm:text-2xl">
            Junior Programmer &amp; Web Developer
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-600 md:mx-0 sm:text-lg">
            {text(
              'Mahasiswa Teknik Informatika dengan pengalaman magang sebagai Frontend Web Developer dan fokus pada pengembangan website responsif.',
              'An Informatics Engineering student with Frontend Web Developer internship experience and a focus on responsive web development.'
            )}
          </p>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:justify-center md:justify-start">
            <a href={`mailto:${profile.email}`} className="w-full sm:w-auto">
              <Button variant="accent" className="w-full sm:w-auto"><FaEnvelope />{text('Hubungi Saya', 'Contact Me')}</Button>
            </a>
            <Button variant="outline" onClick={scrollToExperience} className="w-full sm:w-auto">
              {text('Lihat Pengalaman', 'View Experience')}
            </Button>
            <Link to="/projects" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">{text('Lihat Proyek', 'View Projects')}</Button>
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-lg border-2 border-black bg-white text-lg shadow-[3px_3px_0_#0a0a0a] transition-transform hover:-translate-y-1"><FaEnvelope /></a>
            {profile.linkedin_url && <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-lg border-2 border-black bg-accent text-lg text-white shadow-[3px_3px_0_#0a0a0a] transition-transform hover:-translate-y-1"><FaLinkedin /></a>}
            {profile.github_url && <a href={profile.github_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-lg border-2 border-black bg-black text-lg text-white shadow-[3px_3px_0_#0a0a0a] transition-transform hover:-translate-y-1"><FaGithub /></a>}
            {profile.phone && <a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-lg border-2 border-black bg-mint text-lg text-black shadow-[3px_3px_0_#0a0a0a] transition-transform hover:-translate-y-1"><FaWhatsapp /></a>}
            <span className="flex items-center gap-2 rounded-lg border-2 border-black bg-mint px-3 py-2 text-sm font-bold shadow-[3px_3px_0_#0a0a0a]"><FaMapMarkerAlt />{profile.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
