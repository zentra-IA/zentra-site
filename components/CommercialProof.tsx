import Link from "next/link";
import SiteIcon from "@/components/SiteIcon";

const examples = [
  {
    number: "01", segment: "OPERAÇÃO IMOBILIÁRIA", title: "Uma jornada, várias equipes conectadas",
    description: "Prospecção, CRM de corretores, documentos e OCR, análise administrativa e acompanhamento do pós-venda organizados por etapas.",
    evidence: ["Funis separados por responsabilidade", "Documentos vinculados ao cliente", "Devolutiva da análise para o corretor"],
    href: "/projetos/imobiliaria", color: "#9079ff"
  },
  {
    number: "02", segment: "RECURSOS HUMANOS", title: "Entrevistas e avaliações em um só lugar",
    description: "Convites por link, currículos em PDF/Word, respostas em áudio e vídeo e apoio de IA para organizar a avaliação de candidatos.",
    evidence: ["Entrevistas realizadas na plataforma", "Histórico e anexos por candidato", "Apoio da IA com revisão humana"],
    href: "/projetos/rh", color: "#7ad7eb"
  },
  {
    number: "03", segment: "COMERCIAL ATACADISTA", title: "Da prospecção à cotação comercial",
    description: "CRM, organização de contatos e apoio à montagem de cotações para uma operação com muitas empresas, produtos e negociações.",
    evidence: ["Base comercial organizada", "Acompanhamento de oportunidades", "Cotação assistida por IA"],
    href: "/projetos/atacado", color: "#e6a8ff"
  }
];

export default function CommercialProof() {
  return <section id="provas" className="z-section bg-white" aria-labelledby="proof-title">
    <div className="z-container">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div><p className="z-eyebrow">Experiência aplicada, não promessa vaga</p>
          <h2 id="proof-title" className="z-section-title mt-5 text-[#16213b]">Você não precisa acreditar apenas no nosso discurso. <span className="text-[#7965d9]">Veja o que construímos.</span></h2>
        </div>
        <p className="max-w-[460px] text-[16px] leading-8 text-[#586984]">Estudos com processos, módulos e decisões de arquitetura. Mostramos a lógica aplicada a negócios diferentes — sem inventar números de vendas ou expor dados de clientes.</p>
      </div>
      <div className="mt-11 grid gap-5 lg:grid-cols-3">
        {examples.map(ex => <article key={ex.href} className="group flex h-full flex-col overflow-hidden rounded-[23px] border border-[#dfe5f1] bg-[#f8faff] shadow-[0_14px_36px_#1c315d0a] transition hover:-translate-y-1 hover:shadow-[0_20px_48px_#1c315d18]">
          <div className="border-b border-[#e1e7f2] bg-[#121b35] p-7 text-white">
            <div className="flex items-center justify-between"><span className="text-[11px] font-extrabold tracking-[.14em]" style={{color:ex.color}}>{ex.segment}</span><span className="text-sm font-bold text-[#8c9bbc]">/{ex.number}</span></div>
            <h3 className="mt-6 text-[23px] font-extrabold leading-[1.2] tracking-[-.035em]">{ex.title}</h3>
          </div>
          <div className="flex flex-1 flex-col p-7">
            <p className="text-[15px] leading-7 text-[#52617d]">{ex.description}</p>
            <p className="mt-7 text-[11px] font-extrabold uppercase tracking-[.12em] text-[#7a63dc]">O que você pode conhecer</p>
            <ul className="mt-4 space-y-3">{ex.evidence.map(e => <li key={e} className="flex items-start gap-2.5 text-[14px] font-medium leading-6 text-[#27354f]"><SiteIcon name="checkcircle" size={18} className="mt-1 shrink-0 text-[#20a989]"/>{e}</li>)}</ul>
            <Link href={ex.href} className="mt-8 inline-flex min-h-11 items-center gap-2 font-extrabold text-[#694ee3] underline-offset-4 hover:underline">Explorar este projeto <SiteIcon name="arrow" size={18}/></Link>
          </div>
        </article>)}
      </div>
      <div className="mt-7 flex flex-col items-start justify-between gap-4 rounded-[20px] border border-[#ded9ff] bg-[#f2efff] p-6 sm:flex-row sm:items-center sm:px-8">
        <p className="max-w-[680px] text-[15px] leading-7 text-[#374365]"><strong className="text-[#241b61]">Seu segmento não está aqui?</strong> Estes projetos mostram nossa abordagem. O desenvolvimento começa pelas necessidades e particularidades de cada empresa.</p>
        <Link data-zentra-cta="provas-diagnostico" href="/#diagnostico" className="z-button z-button-dark shrink-0">Apresentar meu desafio <SiteIcon name="arrow" size={16}/></Link>
      </div>
    </div>
  </section>;
}
