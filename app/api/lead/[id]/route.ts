import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const stage = body?.stage ? String(body.stage) : undefined;
    const notes =
      body?.notes !== undefined ? String(body.notes ?? "") : undefined;

    const data: { stage?: string; notes?: string } = {};

    if (stage) data.stage = stage;
    if (notes !== undefined) data.notes = notes;

    const lead = await prisma.lead.update({
      where: { id: params.id },
      data,
    });

    return NextResponse.json({
      success: true,
      lead,
    });
  } catch (error) {
    console.error("ERRO AO ATUALIZAR LEAD:", error);

    return NextResponse.json(
      { error: "Erro ao atualizar lead." },
      { status: 500 }
    );
  }
}