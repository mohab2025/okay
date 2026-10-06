import { cx } from "@/lib/cx";
import styles from "./icons.module.css";

type IconProps = {
  className?: string;
};

export function IconMenu({ className }: IconProps) {
  return (
    <svg
      className={className ?? styles.icon}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3.5 5.5h13M3.5 10h13M3.5 14.5h13"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg
      className={className ?? styles.icon}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5.5 5.5l9 9M14.5 5.5l-9 9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg
      className={cx(styles.directional, className)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
