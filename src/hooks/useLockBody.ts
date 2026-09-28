import { useEffect } from 'react'
import { scrollEngine } from '@/lib/scroll'

export function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    scrollEngine.lenis?.stop()
    return () => {
      document.body.style.overflow = previous
      scrollEngine.lenis?.start()
    }
  }, [locked])
}
