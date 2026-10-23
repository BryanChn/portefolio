import { ArrowUpRight, Dumbbell, GraduationCap, MapPin, Music, Newspaper } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { projects } from '../data/projects'

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
          <p className="mb-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} />
            Mulhouse · Mobilité Colmar / Strasbourg
          </p>
          <p className="text-lg leading-relaxed">
            Développeur web & mobile, formé front et back. Près d’un an en agence e-commerce à
            concevoir, maintenir et optimiser des modules PrestaShop sur mesure pour des clients
            (Celine Opticien, Hellomoon). Je résous les problèmes techniques de bout en bout, je
            travaille en Agile/Scrum et j’intègre l’IA à mon workflow pour livrer plus vite, avec un
            code relu et fiable. Je cherche une équipe exigeante où être utile dès le premier jour.
          </p>

          <dl className="mt-6 mb-8 flex flex-wrap gap-x-8 gap-y-3">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-black">{value}</dd>
                <dd className="text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>

          <a
            href="https://github.com/BryanChn"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-auto flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 font-bold text-black transition-transform hover:scale-105"
          >
            <SiGithub size={22} aria-hidden="true" />
            Voir mon GitHub
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
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
