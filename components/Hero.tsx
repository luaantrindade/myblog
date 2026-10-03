"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, User, Video, GraduationCap, GitBranch } from "lucide-react";

const roles = [
  "Technical Support Engineer",
  "AI Automation Builder",
  "Web Developer",
  "Data Scientist",
  "Full Stack Developer",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const typedTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (currentCharIndex > 0) {
        timeout = setTimeout(() => setCurrentCharIndex((prev) => prev - 1), 50);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (currentCharIndex < currentRole.length) {
        timeout = setTimeout(() => setCurrentCharIndex((prev) => prev + 1), 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentRoleIndex, isDeleting]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentRoleIndex];
  const displayedText = currentRole.slice(0, currentCharIndex);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300d4ff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.03)_50%)] bg-[size:100%_4px]" />
      </div>

      <div className="section-container relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="animate-fade-in-up mb-6 mt-4 sm:mt-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Open to opportunities · Based in Donabate, Ireland 🇮🇪
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up delay-1 mb-6">
              Hi, I&apos;m
              <br />
              <span className="gradient-text">Luan Trindade</span>
            </h1>

            <div className="animate-fade-in-up delay-2 mb-8 min-h-[2.5rem]">
              <p className="text-xl sm:text-2xl text-foreground-muted font-medium">
                <span className="gradient-text" ref={typedTextRef}>{displayedText}</span>
                <span className="relative" aria-hidden="true">
                  {showCursor && !isDeleting && (
                    <span className="inline-block w-1 h-8 bg-primary animate-pulse ml-1 align-bottom" />
                  )}
                </span>
              </p>
            </div>

            <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-xl animate-fade-in-up delay-3 mb-10">
              Technical Support Engineer with 7+ years in Cloud SaaS & Fintech. Building AI-driven support automation 
              that reduces manual work org-wide. 99.5% case closure rate across 4,600+ cases. 
              Turning recurring problems into tools, documentation, and training that scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-4 mb-12">
              <a href="#work" className="btn-primary flex items-center justify-center gap-2">
                View Work
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Me
              </a>
            </div>

            <div className="animate-fade-in-up delay-5 flex items-center gap-6" role="list" aria-label="Social links">
              <a href="https://github.com/luaantrindade" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-background-elevated border border-border-light text-foreground-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1" aria-label="GitHub">
                <GitBranch className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/luaantrindade" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-background-elevated border border-border-light text-foreground-muted hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1" aria-label="LinkedIn">
                <User className="h-5 w-5" />
              </a>
              <a href="https://scholar.google.com/citations?user=luan-trindade" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-background-elevated border border-border-light text-foreground-muted hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all duration-300 hover:-translate-y-1" aria-label="Google Scholar">
                <GraduationCap className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@luan-trindade" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-background-elevated border border-border-light text-foreground-muted hover:border-red-500/50 hover:text-red-500 hover:bg-red-500/5 transition-all duration-300 hover:-translate-y-1" aria-label="YouTube">
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-slide-in-right delay-3">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-pink-500 rounded-[50%] opacity-20 blur-2xl animate-pulse-glow" />
              <div className="relative bg-background/80 backdrop-blur-xl border border-white/10 rounded-[50%] p-1.5 max-w-[380px] mx-auto aspect-square transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative rounded-[50%] overflow-hidden aspect-square bg-gradient-to-br from-background-elevated to-background-card">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-transparent to-accent/20">
                    <div className="text-center p-8">
                      <span className="text-8xl sm:text-9xl font-bold gradient-text">LT</span>
                      <p className="mt-4 text-foreground-muted text-sm uppercase tracking-wider">Support Engineer · AI Builder</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-xl border border-white/10 border-primary/20 bg-primary/10">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                    </span>
                    <span className="text-sm font-medium text-primary">Available for work</span>
                  </div>
                  <div className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-primary/50 rounded-tl-[50%]" />
                  <div className="absolute -top-1 -right-1 w-12 h-12 border-t-2 border-r-2 border-accent/50 rounded-tr-[50%]" />
                  <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-2 border-l-2 border-primary/50 rounded-bl-[50%]" />
                  <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-accent/50 rounded-br-[50%]" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 shadow-2xl border-primary/20 animate-float">
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">7+</span>
                  <span className="text-foreground-muted">Years Experience</span>
                </div>
              </div>
              <div className="absolute bottom-4 -left-4 bg-background/80 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 shadow-2xl border-accent/20 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">4.6K</span>
                  <span className="text-foreground-muted">Cases Resolved</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in delay-6">
          <div className="flex flex-col items-center gap-2 text-foreground-muted text-sm">
            <span className="uppercase tracking-wider">Scroll to explore</span>
            <div className="w-1 h-10 relative">
              <div className="absolute inset-0 bg-border-light rounded-full" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-primary rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}