import type { HTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import styles from "./Badge.module.css";

type Variant = "neutral" | "accent" | "violet";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

const variantClass: Record<Variant, string> = {
  neutral: styles.neutral,
  accent: styles.accent,
  violet: styles.violet,
};

export function Badge({
  variant = "neutral",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx(styles.badge, variantClass[variant], className)}
      {...props}
    />
  );
}
