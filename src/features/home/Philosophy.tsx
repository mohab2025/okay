import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { okiaFlow, typicalFlow } from '@/data/home'
import { formatNumber } from '@/lib/format'
import { useLocale } from '@/lib/locale'
import { cn } from '@/lib/cn'

export function Philosophy() {
  const { locale, t } = useLocale()
  return (
    <section data-header="light" className="bg-ivory py-24 text-ink md:py-32">
      <Container>
        <Reveal>
          <SectionIntro
            index={formatNumber(2, locale)}
            eyebrow={locale === 'ar' ? 'الفرق' : 'The difference'}
            title={locale === 'ar' ? 'مشكلتك ليست دائماً في البرمجة.' : 'The problem is not always the code.'}
            lede={
              locale === 'ar'
                ? 'أحياناً المشكلة أن الفكرة لم تُفهم بشكل صحيح من البداية.'
                : 'Sometimes the idea was never understood properly at the start.'
            }
          />
        </Reveal>
        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{locale === 'ar' ? 'المسار المعتاد' : 'A typical path'}</p>
            <ol className="mt-6">
              {typicalFlow.map((step) => (
                <li key={step.en} className="flex items-center gap-4 border-b border-line-dark py-3 text-ink/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
                  {t(step)}
                </li>
              ))}
            </ol>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/50">
              {locale === 'ar'
                ? 'مسار قصير يسلّم ما طُلب، حتى لو لم يكن هو ما يحتاجه العمل.'
                : 'A short path that delivers what was asked, even when that is not what the business needs.'}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">{locale === 'ar' ? 'مسار أوكية' : 'The OKIA path'}</p>
            <ol className="mt-6 border-s border-sand/50 ps-6">
              {okiaFlow.map((step, index) => (
                <li
                  key={step.en}
                  className={cn(
                    'grid grid-cols-[2.5rem_1fr] items-baseline gap-3 border-b border-line-dark py-3',
                    index > 0 && index < 4 ? 'text-pine' : 'text-ink/80',
                  )}
                >
                  <span className="text-sm text-sand">{formatNumber(index + 1, locale)}</span>
                  <span className={index > 0 && index < 4 ? 'font-medium' : ''}>{t(step)}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
