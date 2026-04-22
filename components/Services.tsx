export default function Services() {
  const services = [
    {
      title: "Automação de atendimento",
      description:
        "Estruture respostas, triagem e fluxos automáticos para atender mais rápido, reduzir demora e evitar perda de oportunidades.",
      points: [
        "Respostas automáticas",
        "Triagem inicial de leads",
        "Organização do atendimento",
      ],
      icon: "💬",
    },
    {
      title: "Captação e qualificação de leads",
      description:
        "Receba, organize e acompanhe contatos com mais eficiência para não deixar clientes escaparem no meio do processo.",
      points: [
        "Entrada de leads centralizada",
        "Qualificação inicial",
        "Mais controle comercial",
      ],
      icon: "📈",
    },
    {
      title: "Integração com WhatsApp",
      description:
        "Conecte o principal canal de contato da sua operação com fluxos, automações e acompanhamento inteligente.",
      points: [
        "Atendimento mais rápido",
        "Fluxos automatizados",
        "Centralização da comunicação",
      ],
      icon: "📱",
    },
    {
      title: "Processos automatizados",
      description:
        "Transforme tarefas repetitivas em processos organizados, reduzindo retrabalho, erros operacionais e desperdício de tempo.",
      points: [
        "Menos tarefas manuais",
        "Mais produtividade",
        "Operação mais eficiente",
      ],
      icon: "⚙️",
    },
    {
      title: "Sistemas personalizados",
      description:
        "Criamos soluções sob medida para a rotina da sua empresa, adaptadas à forma como sua operação realmente funciona.",
      points: [
        "Fluxo sob medida",
        "Mais controle interno",
        "Estrutura para crescer",
      ],
      icon: "🧩",
    },
    {
      title: "IA aplicada ao negócio",
      description:
        "Use inteligência artificial para atendimento, orientação inicial, ganho de escala e apoio à operação.",
      points: [
        "Atendimento inteligente",
        "Primeira resposta automatizada",
        "Escala com qualidade",
      ],
      icon: "🤖",
    },
  ];

  return (
    <section id="solucoes" className="py-20 md:py-24 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            O que fazemos
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Soluções pensadas para resolver problemas reais da sua operação
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            A Zentra desenvolve automações, sistemas e fluxos inteligentes para
            empresas que precisam vender melhor, atender mais rápido e organizar
            a operação com mais eficiência.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-fuchsia-600 text-2xl text-white shadow-lg">
                  {service.icon}
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Zentra
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-zinc-900">
                {service.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-zinc-600">
                {service.description}
              </p>

              <div className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <p className="text-sm text-zinc-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}