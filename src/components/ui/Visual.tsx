import type { VisualVariant } from '@/lib/types'
import { cn } from '@/lib/cn'

function Geometry({ variant }: { variant: VisualVariant }) {
  if (variant === 'dune') {
    return (
      <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
        <path d="M0 360 C80 300 140 390 220 330 C300 270 340 340 400 300 V500 H0 Z" fill="#123C32" />
        <path d="M0 410 C90 360 160 450 250 390 C320 345 360 400 400 370 V500 H0 Z" fill="#0B211C" />
        <path d="M20 250 C120 210 180 280 400 190" fill="none" stroke="#C8A96B" strokeWidth="1.4" />
        <path d="M0 290 C140 240 200 320 400 230" fill="none" stroke="#F5F4EF" strokeOpacity="0.35" />
      </svg>
    )
  }
  if (variant === 'lattice') {
    return (
      <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
        {Array.from({ length: 8 }, (_, row) =>
          Array.from({ length: 6 }, (_, col) => {
            const missing = (row + col) % 5 === 0
            if (missing) return null
            return (
              <rect
                key={`${row}-${col}`}
                x={36 + col * 56}
                y={40 + row * 54}
                width="36"
                height="38"
                fill="none"
                stroke={row % 3 === 0 ? '#C8A96B' : '#F5F4EF'}
                strokeOpacity={row % 3 === 0 ? 0.9 : 0.28}
              />
            )
          }),
        )}
      </svg>
    )
  }
  if (variant === 'orbit') {
    return (
      <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
        <circle cx="200" cy="250" r="46" fill="#123C32" stroke="#F5F4EF" />
        <circle cx="200" cy="250" r="110" fill="none" stroke="#C8A96B" strokeOpacity="0.8" />
        <ellipse cx="200" cy="250" rx="168" ry="64" fill="none" stroke="#F5F4EF" strokeOpacity="0.35" />
        <circle cx="310" cy="250" r="6" fill="#C8A96B" />
        <circle cx="90" cy="210" r="4" fill="#F5F4EF" />
      </svg>
    )
  }
  if (variant === 'skyline') {
    return (
      <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
        <rect x="40" y="180" width="46" height="240" fill="#F5F4EF" fillOpacity="0.85" />
        <rect x="102" y="120" width="38" height="300" fill="#C8A96B" />
        <rect x="156" y="210" width="70" height="210" fill="#F5F4EF" fillOpacity="0.35" />
        <rect x="242" y="90" width="28" height="330" fill="#F5F4EF" />
        <rect x="286" y="160" width="54" height="260" fill="#123C32" stroke="#F5F4EF" strokeOpacity="0.4" />
        <path d="M40 430 H360" stroke="#C8A96B" strokeOpacity="0.7" />
      </svg>
    )
  }
  if (variant === 'core') {
    return (
      <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
        <circle cx="200" cy="240" r="78" fill="#123C32" />
        <circle cx="176" cy="214" r="16" fill="#F5F4EF" />
        <circle cx="200" cy="240" r="130" fill="none" stroke="#C8A96B" />
        <path d="M70 360 H330" stroke="#F5F4EF" strokeOpacity="0.3" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
      <rect x="48" y="70" width="54" height="340" fill="#F5F4EF" />
      <rect x="118" y="140" width="28" height="270" fill="#C8A96B" />
      <path d="M160 360 C230 300 280 340 350 250" fill="none" stroke="#F5F4EF" strokeWidth="2" />
      <circle cx="338" cy="246" r="7" fill="#C8A96B" />
      <path d="M150 210 H340" stroke="#F5F4EF" strokeOpacity="0.25" />
    </svg>
  )
}

export function Visual({
  variant,
  image,
  alt = '',
  className,
  ratio = 'landscape',
}: {
  variant: VisualVariant
  image?: string
  alt?: string
  className?: string
  ratio?: 'landscape' | 'portrait' | 'square'
}) {
  const ratioClass = ratio === 'portrait' ? 'aspect-[3/4]' : ratio === 'square' ? 'aspect-square' : 'aspect-[5/4]'
  return (
    <div className={cn('relative overflow-hidden bg-ink', ratioClass, className)}>
      {image ? (
        <img src={image} alt={alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
      ) : (
        <div className="absolute inset-0 bg-[#10241f]">
          <Geometry variant={variant} />
        </div>
      )}
    </div>
  )
}
