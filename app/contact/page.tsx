"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-3xl font-bold text-center text-primary">
            Contact
          </h2>
          <form className="max-w-xl mx-auto space-y-4">
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
          <Link href="/" className="mt-6 inline-block text-primary hover:underline">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}