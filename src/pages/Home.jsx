import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Work from '../components/home/Work'
import Connect from '../components/home/Connect'
import { ThemeContext, PageShell } from '../components/ui'

export default function Home({ isDark }) {
  return (
    <ThemeContext.Provider value={isDark}>
      <PageShell>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Work isDark={isDark} />
        <Connect isDark={isDark} />
      </PageShell>
    </ThemeContext.Provider>
  )
}
