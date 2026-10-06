import { useId } from "react";
import { IconArrow } from "@/components/icons/Icons";
import { PageContainer } from "@/components/layout/PageContainer";
import { ButtonLink } from "@/components/primitives/Button/ButtonLink";
import { heroContent } from "@/content/hero";
import type { Locale } from "@/i18n/routing";
import { WorkflowVisual } from "./WorkflowVisual";
import styles from "./Hero.module.css";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const content = heroContent[locale];
  const titleId = useId();

  return (
    <section className={styles.hero} data-reveal="" data-atmosphere="light" aria-labelledby={titleId}>
      <PageContainer size="wide">
        <div className={styles.layout}>
          <div className={styles.copy} data-reveal-text="">
            <p className={styles.eyebrow}>{content.eyebrow}</p>
            <h1 id={titleId} className={styles.title}>
              <span className={styles.lineMuted}>{content.titleLine1}</span>
              <span>{content.titleLine2}</span>
            </h1>
            <p className={styles.support}>{content.support}</p>
            <div className={styles.actions}>
              <ButtonLink href="/get-started">
                {content.primary}
                <IconArrow />
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary">
                {content.secondary}
              </ButtonLink>
              <ButtonLink href="/company" variant="ghost" className={styles.engineer}>
                {content.engineer}
              </ButtonLink>
            </div>
          </div>
          <WorkflowVisual content={content} />
        </div>
      </PageContainer>
    </section>
  );
}
