import type { Localized } from '@/lib/types'

export const privacySections: { title: Localized; text: Localized }[] = [
  {
    title: { ar: 'ما الذي نطلبه', en: 'What we ask for' },
    text: {
      ar: 'نموذج المشروع يجمع وصفاً للفكرة، والمشكلة، والمستخدمين، وطبيعة المنتج، والمرحلة، والميزانية التقريبية، ونموذج التعاون، بالإضافة إلى الاسم والبريد والهاتف والجهة.',
      en: 'The project form collects a description of the idea, the problem, the users, the kind of product, the stage, an approximate budget, the engagement model, plus your name, email, phone, and organization.',
    },
  },
  {
    title: { ar: 'لماذا', en: 'Why' },
    text: {
      ar: 'نستخدم هذه المعلومات لفهم المشروع قبل التواصل. لا نبيع البيانات الشخصية، ولا نستخدم النموذج لقائمة بريدية.',
      en: 'We use this information to understand the project before we contact you. We do not sell personal data, and the form is not a mailing list.',
    },
  },
  {
    title: { ar: 'ما يُخزَّن في المتصفح', en: 'What stays in the browser' },
    text: {
      ar: 'قد نحفظ تفضيلك للغة محلياً حتى نفتح الموقع بالعربية أو الإنجليزية في الزيارة التالية. هذا الموقع لا يضع أدوات إعلان.',
      en: 'We may store your language preference locally so the next visit opens in Arabic or English. This site does not load advertising tools.',
    },
  },
  {
    title: { ar: 'التصحيح أو الحذف', en: 'Correction or deletion' },
    text: {
      ar: 'إذا أردت تصحيح طلب أو حذفه، راسلنا على البريد الظاهر في صفحة التواصل وسنراجع الطلب.',
      en: 'If you want a submission corrected or deleted, email the address on the contact page and we will review the request.',
    },
  },
]

export const termsSections: { title: Localized; text: Localized }[] = [
  {
    title: { ar: 'طبيعة الموقع', en: 'Nature of the site' },
    text: {
      ar: 'المحتوى يعرّف بطريقة عمل أوكية. هو ليس عرض سعر، ولا عقداً، ولا وعداً بنتيجة تجارية.',
      en: 'The content explains how OKIA works. It is not a quotation, a contract, or a promise of a commercial result.',
    },
  },
  {
    title: { ar: 'المشاريع والعروض', en: 'Projects shown here' },
    text: {
      ar: 'الأعمال المعنونة «نسخة عرض» أمثلة توضيحية. ليست عملاء حقيقيين ولا نتائج مقاسة. أي اسم أو رقم بين قوسين مربعين هو عنصر نائب حتى تُضاف معلومات حقيقية.',
      en: 'Work marked “Demo” is illustrative. It is not a real client and not a measured result. Anything in square brackets is a placeholder until real information is supplied.',
    },
  },
  {
    title: { ar: 'الشراكة', en: 'Partnership' },
    text: {
      ar: 'الحديث عن الشراكة التقنية دعوة للنقاش في مشاريع مختارة. لا يوجد على هذا الموقع نسبة، أو التزام تمويل، أو عرض مفتوح. أي تعاون لا يبدأ إلا باتفاق مكتوب.',
      en: 'Talk of a technology partnership is an invitation to discuss selected projects. This website states no percentage, funding commitment, or open offer. No collaboration starts without a written agreement.',
    },
  },
  {
    title: { ar: 'الملكية', en: 'Ownership' },
    text: {
      ar: 'نصوص الموقع وهويته البصرية تخص أوكية. ملكية مخرجات أي مشروع لاحقاً تُحدد في عقد ذلك المشروع وحده.',
      en: 'The site’s writing and visual identity belong to OKIA. Ownership of any future project deliverable is defined only in that project’s contract.',
    },
  },
]
