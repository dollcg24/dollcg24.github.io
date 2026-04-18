import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'motion/react'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Connect', href: '/#connect' },
]

export default function Navbar({ isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (hash) => {
    const el = document.getElementById(hash)
    if (!el) return
    const navH = 64
    const y = el.getBoundingClientRect().top + window.scrollY - navH
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const hash = href.split('#')[1]
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(hash), 650)
    } else {
      scrollToSection(hash)
    }
  }

  const ink    = isDark ? '#F2E6D2' : '#2A1A0E'
  const muted  = isDark ? '#9A8470' : '#8A7560'
  const accent = isDark ? '#CF7A3E' : '#9B4F1E'
  const border = isDark ? '#2E1F12' : '#E2D5C0'
  const cream  = isDark ? '#160E07' : '#F7F3EC'

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: cream,
        borderBottom: `1px solid ${scrolled ? border : 'transparent'}`,
        boxShadow: scrolled
          ? isDark ? '0 4px 24px rgba(0,0,0,0.4)' : '0 4px 24px rgba(42,26,14,0.07)'
          : 'none',
      }}
    >
      {/* flex justify-between — logo always left, controls always right */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/images/shared/logo.svg" alt="Dolly" className="h-7" />
        </Link>

        {/* Desktop links — absolutely centered so they don't push logo/controls */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ label, href }, i) => (
            <motion.a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
              className="relative text-xs font-semibold tracking-widest uppercase group"
              style={{ color: muted }}
              onMouseEnter={e => (e.currentTarget.style.color = ink)}
              onMouseLeave={e => (e.currentTarget.style.color = muted)}
            >
              {label}
              <span
                className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: accent }}
              />
            </motion.a>
          ))}
        </div>

        {/* Controls — always on right */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          {/* Theme toggle */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200"
            style={{ borderColor: border, color: isDark ? accent : muted }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.16 }}
                className="block leading-none"
              >
                {isDark ? <FiSun size={15} /> : <FiMoon size={15} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle menu"
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-200"
            style={{ borderColor: border, color: ink }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block leading-none"
              >
                {menuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden absolute top-full left-0 right-0"
            style={{
              background: cream,
              borderBottom: `1px solid ${border}`,
              boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.5)' : '0 8px 32px rgba(42,26,14,0.1)',
            }}
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.18 }}
                className="block px-8 py-4 text-xs font-semibold tracking-widest uppercase border-b transition-colors duration-200"
                style={{ borderColor: border, color: muted }}
                onMouseEnter={e => (e.currentTarget.style.color = ink)}
                onMouseLeave={e => (e.currentTarget.style.color = muted)}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
