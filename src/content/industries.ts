import type { Locale } from "@/i18n/routing";

export type Industry = {
  id: string;
  name: string;
  request: string;
  workflow: string[];
  result: string;
};

export type IndustriesContent = {
  eyebrow: string;
  title: string;
  description: string;
  request: string;
  workflow: string;
  result: string;
  industries: Industry[];
};

const english: IndustriesContent = {
  eyebrow: "Industries",
  title: "The same kind of work, in different fields.",
  description:
    "These are representative workflows. They show how a request can move through records and rules. They are not client results.",
  request: "Representative request",
  workflow: "Workflow",
  result: "What gets written",
  industries: [
    {
      id: "financial",
      name: "Financial Services",
      request: "A payment exception needs a decision.",
      workflow: ["Exception", "Account record", "Handling rule", "Decision"],
      result: "The decision is written back onto the case.",
    },
    {
      id: "insurance",
      name: "Insurance",
      request: "A claim arrives with a document.",
      workflow: ["Document", "Extracted fields", "Policy record", "Exception route"],
      result: "The exception is routed with the fields taken from the document.",
    },
    {
      id: "healthcare",
      name: "Healthcare",
      request: "A person asks to move an appointment.",
      workflow: ["Request", "Schedule", "Open slot", "Record"],
      result: "The appointment record is updated. This path does not make a clinical decision.",
    },
    {
      id: "government",
      name: "Government",
      request: "A request needs to reach the right queue.",
      workflow: ["Request", "Classification", "Case record", "Queue"],
      result: "The request is placed on the queue the rule names.",
    },
    {
      id: "retail",
      name: "Retail",
      request: "An order cannot be fulfilled as it was placed.",
      workflow: ["Order", "Inventory record", "Replacement rule", "Customer update"],
      result: "The order record shows the replacement and the customer update.",
    },
    {
      id: "ecommerce",
      name: "E-Commerce",
      request: "A customer starts a return.",
      workflow: ["Return request", "Order record", "Return rule", "Next step"],
      result: "The order record shows the next step the rule allows.",
    },
    {
      id: "logistics",
      name: "Logistics",
      request: "A shipment does not receive its expected update.",
      workflow: ["Update", "Shipment record", "Exception rule", "Status"],
      result: "The shipment status is written, and the next party can be told.",
    },
    {
      id: "realestate",
      name: "Real Estate",
      request: "Someone asks to view a property.",
      workflow: ["Request", "Property", "Calendar", "Lead record"],
      result: "The viewing is booked and the lead record is updated.",
    },
    {
      id: "professional",
      name: "Professional Services",
      request: "A client writes about an open matter.",
      workflow: ["Message", "Matter record", "Next step", "Activity log"],
      result: "The matter log holds the next step.",
    },
  ],
};

const arabic: IndustriesContent = {
  eyebrow: "القطاعات",
  title: "نوع العمل نفسه، في مجالات مختلفة.",
  description:
    "هذه مسارات تمثيلية. توضّح كيف يتحرك الطلب عبر السجلات والقواعد. ليست نتائج عملاء.",
  request: "طلب تمثيلي",
  workflow: "المسار",
  result: "ما يُكتب",
  industries: [
    {
      id: "financial",
      name: "الخدمات المالية",
      request: "استثناء في عملية دفع يحتاج إلى قرار.",
      workflow: ["الاستثناء", "سجل الحساب", "قاعدة المعالجة", "القرار"],
      result: "يُكتب القرار على الحالة.",
    },
    {
      id: "insurance",
      name: "التأمين",
      request: "تصل مطالبة ومعها مستند.",
      workflow: ["المستند", "الحقول المستخرجة", "سجل الوثيقة", "توجيه الاستثناء"],
      result: "يُوجَّه الاستثناء ومعه الحقول المأخوذة من المستند.",
    },
    {
      id: "healthcare",
      name: "الرعاية الصحية",
      request: "يطلب شخص نقل موعد.",
      workflow: ["الطلب", "الجدول", "موعد متاح", "السجل"],
      result: "يُحدَّث سجل الموعد. هذا المسار لا يتخذ قرارًا طبيًا.",
    },
    {
      id: "government",
      name: "القطاع الحكومي",
      request: "طلب يحتاج إلى أن يصل إلى قائمة الانتظار المناسبة.",
      workflow: ["الطلب", "التصنيف", "سجل الحالة", "قائمة الانتظار"],
      result: "يُوضع الطلب في القائمة التي تسميها القاعدة.",
    },
    {
      id: "retail",
      name: "التجزئة",
      request: "طلب شراء لا يمكن تلبيته كما أُرسل.",
      workflow: ["الطلب", "سجل المخزون", "قاعدة البديل", "تحديث العميل"],
      result: "يظهر في سجل الطلب البديل وتحديث العميل.",
    },
    {
      id: "ecommerce",
      name: "التجارة الإلكترونية",
      request: "يبدأ العميل إرجاعًا.",
      workflow: ["طلب الإرجاع", "سجل الطلب", "قاعدة الإرجاع", "الخطوة التالية"],
      result: "يظهر في سجل الطلب الخطوة التي تسمح بها القاعدة.",
    },
    {
      id: "logistics",
      name: "الخدمات اللوجستية",
      request: "لا يصل تحديث الشحنة في الوقت المتوقع.",
      workflow: ["التحديث", "سجل الشحنة", "قاعدة الاستثناء", "الحالة"],
      result: "تُكتب حالة الشحنة، ويمكن إبلاغ الطرف التالي.",
    },
    {
      id: "realestate",
      name: "العقار",
      request: "يطلب أحدهم معاينة عقار.",
      workflow: ["الطلب", "العقار", "التقويم", "سجل الاهتمام"],
      result: "تُحجز المعاينة ويُحدَّث سجل الاهتمام.",
    },
    {
      id: "professional",
      name: "الخدمات المهنية",
      request: "يكتب العميل عن مسألة مفتوحة.",
      workflow: ["الرسالة", "سجل المسألة", "الخطوة التالية", "سجل النشاط"],
      result: "يحتفظ سجل المسألة بالخطوة التالية.",
    },
  ],
};

export const industriesContent: Record<Locale, IndustriesContent> = {
  en: english,
  ar: arabic,
};
