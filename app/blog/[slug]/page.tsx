"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "How to Analyze System Logs with AI",
    excerpt: "Learn how to use LLMs to summarize, categorize, and flag anomalies in logs from Linux and Windows systems.",
    date: "Sep 20, 2026",
    readTime: "5 min read",
    slug: "log-analysis-ai",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60",
    content: `## Introduction
Analyzing system logs is a critical task for maintaining system health and security. With the advent of large language models (LLMs), we can now automate much of this process.

## Approach
1. Collect logs from various sources.
2. Preprocess and tokenize the log entries.
3. Feed them into a fine-tuned LLM for summarization and anomaly detection.
4. Generate actionable alerts based on the model's output.

## Conclusion
LLMs have transformed log analysis from a manual, time-consuming process into an automated, efficient workflow.`,
  },
  {
    title: "Automating Support Ticket Triage with NLP",
    excerpt: "A step-by-step guide to building a ticket classifier that saves hours of manual work each week.",
    date: "Sep 15, 2026",
    readTime: "7 min read",
    slug: "ticket-triage-nlp",
    image: "https://images.unsplash.com/photo-1526402008874-7891f10cb04c?auto=format&fit=crop&w=800&q=60",
    content: `## Overview
Support teams often deal with hundreds of tickets daily. Automating triage can significantly improve efficiency.

## Methodology
- Gather historical ticket data.
- Extract features using TF-IDF and word embeddings.
- Train a multiclass classifier (e.g., Logistic Regression or BERT).
- Deploy as an API that tags incoming tickets.

## Results
The system reduced manual triage time by 70% and improved routing accuracy.`,
  },
  {
    title: "Prompt Engineering for Engineers",
    excerpt: "Tips and tricks for getting the most out of large language models when solving technical problems.",
    date: "Sep 10, 2026",
    readTime: "4 min read",
    slug: "prompt-engineering-engineers",
    image: "https://images.unsplash.com/photo-1526379095059-d4da9ef42f1c?auto=format&fit=crop&w=800&q=60",
    content: `## What is Prompt Engineering?
Prompt engineering is the practice of designing inputs to LLMs to obtain desired outputs.

## Techniques
- **Zero-shot prompting**: Directly ask the model.
- **Few-shot prompting**: Provide examples.
- **Chain-of-thought**: Encourage step-by-step reasoning.
- **Self-consistency**: Sample multiple reasoning paths.

## Best Practices
- Keep prompts clear and concise.
- Use delimiters to separate sections.
- Iterate based on model responses.

## Tools
- OpenAI Playground
- LangChain
- Hugging Face Transformers`,
  },
];

export default function Post({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="/blog" className="mb-4 inline-block text-sm text-muted hover:text-primary">
            ← Back to Blog
          </a>
          <h1 className="mb-6 text-4xl font-bold text-primary">{post.title}</h1>
          <div className="mb-4 flex items-center gap-4 text-sm text-muted">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <img src={post.image} alt={post.title} className="w-full rounded-lg mb-6" />
          <div className="prose prose-lg max-w-none text-muted">
            {/* Simple markdown rendering - replace with actual markdown parser if needed */}
            <div
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split("\n\n")
                  .map((p) => `<p>${p}</p>`)
                  .join(""),
              }}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="text-sm text-primary hover:underline"
            >
              Browse more articles
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}