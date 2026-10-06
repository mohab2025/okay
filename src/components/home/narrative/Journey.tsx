"use client";
import { useState } from "react";
import type { Locale } from "@/i18n/routing";
import { narrativeContent } from "@/content/narrative";
import { IconArrow } from "@/components/icons/Icons";
import { StoryHeading } from "./StoryHeading";
import s from "./narrative.module.css";

export function Journey({ locale }: { locale: Locale }) {
 const t = narrativeContent[locale].journey;
 const [active, setActive] = useState(0);
 const step = t.steps[active];
 return <section id="journey" className={s.section} aria-labelledby="journey-title">
  <StoryHeading id="journey-title" label={t.label} title={t.title} body={t.intro}/>
  <div className={s.journey}>
   <ol className={s.steps} aria-label={t.demo}>{t.steps.map((item,i)=><li key={item.title}>
    <button type="button" aria-pressed={active===i} aria-controls="journey-preview" onClick={()=>setActive(i)}><span className={s.number}>{String(i+1).padStart(2,"0")}</span><span><strong>{item.title}</strong><small>{item.subtitle}</small></span><IconArrow/></button>
   </li>)}</ol>
   <div id="journey-preview" className={s.workspace} aria-live="polite">
    <div className={s.windowBar}><span className={s.dot}/><span>{t.demo}</span><b dir="ltr">{String(active+1).padStart(2,"0")} / 06</b></div>
    <div className={s.stageContent} key={active}>
     <p className={s.miniLabel}>{step.subtitle}</p>
     {active===0 ? <div className={s.conversation}>{step.items.map((text,i)=><div key={text} className={i===1?s.reply:s.message}><span className={s.avatar}>{i===1?"AI":"↳"}</span><p>{text}</p></div>)}</div>
      : active===2 ? <div className={s.prototype}><div className={s.mockNav}><span className={s.miniLogo}/><i/><i/><i/></div><div className={s.mockHero}><div/><div/></div><div className={s.mockCards}>{step.items.map((text,i)=><div key={text}><span>{String(i+1).padStart(2,"0")}</span><p>{text}</p><i/></div>)}</div><div className={s.mockButton}>{step.output}<IconArrow/></div></div>
      : active===3 ? <div className={s.agentSystem}><div className={s.engine}><span>✧</span>Okay Agent</div><div className={s.connectors}>{step.items.map(text=><div key={text}><span className={s.dot}/>{text}</div>)}</div></div>
      : active===5 ? <div className={s.growthPreview}><div className={s.orbit} aria-hidden="true"><span>↗</span><i/><i/></div><ul>{step.items.map((text,i)=><li key={text}><span className={s.number}>{i+1}</span>{text}</li>)}</ul></div>
      : <div className={s.checklist}>{step.items.map((text,i)=><div key={text}><span className={s.check}>{active===4?"✓":String(i+1).padStart(2,"0")}</span><p>{text}</p><span className={s.line}/></div>)}</div>}
    </div>
    <div className={s.deliverable}><div><small>{t.output}</small><strong>{step.output}</strong></div><button type="button" onClick={()=>setActive((active+1)%t.steps.length)} aria-label={t.next}><IconArrow/></button></div>
   </div>
  </div>
 </section>;
}

