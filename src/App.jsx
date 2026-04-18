import { useState, useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Navbar from './components/layout/Navbar'
import WorkFooter from './components/layout/WorkFooter'
import Home from './pages/Home'
import SportsAuction from './pages/case-studies/SportsAuction'
import TeacherDashboard from './pages/case-studies/TeacherDashboard'
import AiTeacherEvaluation from './pages/case-studies/AiTeacherEvaluation'
import CrimeLabs from './pages/case-studies/CrimeLabs'

// Fires only when new page mounts (after exit animation completes with mode="wait")
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
}

function AnimatedOutlet() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ScrollToTopOnMount />
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}

function RootLayout({ isDark, setIsDark }) {
  return (
    <div className={isDark ? 'dark' : ''}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <AnimatedOutlet />
    </div>
  )
}

const CaseStudyLayout = () => (
  <>
    <Outlet />
    <WorkFooter />
  </>
)

export default function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <Routes>
      <Route element={<RootLayout isDark={isDark} setIsDark={setIsDark} />}>
        <Route index element={<Home isDark={isDark} />} />
        <Route element={<CaseStudyLayout />}>
          <Route path="sports-auction" element={<SportsAuction isDark={isDark} />} />
          <Route path="teacher-dashboard" element={<TeacherDashboard isDark={isDark} />} />
          <Route path="ai-teacher-evaluation" element={<AiTeacherEvaluation isDark={isDark} />} />
          <Route path="crime-labs" element={<CrimeLabs isDark={isDark} />} />
        </Route>
      </Route>
    </Routes>
  )
}
