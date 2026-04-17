import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import WorkFooter from './components/layout/WorkFooter'
import Home from './pages/Home'
import SportsAuction from './pages/case-studies/SportsAuction'
import TeacherDashboard from './pages/case-studies/TeacherDashboard'
import AiTeacherEvaluation from './pages/case-studies/AiTeacherEvaluation'
import CrimeLabs from './pages/case-studies/CrimeLabs'

function RootLayout({ isDark, setIsDark }) {
  return (
    <div className={isDark ? 'dark' : ''}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Outlet />
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
