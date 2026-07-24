import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zentra",
  description: "Automação, atendimento e crescimento com IA",
  verification: {
    google: "eOhKXCW3YXJ8oJAAu_56WKqa1oeyA6qdN9GQJLKVFvQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}