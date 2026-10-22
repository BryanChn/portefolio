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

  // 1. État partagé : le projet ouvert dans la fiche, ou null si elle est fermée
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="px-6 py-10">
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
          // 2. Au clic, la carte « remonte » son projet dans l'état du parent
          <ProjectCard key={project.title} project={project} onClick={() => setSelected(project)} />
        ))}
      </div>

      {/* 3. La fiche lit l'état ; onClose le remet à null (Échap, croix, clic sur le fond) */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export default Projects
