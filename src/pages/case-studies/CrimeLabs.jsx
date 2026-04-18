import { useContext, Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { FiClock, FiUsers, FiBriefcase, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {
  ThemeContext, CaseStudyContainer, CaseStudyHeader,
  Section, Subtitle, SubSubtitle, Paragraph,
  BulletList, ListItem, ImageFrame, PersonaCard, MetaGrid,
} from '../../components/ui'
import SEO from '../../components/SEO'

// ─── Design process flow ───────────────────────────────────────────────────────

const STEPS = [
  {
    label: 'Define',
    description: 'Understood the requirement and defined the problem statement.',
    side: 'left',
    size: 64,
    gradient: 'linear-gradient(145deg, #F0C8A8, #E8A87A)',
    shadow: '0 4px 20px rgba(232,168,122,0.4)',
  },
  {
    label: 'Research',
    description: 'Collaborated with experts to understand the process.',
    side: 'right',
    size: 78,
    gradient: 'linear-gradient(145deg, #E09060, #C87040)',
    shadow: '0 4px 20px rgba(200,112,64,0.4)',
  },
  {
    label: 'Ideate',
    description: 'Brainstorming sessions to create interactive experiences.',
    side: 'left',
    size: 92,
    gradient: 'linear-gradient(145deg, #C87040, #B06030)',
    shadow: '0 4px 20px rgba(176,96,48,0.4)',
  },
  {
    label: 'Prototype',
    description: 'Designed wireframes for navigating crime scenes using forensic tools.',
    side: 'right',
    size: 106,
    gradient: 'linear-gradient(145deg, #A05028, #884020)',
    shadow: '0 4px 20px rgba(136,64,32,0.4)',
  },
  {
    label: 'Test',
    description: 'Conducted user testing with educators capturing usability insights.',
    side: 'left',
    size: 120,
    gradient: 'linear-gradient(145deg, #703418, #3D1C0A)',
    shadow: '0 4px 20px rgba(61,28,10,0.45)',
  },
]

function DesignProcessFlow() {
  const isDark = useContext(ThemeContext)
  const textStyle = { color: isDark ? '#9A8470' : '#7A6752', fontSize: '0.875rem', lineHeight: '1.4' }
  const lineColor = isDark ? '#2E1F12' : '#E2D5C0'

  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:flex flex-col items-center">
        {STEPS.map((step, i) => (
          <Fragment key={step.label}>
            <motion.div
              className="flex items-center w-full"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className={`flex-1 pr-8 text-right ${step.side === 'left' ? '' : 'invisible'}`} style={textStyle}>
                {step.description}
              </div>
              <div
                className="flex-shrink-0 rounded-full flex items-center justify-center font-bold text-white"
                style={{
                  width: step.size, height: step.size,
                  background: step.gradient, boxShadow: step.shadow,
                  fontSize: step.size >= 100 ? '0.85rem' : step.size >= 80 ? '0.78rem' : '0.72rem',
                }}
              >
                {step.label}
              </div>
              <div className={`flex-1 pl-8 text-left ${step.side === 'right' ? '' : 'invisible'}`} style={textStyle}>
                {step.description}
              </div>
            </motion.div>
            {i < STEPS.length - 1 && (
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" className="my-0.5">
                <line x1="7" y1="0" x2="7" y2="17" stroke={lineColor} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 13 L7 19 L12 13" stroke={lineColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex flex-col items-center">
        {STEPS.map((step, i) => (
          <Fragment key={step.label}>
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div
                className="rounded-full flex items-center justify-center font-bold text-white"
                style={{ width: step.size * 0.75, height: step.size * 0.75, background: step.gradient, boxShadow: step.shadow, fontSize: '0.72rem' }}
              >
                {step.label}
              </div>
              <p className="text-xs text-center leading-snug px-6" style={textStyle}>{step.description}</p>
            </motion.div>
            {i < STEPS.length - 1 && (
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" className="my-1">
                <line x1="7" y1="0" x2="7" y2="17" stroke={lineColor} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 13 L7 19 L12 13" stroke={lineColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </Fragment>
        ))}
      </div>
    </>
  )
}

// ─── Mobile image slider ───────────────────────────────────────────────────────

const SLIDES = [
  { src: '/images/crime-labs/mobile-1.png', alt: 'Responsive design — screen 1' },
  { src: '/images/crime-labs/mobile-2.png', alt: 'Responsive design — screen 2' },
]

function MobileSlider() {
  const isDark = useContext(ThemeContext)
  const [current, setCurrent] = useState(0)
  const total = SLIDES.length
  const go = (dir) => setCurrent(i => (i + dir + total) % total)
  const peekIdx = (current + 1) % total
  const peekOnRight = peekIdx > current
  const accent = isDark ? '#CF7A3E' : '#9B4F1E'
  const muted  = isDark ? '#9A8470' : '#7A6752'

  const BtnStyle = (active) => ({
    color: active ? muted : isDark ? '#2E1F12' : '#E2D5C0',
    cursor: active ? 'pointer' : 'default',
    flexShrink: 0,
    padding: '10px',
    borderRadius: '50%',
    transition: 'color 0.2s',
  })

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-4 sm:gap-6 w-full justify-center">
        <button onClick={() => current > 0 && go(-1)} aria-label="Previous" disabled={current === 0} style={BtnStyle(current > 0)}>
          <FiChevronLeft size={22} />
        </button>

        <div className="relative w-full max-w-[230px] sm:max-w-[260px]">
          <div
            className="absolute rounded-2xl overflow-hidden transition-all duration-300"
            style={{ width: '74%', [peekOnRight ? 'right' : 'left']: 0, top: '5%', zIndex: 0, opacity: 0.35 }}
          >
            <img src={SLIDES[peekIdx].src} alt="" className="w-full h-auto" />
          </div>
          <div
            className="relative z-10 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
            style={{ width: '88%', marginLeft: peekOnRight ? 0 : 'auto', marginRight: peekOnRight ? 'auto' : 0 }}
          >
            <img key={current} src={SLIDES[current].src} alt={SLIDES[current].alt} className="w-full h-auto" />
          </div>
        </div>

        <button onClick={() => current < total - 1 && go(1)} aria-label="Next" disabled={current === total - 1} style={BtnStyle(current < total - 1)}>
          <FiChevronRight size={22} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-200"
            style={{
              width: i === current ? '20px' : '8px',
              height: '8px',
              background: i === current ? accent : (isDark ? '#2E1F12' : '#E2D5C0'),
            }}
          />
        ))}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CrimeLabsCaseStudy({ isDark }) {
  const navigate = useNavigate()

  return (
    <ThemeContext.Provider value={isDark}>
      <SEO
        title="Crime Investigation Virtual Labs"
        description="UX case study on designing Crime Investigation Virtual Labs — an interactive digital platform for forensic science education using immersive simulations."
        path="/crime-labs"
        image="/images/crime-labs/thumbnail.png"
      />
      <CaseStudyContainer>

        <CaseStudyHeader
          title="Crime Investigation Virtual Labs"
          meta="Sep 2020 – Jan 2021"
          thumbnail="/images/crime-labs/thumbnail.png"
          onBack={() => {
            navigate('/')
            setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 650)
          }}
        />

        <div className="pt-12 space-y-14 sm:space-y-16">

          <Section>
            <Subtitle>Overview</Subtitle>
            <Paragraph>
              Forensic education didn't give students hands-on ways to learn real-world scenarios. We designed realistic virtual forensic scenarios for Cengage Learning, replicating real-world details to provide users with immersive and accurate investigative experiences.
            </Paragraph>
            <MetaGrid items={[
              { icon: FiClock,     label: 'Duration',  value: '6 months' },
              { icon: FiUsers,     label: 'Team Size', value: '10' },
              { icon: FiBriefcase, label: 'Role',      value: 'Jr. UX Designer' },
            ]} />
          </Section>

          <Section>
            <Subtitle>Challenges</Subtitle>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {[
                {
                  num: '01',
                  title: 'Concept Translation',
                  desc: 'Translating complex forensic procedures and concepts into engaging, accurate virtual interactions.',
                },
                {
                  num: '02',
                  title: 'Realism vs Constraints',
                  desc: 'Maintaining investigative authenticity while working within technical and development constraints.',
                },
                {
                  num: '03',
                  title: 'Diverse Learners',
                  desc: 'Designing for varied learning styles, ability levels, and degrees of technology access.',
                },
              ].map(({ num, title, desc }) => (
                <div
                  key={num}
                  className="rounded-2xl p-6 border flex flex-col gap-3"
                  style={{
                    background: isDark ? '#1F130A' : '#EDE2D1',
                    borderColor: isDark ? '#2E1F12' : '#E2D5C0',
                  }}
                >
                  <span
                    className="font-display text-3xl font-bold leading-none"
                    style={{ color: isDark ? '#CF7A3E' : '#9B4F1E' }}
                  >
                    {num}
                  </span>
                  <p className="font-semibold text-sm" style={{ color: isDark ? '#F2E6D2' : '#2A1A0E' }}>
                    {title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: isDark ? '#9A8470' : '#7A6752' }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section>
            <Subtitle>Design Process</Subtitle>
            <DesignProcessFlow />
          </Section>

          <Section>
            <Subtitle>User Persona</Subtitle>
            <PersonaCard
              bgColor="bg-[#5C3C22]/90"
              name="Emma Williamson"
              image="/images/shared/persona-female.png"
              items={[
                { label: 'Age', description: '18' },
                { label: 'Occupation', description: 'Student' },
                { label: 'Location', description: 'California, USA' },
                { label: 'Tech Literacy', description: 'High' },
              ]}
              quote="I want to experience a practical forensic lab where I can perform experiments."
              goals={[
                'Visualize and experience realistic scenarios.',
                'Develop skills that align with real-world standards.',
                'Learn forensic techniques without needing physical lab access.',
              ]}
              painPoints={[
                'Lack of practical experience.',
                'Difficulty visualizing real scenarios.',
                'Limited access to labs.',
                'Risky real-world practice.',
              ]}
            />
          </Section>

          <Section>
            <Subtitle>Solution & Wireframes</Subtitle>
            <Paragraph>
              We designed a virtual investigation lab around a simulated murder case, requiring students to find and analyze evidence to identify the culprit. The lab includes a fully interactive crime scene with evidence collection and analysis tools — closely replicating real-world forensic investigations in a safe, controlled environment.
            </Paragraph>
            <Section>
              <SubSubtitle>Lab Guide — Navigating & Interacting</SubSubtitle>
              <ImageFrame src="/images/crime-labs/screen-1.png" alt="Lab guide" />
            </Section>
            <Section>
              <SubSubtitle>Analyzing the Crime Scene</SubSubtitle>
              <ImageFrame src="/images/crime-labs/screen-2.png" alt="Analyzing the crime scene" />
            </Section>
            <Section>
              <SubSubtitle>Collecting the Evidence</SubSubtitle>
              <ImageFrame src="/images/crime-labs/screen-3.png" alt="Collecting the evidence" />
            </Section>
          </Section>

          <Section>
            <Subtitle>Responsive Designs</Subtitle>
            <MobileSlider />
          </Section>

          <Section>
            <Subtitle>Conclusion</Subtitle>
            <Paragraph>
              The virtual forensic lab improved student engagement and increased concept retention based on client feedback. It provided a safe, accessible way for learners to gain hands-on experience with real-world investigative scenarios — without the constraints of a physical lab.
            </Paragraph>
          </Section>

        </div>
      </CaseStudyContainer>
    </ThemeContext.Provider>
  )
}
