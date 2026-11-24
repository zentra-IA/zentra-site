import type { Metadata } from "next";
import "./globals.css";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import ConversionEvents from "@/components/ConversionEvents";

const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||"https://zentra-app-eight.vercel.app").replace(/\/$/,"");
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {canonical:"/"},
  title: "Zentra | WePush, agentes de IA e automação para sua empresa",
  description: "WePush, ligações com IA, chatbot, CRM, entrevistas inteligentes e sistemas personalizados. Descubra o que sua empresa pode automatizar com a Zentra.",
  keywords: ["desenvolvimento de sistemas", "automação empresarial", "inteligência artificial para empresas", "sistemas personalizados", "CRM", "processos empresariais"],
  openGraph: {
    title: "Zentra — tecnologia que trabalha pela sua empresa",
    description: "Notificações push, atendimento inteligente e automação para o trabalho repetitivo da sua empresa.",
    type: "website", locale: "pt_BR",url:"/",images:[{url:"/og-zentra.png",width:1200,height:630,alt:"Zentra — sistemas, automação e IA sob medida"}],
  },
  twitter:{card:"summary_large_image",images:["/og-zentra.png"]},
  verification: { google: "eOhKXCW3YXJ8oJAAu_56WKqa1oeyA6qdN9GQJLKVFvQ" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}<AnalyticsConsent/><ConversionEvents/></body></html>;
}
