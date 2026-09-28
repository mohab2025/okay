import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function CursorRing() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const element = ref.current
    if (!element || reduced) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let cx = x
    let cy = y
    let frame = 0
    const paint = () => {
      cx += (x - cx) * 0.18
      cy += (y - cy) * 0.18
      element.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      frame = window.requestAnimationFrame(paint)
    }
    const onMove = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      const target = event.target
      const hot = target instanceof Element && Boolean(target.closest('a, button, [data-cursor="magnetic"]'))
      element.classList.toggle('is-hot', hot)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    frame = window.requestAnimationFrame(paint)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.cancelAnimationFrame(frame)
    }
  }, [reduced])

  if (reduced) return null
  return <div ref={ref} className="cursor-ring" aria-hidden="true" />
}
