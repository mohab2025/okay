import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function SectionIntro({
  index,
  eyebrow,
  title,
  lede,
  tone = 'light',
}: {
  index?: string
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  tone?: 'light' | 'dark'
}) {
  return (
    <div className="max-w-3xl">
      {(index || eyebrow) && (
        <p className="eyebrow">
          {index}
          {index && eyebrow ? ' — ' : ''}
          {eyebrow}
        </p>
      )}
      <h2 className="display mt-5">{title}</h2>
      {lede ? <p className={cn('lede mt-6 max-w-2xl', tone === 'dark' ? 'text-ivory/75' : 'text-ink/75')}>{lede}</p> : null}
    </div>
  )
}
