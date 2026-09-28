import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { useMagnetic } from '@/hooks/useMagnetic'

type ButtonProps = {
  children: ReactNode
  href?: string
  tone?: 'dark' | 'light'
  variant?: 'primary' | 'secondary'
  magnetic?: boolean
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  disabled?: boolean
  ariaCurrent?: 'page' | undefined
}

export function Button({
  children,
  href,
  tone = 'dark',
  variant = 'primary',
  magnetic = false,
  className,
  type = 'button',
  onClick,
  disabled,
  ariaCurrent,
}: ButtonProps) {
  const ref = useMagnetic<HTMLSpanElement>(magnetic)
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center px-5 text-[0.95rem] transition-colors duration-300',
    variant === 'primary' && tone === 'dark' && 'bg-ivory text-ink hover:bg-white',
    variant === 'primary' && tone === 'light' && 'bg-pine text-ivory hover:bg-canopy',
    variant === 'secondary' && 'border border-current bg-transparent hover:bg-current/5',
    disabled && 'pointer-events-none opacity-50',
    className,
  )

  const content = href ? (
    href.startsWith('http') ? (
      <a className={classes} href={href} target="_blank" rel="noreferrer" aria-current={ariaCurrent}>
        {children}
      </a>
    ) : href.startsWith('mailto:') || href.startsWith('tel:') ? (
      <a className={classes} href={href} aria-current={ariaCurrent}>
        {children}
      </a>
    ) : (
      <Link className={classes} to={href} onClick={onClick} aria-current={ariaCurrent}>
        {children}
      </Link>
    )
  ) : (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )

  if (!magnetic) return content
  return (
    <span ref={ref} data-cursor="magnetic" className="inline-flex">
      {content}
    </span>
  )
}

export function TextLink({ href, children, tone = 'light' }: { href: string; children: ReactNode; tone?: 'dark' | 'light' }) {
  const className = cn(
    'inline-flex items-center gap-3 text-[0.95rem]',
    tone === 'dark' ? 'text-ivory' : 'text-ink',
  )
  const body = (
    <>
      <span className="border-b border-current pb-0.5">{children}</span>
      <span aria-hidden="true" className="text-sand">
        ↗
      </span>
    </>
  )
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a className={className} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {body}
      </a>
    )
  }
  return (
    <Link className={className} to={href}>
      {body}
    </Link>
  )
}
