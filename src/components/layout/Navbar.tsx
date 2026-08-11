import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
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

const DESKTOP_SECTIONS = SECTIONS.filter(({ id }) => id !== 'home' && id !== 'contact')

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
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

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5] },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  function goToSection(id: string) {
    setIsOpen(false)
    setActiveSection(id)
    if (pathname !== '/') {
      navigate('/')
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-black bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          onClick={(event) => {
            event.preventDefault()
            goToSection('home')
          }}
          className="group flex min-w-0 items-center gap-2 font-heading text-xl font-black tracking-tight"
          aria-label={text('Kembali ke beranda', 'Back to home')}
        >
          <span className="grid h-9 w-9 rotate-[-4deg] place-items-center rounded-lg border-2 border-black bg-sunshine text-sm transition-transform group-hover:rotate-3">RAG</span>
          <span className="hidden truncate xl:inline">{profile.display_name}<span className="text-accent">.</span></span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {DESKTOP_SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => goToSection(section.id)}
              aria-current={activeSection === section.id ? 'page' : undefined}
              className={`relative rounded-lg px-2.5 py-2 font-heading text-sm font-black transition-colors xl:px-3 ${
                activeSection === section.id ? 'bg-sunshine text-black' : 'hover:bg-white'
              }`}
            >
              {text(section.idLabel, section.enLabel)}
              {activeSection === section.id && <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-black" />}
            </button>
          ))}
        </div>

        <div ref={menuRef} className="relative flex items-center gap-2">
          <div className="flex rounded-lg border-2 border-black bg-white p-0.5 text-xs font-black" aria-label={text('Pilih bahasa', 'Choose language')}>
            {(['id', 'en'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                className={`rounded-md px-2 py-1.5 transition-colors ${language === option ? 'bg-accent text-white' : 'hover:bg-sunshine'}`}
                aria-pressed={language === option}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => goToSection('contact')}
            className="hidden rounded-lg border-2 border-black bg-accent px-3 py-2 font-heading text-sm font-black text-white shadow-[3px_3px_0_#0a0a0a] transition-transform hover:-translate-y-0.5 lg:block"
          >
            {text('Kontak', 'Contact')}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={text('Buka menu navigasi', 'Open navigation menu')}
            className="grid h-10 w-10 place-items-center rounded-lg border-2 border-black bg-white text-lg shadow-[3px_3px_0_#0a0a0a] transition-colors hover:bg-sunshine lg:hidden"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {isOpen && (
            <div role="menu" className="absolute right-0 top-full mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-xl border-3 border-black bg-white p-3 shadow-brutal lg:hidden">
              <p className="px-2 pb-2 font-heading text-xs font-black uppercase tracking-[0.16em] text-slate-500">Menu</p>
              <div className="grid gap-1">
                {SECTIONS.map((section, index) => (
                  <button
                    key={section.id}
                    type="button"
                    role="menuitem"
                    onClick={() => goToSection(section.id)}
                    aria-current={activeSection === section.id ? 'page' : undefined}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-heading font-bold transition-colors ${
                      activeSection === section.id ? 'bg-sunshine' : 'hover:bg-accent hover:text-white'
                    }`}
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-md border-2 border-black bg-white text-[10px] text-black">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {text(section.idLabel, section.enLabel)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
