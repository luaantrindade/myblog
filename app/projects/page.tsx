"use client";

import Link from "next/link";
import motion from "framer-motion/client";

export default function Projects() {
  const projects = [
    {
      title: "LLM-Powered Log Analyzer",
      description: "Automated anomaly detection and summarization for system logs using fine-tuned LLMs.",
      tags: ["Python", "LLM", "NLP"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
      metrics: [{ label: "Accuracy", value: "99.2%" }],
    },
    {
      title: "Support Ticket Triage System",
      description: "NLP classifier that auto-tags and routes incoming support tickets, reducing manual work by 70%.",
      tags: ["TensorFlow", "NLP", "API"],
      image: "https://images.unsplash.com/photo-1526402008874-7891f10cb04c?auto=format&fit=crop&w=800&q=60",
      metrics: [{ label: "Tickets/month", value: "12K+" }],
    },
    {
      title: "Real-Time AI Dashboard",
      description: "Live monitoring of model performance, data drift, and resource usage with WebSockets.",
      tags: ["React", "Node.js", "WebSocket"],
      image: "https://images.unsplash.com/photo-1526379095059-d4da9ef42f1c?auto=format&fit=crop&w=800&q=60",
      metrics: [{ label: "Uptime", value: "99.9%" }],
    },
    {
      title: "AI Code Review Bot",
      description: "Automated pull request reviews using LLMs to suggest improvements and catch bugs.",
      tags: ["Python", "GitHub API", "LLM"],
      image: "https://images.unsplash.com/photo-1526379095059-d4da9ef42f1c?auto=format&fit=crop&w=800&q=60",
      metrics: [{ label: "PRs reviewed", value: "5K+" }],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-center text-primary">
          Projects
        </h2>
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            className="px-3 py-1 bg-muted/10 rounded border border-muted/20 text-muted hover:border-primary hover:text-primary transition-all"
          >
            All
          </button>
          <button
            className="px-3 py-1 bg-muted/10 rounded border border-muted/20 text-muted hover:border-primary hover:text-primary transition-all"
          >
            Web
          </button>
          <button
            className="px-3 py-1 bg-muted/10 rounded border border-muted/20 text-muted hover:border-primary hover:text-primary transition-all"
          >
            Mobile
          </button>
          <button
            className="px-3 py-1 bg-muted/10 rounded border border-muted/20 text-muted hover:border-primary hover:text-primary transition-all"
          >
            AI
          </button>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link
                href={`/projects/${proj.title.toLowerCase().replace(/\\s+/g, "-")}`}
                className="block bg-muted/10 rounded-lg border border-muted/20 overflow-hidden hover:border-primary/50 transition-all"
              >
                <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-primary">{proj.title}</h3>
                  <p className="mb-3 text-muted">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map(
                      (tag) => (
                                        <span
                  key={tag}
                  className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded"
                >
                  {tag}
                </span>
                                    )
                    )}
                  </div>
                  <div className="space-y-2 text-sm text-muted">
                    {proj.metrics.map(
                      (m) => (
                                        <div key={m.label} className=\"flex justify-between\">\n                  <span>{m.label}</span>\n                  <span>{m.value}</span>\n                </div>\n                                        )
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}