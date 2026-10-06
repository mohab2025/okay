import { agentsContent, type AgentLabels } from "@/content/agents";
import type { Locale } from "@/i18n/routing";
import { Section } from "@/components/primitives/Section/Section";
import { AgentCard } from "./AgentCard";
import styles from "./agents.module.css";

type AgentsSectionProps = {
  locale: Locale;
  heading?: "h1" | "h2";
};

export function AgentsSection({ locale, heading = "h2" }: AgentsSectionProps) {
  const content = agentsContent[locale];
  const labels: AgentLabels = {
    problem: content.problem,
    understands: content.understands,
    actions: content.actions,
    systems: content.systems,
    workflow: content.workflow,
  };

  return (
    <Section
      id="agents"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      heading={heading}
      width="wide"
      divider={heading === "h2"}
      atmosphere="raised"
    >
      <ul className={styles.grid}>
        {content.agents.map((agent) => (
          <li key={agent.id} className={styles.item}>
            <AgentCard agent={agent} labels={labels} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
