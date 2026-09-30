"use client";

import { useState } from "react";
import { Building2, GraduationCap, Award, Code2, FlaskConical, Globe, MapPin, Calendar, Building } from "lucide-react";

const experiences = [
  {
    id: "munai",
    company: "Munai",
    role: "Senior AI Engineer / Founding Team",
    period: "2023 — Present",
    location: "Dublin, Ireland 🇮🇪 (Remote)",
    type: "work",
    description:
      "Leading AI/ML initiatives for healthcare automation. Building LLM-powered clinical decision support, medical coding automation, and patient communication systems. Architected end-to-end ML platform serving 50+ hospitals.",
    achievements: [
      "Reduced clinical documentation time by 40% via LLM automation",
      "Built medical coding engine with 96% accuracy (ICD-10/CPT)",
      "Designed RAG pipeline for clinical guidelines retrieval",
      "Led team of 5 ML engineers, established MLOps practices",
    ],
    technologies: ["LLMs", "RAG", "FastAPI", "Kubernetes", "PostgreSQL", "Weights & Biases", "LangChain", "FHIR"],
    icon: Building2,
    color: "from-primary to-blue-500",
  },
  {
    id: "ufpr-vri",
    company: "UFPR — VRI Lab (Virtual Reality & Interaction)",
    role: "Research Scientist / PhD Candidate",
    period: "2020 — 2023",
    location: "Curitiba, Brazil 🇧🇷",
    type: "research",
    description:
      "PhD research in Human-Computer Interaction and Medical VR. Developed immersive VR systems for surgical training and rehabilitation. Published 8+ papers at top-tier venues (IEEE VR, CHI, ISMAR).",
    achievements: [
      "Published 8 papers at IEEE VR, CHI, ISMAR, MICCAI",
      "Built VR surgical simulator with haptic feedback",
      "Secured $200K in research grants (CNPq, CAPES)",
      "Supervised 4 Master's students, 6 undergrads",
    ],
    technologies: ["Unity", "C#", "Python", "PyTorch", "ROS 2", "OpenXR", "SteamVR", "MATLAB"],
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "rnp",
    company: "RNP (National Research Network)",
    role: "Senior Software Engineer / Tech Lead",
    period: "2018 — 2020",
    location: "Brasília, Brazil 🇧🇷",
    type: "work",
    description:
      "Led development of national-scale research infrastructure. Built monitoring, authentication, and collaboration platforms serving 100+ universities and research institutes across Brazil.",
    achievements: [
      "Architected eduroam BR — 2M+ daily authentications",
      "Built real-time network monitoring platform (10K+ devices)",
      "Led migration to Kubernetes, reduced deployment time 80%",
      "Open-sourced 3 internal tools adopted by community",
    ],
    technologies: ["Go", "Kubernetes", "Prometheus", "Grafana", "Keycloak", "OpenStack", "Ansible", "Python"],
    icon: Globe,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "c3sl",
    company: "C3SL (Center for Scientific Software Libre)",
    role: "Full Stack Developer / Researcher",
    period: "2016 — 2018",
    location: "Curitiba, Brazil 🇧🇷",
    type: "work",
    description:
      "Early career building open-source scientific software. Contributed to Debian, developed lab management systems, and built web platforms for research collaboration. Strong focus on free software principles.",
    achievements: [
      "Debian Developer — maintained 12+ packages",
      "Built LabGestão — lab management system (50+ labs)",
      "Contributed to GNOME, KDE, and Linux kernel",
      "Organized 3 editions of Latinoware (5K+ attendees)",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Debian", "Git", "C", "JavaScript", "Docker"],
    icon: Code2,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "education",
    company: "Federal University of Paraná (UFPR)",
    role: "PhD in Computer Science (Human-Computer Interaction)",
    period: "2020 — 2024",
    location: "Curitiba, Brazil 🇧🇷",
    type: "education",
    description:
      "Doctoral research on immersive technologies for healthcare. Thesis: \"Adaptive Virtual Reality Systems for Surgical Training and Rehabilitation\". GPA: 4.0/4.0. Advisor: Prof. Dr. Maria Cecilia Calani Baranauskas.",
    achievements: [
      "Thesis awarded Best PhD Thesis 2024 (SBC)",
      "CAPES Doctoral Scholarship (full funding)",
      "Visiting Researcher at TU Delft, Netherlands (6 months)",
      "Teaching Assistant: Computer Graphics, HCI, ML",
    ],
    technologies: ["Research", "VR/AR", "HCI", "Medical AI", "Unity", "PyTorch", "Statistical Analysis"],
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "education-msc",
    company: "Federal University of Paraná (UFPR)",
    role: "MSc in Computer Science (Software Engineering)",
    period: "2017 — 2019",
    location: "Curitiba, Brazil 🇧🇷",
    type: "education",
    description:
      "Master's research on software architecture for distributed scientific systems. Thesis: \"Microservice Architecture for High-Throughput Scientific Data Processing\". GPA: 4.0/4.0.",
    achievements: [
      "Published at SBES (Brazilian Software Engineering Symposium)",
      "Built reference architecture adopted by 3 research centers",
      "CNPq Master's Scholarship",
    ],
    technologies: ["Microservices", "Kubernetes", "Python", "Go", "gRPC", "Apache Kafka", "Distributed Systems"],
    icon: GraduationCap,
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work": return Building2;
      case "research": return FlaskConical;
      case "education": return GraduationCap;
      default: return Building;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "work": return "Professional";
      case "research": return "Research";
      case "education": return "Education";
      default: return "Experience";
    }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 bg-background-elevated/30 border-y border-border-light/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Journey
          </span>
          <h2 className="section-heading gradient-text mb-4">Experience & Timeline</h2>
          <p className="section-subheading">
            From open-source contributor to AI engineering lead — building intelligent systems across healthcare, research, and national infrastructure.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-purple-500" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-16 pb-12 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                <div
                  className={`relative w-3 h-3 rounded-full border-4 border-background z-10 ${exp.color.replace("from-", "bg-").replace(" to-", " bg-")}`}
                />
                <div className={`absolute inset-0 rounded-full opacity-30 blur ${exp.color.replace("from-", "bg-").replace(" to-", " bg-")}`} />
              </div>

              {/* Card */}
              <div
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 ${expandedId === exp.id ? "ring-1 ring-primary/20" : ""}`}
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 p-3 rounded-xl ${exp.color.replace("from-", "bg-").replace(" to-", "/20")} border ${exp.color.replace("from-", "border-").replace(" to-", "/30")}`}>
                    <exp.icon className={`h-5 w-5 ${exp.color.replace("from-", "text-").replace(" to-", "")}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary">
                        {getTypeLabel(exp.type)}
                      </span>
                    </div>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-muted text-sm hidden sm:block">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 sm:hidden">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-foreground-muted leading-relaxed mb-4">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-foreground-muted">
                      <span className="flex-shrink-0 mt-0.5 h-1.5 w-1.5 rounded-full bg-primary/50" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border-light">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-background-elevated border border-border-light text-xs font-medium text-foreground-muted hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expand indicator */}
                <div className="mt-4 flex items-center justify-center text-foreground-muted text-sm">
                  <span className="flex items-center gap-1">
                    {expandedId === exp.id ? "Show less" : "Click to expand"}
                    <svg
                      className={`h-4 w-4 transition-transform ${expandedId === exp.id ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Current indicator */}
          <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
            <div className="relative">
              <div className="w-3 h-3 rounded-full border-4 border-background bg-primary animate-ping" />
              <div className="absolute inset-0 rounded-full bg-primary opacity-30 blur" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}