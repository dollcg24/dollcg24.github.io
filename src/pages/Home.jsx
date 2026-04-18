import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Work from '../components/home/Work'
import Connect from '../components/home/Connect'
import { ThemeContext, PageShell } from '../components/ui'
import SEO from '../components/SEO'

export default function Home({ isDark }) {
  return (
    <ThemeContext.Provider value={isDark}>
      <SEO path="/" />
      <PageShell>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Work isDark={isDark} />
      </PageShell>
      {/* Connect is full-bleed dark — lives outside the constrained PageShell */}
      <Connect />
    </ThemeContext.Provider>
  )
}
