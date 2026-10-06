import { useId, type ReactNode } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { cx } from "@/lib/cx";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  heading?: "h1" | "h2";
  width?: "default" | "narrow" | "wide";
  spacing?: "default" | "compact" | "none";
  divider?: boolean;
  atmosphere?: "ink" | "raised";
  children?: ReactNode;
};

const spacingClass = {
  default: styles.spacingDefault,
  compact: styles.spacingCompact,
  none: styles.spacingNone,
} as const;

export function Section({
  id,
  eyebrow,
  title,
  description,
  heading = "h2",
  width = "default",
  spacing = "default",
  divider = false,
  atmosphere,
  children,
}: SectionProps) {
  const headingId = useId();
  const Title = heading;
  const hasIntro = Boolean(eyebrow || title || description);

  return (
    <section
      id={id}
      className={cx(
        styles.section,
        spacingClass[spacing],
        divider && styles.divider,
      )}
      data-reveal=""
      data-atmosphere={atmosphere}
      aria-labelledby={title ? headingId : undefined}
    >
      <PageContainer size={width}>
        {hasIntro ? (
          <header className={styles.intro} data-reveal-text="">
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            {title ? (
              <Title id={headingId} className={styles.title}>
                {title}
              </Title>
            ) : null}
            {description ? (
              <p className={styles.description}>{description}</p>
            ) : null}
          </header>
        ) : null}
        {children ? (
          <div className={cx(hasIntro && styles.body)}>{children}</div>
        ) : null}
      </PageContainer>
    </section>
  );
}
