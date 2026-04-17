import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar({ isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About Me', href: '/#about' },
    { label: 'My Work', href: '/#work' },
    { label: "Let's Connect", href: '/#connect' },
  ]

  return (
    <nav className={`sticky top-0 z-50 px-4 sm:px-6 py-3 relative ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-gray-200'} transition`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center rounded-3xl px-4 sm:px-6 py-3 ${isDark ? 'shadow-lg shadow-black/60' : 'shadow-lg'}`}>
        <Link to="/">
          <img src='/images/shared/logo.svg' className='cursor-pointer' />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 lg:gap-16 items-center flex-1 justify-center">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`font-medium hover:text-gray-600 transition text-lg ${isDark ? 'text-slate-200 hover:text-slate-400' : 'text-gray-900'}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 ml-auto">
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`hover:opacity-70 transition ${isDark ? 'text-yellow-400' : 'text-gray-900'}`}
          >
            {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden hover:opacity-70 transition ${isDark ? 'text-slate-200' : 'text-gray-900'}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — floats over content */}
      {menuOpen && (
        <div className={`md:hidden absolute top-full left-4 right-4 mt-1 rounded-2xl shadow-xl overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-white border border-gray-200'}`}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 text-base font-medium transition ${isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-gray-900 hover:bg-gray-50'}`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
