import type { Localized } from '@/lib/types'

export const roles: { id: string; short: Localized; title: Localized; text: Localized }[] = [
  {
    id: 'strategy',
    short: { ar: 'الاستراتيجية', en: 'Strategy' },
    title: { ar: 'استراتيجي منتج', en: 'Product Strategist' },
    text: {
      ar: 'يحدد ما يستحق البناء الآن، وما يجب أن ينتظر حتى يثبت الاستخدام.',
      en: 'Decides what deserves to be built now, and what should wait until use proves it.',
    },
  },
  {
    id: 'analysis',
    short: { ar: 'التحليل', en: 'Analysis' },
    title: { ar: 'محلل أعمال', en: 'Business Analyst' },
    text: {
      ar: 'يحوّل واقع العمل إلى متطلبات واضحة يمكن للتصميم والهندسة البناء عليها.',
      en: 'Turns the reality of the business into requirements design and engineering can build on.',
    },
  },
  {
    id: 'ux',
    short: { ar: 'التجربة', en: 'UX' },
    title: { ar: 'مصمم تجربة وواجهة', en: 'UX/UI Designer' },
    text: {
      ar: 'يصمم رحلة يفهمها المستخدم من أول استخدام، بالعربية حين تكون هي لغة العمل.',
      en: 'Designs a journey a person understands on first use, in Arabic when that is the language of the work.',
    },
  },
  {
    id: 'architecture',
    short: { ar: 'المعمارية', en: 'Architecture' },
    title: { ar: 'مهندس حلول', en: 'Solution Architect' },
    text: {
      ar: 'يضع الأساس التقني: الحدود، التكاملات، وما الذي يجب أن يبقى بسيطاً.',
      en: 'Sets the technical foundation: boundaries, integrations, and what should stay simple.',
    },
  },
  {
    id: 'frontend',
    short: { ar: 'الواجهة', en: 'Frontend' },
    title: { ar: 'مهندس واجهات', en: 'Frontend Engineer' },
    text: {
      ar: 'يبني واجهة سريعة ودقيقة على الويب، مع اهتمام بالحركة والأداء.',
      en: 'Builds a fast, precise web interface, with care for motion and performance.',
    },
  },
  {
    id: 'backend',
    short: { ar: 'الخادم', en: 'Backend' },
    title: { ar: 'مهندس خوادم', en: 'Backend Engineer' },
    text: {
      ar: 'يبني المنطق والبيانات والتكاملات التي يقوم عليها المنتج.',
      en: 'Builds the logic, data, and integrations the product stands on.',
    },
  },
  {
    id: 'mobile',
    short: { ar: 'الجوال', en: 'Mobile' },
    title: { ar: 'مهندس تطبيقات', en: 'Mobile Engineer' },
    text: {
      ar: 'ينقل التجربة إلى iOS وAndroid دون أن تصبح نسخة مرتبكة من سطح المكتب.',
      en: 'Carries the experience to iOS and Android without turning it into a confused desktop copy.',
    },
  },
  {
    id: 'ai',
    short: { ar: 'الذكاء', en: 'AI' },
    title: { ar: 'مهندس ذكاء اصطناعي', en: 'AI Engineer' },
    text: {
      ar: 'يوظف النماذج والوكلاء حيث تخدم العمل، وتبقى تحت مراجعة الإنسان.',
      en: 'Uses models and agents where they serve the business, and keeps them under human review.',
    },
  },
  {
    id: 'qa',
    short: { ar: 'الجودة', en: 'QA' },
    title: { ar: 'مهندس جودة', en: 'QA Engineer' },
    text: {
      ar: 'يتأكد أن المنتج يعمل كما اتُفق، في المسارات التي يستخدمها الناس فعلاً.',
      en: 'Makes sure the product works as agreed, on the paths people actually use.',
    },
  },
  {
    id: 'devops',
    short: { ar: 'التشغيل', en: 'DevOps' },
    title: { ar: 'مهندس تشغيل', en: 'DevOps Engineer' },
    text: {
      ar: 'يجعل الإطلاق والتشغيل قابلين للاعتماد: بيئات، نشر، ومراقبة.',
      en: 'Makes launch and operations dependable: environments, release, and visibility.',
    },
  },
]
