"use client";

import { useState } from "react";
import { GitBranch, ExternalLink, ArrowRight, Star, Zap, Brain, Shield, Database, Code, Users } from "lucide-react";

const projects = [
  {
    id: "lucas",
    title: "Lucas — Virtual Assistant for Seniors",
    description:
      "AI-powered voice assistant designed for elderly care. Features natural language understanding, medication reminders, emergency detection, and family notifications. Built with privacy-first architecture.",
    longDescription:
      "Lucas is a comprehensive virtual assistant tailored for senior citizens, combining voice interaction, health monitoring, and social connectivity. The system uses on-device speech recognition for privacy, integrates with wearable health devices, and provides proactive alerts to family members. Deployed in pilot programs across 3 care facilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    tags: ["Python", "LLMs", "Voice AI", "IoT", "Privacy-First", "FastAPI"],
    category: "AI / Healthcare",
    categoryColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    demoUrl: "https://lucas-assistant.demo",
    repoUrl: "https://github.com/luaantrindade/lucas",
    featured: true,
    metrics: ["94% Accuracy", "Sub-200ms Latency", "3 Pilot Sites", "GDPR Compliant"],
    icon: Brain,
  },
  {
    id: "medical-segmentation",
    title: "Medical Image Segmentation Suite",
    description:
      "Deep learning pipeline for automated medical image analysis. Implements U-Net variants with attention mechanisms for tumor detection, organ segmentation, and anomaly classification in MRI/CT scans.",
    longDescription:
      "Production-ready medical imaging pipeline featuring state-of-the-art segmentation architectures. Includes data augmentation pipelines, model ensembling, uncertainty quantification, and DICOM integration. Validated on 10,000+ scans with radiologist-level performance on specific tasks.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
    tags: ["PyTorch", "Medical AI", "Computer Vision", "DICOM", "MONAI", "ONNX"],
    category: "Medical AI",
    categoryColor: "bg-red-500/20 text-red-400 border-red-500/30",
    demoUrl: "https://medseg.demo",
    repoUrl: "https://github.com/luaantrindade/medical-segmentation",
    featured: true,
    metrics: ["Dice 0.92", "10K+ Scans", "FDA Pathway", "Multi-organ"],
    icon: Database,
  },
  {
    id: "slam-navigation",
    title: "Robotics SLAM Navigation System",
    description:
      "Simultaneous Localization and Mapping (SLAM) implementation for autonomous mobile robots. Features real-time mapping, path planning, obstacle avoidance, and multi-robot coordination using ROS 2.",
    longDescription:
      "Complete navigation stack for indoor mobile robots. Implements GraphSLAM with loop closure detection, global/local path planners (DWA, TEB), dynamic obstacle tracking, and fleet management. Tested on TurtleBot3 and custom differential-drive platforms in warehouse environments.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
    tags: ["ROS 2", "C++", "Python", "SLAM", "Nav2", "Gazebo"],
    category: "Robotics",
    categoryColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    demoUrl: "https://slam-nav.demo",
    repoUrl: "https://github.com/luaantrindade/slam-navigation",
    featured: true,
    metrics: ["Real-time 30Hz", "Multi-robot", "Warehouse Tested", "Open Source"],
    icon: Code,
  },
  {
    id: "support-ai",
    title: "Intelligent Support Ticket Triage",
    description:
      "NLP-powered ticket classification and routing system that reduces response time by 3x. Uses fine-tuned transformers for intent detection, sentiment analysis, and automated response suggestions.",
    longDescription:
      "End-to-end support automation platform integrating with Zendesk, Intercom, and custom helpdesks. Features multi-language support, SLA prediction, knowledge base retrieval, and human-in-the-loop escalation. Currently processing 50K+ tickets/month for enterprise clients.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop",
    tags: ["NLP", "Transformers", "FastAPI", "PostgreSQL", "Redis", "Kubernetes"],
    category: "Support Automation",
    categoryColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    demoUrl: "https://support-ai.demo",
    repoUrl: "https://github.com/luaantrindade/support-triage",
    featured: false,
    metrics: ["3x Faster", "50K+/month", "97% Accuracy", "Multi-lang"],
    icon: Zap,
  },
  {
    id: "log-analysis",
    title: "AI-Powered Log Analysis Platform",
    description:
      "Real-time log anomaly detection and failure prediction system. Processes millions of log entries using streaming ML pipelines, providing actionable alerts before incidents occur.",
    longDescription:
      "Scalable log intelligence platform built on Kafka + Flink + custom ML models. Features unsupervised anomaly detection, root cause analysis, correlation engines, and Slack/PagerDuty integrations. Reduces MTTR by 60% for DevOps teams.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop",
    tags: ["Kafka", "Flink", "MLOps", "Anomaly Detection", "Grafana", "Prometheus"],
    category: "Observability",
    categoryColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    demoUrl: "https://logai.demo",
    repoUrl: "https://github.com/luaantrindade/log-analysis",
    featured: false,
    metrics: ["60% MTTR Reduction", "1M+ Logs/sec", "Sub-min Alerts", "Auto-RCA"],
    icon: Shield,
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering Handbook",
    description:
      "Comprehensive guide and toolkit for prompt engineering best practices. Includes interactive playground, template library, evaluation frameworks, and community-contributed patterns.",
    longDescription:
      "Open-source resource for LLM practitioners featuring 200+ curated prompts, A/B testing framework, cost optimization calculator, and integration examples for major LLM providers. 5K+ GitHub stars, featured in LLM newsletters.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
    tags: ["LLMs", "Prompt Engineering", "Next.js", "Vercel", "OpenAI", "Anthropic"],
    category: "Developer Tools",
    categoryColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    demoUrl: "https://prompt-handbook.dev",
    repoUrl: "https://github.com/luaantrindade/prompt-handbook",
    featured: false,
    metrics: ["5K+ Stars", "200+ Prompts", "10K+ Users", "Open Source"],
    icon: Users,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Featured Work
          </span>
          <h2 className="section-heading gradient-text mb-4">Selected Projects</h2>
          <p className="section-subheading">
            A collection of projects spanning AI, robotics, web development, and developer tools.
            Each represents real-world problem solving with production-grade code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up delay-1">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group glass-card rounded-2xl overflow-hidden flex flex-col ${project.featured ? "ring-1 ring-primary/20" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="project-card-image relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - Project preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${project.categoryColor} glass border`}>
                    {project.category}
                  </span>
                </div>
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium glass">
                    <Star className="h-3 w-3" />
                    Featured
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-background-elevated border border-border-light text-xs text-foreground-muted"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-background-elevated border border-border-light text-xs font-medium text-foreground-muted hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 rounded-md bg-background-elevated border border-border-light text-xs font-medium text-foreground-muted">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center text-sm py-2.5"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center text-sm py-2.5"
                  >
                    <GitBranch className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 animate-fade-in-up delay-2">
          <a
            href="https://github.com/luaantrindade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            View All Projects
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-foreground-muted">
            {projects.length} public repositories on GitHub · Open source contributor
          </p>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <div className="relative glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border-light">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-background-elevated border border-border-light text-foreground-muted hover:text-foreground hover:border-primary/50 transition-colors"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="md:w-1/2">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="rounded-xl w-full aspect-video object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${selectedProject.categoryColor} glass border`}>
                        {selectedProject.category}
                      </span>
                      {selectedProject.featured && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium">
                          <Star className="h-3 w-3" />
                          Featured
                        </span>
                      )}
                    </div>
                    <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-foreground-muted leading-relaxed mb-6 flex-1">
                      {selectedProject.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-background-elevated border border-border-light text-sm font-medium text-foreground-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <GitBranch className="h-4 w-4 mr-2" />
                        View Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}