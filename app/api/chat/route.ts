import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { reply: "ERRO: GEMINI_API_KEY não encontrada" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const message = body?.message || "";

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
Você é a assistente da Zentra.

A Zentra ajuda empresas a:
- automatizar atendimento
- organizar processos
- captar leads
- integrar operação
- aumentar vendas

Seu objetivo:
- entender o problema do cliente
- explicar como a Zentra ajuda
- responder como consultor
- sugerir soluções práticas

Pergunta do usuário:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const reply = response.text || "Não consegui responder agora.";

    return NextResponse.json({ reply });

  } catch (error: any) {
    console.error("ERRO GEMINI:", error);

    return NextResponse.json(
      {
        reply: `Erro Gemini: ${error?.message || "erro desconhecido"}`,
      },
      { status: 500 }
    );
  }
}