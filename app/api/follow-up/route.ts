import { prisma } from "@/lib/prisma";
import { sendWhatsApp } from "@/lib/whatsapp";
import { NextResponse } from "next/server";

export async function POST() {
  const now = new Date();

  const leads = await prisma.lead.findMany({
    where: {
      nextFollowUpAt: { lte: now },
      hasReplied: false,
      demoScheduled: false,
    },
  });

  for (const lead of leads) {
    if (!lead.phone) continue;

    await sendWhatsApp(
      lead.phone,
      `Oi ${lead.name || ""}, passando pra te lembrar da demo 👇
https://calendly.com/SEU-LINK`
    );

    await prisma.lead.update({
      where: { id: lead.id },
      data: {
        followUpStep: lead.followUpStep + 1,
        nextFollowUpAt: null,
      },
    });
  }

  return NextResponse.json({ ok: true });
}