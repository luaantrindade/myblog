"use client";

import { useState } from "react";
import {
  Brain,
  Code,
  Server,
  Database,
  Cloud,
  Shield,
  GitBranch,
  Dock,
  Terminal,
  Wind,
  Gem,
  Train,
  Beaker,
} from "lucide-react";

const categories = [
  {
    id: "ml",
    label: "Machine Learning / AI",
    icon: Brain,
    color: "from-primary to-blue-500",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    textColor: "text-primary",
    skills: [
      { name: "Python", icon: Terminal, color: "text-yellow-400" },
      { name: "LLMs", icon: Brain, color: "text-primary" },
      { name: "PyTorch", icon: Code, color: "text-orange-400" },
      { name: "ROS 2", icon: GitBranch, color: "text-green-400" },
      { name: "LangChain", icon: Database, color: "text-purple-400" },
      { name: "Hugging Face", icon: Brain, color: "text-yellow-500" },
      { name: "TensorFlow", icon: Code, color: "text-orange-500" },
      { name: "OpenCV", icon: Brain, color: "text-blue-400" },
    ],
  },
  {
    id: "web",
    label: "Web Development",
    icon: Code,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-400",
    skills: [
      { name: "React", icon: Code, color: "text-cyan-400" },
      { name: "Next.js", icon: Code, color: "text-foreground" },
      { name: "TypeScript", icon: Code, color: "text-blue-400" },
      { name: "Node.js", icon: Server, color: "text-green-500" },
      { name: "Ruby on Rails", icon: Train, color: "text-red-500" },
      { name: "Tailwind CSS", icon: Wind, color: "text-cyan-400" },
      { name: "JavaScript", icon: Code, color: "text-yellow-400" },
      { name: "HTML/CSS", icon: Code, color: "text-orange-400" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud / Security / DevOps",
    icon: Server,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-400",
    skills: [
      { name: "Docker", icon: Dock, color: "text-blue-400" },
      { name: "Git", icon: GitBranch, color: "text-orange-500" },
      { name: "AWS", icon: Cloud, color: "text-amber-500" },
      { name: "Linux", icon: Server, color: "text-yellow-400" },
      { name: "CI/CD", icon: Cloud, color: "text-green-400" },
      { name: "Security", icon: Shield, color: "text-red-400" },
      { name: "PostgreSQL", icon: Database, color: "text-blue-500" },
      { name: "Redis", icon: Database, color: "text-red-500" },
    ],
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("ml");

  const category = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="tech" className="py-24 sm:py-32 bg-background-elevated/30 border-y border-border-light/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Technical Arsenal
          </span>
          <h2 className="section-heading gradient-text mb-4">Tech Stack & Tools</h2>
          <p className="section-subheading">
            A curated set of technologies I use to build intelligent, scalable, and secure products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up delay-1" role="tablist" aria-label="Technology categories">
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

        {/* Skills Grid */}
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
                className={`group relative glass-card rounded-xl p-4 md:p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 ${category.borderColor}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`relative p-3 md:p-4 rounded-xl ${category.bgColor} border ${category.borderColor} transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10`}>
                  <skill.icon className={`h-6 w-6 md:h-7 md:w-7 ${skill.color} transition-transform duration-300 group-hover:scale-110`} aria-hidden="true" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground text-center leading-tight">{skill.name}</span>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${category.bgColor.replace("bg-", "bg-")} ${category.textColor}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Category description */}
        <div className="mt-10 animate-fade-in-up delay-3">
          <div className={`glass-card rounded-2xl p-6 md:p-8 border ${category.borderColor} bg-gradient-to-r ${category.bgColor} to-transparent`}>
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 p-3 rounded-xl ${category.bgColor} border ${category.borderColor}`}>
                <category.icon className={`h-6 w-6 ${category.textColor}`} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{category.label} Focus</h3>
                <p className="text-foreground-muted leading-relaxed">
                  {activeCategory === "ml" &&
                    "Deep expertise in building and deploying ML models, fine-tuning LLMs, and creating intelligent agents that solve real-world problems. From computer vision to NLP pipelines."}
                  {activeCategory === "web" &&
                    "Modern full-stack development with React ecosystem, type-safe TypeScript, and performant Next.js applications. Clean architecture, great DX, and delightful UX."}
                  {activeCategory === "cloud" &&
                    "Infrastructure as code, containerized deployments, security-first mindset, and automated pipelines. Building resilient systems that scale."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}