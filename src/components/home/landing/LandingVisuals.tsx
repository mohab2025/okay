"use client";
import { useState, useEffect } from "react";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { IconArrow } from "@/components/icons/Icons";
import { AgentGlyph } from "@/components/home/agents/AgentGlyph";
import type { AgentId } from "@/content/agents";
import { landingContent } from "@/content/landing";
import s from "./landing.module.css";
const ids: AgentId[] = ["software","research","data","operations"];
const code = ["async function executeWorkflow(request) {","  const context = await understand(request);","  const plan = await createPlan(context);","  const result = await execute(plan);","  return await verify(result);","}"];
export function HeroExperience({locale}:{locale:Locale}) { const t=landingContent[locale]; const [stage,setStage]=useState(0);return <section className={s.hero} aria-labelledby="landing-title">
   <div className={s.copy}><p className={s.eyebrow}>{t.eyebrow}</p><h1 id="landing-title">{t.title}<br/><span>{t.accent}</span></h1><p className={s.intro}>{t.intro}</p><div className={s.actions}><Link className={s.primary} href="/get-started">{t.start}<IconArrow/></Link><a className={s.secondary} href="#journey">{t.demo}<IconArrow/></a></div></div>
   <div className={s.visual}>
    <div className={s.sculpture} aria-hidden="true"><div className={s.core}/>{[0,1,2,3,4,5].map(i=><i key={i} style={{rotate:`${i*29-55}deg`}}/>)}</div>
    <div className={s.stageButtons} role="group" aria-label={t.demo}>{t.stages.map((item,i)=><button key={item[0]} type="button" aria-pressed={stage===i} onClick={()=>setStage(i)} className={s.stage}><span className={s.stageIcon}><AgentGlyph id={ids[i]}/></span><span><strong>{item[0]}</strong><small>{item[1]}</small></span></button>)}</div>
    <div className={s.receipt}><span className={s.eyebrow}>{t.example}</span><p>{t.request}</p><div aria-live="polite"><span className={s.signal}/>{t.stages[stage][2]}</div></div>
   </div>
  </section>; }
export function ProductionDemo({locale}:{locale:Locale}) {const t=landingContent[locale];const [run,setRun]=useState(-1);const [busy,setBusy]=useState(false);useEffect(()=>{if(!busy)return;const timer=setTimeout(()=>{if(run>=3)setBusy(false);else setRun(run+1);},700);return ()=>clearTimeout(timer);},[busy,run]);return <section className={s.production} aria-labelledby="production-title">
   <div className={s.console}><div className={s.consoleTop}><span className={s.signal}/><span>{t.console}</span><span dir="ltr">agent/workflow</span></div><div className={s.consoleBody}><ol>{t.stages.map((item,i)=><li data-active={run===i} key={item[0]}><span className={s.signal}/>{item[0]}</li>)}</ol><pre dir="ltr"><code>{code.map((line,i)=><span key={line} data-active={run===Math.min(i,3)}>{line}{"\n"}</span>)}</code></pre></div><div className={s.consoleBottom}><span aria-live="polite">{run<0?t.ready:busy?t.progress[run]:t.done}</span><button type="button" disabled={busy} onClick={()=>{setRun(0);setBusy(true);}}>{run<0?t.run:t.reset}</button></div></div>
   <div className={s.productionCopy}><p className={s.eyebrow}>{t.scale}</p><h2 id="production-title">{t.scaleTitle}</h2><p>{t.scaleBody}</p><Link className={s.textLink} href="/technology">{t.engineering}<IconArrow/></Link><div className={s.partners}><span>GitHub</span><span>Slack</span><span>Notion</span><span>AWS</span></div></div>
   <div className={s.pillars}>{t.pillars.map(item=><div key={item[0]}><strong>{item[0]}</strong><span>{item[1]}</span></div>)}</div>
  </section>; }
