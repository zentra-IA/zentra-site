"use client";

import Link from "next/link";
import { useState } from "react";
import Brand from "@/components/Brand";
import SiteIcon from "@/components/SiteIcon";
import { ZENTRA_INSTAGRAM_URL, ZENTRA_WHATSAPP_URL } from "@/lib/social";

const links = [
  { href: "/#ferramentas", label: "Ferramentas" },
  { href: "/#simuladores", label: "Simuladores" },
  { href: "/tecnologias/wepush", label: "WePush" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#diagnostico", label: "Diagnóstico" },
];

const socialLinks = [
  { href: ZENTRA_INSTAGRAM_URL, label: "Instagram oficial da Zentra", icon: "instagram" as const, className: "hover:border-[#c09eff] hover:bg-[#37254e]" },
  { href: ZENTRA_WHATSAPP_URL, label: "Conversar com a Zentra pelo WhatsApp", icon: "whatsapp" as const, className: "hover:border-[#74ddb0] hover:bg-[#123f33]" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#ffffff16] bg-[#080c1a]/90 backdrop-blur-2xl">
      <div className="z-container mx-auto flex h-[72px] w-[calc(100%-32px)] max-w-[1160px] items-center justify-between gap-5 sm:w-[calc(100%-48px)]">
        <Link href="/" aria-label="Zentra — voltar ao início"><Brand inverse /></Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {links.map((l) => <Link key={l.href} href={l.href} className="text-[13px] font-semibold text-[#a4abc7] transition hover:text-white">{l.label}</Link>)}
        </nav>
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          {socialLinks.map((l) => (
            <a key={l.icon} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label} title={l.label} data-zentra-cta={`nav-${l.icon}`} className={`grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-[#e8e8f5] transition ${l.className}`}>
              <SiteIcon name={l.icon} size={20}/>
            </a>
          ))}
          <Link href="/#diagnostico" data-zentra-cta="nav-diagnostico" className="z-button z-button-primary ml-2 shrink-0 whitespace-nowrap">Solicitar diagnóstico <SiteIcon name="arrow" size={16}/></Link>
        </div>
        <button type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 text-white lg:hidden"><SiteIcon name={open ? "close" : "menu"}/></button>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-white/10 bg-[#0e1326] px-5 py-4 lg:hidden">
          {links.map((l) => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-sm font-semibold text-white/85">{l.label}</Link>)}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {socialLinks.map((l) => <a key={l.icon} href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} aria-label={l.label} data-zentra-cta={`nav-mobile-${l.icon}`} className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 text-sm font-semibold text-white"><SiteIcon name={l.icon} size={18}/>{l.icon === "instagram" ? "Instagram" : "WhatsApp"}</a>)}
          </div>
          <Link href="/#diagnostico" onClick={() => setOpen(false)} className="z-button z-button-primary mt-3 w-full">Solicitar diagnóstico</Link>
        </nav>
      )}
    </header>
  );
}
