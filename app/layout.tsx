import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sbclean.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Limpeza de Sofá e Higienização de Estofados | SBClean",
    template: "%s | SBClean",
  },
  description:
    "Limpeza de sofá e higienização profissional de estofados. Eliminamos bactérias, ácaros e odores. Lavagem a seco, impermeabilização e orçamento pelo WhatsApp. Atendimento na região.",
  keywords: [
    "limpeza de sofá",
    "higienização de estofados",
    "lavagem a seco de sofá",
    "limpeza de estofados",
    "higienização de sofá",
    "impermeabilização de sofá",
    "limpeza profissional de móveis",
    "SBClean",
  ],
  authors: [{ name: "SBClean" }],
  creator: "SBClean",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "SBClean - Higienização Profissional de Estofados",
    title: "Limpeza de Sofá e Higienização de Estofados | SBClean",
    description:
      "Limpeza de sofá e higienização profissional de estofados. Eliminamos bactérias, ácaros e odores. Orçamento pelo WhatsApp.",
    images: [{ url: "/logo_letter.png", width: 180, height: 70, alt: "SBClean - Lavagem a seco de estofados" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Limpeza de Sofá e Higienização de Estofados | SBClean",
    description:
      "Limpeza de sofá e higienização profissional de estofados. Orçamento pelo WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
