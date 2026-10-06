import { industriesContent } from "@/content/industries";
import type { Locale } from "@/i18n/routing";
import { Section } from "@/components/primitives/Section/Section";
import { IndustryCard } from "./IndustryCard";
import styles from "./industries.module.css";

type IndustriesSectionProps = {
  locale: Locale;
  heading?: "h1" | "h2";
};

export function IndustriesSection({ locale, heading = "h2" }: IndustriesSectionProps) {
  const content = industriesContent[locale];

  return (
    <Section
      id="industries"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      heading={heading}
      width="wide"
      divider={heading === "h2"}
      atmosphere="raised"
    >
      <ul className={styles.grid}>
        {content.industries.map((industry) => (
          <li key={industry.id} className={styles.item}>
            <IndustryCard
              industry={industry}
              requestLabel={content.request}
              workflowLabel={content.workflow}
              resultLabel={content.result}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
