import type { Localized } from '@/lib/types'

export const partnership = {
  eyebrow: { ar: 'الشراكة', en: 'Partnership' },
  title: {
    ar: 'ليس كل مشروع يجب أن يبدأ بفاتورة كبيرة.',
    en: 'Not every project has to begin with a large invoice.',
  },
  intro: {
    ar: 'يمكن تنفيذ المشروع بالنموذج التقليدي، أو مناقشة شراكة تقنية في مشاريع نرى فيها فرصة حقيقية. هذا خيار استراتيجي، لا عرضاً لتكلفة أقل.',
    en: 'A project can follow the traditional model, or we can discuss a technology partnership where we see a real opportunity. This is a strategic option, not a cheaper-development offer.',
  },
  question: { ar: 'كيف تريد أن نبني مشروعك؟', en: 'How do you want us to build?' },
  build: {
    kicker: { ar: 'بناء', en: 'Build' },
    title: { ar: 'أنت تمول المشروع، ونحن نبنيه باحتراف.', en: 'You fund the project. We build it properly.' },
    text: {
      ar: 'تدفع تكلفة التطوير، ونحن نبني المنتج باحتراف. تتسلم المخرجات المتفق عليها حسب العقد.',
      en: 'You pay the development cost, and we build the product professionally. You receive the agreed deliverables under the contract.',
    },
    points: {
      ar: ['نطاق وتكلفة يتضحان بعد الفهم', 'ملكية حسب ما يُتفق عليه كتابياً', 'مناسب حين يكون القرار والتمويل عندك'],
      en: ['Scope and cost become clear after we understand the work', 'Ownership follows the written agreement', 'Fits when the decision and funding stay with you'],
    },
  },
  partner: {
    kicker: { ar: 'شراكة', en: 'Partner' },
    title: {
      ar: 'نشاركك في بناء المشروع عندما نؤمن بإمكانيته.',
      en: 'We join the build when we believe in its potential.',
    },
    text: {
      ar: 'في المشاريع التي نرى فيها فرصة حقيقية، يمكن أن نناقش شراكة تقنية تقلل الاستثمار الأولي مقابل اتفاق تجاري مناسب للطرفين.',
      en: 'On projects where we see a real opportunity, we can discuss a technology partnership that reduces the initial investment in exchange for a commercial agreement that works for both sides.',
    },
    points: {
      ar: ['ليست لكل مشروع', 'لا نسب جاهزة ولا وعود تمويل', 'أي اتفاق يُناقش ويُوثق حسب المشروع'],
      en: ['Not available for every project', 'No ready-made percentages and no funding promises', 'Any agreement is discussed and written for that project'],
    },
  },
  notThis: {
    title: { ar: 'ما لا تعنيه الشراكة', en: 'What partnership is not' },
    items: [
      { ar: 'ليست خصماً على سعر التطوير.', en: 'It is not a discount on development.' },
      { ar: 'ليست وعداً بتمويل أو بعائد.', en: 'It is not a promise of funding or return.' },
      { ar: 'ليست متاحة لكل فكرة تصلنا.', en: 'It is not open to every idea we receive.' },
      { ar: 'لا يوجد عرض مالي على هذا الموقع. الاتفاق، إن حصل، يكون كتابياً وبعد الفهم.', en: 'There is no financial offer on this website. An agreement, if one happens, is written after we understand the work.' },
    ] as Localized[],
  },
}
