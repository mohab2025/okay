import type { ReactNode } from "react";
import styles from "./SkipLink.module.css";

type SkipLinkProps = {
  children: ReactNode;
};

export function SkipLink({ children }: SkipLinkProps) {
  return (
    <a className={styles.skip} href="#main">
      {children}
    </a>
  );
}
