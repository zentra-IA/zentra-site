import type {Metadata} from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import BusinessJourneys from "@/components/BusinessJourneys";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import SiteIcon from "@/components/SiteIcon";
export const metadata:Metadata={title:"Ferramentas de IA, WePush e automação | Zentra",description:"Conheça soluções que executam tarefas: notificações push, ligações com IA, chatbot, CRM, entrevistas e portais personalizados.",alternates:{canonical:"/tecnologias"}};
export default function Tecnologias(){return <main className="bg-[#f7f8fc]"><Navbar/><section className="relative overflow-hidden bg-[#0d1732] py-20 text-white"><div aria-hidden className="absolute inset-0 z-grid opacity-50"/><div className="z-container relative"><p className="z-eyebrow z-eyebrow-light">Ferramentas que trabalham pela empresa</p><h1 className="mt-6 max-w-4xl text-[clamp(39px,6vw,69px)] font-black leading-[1.06] tracking-[-.055em]">Uma solução para cada rotina. <span className="z-gradient-text">Tudo pode se conectar.</span></h1><p className="mt-6 max-w-3xl text-[17px] leading-8 text-[#c4cee7]">Escolha o trabalho que você quer automatizar. A Zentra analisa seus processos e adapta sistemas, IA e integrações à sua realidade.</p><Link data-zentra-cta="tecnologias-diagnostico" className="z-button z-button-primary mt-8" href="/#diagnostico">Contar o processo da minha empresa <SiteIcon name="arrow" size={17}/></Link></div></section><TechnologyShowcase/><BusinessJourneys/><LeadForm/><Footer/><AIChat/></main>}
