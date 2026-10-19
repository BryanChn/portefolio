import { Disc3, Home, ListMusic, Mail, User } from 'lucide-react'

const navItems = [
  { href: '#hero', label: 'Accueil', icon: Home },
  { href: '#about', label: 'À propos', icon: User },
  { href: '#skills', label: 'Compétences', icon: ListMusic },
  { href: '#projects', label: 'Projets', icon: Disc3 },
  { href: '#contact', label: 'Contact', icon: Mail },
]

function Sidebar() {
  return (
    <>
      {/* Desktop : colonne à gauche */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col gap-2 rounded-lg bg-surface p-4">
        <p className="px-3 pb-2 text-sm font-bold text-muted">Bibliothèque</p>
        {navItems.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className="flex items-center gap-4 rounded-md px-3 py-2 font-bold text-muted transition-colors hover:bg-highlight hover:text-white"
          >
            <Icon size={22} />
            {label}
          </a>
        ))}
      </aside>

      {/* Mobile : barre d'onglets en bas */}
      <nav className="md:hidden order-last flex justify-around bg-surface py-2">
        {navItems.map(({ href, label, icon: Icon }) => (
          <a key={href} href={href} className="flex flex-col items-center gap-1 text-xs text-muted hover:text-white">
            <Icon size={20} />
            {label}
          </a>
        ))}
      </nav>
    </>
  )
}

export default Sidebar
