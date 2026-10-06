import type { Locale } from "@/i18n/routing";
import { HeroExperience, ProductionDemo } from "./LandingVisuals";
import { AgentOverview, ClosingCTA } from "./LandingSections";
import { Journey } from "../narrative/Journey";
import { ConnectedWorkflow } from "../narrative/ConnectedWorkflow";
import { IndustryPreview } from "../narrative/IndustryPreview";
import {
  StoryNavigation,
  IdeaProblem,
  GrowthSection,
  TrustSection,
  PartnershipSection,
  StoryFAQ,
} from "../narrative/StorySections";
import s from "./landing.module.css";

/** The story order lives here; only interactive demonstrations hydrate on the client. */
export function Landing({ locale }: { locale: Locale }) {
  return (
    <div className={s.landing}>
      <HeroExperience locale={locale}/>
      <StoryNavigation locale={locale}/>
      <IdeaProblem locale={locale}/>
      <Journey locale={locale}/>
      <AgentOverview locale={locale}/>
      <ProductionDemo locale={locale}/>
      <ConnectedWorkflow locale={locale}/>
      <GrowthSection locale={locale}/>
      <TrustSection locale={locale}/>
      <IndustryPreview locale={locale}/>
      <PartnershipSection locale={locale}/>
      <StoryFAQ locale={locale}/>
      <ClosingCTA locale={locale}/>
    </div>
  );
}
