import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import PlayerBar from './components/PlayerBar'
import Projects from './components/Projects'
import { MobileNav, Sidebar } from './components/Sidebar'
import Skills from './components/Skills'
import { sectionIds } from './data/navigation'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const active = useActiveSection(sectionIds)

  return (
    <div className="flex h-dvh flex-col">
      <div className="flex min-h-0 flex-1 gap-2 md:p-2">
        <Sidebar active={active} />
        <main className="flex-1 overflow-y-auto scroll-smooth bg-surface pb-6 md:rounded-lg">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <PlayerBar />
      <MobileNav active={active} />
    </div>
  )
}

export default App
