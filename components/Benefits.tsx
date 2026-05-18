export default function Benefits() {
  const benefits = [
    {
      title: "Redução de custos",
      description:
        "Menos tempo gasto com tarefas manuais e mais eficiência na operação.",
    },
    {
      title: "Mais velocidade",
      description:
        "Atendimento, processos e decisões acontecendo com menos demora.",
    },
    {
      title: "Mais organização",
      description:
        "Informações centralizadas para você acompanhar tudo com clareza.",
    },
    {
      title: "Menos perda de oportunidades",
      description:
        "Leads, contatos e demandas deixam de se perder no caminho.",
    },
    {
      title: "Processos sob controle",
      description:
        "Rotinas mais previsíveis, padronizadas e fáceis de acompanhar.",
    },
    {
      title: "Tecnologia sob medida",
      description:
        "Nada de sistema genérico. A solução é criada para o seu fluxo real.",
    },
  ];

  return (
    <section id="beneficios" className="bg-zinc-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            Benefícios reais
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 md:text-5xl">
            O resultado é uma empresa mais leve, rápida e organizada.
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            A tecnologia certa reduz desperdício de tempo, melhora o controle
            e aumenta a capacidade da sua empresa de atender, vender e crescer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}