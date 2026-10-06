import type { Locale } from "@/i18n/routing";
import { industriesContent } from "@/content/industries";
import { Link } from "@/i18n/navigation";
import { IconArrow } from "@/components/icons/Icons";
import { StoryHeading } from "./StoryHeading";
import s from "./narrative.module.css";

export function IndustryPreview({ locale }: { locale: Locale }) {
 const content = industriesContent[locale];
 const industries = content.industries.filter(item => ["financial","healthcare","realestate"].includes(item.id));
 const ar = locale === "ar";
 return (
  <section className={s.section} aria-labelledby="industry-preview-title">
   <StoryHeading id="industry-preview-title" label={content.eyebrow}
    title={ar ? "القصة تختلف. والمنهج واحد." : "Different businesses. One clear approach."}
    body={ar ? "أمثلة لمسارات نصممها حول طبيعة عملك." : "Representative workflows shaped around the way you work."}/>
   <div className={s.industryRows}>
    {industries.map(industry => (
     <Link key={industry.id} href={"/industries#industry-"+industry.id} className={s.industryRow}>
      <h3>{industry.name}</h3>
      <ol>{industry.workflow.map((step,i) => <li key={step}><span>{step}</span>{i<industry.workflow.length-1?<IconArrow/>:null}</li>)}</ol>
      <IconArrow/>
     </Link>
    ))}
   </div>
   <Link href="/industries" className={s.textLink}>{ar?"استكشف كل القطاعات":"Explore all industries"}<IconArrow/></Link>
  </section>
 );
}
