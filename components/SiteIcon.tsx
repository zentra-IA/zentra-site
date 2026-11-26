import type { ReactNode } from "react";

export type SiteIconName = "workflow" | "database" | "bot" | "megaphone" | "phone" | "bell" | "chart" | "arrow" | "check" | "building" | "heart" | "users" | "package" | "utensils" | "sparkles" | "shield" | "menu" | "close" | "target" | "calendar" | "external" | "layers" | "rocket" | "clock" | "checkcircle" | "instagram" | "whatsapp";

const paths: Record<SiteIconName, ReactNode> = {
  workflow: <><rect x="2" y="3" width="7" height="6" rx="1.5"/><rect x="15" y="15" width="7" height="6" rx="1.5"/><path d="M9 6h5a4 4 0 0 1 4 4v5M5.5 9v8H15"/></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v7c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12v7c0 1.7 4 3 9 3s9-1.3 9-3v-7"/></>,
  bot: <><rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 3v4M9 3h6M8 13h.01M16 13h.01M9 17h6"/></>,
  megaphone: <><path d="m3 11 15-6v14L3 13v-2ZM18 10a3 3 0 0 1 0 4M7 14l2 6h4l-2-5"/></>,
  phone: <><path d="M21 16.8v2.3a2 2 0 0 1-2.2 2 18 18 0 0 1-15.9-15.9A2 2 0 0 1 4.9 3h2.3a2 2 0 0 1 2 1.7l.4 2.2a2 2 0 0 1-.6 1.9L7.6 10a14 14 0 0 0 6.4 6.4l1.2-1.4a2 2 0 0 1 1.9-.6l2.2.4a2 2 0 0 1 1.7 2Z"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></>,
  chart: <><path d="M3 21V3M3 21h18M7 16l5-5 4 3 5-8"/></>,
  arrow: <><path d="M4 12h16M13 5l7 7-7 7"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  building: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h2M15 7h.01M9 11h2M15 11h.01M10 21v-5h4v5"/></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>,
  users: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2H3ZM17 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v1"/></>,
  package: <><path d="m12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10"/></>,
  utensils: <><path d="M4 3v8a3 3 0 0 0 6 0V3M7 3v18M19 21V3c-4 2-6 7-6 12h6"/></>,
  sparkles: <><path d="m12 2 2.1 6.9L21 11l-6.9 2.1L12 20l-2.1-6.9L3 11l6.9-2.1L12 2ZM19 18l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"/></>,
  shield: <><path d="M12 2 3.5 6v6c0 5.2 3.5 8.3 8.5 10 5-1.7 8.5-4.8 8.5-10V6L12 2Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  close: <path d="M5 5l14 14M19 5 5 19"/>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></>,
  external: <><path d="M13 4h7v7M20 4l-9 9"/><path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/></>,
  rocket: <><path d="M5 14c0-5 6-11 14-11 0 8-6 14-11 14l-3-3ZM14 5l5 5M5 14l-2 4 4-2M8 17l-1 5 5-4"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></>,
  checkcircle: <><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></>,
  instagram: <><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.25"/><circle cx="17.8" cy="6.3" r="1" fill="currentColor" stroke="none"/></>,
  whatsapp: <><path d="M20.4 11.65a8.6 8.6 0 0 1-12.5 7.62L3 20.6l1.34-4.72a8.6 8.6 0 1 1 16.06-4.23Z"/><path d="M8.3 8.4c.25-.34.5-.35.75-.28l1.22.58c.24.13.32.3.26.6l-.44 1.08a.6.6 0 0 0 .1.62c.58.82 1.28 1.48 2.16 1.93.24.12.43.1.57-.08l.73-.85c.17-.22.37-.23.62-.11l1.25.6c.3.15.34.36.28.6-.3 1.18-1.25 1.66-2.18 1.6-2.06-.12-5.4-3.06-5.74-5.15-.07-.42.02-.76.42-1.14Z"/></>,
};

export default function SiteIcon({ name, size = 22, className = "" }: { name: SiteIconName; size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{paths[name]}</svg>;
}
