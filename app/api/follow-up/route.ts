import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Follow-up ainda não configurado.",
    leads: [],
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Follow-up ainda não configurado.",
  });
}