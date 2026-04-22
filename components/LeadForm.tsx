"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    company: "",
    problem: "",
  });

  const [loading, setLoading] = useState(false);

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
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data?.error || "Erro ao salvar lead.");
        return;
      }

      const message = `Olá, vim pelo site da Zentra.%0A%0A*Nome:* ${encodeURIComponent(
        name
      )}%0A*WhatsApp:* ${encodeURIComponent(
        whatsapp
      )}%0A*Empresa:* ${encodeURIComponent(
        company
      )}%0A*Principal problema:* ${encodeURIComponent(problem)}`;

      const url = `https://wa.me/5511996289534?text=${message}`;

      window.open(url, "_blank");

      setForm({
        name: "",
        whatsapp: "",
        company: "",
        problem: "",
      });

      alert("Lead salvo com sucesso.");
    } catch (error) {
      console.error("ERRO NO FORMULÁRIO:", error);
      alert("Erro ao enviar lead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
              Diagnóstico inicial
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              Fale com a Zentra com mais contexto e mais clareza
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Preencha as informações abaixo para acelerar seu atendimento.
              Assim conseguimos entender melhor sua operação e indicar a solução
              mais adequada para o seu negócio.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="font-semibold text-zinc-900">
                  Atendimento mais rápido
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Você já chega com informações que ajudam a identificar seu
                  cenário.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="font-semibold text-zinc-900">
                  Diagnóstico mais assertivo
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  A conversa fica mais objetiva e focada no que realmente precisa
                  ser resolvido.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <h3 className="font-semibold text-zinc-900">
                  Próximo passo mais claro
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Entendemos se o melhor caminho é atendimento, automação,
                  organização da operação ou uma solução personalizada.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-xl md:p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                Solicitar diagnóstico
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Preencha os dados e continue no WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                  placeholder="Ex.: atendimento lento, perda de leads, processos manuais, falta de organização..."
                  rows={5}
                  className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none transition focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Enviando..." : "Enviar e continuar no WhatsApp"}
              </button>

              <p className="text-center text-xs leading-6 text-zinc-500">
                Ao continuar, seus dados serão salvos e você será redirecionado
                para o WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}