import Link from "next/link";
import Brand from "@/components/Brand";
import SiteIcon from "@/components/SiteIcon";
import { ZENTRA_INSTAGRAM_URL, ZENTRA_WHATSAPP_URL, ZENTRA_WHATSAPP_DISPLAY } from "@/lib/social";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b17] py-14 text-white">
      <div className="z-container mx-auto w-[calc(100%-32px)] max-w-[1160px] sm:w-[calc(100%-48px)]">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Brand inverse />
            <p className="mt-5 max-w-[420px] text-[14px] leading-7 text-[#a0aac5]">IA e sistemas que ajudam a executar tarefas, manter clientes próximos e organizar operações. Soluções sob medida para empresas de todos os segmentos.</p>
            <p className="mt-6 text-[11px] font-black uppercase tracking-widest text-[#e1e5f5]">Acompanhe a Zentra</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={ZENTRA_INSTAGRAM_URL} data-zentra-cta="footer-instagram" aria-label="Visitar Instagram @zentra.sistemas" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 text-sm font-semibold text-[#ebe8fa] transition hover:border-[#b18fff] hover:bg-white/10"><SiteIcon name="instagram" size={20}/> Instagram</a>
              <a href={ZENTRA_WHATSAPP_URL} data-zentra-cta="footer-whatsapp" aria-label="Conversar pelo WhatsApp com a Zentra" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-2 rounded-xl border border-[#2ac686]/40 bg-[#0f4a3a]/40 px-3 text-sm font-semibold text-[#ccfce6] transition hover:bg-[#175945]"><SiteIcon name="whatsapp" size={20}/> WhatsApp</a>
            </div>
          </div>
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-[#e1e5f5]">Explore</h3>
            <div className="mt-5 flex flex-col gap-3 text-[14px] text-[#a0aac5]">
              <Link href="/#ferramentas" className="hover:text-white">Ferramentas</Link>
              <Link href="/tecnologias/wepush" className="hover:text-white">WePush</Link>
              <Link href="/tecnologias/voice-ia" className="hover:text-white">Voice IA</Link>
              <Link href="/#simuladores" className="hover:text-white">Simuladores</Link>
              <Link href="/#projetos" className="hover:text-white">Experiência aplicada</Link>
              <Link href="/#metodo" className="hover:text-white">Como trabalhamos</Link>
              <Link href="/#diagnostico" className="hover:text-white">Solicitar diagnóstico</Link>
              <Link href="/privacidade" className="hover:text-white">Privacidade</Link>
            </div>
          </div>
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-widest text-[#e1e5f5]">Vamos conversar?</h3>
            <div className="mt-5 flex flex-col gap-3 text-[14px] text-[#a0aac5]">
              <Link href="/#diagnostico" className="hover:text-white">Conte sua necessidade</Link>
              <a href="https://calendly.com/gregorysanches48/30min" target="_blank" rel="noopener noreferrer" className="hover:text-white">Agendar reunião</a>
              <a href={ZENTRA_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-zentra-cta="footer-whatsapp-phone" className="hover:text-white">WhatsApp: {ZENTRA_WHATSAPP_DISPLAY}</a>
              <a href={ZENTRA_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" data-zentra-cta="footer-instagram-handle" className="hover:text-white">Instagram: @zentra.sistemas</a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-[#8994b2] md:flex-row">
          <p>© {new Date().getFullYear()} Zentra. Todos os direitos reservados.</p>
          <p>Projetamos tecnologia para o jeito que a sua empresa funciona.</p>
        </div>
      </div>
    </footer>
  );
}
