"use client";
import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/routing";
import { narrativeContent } from "@/content/narrative";
import { IconArrow } from "@/components/icons/Icons";
import s from "./discovery.module.css";

export function IdeaDiscovery({locale,initialPath="delivery"}:{locale:Locale;initialPath?:string}) {
 const t=narrativeContent[locale].discovery;
 const [idea,setIdea]=useState("");
 const [audience,setAudience]=useState("");
 const [priority,setPriority]=useState(0);
 const [path,setPath]=useState(initialPath==="partnership"?1:0);
 const [complete,setComplete]=useState(false);
 const [error,setError]=useState("");
 const values=[idea.trim(),audience.trim(),t.priorities[priority],t.paths[path]];
 function submit(event:FormEvent) {
  event.preventDefault();
  if(!idea.trim()||!audience.trim()){setError(t.empty);return;}
  setError("");setComplete(true);
 }
 function download() {
  const text=t.output+"\n\n"+values.map((value,i)=>t.briefLabels[i]+": "+value).join("\n\n")+"\n\n"+t.next;
  const url=URL.createObjectURL(new Blob(["\uFEFF"+text],{type:"text/plain;charset=utf-8"}));
  const link=document.createElement("a");link.href=url;link.download="okai-project-brief-"+locale+".txt";link.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
 }
 return <section className={s.section} aria-labelledby="discovery-title"><header><p className={s.eyebrow}>{t.label}</p><h1 id="discovery-title">{t.title}</h1><p>{t.intro}</p></header>
 <div className={s.layout}><form className={s.form} onSubmit={submit}>
  <label htmlFor="idea">{t.idea}</label><textarea id="idea" required maxLength={1200} rows={4} placeholder={t.placeholder} value={idea} onChange={e=>{setIdea(e.target.value);setComplete(false);}}/>
  <label htmlFor="audience">{t.audience}</label><input id="audience" required maxLength={180} placeholder={t.audiencePlaceholder} value={audience} onChange={e=>{setAudience(e.target.value);setComplete(false);}}/>
  <label htmlFor="priority">{t.priority}</label><select id="priority" value={priority} onChange={e=>{setPriority(Number(e.target.value));setComplete(false);}}>{t.priorities.map((name,i)=><option key={name} value={i}>{name}</option>)}</select>
  <fieldset><legend>{t.path}</legend><div className={s.options}>{t.paths.map((name,i)=><label key={name}><input type="radio" name="path" value={i} checked={path===i} onChange={()=>{setPath(i);setComplete(false);}}/>{name}</label>)}</div></fieldset>
  {error?<p role="alert">{error}</p>:null}<button className={s.button} type="submit">{t.submit}<IconArrow/></button><p className={s.note}>{t.note}</p>
 </form><div className={s.preview} role="status" aria-live="polite" aria-atomic="true"><p className={s.eyebrow} dir="ltr">OKAY / DISCOVERY BRIEF</p><h2>{t.output}</h2>{complete?<><dl>{values.map((value,i)=><div key={i}><dt>{t.briefLabels[i]}</dt><dd>{value}</dd></div>)}</dl><p className={s.next}>{t.next}</p><button className={s.button} onClick={download} type="button">{t.download}<IconArrow/></button></>:<><div className={s.placeholder} aria-hidden="true"><i/><i/><i/><i/></div><p className={s.note}>{t.empty}</p></>}</div></div></section>;
}
