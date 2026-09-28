import { createBrowserRouter } from 'react-router-dom'
import { LocaleShell, RootRedirect, lazyPages } from '@/app/shell'
import HomePage from '@/features/home/HomePage'

export const router = createBrowserRouter([
  { path: '/', element: <RootRedirect /> },
  {
    path: '/:locale',
    element: <LocaleShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <lazyPages.ServicesPage /> },
      { path: 'services/:slug', element: <lazyPages.ServiceDetailPage /> },
      { path: 'work', element: <lazyPages.WorkPage /> },
      { path: 'work/:slug', element: <lazyPages.CaseStudyPage /> },
      { path: 'how-we-work', element: <lazyPages.HowWeWorkPage /> },
      { path: 'partnership', element: <lazyPages.PartnershipPage /> },
      { path: 'about', element: <lazyPages.AboutPage /> },
      { path: 'contact', element: <lazyPages.ContactPage /> },
      { path: 'privacy', element: <lazyPages.PrivacyPage /> },
      { path: 'terms', element: <lazyPages.TermsPage /> },
      { path: '*', element: <lazyPages.NotFoundPage /> },
    ],
  },
])
