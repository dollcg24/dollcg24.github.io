import { FiPhone, FiMail, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'motion/react'

const contacts = [
  {
    href: 'tel:+919619990942',
    icon: FiPhone,
    category: 'Phone',
    label: '+91 9619 990 942',
    cta: 'Call me anytime',
    external: false,
  },
  {
    href: 'mailto:dollygogri@gmail.com',
    icon: FiMail,
    category: 'Email',
    label: 'dollygogri@gmail.com',
    cta: 'Drop me a line',
    external: false,
  },
  {
    href: 'https://www.linkedin.com/in/dollygogri',
    icon: FiLinkedin,
    category: 'LinkedIn',
    label: 'in/dollygogri',
    cta: 'Connect with me',
    external: true,
  },
]

const entry = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Connect() {
  const bg     = '#1F130A'
  const ink    = '#F2E6D2'
  const muted  = 'rgba(242,230,210,0.45)'
  const accent = '#CF7A3E'
  const cardBg = 'rgba(242,230,210,0.05)'
  const cardBorder = 'rgba(242,230,210,0.1)'

  return (
    <section id="connect" style={{ background: bg }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">

        {/* Divider */}
        <div className="h-px w-full mb-16 sm:mb-20" style={{ background: 'rgba(242,230,210,0.1)' }} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Section label + availability badge */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <motion.p
              variants={entry} custom={0}
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: accent }}
            >
              03 / Connect
            </motion.p>
            <motion.div
              variants={entry} custom={0.05}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold"
              style={{ borderColor: 'rgba(242,230,210,0.15)', color: muted }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Open to new opportunities
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h2
            variants={entry} custom={0.08}
            className="font-display font-bold leading-[0.9] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', color: ink }}
          >
            Let's <em style={{ fontStyle: 'italic', color: accent }}>Connect.</em>
          </motion.h2>

          <motion.p
            variants={entry} custom={0.14}
            className="text-base sm:text-lg max-w-xl mb-16 leading-relaxed"
            style={{ color: muted }}
          >
            Feel free to reach out for collaboration, project inquiries, or just to say hello.
          </motion.p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {contacts.map(({ href, icon: Icon, category, label, cta, external }, i) => (
              <motion.a
                key={i}
                href={href}
                variants={entry} custom={0.2 + i * 0.08}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col gap-6 p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: cardBg,
                  borderColor: cardBorder,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = accent
                  e.currentTarget.style.background = 'rgba(207,122,62,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = cardBorder
                  e.currentTarget.style.background = cardBg
                }}
              >
                {/* Top row: icon + arrow */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-300"
                    style={{ background: 'rgba(207,122,62,0.15)', color: accent }}
                  >
                    <Icon size={20} />
                  </div>
                  <FiArrowUpRight
                    size={18}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: accent }}
                  />
                </div>

                {/* Bottom: category + label + cta */}
                <div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-2"
                    style={{ color: muted }}
                  >
                    {category}
                  </p>
                  <p
                    className="text-sm sm:text-base font-semibold leading-snug mb-1 break-all"
                    style={{ color: ink }}
                  >
                    {label}
                  </p>
                  <p className="text-xs" style={{ color: muted }}>{cta}</p>
                </div>
              </motion.a>
            ))}
          </div>

        </motion.div>

        {/* Bottom bar */}
        <div
          className="mt-20 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
          style={{ borderTop: '1px solid rgba(242,230,210,0.08)' }}
        >
          <p className="text-xs font-medium" style={{ color: muted }}>
            © {new Date().getFullYear()} Dolly Gogri. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(242,230,210,0.25)' }}>
            UX Designer · Mumbai, India
          </p>
        </div>

      </div>
    </section>
  )
}
