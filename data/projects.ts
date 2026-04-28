export interface LocalizedText {
  en: string;
  no: string;
}

export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
  link?: string;
  github?: string;
  githubRepos?: { name: string; url: string }[];
  detailPage?: string;
  impact?: LocalizedText;
}

export const projects: Project[] = [
  {
    id: "1",
    title: {
      en: "Email Worker Service",
      no: "E-posttjeneste",
    },
    description: {
      en: "A standalone email engine that offloads a web server by moving email generation from legacy ASP Classic code into a modern C# service. Runs as a scheduled task with config-driven origins. Includes a web dashboard for statistics, searchable queue, and manual re-queuing. Eliminated over an hour of daily server hangs.",
      no: "En frittstående e-postmotor som avlaster webserveren ved å flytte e-postgenerering fra gammel ASP Classic-kode inn i en moderne C#-tjeneste. Kjører som planlagt oppgave med konfigurasjonsdrevne kilder. Inkluderer et webdashboard for statistikk, søkbar kø og manuell re-køing. Fjernet over én time med daglig serverhenging.",
    },
    tags: ["C#", "ASP.NET Core", "MSSQL", "Automation"],
    detailPage: "/projects/email-worker",
    impact: {
      en: "Eliminated 1h+ daily server downtime",
      no: "Fjernet 1t+ daglig nedetid på server",
    },
  },
  {
    id: "2",
    title: {
      en: "Blazor Map Application",
      no: "Blazor-kartapplikasjon",
    },
    description: {
      en: "A map and trend tool built in Blazor for Pelias. Lets users visualize and edit maps, track trend data on map objects, and link everything to orders for day-to-day operations. Originally planned to be outsourced, but after seeing the prototype the company decided to keep development in-house.",
      no: "Et kart- og trendverktøy bygget i Blazor for Pelias. Lar brukere visualisere og redigere kart, spore trenddata på kartobjekter og koble alt til arbeidsordrer for daglig drift. Var opprinnelig planlagt utkontraktert, men etter å ha sett prototypen bestemte selskapet seg for å holde utviklingen internt.",
    },
    tags: ["C#", "Blazor", "Web App", "Maps"],
    detailPage: "/projects/kartprogram",
    impact: {
      en: "Kept in-house after prototype demo",
      no: "Holdt internt etter prototype-demo",
    },
  },
  {
    id: "3",
    title: {
      en: "AI Productivity Training",
      no: "AI-produktivitetsopplæring",
    },
    description: {
      en: "Initiative to evaluate and implement AI tools (Claude Code, Gemini, GPT) into development workflows. Tested alternatives and standardised on Claude Code. Conducted training sessions for the full IT department, senior developers included.",
      no: "Initiativ for å evaluere og implementere AI-verktøy (Claude Code, Gemini, GPT) i utviklingsarbeidsflyter. Testet alternativer og standardiserte på Claude Code. Gjennomførte opplæring for hele IT-avdelingen, inkludert senior-utviklere.",
    },
    tags: ["AI", "Claude Code", "Productivity", "Training"],
    impact: {
      en: "Adopted across the full IT department",
      no: "Tatt i bruk av hele IT-avdelingen",
    },
  },
];
