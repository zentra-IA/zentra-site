import LeadCaptureButton from "@/components/LeadCaptureButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-fuchsia-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <div>
          <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            🤖 IA e automação para empresas
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-950 md:text-6xl md:leading-tight">
            Sua empresa pode vender mais trabalhando menos no manual.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            A Zentra cria sistemas, robôs e inteligências artificiais para
            atender clientes, organizar processos e automatizar tarefas do seu negócio.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <LeadCaptureButton
              label="Agendar conversa"
              destination="calendly"
              source="hero"
              className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl transition hover:bg-blue-700"
            />

            <LeadCaptureButton
              label="Chamar no WhatsApp"
              destination="whatsapp"
              source="hero"
              className="rounded-xl border border-zinc-300 bg-white px-7 py-4 font-bold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
            />
          </div>

          <p className="mt-5 text-sm text-zinc-500">
            Diagnóstico rápido • Sem compromisso • Solução personalizada
          </p>
        </div>

        <div className="rounded-[2rem] bg-zinc-950 p-7 text-white shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Exemplo de transformação</p>
              <h2 className="text-2xl font-bold">Antes e depois</h2>
            </div>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
              Online
            </span>
          </div>

          <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-5">
            <h3 className="font-bold text-red-200">Antes</h3>
            <p className="mt-3 leading-7 text-zinc-300">
              ❌ Cliente esperando resposta<br />
              ❌ Pedido perdido no WhatsApp<br />
              ❌ Equipe fazendo tudo manual<br />
              ❌ Informações espalhadas
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-green-400/20 bg-green-500/10 p-5">
            <h3 className="font-bold text-green-200">Depois com Zentra</h3>
            <p className="mt-3 leading-7 text-zinc-300">
              ✅ IA responde automaticamente<br />
              ✅ Leads organizados<br />
              ✅ Sistema controla processos<br />
              ✅ Mais tempo para vender
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}