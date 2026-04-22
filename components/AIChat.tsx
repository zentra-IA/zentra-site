"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Como posso ajudar seu negócio hoje?",
    },
  ]);

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
        }),
      });

      const data = await response.json();

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: data.reply || "Não consegui responder agora.",
        },
      ]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: "Erro ao conectar com a IA.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[320px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
      <div className="border-b border-slate-800 px-4 py-3 text-sm font-semibold text-white">
        Zentra IA
      </div>

      <div className="h-64 space-y-3 overflow-y-auto px-4 py-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user"
                ? "ml-auto max-w-[85%] rounded-2xl bg-blue-600 px-3 py-2 text-sm text-white"
                : "max-w-[85%] rounded-2xl bg-slate-800 px-3 py-2 text-sm text-slate-200"
            }
          >
            {message.content}
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 p-3">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          className="mb-3 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white outline-none"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}