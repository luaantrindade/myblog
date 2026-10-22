import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  metadataBase: new URL("https://luantrindade.com"),
  title: {
    default: "Luan Trindade — Field notes on AI, support & systems",
    template: "%s — Luan Trindade",
  },
  description:
    "Field notes on practical AI, support engineering, automation, and building useful systems. Written by Luan Trindade in Ireland.",
  keywords: ["AI", "Support Engineering", "Automation", "Cloud SaaS", "Ireland"],
  authors: [{ name: "Luan Trindade" }],
  creator: "Luan Trindade",
  publisher: "Luan Trindade",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: "Luan Trindade",
    title: "Luan Trindade — Field notes on AI, support & systems",
    description: "Writing about practical AI, support engineering, automation, and building useful systems.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Luan Trindade — Field notes on AI, support & systems",
    description: "Writing about practical AI, support engineering, automation, and building useful systems.",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}