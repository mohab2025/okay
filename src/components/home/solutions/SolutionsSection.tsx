import { solutionsContent } from "@/content/solutions";
import type { Locale } from "@/i18n/routing";
import { Section } from "@/components/primitives/Section/Section";
import { SolutionCard } from "./SolutionCard";
import styles from "./solutions.module.css";

type SolutionsSectionProps = {
  locale: Locale;
  heading?: "h1" | "h2";
};

export function SolutionsSection({ locale, heading = "h2" }: SolutionsSectionProps) {
  const content = solutionsContent[locale];

  return (
    <Section
      id="solutions"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      heading={heading}
      width="wide"
      divider={heading === "h2"}
      atmosphere="ink"
    >
      <ul className={styles.grid}>
        {content.solutions.map((solution) => (
          <li key={solution.id} className={styles.item}>
            <SolutionCard
              solution={solution}
              problemLabel={content.problem}
              workflowLabel={content.workflow}
              outcomeLabel={content.outcome}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
