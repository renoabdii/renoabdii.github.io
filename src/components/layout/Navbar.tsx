import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../../data/portfolio'
import { useLanguage } from '../../contexts/LanguageContext'

const SECTIONS = [
  { id: 'home', idLabel: 'Beranda', enLabel: 'Home' },
  { id: 'about', idLabel: 'Tentang', enLabel: 'About' },
  { id: 'skills', idLabel: 'Keahlian', enLabel: 'Skills' },
  { id: 'projects', idLabel: 'Proyek', enLabel: 'Projects' },
  { id: 'experience', idLabel: 'Pengalaman', enLabel: 'Experience' },
  { id: 'education', idLabel: 'Pendidikan', enLabel: 'Education' },
  { id: 'contact', idLabel: 'Kontak', enLabel: 'Contact' },
] as const

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { language, setLanguage, text } = useLanguage()

  useEffect(() => {
    function closeMenu(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', closeMenu)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeMenu)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  function goToSection(id: string) {
    setIsOpen(false)
    if (pathname !== '/') {
      navigate('/')
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const siteName = profile.display_name

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-black bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group flex min-w-0 items-center gap-2 font-heading text-xl font-black tracking-tight sm:text-2xl">
          <span className="grid h-9 w-9 rotate-[-4deg] place-items-center rounded-lg border-2 border-black bg-sunshine text-sm transition-transform group-hover:rotate-3">RAG</span>
          <span className="hidden truncate sm:inline">{siteName}<span className="text-accent">.</span></span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border-2 border-black bg-white p-0.5 text-xs font-black" aria-label={text('Pilih bahasa', 'Choose language')}>
            {(['id', 'en'] as const).map((option) => (
              <button key={option} type="button" onClick={() => setLanguage(option)} className={`rounded-md px-2 py-1.5 transition-colors ${language === option ? 'bg-accent text-white' : 'hover:bg-sunshine'}`} aria-pressed={language === option}>
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-haspopup="menu"
            className="flex items-center gap-2 rounded-lg border-2 border-black bg-white px-3 py-2 text-sm font-heading font-black shadow-[3px_3px_0_#0a0a0a] transition-all hover:-translate-y-0.5 hover:bg-sunshine sm:gap-3 sm:px-4 sm:text-base"
          >
            {text('Jelajahi', 'Explore')}
            <span className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
          </button>

          {isOpen && (
            <div role="menu" className="absolute right-0 mt-3 w-[min(14rem,calc(100vw-2rem))] overflow-hidden rounded-xl border-3 border-black bg-white p-2 shadow-brutal">
              {SECTIONS.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  role="menuitem"
                  onClick={() => goToSection(section.id)}
                  className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-heading font-bold transition-colors hover:bg-accent hover:text-white"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-md border-2 border-black bg-sunshine text-[10px] text-black">{String(index + 1).padStart(2, '0')}</span>
                  {text(section.idLabel, section.enLabel)}
                </button>
              ))}
            </div>
          )}
        </div>
        </div>
      </div>
    </nav>
  )
}
