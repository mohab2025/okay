export function resolve3DQuality(): 'off' | 'lite' | 'full' {
  if (typeof window === 'undefined') return 'off'
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'off'
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number }
  if (nav.connection?.saveData) return 'off'
  if ((nav.deviceMemory ?? 8) <= 2) return 'off'
  try {
    const canvas = document.createElement('canvas')
    if (!(canvas.getContext('webgl2') || canvas.getContext('webgl'))) return 'off'
  } catch {
    return 'off'
  }
  const coarse = window.matchMedia('(pointer: coarse)').matches
  const lite = coarse || (nav.deviceMemory ?? 8) <= 4 || (navigator.hardwareConcurrency ?? 8) <= 4
  return lite ? 'lite' : 'full'
}
