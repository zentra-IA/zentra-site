export default function Benefits() {
  const benefits = [
    {
      title: "Mais velocidade no atendimento",
      description:
        "Reduza o tempo de resposta e aumente sua capacidade de atender bem, mesmo com mais volume.",
      highlight: "Atenda mais rápido",
    },
    {
      title: "Menos perda de leads",
      description:
        "Organize melhor a entrada e o acompanhamento dos contatos para evitar oportunidades desperdiçadas.",
      highlight: "Mais oportunidades aproveitadas",
    },
    {
      title: "Mais controle da operação",
      description:
        "Centralize informações, processos e etapas importantes para tomar decisões com mais clareza.",
      highlight: "Gestão mais organizada",
    },
    {
      title: "Menos retrabalho",
      description:
        "Automatize tarefas repetitivas e reduza falhas operacionais causadas por processos manuais.",
      highlight: "Mais eficiência",
    },
    {
      title: "Mais produtividade da equipe",
      description:
        "Liberte o time de tarefas operacionais para focar no que realmente gera resultado.",
      highlight: "Time mais estratégico",
    },
    {
      title: "Escala com estrutura",
      description:
        "Cresça sem transformar a operação em caos, mantendo atendimento, processo e execução alinhados.",
      highlight: "Crescimento sustentável",
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-1.5 text-sm font-medium text-fuchsia-700">
            Benefícios reais
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            O que sua empresa ganha quando a operação deixa de ser manual
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            A Zentra não entrega só tecnologia. Entrega mais velocidade, mais
            controle e mais estrutura para sua empresa crescer sem perder
            eficiência.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7 shadow-sm transition duration-300 hover:bg-white hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-blue-600">
                {benefit.highlight}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900">
                {benefit.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-zinc-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}