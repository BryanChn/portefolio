import { useEffect, useState, type RefObject } from 'react'

const ACTIVATION_OFFSET = 0.2

export function useActiveSection(ids: string[], containerRef: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let frame = 0

    const update = () => {
      frame = 0
      const { top, height } = container.getBoundingClientRect()
      const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 2

      let current = ids[0]
      if (atBottom) {
        current = ids[ids.length - 1]
      } else {
        for (const id of ids) {
          const element = document.getElementById(id)
          if (element && element.getBoundingClientRect().top - top <= height * ACTIVATION_OFFSET) {
            current = id
          }
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    container.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, containerRef])

  return active
}
