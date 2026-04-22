"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-zentra.png"
            alt="Zentra"
            width={160}
            height={50}
            priority
          />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#solucoes"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition"
          >
            Soluções
          </a>

          <a
            href="#beneficios"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition"
          >
            Benefícios
          </a>

          <a
            href="#contato"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition"
          >
            Contato
          </a>
        </nav>

        <a
          href="https://calendly.com/gregorysanches48/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition"
        >
          Agendar demonstração
        </a>

        <button className="md:hidden rounded-lg border border-zinc-300 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-zinc-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}