"use client";

import { useState } from "react";
import { Brain, Code, Server, Database, Cloud, Shield, GitBranch, Dock, Terminal, Wind, Gem, Train, Beaker, Cpu, Zap, FileText, Users, Globe } from "lucide-react";

const categories = [
  {
    id: "automation",
    label: "Automation & AI Tooling",
    icon: Brain,
    color: "from-primary to-blue-500",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    textColor: "text-primary",
    skills: [
      { name: "Slack Apps / Skills", icon: Zap, color: "text-purple-400" },
      { name: "Gemini / LLM Integration", icon: Brain, color: "text-primary" },
      { name: "AI-Driven Support Automation", icon: Zap, color: "text-yellow-400" },
      { name: "API Integration", icon: Cloud, color: "text-cyan-400" },
      { name: "Salesforce Automation", icon: FileText, color: "text-blue-500" },
      { name: "Workflow Automation", icon: Cpu, color: "text-green-400" },
    ],
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting & Data",
    icon: Database,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-400",
    skills: [
      { name: "SQL for Production Troubleshooting", icon: Database, color: "text-emerald-400" },
      { name: "Incident Response", icon: Shield, color: "text-red-400" },
      { name: "Root Cause Analysis", icon: Brain, color: "text-amber-400" },
      { name: "Payment Rails Debugging", icon: Cpu, color: "text-primary" },
      { name: "API/Web Services Debugging", icon: Globe, color: "text-cyan-400" },
      { name: "Multi-Party Escalation Management", icon: Users, color: "text-purple-400" },
    ],
  },
  {
    id: "observability",
    label: "Observability & Platforms",
    icon: Server,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-400",
    skills: [
      { name: "New Relic", icon: Cpu, color: "text-red-500" },
      { name: "Grafana", icon: Server, color: "text-orange-500" },
      { name: "Kibana / Elasticsearch", icon: Database, color: "text-yellow-500" },
      { name: "Salesforce (Case, Knowledge)", icon: FileText, color: "text-blue-500" },
      { name: "JIRA", icon: FileText, color: "text-blue-400" },
      { name: "Confluence", icon: FileText, color: "text-blue-300" },
    ],
  },
  {
    id: "dev",
    label: "Development & Documentation",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-400",
    skills: [
      { name: "Git Version Control", icon: GitBranch, color: "text-orange-500" },
      { name: "PHP / MySQL", icon: Server, color: "text-purple-400" },
      { name: "JavaScript / jQuery", icon: Code, color: "text-yellow-400" },
      { name: "HTML5 / CSS3 / Bootstrap", icon: Code, color: "text-pink-400" },
      { name: "Python / Pandas", icon: Terminal, color: "text-blue-400" },
      { name: "ExtJS", icon: Code, color: "text-green-400" },
    ],
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("automation");

  const category = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="tech" className="py-24 sm:py-32 bg-background-elevated/30 border-y border-border-light/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Technical Arsenal
          </span>
          <h2 className="section-heading gradient-text mb-4">Skills & Tools</h2>
          <p className="section-subheading">
            Real-world tools I use daily at Coupa Pay and beyond — from AI automation to payment rails debugging.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up delay-1" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r text-background font-semibold shadow-lg shadow-primary/25"
                  : "bg-background-elevated border border-border-light text-foreground-muted hover:border-primary/50 hover:text-foreground hover:bg-primary/5"
              }`}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`${cat.id}-panel`}
              id={`${cat.id}-tab`}
            >
              <cat.icon className={`inline h-4 w-4 mr-2 ${activeCategory === cat.id ? "text-background" : cat.textColor}`} />
              {cat.label}
              {activeCategory === cat.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-background rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div
          id={`${activeCategory}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeCategory}-tab`}
          className="animate-fade-in-up delay-2"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {category.skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-background/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 ${category.borderColor}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`relative p-3 md:p-4 rounded-xl ${category.bgColor} border ${category.borderColor} transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10`}>
                  <skill.icon className={`h-6 w-6 md:h-7 md:w-7 ${skill.color} transition-transform duration-300 group-hover:scale-110`} aria-hidden="true" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground/90 text-center leading-tight">{skill.name}</span>
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${category.bgColor.replace("bg-", "bg-")} ${category.textColor}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 animate-fade-in-up delay-3">
          <div className={`bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 border ${category.borderColor} bg-gradient-to-r ${category.bgColor} to-transparent`}>
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 p-3 rounded-xl ${category.bgColor} border ${category.borderColor}`}>
                <category.icon className={`h-6 w-6 ${category.textColor}`} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{category.label} Focus</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {activeCategory === "automation" &&
                    "Built 4 production Slack/AI skills adopted org-wide at Coupa Pay. From prototype to global launch: Article Writer (397 runs, 65% time savings), Webhook Finder (~200 hrs/year saved), QuickPay extension (20% faster investigations)."}
                  {activeCategory === "troubleshooting" &&
                    "99.5% case closure rate across 4,600+ cases. Expert in payment rails (Citi, TransferMate), API debugging, multi-party escalations across banking partners and internal engineering teams."}
                  {activeCategory === "observability" &&
                    "Daily driver for production visibility: New Relic for APM, Grafana for dashboards, Kibana for log analysis. Salesforce Case/Knowledge workflow automation for support operations."}
                  {activeCategory === "dev" &&
                    "Full-stack background: PHP/MySQL systems, ExtJS frontends, Python data pipelines. Git workflow automation, Confluence documentation, Agile/SCRUM delivery."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}