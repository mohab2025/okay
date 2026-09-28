import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'footer' | 'header' | 'nav'
}) {
  return <Tag className={cn('mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16', className)}>{children}</Tag>
}
