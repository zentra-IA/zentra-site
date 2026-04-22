export default function Problem() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Seu negócio ainda depende de processos manuais?
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Atendimento lento, perda de contatos e falta de controle travam o crescimento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Pedidos perdidos</h3>
            <p className="mt-3 text-zinc-600">
              Leads e clientes se perdem no meio do atendimento.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Atendimento lento</h3>
            <p className="mt-3 text-zinc-600">
              Respostas manuais geram demora e reduzem conversão.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Falta de controle</h3>
            <p className="mt-3 text-zinc-600">
              Sem automação, fica difícil medir desempenho e crescer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}