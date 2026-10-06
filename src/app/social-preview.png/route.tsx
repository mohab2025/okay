import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export function GET() {
 return new ImageResponse(<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",height:"100%",padding:"64px 80px",background:"#090d17",color:"#edf2ff",fontFamily:"sans-serif"}}>
  <div style={{display:"flex",justifyContent:"space-between",fontSize:26,color:"#b4c6eb"}}><span>Okay</span><span>okai.sa</span></div>
  <div style={{display:"flex",flexDirection:"column",gap:12}}><span style={{fontSize:72,letterSpacing:-3}}>Start with an idea.</span><span style={{fontSize:72,letterSpacing:-3,color:"#9baaff"}}>Build what comes next.</span></div>
  <div style={{display:"flex",fontSize:24,color:"#9fafd0",borderTop:"1px solid #303e5b",paddingTop:26}}>DISCOVER / BUILD / CONNECT / LAUNCH / GROW</div>
 </div>,{width:1200,height:630});
}
