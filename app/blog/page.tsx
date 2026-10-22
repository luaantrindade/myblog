import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Field notes on practical AI, support engineering, automation, and building useful systems by Luan Trindade.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="archive-page page-width">
      <header className="archive-header">
        <p className="eyebrow">Ideas from the work</p>
        <h1>Writing<span>.</span></h1>
        <p>
          Notes on practical AI, support engineering, automation, and the
          lessons that come from building things with people.
        </p>
      </header>

      <div className="archive-list">
        {posts.map((post, index) => (
          <article className="archive-row" key={post.slug}>
            <span className="archive-number">0{index + 1}</span>
            <div className="archive-copy">
              <p className="article-category">{post.category}</p>
              <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.description}</p>
            </div>
            <div className="archive-meta">
              <time dateTime={post.date}>{post.displayDate}</time>
              <span>{post.readingTime}</span>
            </div>
            <Link className="row-arrow" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
              <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </div>

      <div className="archive-signoff">
        <p>More notes are taking shape.</p>
        <Link href="/#contact" className="text-link">Get in touch <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
