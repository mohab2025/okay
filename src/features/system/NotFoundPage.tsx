import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ui } from '@/data/ui'
import { useLocale } from '@/lib/locale'
import { Seo } from '@/lib/seo'

export default function NotFoundPage() {
  const { locale, t, path } = useLocale()
  return (
    <>
      <Seo title={locale === 'ar' ? 'الصفحة غير موجودة — OKIA' : 'Page not found — OKIA'} description={t(ui.notFoundText)} path="/404" />
      <section data-header="dark" className="grid min-h-svh place-items-center bg-night px-5 pt-24 text-ivory">
        <Container>
          <p className="eyebrow">404</p>
          <h1 className="display mt-6 max-w-3xl">{t(ui.notFoundTitle)}</h1>
          <p className="lede mt-6 max-w-xl text-ivory/70">{t(ui.notFoundText)}</p>
          <div className="mt-8 flex gap-3">
            <Button href={path('/')}>{t(ui.home)}</Button>
            <Button href={path('/contact')} variant="secondary">
              {t(ui.cta)}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
