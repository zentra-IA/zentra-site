import {allowRequest} from "@/lib/rateLimit";
import { NextResponse } from "next/server";
import { adminCookieMaxAge,adminCookieName,isValidAdminPassword,sessionValue } from "@/lib/adminAuth";
export const runtime="nodejs";
export async function POST(req:Request){
  if(!allowRequest(req,"admin-login",8,15*60*1000))return NextResponse.json({error:"Muitas tentativas. Tente novamente mais tarde."},{status:429});
  try {
    const body=await req.json();
    if(!isValidAdminPassword(body?.password))return NextResponse.json({error:"Senha inválida ou acesso não configurado."},{status:401});
    const res=NextResponse.json({success:true});
    res.cookies.set(adminCookieName,sessionValue(),{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict",path:"/",maxAge:adminCookieMaxAge});
    return res;
  }catch{return NextResponse.json({error:"Solicitação inválida."},{status:400});}
}
