"use client";

import Link from "next/link";
import motion from "framer-motion/client";

const posts = [
  {
    title: "How to Analyze System Logs with AI",
    excerpt: "Learn how to use LLMs to summarize, categorize, and flag anomalies in logs from Linux and Windows systems.",
    date: "Sep 20, 2026",
    readTime: "5 min read",
    slug: "log-analysis-ai",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Automating Support Ticket Triage with NLP",
    excerpt: "A step-by-step guide to building a ticket classifier that saves hours of manual work each week.",
    date: "Sep 15, 2026",
    readTime: "7 min read",
    slug: "ticket-triage-nlp",
    image: "https://images.unsplash.com/photo-1526402008874-7891f10cb04c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Prompt Engineering for Engineers",
    excerpt: "Tips and tricks for getting the most out of large language models when solving technical problems.",
    date: "Sep 10, 2026",
    readTime: "4 min read",
    slug: "prompt-engineering-engineers",
    image: "https://images.unsplash.com/photo-1526379095059-d4da9ef42f1c?auto=format&fit=crop&w=800&q=60",
  },
];

export default function Blog() {
  return (
    <section className="py-16 bg-background/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-center text-primary">
          Blog
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {posts.map((post, idx) => (
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
                  <h3 className="mb-2 text-lg font-semibold text-primary>{post.title}</h3>
                  <p className="mb-3 text-muted>{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
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