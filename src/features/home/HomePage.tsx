import { Closing } from '@/features/home/Closing'
import { Devices } from '@/features/home/Devices'
import { Discovery } from '@/features/home/Discovery'
import { Hero } from '@/features/home/Hero'
import { Listening } from '@/features/home/Listening'
import { AiNetwork } from '@/features/home/AiNetwork'
import { Philosophy } from '@/features/home/Philosophy'
import { Quote } from '@/features/home/Quote'
import { Sectors } from '@/features/home/Sectors'
import { ServicesBand } from '@/features/home/ServicesBand'
import { Specialists } from '@/features/home/Specialists'
import { Trust } from '@/features/home/Trust'
import { WorkBand } from '@/features/home/WorkBand'
import { PartnershipPanels } from '@/features/partnership/PartnershipPanels'
import { ProcessTimeline } from '@/features/process/ProcessTimeline'
import { TechnologyBand } from '@/features/technology/TechnologyBand'
import { Seo } from '@/lib/seo'
import { organizationSchema } from '@/lib/schema'
import { useLocale } from '@/lib/locale'

export default function HomePage() {
  const { locale } = useLocale()
  const title = locale === 'ar' ? 'أوكية | نسمع. نفهم. نبني.' : 'OKIA | We listen. We understand. We build.'
  const description =
    locale === 'ar'
      ? 'أوكية شريك تقني في الرياض لبناء المنتجات الرقمية، تطبيقات الجوال، الأنظمة، وحلول الذكاء الاصطناعي. نبدأ بفهم العمل قبل البرمجة.'
      : 'OKIA is a Riyadh technology partner for digital products, mobile apps, business systems, and AI solutions. We understand the business before we build.'

  return (
    <>
      <Seo title={title} description={description} path="/" jsonLd={[organizationSchema(description)]} />
      <Hero />
      <Philosophy />
      <Quote />
      <Listening />
      <Discovery />
      <Specialists />
      <AiNetwork />
      <ServicesBand />
      <Devices />
      <Sectors />
      <WorkBand />
      <PartnershipPanels />
      <ProcessTimeline />
      <TechnologyBand />
      <Trust />
      <Closing />
    </>
  )
}
