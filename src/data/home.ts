import type { Localized } from '@/lib/types'

export const journey: { ar: string; en: string; note: Localized }[] = [
  { ar: 'فكرة', en: 'Idea', note: { ar: 'لديك فكرة.', en: 'You have a thought.' } },
  { ar: 'فهم', en: 'Insight', note: { ar: 'نفهم السياق قبل الحل.', en: 'Context before solution.' } },
  { ar: 'تصميم', en: 'Design', note: { ar: 'نصمم التجربة حول الاستخدام.', en: 'The experience takes shape.' } },
  { ar: 'بناء', en: 'Build', note: { ar: 'نحوّل القرار إلى منتج.', en: 'The decision becomes a product.' } },
  { ar: 'ذكاء', en: 'Intelligence', note: { ar: 'الذكاء يساند الفريق.', en: 'Intelligence supports the team.' } },
  { ar: 'منتج', en: 'Product', note: { ar: 'منتج جاهز للخروج.', en: 'Ready to launch.' } },
  { ar: 'نمو', en: 'Growth', note: { ar: 'ثم نواصل التطوير.', en: 'Then we keep evolving.' } },
]

export const typicalFlow: Localized[] = [
  { ar: 'العميل', en: 'Client' },
  { ar: 'المبيعات', en: 'Sales' },
  { ar: 'المصمم', en: 'Designer' },
  { ar: 'المطوّر', en: 'Developer' },
  { ar: 'التسليم', en: 'Delivery' },
]

export const okiaFlow: Localized[] = [
  { ar: 'العميل', en: 'Client' },
  { ar: 'استماع', en: 'Listening' },
  { ar: 'اكتشاف', en: 'Discovery' },
  { ar: 'متخصصون', en: 'Specialists' },
  { ar: 'استراتيجية المنتج', en: 'Product strategy' },
  { ar: 'تصميم', en: 'Design' },
  { ar: 'هندسة', en: 'Engineering' },
  { ar: 'ذكاء اصطناعي', en: 'AI' },
  { ar: 'جودة', en: 'QA' },
  { ar: 'إطلاق', en: 'Launch' },
  { ar: 'نمو', en: 'Growth' },
]

export const listeningQuestions: { id: string; prompt: Localized; detail: Localized }[] = [
  {
    id: 'goal',
    prompt: { ar: 'ما الذي تريد تحقيقه؟', en: 'What are you trying to achieve?' },
    detail: {
      ar: 'نبدأ بالنتيجة التي يهمّك أن يلمسها العمل، لا بقائمة خصائص.',
      en: 'We start from the outcome the business needs to feel, not from a feature list.',
    },
  },
  {
    id: 'users',
    prompt: { ar: 'من هم مستخدموك؟', en: 'Who are your users?' },
    detail: {
      ar: 'من يستخدم النظام كل يوم يختلف عمن يوافق عليه. نريد الاثنين.',
      en: 'The person who uses the system daily is not always the person who approves it. We need both.',
    },
  },
  {
    id: 'problem',
    prompt: { ar: 'ما المشكلة التي تحلّها؟', en: 'What problem are you solving?' },
    detail: {
      ar: 'نفرّق بين العرض الظاهر والاحتكاك الحقيقي داخل العمل.',
      en: 'We separate the visible symptom from the friction inside the operation.',
    },
  },
  {
    id: 'today',
    prompt: { ar: 'ماذا يحدث اليوم؟', en: 'What currently happens?' },
    detail: {
      ar: 'العمل الحالي — مكالمات، ملفات، أنظمة قديمة — هو مادة التصميم.',
      en: 'The current work, calls, files, and old systems are the material of the design.',
    },
  },
  {
    id: 'time',
    prompt: { ar: 'ما الذي يكلّفك الوقت؟', en: 'What is costing you time?' },
    detail: {
      ar: 'نبحث عن الخطوات اليدوية والانتظار الذي صار معتاداً.',
      en: 'We look for the manual steps and the waiting that has become normal.',
    },
  },
  {
    id: 'money',
    prompt: { ar: 'ما الذي يكلّفك المال؟', en: 'What is costing you money?' },
    detail: {
      ar: 'إعادة العمل، الأخطاء، والفرص الضائعة أوضح من أي تقدير عام.',
      en: 'Rework, errors, and missed opportunities are clearer than a generic estimate.',
    },
  },
  {
    id: 'success',
    prompt: { ar: 'كيف يبدو النجاح؟', en: 'What does success look like?' },
    detail: {
      ar: 'نتفق على علامات يمكن ملاحظتها بعد الإطلاق، لا على وعود فضفاضة.',
      en: 'We agree on signs you can observe after launch, not on loose promises.',
    },
  },
  {
    id: 'systems',
    prompt: { ar: 'مع أي أنظمة يجب أن نتكامل؟', en: 'What must the system integrate with?' },
    detail: {
      ar: 'التكامل يُدرس مبكراً لأنه يغيّر النطاق والهندسة.',
      en: 'Integrations are studied early because they change scope and architecture.',
    },
  },
  {
    id: 'after',
    prompt: { ar: 'ماذا يجب أن يحدث بعد الإطلاق؟', en: 'What should happen after launch?' },
    detail: {
      ar: 'التشغيل، التدريب، والقياس جزء من المنتج، لا ملحق متأخر.',
      en: 'Operations, training, and measurement are part of the product, not a late appendix.',
    },
  },
]

export const trustPrinciples: { title: Localized; text: Localized }[] = [
  {
    title: { ar: 'فهم قبل التنفيذ', en: 'Understand before building' },
    text: {
      ar: 'ندرس العمل والمستخدم والقيود قبل أن نكتب السطر الأول.',
      en: 'We study the business, the user, and the constraints before the first line of code.',
    },
  },
  {
    title: { ar: 'فريق متخصص', en: 'A specialist team' },
    text: {
      ar: 'المشروع يجمع الأدوار التي يحتاجها، لا شخصاً واحداً يُطلب منه كل شيء.',
      en: 'A project gathers the roles it needs, rather than asking one person to do everything.',
    },
  },
  {
    title: { ar: 'هندسة قابلة للتوسع', en: 'Architecture that can grow' },
    text: {
      ar: 'نضع أساساً يتحمل الاستخدام الحقيقي، لا عرضاً يصعب تطويره.',
      en: 'We set a foundation that can carry real use, not a demo that is hard to grow.',
    },
  },
  {
    title: { ar: 'تسليم مدعوم بالذكاء الاصطناعي', en: 'AI-assisted delivery' },
    text: {
      ar: 'الوكلاء يساندون البحث والبناء والاختبار. القرار والمراجعة يبقيان بشريين.',
      en: 'Agents support research, building, and testing. Decisions and review stay human.',
    },
  },
  {
    title: { ar: 'شفافية في مراحل العمل', en: 'Visible stages of work' },
    text: {
      ar: 'تعرف أين وصل المشروع، وما الذي تقرر، وما الذي ما زال مفتوحاً.',
      en: 'You can see where the project is, what was decided, and what is still open.',
    },
  },
  {
    title: { ar: 'دعم بعد الإطلاق', en: 'Support after launch' },
    text: {
      ar: 'العلاقة لا تنتهي بالضرورة يوم الخروج. التحسين جزء من المسار.',
      en: 'The relationship does not have to end on launch day. Improvement is part of the path.',
    },
  },
  {
    title: { ar: 'عربي وإنجليزي', en: 'Arabic and English' },
    text: {
      ar: 'اللغتان حاضرتان في التجربة والتواصل، لا كترجمة متأخرة.',
      en: 'Both languages belong in the experience and the conversation, not as a late translation.',
    },
  },
  {
    title: { ar: 'سياق سعودي', en: 'Saudi context' },
    text: {
      ar: 'نعمل من الرياض، ونراعي طريقة العمل والاستخدام في السوق المحلي.',
      en: 'We work from Riyadh, and we consider how products are actually used in the local market.',
    },
  },
]

export const sectors: { title: Localized; text: Localized }[] = [
  {
    title: { ar: 'الشركات الناشئة', en: 'Startup' },
    text: {
      ar: 'نطاق يكفي للتعلم من مستخدم حقيقي، بلا تضخيم مبكر.',
      en: 'Enough scope to learn from a real user, without early inflation.',
    },
  },
  {
    title: { ar: 'المنشآت', en: 'Enterprise' },
    text: {
      ar: 'أنظمة ومنصات تتحمل تعقيد التشغيل اليومي والصلاحيات.',
      en: 'Systems and platforms that can carry daily operational complexity.',
    },
  },
  {
    title: { ar: 'الجهات', en: 'Government' },
    text: {
      ar: 'وضوح في النطاق، وعربية أصيلة، ومسار يناسب طبيعة القرار.',
      en: 'Clear scope, native Arabic, and a path that respects how decisions are made.',
    },
  },
  {
    title: { ar: 'التجارة', en: 'E-Commerce' },
    text: {
      ar: 'تجربة شراء سريعة، وتشغيل يتحمل المواسم والنمو.',
      en: 'A fast buying experience, and operations that can carry seasons and growth.',
    },
  },
  {
    title: { ar: 'المنتجات السحابية', en: 'SaaS' },
    text: {
      ar: 'من الاشتراك إلى الاستخدام اليومي، المنتج يُبنى ليتكرر.',
      en: 'From subscription to daily use, the product is built to repeat.',
    },
  },
  {
    title: { ar: 'التقنية المالية', en: 'FinTech' },
    text: {
      ar: 'دقة في الرحلة، ووضوح في الصلاحيات، وهندسة قابلة للمراجعة.',
      en: 'A precise journey, clear permissions, and architecture that can be reviewed.',
    },
  },
  {
    title: { ar: 'التعليم', en: 'Education' },
    text: {
      ar: 'تجارب تعلم وإدارة تراعي المستخدم والمحتوى معاً.',
      en: 'Learning and administration experiences that respect both user and content.',
    },
  },
  {
    title: { ar: 'الصحة', en: 'Healthcare' },
    text: {
      ar: 'مسارات هادئة، وصلاحيات واضحة، واحترام لحساسية البيانات.',
      en: 'Calm flows, clear access, and respect for sensitive information.',
    },
  },
  {
    title: { ar: 'العقار', en: 'Real Estate' },
    text: {
      ar: 'من العرض إلى المتابعة، رحلة أوضح للعميل وللفريق.',
      en: 'From listing to follow-up, a clearer path for the customer and the team.',
    },
  },
  {
    title: { ar: 'الخدمات المهنية', en: 'Professional services' },
    text: {
      ar: 'أدوات تنظّم العملاء والعمل والمخرجات دون تعقيد زائد.',
      en: 'Tools that organize clients, work, and deliverables without extra complexity.',
    },
  },
]
