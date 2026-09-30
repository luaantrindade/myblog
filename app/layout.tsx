import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luan Trindade | AI Engineer",
  description: "AI engineer, support engineer, and tech enthusiast sharing projects and insights.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          {/* Footer placeholder */}
          <footer className="mt-20 bg-background/50 border-t border-muted/20">
            <div className="max-w-7xl mx-auto px-4 py-6 text-center text-muted">
              &copy; {new Date().getFullYear()} Luan Trindade. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}