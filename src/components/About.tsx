import {
  ArrowUpRight,
  Download,
  Dumbbell,
  GraduationCap,
  MapPin,
  Music,
  Newspaper,
} from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import { projects } from '../data/projects'
import CopyEmail from './CopyEmail'

const experiences = [
  {
    role: 'Développeur Full Stack',
    company: 'S2I Evolution',
    period: 'Oct. 2024 – Août 2025',
    description:
      'Développement et maintenance de modules sur mesure pour PrestaShop 1.7 et 8.2. Interventions front-end et optimisations back-end pour des clients grands comptes (Celine Opticien, Hellomoon).',
  },
  {
    role: 'Développeur stagiaire',
    company: 'LUC Ratteli',
    period: '6 mois',
    description:
      "Création d'une bibliothèque open-source pour automatiser le cycle de vie d'articles, de l'ajout à la revente.",
  },
  {
    role: "Chef d'équipe",
    company: 'CNPE Fessenheim',
    period: 'Expérience antérieure',
    description:
      'Management d’équipe, gestion des priorités et respect des protocoles de sécurité en environnement critique.',
  },
]

const interests = [
  { label: 'Composition musicale', icon: Music },
  { label: 'Veille technologique', icon: Newspaper },
  { label: 'Musculation', icon: Dumbbell },
]

const stats = [
  { value: '~1 an', label: 'en agence e-commerce' },
  { value: projects.filter((p) => p.kind === 'Module').length, label: 'modules PrestaShop' },
  { value: projects.filter((p) => p.kind === 'Projet').length, label: 'projets réalisés' },
]

function About() {
  return (
    <section id="about" className="px-4 py-8 sm:px-6 md:py-10">
      <h2 className="mb-6 text-2xl font-bold">À propos</h2>

      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <article className="flex flex-col rounded-lg bg-elevated p-6">
          <div className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <p className="flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              Mulhouse · Mobilité Colmar / Strasbourg
            </p>
            <CopyEmail />
          </div>
          <div className="flex flex-col gap-4 text-base leading-relaxed sm:text-lg">
            <p>
              Avant d’écrire du code, j’ai été chef d’équipe à la centrale de Fessenheim. Là-bas, la
              rigueur et le travail d’équipe n’étaient pas des options : je les ai gardés en passant
              au développement.
            </p>
            <p>
              Depuis, j’ai passé près d’un an en agence e-commerce à créer des modules PrestaShop
              sur mesure pour des marques comme Celine Opticien et Hellomoon. Ce que j’aime :
              comprendre un problème en entier, puis livrer quelque chose de propre qui tient en
              production.
            </p>
            <p>
              Aujourd’hui, je cherche une équipe où continuer à progresser et être utile dès le
              premier jour.
            </p>
          </div>

          <dl className="mt-6 mb-8 flex flex-wrap gap-x-8 gap-y-3">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-black">{value}</dd>
                <dd className="text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-auto flex flex-wrap gap-3">
            <a
              href="https://github.com/BryanChn"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 items-center justify-center gap-2 rounded-full border border-white bg-white px-4 py-3 font-bold whitespace-nowrap text-black transition-transform hover:scale-105 sm:gap-3 sm:px-6"
            >
              <SiGithub size={22} aria-hidden="true" />
              GitHub
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/bryan-chaine"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-3 font-bold whitespace-nowrap transition hover:scale-105 hover:border-white sm:gap-3 sm:px-6"
            >
              <FaLinkedin size={22} aria-hidden="true" />
              LinkedIn
              <ArrowUpRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/Chaine_Bryan_CV.pdf"
              download
              aria-label="Télécharger mon CV (PDF)"
              title="Télécharger mon CV (PDF)"
              className="group flex flex-1 items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-3 font-bold whitespace-nowrap transition hover:scale-105 hover:border-white sm:gap-3 sm:px-6"
            >
              <Download size={20} className="transition-transform group-hover:translate-y-0.5" />
              Mon CV
            </a>
          </div>
        </article>

        <div className="flex flex-col gap-4">
          <article className="rounded-lg bg-elevated p-6">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <GraduationCap size={20} className="text-accent-light" />
              Formation
            </h3>
            <p className="font-medium">Licence Pro Développeur Web et Application</p>
            <p className="text-sm text-muted">UHA 4.0 — École du Numérique, Mulhouse · 2023</p>
          </article>

          <article className="rounded-lg bg-elevated p-6">
            <h3 className="mb-3 font-bold">Centres d'intérêt</h3>
            <ul className="flex flex-wrap gap-2">
              {interests.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-highlight px-3 py-1 text-sm"
                >
                  <Icon size={14} className="text-accent-light" />
                  {label}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      <h3 className="mt-10 mb-4 text-xl font-bold">Parcours</h3>
      <ol className="border-l-2 border-highlight">
        {experiences.map((exp) => (
          <li key={exp.company} className="relative mb-8 pl-6 last:mb-0">
            <span className="absolute top-1.5 -left-1.75 size-3 rounded-full bg-accent" />
            <p className="font-bold">
              {exp.role} <span className="text-accent-light">· {exp.company}</span>
            </p>
            <p className="mb-2 text-sm text-muted">{exp.period}</p>
            <p className="max-w-2xl text-muted">{exp.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default About
