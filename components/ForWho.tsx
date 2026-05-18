export default function ForWho() {
  const items = [
    "Empresas que dependem muito de WhatsApp, planilhas e controles manuais",
    "Negócios que perdem tempo com tarefas repetitivas",
    "Empresas que querem reduzir custos sem perder qualidade",
    "Operações que precisam organizar leads, clientes, pedidos ou processos",
    "Empreendedores que querem tecnologia sob medida, sem complicação",
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div>
          <span className="inline-flex rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-1.5 text-sm font-semibold text-fuchsia-700">
            Para quem é
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 md:text-5xl">
            Para quem quer crescer sem transformar a operação em caos.
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Se você sente que sua empresa depende demais de esforço manual,
            a Zentra ajuda a transformar esse processo em tecnologia organizada.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 font-medium text-zinc-800 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}