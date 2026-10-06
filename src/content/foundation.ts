import type { Locale } from "@/i18n/routing";

export type SignalTone = "neutral" | "accent" | "violet";

export type Signal = {
  id: string;
  label: string;
  tone: SignalTone;
};

export type WorkCard = {
  id: string;
  index: string;
  title: string;
  body: string;
};

type FoundationContent = {
  signals: Signal[];
  cards: WorkCard[];
};

export const foundationContent: Record<Locale, FoundationContent> = {
  en: {
    signals: [
      { id: "agents", label: "AI Agents", tone: "accent" },
      { id: "automation", label: "Business Automation", tone: "neutral" },
      { id: "software", label: "Software Engineering", tone: "violet" },
    ],
    cards: [
      {
        id: "understand",
        index: "01",
        title: "Understand",
        body: "Read the business problem and the systems around it before any action is taken.",
      },
      {
        id: "reason",
        index: "02",
        title: "Reason",
        body: "Turn unstructured input into decisions an agent can execute with a clear owner.",
      },
      {
        id: "deliver",
        index: "03",
        title: "Deliver",
        body: "Verify the result, then return finished work instead of another answer.",
      },
    ],
  },
  ar: {
    signals: [
      { id: "agents", label: "وكلاء الذكاء الاصطناعي", tone: "accent" },
      { id: "automation", label: "أتمتة الأعمال", tone: "neutral" },
      { id: "software", label: "هندسة البرمجيات", tone: "violet" },
    ],
    cards: [
      {
        id: "understand",
        index: "01",
        title: "الفهم",
        body: "يُقرأ سياق العمل والأنظمة المحيطة به قبل أن يبدأ أي إجراء.",
      },
      {
        id: "reason",
        index: "02",
        title: "الاستدلال",
        body: "يتحول المدخل غير المنظّم إلى قرارات يستطيع الوكيل تنفيذها بمسؤولية واضحة.",
      },
      {
        id: "deliver",
        index: "03",
        title: "التسليم",
        body: "تُراجع النتيجة، ثم يُعاد عمل مكتمل بدل إجابة جديدة.",
      },
    ],
  },
};
