import Image from "next/image";

export default function BlogPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
            Insights
          </span>
          <h2 className="section-heading gradient-text mb-4">Blog</h2>
          <p className="section-subheading">
            Articles on AI automation, support engineering, technical leadership, and building intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Post 1: AI Automation in Support */}
          <article className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                alt="AI automation in customer support"
                width={800}
                height={450}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">
                  AI Automation
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                How AI is Transforming Technical Support: A 7-Year Perspective
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4 flex-1">
                From ticket triage to predictive maintenance, learn how AI is reshaping the support landscape and what it means for engineers and organizations.
              </p>
              <div className="flex items-center gap-2 mt-6 text-sm text-foreground-muted">
                <span>•</span>
                <span>Mar 15, 2026</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
            <a href="/blog/ai-automation-support" className="mt-auto p-6 text-left text-sm font-medium text-foreground hover:text-primary border-t border-border-light">
              Read Article →
            </a>
          </article>

          {/* Post 2: Building Slack AI Skills */}
          <article className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1556761122-5ea35e5a856b?w=800&h=450&fit=crop"
                alt="Building Slack AI skills"
                width={800}
                height={450}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400">
                  Slack Development
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Building Production Slack AI Skills: Lessons from 397 Deployments
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4 flex-1">
                A deep dive into creating and scaling AI-powered Slack skills that saved organizations hundreds of hours annually.
              </p>
              <div className="flex items-center gap-2 mt-6 text-sm text-foreground-muted">
                <span>•</span>
                <span>Feb 3, 2026</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
            </div>
            <a href="/blog/slack-ai-skills" className="mt-auto p-6 text-left text-sm font-medium text-foreground hover:text-primary border-t border-border-light">
              Read Article →
            </a>
          </article>

          {/* Post 3: Career Growth in Tech */}
          <article className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66294c015f3b?w=800&h=450&fit=crop"
                alt="Career growth in technology"
                width={800}
                height={450}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400">
                  Career Development
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col p-6">
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                From IT Support to AI Engineer: A Career Path Framework
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4 flex-1">
                Practical steps for technical professionals looking to transition into AI and automation roles while building on their foundation.
              </p>
              <div className="flex items-center gap-2 mt-6 text-sm text-foreground-muted">
                <span>•</span>
                <span>Jan 22, 2026</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </div>
            <a href="/blog/it-support-to-ai-engineer" className="mt-auto p-6 text-left text-sm font-medium text-foreground hover:text-primary border-t border-border-light">
              Read Article →
            </a>
          </article>
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/blog" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
              View All Blog Posts
            </a>
          </div>
          <p className="mt-6 text-sm text-foreground-muted">
            New articles published monthly · Subscribe to stay updated
          </p>
        </div>
      </div>
    </section>
  );
}