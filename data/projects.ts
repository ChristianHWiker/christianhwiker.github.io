export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  githubRepos?: { name: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Email Worker Service",
    description:
      "A standalone email engine that offloads a web server by moving email generation from legacy ASP Classic code into a modern C# service. Runs as a scheduled task with config-driven origins. Includes a web dashboard for statistics, searchable queue, and manual re-queuing. Eliminated over an hour of daily server hangs.",
    tags: ["C#", "ASP.NET Core", "MSSQL", "Automation"],
    githubRepos: [
      { name: "Engine", url: "https://github.com/ChristianHWiker/EmailWorker" },
      { name: "Web UI", url: "https://github.com/ChristianHWiker/EmailWorker.Web" },
    ],
  },
  {
    id: "2",
    title: "Blazor Map Application",
    description:
      "A map program prototype built in Blazor Web App for Pelias. Originally planned to be outsourced, but after seeing the prototype the company decided to keep development in-house.",
    tags: ["C#", "Blazor", "Web App", "Maps"],
    github: "https://github.com/ChristianHWiker/Kartprogram-Public",
  },
  {
    id: "3",
    title: "AI Productivity Training",
    description:
      "Initiative to evaluate and implement AI tools (Claude Code, Gemini, GPT) into development workflows. Tested alternatives and standardised on Claude Code. Conducted training sessions for the full IT department, senior developers included.",
    tags: ["AI", "Claude Code", "Productivity", "Training"],
  },
];
