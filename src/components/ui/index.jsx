import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import { FiArrowLeft, FiArrowUp, FiX, FiZoomIn } from 'react-icons/fi'
import { fadeUp, scaleIn } from '../../utils/animations'

export const ThemeContext = createContext(false)

// ─── Layout shells ────────────────────────────────────────────────────────────

export function PageShell({ children, className = '' }) {
  const isDark = useContext(ThemeContext)
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${className}`}
      style={{ background: isDark ? '#160E07' : '#F7F3EC', color: isDark ? '#F2E6D2' : '#2A1A0E' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {children}
      </div>
    </div>
  )
}

export function CaseStudyContainer({ children, className = '' }) {
  const isDark = useContext(ThemeContext)
  const [showTop, setShowTop] = useState(false)
  const accent = isDark ? '#CF7A3E' : '#9B4F1E'

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 320)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${className}`}
      style={{ background: isDark ? '#160E07' : '#F7F3EC', color: isDark ? '#F2E6D2' : '#2A1A0E' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {children}
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-5 sm:right-8 w-11 h-11 rounded-full flex items-center justify-center shadow-lg z-40"
            style={{ background: accent, color: '#fff' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
          >
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Case study header ─────────────────────────────────────────────────────────

export function CaseStudyHeader({ title, meta, thumbnail, onBack }) {
  const isDark = useContext(ThemeContext)
  const ink    = isDark ? '#F2E6D2' : '#2A1A0E'
  const muted  = isDark ? '#9A8470' : '#7A6752'
  const accent = isDark ? '#CF7A3E' : '#9B4F1E'
  const border = isDark ? '#2E1F12' : '#E2D5C0'
  const bg     = isDark ? '#1F130A' : '#EDE2D1'

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Back button */}
      <div className="pt-10 pb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 group"
          style={{ color: muted }}
          onMouseEnter={e => (e.currentTarget.style.color = ink)}
          onMouseLeave={e => (e.currentTarget.style.color = muted)}
        >
          <FiArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back to Work
        </button>
      </div>

      {/* Title area */}
      <div className="pb-10" style={{ borderBottom: `1px solid ${border}` }}>
        <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: accent }}>
          Case Study
        </p>
        <h1
          className="font-display font-bold leading-tight mb-4"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', color: ink }}
        >
          {title}
        </h1>
        {meta && (
          <p className="text-sm font-medium" style={{ color: muted }}>{meta}</p>
        )}
      </div>

      {/* Hero thumbnail */}
      {thumbnail && (
        <div
          className="mt-8 rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${border}`, background: bg, aspectRatio: '16/9' }}
        >
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" loading="eager" />
        </div>
      )}
    </motion.div>
  )
}

// ─── Motion wrappers ───────────────────────────────────────────────────────────

export function FadeSection({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      {children}
    </motion.div>
  )
}

export function Section({ children, className = '' }) {
  return (
    <motion.div
      className={`space-y-4 sm:space-y-5 ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {children}
    </motion.div>
  )
}

// ─── Typography ────────────────────────────────────────────────────────────────

export function Subtitle({ children, className = '' }) {
  const isDark = useContext(ThemeContext)
  const ink    = isDark ? '#F2E6D2' : '#2A1A0E'
  const accent = isDark ? '#CF7A3E' : '#9B4F1E'
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ background: accent }} />
      <h2 className="font-display text-xl sm:text-2xl font-bold leading-tight" style={{ color: ink }}>
        {children}
      </h2>
    </div>
  )
}

export function SubSubtitle({ children, className = '' }) {
  const isDark = useContext(ThemeContext)
  const ink    = isDark ? '#F2E6D2' : '#2A1A0E'
  return (
    <h3 className={`text-sm sm:text-base font-bold leading-tight ${className}`} style={{ color: ink }}>
      {children}
    </h3>
  )
}

export function Paragraph({ children, className = '' }) {
  const isDark = useContext(ThemeContext)
  return (
    <div
      className={`text-sm sm:text-base leading-relaxed ${className}`}
      style={{ color: isDark ? '#9A8470' : '#7A6752' }}
    >
      {children}
    </div>
  )
}

export function BulletList({ children, className = '' }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {children}
    </ul>
  )
}

export function ListItem({ title, description, className = '' }) {
  const isDark = useContext(ThemeContext)
  const accent = isDark ? '#CF7A3E' : '#9B4F1E'
  return (
    <li className={`flex gap-3 text-sm sm:text-base leading-relaxed ${className}`}>
      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
      <span>
        {title && <span className="font-semibold" style={{ color: isDark ? '#F2E6D2' : '#2A1A0E' }}>{title}: </span>}
        {description}
      </span>
    </li>
  )
}

// ─── Meta grid (project details) ──────────────────────────────────────────────

export function MetaGrid({ items }) {
  const isDark = useContext(ThemeContext)
  const border = isDark ? '#2E1F12' : '#E2D5C0'
  const muted  = isDark ? '#9A8470' : '#7A6752'
  const ink    = isDark ? '#F2E6D2' : '#2A1A0E'
  const bg     = isDark ? '#1F130A' : '#EDE2D1'

  const cols = items.length <= 3 ? items.length : 4

  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{
        borderColor: border,
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {items.map(({ icon: Icon, label, value }, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 px-5 py-5"
          style={{
            background: bg,
            borderRight: i < items.length - 1 ? `1px solid ${border}` : 'none',
          }}
        >
          <div className="flex items-center gap-1.5">
            {Icon && <Icon size={12} style={{ color: muted }} />}
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: muted }}>
              {label}
            </span>
          </div>
          <span className="text-sm font-semibold" style={{ color: ink }}>{value}</span>
        </div>
      ))}
    </div>
  )
}

// ─── Stat card ─────────────────────────────────────────────────────────────────

export function StatCard({ label, value, accent: accentClass }) {
  const isDark = useContext(ThemeContext)
  const border = isDark ? '#2E1F12' : '#E2D5C0'
  const bg     = isDark ? '#1F130A' : '#EDE2D1'
  const muted  = isDark ? '#9A8470' : '#7A6752'

  return (
    <div
      className="rounded-2xl px-6 py-6 flex flex-col gap-2 border"
      style={{ background: bg, borderColor: border }}
    >
      <span className={`font-display text-3xl sm:text-4xl font-bold leading-none ${accentClass}`}>
        {value}
      </span>
      <span className="text-xs sm:text-sm leading-relaxed" style={{ color: muted }}>{label}</span>
    </div>
  )
}

// ─── Image lightbox ───────────────────────────────────────────────────────────

function ImageLightbox({ src, alt, isOpen, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) {
      document.addEventListener('keydown', handler)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10"
          style={{ background: 'rgba(15,8,3,0.55)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
          onClick={onClose}
        >
          {/* Close button — fixed top-right of viewport, always visible */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            onClick={onClose}
            aria-label="Close"
            className="fixed top-5 right-5 z-[201] w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)' }}
            whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.92 }}
          >
            <FiX size={17} strokeWidth={2.5} />
          </motion.button>

          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ maxWidth: '92vw', maxHeight: '90vh' }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt || ''}
              className="block rounded-2xl"
              style={{ maxWidth: '92vw', maxHeight: '90vh', width: 'auto', height: 'auto', objectFit: 'contain' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

// ─── Image frame ───────────────────────────────────────────────────────────────

export function ImageFrame({ src, alt, className = '' }) {
  const isDark = useContext(ThemeContext)
  const border = isDark ? '#2E1F12' : '#E2D5C0'
  const bg     = isDark ? '#1F130A' : '#EDE2D1'
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className={`rounded-2xl overflow-hidden border cursor-zoom-in group relative ${className}`}
        style={{ borderColor: border, background: bg }}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.006 }}
        transition={{ duration: 0.22 }}
      >
        <img src={src} alt={alt || ''} className="w-full h-auto block" loading="lazy" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.16)' }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.48)', color: '#fff' }}
          >
            <FiZoomIn size={18} />
          </div>
        </div>
      </motion.div>
      <ImageLightbox src={src} alt={alt} isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

// ─── Image strip (horizontal filmstrip) ──────────────────────────────────────

export function ImageStrip({ images, height = 300 }) {
  const isDark  = useContext(ThemeContext)
  const muted   = isDark ? '#9A8470' : '#7A6752'
  const bg      = isDark ? '#1F130A' : '#EDE2D1'
  const barBg   = isDark ? '#2E1F12' : '#E2D5C0'
  const accent  = isDark ? '#CF7A3E' : '#9B4F1E'

  const scrollRef = useRef(null)
  const dragStart = useRef({ x: 0, left: 0 })
  const dragMoved = useRef(false)
  const [dragging,  setDragging]  = useState(false)
  const [progress,  setProgress]  = useState(0)
  const [lightbox,  setLightbox]  = useState(null)

  const onScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 0)
  }

  const onMouseDown = (e) => {
    dragMoved.current = false
    dragStart.current = { x: e.pageX, left: scrollRef.current.scrollLeft }
    setDragging(true)
    e.preventDefault()
  }

  const onMouseMove = (e) => {
    if (!dragging) return
    const dx = e.pageX - dragStart.current.x
    if (Math.abs(dx) > 4) dragMoved.current = true
    scrollRef.current.scrollLeft = dragStart.current.left - dx
  }

  const onMouseUp = () => setDragging(false)

  return (
    <div className="space-y-3">
      {/* Full-bleed scroll-snap strip */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: 'none',
          cursor: dragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
      >
        <div className="inline-flex gap-3 pb-1">
          {images.map((img, i) => (
            <div key={i} className="flex flex-col gap-2 flex-shrink-0">
              <div
                className="rounded-2xl overflow-hidden group relative"
                style={{ height, background: bg, cursor: 'zoom-in' }}
                onClick={() => { if (!dragMoved.current) setLightbox(img) }}
              >
                <img
                  src={img.src}
                  alt={img.alt || img.label || ''}
                  className="h-full w-auto block"
                  draggable={false}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none"
                  style={{ background: 'rgba(0,0,0,0.16)' }}
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.45)', color: '#fff' }}>
                    <FiZoomIn size={16} />
                  </div>
                </div>
              </div>
              {img.label && (
                <p className="text-xs font-medium text-center" style={{ color: muted }}>{img.label}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll progress bar */}
      {images.length > 1 && (
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="h-[2px] rounded-full overflow-hidden" style={{ background: barBg }}>
            <div
              className="h-full rounded-full transition-all duration-100 ease-linear"
              style={{ background: accent, width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>
        </div>
      )}

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt || lightbox.label || ''}
          isOpen={true}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}

export function DesignPlaceholder({ label }) {
  const isDark = useContext(ThemeContext)
  return (
    <div
      className="rounded-2xl border-2 border-dashed flex items-center justify-center min-h-48 sm:min-h-64"
      style={{
        borderColor: isDark ? '#2E1F12' : '#E2D5C0',
        background: isDark ? '#1F130A' : '#EDE2D1',
        color: isDark ? '#9A8470' : '#7A6752',
      }}
    >
      <span className="text-xs sm:text-sm font-medium">{label}</span>
    </div>
  )
}

// ─── Persona card ──────────────────────────────────────────────────────────────

export function PersonaCard({ name, role, bgColor, image, items, goals, painPoints, quote }) {
  const painList = Array.isArray(painPoints) ? painPoints : [painPoints]
  const goalList = Array.isArray(goals) ? goals : [goals]

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      className={`rounded-2xl ${bgColor} text-white px-6 sm:px-8 py-7`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold text-base sm:text-lg leading-tight">{name}</p>
            {role && <p className="text-xs opacity-60 mt-0.5 tracking-wide">{role}</p>}
          </div>
          <img src={image} alt={name} className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24" loading="lazy" />
          <ul className="space-y-2 text-xs sm:text-sm">
            {items.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-semibold whitespace-nowrap opacity-70">{item.label}:</span>
                <span className="opacity-85">{item.description}</span>
              </li>
            ))}
          </ul>
          {quote && (
            <p className="italic opacity-60 text-xs leading-relaxed">"{quote}"</p>
          )}
        </div>
        <div className="flex flex-col gap-5 text-xs sm:text-sm">
          <div>
            <p className="font-bold text-sm mb-3 opacity-70 tracking-wide uppercase text-xs">Pain Points</p>
            <ul className="space-y-2">
              {painList.map((point, i) => (
                <li key={i} className="flex gap-2.5 opacity-90">
                  <span className="mt-2 w-1 h-1 rounded-full bg-white flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm mb-3 opacity-70 tracking-wide uppercase text-xs">Goals</p>
            <ul className="space-y-2">
              {goalList.map((goal, i) => (
                <li key={i} className="flex gap-2.5 opacity-90">
                  <span className="mt-2 w-1 h-1 rounded-full bg-white flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
