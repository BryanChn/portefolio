import { Disc3, Home, ListMusic, Mail, User } from 'lucide-react'

export const navItems = [
  { id: 'hero', label: 'Accueil', icon: Home },
  { id: 'about', label: 'À propos', icon: User },
  { id: 'skills', label: 'Compétences', icon: ListMusic },
  { id: 'projects', label: 'Projets', icon: Disc3 },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export const sectionIds = navItems.map((item) => item.id)
