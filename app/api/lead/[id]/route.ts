import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const data: {
      stage?: string;
      notes?: string;
      meetingDate?: Date | null;
      name?: string;
      whatsapp?: string;
      company?: string;
      problem?: string;
    } = {};

    if (body?.stage !== undefined) data.stage = String(body.stage);
    if (body?.notes !== undefined) data.notes = String(body.notes ?? "");
    if (body?.name !== undefined) data.name = String(body.name);
    if (body?.whatsapp !== undefined) data.whatsapp = String(body.whatsapp);
    if (body?.company !== undefined) data.company = String(body.company);
    if (body?.problem !== undefined) data.problem = String(body.problem);

    if (body?.meetingDate !== undefined) {
      data.meetingDate = body.meetingDate
        ? new Date(body.meetingDate)
        : null;
    }

    const lead = await prisma.lead.update({
      where: { id },
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

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.lead.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("ERRO AO EXCLUIR LEAD:", error);

    return NextResponse.json(
      { error: "Erro ao excluir lead." },
      { status: 500 }
    );
  }
}