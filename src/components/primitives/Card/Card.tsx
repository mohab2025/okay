import type { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  index?: string;
  heading?: "h2" | "h3";
  children: ReactNode;
};

export function Card({
  title,
  index,
  heading = "h2",
  children,
}: CardProps) {
  const Title = heading;

  return (
    <article className={styles.card}>
      {index ? <p className={styles.index}>{index}</p> : null}
      <Title className={styles.title}>{title}</Title>
      <div className={styles.body}>{children}</div>
    </article>
  );
}
