import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { IconArrow } from "@/components/icons/Icons";
import { AgentGlyph } from "@/components/home/agents/AgentGlyph";
import type { AgentId } from "@/content/agents";
import { landingContent } from "@/content/landing";
import s from "./landing.module.css";
const ids: AgentId[] = ["software","research","data","operations"];
const tags = [["GitHub","CI","Tests"],["Sources","Docs","Search"],["SQL","Python","BI"],["CRM","Slack","APIs"]];

export function AgentOverview({locale}:{locale:Locale}) {
 const t=landingContent[locale];
 return <section className={s.agents} aria-labelledby="agents-overview"><header><p className={s.eyebrow}>{t.agents}</p><h2 id="agents-overview">{t.agentsTitle}</h2><p>{t.agentsBody}</p><Link className={s.textLink} href="/agents">{t.all}<IconArrow/></Link></header>{t.cards.map((card,i)=><Link className={s.agent} href={`/agents#${ids[i]}`} key={card[0]}><span className={s.glyph}><AgentGlyph id={ids[i]}/></span><h3>{card[0]}</h3><p>{card[1]}</p><div className={s.tags}>{tags[i].map(tag=><span key={tag} dir="ltr">{tag}</span>)}<IconArrow/></div></Link>)}</section>;
}

export function ClosingCTA({locale}:{locale:Locale}) {
 const t=landingContent[locale];
 return <section className={s.closing} aria-labelledby="closing-title"><p className={s.eyebrow}>{t.ctaLabel}</p><h2 id="closing-title">{t.ctaTitle}</h2><p>{t.ctaBody}</p><Link className={s.primary} href="/get-started">{t.cta}<IconArrow/></Link></section>;
}
