import type { Locale } from "@/i18n/routing";

export type DeploymentMode = {
  id: string;
  name: string;
  detail: string;
};

export type DeploymentContent = {
  eyebrow: string;
  title: string;
  description: string;
  modes: DeploymentMode[];
};

const english: DeploymentContent = {
  eyebrow: "Enterprise deployment",
  title: "The agent runs where the work already runs.",
  description:
    "Designed to support the environment an organization already operates. The placement follows that environment. This is a deployment model, not a certification.",
  modes: [
    {
      id: "cloud",
      name: "Cloud",
      detail: "Designed to support a deployment in a public cloud the organization already uses.",
    },
    {
      id: "private",
      name: "Private Cloud",
      detail: "Designed to support a cloud the organization operates for itself.",
    },
    {
      id: "onprem",
      name: "On-Premise",
      detail: "Designed to support a deployment inside the organization's own network.",
    },
    {
      id: "hybrid",
      name: "Hybrid",
      detail: "Designed to support work that spans the organization's network and a cloud.",
    },
  ],
};

const arabic: DeploymentContent = {
  eyebrow: "النشر المؤسسي",
  title: "يعمل الوكيل حيث يعمل العمل أصلًا.",
  description:
    "صُمم ليدعم البيئة التي تعمل عليها المؤسسة أصلًا. يتبع موضع الوكيل تلك البيئة. هذا نموذج نشر، وليس شهادة التزام.",
  modes: [
    {
      id: "cloud",
      name: "السحابة",
      detail: "صُمم ليدعم النشر في سحابة عامة تستخدمها المؤسسة أصلًا.",
    },
    {
      id: "private",
      name: "السحابة الخاصة",
      detail: "صُمم ليدعم سحابة تديرها المؤسسة لنفسها.",
    },
    {
      id: "onprem",
      name: "داخل المؤسسة",
      detail: "صُمم ليدعم النشر داخل شبكة المؤسسة.",
    },
    {
      id: "hybrid",
      name: "النشر الهجين",
      detail: "صُمم ليدعم عملًا يمتد بين شبكة المؤسسة وسحابة.",
    },
  ],
};

export const deploymentContent: Record<Locale, DeploymentContent> = {
  en: english,
  ar: arabic,
};
