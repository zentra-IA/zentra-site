export default function Solution() {
  const items = [
    "Entendemos a dificuldade real do seu negócio",
    "Criamos uma solução personalizada para sua operação",
    "Automatizamos tarefas repetitivas e processos lentos",
    "Organizamos dados, atendimento, leads e fluxo interno",
  ];

  return (
    <section className="bg-zinc-950 py-20 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">
        <div>
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-300">
            A solução
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Tecnologia criada para o seu problema, não uma solução genérica.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            A Zentra desenvolve automações e sistemas modernos de acordo com a realidade
            de cada cliente. O objetivo é simples: resolver gargalos, economizar tempo,
            reduzir custos e deixar sua operação mais inteligente.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500 text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="font-medium leading-7 text-zinc-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}