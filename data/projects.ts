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
  current?: boolean;
}

export const projects: Project[] = [
  {
    id: "5",
    current: true,
    title: {
      en: "Pelias Portal",
      no: "Pelias Portal",
    },
    description: {
      en: "An application portal that becomes the new front page for everyone logging in at Pelias: customers, field technicians, and backoffice alike. A personal, role-based dashboard puts every tool at most one click away, backed by a full authentication rewrite with two-factor login, self-service access requests, live health status for the underlying systems, and a shared audit log. Started as a pitch I wrote on my own initiative; management approved it and made me lead developer.",
      no: "En applikasjonsportal som blir den nye forsiden for alle som logger inn hos Pelias: kunder, teknikere i felt og backoffice. Et personlig, rollebasert dashboard gjør at hvert verktøy er maks ett klikk unna, støttet av en full omskriving av autentiseringen med tofaktorinnlogging, selvbetjent tilgangsforespørsel, sanntids driftsstatus for underliggende systemer og en felles revisjonslogg. Startet som et forslag jeg skrev på eget initiativ; ledelsen vedtok det og ga meg rollen som hovedutvikler.",
    },
    tags: ["C#", ".NET 10", "Blazor", "Authentication"],
    detailPage: "/projects/pelias-portal",
    impact: {
      en: "My pitch → lead developer role",
      no: "Mitt forslag → hovedutviklerrolle",
    },
  },
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
      en: "Initiative to evaluate and implement AI tools (Claude Code, Gemini, GPT) into development workflows. Tested alternatives and standardised on Claude Code. Conducted training sessions for the full IT department. The course now runs weekly for senior developers, led entirely by me.",
      no: "Initiativ for å evaluere og implementere AI-verktøy (Claude Code, Gemini, GPT) i utviklingsarbeidsflyter. Testet alternativer og standardiserte på Claude Code. Gjennomførte opplæring for hele IT-avdelingen. Kurset holdes nå ukentlig for senior-utviklere, og ledes av meg alene.",
    },
    tags: ["AI", "Claude Code", "Productivity", "Training"],
    impact: {
      en: "Adopted across the full IT department",
      no: "Tatt i bruk av hele IT-avdelingen",
    },
  },
  {
    id: "4",
    title: {
      en: "Recipe Calculator (mise)",
      no: "Oppskriftskalkulator (mise)",
    },
    description: {
      en: "A native Android app I built out of frustration: I was scaling up a homemade recipe and got tired of the trial and error, so I made a calculator to do it for me. It rescales any recipe from a single limiting ingredient, keeps amounts as exact fractions instead of rounding, and converts between cups and grams using general ingredient ratios tuned to be a solid, honest approximation.",
      no: "En native Android-app jeg laget av ren frustrasjon: jeg holdt på å skalere opp en hjemmelaget oppskrift og ble lei av all prøvingen og feilingen, så jeg bygde en kalkulator som gjør det for meg. Den skalerer hvilken som helst oppskrift ut fra én begrensende ingrediens, beholder mengdene som eksakte brøker i stedet for å runde av, og konverterer mellom kopp og gram ved hjelp av generelle ingrediensforhold finjustert til å være en solid og ærlig tilnærming.",
    },
    tags: ["Kotlin", "Android", "Jetpack Compose", "OCR"],
    detailPage: "/projects/mise",
    github: "https://github.com/ChristianHWiker/mise",
    impact: {
      en: "Built solo, end to end, open source",
      no: "Bygget alene fra bunnen, åpen kildekode",
    },
  },
];
