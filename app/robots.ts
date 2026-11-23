import type { MetadataRoute } from "next";
const baseUrl=(process.env.NEXT_PUBLIC_SITE_URL||"https://zentra-app-eight.vercel.app").replace(/\/$/,"");
export default function robots():MetadataRoute.Robots{
 return {rules:{userAgent:"*",allow:"/",disallow:["/leads","/api/"]},sitemap:`${baseUrl}/sitemap.xml`};
}
