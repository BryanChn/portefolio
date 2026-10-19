import { Play } from 'lucide-react'

function PlayerBar() {
  return (
    <footer className="flex items-center justify-between gap-4 bg-base px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="size-12 rounded bg-gradient-to-br from-accent to-accent-light" />
        <div>
          <p className="font-bold">Bryan Chaine</p>
          <p className="text-sm text-muted">En recherche de poste</p>
        </div>
      </div>

      {/* Égaliseur animé : chaque barre a un délai différent */}
      <div className="hidden sm:flex h-6 items-end gap-1" aria-hidden="true">
        {[0, 0.2, 0.4, 0.1, 0.3].map((delay) => (
          <span
            key={delay}
            className="w-1 h-full origin-bottom rounded-full bg-accent animate-eq"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>

      <a
        href="#contact"
        className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 font-bold text-black transition-transform hover:scale-105 hover:bg-accent-light"
      >
        <Play size={18} fill="currentColor" />
        Me contacter
      </a>
    </footer>
  )
}

export default PlayerBar
