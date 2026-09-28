import type { Localized } from '@/lib/types'

export const aboutChapters: { title: Localized; text: Localized }[] = [
  {
    title: { ar: 'نبدأ من الفكرة، لا من العرض التقني.', en: 'We start from the idea, not from a technical pitch.' },
    text: {
      ar: 'أوكية شركة سعودية تبني المنتجات الرقمية والأنظمة والتطبيقات وحلول الذكاء الاصطناعي. الفرق الذي يهمنا: أن نفهم العمل قبل أن نقترح البناء.',
      en: 'OKIA is a Saudi company that builds digital products, systems, applications, and AI solutions. The difference we care about is understanding the business before we propose the build.',
    },
  },
  {
    title: { ar: 'الفريق يُجمع حول المشروع.', en: 'The team is assembled around the project.' },
    text: {
      ar: 'لا نعرض عليك مبرمجاً واحداً ونسميه فريقاً. حسب الحاجة يحضر استراتيجي، محلل، مصمم، معماري، مهندسو واجهات وخوادم وجوال، ومهندسو ذكاء وجودة وتشغيل.',
      en: 'We do not introduce one developer and call it a team. As the work requires, a strategist, analyst, designer, architect, frontend, backend, and mobile engineers, plus AI, QA, and DevOps, take part.',
    },
  },
  {
    title: { ar: 'الذكاء الاصطناعي داخل الطريقة.', en: 'AI sits inside the way we work.' },
    text: {
      ar: 'الوكلاء يساندون البحث والتحليل والبناء والاختبار والتوثيق. هم لا يعملون بلا إشراف، ولا ندّعي تطويراً ذاتياً كاملاً.',
      en: 'Agents support research, analysis, building, testing, and documentation. They do not work without supervision, and we do not claim fully autonomous development.',
    },
  },
  {
    title: { ar: 'من الرياض، وللسوق الذي نعمل فيه.', en: 'From Riyadh, for the market we work in.' },
    text: {
      ar: 'نخدم الشركات الناشئة، رواد الأعمال، المنشآت الصغيرة والمتوسطة، الشركات الأكبر، والجهات التي تريد رقمنة عملها. العربية والإنجليزية جزء من التسليم، لا ترجمة لاحقة.',
      en: 'We serve startups, founders, SMEs, larger companies, and organizations that want to digitize their work. Arabic and English are part of delivery, not a later translation.',
    },
  },
  {
    title: { ar: 'نبني معك، ويمكن أن نشارك حين نؤمن بالمشروع.', en: 'We build with you, and we may partner when we believe in the project.' },
    text: {
      ar: 'النموذج المعتاد أن تموّل التطوير ونتسلم البناء. في بعض المشاريع يمكن مناقشة شراكة تقنية بشروط تُكتب للطرفين. لا وعود مالية على هذا الموقع.',
      en: 'The usual model is that you fund development and we deliver the build. On some projects a technology partnership can be discussed, on terms written for both sides. This website makes no financial promises.',
    },
  },
]

export const audiences: Localized[] = [
  { ar: 'الشركات الناشئة ورواد الأعمال', en: 'Startups and founders' },
  { ar: 'المنشآت الصغيرة والمتوسطة', en: 'Small and mid-sized companies' },
  { ar: 'الشركات والمؤسسات', en: 'Enterprises' },
  { ar: 'الجهات الحكومية وشبه الحكومية', en: 'Government and semi-government organizations' },
  { ar: 'المستثمرون الذين يريدون شريكاً تقنياً واضحاً', en: 'Investors who want a clear technology partner' },
]
