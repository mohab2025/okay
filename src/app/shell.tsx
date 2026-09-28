import { lazy, Suspense, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'
import { CursorRing } from '@/components/layout/CursorRing'
import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { ui } from '@/data/ui'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { LocaleProvider, useLocale } from '@/lib/locale'
import { preferredLocale, type Locale } from '@/lib/types'

const ServicesPage = lazy(() => import('@/features/services/ServicesPage'))
const ServiceDetailPage = lazy(() => import('@/features/services/ServiceDetailPage'))
const WorkPage = lazy(() => import('@/features/work/WorkPage'))
const CaseStudyPage = lazy(() => import('@/features/work/CaseStudyPage'))
const HowWeWorkPage = lazy(() => import('@/features/process/HowWeWorkPage'))
const PartnershipPage = lazy(() => import('@/features/partnership/PartnershipPage'))
const AboutPage = lazy(() => import('@/features/about/AboutPage'))
const ContactPage = lazy(() => import('@/features/contact/ContactPage'))
const NotFoundPage = lazy(() => import('@/features/system/NotFoundPage'))
const PrivacyPage = lazy(() => import('@/features/legal/LegalPages').then((module) => ({ default: module.PrivacyPage })))
const TermsPage = lazy(() => import('@/features/legal/LegalPages').then((module) => ({ default: module.TermsPage })))

function PageFallback() {
  return (
    <div className="grid min-h-svh place-items-center bg-night text-ivory">
      <p className="eyebrow">OKIA</p>
    </div>
  )
}

function SkipLink() {
  const { t } = useLocale()
  return (
    <a className="skip-link" href="#main">
      {t(ui.skip)}
    </a>
  )
}

function RoutedPage() {
  const reduced = usePrefersReducedMotion()
  const { pathname } = useLocation()
  const first = useRef(true)
  const skip = first.current
  useEffect(() => {
    first.current = false
  }, [])

  return (
    <motion.div
      key={pathname}
      initial={skip || reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
    </motion.div>
  )
}

export function LocaleShell() {
  const params = useParams()
  const location = useLocation()
  const locale = params.locale
  if (locale !== 'ar' && locale !== 'en') {
    const next = preferredLocale()
    return <Navigate to={`/${next}${location.pathname}${location.search}${location.hash}`} replace />
  }

  return (
    <LocaleProvider locale={locale as Locale}>
      <SmoothScroll>
        <SkipLink />
        <ScrollProgress />
        <CursorRing />
        <Navigation />
        <main id="main">
          <RoutedPage />
        </main>
        <Footer />
      </SmoothScroll>
    </LocaleProvider>
  )
}

export function RootRedirect() {
  const location = useLocation()
  return <Navigate to={`/${preferredLocale()}${location.search}${location.hash}`} replace />
}

export const lazyPages = {
  ServicesPage,
  ServiceDetailPage,
  WorkPage,
  CaseStudyPage,
  HowWeWorkPage,
  PartnershipPage,
  AboutPage,
  ContactPage,
  NotFoundPage,
  PrivacyPage,
  TermsPage,
}
