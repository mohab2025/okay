import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

export function Breadcrumb({
  items,
  tone = 'dark',
  label,
}: {
  items: { href?: string; label: string }[]
  tone?: 'dark' | 'light'
  label: string
}) {
  return (
    <nav aria-label={label} className={cn('mb-8 text-sm', tone === 'dark' ? 'text-ivory/65' : 'text-ink/60')}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">·</span> : null}
            {item.href ? (
              <Link className="hover:text-sand" to={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
