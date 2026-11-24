import type { MetadataRoute } from "next";
import {projectCases} from "@/lib/cases";
import {solutions} from "@/lib/solutions";
const baseUrl=(process.env.NEXT_PUBLIC_SITE_URL||"https://zentra-app-eight.vercel.app").replace(/\/$/,"");
export default function sitemap():MetadataRoute.Sitemap{return [
 {url:baseUrl,lastModified:new Date(),changeFrequency:"monthly",priority:1},
 {url:`${baseUrl}/tecnologias`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:0.9},
 {url:`${baseUrl}/tecnologias/wepush`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:0.95},
 {url:`${baseUrl}/tecnologias/voice-ia`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:0.9},
 ...projectCases.map(c=>({url:`${baseUrl}/projetos/${c.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:0.8})),
 ...solutions.map(s=>({url:`${baseUrl}/solucoes/${s.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:0.8})),
 {url:`${baseUrl}/privacidade`,lastModified:new Date(),changeFrequency:"yearly",priority:0.2}
];}
