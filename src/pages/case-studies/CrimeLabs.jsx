import { useContext, Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiClock, FiUsers, FiBriefcase, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { ThemeContext, CaseStudyContainer, Section, Subtitle, SubSubtitle, Paragraph, BulletList, ListItem, ImageFrame, PersonaCard } from '../../components/ui'

function MetaItem({ icon: Icon, label, value }) {
  const isDark = useContext(ThemeContext)
  return (
    <div className="flex items-start gap-2">
      <Icon size={15} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
      <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        <span className="font-semibold">{label}:</span> {value}
      </span>
    </div>
  )
}

const STEPS = [
  {
    label: 'Define',
    description: 'Understood the requirement and defined the problem statement.',
    side: 'left',
    size: 64,
    gradient: 'linear-gradient(145deg, #93c5fd, #60a5fa)',
    shadow: '0 4px 20px rgba(96,165,250,0.35)',
  },
  {
    label: 'Research',
    description: 'Collaborated with experts to understand the process.',
    side: 'right',
    size: 78,
    gradient: 'linear-gradient(145deg, #818cf8, #6366f1)',
    shadow: '0 4px 20px rgba(99,102,241,0.35)',
  },
  {
    label: 'Ideate',
    description: 'Brainstorming sessions to create interactive experiences.',
    side: 'left',
    size: 92,
    gradient: 'linear-gradient(145deg, #a78bfa, #7c3aed)',
    shadow: '0 4px 20px rgba(124,58,237,0.35)',
  },
  {
    label: 'Prototype',
    description: 'Designed wireframes for navigating crime scenes, using forensic tools.',
    side: 'right',
    size: 106,
    gradient: 'linear-gradient(145deg, #818cf8, #4f46e5)',
    shadow: '0 4px 20px rgba(79,70,229,0.35)',
  },
  {
    label: 'Test',
    description: 'Conducted user testing with educators capturing usability insights.',
    side: 'left',
    size: 120,
    gradient: 'linear-gradient(145deg, #6366f1, #3730a3)',
    shadow: '0 4px 20px rgba(55,48,163,0.4)',
  },
]

function DesignProcessFlow() {
  const isDark = useContext(ThemeContext)
  const textColor = isDark ? 'text-gray-400' : 'text-gray-500'

  return (
    <>
      {/* Desktop: alternating left/right */}
      <div className="hidden sm:flex flex-col items-center">
        {STEPS.map((step, i) => (
          <Fragment key={step.label}>
            <div className="flex items-center w-full">
              {/* Left slot */}
              <div className={`flex-1 pr-8 text-right text-sm leading-snug ${textColor} ${step.side === 'left' ? '' : 'invisible'}`}>
                {step.description}
              </div>

              {/* Circle */}
              <div
                className="flex-shrink-0 rounded-full flex items-center justify-center font-semibold text-white"
                style={{
                  width: step.size,
                  height: step.size,
                  background: step.gradient,
                  boxShadow: step.shadow,
                  fontSize: step.size >= 100 ? '0.9rem' : step.size >= 80 ? '0.8rem' : '0.75rem',
                }}
              >
                {step.label}
              </div>

              {/* Right slot */}
              <div className={`flex-1 pl-8 text-left text-sm leading-snug ${textColor} ${step.side === 'right' ? '' : 'invisible'}`}>
                {step.description}
              </div>
            </div>

            {/* Connector arrow */}
            {i < STEPS.length - 1 && (
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" className="my-0.5">
                <line x1="7" y1="0" x2="7" y2="17" stroke={isDark ? '#475569' : '#d1d5db'} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 13 L7 19 L12 13" stroke={isDark ? '#475569' : '#d1d5db'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile: centered stacked */}
      <div className="sm:hidden flex flex-col items-center">
        {STEPS.map((step, i) => (
          <Fragment key={step.label}>
            <div className="flex flex-col items-center gap-2">
              <div
                className="rounded-full flex items-center justify-center font-semibold text-white"
                style={{
                  width: step.size * 0.75,
                  height: step.size * 0.75,
                  background: step.gradient,
                  boxShadow: step.shadow,
                  fontSize: '0.75rem',
                }}
              >
                {step.label}
              </div>
              <p className={`text-xs text-center leading-snug px-6 ${textColor}`}>
                {step.description}
              </p>
            </div>

            {i < STEPS.length - 1 && (
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" className="my-1">
                <line x1="7" y1="0" x2="7" y2="17" stroke={isDark ? '#475569' : '#d1d5db'} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 13 L7 19 L12 13" stroke={isDark ? '#475569' : '#d1d5db'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </Fragment>
        ))}
      </div>
    </>
  )
}

const MOBILE_SLIDES = [
  { src: '/images/crime-labs/mobile-1.png', alt: 'Responsive design — screen 1' },
  { src: '/images/crime-labs/mobile-2.png', alt: 'Responsive design — screen 2' },
]

function MobileSlider() {
  const isDark = useContext(ThemeContext)
  const [current, setCurrent] = useState(0)
  const total = MOBILE_SLIDES.length

  const go = (dir) => setCurrent(i => (i + dir + total) % total)

  const peekIdx = (current + 1) % total
  const peekOnRight = peekIdx > current

  const btnClass = (enabled) => `flex-shrink-0 rounded-full p-2.5 transition-all ${
    enabled
      ? `cursor-pointer hover:scale-105 active:scale-95 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`
      : `cursor-default ${isDark ? 'text-slate-700' : 'text-gray-200'}`
  }`

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center gap-4 sm:gap-6 w-full justify-center">

        <button
          onClick={() => current > 0 && go(-1)}
          aria-label="Previous"
          disabled={current === 0}
          className={btnClass(current > 0)}
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Stacked cards — container is wider than front to show the peek side */}
        <div className="relative w-full max-w-[230px] sm:max-w-[260px]">

          {/* Peek image — smaller, anchored to its side, offset down */}
          <div
            className="absolute opacity-40 rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              width: '74%',
              [peekOnRight ? 'right' : 'left']: 0,
              top: '5%',
              zIndex: 0,
            }}
          >
            <img src={MOBILE_SLIDES[peekIdx].src} alt="" className="w-full h-auto" />
          </div>

          {/* Front image — larger, anchored to the opposite side */}
          <div
            className="relative z-10 rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              width: '88%',
              marginLeft: peekOnRight ? 0 : 'auto',
              marginRight: peekOnRight ? 'auto' : 0,
            }}
          >
            <img
              key={current}
              src={MOBILE_SLIDES[current].src}
              alt={MOBILE_SLIDES[current].alt}
              className="w-full h-auto"
            />
          </div>

        </div>

        <button
          onClick={() => current < total - 1 && go(1)}
          aria-label="Next"
          disabled={current === total - 1}
          className={btnClass(current < total - 1)}
        >
          <FiChevronRight size={22} />
        </button>

      </div>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {MOBILE_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-200 ${
              i === current
                ? `w-5 h-2 ${isDark ? 'bg-white' : 'bg-gray-800'}`
                : `w-2 h-2 ${isDark ? 'bg-slate-600' : 'bg-gray-300'}`
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function CrimeLabsCaseStudy({ isDark }) {
  const navigate = useNavigate()

  return (
    <ThemeContext.Provider value={isDark}>
      <CaseStudyContainer>

        {/* Header */}
        <div className="flex items-start gap-4">
          <button
            onClick={() => navigate('/')}
            className={`flex-shrink-0 rounded-full border p-2 cursor-pointer hover:scale-105 transition-all ${isDark ? 'border-gray-600 text-gray-300 hover:border-gray-400' : 'border-gray-900 text-gray-900'}`}
            aria-label="Go back"
          >
            <FiArrowLeft size={22} />
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            Crime Investigation Virtual Labs
          </h1>
        </div>

        {/* Overview */}
        <Section>
          <Paragraph>
            <p className="mb-3">Forensic education didn't give students hands-on ways to learn real-world scenarios. A virtual environment was needed to help them explore the world of forensics.</p>
            <p>We designed realistic virtual forensic scenarios for Cengage Learning, replicating real-world details to provide users with immersive and accurate investigative experiences.</p>
          </Paragraph>
          <div className={`rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
            <MetaItem icon={FiClock} label="Duration" value="6 months" />
            <MetaItem icon={FiUsers} label="Team Size" value="10" />
            <MetaItem icon={FiBriefcase} label="Role" value="Jr. UX Designer" />
          </div>
        </Section>

        {/* Challenges */}
        <Section>
          <Subtitle>Challenges</Subtitle>
          <Paragraph>
            <BulletList>
              <ListItem description="Translating complex forensic concepts into virtual interactions." />
              <ListItem description="Maintaining realism while working within technical constraints." />
              <ListItem description="Designing for diverse learners and access needs." />
            </BulletList>
          </Paragraph>
        </Section>

        {/* Design Process */}
        <Section>
          <Subtitle>Design Process</Subtitle>
          <DesignProcessFlow />
        </Section>

        {/* User Persona */}
        <Section>
          <Subtitle>User Persona</Subtitle>
          <PersonaCard
            bgColor="bg-[#3D3A8F]/90"
            name="Emma Williamson"
            image="/images/shared/persona-female.png"
            items={[
              { label: 'Age', description: '18' },
              { label: 'Occupation', description: 'Student' },
              { label: 'Location', description: 'California, USA' },
              { label: 'Tech Literacy', description: 'High' },
            ]}
            quote="I want to experience a practical forensic labs where I can perform experiments."
            goals={[
              'Visualize and experience realistic scenarios.',
              'Develop skills that align with real-world standards.',
              'Learn forensic techniques without needing physical lab access.',
            ]}
            painPoints={[
              'Lack of practical experience.',
              'Difficulty in visualizing real scenarios.',
              'Limited access to labs.',
              'Risky real-world practice.',
            ]}
          />
        </Section>

        {/* Solution and Wireframes */}
        <Section>
          <Subtitle>Solution and Wireframes</Subtitle>
          <Paragraph>
            <p className="mb-3">To address these challenges, we designed a virtual investigation lab around a simulated murder case, requiring students to find and analyze evidence to identify the culprit.</p>
            <p className="mb-3">It includes a fully interactive crime scene with evidence collection and analysis tools, allowing students to engage in realistic investigative procedures.</p>
            <p>This virtual lab closely replicates real-world forensic investigations, providing hands-on experience in a safe and controlled environment.</p>
          </Paragraph>

          <Section>
            <SubSubtitle>Lab guide — navigating and interacting within the lab</SubSubtitle>
            <ImageFrame src="/images/crime-labs/screen-1.png" alt="Lab guide" />
          </Section>

          <Section>
            <SubSubtitle>Analyzing the crime scene</SubSubtitle>
            <ImageFrame src="/images/crime-labs/screen-2.png" alt="Analyzing the crime scene" />
          </Section>

          <Section>
            <SubSubtitle>Collecting the evidence</SubSubtitle>
            <ImageFrame src="/images/crime-labs/screen-3.png" alt="Collecting the evidence" />
          </Section>
        </Section>

        {/* Responsive Designs */}
        <Section>
          <Subtitle>Responsive Designs</Subtitle>
          <MobileSlider />
        </Section>

        {/* Conclusion */}
        <Section>
          <Subtitle>Conclusion</Subtitle>
          <Paragraph>
            <p className="mb-3">The virtual forensic lab improved student engagement and increased concept retention based on client feedback.</p>
            <p>It provided a safe, accessible way for learners to gain hands-on experience with real-world scenarios.</p>
          </Paragraph>
        </Section>

      </CaseStudyContainer>
    </ThemeContext.Provider>
  )
}
