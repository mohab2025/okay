import type { Localized, VisualVariant } from '@/lib/types'

export type Service = {
  slug: string
  title: Localized
  summary: Localized
  description: Localized
  approach: Localized
  visual: VisualVariant
  image?: string
  technologies: string[]
  includes: { ar: string[]; en: string[] }
  seo: Localized
}

export const services: Service[] = [
  {
    slug: 'digital-products',
    title: { ar: 'المنتجات الرقمية', en: 'Digital products' },
    summary: {
      ar: 'نحوّل الفكرة إلى منتج يمكن استخدامه، قياسه، وتطويره.',
      en: 'We turn an idea into a product people can use, measure, and improve.',
    },
    description: {
      ar: 'المنتج الرقمي ليس شاشة جميلة. هو قرار عن المستخدم، النطاق، والتقنية التي تحمله. نبدأ بفهم الفكرة ثم نجمع الاستراتيجية والتصميم والهندسة حتى يخرج شيء حقيقي.',
      en: 'A digital product is not a polished screen. It is a decision about the user, the scope, and the technology that carries it. We understand the idea first, then bring strategy, design, and engineering together until something real exists.',
    },
    approach: {
      ar: 'لا نبدأ من قالب جاهز. نحدد النسخة الأولى التي تستحق البناء، ثم نوسعها عندما يثبت الاستخدام.',
      en: 'We do not start from a ready-made template. We define the first version worth building, then extend it when use proves the next step.',
    },
    visual: 'core',
    technologies: ['Product strategy', 'React', 'TypeScript', 'Node.js'],
    includes: {
      ar: ['تحديد النسخة الأولى', 'تجربة استخدام', 'بناء الويب أو الجوال', 'تجهيز ما بعد الإطلاق'],
      en: ['First-version definition', 'Experience design', 'Web or mobile build', 'What happens after launch'],
    },
    seo: {
      ar: 'تطوير منتجات رقمية في السعودية مع أوكية: من فهم الفكرة إلى منتج يمكن إطلاقه وتطويره.',
      en: 'Digital product development in Saudi Arabia with OKIA, from understanding the idea to a product you can launch and evolve.',
    },
  },
  {
    slug: 'web-development',
    title: { ar: 'تطبيقات الويب', en: 'Web applications' },
    summary: {
      ar: 'منصات ويب حديثة، سريعة، ومهيأة للنمو.',
      en: 'Modern web platforms built to stay fast and ready to grow.',
    },
    description: {
      ar: 'نبني تطبيقات الويب التي يدير بها الفريق عمله أو يخدم بها عملاءه: لوحات، بوابات، ومنصات عمليات. الأداء والوضوح واللغة جزء من الهندسة، لا طبقة أخيرة.',
      en: 'We build the web applications a team uses to run its work or serve its customers: consoles, portals, and operational platforms. Performance, clarity, and language are part of the engineering, not a final coat.',
    },
    approach: {
      ar: 'نفهم المحتوى والصلاحيات والتكاملات قبل اختيار شكل الواجهة.',
      en: 'We understand content, permissions, and integrations before the interface takes its shape.',
    },
    visual: 'lattice',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    includes: {
      ar: ['منصات تشغيل', 'بوابات عملاء', 'لوحات إدارة', 'تكاملات'],
      en: ['Operations platforms', 'Client portals', 'Admin consoles', 'Integrations'],
    },
    seo: {
      ar: 'تطوير مواقع وتطبيقات ويب في الرياض. أوكية تبني منصات واضحة وقابلة للتوسع بعد فهم العمل.',
      en: 'Web development in Riyadh. OKIA builds clear, scalable platforms after understanding the business.',
    },
  },
  {
    slug: 'mobile-development',
    title: { ar: 'تطبيقات الجوال', en: 'Mobile applications' },
    summary: {
      ar: 'تجارب iOS وAndroid متصلة بالمنتج نفسه.',
      en: 'iOS and Android experiences connected to the same product.',
    },
    description: {
      ar: 'الجوال ليس تصغيراً لسطح المكتب. نصمم المهمة التي تحدث في اليد: متابعة، اعتماد، بيع، أو عمل ميداني، ونربطها بالمنتج على بقية الأجهزة.',
      en: 'Mobile is not a smaller desktop. We design the task that happens in the hand — follow-up, approval, sale, or field work — and connect it to the product on every other screen.',
    },
    approach: {
      ar: 'نحدد ما يجب أن يعيش على الجوال، وما يبقى على الويب، قبل أن نكتب التطبيق.',
      en: 'We decide what belongs on the phone, and what stays on the web, before the app is written.',
    },
    visual: 'orbit',
    technologies: ['Flutter', 'React Native', 'iOS', 'Android'],
    includes: {
      ar: ['تطبيقات تشغيل', 'تجارب عملاء', 'إشعارات ومداخل واضحة', 'ربط مع الويب'],
      en: ['Operational apps', 'Customer experiences', 'Clear entry and notifications', 'Connection with the web'],
    },
    seo: {
      ar: 'تطوير تطبيقات الجوال في الرياض لأنظمة iOS وAndroid، كجزء من منتج واحد لا كمشروع منفصل.',
      en: 'Mobile app development in Riyadh for iOS and Android, as part of one product rather than a separate project.',
    },
  },
  {
    slug: 'custom-software',
    title: { ar: 'البرمجيات الخاصة', en: 'Custom software' },
    summary: {
      ar: 'أنظمة تُبنى حول طريقة عملك، لا حول قالب عام.',
      en: 'Software shaped around how your organization actually works.',
    },
    description: {
      ar: 'حين لا يكفي منتج جاهز، نبني البرنامج الذي يطابق العملية: الموافقات، الحالات، والتقارير التي يحتاجها الفريق. نرفض أن نبدأ البرمجة قبل أن تُفهم العملية.',
      en: 'When a ready-made product is not enough, we build the software that matches the process: approvals, states, and the reports the team needs. We will not start coding before that process is understood.',
    },
    approach: {
      ar: 'نرسم العملية كما تحدث، ثم نبني النظام حول الاستثناءات لا حول الحالة المثالية فقط.',
      en: 'We map the process as it happens, then build the system around the exceptions, not only the ideal path.',
    },
    visual: 'arch',
    technologies: ['TypeScript', 'Python', 'PostgreSQL', 'APIs'],
    includes: {
      ar: ['أنظمة داخلية', 'أدوات فرق', 'تكامل مع أنظمة قائمة', 'صلاحيات'],
      en: ['Internal systems', 'Team tools', 'Integration with existing systems', 'Permissions'],
    },
    seo: {
      ar: 'تطوير أنظمة وبرمجيات خاصة في السعودية. أوكية تفهم العملية ثم تبني النظام حولها.',
      en: 'Custom software development in Saudi Arabia. OKIA understands the operation, then builds the system around it.',
    },
  },
  {
    slug: 'business-systems',
    title: { ar: 'أنظمة الأعمال', en: 'Business systems' },
    summary: {
      ar: 'ERP وCRM ومنصات داخلية تربط العمل اليومي.',
      en: 'ERP, CRM, and internal platforms that connect daily work.',
    },
    description: {
      ar: 'أنظمة الأعمال تنجح حين تعكس طريقة الشركة لا العكس. نستمع إلى الفرق التي ستستخدم النظام كل يوم، ثم نرتب الوحدات والبيانات والصلاحيات حول ذلك.',
      en: 'Business systems succeed when they reflect the company, not the other way around. We listen to the teams who will use the system every day, then arrange modules, data, and access around that.',
    },
    approach: {
      ar: 'نبدأ بالعملية الأكثر إيلاماً، لا بكل الوحدات دفعة واحدة.',
      en: 'We start with the process that hurts most, not with every module at once.',
    },
    visual: 'skyline',
    technologies: ['PostgreSQL', 'Node.js', 'React', 'RBAC'],
    includes: {
      ar: ['تشغيل داخلي', 'علاقات العملاء', 'موافقات ومسارات', 'تقارير تشغيل'],
      en: ['Internal operations', 'Customer relationships', 'Approvals and workflows', 'Operational reporting'],
    },
    seo: {
      ar: 'تطوير أنظمة ERP وCRM ومنصات عمل داخلية في الرياض، بعد فهم العملية لا قبلها.',
      en: 'ERP, CRM, and internal platform development in Riyadh, after the operation is understood.',
    },
  },
  {
    slug: 'ai',
    title: { ar: 'الذكاء الاصطناعي والوكلاء', en: 'AI and AI agents' },
    summary: {
      ar: 'أتمتة ومنتجات ذكية تعمل تحت إشراف الفريق.',
      en: 'Automation and intelligent products that stay under the team’s supervision.',
    },
    description: {
      ar: 'نستخدم الذكاء الاصطناعي داخل طريقة عملنا وداخل منتجات العملاء حين يحل مشكلة حقيقية: تلخيص، بحث، مساعدة، أو قرار يحتاج مراجعة. الوكلاء لا يستبدلون المختصين.',
      en: 'We use AI inside our own way of working, and inside client products, when it solves a real problem: summary, search, assistance, or a decision that still needs review. Agents do not replace specialists.',
    },
    approach: {
      ar: 'نحدد المهمة، البيانات، وحدود المراجعة البشرية قبل اختيار النموذج.',
      en: 'We define the task, the data, and the limits of human review before choosing a model.',
    },
    visual: 'orbit',
    technologies: ['LLM systems', 'OpenAI APIs', 'Vector databases', 'Python'],
    includes: {
      ar: ['مساعدون داخليون', 'أتمتة مدروسة', 'بحث في المعرفة', 'مراجعة بشرية'],
      en: ['Internal assistants', 'Considered automation', 'Knowledge search', 'Human review'],
    },
    seo: {
      ar: 'حلول الذكاء الاصطناعي ووكلاء AI للشركات في السعودية، بإشراف بشري ومن دون وعود بالاستقلال الكامل.',
      en: 'AI solutions and AI agents for companies in Saudi Arabia, with human supervision and no claim of fully autonomous delivery.',
    },
  },
  {
    slug: 'ecommerce',
    title: { ar: 'التجارة الإلكترونية', en: 'E-commerce' },
    summary: {
      ar: 'منصات بيع سريعة، واضحة، وجاهزة للتشغيل.',
      en: 'Commerce platforms that are fast, clear, and ready to operate.',
    },
    description: {
      ar: 'المتجر منتج تشغيلي: كتالوج، طلب، دفع، وتسليم. نفهم هذه السلسلة قبل أن نرسم الصفحة الرئيسية، ونبني تجربة شراء تتحمل النمو والمواسم.',
      en: 'A store is an operational product: catalog, order, payment, and delivery. We understand that chain before drawing the homepage, and we build a buying experience that can carry growth and peak seasons.',
    },
    approach: {
      ar: 'نبدأ برحلة الشراء والتشغيل الخلفي معاً، لا بالواجهة وحدها.',
      en: 'We start with the buying journey and the back office together, not with the interface alone.',
    },
    visual: 'dune',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Payments'],
    includes: {
      ar: ['كتالوج وطلب', 'تجربة جوال', 'تشغيل الطلبات', 'تكامل الدفع والشحن'],
      en: ['Catalog and checkout', 'Mobile experience', 'Order operations', 'Payment and shipping integration'],
    },
    seo: {
      ar: 'تطوير منصات تجارة إلكترونية في السعودية، من فهم رحلة الشراء إلى منصة قابلة للتشغيل.',
      en: 'E-commerce platform development in Saudi Arabia, from the buying journey to a platform the team can run.',
    },
  },
  {
    slug: 'mvp',
    title: { ar: 'إطلاق النسخة الأولى', en: 'MVP development' },
    summary: {
      ar: 'نسخة أولى تختبر الفكرة مع مستخدم حقيقي.',
      en: 'A first version that tests the idea with a real user.',
    },
    description: {
      ar: 'النسخة الأولى ليست منتجاً ناقصاً بطريقة عشوائية. هي أصغر نسخة تجيب عن سؤال مهم. نساعد على اختيار هذا السؤال، ثم نبني ما يلزم للإجابة عنه.',
      en: 'A first version is not a randomly incomplete product. It is the smallest version that answers an important question. We help choose that question, then build what is required to answer it.',
    },
    approach: {
      ar: 'نؤجل كل ما لا يغيّر التعلم من المستخدمين الأوائل.',
      en: 'We postpone anything that does not change what you learn from the first users.',
    },
    visual: 'core',
    technologies: ['React', 'TypeScript', 'PostgreSQL'],
    includes: {
      ar: ['تحديد الفرضية', 'تجربة مركّزة', 'بناء سريع ومدروس', 'قراءة ما بعد الإطلاق'],
      en: ['Hypothesis definition', 'A focused experience', 'A considered build', 'A reading of what happens after launch'],
    },
    seo: {
      ar: 'تطوير MVP للشركات الناشئة في السعودية: نسخة أولى واضحة لاختبار الفكرة، لا نموذجاً شكلياً.',
      en: 'MVP development for Saudi startups: a clear first version to test the idea, not a surface prototype.',
    },
  },
  {
    slug: 'digital-transformation',
    title: { ar: 'التحول الرقمي', en: 'Digital transformation' },
    summary: {
      ar: 'تحديث العمليات والأنظمة القديمة حول طريقة العمل الحقيقية.',
      en: 'Modernizing legacy processes and systems around the way work really happens.',
    },
    description: {
      ar: 'التحول ليس استبدال كل نظام دفعة واحدة. نستمع إلى الفرق، نحدد أين يضيع الوقت، ثم نرتب الانتقال: ما يبقى، ما يُستبدل، وما يتكامل.',
      en: 'Transformation is not replacing every system at once. We listen to the teams, find where time is lost, then sequence the change: what stays, what is replaced, and what integrates.',
    },
    approach: {
      ar: 'نرسم الوضع الحالي بصراحة قبل أن نعد بصورة مستقبلية.',
      en: 'We map the current state honestly before promising a future picture.',
    },
    visual: 'skyline',
    technologies: ['APIs', 'Cloud', 'PostgreSQL', 'React'],
    includes: {
      ar: ['تشخيص العملية', 'خارطة انتقال', 'أنظمة جديدة أو تكاملات', 'تبني بعد الإطلاق'],
      en: ['Process diagnosis', 'A transition map', 'New systems or integrations', 'Adoption after launch'],
    },
    seo: {
      ar: 'التحول الرقمي في السعودية مع أوكية: فهم العملية أولاً، ثم تحديث الأنظمة على مراحل واضحة.',
      en: 'Digital transformation in Saudi Arabia with OKIA: understand the operation first, then modernize systems in a clear sequence.',
    },
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
