import { Play } from 'lucide-react'
import type { Project } from '../data/projects'

type Props = {
  project: Project
  onClick: () => void
}

function ProjectCard({ project, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-44 shrink-0 snap-start rounded-lg p-3 text-left transition-colors hover:bg-highlight sm:w-52"
    >
      <div
        className={`relative mb-3 grid aspect-square place-items-center rounded-md bg-linear-to-br shadow-lg ${project.cover}`}
      >
        <span className="px-2 text-center text-2xl font-black tracking-tight">{project.title}</span>
        <span className="absolute right-2 bottom-2 grid size-11 translate-y-2 place-items-center rounded-full bg-accent text-black opacity-0 shadow-xl transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <Play size={20} fill="currentColor" />
        </span>
      </div>
      <p className="truncate font-bold">{project.title}</p>
      <p className="truncate text-sm text-muted">
        {project.kind} · {project.subtitle}
      </p>
    </button>
  )
}

export default ProjectCard
