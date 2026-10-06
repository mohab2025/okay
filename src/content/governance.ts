import type { Locale } from "@/i18n/routing";

export type GovernanceControl = {
  id: string;
  name: string;
  detail: string;
};

export type GovernanceGroup = {
  id: string;
  title: string;
  controls: GovernanceControl[];
};

export type GovernanceContent = {
  eyebrow: string;
  title: string;
  description: string;
  groups: GovernanceGroup[];
};

const english: GovernanceContent = {
  eyebrow: "Security and governance",
  title: "Control is part of the design.",
  description:
    "Designed to support the controls an enterprise uses to decide who can act, what is recorded, and when a person remains in the path. These are design intentions, not certifications or guarantees.",
  groups: [
    {
      id: "access",
      title: "Access",
      controls: [
        {
          id: "authentication",
          name: "Authentication",
          detail: "Designed to support sign-in through the identity system the organization already uses.",
        },
        {
          id: "authorization",
          name: "Authorization",
          detail: "Designed to support a check of what an account may do before an action runs.",
        },
        {
          id: "roles",
          name: "Role-based access",
          detail: "Designed to support access that follows a person's role.",
        },
      ],
    },
    {
      id: "records",
      title: "Records",
      controls: [
        {
          id: "audit",
          name: "Audit logs",
          detail: "Designed to support a record of who did what, and when.",
        },
        {
          id: "isolation",
          name: "Data isolation",
          detail: "Designed to support keeping one organization's records separate from another's.",
        },
        {
          id: "encryption",
          name: "Encryption",
          detail:
            "Designed to support encryption of data in transit and at rest, through the controls of the deployment.",
        },
        {
          id: "history",
          name: "Action history",
          detail: "Designed to support a history of the actions an agent took.",
        },
      ],
    },
    {
      id: "operation",
      title: "Operation",
      controls: [
        {
          id: "approval",
          name: "Human approval",
          detail: "Designed to support a stop for a person before an action that needs approval.",
        },
        {
          id: "permissions",
          name: "Agent permissions",
          detail: "Designed to support a defined set of actions an agent is allowed to take.",
        },
        {
          id: "monitoring",
          name: "Monitoring",
          detail: "Designed to support visibility into whether an agent is running, waiting, or stopped.",
        },
        {
          id: "errors",
          name: "Error handling",
          detail: "Designed to support a defined response when a step fails, including a stop and a record.",
        },
      ],
    },
  ],
};

const arabic: GovernanceContent = {
  eyebrow: "الأمان والحوكمة",
  title: "التحكم جزء من التصميم.",
  description:
    "صُمم ليدعم الضوابط التي تستخدمها المؤسسة لتقرر من يستطيع التصرف، وما الذي يُسجَّل، ومتى يبقى الشخص في المسار. هذه مقاصد تصميم، وليست شهادات التزام ولا ضمانات.",
  groups: [
    {
      id: "access",
      title: "الوصول",
      controls: [
        {
          id: "authentication",
          name: "المصادقة",
          detail: "صُمم ليدعم تسجيل الدخول عبر نظام الهوية الذي تستخدمه المؤسسة أصلًا.",
        },
        {
          id: "authorization",
          name: "التفويض",
          detail: "صُمم ليدعم التحقق مما يُسمح للحساب بفعله قبل تنفيذ الإجراء.",
        },
        {
          id: "roles",
          name: "الوصول حسب الدور",
          detail: "صُمم ليدعم وصولًا يتبع دور الشخص.",
        },
      ],
    },
    {
      id: "records",
      title: "السجلات",
      controls: [
        {
          id: "audit",
          name: "سجلات التدقيق",
          detail: "صُمم ليدعم سجلًا بمن فعل ماذا، ومتى.",
        },
        {
          id: "isolation",
          name: "عزل البيانات",
          detail: "صُمم ليدعم إبقاء سجلات مؤسسة منفصلة عن سجلات مؤسسة أخرى.",
        },
        {
          id: "encryption",
          name: "التشفير",
          detail: "صُمم ليدعم تشفير البيانات أثناء نقلها وعند حفظها، بضوابط بيئة النشر.",
        },
        {
          id: "history",
          name: "سجل الإجراءات",
          detail: "صُمم ليدعم تاريخًا للإجراءات التي نفذها الوكيل.",
        },
      ],
    },
    {
      id: "operation",
      title: "التشغيل",
      controls: [
        {
          id: "approval",
          name: "موافقة شخص",
          detail: "صُمم ليدعم توقفًا لموافقة شخص قبل إجراء يحتاج إلى ذلك.",
        },
        {
          id: "permissions",
          name: "صلاحيات الوكيل",
          detail: "صُمم ليدعم مجموعة محددة من الإجراءات يُسمح للوكيل بها.",
        },
        {
          id: "monitoring",
          name: "المراقبة",
          detail: "صُمم ليدعم رؤية ما إذا كان الوكيل يعمل أو ينتظر أو متوقفًا.",
        },
        {
          id: "errors",
          name: "معالجة الأخطاء",
          detail: "صُمم ليدعم استجابة محددة حين تفشل خطوة، بما في ذلك التوقف وتسجيل ذلك.",
        },
      ],
    },
  ],
};

export const governanceContent: Record<Locale, GovernanceContent> = {
  en: english,
  ar: arabic,
};
