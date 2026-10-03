"use client";

import Link from "next/link";
import { GitBranch, User, Video, GraduationCap, Mail, MapPin, Heart, Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigate: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "Experience", href: "/experience" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    connect: [
      { label: "GitHub", href: "https://github.com/luaantrindade", icon: GitBranch, external: true },
      { label: "LinkedIn", href: "https://linkedin.com/in/luan-trindade", icon: User, external: true },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=luan-trindade", icon: GraduationCap, external: true },
      { label: "YouTube", href: "https://youtube.com/@luan-trindade", icon: Video, external: true },
      { label: "Email", href: "mailto:luan@luantrindade.com", icon: Mail, external: true },
    ],
  };

  return (
    <footer className="relative border-t border-border-light bg-background-elevated/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] sm:w-[600px] sm:h-[300px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" aria-hidden="true" />

      <div className="section-container relative py-2 lg:py-8">
        {/* Layout: Brand full width, then two-column grid (Navigation | Connect), then Status full width, then Bottom bar */}
        {/* Brand full width */}
        <div className="mb-2">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-1" aria-label="Luan Trindade - Home">
            <span className="gradient-text">LT</span>
            <span className="hidden sm:inline">Luan Trindade</span>
          </Link>
          <p className="text-foreground-muted leading-relaxed mb-1 max-w-xs">
            AI-powered support & automation specialist. Building intelligent solutions with LLMs, NLP, and smart workflows.
          </p>
          <div className="flex items-center gap-2 text-foreground-muted text-sm">
            <MapPin className="h-4 w-4" />
            <span>Donabate, Dublin, Ireland 🇮🇪</span>
          </div>
        </div>

        {/* Two-column grid: Navigation | Connect */}
        <div className="grid grid-cols-2 gap-1 sm:gap-2">
          {/* Navigation */}
          <nav className="lg:col-span-1" aria-label="Site navigation">
            <h4 className="font-semibold text-foreground mb-1">Navigate</h4>
            <ul className="space-y-0.5">
              {footerLinks.navigate.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-primary transition-colors text-sm block py-0.5"
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <nav className="lg:col-span-1" aria-label="Connect">
            <h4 className="font-semibold text-foreground mb-1">Connect</h4>
            <ul className="space-y-0.5">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors text-sm block py-0.5"
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Status full width */}
        <div className="mt-2">
          <h4 className="font-semibold text-foreground mb-1">Status</h4>
          <div className="space-y-1">
            <div className="p-1 rounded-xl bg-background border border-border-light">
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1 rounded-lg bg-primary/10">
                  <Code2 className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium text-foreground">Open Source</span>
              </div>
              <p className="text-foreground-muted text-sm ml-9">5K+ stars across repositories</p>
            </div>
            <div className="p-1 rounded-xl bg-background border border-border-light">
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1 rounded-lg bg-accent/10">
                  <Heart className="h-4 w-4 text-accent" />
                </div>
                <span className="font-medium text-foreground">Available</span>
              </div>
              <p className="text-foreground-muted text-sm ml-9">For freelance, contract & full-time</p>
            </div>
            <div className="p-1 rounded-xl bg-background border border-border-light">
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1 rounded-lg bg-emerald-500/10">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="font-medium text-foreground">Location</span>
              </div>
              <p className="text-foreground-muted text-sm ml-9">Dublin, Ireland 🇮🇪 (GMT/IST)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-2 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <p className="text-foreground-muted text-sm">
              © {currentYear} Luan Trindade. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1">
              <p className="text-foreground-muted text-sm">Built with</p>
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-foreground-muted text-sm">Next.js</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-foreground-muted text-sm">in Ireland</span>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-1 sm:gap-2">
            <a href="/privacy" className="text-foreground-muted text-sm hover:text-primary transition-colors">Privacy</a>
            <a href="/terms" className="text-foreground-muted text-sm hover:text-primary transition-colors">Terms</a>
            <a href="/cookies" className="text-foreground-muted text-sm hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}