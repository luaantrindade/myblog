export const metadata = {
  title: "Building Production Slack AI Skills: Lessons from 397 Deployments | Luan Trindade",
  description: "A deep dive into creating and scaling AI-powered Slack skills that saved organizations hundreds of hours annually.",
  keywords: ["Slack", "AI", "Automation", "Workflow", "LLMs", "NLP"],
};

export default function BlogPost() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-container">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Building Production Slack AI Skills: Lessons from 397 Deployments
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground-muted mb-8">
              <span>Feb 3, 2026</span>
              <span>•</span>
              <span>12 min read</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span>Slack Development</span>
            </div>
          </header>
          
          <div className="space-y-8">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">The Slack AI Skills Journey</h2>
              <p>
                When I joined Coupa Pay's EMEA support team in mid-2022, I quickly noticed a pattern: 
                engineers were spending countless hours on repetitive tasks that could be automated. 
                From searching for webhook URLs to drafting knowledge base articles, these manual 
                processes were creating bottlenecks in our support workflow.
              </p>
              <p>
                Rather than accepting this as "just how support works," I saw an opportunity to 
                leverage Slack's extensibility combined with modern AI to create purpose-built skills 
                that would augment our team's capabilities.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Skill #1: The Article Writer</h2>
              <p>
                Our first and most impactful skill was the Article Writer—an AI-powered tool that 
                automatically converts resolved ticket conversations into draft knowledge base articles. 
                What used to take engineers 20-30 minutes of manual documentation now happens in 
                under 5 minutes with AI assistance.
              </p>
              <div className="space-y-4">
                <p className="mb-2">
                  Impact metrics after one year of organization-wide adoption:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>65 users</strong> across support, engineering, and product teams</li>
                  <li><strong>397 runs</strong> in the last 12 months</li>
                  <li><strong>65% reduction</strong> in time spent drafting KB articles</li>
                  <li><strong>~200 hours/year</strong> saved in documentation time</li>
                </ul>
              </div>
              <p>
                The skill works by listening for specific slash commands in Slack channels, extracting 
                relevant context from ticket threads, and using fine-tuned language models to generate 
                well-structured KB articles that follow our organizational standards.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Skill #2: Webhook Finder</h2>
              <p>
                One of the most frustrating experiences for support engineers was hunting down webhook 
                URLs across our microservices architecture. Engineers would spend 10-15 minutes per 
                ticket just trying to locate the correct endpoint for testing or debugging.
              </p>
              <p>
                The Webhook Finder skill solves this by maintaining a searchable database of all 
                webhook endpoints across our services. Engineers simply type `/webhook-finder [service-name]` 
                and get instant results with environment-specific URLs, authentication details, and 
                sample payloads.
              </p>
              <div className="space-y-4">
                <p className="mb-2">
                  Key features that drove adoption:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Real-time synchronization with our CI/CD pipeline</li>
                  <li>Environment-aware URLs (dev/staging/prod)</li>
                  <li>One-click copy to clipboard</li>
                  <li>Integration with API testing tools like Postman</li>
                </ul>
              </div>
              <p>
                This skill alone saved approximately 150 hours per year in webhook lookup time, 
                allowing engineers to focus on actual problem-solving rather than endpoint discovery.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Skill #3: QuickPay Extension</h2>
              <p>
                Payment investigation cases were particularly time-consuming, often requiring engineers 
                to manually construct API requests to check transaction statuses across multiple 
                payment gateways. This process was not only slow but also prone to human error.
              </p>
              <p>
                The QuickPay extension adds a set of Slack shortcuts that wrap our payment APIs with 
                user-friendly interfaces. Instead of crafting complex JSON payloads, engineers can 
                simply use `/quickpay-check [transaction-id]` or `/quickpay-refund [amount]` to get 
                immediate results.
              </p>
              <div className="space-y-4">
                <p className="mb-2">
                  Adoption and impact:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Used by 42 engineers across EMEA and APAC regions</li>
                  <li>20% faster payment investigations on average</li>
                  <li>Reduced escalation rates by 15% for payment-related cases</li>
                  <li>Positive feedback from engineering teams on cleaner handoffs</li>
                </ul>
              </div>
              <p>
                What started as a simple convenience tool evolved into a critical component of our 
                payment support workflow, demonstrating how targeted AI skills can address specific 
                pain points in the support lifecycle.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Technical Architecture and Best Practices</h2>
              <p>
                Behind these skills lies a thoughtful architecture designed for reliability, security, 
                and maintainability. Here are the key principles that guided our implementation:
              </p>
              <div className="space-y-4">
                <p className="mb-2">
                  Core architectural decisions:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Modular design:</strong> Each skill is a standalone Slack app with clear boundaries</li>
                  <li><strong>Secure by default:</strong> Principle of least privilege for all API tokens</li>
                  <li><strong>Observability:</strong> Comprehensive logging and metrics for debugging</li>
                  <li><strong>Version control:</strong> All skills managed as code in GitHub repositories</li>
                  <li><strong>Testing framework:</strong> Automated tests for core functionality</li>
                </ul>
              </div>
              <p>
                We also implemented strict guardrails around AI usage, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Human-in-the-loop review for all generated content</li>
                <li>Content filtering to prevent inappropriate outputs</li>
                <li>Usage quotas to manage costs and prevent abuse</li>
                <li>Regular audits of AI-generated materials for accuracy</li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Lessons Learned and Scaling Advice</h2>
              <p>
                After deploying these skills across our organization and seeing tangible results, 
                several key lessons emerged for anyone looking to build similar AI-powered capabilities:
              </p>
              <div className="space-y-4">
                <p className="mb-2">
                  Start small, solve real problems:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Begin with one painful, repetitive task rather than trying to boil the ocean</li>
                  <li>Measure baseline metrics before implementation to prove ROI</li>
                  <li>Involve end-users early in the design process for better adoption</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="mb-2">
                  Invest in the foundation:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Build reusable components for common AI operations (text extraction, summarization)</li>
                  <li>Create standardized interfaces for skill-to-skill communication</li>
                  <li>Invest in proper documentation and onboarding materials</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="mb-2">
                  Plan for maintenance from day one:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Establish clear ownership and update schedules</li>
                  <li>Monitor usage patterns and performance metrics</li>
                  <li>Have a deprecation strategy for skills that become obsolete</li>
                </ul>
              </div>
            </section>
          </div>
          
          <footer className="border-t pt-8 mt-12">
            <p className="text-sm text-foreground-muted">
              Building these Slack AI skills has been one of the most rewarding projects of my career— 
              not just for the time savings, but for seeing how technology can genuinely augment human 
              capabilities rather than replace them. If you're interested in implementing similar 
              solutions in your organization, <a href="#contact" className="text-primary hover:underline">let's connect</a> to discuss approaches tailored to your specific needs.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}