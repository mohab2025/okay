import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";

// Run against a built app and a dedicated Chrome --remote-debugging-port=9223 instance.
const base = process.env.AUDIT_URL || "http://localhost:3001";
const output = "artifacts/story-audit";
await mkdir(output, { recursive: true });
const targets = await fetch("http://localhost:9223/json/list").then(r=>r.json());
const target = targets.find(t=>t.type==="page");
assert(target, "A dedicated browser page is required");
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(resolve=>socket.addEventListener("open",resolve,{once:true}));
let id=0;
const pending=new Map();
const errors=[];
socket.addEventListener("message",({data})=>{
 const message=JSON.parse(data);
 if(message.id){const task=pending.get(message.id);pending.delete(message.id);if(message.error)task.reject(message.error);else task.resolve(message.result);}
 if(message.method==="Runtime.exceptionThrown")errors.push(message.params.exceptionDetails.text);
});
function send(method,params={}){return new Promise((resolve,reject)=>{const key=++id;pending.set(key,{resolve,reject});socket.send(JSON.stringify({id:key,method,params}));});}
async function evaluate(expression){const result=await send("Runtime.evaluate",{expression,returnByValue:true,awaitPromise:true});assert(!result.exceptionDetails,JSON.stringify(result.exceptionDetails));return result.result.value;}
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function navigate(path){await send("Page.navigate",{url:base+path});await delay(400);for(let i=0;i<40;i++){if(await evaluate("document.readyState==='complete' && !!document.querySelector('h1')"))break;await delay(100);}await evaluate("document.fonts.ready.then(()=>true)");await delay(250);}
async function capture(name,selector){if(selector){await evaluate("document.querySelector("+JSON.stringify(selector)+").scrollIntoView({block:'start',behavior:'instant'})");await delay(220);}const screenshot=await send("Page.captureScreenshot",{format:"png"});await writeFile(output+"/"+name+".png",Buffer.from(screenshot.data,"base64"));}
await send("Page.enable");
await send("Runtime.enable");
const results=[];
for(const locale of ["ar","en"]){
 await navigate("/"+locale);
 for(const width of [320,375,768,1024,1440]){
  await send("Emulation.setDeviceMetricsOverride",{width,height:1000,deviceScaleFactor:1,mobile:false});
  await delay(100);
  const metrics=await evaluate("({lang:document.documentElement.lang,dir:document.documentElement.dir,width:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length})");
  assert.equal(metrics.dir,locale==="ar"?"rtl":"ltr");assert.equal(metrics.h1,1);
  assert(metrics.scrollWidth<=metrics.width,"Overflow "+locale+" "+width);
  results.push({locale,width,...metrics});
  if(width===375||width===1440)await capture(locale+"-"+width);
 }
 assert.equal(await evaluate("document.querySelector('link[rel=canonical]').href"),"https://okai.sa/"+locale);
 assert.equal(await evaluate("JSON.parse(document.querySelector('script[type=\"application/ld+json\"]').textContent)['@graph'].length"),5);
 for(let step=0;step<6;step++){
  await evaluate("document.querySelectorAll('#journey ol button')["+step+"].click()");
  await delay(70);
  assert.equal(await evaluate("document.querySelectorAll('#journey ol button')["+step+"].getAttribute('aria-pressed')"),"true");
  assert((await evaluate("document.querySelector('#journey-preview').textContent")).length>80);
  if(locale==="ar"&&step===2)await capture("ar-journey","#journey");
 }
 for(let scenario=0;scenario<3;scenario++){
  await evaluate("document.querySelectorAll('#in-action [role=group] button')["+scenario+"].click()");
  for(let step=0;step<4;step++){assert.equal(await evaluate("document.querySelector('#in-action [data-active=true] strong').textContent"),locale==="ar"?["الطلب","الفهم","القرار","الإجراء"][step]:["Input","Understand","Decide","Act"][step]);await evaluate("document.querySelector('#in-action button[class*=action]').click()");await delay(40);}
 }
 if(locale==="ar"){await capture("ar-workflow","#in-action");await capture("ar-partnership","#partnership");}
 await send("Emulation.setEmulatedMedia",{features:[{name:"prefers-reduced-motion",value:"reduce"}]});
 assert.equal(await evaluate("document.getAnimations().filter(a=>a.playState==='running').length"),0);
 await send("Emulation.setEmulatedMedia",{features:[]});
 await navigate("/"+locale+"/get-started?path=partnership");
 assert(await evaluate("document.querySelector('input[name=path][value=\"1\"]').checked"));
 await evaluate("(()=>{const area=document.querySelector('#idea');const input=document.querySelector('#audience');Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,'value').set.call(area,'A booking platform');area.dispatchEvent(new Event('input',{bubbles:true}));Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(input,'Small service businesses');input.dispatchEvent(new Event('input',{bubbles:true}));})()");
 await delay(60);
 await evaluate("document.querySelector('form').requestSubmit()");
 await delay(100);
 assert.equal(await evaluate("document.querySelectorAll('[role=status] dd').length"),4);
 assert((await evaluate("document.querySelector('[role=status]').textContent")).includes("A booking platform"));
 await evaluate("(()=>{const original=HTMLAnchorElement.prototype.click;HTMLAnchorElement.prototype.click=function(){window.auditDownload=fetch(this.href).then(r=>r.text());};document.querySelector('[role=status] button').click();HTMLAnchorElement.prototype.click=original;})()");
 assert((await evaluate("window.auditDownload")).includes("A booking platform"),"Downloaded brief must contain submitted input");
 await send("Emulation.setDeviceMetricsOverride",{width:320,height:900,deviceScaleFactor:1,mobile:false});
 assert(await evaluate("document.documentElement.scrollWidth<=document.documentElement.clientWidth"));
 if(locale==="ar")await capture("ar-brief-mobile");
 await evaluate("document.querySelector('header button[aria-expanded]').click()");
 await delay(100);
 assert(await evaluate("document.getElementById('main').inert"),"Menu should isolate background content");
 await send("Input.dispatchKeyEvent",{type:"keyDown",key:"Escape",code:"Escape",windowsVirtualKeyCode:27});
 await delay(100);
 assert.equal(await evaluate("document.querySelector('header button[aria-expanded]').getAttribute('aria-expanded')"),"false");
 assert(await evaluate("document.activeElement===document.querySelector('header button[aria-expanded]')"),"Escape must return focus");
}
for(const locale of ["ar","en"]){
 for(const path of ["","/product","/solutions","/agents","/how-it-works","/technology","/industries","/company","/resources","/get-started"]){
  const response=await fetch(base+"/"+locale+path);assert.equal(response.status,200,locale+path);
  const html=await response.text();assert(html.includes('href="https://okai.sa/'+locale+path+'"'),"Canonical missing "+locale+path);
 }
}
assert((await fetch(base+"/sitemap.xml").then(r=>r.text())).includes("https://okai.sa/ar/company"));
assert((await fetch(base+"/robots.txt").then(r=>r.text())).includes("https://okai.sa/sitemap.xml"));
assert.equal((await fetch(base+"/social-preview.png")).headers.get("content-type"),"image/png");
assert.equal((await fetch(base+"/llms.txt")).status,200);
assert.equal(errors.length,0,errors.join("\n"));
await send("Emulation.clearDeviceMetricsOverride");
await writeFile(output+"/results.json",JSON.stringify({results,runtimeErrors:errors,checks:["journey: six stages","workflow: three scenarios, four states","reduced motion","localized brief form and partnership selection","20 page responses and canonicals","JSON-LD","sitemap","robots","social image","llms.txt"]},null,2));
console.log(JSON.stringify({passed:true,viewports:results.length,runtimeErrors:errors,output}));
socket.close();
