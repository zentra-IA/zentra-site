export default function Problem() {
  const problems = [
    {
      title: "Tempo perdido com tarefas manuais",
      text: "Sua equipe repete atividades todos os dias que poderiam ser automatizadas.",
    },
    {
      title: "Custo alto com processos lentos",
      text: "Funcionários gastam tempo em tarefas operacionais em vez de focar no que gera resultado.",
    },
    {
      title: "Leads e oportunidades se perdem",
      text: "Sem organização, contatos importantes ficam esquecidos no WhatsApp, planilhas ou mensagens soltas.",
    },
  ];

  return (
    <section id="problema" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-700">
            O problema
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-zinc-950 md:text-5xl">
            Seu negócio pode estar perdendo dinheiro por falta de processo.
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Muitas empresas não precisam contratar mais pessoas. Elas precisam
            estruturar melhor a operação com tecnologia, automação e sistemas sob medida.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                !
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}