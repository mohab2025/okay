export const heroMotion = { progress: 0 }

export function backgroundAt(progress: number) {
  const stops = [
    { at: 0, color: [7, 11, 10] },
    { at: 0.34, color: [11, 33, 28] },
    { at: 0.68, color: [18, 60, 50] },
    { at: 1, color: [7, 11, 10] },
  ]
  const nextIndex = Math.max(1, stops.findIndex((stop) => stop.at >= progress))
  const prev = stops[nextIndex - 1] ?? stops[0]
  const next = stops[nextIndex] ?? stops[stops.length - 1]
  const span = next.at - prev.at || 1
  const t = Math.min(1, Math.max(0, (progress - prev.at) / span))
  const mixed = prev.color.map((channel, index) => Math.round(channel + ((next.color[index] ?? channel) - channel) * t))
  return `rgb(${mixed[0]}, ${mixed[1]}, ${mixed[2]})`
}
