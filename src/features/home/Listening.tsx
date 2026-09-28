import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { listeningQuestions } from '@/data/home'
import { formatNumber } from '@/lib/format'
import { useLocale } from '@/lib/locale'
import { cn } from '@/lib/cn'

export function Listening() {
  const { locale, t, path } = useLocale()
  const [open, setOpen] = useState(listeningQuestions[0]?.id ?? '')

  return (
    <section id="listening" data-header="dark" className="bg-night py-24 text-ivory md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionIntro
              index={formatNumber(3, locale)}
              eyebrow={locale === 'ar' ? 'الاستماع' : 'Listening'}
              tone="dark"
              title={
                locale === 'ar' ? 'قبل أن نبني أي شيء... نستمع.' : 'Before we build anything, we listen.'
              }
              lede={
                locale === 'ar'
                  ? 'هذه ليست قائمة خدمات. هذه الأسئلة التي نريد إجابتها قبل أن يُكتب سطر.'
                  : 'This is not a service list. These are the questions we want answered before a line is written.'
              }
            />
            <div className="mt-10">
              <Button href={path('/contact?intent=discovery')} magnetic>
                {locale === 'ar' ? 'ابدأ جلسة اكتشاف' : 'Start a discovery session'}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7" role="list">
            {listeningQuestions.map((question, index) => {
              const expanded = open === question.id
              return (
                <div key={question.id} role="listitem" className="border-t border-line">
                  <button
                    type="button"
                    className="flex w-full items-start gap-4 py-5 text-start"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? '' : question.id)}
                  >
                    <span className="pt-1 text-sm text-sand">{formatNumber(index + 1, locale)}</span>
                    <span className={cn('text-xl md:text-2xl', expanded ? 'text-ivory' : 'text-ivory/75')}>
                      {t(question.prompt)}
                    </span>
                  </button>
                  {expanded ? <p className="ms-10 max-w-xl pb-6 text-ivory/70 leading-relaxed">{t(question.detail)}</p> : null}
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
