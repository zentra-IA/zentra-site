import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const txt = (v: unknown, max: number) => typeof v === "string" ? v.trim().slice(0,max) : "";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (txt(body?.website,200)) return NextResponse.json({success:true}); // honeypot
    const name=txt(body?.name,100), whatsapp=txt(body?.whatsapp,24), company=txt(body?.company,120),problem=txt(body?.problem,2000);
    const notes=txt(body?.notes,1000),source=txt(body?.source,80)||null,destination=txt(body?.destination,80)||null;
    const digits=whatsapp.replace(/\D/g,"");
    if(!name||!company||problem.length<15||digits.length<10||digits.length>13){return NextResponse.json({error:"Preencha os campos obrigatórios e informe um telefone válido."},{status:400});}
    await prisma.lead.create({data:{name,whatsapp,company,problem,notes,source,destination,meetingDate:null}});
    return NextResponse.json({success:true},{status:201});
  } catch(e){console.error("Falha ao registrar lead:",e);return NextResponse.json({error:"Não foi possível registrar sua solicitação."},{status:500});}
}
