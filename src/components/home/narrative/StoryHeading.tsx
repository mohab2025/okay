import s from "./narrative.module.css";
export function StoryHeading({id,label,title,body}:{id:string;label:string;title:string;body?:string}) {
 return <header className={s.heading}><p className={s.kicker}>{label}</p><h2 id={id}>{title}</h2>{body?<p>{body}</p>:null}</header>;
}

