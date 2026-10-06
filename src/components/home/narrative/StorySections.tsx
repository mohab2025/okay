import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { IconArrow } from "@/components/icons/Icons";
import { narrativeContent } from "@/content/narrative";
import { StoryHeading } from "./StoryHeading";
import s from "./narrative.module.css";

export function StoryNavigation({locale}:{locale:Locale}) {
 const ids=["the-idea","journey","in-action","growth","partnership"];
 return <nav className={s.chapters} aria-label={locale==="ar"?"فصول الرحلة":"Story chapters"}>{narrativeContent[locale].chapters.map((name,i)=><a href={"#"+ids[i]} key={name}><span>{String(i+1).padStart(2,"0")}</span>{name}<IconArrow/></a>)}</nav>;
}
export function IdeaProblem({locale}:{locale:Locale}) {
 const t=narrativeContent[locale].problem;
 return <section id="the-idea" className={s.section} aria-labelledby="problem-title"><div className={s.problem}><StoryHeading id="problem-title" label={t.label} title={t.title}/><div className={s.transformation}>{t.before.map((label,i)=><div key={label}><span>{label}</span><IconArrow/><strong>{t.after[i]}</strong></div>)}<p>{t.bridge}</p></div></div></section>;
}
export function GrowthSection({locale}:{locale:Locale}) {
 const t=narrativeContent[locale].growth;
 return <section id="growth" className={s.growthBand} aria-labelledby="growth-title"><div className={s.section}><StoryHeading id="growth-title" label={t.label} title={t.title} body={t.intro}/><ol className={s.growthLoop}>{t.steps.map((step,i)=><li key={step}><span className={s.growthNumber}>{String(i+1).padStart(2,"0")}</span><strong>{step}</strong><IconArrow/></li>)}</ol><p className={s.note}>{t.note}</p></div></section>;
}
export function TrustSection({locale}:{locale:Locale}) {
 const t=narrativeContent[locale].trust;
 return <section className={s.section} aria-labelledby="trust-title"><div className={s.trustGrid}><div><StoryHeading id="trust-title" label={t.label} title={t.title} body={t.intro}/><Link className={s.textLink} href="/technology">{t.link}<IconArrow/></Link></div><div className={s.controlPanel}><div className={s.windowBar}><span className={s.dot}/><span dir="ltr">AGENT / CONTROL CENTER</span></div><ol className={s.approval}>{t.approval.map((label,i)=><li key={label}><span className={s.check}>{i===1?"◎":"✓"}</span><span>{label}</span>{i<2?<IconArrow/>:null}</li>)}</ol><ul className={s.controls}>{t.controls.map(label=><li key={label}><span>✓</span>{label}</li>)}</ul></div></div></section>;
}
export function PartnershipSection({locale}:{locale:Locale}) {
 const t=narrativeContent[locale].partnership;
 return <section id="partnership" className={s.section} aria-labelledby="partnership-title"><StoryHeading id="partnership-title" label={t.label} title={t.title} body={t.intro}/><div className={s.plans}>{t.plans.map((plan,i)=><article key={plan.name} className={s.plan} data-featured={i===1}><div className={s.planTop}><p>{plan.name}</p><span>{plan.tag}</span></div><h3>{plan.title}</h3><ul>{plan.items.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul><Link className={s.action} href={{pathname:"/get-started",query:{path:i===1?"partnership":"delivery"}}}>{plan.cta}<IconArrow/></Link></article>)}</div><p className={s.note}>{t.note}</p></section>;
}
export function StoryFAQ({locale}:{locale:Locale}) {
 const t=narrativeContent[locale].faq;
 return <section className={s.section} aria-labelledby="faq-title"><div className={s.faq}><h2 id="faq-title">{t.title}</h2><div>{t.items.map(item=><details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div></div></section>;
}

