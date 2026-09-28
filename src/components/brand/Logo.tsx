import { cn } from '@/lib/cn'
import { useLocale } from '@/lib/locale'

export function Logo({ className, tone = 'dark' }: { className?: string; tone?: 'dark' | 'light' }) {
  const { locale } = useLocale()
  const primary = locale === 'ar' ? 'أوكية' : 'OKIA'
  const secondary = locale === 'ar' ? 'OKIA' : 'أوكية'

  return (
    <span className={cn('inline-flex items-center gap-3', tone === 'light' ? 'text-ink' : 'text-ivory', className)}>
      <svg viewBox="0 0 36 36" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect x="4" y="5" width="7" height="26" fill="currentColor" />
        <path d="M15 27.5c6.4 0 11.2-4.6 13.6-9.8" fill="none" stroke="#C8A96B" strokeWidth="1.6" />
        <circle cx="27.2" cy="15.4" r="1.7" fill="#C8A96B" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-medium">{primary}</span>
        <span className="mt-1 text-[0.62rem] tracking-[0.22em] uppercase opacity-70">{secondary}</span>
      </span>
    </span>
  )
}
