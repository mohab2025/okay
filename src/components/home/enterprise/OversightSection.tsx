import { IconArrow } from "@/components/icons/Icons";
import { oversightContent } from "@/content/oversight";
import type { Locale } from "@/i18n/routing";
import { EditorialSection } from "./EditorialSection";
import styles from "./oversight.module.css";

type OversightSectionProps = {
  locale: Locale;
  heading?: "h1" | "h2";
};

export function OversightSection({ locale, heading = "h2" }: OversightSectionProps) {
  const content = oversightContent[locale];

  return (
    <EditorialSection
      id="human-ai"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      heading={heading}
      atmosphere="raised"
    >
      <div className={styles.paths}>
        {content.paths.map((path) => (
          <article key={path.id} className={styles.path} aria-labelledby={`oversight-${path.id}`}>
            <h3 id={`oversight-${path.id}`} className={styles.label}>
              {path.label}
            </h3>
            <ol className={styles.sequence}>
              {path.steps.map((step, index) => (
                <li key={step} className={styles.step}>
                  {index > 0 ? <StepJoin /> : null}
                  <div className={styles.stepBody}>
                    <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={styles.stepText}>{step}</span>
                  </div>
                </li>
              ))}
            </ol>
            <p className={styles.note}>{path.note}</p>
          </article>
        ))}
      </div>
    </EditorialSection>
  );
}

function StepJoin() {
  return (
    <span className={styles.join} aria-hidden="true">
      <svg className={styles.joinDown} viewBox="0 0 16 16" width="16" height="16">
        <path
          d="M8 2v12M4 10l4 4 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <IconArrow className={styles.joinAcross} />
    </span>
  );
}
