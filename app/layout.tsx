import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProviderWrapper } from "./theme-provider";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luan Trindade | Support Engineer and AI",
  description: "AI-powered support & automation specialist. Building intelligent solutions with LLMs, NLP, and smart workflows. Based in Ireland 🇮🇪",
  keywords: ["Web Developer", "ML Researcher", "AI Engineer", "Support Engineer", "Next.js", "React", "Python", "LLMs", "NLP", "Ireland"],
  authors: [{ name: "Luan Trindade" }],
  creator: "Luan Trindade",
  publisher: "Luan Trindade",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://luantrindade.com",
    siteName: "Luan Trindade",
    title: "Luan Trindade | Web Developer · ML Researcher · Entrepreneur",
    description: "AI-powered support & automation specialist. Building intelligent solutions with LLMs, NLP, and smart workflows.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luan Trindade - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luan Trindade | Web Developer · ML Researcher",
    description: "AI-powered support & automation specialist. Building intelligent solutions with LLMs, NLP, and smart workflows.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProviderWrapper>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}