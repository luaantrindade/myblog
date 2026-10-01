"use client";

import { useState } from "react";
import { Building2, GraduationCap, Award, Code2, FlaskConical, Globe, MapPin, Calendar, Building, Shield } from "lucide-react";

const experiences = [
  {
    id: "coupa",
    company: "Coupa Software (Coupa Pay)",
    role: "Technical Support Engineer",
    period: "06/2022 — Present",
    location: "Dublin, Ireland 🇮🇪",
    type: "work",
    description:
      "Own resolution of high-severity Payment Rails, Web Services and API cases for enterprise customers. Escalate and coordinate directly with Engineering and Product when cases surface product defects or gaps.",
    achievements: [
      "Resolved 4,653 of 4,677 owned cases (99.5% closure rate) sustained through solo EMEA coverage",
      "Built 4 production Slack/AI skills adopted org-wide: Article Writer (65 users, 397 runs, 65% KB drafting time reduction), Webhook Finder (~200 hrs/year saved), QuickPay extension (20% faster payment investigations)",
      "Presented to COE (Jul 2025) and Leadership (Aug 2025) securing global launch Sep 14, 2026 — owned idea-to-adoption cycle end-to-end",
      "Authored 69 KB articles (59 published) + Confluence docs, converting troubleshooting into reusable content",
      "Resolved multi-party escalations: Citi charge-timing (Jabil), TransferMate vendor-payment blocker (Raiders FC), API account-format mismatch (JTC Group multi-currency)",
      "Supported enterprise accounts: Barclays, HSBC, Saga Group, Merlin — earned direct customer recognition on leadership-escalated case",
      "Appointed EMEA regional lead on Support Security Cohort, authoring org-wide production access guidance",
      "Mentored across Dublin, Pune, Bogotá — ran onboarding, knowledge-management sessions, tool training",
    ],
    technologies: ["Slack Apps", "Gemini AI", "Salesforce", "SQL", "New Relic", "Grafana", "Kibana", "JIRA", "Confluence", "Git", "Payment Rails", "APIs"],
    icon: Building2,
    color: "from-primary to-blue-500",
  },
  {
    id: "irish-tech",
    company: "Irish Tech Society",
    role: "Web Developer",
    period: "01/2021 — 06/2021",
    location: "Dublin, Ireland 🇮🇪",
    type: "work",
    description:
      "Built website layouts and UIs with HTML5, CSS (Bootstrap 4), JavaScript, jQuery and PHP. Created SQL databases, tables and stored procedures. Integrated mailing-list functionality via MailChimp API.",
    achievements: [
      "Built and maintained production sites (e.g. irishtechsociety.ie) with UI/UX and product team",
      "Integrated MailChimp API for mailing-list functionality",
      "Created SQL databases, tables, and stored procedures for dynamic content",
    ],
    technologies: ["HTML5", "CSS3", "Bootstrap 4", "JavaScript", "jQuery", "PHP", "SQL", "MailChimp API", "MySQL"],
    icon: Code2,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "loylap",
    company: "Loylap",
    role: "Data Scientist",
    period: "11/2019 — 07/2020",
    location: "Dublin, Ireland 🇮🇪",
    type: "work",
    description:
      "Performed data analysis and visualization to extract business insights. Built scripts to automate data-gathering processes.",
    achievements: [
      "Automated data-gathering pipelines reducing manual collection time",
      "Built visualizations for business stakeholder decision-making",
      "Extracted actionable insights from customer behavior data",
    ],
    technologies: ["Python", "Data Analysis", "Visualization", "Automation", "Pandas", "SQL"],
    icon: FlaskConical,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "skill-fullstack",
    company: "Skill Informatica",
    role: "Full Stack Developer",
    period: "08/2018 — 07/2019",
    location: "Curvelo, Brazil 🇧🇷",
    type: "work",
    description:
      "Developed and maintained web systems end-to-end (PHP, MySQL, ExtJS, JavaScript). Converted business requirements into technical specifications within Agile/SCRUM team.",
    achievements: [
      "End-to-end web system development and maintenance",
      "Agile/SCRUM delivery with cross-functional team",
      "Business requirement analysis and technical specification",
    ],
    technologies: ["PHP", "MySQL", "ExtJS", "JavaScript", "HTML/CSS", "Agile", "SCRUM"],
    icon: Code2,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "skill-support",
    company: "Skill Informatica",
    role: "Technical Support Analyst",
    period: "08/2015 — 07/2018",
    location: "Curvelo, Brazil 🇧🇷",
    type: "work",
    description:
      "Delivered 1st and 2nd-level IT support via phone, email, web-chat and remote/desk-side assistance. Troubleshooting software and OS issues, installing company software for clients.",
    achievements: [
      "Multi-channel support: phone, email, web-chat, remote/desk-side",
      "Software/OS troubleshooting and deployment",
      "Client software installation and configuration",
    ],
    technologies: ["IT Support", "Windows", "Linux", "Remote Support", "Troubleshooting", "Software Deployment"],
    icon: Shield,
    color: "from-red-500 to-orange-500",
  },
  {
    id: "education",
    company: "Universidade Pitágoras Unopar",
    role: "Computer Systems Analysis",
    period: "Completed 12/2017",
    location: "Curvelo, Brazil 🇧🇷",
    type: "education",
    description:
      "Bachelor's degree in Computer Systems Analysis. Focus on software development, databases, and systems architecture.",
    achievements: [
      "Graduated December 2017",
      "Coursework: Software Engineering, Database Systems, Web Development, Systems Architecture",
    ],
    technologies: ["Software Engineering", "Databases", "Web Development", "Systems Analysis", "Programming"],
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
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Journey
          </span>
          <h2 className="section-heading gradient-text mb-4">Experience & Timeline</h2>
          <p className="section-subheading">
            From IT support in Brazil to AI automation at Coupa Pay in Ireland — 7+ years turning problems into scalable solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-purple-500" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative pl-16 pb-12 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center">
                <div
                  className={`relative w-3 h-3 rounded-full border-4 border-background z-10 ${exp.color.replace("from-", "bg-").replace(" to-", " bg-")}`}
                />
                <div className={`absolute inset-0 rounded-full opacity-30 blur ${exp.color.replace("from-", "bg-").replace(" to-", " bg-")}`} />
              </div>

              <div
                className={`bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 border transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 ${expandedId === exp.id ? "ring-1 ring-primary/20" : ""}`}
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
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

                <p className="text-foreground-muted leading-relaxed mb-4">{exp.description}</p>

                <div className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-foreground-muted">
                      <span className="flex-shrink-0 mt-0.5 h-1.5 w-1.5 rounded-full bg-primary/50" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-background-elevated border border-border-light text-xs font-medium text-foreground-muted hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

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