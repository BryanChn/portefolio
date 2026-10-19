import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import PlayerBar from './components/PlayerBar'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'
import Skills from './components/Skills'

function App() {
  return (
    <div className="flex h-dvh flex-col">
      <div className="flex min-h-0 flex-1 flex-col gap-2 md:flex-row md:p-2">
        <Sidebar />
        <main className="flex-1 overflow-y-auto scroll-smooth bg-surface md:rounded-lg">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <PlayerBar />
    </div>
  )
}

export default App
