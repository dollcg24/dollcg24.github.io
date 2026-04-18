import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

const projects = [
  {
    num: '01',
    title: 'Sports Auction Application',
    sub: 'AucBuzz – Live Bidding Platform',
    date: 'Oct 2024 – Feb 2025',
    image: '/images/sports-auction/thumbnail.png',
    pageId: 'sports-auction',
  },
  {
    num: '02',
    title: 'Overhauling Teacher Dashboard',
    sub: 'LMS Redesign – Clarity & Task Flow',
    date: 'Aug 2024 – Nov 2024',
    image: '/images/teacher-dashboard/thumbnail.png',
    pageId: 'teacher-dashboard',
  },
  {
    num: '03',
    title: 'AI in Teacher Evaluation',
    sub: 'LMS Feature – Intelligent Assessment',
    date: 'Jun 2024 – Aug 2024',
    image: '/images/ai-teacher-evaluation/thumbnail.png',
    pageId: 'ai-teacher-evaluation',
  },
  {
    num: '04',
    title: 'Crime Investigation Virtual Labs',
    sub: 'EdTech – Immersive Forensic Simulations',
    date: 'Sep 2020 – Jan 2021',
    image: '/images/crime-labs/thumbnail.png',
    pageId: 'crime-labs',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Work({ isDark }) {
  const navigate = useNavigate()

  const ink    = isDark ? '#F2E6D2' : '#2A1A0E'
  const muted  = isDark ? '#9A8470' : '#7A6752'
  const accent = isDark ? '#CF7A3E' : '#9B4F1E'
  const border = isDark ? '#2E1F12' : '#E2D5C0'
  const cardBg = isDark ? '#1F130A' : '#FFFFFF'

  return (
    <section id="work">

      {/* ── Section header ── */}
      <div className="pt-20 sm:pt-28 pb-14 sm:pb-20">
        <div className="h-px w-full mb-16 sm:mb-20" style={{ background: border }} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-xs font-semibold tracking-widest uppercase mb-10"
            style={{ color: accent }}
          >
            02 / Work
          </motion.p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
              className="font-display font-bold leading-[0.9]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: ink }}
            >
              My <em style={{ fontStyle: 'italic', color: accent }}>Work.</em>
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } } }}
              className="text-sm font-medium sm:mb-2"
              style={{ color: muted }}
            >
              Select a project to read the case study
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-20">
        {projects.map((project, idx) => (
          <motion.div
            key={project.pageId}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5, delay: idx * 0.07, ease }}
            onClick={() => navigate(`/${project.pageId}`)}
            className="cursor-pointer rounded-2xl overflow-hidden active:scale-[0.985] transition-transform duration-150"
            style={{
              background: cardBg,
              border: `1px solid ${border}`,
              boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.45)' : '0 4px 24px rgba(42,26,14,0.09)',
            }}
          >
            <div className="relative overflow-hidden" style={{ height: 320 }}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 45%)' }} />
              <div
                className="absolute top-4 left-4 font-display font-bold text-sm px-3 py-1 rounded-full"
                style={{ background: accent, color: '#FDFAF7', letterSpacing: '0.06em' }}
              >
                {project.num}
              </div>
              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2.5 7h9M7 2.5 11.5 7 7 11.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div style={{ height: 3, background: accent }} />

            <div className="px-5 pt-4 pb-5">
              <p className="text-xs font-bold tracking-[0.18em] uppercase mb-2.5" style={{ color: `${accent}AA` }}>
                {project.date}
              </p>
              <h3
                className="font-display font-bold leading-[1.1] mb-2"
                style={{ fontSize: '1.2rem', color: ink }}
              >
                {project.title}
              </h3>
              <p className="text-sm font-medium mb-5 leading-relaxed" style={{ color: muted }}>
                {project.sub}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: accent }}>
                  View Case Study
                </span>
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: `${accent}18` }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M2 6h8M6 2l4 4-4 4" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
