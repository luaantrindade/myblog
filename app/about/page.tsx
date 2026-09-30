"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-3xl font-bold text-center text-primary">
            About Me
          </h2>
          <p className="text-muted">
            I am an AI Engineer with a passion for building intelligent systems that solve real-world problems.
          </p>
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}