import { FiExternalLink } from 'react-icons/fi'
import { motion } from 'motion/react'

const skills = [
  'User Research', 'Wireframing', 'Prototyping',
  'Interaction Design', 'Figma', 'Usability Testing',
]

const entry = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About({ isDark }) {
  const ink    = isDark ? '#F2E6D2' : '#2A1A0E'
  const muted  = isDark ? '#9A8470' : '#7A6752'
  const accent = isDark ? '#CF7A3E' : '#9B4F1E'
  const border = isDark ? '#2E1F12' : '#E2D5C0'
  const chipBg = isDark ? '#1F130A' : '#EDE2D1'

  return (
    <section id="about" className="py-20 sm:py-28">

      {/* Divider */}
      <div className="h-px w-full mb-16 sm:mb-20" style={{ background: border }} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section label */}
        <motion.p
          variants={entry} custom={0}
          className="text-xs font-semibold tracking-widest uppercase mb-10"
          style={{ color: accent }}
        >
          01 / About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left: Display heading */}
          <motion.div variants={entry} custom={0.06}>
            <h2
              className="font-display font-bold leading-[0.9]"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: ink }}
            >
              About
              <br />
              <em style={{ fontStyle: 'italic', color: accent }}>Me.</em>
            </h2>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={entry} custom={0.12} className="flex flex-col gap-8 pt-2">
            <p className="text-lg leading-relaxed" style={{ color: muted }}>
              I'm a UX designer with{' '}
              <span style={{ color: ink }} className="font-semibold">5+ years of experience</span>
              , focused on user-friendly designs. I craft simple, impactful solutions that
              enhance user experiences — combining research, empathy, and clean execution.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="text-xs font-semibold tracking-wide px-4 py-2 rounded-full"
                  style={{ background: chipBg, color: muted }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Resume link */}
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 text-sm font-semibold group w-fit"
              style={{ color: accent }}
            >
              <span className="border-b border-transparent group-hover:border-current transition-colors duration-200">
                View Resume
              </span>
              <FiExternalLink size={15} />
            </motion.a>
          </motion.div>

        </div>
      </motion.div>

    </section>
  )
}
