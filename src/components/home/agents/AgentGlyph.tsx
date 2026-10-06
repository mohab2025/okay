import type { ReactNode } from "react";
import type { AgentId } from "@/content/agents";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<AgentId, ReactNode> = {
  software: <path {...stroke} d="M5 4.5L2.5 8 5 11.5M11 4.5l2.5 3.5L11 11.5M9 3.5L7 12.5" />,
  research: (
    <>
      <circle {...stroke} cx="7" cy="7" r="3.2" />
      <path {...stroke} d="M9.4 9.4L13 13" />
    </>
  ),
  data: <path {...stroke} d="M3 12.5V8M6.5 12.5V5.5M10 12.5V7M13.5 12.5V3.5" />,
  customer: (
    <>
      <circle {...stroke} cx="8" cy="5.5" r="2" />
      <path {...stroke} d="M3.5 13c.6-2.2 2.3-3.5 4.5-3.5s3.9 1.3 4.5 3.5" />
    </>
  ),
  documents: <path {...stroke} d="M4.5 2.5h5l3 3v8h-8zM9.5 2.5V5.5H12.5M6.5 8.5h3M6.5 11h3" />,
  sales: <path {...stroke} d="M3 12.5l3.2-4 2.3 2.2L13 4.5" />,
  qa: (
    <>
      <circle {...stroke} cx="8" cy="8" r="4.5" />
      <path {...stroke} d="M5.7 8.1l1.6 1.6 3-3.1" />
    </>
  ),
  finance: <path {...stroke} d="M3.5 5.5h9v6h-9zM3.5 8h9M8 8v3.5" />,
  operations: <path {...stroke} d="M3 4.5h10M3 8h7M3 11.5h10M11.5 6.5v3" />,
  custom: <path {...stroke} d="M3 4.5h4v4H3zM9 4.5h4v4H9zM6 9.5h4v3H6z" />,
};

export function AgentGlyph({ id }: { id: AgentId }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      {paths[id]}
    </svg>
  );
}
