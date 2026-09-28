import type { Localized } from '@/lib/types'

export const agents: { id: string; short: Localized; title: Localized; text: Localized }[] = [
  {
    id: 'discovery',
    short: { ar: 'الاكتشاف', en: 'Discovery' },
    title: { ar: 'وكيل الاكتشاف', en: 'Discovery Agent' },
    text: {
      ar: 'يحلّل النقاشات والمتطلبات ليستخرج الأنماط والأسئلة التي لم تُغلق.',
      en: 'Analyzes conversations and requirements to surface patterns and questions still open.',
    },
  },
  {
    id: 'product',
    short: { ar: 'المنتج', en: 'Product' },
    title: { ar: 'وكيل المنتج', en: 'Product Agent' },
    text: {
      ar: 'يساعد على تحويل احتياج العمل إلى نطاق وقصص استخدام أوضح.',
      en: 'Helps turn a business need into clearer scope and usage stories.',
    },
  },
  {
    id: 'ux',
    short: { ar: 'التجربة', en: 'UX' },
    title: { ar: 'وكيل التجربة', en: 'UX Agent' },
    text: {
      ar: 'يساند تحليل الرحلات واستكشاف اتجاهات الواجهة قبل تثبيت التصميم.',
      en: 'Supports journey analysis and interface exploration before the design is fixed.',
    },
  },
  {
    id: 'architecture',
    short: { ar: 'المعمارية', en: 'Architecture' },
    title: { ar: 'وكيل المعمارية', en: 'Architecture Agent' },
    text: {
      ar: 'يساند مقارنة الخيارات التقنية وآثارها، والقرار يبقى للمعماري.',
      en: 'Supports comparison of technical options and their effects. The architect still decides.',
    },
  },
  {
    id: 'engineering',
    short: { ar: 'الهندسة', en: 'Engineering' },
    title: { ar: 'وكلاء التطوير', en: 'Development Agents' },
    text: {
      ar: 'يساعدون المهندسين في التنفيذ والمراجعة. لا يُسلَّم منتج بلا مراجعة بشرية.',
      en: 'They assist engineers with implementation and review. Nothing ships without a person checking it.',
    },
  },
  {
    id: 'qa',
    short: { ar: 'الجودة', en: 'QA' },
    title: { ar: 'وكيل الجودة', en: 'QA Agent' },
    text: {
      ar: 'يحلّل التغييرات ويقترح سيناريوهات اختبار يراجعها مهندس الجودة.',
      en: 'Analyzes changes and proposes test scenarios a QA engineer reviews.',
    },
  },
  {
    id: 'docs',
    short: { ar: 'التوثيق', en: 'Documentation' },
    title: { ar: 'وكيل التوثيق', en: 'Documentation Agent' },
    text: {
      ar: 'يساعد على إبقاء الوثائق التقنية والتجارية محدثة ومقروءة.',
      en: 'Helps keep technical and business documentation current and readable.',
    },
  },
  {
    id: 'analytics',
    short: { ar: 'التحليلات', en: 'Analytics' },
    title: { ar: 'وكيل التحليلات', en: 'Analytics Agent' },
    text: {
      ar: 'بعد الإطلاق يساعد على رؤية أنماط الاستخدام وفرص التحسين.',
      en: 'After launch, helps reveal usage patterns and opportunities to improve.',
    },
  },
]
