import { Link, useParams } from 'react-router-dom'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { Visual } from '@/components/ui/Visual'
import { getProject, projects } from '@/data/projects'
import { ui } from '@/data/ui'
import NotFoundPage from '@/features/system/NotFoundPage'
import { formatNumber } from '@/lib/format'
import { useLocale } from '@/lib/locale'
import { breadcrumbSchema, localizedPath } from '@/lib/schema'
import { Seo } from '@/lib/seo'

export default function CaseStudyPage() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  const { locale, t, path } = useLocale()
  if (!project) return <NotFoundPage />

  const title = `${t(ui.demo)} — ${t(project.title)}`
  const description = t(project.summary)
  const projectPath = `/work/${project.slug}`
  const next = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length]

  return (
    <>
      <Seo
        title={`${title} — OKIA`}
        description={description}
        path={projectPath}
        jsonLd={[
          breadcrumbSchema([
            { name: t(ui.home), path: localizedPath(locale, '/') },
            { name: t(ui.work), path: localizedPath(locale, '/work') },
            { name: t(project.title), path: localizedPath(locale, projectPath) },
          ]),
        ]}
      />
      <PageHero
        eyebrow={`${t(ui.demo)} · ${t(project.sector)} · ${t(ui.client)}`}
        title={t(project.title)}
        lede={description}
        crumbs={[
          { href: path('/'), label: t(ui.home) },
          { href: path('/work'), label: t(ui.work) },
          { label: t(project.title) },
        ]}
        breadcrumbLabel={locale === 'ar' ? 'مسار الصفحات' : 'Breadcrumb'}
      />
      <section data-header="dark" className="bg-night pb-16 text-ivory">
        <Container>
          <Visual variant={project.visual} image={project.image} alt="" ratio="landscape" className="max-h-[70vh]" />
          <nav aria-label={locale === 'ar' ? 'فصول القصة' : 'Story chapters'} className="mt-8 flex gap-4 overflow-x-auto pb-2">
            {project.story.map((beat, index) => (
              <a key={beat.id} href={`#${beat.id}`} className="shrink-0 text-sm text-ivory/70 hover:text-ivory">
                {formatNumber(index + 1, locale)} {t(beat.title)}
              </a>
            ))}
          </nav>
        </Container>
      </section>
      {project.story.map((beat, index) => (
        <section
          key={beat.id}
          id={beat.id}
          data-header={index % 2 === 0 ? 'light' : 'dark'}
          className={index % 2 === 0 ? 'bg-ivory py-24 text-ink md:py-32' : 'bg-night py-24 text-ivory md:py-32'}
        >
          <Container className="grid gap-8 md:grid-cols-12">
            <p className="text-sand md:col-span-2">{formatNumber(index + 1, locale)}</p>
            <div className="md:col-span-8">
              <h2 className="display-sm">{t(beat.title)}</h2>
              <p className="lede mt-6 max-w-2xl opacity-80">{t(beat.text)}</p>
            </div>
          </Container>
        </section>
      ))}
      {next ? (
        <section data-header="dark" className="bg-pine py-16 text-ivory">
          <Container className="flex flex-wrap items-center justify-between gap-6">
            <p>{locale === 'ar' ? 'القصة التالية' : 'Next story'}</p>
            <Link className="display-sm" to={path(`/work/${next.slug}`)}>
              {t(next.title)}
            </Link>
          </Container>
        </section>
      ) : null}
    </>
  )
}
