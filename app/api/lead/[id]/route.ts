import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated } from "@/lib/adminAuth";
export const runtime="nodejs";
export const dynamic="force-dynamic";

const VALID_STAGES=new Set(["NEW","MEETING_SCHEDULED","PROPOSAL_SENT","WON"]);
export async function PATCH(req:Request,context:{params:Promise<{id:string}>}){
 if(!isAdminAuthenticated(req))return NextResponse.json({error:"Acesso não autorizado."},{status:401});
 try {
  const {id}=await context.params; const body=await req.json();
  const data:{stage?:string;notes?:string;meetingDate?:Date|null;name?:string;whatsapp?:string;company?:string;problem?:string}={};
  if(body.stage!==undefined){if(typeof body.stage!=="string"||!VALID_STAGES.has(body.stage))return NextResponse.json({error:"Etapa inválida."},{status:400});data.stage=body.stage;}
  for(const key of ["notes","name","whatsapp","company","problem"] as const){if(body[key]!==undefined){data[key]=String(body[key]??"").slice(0,key==="problem"?2000:1000);}}
  if(body.meetingDate!==undefined){const when=body.meetingDate?new Date(body.meetingDate):null;if(when && Number.isNaN(when.getTime()))return NextResponse.json({error:"Data inválida."},{status:400});data.meetingDate=when;}
  const lead=await prisma.lead.update({where:{id},data});return NextResponse.json({success:true,lead});
 }catch(e){console.error("Erro ao atualizar lead:",e);return NextResponse.json({error:"Falha ao atualizar lead."},{status:500});}
}
export async function DELETE(req:Request,context:{params:Promise<{id:string}>}){
 if(!isAdminAuthenticated(req))return NextResponse.json({error:"Acesso não autorizado."},{status:401});
 try{const {id}=await context.params;await prisma.lead.delete({where:{id}});return NextResponse.json({success:true});}catch(e){console.error("Erro ao excluir lead:",e);return NextResponse.json({error:"Falha ao excluir lead."},{status:500});}
}
