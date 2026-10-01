export const metadata = {
  title: "From IT Support to AI Engineer: A Career Path Framework | Luan Trindade",
  description: "Practical steps for technical professionals looking to transition into AI and automation roles while building on their foundation.",
  keywords: ["Career Development", "IT Support", "AI Engineering", "Professional Growth", "Skill Development"],
};

export default function BlogPost() {
  return (
    <article className="prose prose-lg max-w-none">
      <header className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          From IT Support to AI Engineer: A Career Path Framework
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground-muted mb-8">
          <span>Jan 22, 2026</span>
          <span>•</span>
          <span>10 min read</span>
          <span>•</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span>Career Development</span>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">My Journey: The Starting Point</h2>
        <p>
          My career began in Curvelo, Brazil, providing 1st and 2nd-level IT support via phone, 
          email, web-chat, and remote/desk-side assistance. I was troubleshooting software and OS 
          issues, installing company software for clients, and learning the fundamentals of technical 
          problem-solving that would serve as my foundation for everything that followed.
        </p>
        <p>
          Those early years taught me invaluable lessons that no amount of theoretical study could 
          provide: how to communicate technical concepts to non-technical users, the importance of 
          patience in problem-solving, and how to think systematically when diagnosing issues.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">The Transition Phase: Building Bridge Skills</h2>
        <p>
          The move from pure IT support to AI engineering didn't happen overnight. It was a gradual 
          process of identifying adjacent skills and building bridges between where I was and where 
          I wanted to go. Here's the framework I followed:
        </p>
        <ol className="decimal list-inside space-y-2 mt-4">
          <li className="mb-4"><strong className="mr-2">Phase 1: Automation Foundation (6-12 months)</strong>
            <ul className="list-disc list-inside mt-2 pl-4">
              <li>Learn scripting languages (bash, PowerShell, Python basics)</li>
              <li>Automate repetitive tasks in your current role</li>
              <li>Understand APIs and how systems communicate</li>
              <li>Build simple integrations between tools you use daily</li>
            </ul>
          </li>
          <li className="mb-4"><strong className="mr-2">Phase 2: Data Literacy (3-6 months)</strong>
            <ul className="list-disc list-inside mt-2 pl-4">
              <li>Learn SQL and database fundamentals</li>
              <li>Work with logs and monitoring data</li>
              <li>Understand basic statistics and data visualization</li>
              <li>Start asking data-driven questions about your support environment</li>
            </ul>
          </li>
          <li className="mb-4"><strong className="mr-2">Phase 3: Programming Fundamentals (6-9 months)</strong>
            <ul className="list-disc list-inside mt-2 pl-4">
              <li>Learn a modern programming language (Python/JavaScript)</li>
              <li>Understand data structures and algorithms</li>
              <li>Build small applications that solve real problems</li>
              <li>Learn about version control and collaborative development</li>
            </ul>
          </li>
          <li><strong className="mr-2">Phase 4: AI/ML Basics (3-6 months)</strong>
            <ul className="list-disc list-inside mt-2 pl-4">
              <li>Understand the difference between AI, ML, and DL</li>
              <li>Learn about common algorithms and when to use them</li>
              <li>Experiment with pre-trained models and APIs</li>
              <li>Understand the data requirements for training models</li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Leveraging Your Support Experience</h2>
        <p>
          One of the biggest advantages you bring from IT support to AI engineering isn't technical 
          at all—it's your deep understanding of real-world problems and user needs. Here's how to 
          leverage that experience:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><strong>Problem Identification:</strong> You know what problems actually matter to users</li>
          <li><strong>Edge Case Awareness:</strong> You've seen the weird, unusual issues that break theoretical models</li>
          <li><strong>Communication Skills:</strong> You can translate between technical and non-technical audiences</li>
          <li><strong>Process Understanding:</strong> You know how work actually gets done in organizations</li>
          <li><strong>Empathy for Users:</strong> You understand frustration, urgency, and varying technical levels</li>
        </ul>
        <p>
          These "soft" skills are often what separate excellent AI engineers from merely competent 
          ones—they ensure that the technology being built actually solves real problems in usable ways.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Practical Projects to Build Your Portfolio</h2>
        <p>
          Theory is important, but nothing demonstrates capability like actual projects. Here are 
          project ideas that build on your support background while developing AI-relevant skills:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Support Automation Projects</h3>
            <ul className="list-disc list-inside space-y-1 mt-4">
              <li>Ticket classification system using NLP</li>
              <li>Knowledge base recommendation engine</li>
              <li>Automated troubleshooting guide generator</li>
              <li>SLA prediction model based on ticket characteristics</li>
              <li>Customer sentiment analysis from support interactions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Observability & Monitoring Projects</h3>
            <ul className="list-disc list-inside space-y-1 mt-4">
              <li>Log anomaly detection system</li>
              <li>Automated root cause analysis tool</li>
              <li>Performance bottleneck identifier</li>
              <li>Health check automation for services</li>
              <li>Alert noise reduction through intelligent grouping</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">The Importance of Showing Your Work</h2>
        <p>
          In today's competitive landscape, having a public record of your work can be as important 
          as traditional credentials. Consider:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><strong>GitHub Portfolio:</strong> Public repositories demonstrating your projects</li>
          <li><strong>Technical Blog:</strong> Writing about what you're learning and building</li>
          <li><strong>Open Source Contributions:</strong> Contributing to relevant projects</li>
          <li><strong>Demo Videos:</strong> Short walkthroughs of your projects in action</li>
          <li><strong>Case Studies:</strong> Detailed breakdowns of problems you've solved</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Continuous Growth: The Mindset Shift</h2>
        <p>
          Perhaps the most important transition isn't in your technical skills but in your mindset. 
          Moving from support to AI engineering means shifting from:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Support Mindset</h3>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Reactive problem-solving</li>
              <li>Following established procedures</li>
              <li>Focusing on immediate resolution</li>
              <li>Working within known boundaries</li>
              <li>Minimizing change and disruption</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">AI Engineering Mindset</h3>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Proactive problem identification</li>
              <li>Experimenting with new approaches</li>
              <li>Focusing on long-term prevention</li>
              <li>Pushing boundaries of what's possible</li>
              <li>Embracing calculated change and innovation</li>
            </ul>
          </div>
        </div>
        <p>
          The most successful transitions I've seen maintain the best of both worlds: the user 
          empathy and process understanding from support, combined with the innovative thinking 
          and technical depth of AI engineering.
        </p>
      </section>

      <footer className="border-t pt-8 mt-12">
        <p className="text-sm text-foreground-muted">
          Looking to make a similar transition or build your AI skills? 
          <a href="#contact" className="text-primary hover:underline">Let's connect</a> to discuss strategies, resources, and potential pathways forward.
        </p>
      </footer>
    </article>
  );
}