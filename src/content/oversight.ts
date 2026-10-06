import type { Locale } from "@/i18n/routing";

export type OversightPath = {
  id: string;
  label: string;
  steps: string[];
  note: string;
};

export type OversightContent = {
  eyebrow: string;
  title: string;
  description: string;
  paths: OversightPath[];
};

const english: OversightContent = {
  eyebrow: "Human + AI",
  title: "A person stays in the path.",
  description:
    "Designed so the agent can prepare the work and wait, or carry a low-risk step and leave a record. An exception returns to a person. This is how control is designed, not a guarantee that every action is reviewed.",
  paths: [
    {
      id: "approval",
      label: "When a decision needs a person",
      steps: ["AI recommends", "Human approves", "Agent executes"],
      note: "Designed so the agent waits until a person approves.",
    },
    {
      id: "lowrisk",
      label: "When the action is low-risk",
      steps: ["AI executes low-risk action", "Logs action", "Escalates exceptions"],
      note: "Designed so the action is recorded, and an exception is raised to a person.",
    },
  ],
};

const arabic: OversightContent = {
  eyebrow: "الإنسان والوكيل",
  title: "يبقى الشخص في المسار.",
  description:
    "صُمم ليجهّز الوكيل العمل وينتظر، أو لينفّذ خطوة منخفضة المخاطر ويترك سجلًا. يعود الاستثناء إلى شخص. هكذا يُصمَّم التحكم، وليس ضمانًا بأن كل إجراء يُراجَع.",
  paths: [
    {
      id: "approval",
      label: "حين يحتاج القرار إلى شخص",
      steps: ["يوصي الوكيل", "يوافق الشخص", "ينفّذ الوكيل"],
      note: "صُمم لينتظر الوكيل حتى يوافق شخص.",
    },
    {
      id: "lowrisk",
      label: "حين يكون الإجراء منخفض المخاطر",
      steps: ["ينفّذ الوكيل إجراءً منخفض المخاطر", "يُسجَّل الإجراء", "تُرفع الاستثناءات"],
      note: "صُمم ليُسجَّل الإجراء، ويُرفع الاستثناء إلى شخص.",
    },
  ],
};

export const oversightContent: Record<Locale, OversightContent> = {
  en: english,
  ar: arabic,
};
