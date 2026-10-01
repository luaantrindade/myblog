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
    <footer className="relative border-t border-border-light bg-background-elevated/50">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" aria-hidden="true" />

      <div className="section-container relative py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-6" aria-label="Luan Trindade - Home">
              <span className="gradient-text">LT</span>
              <span>Luan Trindade</span>
            </Link>
            <p className="text-foreground-muted leading-relaxed mb-6 max-w-xs">
              AI-powered support & automation specialist. Building intelligent solutions with LLMs, NLP, and smart workflows.
            </p>
            <div className="flex items-center gap-2 text-foreground-muted text-sm">
              <MapPin className="h-4 w-4" />
              <span>Donabate, Dublin, Ireland 🇮🇪</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-1" aria-label="Site navigation">
            <h4 className="font-semibold text-foreground mb-4">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      // For internal links that are anchors, prevent default and scroll
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                      // For absolute URLs or internal routes, let the browser/Next.js handle navigation
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
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      // For internal links that are anchors, prevent default and scroll
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                      }
                      // For absolute URLs or internal routes, let the browser/Next.js handle navigation
                    }}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Status */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-foreground mb-4">Status</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-background border border-border-light">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Code2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">Open Source</span>
                </div>
                <p className="text-foreground-muted text-sm ml-9">5K+ stars across repositories</p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border-light">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Heart className="h-4 w-4 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">Available</span>
                </div>
                <p className="text-foreground-muted text-sm ml-9">For freelance, contract & full-time</p>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border-light">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <MapPin className="h-4 w-4 text-emerald-400" />
                  </div>
                  <span className="font-medium text-foreground">Location</span>
                </div>
                <p className="text-foreground-muted text-sm ml-9">Dublin, Ireland 🇮🇪 (GMT/IST)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted text-sm">
            © {currentYear} Luan Trindade. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-foreground-muted text-sm">Built with</p>
            <div className="flex items-center gap-1">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-foreground-muted text-sm">Next.js</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-foreground-muted text-sm">in Ireland</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-foreground-muted">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
            <a href="/cookies" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}