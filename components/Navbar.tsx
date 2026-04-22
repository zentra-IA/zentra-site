export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-fuchsia-600 text-sm font-bold text-white shadow-lg">
            Z
          </div>

          <div>
            <p className="text-lg font-bold tracking-tight text-zinc-900">
              Zentra
            </p>
            <p className="text-xs text-zinc-500">
              Automação inteligente
            </p>
          </div>
        </div>

        {/* MENU */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#solucoes" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
            Soluções
          </a>
          <a href="#beneficios" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
            Benefícios
          </a>
          <a href="#contato" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
            Contato
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://calendly.com/gregorysanches48/30min"
          target="_blank"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
        >
          Agendar demonstração
        </a>
      </div>
    </header>
  );
}