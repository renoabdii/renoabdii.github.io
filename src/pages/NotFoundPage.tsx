import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/shared/Button'
import { useLanguage } from '../contexts/LanguageContext'

export default function NotFoundPage() {
  const { text } = useLanguage()
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-black font-heading text-accent">404</h1>
        <p className="mt-4 text-xl text-gray-600">{text('Halaman tidak ditemukan', 'Page not found')}</p>
        <p className="mt-2 text-gray-500">{text('Halaman yang Anda cari tidak tersedia.', "The page you're looking for doesn't exist.")}</p>
        <div className="mt-8">
          <Link to="/">
            <Button variant="accent">{text('Kembali ke Beranda', 'Back to Home')}</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
