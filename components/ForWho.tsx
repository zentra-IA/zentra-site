export default function ForWho() {
  const items = [
    {
      title: "Empresas com atendimento lento",
      description:
        "Negócios que recebem muitas mensagens e não conseguem responder com velocidade, padrão e organização.",
    },
    {
      title: "Operações que perdem leads",
      description:
        "Empresas que geram interesse, mas deixam oportunidades escaparem por falta de processo e acompanhamento.",
    },
    {
      title: "Times sobrecarregados",
      description:
        "Equipes que gastam tempo demais com tarefas repetitivas, retrabalho e rotinas manuais.",
    },
    {
      title: "Negócios que querem escalar",
      description:
        "Empresas que já entenderam que crescer sem estrutura aumenta o caos em vez do resultado.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            Para quem é a Zentra
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Para empresas que querem crescer com mais controle
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            A Zentra é ideal para negócios que já perceberam que atendimento
            desorganizado, processos manuais e falta de estrutura travam o
            crescimento e fazem clientes se perderem no caminho.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7 shadow-sm transition duration-300 hover:bg-white hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}