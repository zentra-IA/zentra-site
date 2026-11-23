import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "zentra_crm_session";
const MAX_AGE = 12 * 60 * 60;

function sign(value: string): string {
  const secret=process.env.CRM_SESSION_SECRET;
  if (!secret || secret.length < 32) return "";
  return createHmac("sha256",secret).update(value).digest("hex");
}
function eq(a:string,b:string){
  const ab=Buffer.from(a), bb=Buffer.from(b);
  return ab.length===bb.length && timingSafeEqual(ab,bb);
}
export function isValidAdminPassword(value:unknown):boolean {
  const pw=process.env.CRM_ADMIN_PASSWORD;
  return typeof value==="string" && typeof pw==="string" && pw.length>=16 && eq(pw,value);
}
export function sessionValue():string {
  const deadline=String(Math.floor(Date.now()/1000)+MAX_AGE);
  return `${deadline}.${sign(deadline)}`;
}
export function isAdminAuthenticated(req:Request):boolean {
  const cookie=req.headers.get("cookie")||"";
  const encoded=cookie.split(";").map(x=>x.trim()).find(x=>x.startsWith(`${COOKIE_NAME}=`));
  if(!encoded) return false;
  let value="";
  try{value=decodeURIComponent(encoded.slice(COOKIE_NAME.length+1));}catch{return false;}
  const m=/^(\d{10})\.([0-9a-f]{64})$/.exec(value);
  if(!m)return false;
  const exp=Number(m[1]);
  if(!Number.isSafeInteger(exp)||exp<Date.now()/1000||exp>Date.now()/1000+MAX_AGE+60)return false;
  const sig=sign(m[1]);return !!sig && eq(sig,m[2]);
}
export const adminCookieName=COOKIE_NAME;
export const adminCookieMaxAge=MAX_AGE;
