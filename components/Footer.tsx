export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-zinc-200 bg-zinc-950 py-14 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-fuchsia-600 text-sm font-bold text-white shadow-lg">
                Z
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight">Zentra</p>
                <p className="text-sm text-zinc-400">
                  Automação inteligente para empresas
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
              Ajudamos empresas a automatizar atendimento, organizar processos,
              integrar operação e ganhar mais controle para crescer com mais
              eficiência.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Navegação
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-300">
              <a href="#solucoes" className="transition hover:text-white">
                Soluções
              </a>
              <a href="#beneficios" className="transition hover:text-white">
                Benefícios
              </a>
              <a href="#cta" className="transition hover:text-white">
                Diagnóstico
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Contato
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-300">
              <a
                href="https://wa.me/5511996289534?text=Olá%2C%20vim%20pelo%20site%20da%20Zentra%20e%20quero%20entender%20como%20vocês%20podem%20me%20ajudar."
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp
              </a>

              <a
                href="https://calendly.com/gregorysanches48/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Agendar reunião
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Zentra. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}