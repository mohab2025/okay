import { IconArrow } from "@/components/icons/Icons";
import { ButtonLink } from "@/components/primitives/Button/ButtonLink";
import type { Agent, AgentLabels } from "@/content/agents";
import { AgentGlyph } from "./AgentGlyph";
import styles from "./agents.module.css";

type AgentCardProps = {
  agent: Agent;
  labels: AgentLabels;
};

export function AgentCard({ agent, labels }: AgentCardProps) {
  return (
    <article className={styles.card} id={agent.id}>
      <header className={styles.head}>
        <span className={styles.mark}>
          <AgentGlyph id={agent.id} />
        </span>
        <div className={styles.identity}>
          <p className={styles.status} data-tone={agent.tone}>
            <span className={styles.dot} aria-hidden="true" />
            {agent.status}
          </p>
          <h3 className={styles.name}>{agent.name}</h3>
        </div>
      </header>

      <div className={styles.field}>
        <p className={styles.fieldLabel}>{labels.problem}</p>
        <p className={styles.problem}>{agent.problem}</p>
      </div>

      <div className={styles.preview}>
        <p className={styles.fieldLabel}>{labels.workflow}</p>
        <ol className={styles.flow}>
          {agent.workflow.map((step, index) => (
            <li key={step} className={styles.flowItem}>
              {index > 0 ? <IconArrow className={styles.stepArrow} /> : null}
              <span className={styles.step}>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.field}>
        <p className={styles.fieldLabel}>{labels.understands}</p>
        <p className={styles.copy}>{agent.understands}</p>
      </div>

      <div className={styles.field}>
        <p className={styles.fieldLabel}>{labels.actions}</p>
        <ol className={styles.log}>
          {agent.actions.map((action, index) => (
            <li key={action}>
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <span>{action}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className={styles.field}>
        <p className={styles.fieldLabel}>{labels.systems}</p>
        <ul className={styles.tags}>
          {agent.systems.map((system) => (
            <li key={system} className={styles.tag}>
              {system}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.cta}>
        <ButtonLink href={agent.href} variant="secondary">
          {agent.cta}
          <span className={styles.ctaArrow}>
            <IconArrow />
          </span>
        </ButtonLink>
      </div>
    </article>
  );
}
