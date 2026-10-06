import type { ButtonHTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
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

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(styles.button, variantClass[variant], sizeClass[size], className)}
      {...props}
    />
  );
}
