import { BadgeCheck } from 'lucide-react'

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-80 flex-col justify-end gap-2 bg-gradient-to-b from-accent/70 to-surface px-6 pb-8 pt-24"
    >
      <p className="flex items-center gap-2 text-sm font-medium">
        <BadgeCheck size={22} className="fill-accent-light text-surface" />
        Développeur vérifié
      </p>
 <h1>Chaine Bryan Développeur web & mobile</h1>
    </section>
  )
}

export default Hero
