"use client";

import { useState } from "react";

type Msg = {
  role: "user" | "ai";
  text: string;
};

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      text: "👋 Olá! Sou a IA da Zentra. Como posso te ajudar?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: `🤖 ${data.reply || "Não consegui responder agora."}` },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "📲 Para te ajudar melhor, fale com nossa equipe no WhatsApp: 11 99628-9534",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          width: 64,
          height: 64,
          borderRadius: "50%",
          border: "none",
          background: "#00a884",
          color: "#fff",
          fontSize: 28,
          cursor: "pointer",
          boxShadow: "0 12px 35px rgba(0,0,0,.35)",
          zIndex: 9999,
        }}
      >
        💬
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        width: 360,
        height: 520,
        background: "#0b141a",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,.45)",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #1f2c34",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#202c33",
          padding: "14px 16px",
          color: "#fff",
          fontWeight: 700,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          💬 Zentra IA
          <div style={{ fontSize: 12, color: "#aebac1", fontWeight: 400 }}>
            Atendimento inteligente
          </div>
        </div>

        <button
          onClick={() => setMinimized(true)}
          style={{
            background: "transparent",
            border: "none",
            color: "#aebac1",
            fontSize: 22,
            cursor: "pointer",
          }}
          title="Minimizar"
        >
          −
        </button>
      </div>

      <div
        style={{
          flex: 1,
          padding: 14,
          overflowY: "auto",
          background: "#0b141a",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              maxWidth: "82%",
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              background: msg.role === "user" ? "#005c4b" : "#202c33",
              color: "#e9edef",
              padding: "10px 12px",
              borderRadius:
                msg.role === "user"
                  ? "12px 12px 0 12px"
                  : "12px 12px 12px 0",
              fontSize: 14,
              lineHeight: 1.45,
              whiteSpace: "pre-wrap",
            }}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div
            style={{
              alignSelf: "flex-start",
              background: "#202c33",
              color: "#aebac1",
              padding: "9px 12px",
              borderRadius: "12px 12px 12px 0",
              fontSize: 14,
            }}
          >
            ✍️ Digitando...
          </div>
        )}
      </div>

      <div
        style={{
          padding: 12,
          background: "#202c33",
          display: "flex",
          gap: 8,
        }}
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder="Digite uma mensagem"
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            borderRadius: 999,
            padding: "12px 14px",
            background: "#2a3942",
            color: "#fff",
            fontSize: 14,
          }}
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            border: "none",
            background: "#00a884",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          ➤
        </button>
      </div>
    </div>
  );
}