"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Globe, ChevronDown, Check } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const languages = [
  { code: "en", label: "English", flag: "🇮🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português", flag: "🇧🇷" },
];

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mounted && resolvedTheme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(resolvedTheme);
    }
  }, [mounted, resolvedTheme]);

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

  const getChevronClassName = () => {
    return `h-4 w-4 text-foreground-muted transition-transform ${langOpen ? "rotate-180" : ""}`;
  };

  // Theme-aware overlay for mobile menu: dark overlay in light mode, light overlay in dark mode
  const mobileMenuOverlayClass = resolvedTheme === "dark"
    ? "bg-white/60 backdrop-blur-xl" // light overlay for dark mode
    : "bg-black/60 backdrop-blur-xl"; // dark overlay for light mode

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/90 backdrop-blur-xl border-b border-white/10" />
    );
  }

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

          {/* Language Switcher & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative" role="combobox" aria-label="Select language">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background-elevated border border-border-light text-sm font-medium text-foreground hover:border-primary/50 transition-all duration-200"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <Globe className="h-4 w-4 text-foreground-muted" />
                <span>{currentLang.flag}</span>
                <span className="hidden sm:inline">{currentLang.label}</span>
                <ChevronDown className={getChevronClassName()} />
              </button>

              {langOpen && (
                <div
                  className="absolute right-0 mt-2 w-40 bg-background/80 backdrop-blur-xl border border-white/10 rounded-xl border-white/20 py-2 shadow-2xl animate-fade-in"
                  role="listbox"
                  aria-label="Languages"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentLang.code === lang.code ? "bg-primary/10 text-primary border border-primary/20" : "hover:bg-background-elevated"}`}
                      role="option"
                      aria-selected={currentLang.code === lang.code}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                      {currentLang.code === lang.code && <Check className="h-4 w-4 text-primary ml-auto" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-background-elevated border border-border-light text-foreground-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200"
              aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-background-elevated border border-border-light text-foreground hover:border-primary/50 transition-all duration-200"
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
                    className="block w-full px-4 py-3 rounded-xl text-lg font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-4 py-4 border-t border-white/10 flex flex-col gap-3">
              {/* Language in mobile */}
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-foreground-muted" />
                <select
                  value={currentLang.code}
                  onChange={(e) => setCurrentLang(languages.find((l) => l.code === e.target.value) || languages[0])}
                  className="flex-1 px-4 py-3 rounded-xl bg-background-elevated border border-border-light text-foreground text-base appearance-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Theme in mobile */}
              <button
                onClick={toggleTheme}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-background-elevated border border-border-light text-foreground hover:border-primary/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  {resolvedTheme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  <span>{resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}</span>
                </div>
              </button>
            </div>
          </div>
          {/* Background overlay and backdrop blur - theme aware */}
          <div className={`absolute inset-0 -z-10 ${mobileMenuOverlayClass}`} />
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