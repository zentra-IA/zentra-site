import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated } from "@/lib/adminAuth";
export const runtime="nodejs";
export const dynamic="force-dynamic";
export async function GET(req:Request){
 if(!isAdminAuthenticated(req))return NextResponse.json({error:"Acesso não autorizado."},{status:401});
 try {
  const leads=await prisma.lead.findMany({orderBy:{createdAt:"desc"}});
  return NextResponse.json({leads},{headers:{"Cache-Control":"no-store"}});
 }catch(e){console.error("Erro ao listar leads:",e);return NextResponse.json({error:"Falha ao carregar leads."},{status:500});}
}
