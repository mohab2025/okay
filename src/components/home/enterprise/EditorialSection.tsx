import type { ReactNode } from "react";
import { useId } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import styles from "./editorial.module.css";

type EditorialSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  heading?: "h1" | "h2";
  atmosphere?: "ink" | "raised";
  children: ReactNode;
};

export function EditorialSection({
  id,
  eyebrow,
  title,
  description,
  heading = "h2",
  atmosphere,
  children,
}: EditorialSectionProps) {
  const titleId = useId();
  const Title = heading;

  return (
    <section
      className={styles.section}
      id={id}
      data-reveal=""
      data-atmosphere={atmosphere}
      aria-labelledby={titleId}
    >
      <PageContainer size="wide">
        <header className={styles.intro} data-reveal-text="">
          <p className={styles.eyebrow}>{eyebrow}</p>
          <Title id={titleId} className={styles.title}>
            {title}
          </Title>
          <p className={styles.description}>{description}</p>
        </header>
        {children}
      </PageContainer>
    </section>
  );
}
