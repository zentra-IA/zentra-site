import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany();

    return NextResponse.json({ leads });
  } catch (error: any) {
    console.error("ERRO REAL:", error);

    return NextResponse.json({
      message: error?.message,
      code: error?.code,
      full: error
    });
  }
}