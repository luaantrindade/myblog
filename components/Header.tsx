"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // call once to set initial state
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (resolvedTheme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(resolvedTheme);
    }
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      // External link or internal route - let Next.js handle it
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const headerClass = scrolled
    ? "fixed top-0 left-0 right-0 z-50 h-16 bg-background/90 backdrop-blur-xl border-b border-white/20 shadow-xl shadow-black/20 transition-all duration-300"
    : "fixed top-0 left-0 right-0 z-50 h-16 bg-background/90 backdrop-blur-xl border-b border-transparent transition-all duration-300";

  return (
    <header className={headerClass}>
      <nav className="section-container flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 py-2" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2 text-xl font-bold text-foreground hover:opacity-80 transition-opacity"
          aria-label="Luan Trindade - Home"
        >
          <span className="gradient-text">LT</span>
          <span className="hidden sm:inline">Luan Trindade</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6" role="navigation" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (!link.href.startsWith("http") && !link.href.startsWith("/")) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }
                  // For absolute URLs or internal routes, let the browser/Next.js handle navigation
                }}
                className="relative text-sm font-medium text-foreground-muted hover:text-primary transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <button
              suppressHydrationWarning
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-background-elevated border border-border-light text-foreground-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition_all duration-200"
              aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" suppressHydrationWarning />
              ) : (
                <Moon className="h-5 w-5" suppressHydrationWarning />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-background-elevated border border-border-light text-foreground hover:border-primary/50 transition_all duration-200"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-40"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col h-full">
            {/* Menu Header with Close Button */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
              <h3 className="text-lg font-semibold text-foreground">Menu</h3>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg hover:bg-primary/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (!link.href.startsWith("http") && !link.href.startsWith("/")) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                      // For absolute URLs or internal routes, let the browser/Next.js handle navigation
                    }}
                    className="block w-full px_4 py_4 rounded-xl text-lg font_medium text_foreground hover:text_primary hover:bg_primary/10 transition_all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-4 py-4 border-t border-white/10 flex flex-col gap-3">
              {/* Theme in mobile */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-background-elevated border border-border-light text_foreground hover:border-primary/50 transition_all duration-200"
              >
                <div className="flex items-center gap-3">
                  {resolvedTheme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  <span>{resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                </div>
              </button>
            </div>
          </div>
          {/* Background overlay and backdrop blur - theme aware */}
          <div className={`absolute inset-0 -z-10 ${resolvedTheme === "dark" ? "bg-black/60 backdrop-blur-xl" : "bg-white/60 backdrop-blur-xl"}`} />
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/50 animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}