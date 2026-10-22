import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Reveal({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'motion-safe:translate-y-6 motion-safe:opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

export default Reveal
