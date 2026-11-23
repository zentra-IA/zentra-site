import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zentra | Sistemas, automação e IA sob medida para empresas",
  description: "A Zentra entende os processos do seu negócio e desenvolve sistemas personalizados, automações e inteligência artificial para tornar a operação mais eficiente.",
  keywords: ["desenvolvimento de sistemas", "automação empresarial", "inteligência artificial para empresas", "sistemas personalizados", "CRM", "processos empresariais"],
  openGraph: {
    title: "Zentra — Tecnologia criada para o processo da sua empresa",
    description: "Sistemas sob medida, automações e soluções de IA para empresas de todos os segmentos.",
    type: "website", locale: "pt_BR",
  },
  verification: { google: "eOhKXCW3YXJ8oJAAu_56WKqa1oeyA6qdN9GQJLKVFvQ" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
