export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Entendemos sua operação",
      description:
        "Analisamos como seu atendimento, seus processos e sua rotina funcionam hoje para identificar gargalos reais.",
    },
    {
      number: "02",
      title: "Mapeamos o que está travando",
      description:
        "Descobrimos onde sua empresa perde tempo, leads, controle e eficiência no dia a dia.",
    },
    {
      number: "03",
      title: "Desenhamos a solução ideal",
      description:
        "Definimos a melhor estrutura de automação, sistema e organização para sua necessidade.",
    },
    {
      number: "04",
      title: "Implantamos e organizamos",
      description:
        "Colocamos a solução para rodar de forma prática, deixando sua operação mais clara e eficiente.",
    },
    {
      number: "05",
      title: "Acompanhamos a evolução",
      description:
        "A operação não para na implantação. O objetivo é garantir melhoria contínua e crescimento com estrutura.",
    },
  ];

  return (
    <section className="bg-zinc-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-fuchsia-200 bg-fuchsia-50 px-4 py-1.5 text-sm font-medium text-fuchsia-700">
            Como funciona
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Da operação travada para uma operação organizada
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            A Zentra não entrega só ferramenta. Entrega direção, estrutura e
            automação aplicadas ao que realmente precisa ser resolvido no seu
            negócio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-600 to-fuchsia-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-zinc-900">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}