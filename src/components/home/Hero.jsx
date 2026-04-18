import { motion } from 'motion/react'

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero({ isDark }) {
  const ink   = isDark ? '#F2E6D2' : '#2A1A0E'
  const muted = isDark ? '#9A8470' : '#7A6752'
  const accent = isDark ? '#CF7A3E' : '#9B4F1E'
  const border = isDark ? '#2E1F12' : '#E2D5C0'
  const cardBg = isDark ? '#1F130A' : '#FFFFFF'
  const blobBg = isDark ? 'rgba(207,122,62,0.10)' : 'rgba(155,79,30,0.08)'

  return (
    <section id="home" className="relative min-h-[88vh] flex flex-col justify-center py-16 sm:py-20">

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-center">

        {/* ── Left: Text ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          {/* Tag */}
          <motion.div variants={itemVariant} custom={0} className="inline-flex items-center gap-2.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: muted }}>
              UX Designer · 5+ Years Experience
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariant}
            custom={0.08}
            className="font-display font-bold leading-[0.88] mb-8"
            style={{
              fontSize: 'clamp(3.5rem, 11vw, 8rem)',
              color: ink,
            }}
          >
            Hi,&nbsp;I'm
            <br />
            <em style={{ fontStyle: 'italic', color: accent }}>Dolly.</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariant}
            custom={0.16}
            className="text-lg sm:text-xl leading-relaxed max-w-md mb-10"
            style={{ color: muted }}
          >
            Dedicated to creating{' '}
            <span style={{ color: ink }} className="font-semibold">simple, user-friendly</span>{' '}
            digital solutions that people actually love to use.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariant} custom={0.24} className="flex flex-wrap gap-4">
            <a
              href="#work"
              onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: accent, color: '#fff' }}
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#connect"
              onClick={e => { e.preventDefault(); document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: border, color: ink }}
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          {/* Warm blob behind image */}
          <div
            className="absolute -inset-8 rounded-[3rem]"
            style={{ background: blobBg }}
          />

          {/* Dot-grid decoration */}
          <div className="absolute -top-6 -right-6 opacity-25" style={{ color: accent }}>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="currentColor" aria-hidden="true">
              {[0,1,2,3].flatMap(row =>
                [0,1,2,3].map(col => (
                  <circle key={`${row}-${col}`} cx={9 + col * 18} cy={9 + row * 18} r="2.5" />
                ))
              )}
            </svg>
          </div>

          {/* Hero image */}
          <motion.img
            src="/images/shared/hero.png"
            alt="Dolly – UX Designer"
            className="relative w-full h-auto rounded-[2rem] object-cover shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Floating stats badge */}
          <motion.div
            initial={{ opacity: 0, y: 16, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-5 -left-6 rounded-2xl px-5 py-4 shadow-xl"
            style={{
              background: cardBg,
              border: `1px solid ${border}`,
            }}
          >
            <p className="font-display text-3xl font-bold leading-none" style={{ color: accent }}>5+</p>
            <p className="text-xs font-semibold tracking-wider uppercase mt-1" style={{ color: muted }}>
              Years Experience
            </p>
          </motion.div>

          {/* Projects done badge */}
          <motion.div
            initial={{ opacity: 0, y: -12, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-5 -right-4 rounded-2xl px-5 py-4 shadow-xl"
            style={{
              background: cardBg,
              border: `1px solid ${border}`,
            }}
          >
            <p className="font-display text-3xl font-bold leading-none" style={{ color: accent }}>4</p>
            <p className="text-xs font-semibold tracking-wider uppercase mt-1" style={{ color: muted }}>
              Projects Done
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-0 hidden sm:flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: border }}
        >
          <div className="w-1 h-1.5 rounded-full" style={{ background: accent }} />
        </motion.div>
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: muted }}>Scroll</span>
      </motion.div>

    </section>
  )
}
