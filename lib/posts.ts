export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  displayDate: string;
  readingTime: string;
};

export const posts: BlogPost[] = [
  {
    slug: "ai-automation-support",
    title: "How AI is transforming technical support",
    description:
      "From ticket triage to predictive maintenance: a seven-year view of how AI is changing the work of support engineering.",
    category: "AI & support",
    date: "2026-03-15",
    displayDate: "15 Mar 2026",
    readingTime: "8 min read",
  },
  {
    slug: "slack-ai-skills",
    title: "Building production Slack AI skills",
    description:
      "What 397 deployments taught me about building small, useful AI tools that teams actually adopt.",
    category: "Automation",
    date: "2026-02-03",
    displayDate: "03 Feb 2026",
    readingTime: "12 min read",
  },
  {
    slug: "it-support-to-ai-engineer",
    title: "From IT support to AI engineer",
    description:
      "A practical career framework for growing from hands-on support into AI and automation work.",
    category: "Career notes",
    date: "2026-01-22",
    displayDate: "22 Jan 2026",
    readingTime: "10 min read",
  },
];
