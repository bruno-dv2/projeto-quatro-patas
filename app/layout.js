import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "4 Patas - ONGs de Proteção Animal em Fortaleza",
  description: "Encontre ONGs confiáveis dedicadas ao bem-estar de cães e gatos em Fortaleza. Todas verificadas manualmente.",
  keywords: "ONGs, proteção animal, Fortaleza, adoção, cães, gatos, doação, voluntariado",
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    title: "4 Patas - ONGs de Proteção Animal",
    description: "Plataforma de divulgação de ONGs confiáveis para proteção animal",
    type: 'website',
    locale: 'pt_BR',
    url: 'https://4patas.com.br',
    siteName: '4 Patas',
    images: ['/logo.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '4 Patas - ONGs de Proteção Animal',
    description: 'Encontre ONGs confiáveis para ajudar animais em Fortaleza',
    images: ['/logo.svg'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        
        {children}
      </body>
    </html>
  );
}