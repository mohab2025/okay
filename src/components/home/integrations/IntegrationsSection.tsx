import { integrationsContent } from "@/content/integrations";
import type { Locale } from "@/i18n/routing";
import { Section } from "@/components/primitives/Section/Section";
import { EcosystemMap } from "./EcosystemMap";

type IntegrationsSectionProps = {
  locale: Locale;
  heading?: "h1" | "h2";
};

export function IntegrationsSection({ locale, heading = "h2" }: IntegrationsSectionProps) {
  const content = integrationsContent[locale];

  return (
    <Section
      id="integrations"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      heading={heading}
      width="wide"
      divider={heading === "h2"}
      atmosphere="ink"
    >
      <EcosystemMap content={content} />
    </Section>
  );
}
