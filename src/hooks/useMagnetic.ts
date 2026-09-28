import { useEffect, useRef } from 'react'

export function useMagnetic<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !enabled) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect()
      const x = event.clientX - (rect.left + rect.width / 2)
      const y = event.clientY - (rect.top + rect.height / 2)
      element.style.transform = `translate3d(${x * 0.22}px, ${y * 0.28}px, 0)`
    }
    const onLeave = () => {
      element.style.transform = ''
    }
    element.addEventListener('pointermove', onMove)
    element.addEventListener('pointerleave', onLeave)
    return () => {
      element.removeEventListener('pointermove', onMove)
      element.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled])

  return ref
}
