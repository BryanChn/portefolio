import { BadgeCheck } from 'lucide-react'
import pix from '../assets/photo_portfolio_detouree_v4.png'

function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-6 bg-linear-to-b from-accent/70 to-surface px-4 pt-10 pb-8 text-center sm:px-6 md:flex-row md:items-end md:pt-20 md:text-left"
    >
      <div className="size-36 shrink-0 overflow-hidden rounded-full bg-linear-to-br from-accent-light to-accent shadow-2xl shadow-black/50 sm:size-44 lg:size-52">
        <img
          src={pix}
          alt="Bryan Chaine"
          width={324}
          height={324}
          className="size-full object-cover object-top"
        />
      </div>

      <div className="min-w-0">
        <p className="flex items-center justify-center gap-2 text-sm font-medium md:justify-start">
          <BadgeCheck size={22} className="fill-accent-light text-surface" />
          Développeur vérifié
        </p>
        <h1 className="mt-2 text-5xl font-black tracking-tight sm:text-6xl lg:text-8xl">
          Chaine Bryan
        </h1>
        <p className="mt-3 text-lg font-medium text-white/80 sm:text-xl">
          Développeur web & mobile
        </p>
      </div>
    </section>
  )
}

export default Hero
