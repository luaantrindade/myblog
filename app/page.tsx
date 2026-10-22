import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/posts";

const featuredPost = posts[0];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section page-width" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Field notes from Dublin, Ireland</p>
          <h1>
            Making the complicated things work <em>better.</em>
          </h1>
          <p className="hero-intro">
            I&apos;m Luan—a support engineer and AI builder writing about the
            systems, tools, and small ideas that make a meaningful difference.
          </p>
          <div className="hero-actions">
            <Link href="/blog" className="button-primary">
              Explore the writing <span aria-hidden="true">↗</span>
            </Link>
            <a href="#about" className="text-link">A little about me <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <aside className="hero-note" aria-label="A note about Luan">
          <div className="note-topline">
            <span>THE PRACTICE</span>
            <span>01 — 03</span>
          </div>
          <p className="note-heading">Curiosity,<br />made useful.</p>
          <div className="note-rule" />
          <p className="note-copy">
            A field notebook on support engineering, practical AI, and the work
            between the two.
          </p>
          <span className="note-mark" aria-hidden="true">L.</span>
        </aside>
      </section>

      <section className="featured-section page-width" id="writing">
        <div className="section-kicker">
          <span>01 / The latest essay</span>
          <Link href="/blog">All writing <span aria-hidden="true">↗</span></Link>
        </div>
        <article className="featured-article">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="featured-art"
            aria-label={`Read ${featuredPost.title}`}
          >
            <span className="art-index">FIELD NOTE<br />NO. 001</span>
            <span className="art-title">Human<br /><i>+ machine</i></span>
            <span className="art-caption">The evolving practice of support</span>
            <span className="art-arrow" aria-hidden="true">↗</span>
          </Link>
          <div className="featured-copy">
            <p className="article-category">{featuredPost.category}</p>
            <h2><Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link></h2>
            <p className="article-description">{featuredPost.description}</p>
            <div className="article-byline">
              <span>By Luan Trindade</span>
              <span aria-hidden="true">·</span>
              <time dateTime={featuredPost.date}>{featuredPost.displayDate}</time>
              <span aria-hidden="true">·</span>
              <span>{featuredPost.readingTime}</span>
            </div>
            <Link className="text-link read-link" href={`/blog/${featuredPost.slug}`}>
              Read the essay <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      </section>

      <section className="recent-section page-width">
        <div className="section-kicker">
          <span>02 / From the notebook</span>
          <span>Ideas worth keeping</span>
        </div>
        <div className="post-list">
          {posts.slice(1).map((post, index) => (
            <article className="post-row" key={post.slug}>
              <span className="post-number">0{index + 2}</span>
              <div className="post-row-main">
                <p className="article-category">{post.category}</p>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.description}</p>
              </div>
              <div className="post-row-meta">
                <time dateTime={post.date}>{post.displayDate}</time>
                <span>{post.readingTime}</span>
              </div>
              <Link className="row-arrow" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <Link href="/blog" className="archive-link">Visit the writing archive <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="about-section" id="about">
        <div className="page-width about-grid">
          <div>
            <p className="eyebrow">A little context</p>
            <h2>Good systems make room for people.</h2>
          </div>
          <div className="about-copy">
            <p>
              My work lives where customer problems meet technology. Over the
              past seven years, I&apos;ve worked across support, web development,
              and data—and found a particular interest in using automation to
              give people more time for the problems that need them.
            </p>
            <p>
              Today I work in technical support for cloud software and build
              practical AI tools for the teams around me. This site is where I
              share what I&apos;m learning along the way.
            </p>
            <Link href="/#experience" className="text-link">A few details about my work <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="experience-section page-width" id="experience">
        <div className="section-kicker">
          <span>03 / The through line</span>
          <span>Support · Software · Systems</span>
        </div>
        <div className="experience-grid">
          <p className="experience-stat">7<span>+</span></p>
          <div>
            <h2>Years spent making technology more useful.</h2>
            <p>
              From IT support in Brazil to cloud SaaS and fintech in Ireland,
              the thread has always been the same: understand the real problem,
              then make the solution easier to use and share.
            </p>
          </div>
          <div className="experience-metric">
            <strong>4,653</strong>
            <span>support cases resolved</span>
            <strong>397</strong>
            <span>runs of an internal AI skill</span>
          </div>
        </div>
      </section>

      <section className="contact-section page-width" id="contact">
        <p className="eyebrow">The conversation continues</p>
        <div className="contact-row">
          <h2>Have a good problem<br /><em>to work on?</em></h2>
          <div>
            <p>I&apos;m always glad to hear from thoughtful people building useful things.</p>
            <a href="mailto:luan@luantrindade.com" className="button-primary">
              Write me a note <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
