import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../../data/portfolio'
import { useLanguage } from '../../contexts/LanguageContext'

const footerLinks = [
  { id: 'about', idLabel: 'Tentang', enLabel: 'About' },
  { id: 'skills', idLabel: 'Keahlian', enLabel: 'Skills' },
  { id: 'projects', idLabel: 'Proyek', enLabel: 'Projects' },
  { id: 'experience', idLabel: 'Pengalaman', enLabel: 'Experience' },
]

export default function Footer() {
  const { text } = useLanguage()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  function goToSection(id: string) {
    if (pathname !== '/') {
      navigate('/')
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-20 overflow-hidden border-t-4 border-black bg-black text-white">
      <span className="absolute -right-16 -top-16 h-44 w-44 rotate-12 rounded-3xl border-4 border-white/20 bg-accent" />
      <span className="absolute -bottom-14 left-1/3 h-28 w-28 rounded-full border-4 border-black bg-sunshine" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.7fr_1fr] md:gap-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 rotate-[-4deg] place-items-center rounded-xl border-2 border-white bg-sunshine font-heading text-sm font-black text-black shadow-[4px_4px_0_#4f46e5]">RAG</span>
              <p className="font-heading text-2xl font-black">{profile.display_name}<span className="text-sunshine">.</span></p>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-300 sm:text-base">
              {text('Junior Programmer dan Web Developer yang berfokus membangun aplikasi web responsif, terstruktur, dan mudah digunakan.', 'A Junior Programmer and Web Developer focused on building responsive, structured, and user-friendly web applications.')}
            </p>
            <div className="mt-5 flex gap-3">
              {profile.github_url && <a href={profile.github_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-lg border-2 border-white bg-white text-lg text-black transition-transform hover:-translate-y-1 hover:bg-sunshine"><FaGithub /></a>}
              {profile.linkedin_url && <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-lg border-2 border-white bg-accent text-lg transition-transform hover:-translate-y-1 hover:bg-sunshine hover:text-black"><FaLinkedin /></a>}
              {profile.email && <a href={`mailto:${profile.email}`} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-lg border-2 border-white bg-coral text-lg text-black transition-transform hover:-translate-y-1 hover:bg-sunshine"><FaEnvelope /></a>}
              {profile.phone && <a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-lg border-2 border-white bg-mint text-lg text-black transition-transform hover:-translate-y-1 hover:bg-sunshine"><FaWhatsapp /></a>}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-lg font-black text-sunshine">{text('Jelajahi', 'Explore')}</h2>
            <div className="mt-4 flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <button key={link.id} type="button" onClick={() => goToSection(link.id)} className="font-bold text-gray-300 transition-all hover:translate-x-1 hover:text-white">
                  {text(link.idLabel, link.enLabel)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-lg font-black text-sunshine">{text('Mari Terhubung', 'Get In Touch')}</h2>
            <div className="mt-4 space-y-4 text-sm text-gray-300 sm:text-base">
              {profile.email && <a href={`mailto:${profile.email}`} className="flex items-start gap-3 break-all transition-colors hover:text-white"><FaEnvelope className="mt-1 shrink-0 text-coral" /><span>{profile.email}</span></a>}
              {profile.phone && <a href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition-colors hover:text-white"><FaWhatsapp className="mt-1 shrink-0 text-mint" /><span>{profile.phone}</span></a>}
              {profile.location && <p className="flex items-start gap-3"><FaMapMarkerAlt className="mt-1 shrink-0 text-mint" /><span>{profile.location}</span></p>}
            </div>
            <a href={`mailto:${profile.email}?subject=Portfolio inquiry`} className="mt-6 inline-block rounded-lg border-2 border-white bg-sunshine px-4 py-2 font-heading text-sm font-black text-black shadow-[4px_4px_0_#4f46e5] transition-transform hover:-translate-y-1">
              {text('Kirim Pesan', 'Send a Message')} →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-center text-xs text-gray-400 sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} {profile.display_name}. {text('Hak cipta dilindungi.', 'All rights reserved.')}</p>
          <p>{text('Dibuat dengan React dan rasa ingin tahu.', 'Built with React and curiosity.')}</p>
        </div>
      </div>
    </footer>
  )
}
