import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martine Services | Lavage & Ménage Premium à Abomey-Calavi",
  description: "Service de blanchisserie et nettoyage professionnel. L'excellence au service de votre linge à Abomey-Calavi, Cotonou et Porto-Novo.",
  openGraph: {
    title: "Martine Services | Lavage & Ménage Premium",
    description: "L'excellence au service de votre linge à Abomey-Calavi.",
    url: 'https://martine-services.vercel.app', // À mettre à jour après déploiement
    siteName: 'Martine Services',
    images: [
      {
        url: '/martine-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Martine Services - Blanchisserie Professionnelle',
      },
    ],
    locale: 'fr_BJ',
    type: 'website',
  },
  icons: {
    icon: [
      { url: "/icon.webp", type: "image/webp" },
      { url: "/icon.webp", sizes: "32x32", type: "image/webp" },
    ],
    shortcut: "/icon.webp",
    apple: "/icon.webp",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr" 
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}