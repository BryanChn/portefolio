import { useState } from 'react'
import type { IconType } from 'react-icons'
import { FaJava } from 'react-icons/fa'
import { RiOpenaiFill } from 'react-icons/ri'
import {
  SiClaude,
  SiCss,
  SiGit,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiPrestashop,
  SiReact,
  SiSass,
  SiSymfony,
  SiWordpress,
} from 'react-icons/si'

type Category = 'Langages' | 'Frameworks' | 'E-commerce' | 'IA' | 'Outils'

type Skill = {
  name: string
  detail: string
  category: Category
  icon: IconType
  color: string
}

const categories: Category[] = ['Langages', 'Frameworks', 'E-commerce', 'IA', 'Outils']

const skills: Skill[] = [
  {
    name: 'React',
    detail: 'SPA et PWA hors-ligne',
    category: 'Frameworks',
    icon: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'PHP',
    detail: 'Back-end, module sur mesure sur prestashop',
    category: 'Langages',
    icon: SiPhp,
    color: '#777BB4',
  },
  {
    name: 'JavaScript',
    detail: 'ES6+, front et back',
    category: 'Langages',
    icon: SiJavascript,
    color: '#F7DF1E',
  },
  {
    name: 'HTML5',
    detail: 'Intégration sémantique',
    category: 'Langages',
    icon: SiHtml5,
    color: '#E34F26',
  },
  {
    name: 'CSS3',
    detail: 'Intégration responsive',
    category: 'Langages',
    icon: SiCss,
    color: '#1572B6',
  },
  {
    name: 'Sass',
    detail: 'Styles structurés et réutilisables',
    category: 'Langages',
    icon: SiSass,
    color: '#CC6699',
  },
  {
    name: 'Java',
    detail: 'Programmation orientée objet',
    category: 'Langages',
    icon: FaJava,
    color: '#F89820',
  },
  {
    name: 'Next.js',
    detail: 'React full-stack',
    category: 'Frameworks',
    icon: SiNextdotjs,
    color: '#FFFFFF',
  },
  {
    name: 'React Native',
    detail: 'Applications mobiles',
    category: 'Frameworks',
    icon: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'Symfony',
    detail: 'Framework PHP',
    category: 'Frameworks',
    icon: SiSymfony,
    color: '#FFFFFF',
  },
  {
    name: 'Ionic',
    detail: 'Applications mobiles hybrides',
    category: 'Frameworks',
    icon: SiIonic,
    color: '#3880FF',
  },
  {
    name: 'NestJS',
    detail: 'API Node.js',
    category: 'Frameworks',
    icon: SiNestjs,
    color: '#E0234E',
  },
  {
    name: 'PrestaShop',
    detail: 'Modules sur mesure 1.7 / 8.2 · Twig, Smarty',
    category: 'E-commerce',
    icon: SiPrestashop,
    color: '#DF0067',
  },
  {
    name: 'WordPress',
    detail: 'CMS, one page',
    category: 'E-commerce',
    icon: SiWordpress,
    color: '#21759B',
  },
  {
    name: 'Claude',
    detail: 'Développement assisté par IA',
    category: 'IA',
    icon: SiClaude,
    color: '#D97757',
  },
  {
    name: 'ChatGPT',
    detail: 'Recherche et prototypage, brainstorming',
    category: 'IA',
    icon: RiOpenaiFill,
    color: '#FFFFFF',
  },
  {
    name: 'Git',
    detail: 'Versioning et travail en équipe',
    category: 'Outils',
    icon: SiGit,
    color: '#F05032',
  },
]

function Skills() {
  const [active, setActive] = useState<'Tout' | Category>('Tout')

  const visibleSkills =
    active === 'Tout' ? skills : skills.filter((skill) => skill.category === active)

  // Nombre de compétences par filtre, affiché dans chaque pastille
  const countFor = (cat: 'Tout' | Category) =>
    cat === 'Tout' ? skills.length : skills.filter((skill) => skill.category === cat).length

  return (
    <section id="skills" className="px-4 py-8 sm:px-6 md:py-10">
      <h2 className="mb-4 text-2xl font-bold">Compétences</h2>

      <div className="mb-6 no-scrollbar flex gap-2 overflow-x-auto">
        {(['Tout', ...categories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat ? 'bg-white text-black' : 'bg-highlight text-white hover:bg-white/20'
            }`}
          >
            {cat} <span className="opacity-60">{countFor(cat)}</span>
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {visibleSkills.map(({ name, detail, icon: Icon, color }) => (
          <li
            key={name}
            className="group flex flex-col gap-3 rounded-lg bg-elevated p-4 transition-colors hover:bg-highlight"
          >
            <Icon
              size={40}
              color={color}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-muted">{detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
