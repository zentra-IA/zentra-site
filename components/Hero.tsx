import LeadCaptureButton from "@/components/LeadCaptureButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.12),transparent_35%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <div>
          <span className="mb-5 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            Automação com IA para empresas
          </span>

          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl md:leading-[1.05]">
            Controle total do seu negócio com automação inteligente
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 md:text-xl">
            Automatize atendimento, capture leads e organize processos em uma
            plataforma moderna para vender mais e operar melhor.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <LeadCaptureButton
  label="Agendar demonstração"
  destination="calendly"
  source="hero"
  className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
/>

            <a
              href="#solucoes"
              className="rounded-xl border border-zinc-300 bg-white px-6 py-3 text-center font-semibold text-zinc-900 transition hover:bg-zinc-50"
            >
              Ver soluções
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-600 to-fuchsia-600 opacity-20 blur-2xl" />

          <div className="relative rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-600 p-6 shadow-2xl md:p-8">
            <div className="rounded-2xl bg-white p-6 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500">
                    Painel Zentra
                  </p>
                  <h3 className="text-lg font-semibold text-zinc-900">
                    Visão geral da operação
                  </h3>
                </div>
                <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Online
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-zinc-200 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-600">
                      Leads capturados
                    </span>
                    <span className="text-sm font-bold text-zinc-900">
                      128
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-100">
                    <div className="h-2 w-4/5 rounded-full bg-blue-600" />
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-600">
                      Atendimento automatizado
                    </span>
                    <span className="text-sm font-bold text-zinc-900">
                      87%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-100">
                    <div className="h-2 w-[87%] rounded-full bg-fuchsia-600" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-zinc-50 p-4">
                    <p className="text-sm text-zinc-500">Respostas hoje</p>
                    <p className="mt-1 text-2xl font-bold text-zinc-900">
                      342
                    </p>
                  </div>

                  <div className="rounded-xl bg-zinc-50 p-4">
                    <p className="text-sm text-zinc-500">Conversão média</p>
                    <p className="mt-1 text-2xl font-bold text-zinc-900">
                      18%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-lg md:block">
            <p className="text-xs text-zinc-500">Atendimento em tempo real</p>
            <p className="text-sm font-semibold text-zinc-900">
              IA + automação + controle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}