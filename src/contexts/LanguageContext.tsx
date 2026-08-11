import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'id' | 'en'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  text: (indonesian: string, english: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_language')
    return saved === 'en' ? 'en' : 'id'
  })

  useEffect(() => {
    localStorage.setItem('portfolio_language', language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    text: (indonesian, english) => language === 'id' ? indonesian : english,
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
