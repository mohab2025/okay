"use client";
import { useState } from "react";
import type { Locale } from "@/i18n/routing";
import { narrativeContent } from "@/content/narrative";
import { IconArrow } from "@/components/icons/Icons";
import { StoryHeading } from "./StoryHeading";
import s from "./narrative.module.css";
export function ConnectedWorkflow({locale}:{locale:Locale}) {
 const t=narrativeContent[locale].workflow;
 const [selected,setSelected]=useState(0);
 const [stage,setStage]=useState(0);
 const scenario=t.cases[selected];
 return <section id="in-action" className={s.section} aria-labelledby="workflow-title">
  <StoryHeading id="workflow-title" label={t.label} title={t.title} body={t.intro}/>
  <div className={s.workflow}>
   <div className={s.workflowTop}><div className={s.segmented} role="group" aria-label={t.title}>{t.cases.map((item,i)=><button key={item.name} type="button" aria-pressed={selected===i} onClick={()=>{setSelected(i);setStage(0);}}>{item.name}</button>)}</div><span className={s.miniLabel}>{t.demo}</span></div>
   <div className={s.pipeline}>{t.stages.map((label,i)=><div key={label} className={s.pipeStep} data-active={i===stage} data-complete={i<stage}><span>{i<stage?"✓":String(i+1).padStart(2,"0")}</span><strong>{label}</strong>{i<3?<IconArrow/>:null}</div>)}</div>
   <div className={s.workflowBody}>
    <div className={s.request}><span className={s.miniLabel}>{t.stages[0]}</span><blockquote>{scenario.input}</blockquote><div className={s.systems}>{scenario.systems.map(name=><span key={name} dir="ltr">{name}</span>)}</div></div>
    <div className={s.result} aria-live="polite"><p className={s.miniLabel}><span className={s.dot}/>{t.stages[stage]}</p><div key={selected+"-"+stage} className={s.resultContent}>{stage===0?<p>{scenario.input}</p>:stage===1?<dl>{scenario.fields.map(field=>{const [key,...value]=field.split(":");return <div key={key}><dt>{key}</dt><dd>{value.join(":")}</dd></div>;})}</dl>:<><span className={s.resultIcon}>{stage===2?"◇":"✓"}</span><p>{stage===2?scenario.decision:scenario.action}</p></>}</div></div>
   </div>
   <div className={s.workflowBottom}><span className={s.miniLabel} dir="ltr">INPUT → CONTEXT → DECISION → ACTION</span><button className={s.action} type="button" onClick={()=>setStage((stage+1)%4)}>{stage===3?t.replay:stage===2&&selected===0?t.approval:t.next}<IconArrow/></button></div>
  </div>
 </section>;
}

