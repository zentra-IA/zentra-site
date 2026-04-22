"use client";

import { useState } from "react";

type LeadCaptureButtonProps = {
  label: string;
  destination: "whatsapp" | "calendly";
  source: "navbar" | "hero" | "cta";
  className?: string;
};

export default function LeadCaptureButton({
  label,
  destination,
  source,
  className = "",
}: LeadCaptureButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    company: "",
    problem: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { name, whatsapp, company, problem } = form;

    if (!name || !whatsapp || !company || !problem) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source,
          destination,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data?.error || "Erro ao salvar lead.");
        return;
      }

      const textoWhatsapp =
        `Olá, vim pelo site da Zentra.\n\n` +
        `Nome: ${name}\n` +
        `WhatsApp: ${whatsapp}\n` +
        `Empresa: ${company}\n` +
        `Principal problema: ${problem}`;

      if (destination === "whatsapp") {
        const url = `https://wa.me/5511996289534?text=${encodeURIComponent(
          textoWhatsapp
        )}`;
        window.open(url, "_blank");
      }

      if (destination === "calendly") {
        window.open("https://calendly.com/gregorysanches48/30min", "_blank");
      }

      setForm({
        name: "",
        whatsapp: "",
        company: "",
        problem: "",
      });

      setOpen(false);
    } catch (error) {
      console.error("ERRO AO ENVIAR LEAD:", error);
      alert("Erro ao enviar lead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                  Antes de continuar
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Preencha seus dados para seguirmos com o atendimento.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-zinc-500 hover:bg-zinc-100"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-800">
                  Seu nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-800">
                  Seu WhatsApp
                </label>
                <input
                  type="text"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-800">
                  Nome da empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Digite o nome da empresa"
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-800">
                  Principal problema hoje
                </label>
                <textarea
                  name="problem"
                  value={form.problem}
                  onChange={handleChange}
                  placeholder="Ex.: atendimento lento, perda de leads, processos manuais..."
                  rows={4}
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Enviando..." : "Continuar"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}