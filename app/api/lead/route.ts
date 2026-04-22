import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const whatsapp = String(body?.whatsapp || "").trim();
    const company = String(body?.company || "").trim();
    const problem = String(body?.problem || "").trim();
    const source = body?.source ? String(body.source) : null;
    const destination = body?.destination ? String(body.destination) : null;

    if (!name || !whatsapp || !company || !problem) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        whatsapp,
        company,
        problem,
        source,
        destination,
      },
    });

    return NextResponse.json({
      success: true,
      lead,
    });
  } catch (error) {
    console.error("ERRO AO SALVAR LEAD:", error);

    return NextResponse.json(
      { error: "Erro ao salvar lead." },
      { status: 500 }
    );
  }
}