import { BadgeCheck } from 'lucide-react'
import pix from '../assets/photo_portfolio_detouree_v4.png'

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-80 flex-col justify-end gap-2 bg-linear-to-b from-accent/70 to-surface px-6 pt-24 pb-8"
    >
      <div>
        <img src={pix} alt="Moi" />
      </div>

      <h1 className="font text-6xl font-black">Chaine Bryan</h1>
      <p className="flex items-center gap-2 text-xl font-medium">
        <BadgeCheck size={24} className="fill-accent-light text-surface" />
        Développeur web & mobile
      </p>
    </section>
  )
}

export default Hero
