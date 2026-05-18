export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description:
        "Entendemos sua operação, suas dificuldades e onde você perde tempo ou dinheiro.",
    },
    {
      number: "02",
      title: "Mapeamento",
      description:
        "Identificamos processos manuais, gargalos e oportunidades reais de automação.",
    },
    {
      number: "03",
      title: "Solução sob medida",
      description:
        "Desenhamos o sistema, automação ou fluxo ideal para a realidade do seu negócio.",
    },
    {
      number: "04",
      title: "Implantação",
      description:
        "Colocamos a solução para funcionar de forma simples, moderna e organizada.",
    },
    {
      number: "05",
      title: "Evolução",
      description:
        "Ajustamos e melhoramos a solução conforme sua operação cresce.",
    },
  ];

  return (
    <section id="processo" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
            Como funciona
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 md:text-5xl">
            Um processo simples para transformar problema em solução.
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Sem complicação. Primeiro entendemos o problema. Depois criamos
            a tecnologia certa para resolver.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="inline-flex rounded-2xl bg-zinc-950 px-4 py-2 text-sm font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-zinc-950">
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