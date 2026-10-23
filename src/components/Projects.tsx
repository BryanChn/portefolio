import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { projects, type Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects() {
  const trackRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: direction * trackRef.current.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="px-4 py-8 sm:px-6 md:py-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projets</h2>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Précédent"
            className="rounded-full bg-highlight p-1.5 hover:bg-white/20"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Suivant"
            className="rounded-full bg-highlight p-1.5 hover:bg-white/20"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="-mx-3 no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} onClick={() => setSelected(project)} />
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export default Projects
