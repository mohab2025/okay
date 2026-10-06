import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

const variantClass: Record<Variant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
};

const sizeClass: Record<Size, string> = {
  sm: styles.sm,
  md: styles.md,
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cx(styles.button, variantClass[variant], sizeClass[size], className)}
    >
      {children}
    </Link>
  );
}
