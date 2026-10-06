import type { HTMLAttributes } from "react";
import { cx } from "@/lib/cx";
import styles from "./Container.module.css";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "narrow" | "wide";
};

export function Container({
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cx(
        styles.container,
        size === "narrow" && styles.narrow,
        size === "wide" && styles.wide,
        className,
      )}
      {...props}
    />
  );
}
