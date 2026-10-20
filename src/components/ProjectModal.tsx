import { ExternalLink, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { SiGithub } from 'react-icons/si'
import type { Project } from '../data/projects'

type Props = {
  project: Project | null // 
  onClose: () => void
}

function ProjectModal({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)


  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="m-auto w-[min(42rem,calc(100%-2rem))] overflow-hidden rounded-xl bg-surface p-0 text-white shadow-2xl backdrop:bg-black/70"
    >
      {project && (
        <article>
          <header className={`flex items-end gap-5 bg-linear-to-b p-6 ${project.cover}`}>
            <div
              className={`grid size-28 shrink-0 place-items-center rounded-md bg-linear-to-br text-xl font-black shadow-2xl sm:size-36 ${project.cover}`}
            >
              {project.title}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium">{project.kind}</p>
              <h3 className="truncate text-3xl font-black sm:text-5xl">{project.title}</h3>
              <p className="mt-2 text-sm text-white/80">
                {project.context} · {project.subtitle}
              </p>
            </div>
          </header>

          <div className="flex flex-col gap-5 p-6">
            <p className="text-lg font-medium">{project.summary}</p>
            <p className="leading-relaxed text-muted">{project.description}</p>

            {project.tech.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li key={t} className="rounded-full bg-highlight px-3 py-1 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            )}

            {project.links && (
              <div className="flex gap-3">
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 font-bold text-black hover:bg-accent-light">
                    <ExternalLink size={18} /> Démo
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 font-bold hover:border-white">
                    <SiGithub size={18} /> Code
                  </a>
                )}
              </div>
            )}
          </div>
        </article>
      )}

      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer"
        className="absolute right-3 top-3 rounded-full bg-black/40 p-2 hover:bg-black/70"
      >
        <X size={20} />
      </button>
    </dialog>
  )
}

export default ProjectModal
