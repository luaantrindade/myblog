"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative bg-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--background)_0%,_transparent_70%)] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Architecting Intelligence
            </motion.h1>
          </h1>
          <p className="mb-6 text-xl text-secondary max-w-lg mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building AI-powered systems that solve real-world problems, from LLMs to scalable infrastructure.
            </motion.p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="flex-1 bg-primary bg-opacity-90 hover:bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02] shadow-lg"
            >
              View Work
            </Link>
            <Link
              href="/blog"
              className="flex-1 border border-muted/50 hover:border-primary text-muted hover:text-primary px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02]"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className="py-16 bg-background/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-primary">
            Tech Stack
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["AI/LLMs", "#00f2fe"],
              ["Web Architecture", "#4facfe"],
              ["Data Pipeline", "#00f2fe"],
              ["Cloud", "#4facfe"],
            ].map(
              ([label, color]) => (
                <div
                  key={label}
                  className={`p-4 bg-muted/10 rounded-lg border border-muted/20 hover:border-primary/50 transition-all`}
                >
                  <span className={`inline-block w-4 h-4 rounded bg-${color === "#00f2fe" ? "primary" : "accent"} mb-2`}></span>
                  <p className="text-sm text-muted">{label}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-primary">
            Featured Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {[
              {
                title: "LLM-Powered Log Analyzer",
                description: "Automated anomaly detection and summarization for system logs using fine-tuned LLMs.",
                tags: ["Python", "LLM", "NLP"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60",
              },
              {
                title: "Support Ticket Triage System",
                description: "NLP classifier that auto-tags and routes incoming support tickets, reducing manual work by 70%.",
                tags: ["TensorFlow", "NLP", "API"],
                image: "https://images.unsplash.com/photo-1526402008874-7891f10cb04c?auto=format&fit=crop&w=400&q=60",
              },
              {
                title: "Real-Time AI Dashboard",
                description: "Live monitoring of model performance, data drift, and resource usage with WebSockets.",
                tags: ["React", "Node.js", "WebSocket"],
                image: "https://images.unsplash.com/photo-1526379095059-d4da9ef42f1c?auto=format&fit=crop&w=400&q=60",
              },
            ].map(
              (proj, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="bg-muted/10 rounded-lg border border-muted/20 overflow-hidden hover:border-primary/50 transition-all">
                    <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold text-primary">{proj.title}</h3>
                      <p className="mb-3 text-muted">{proj.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
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
                      <Link
                        href="/projects"
                        className="text-sm text-primary hover:underline"
                      >
                        View project →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Recent Blog Articles */}
      <section className="py-16 bg-background/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-primary">
            Recent Articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {[
              {
                title: "How to Analyze System Logs with AI",
                excerpt: "Learn how to use LLMs to summarize, categorize, and flag anomalies in logs from Linux and Windows systems.",
                date: "Sep 20, 2026",
                readTime: "5 min read",
                slug: "log-analysis-ai",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=60",
              },
              {
                title: "Automating Support Ticket Triage with NLP",
                excerpt: "A step-by-step guide to building a ticket classifier that saves hours of manual work each week.",
                date: "Sep 15, 2026",
                readTime: "7 min read",
                slug: "ticket-triage-nlp",
                image: "https://images.unsplash.com/photo-1526402008874-7891f10cb04c?auto=format&fit=crop&w=400&q=60",
              },
              {
                title: "Prompt Engineering for Engineers",
                excerpt: "Tips and tricks for getting the most out of large language models when solving technical problems.",
                date: "Sep 10, 2026",
                readTime: "4 min read",
                slug: "prompt-engineering-engineers",
                image: "https://images.unsplash.com/photo-1526379095059-d4da9ef42f1c?auto=format&fit=crop&w=400&q=60",
              },
            ].map(
              (post, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block bg-muted/10 rounded-lg border border-muted/20 overflow-hidden hover:border-primary/50 transition-all"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold text-primary">{post.title}</h3>
                      <p className="mb-3 text-muted">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Interactive AI Playground */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-primary">
            AI Playground
          </h2>
          <div className="bg-muted/10 rounded-lg border border-muted/20 p-6">
            <textarea
              className="w-full h-48 p-4 bg-background/50 border border-muted/30 rounded-lg resize-none font-mono text-muted placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Ask me anything about AI, LLMs, or system design..."
            ></textarea>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-primary">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto grid gap-6 sm:grid-cols-2">
            <form className="space-y-4">
              <div>
                <label className="block mb-1 text-muted font-medium">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-background/50 border border-muted/30 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-1 text-muted font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-background/50 border border-muted/30 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block mb-1 text-muted font-medium">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 bg-background/50 border border-muted/30 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary bg-opacity-90 hover:bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02] shadow-lg"
              >
                Send Message
              </button>
            </form>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-muted">GitHub: luaantrindade</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-muted">LinkedIn: linkedin.com/in/luaantrindade</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.141 5.334A10.856 10.856 0 0010 4c-3.912 0-6.437 2.773-7.533 6.443z" />
                </svg>
                <span className="text-muted">Twitter/X: @luaantrindade</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}