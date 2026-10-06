import type { ReactNode } from "react";
import type { HeroStageId } from "@/content/hero";

type IconProps = {
  id: HeroStageId;
};

export function StageIcon({ id }: IconProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {paths[id]}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<HeroStageId, ReactNode> = {
  request: <path {...stroke} d="M2.5 4.5h11v7h-11zM2.5 4.5l5.5 4 5.5-4" />,
  agent: (
    <>
      <circle {...stroke} cx="8" cy="8" r="2" />
      <path {...stroke} d="M8 2.5v2M8 11.5v2M2.5 8h2M11.5 8h2" />
    </>
  ),
  understand: (
    <>
      <circle {...stroke} cx="8" cy="5.5" r="2" />
      <path {...stroke} d="M3.5 13c.6-2.2 2.3-3.5 4.5-3.5s3.9 1.3 4.5 3.5" />
    </>
  ),
  plan: <path {...stroke} d="M4 3.5h8M4 8h8M4 12.5h5" />,
  tools: (
    <>
      <path {...stroke} d="M10.2 3.2l2.6 2.6-4.6 4.6H6.2V8.4L10.2 3.2z" />
      <path {...stroke} d="M4.2 11.8l2-2" />
    </>
  ),
  execute: <path {...stroke} d="M6 3.5v9l6-4.5-6-4.5z" />,
  verify: (
    <>
      <circle {...stroke} cx="8" cy="8" r="5" />
      <path {...stroke} d="M5.5 8.2l1.7 1.7 3.3-3.4" />
    </>
  ),
  completed: <path {...stroke} d="M3.5 8.5l3 3 6-6.5" />,
};
