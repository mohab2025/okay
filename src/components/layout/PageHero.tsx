import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  breadcrumbLabel,
}: {
  eyebrow: string
  title: string
  lede?: string
  crumbs?: { href?: string; label: string }[]
  breadcrumbLabel?: string
}) {
  return (
    <section data-header="dark" className="bg-night pt-32 pb-16 text-ivory md:pt-40 md:pb-24">
      <Container>
        {crumbs && breadcrumbLabel ? <Breadcrumb items={crumbs} label={breadcrumbLabel} /> : null}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-6 max-w-5xl">{title}</h1>
        {lede ? <p className="lede mt-8 max-w-2xl text-ivory/75">{lede}</p> : null}
      </Container>
    </section>
  )
}

export function PageSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section data-header="light" className={`bg-ivory py-20 text-ink md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}
