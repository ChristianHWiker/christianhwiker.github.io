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
    id: "6",
    current: true,
    title: {
      en: "Development Platform and DevOps",
      no: "Utviklingsplattform og DevOps",
    },
    description: {
      en: "The development platform Pelias is moving onto. I wrote the coding standard, built a Visual Studio project template for new .NET applications, set up an on-prem Azure DevOps Server, and designed and built the build and test environment: two Ubuntu Server VMs running Docker, with a private image registry and a generated test database that verifies data structures and stored procedures. The build fails if the code does not follow the standard, a green build is required to merge to main, and a deploy needs two people to sign off.",
      no: "Utviklingsplattformen Pelias går over til. Jeg skrev kodestandarden, bygget en prosjektmal i Visual Studio for nye .NET-applikasjoner, satte opp en lokal Azure DevOps Server, og designet og bygget bygg- og testmiljøet: to Ubuntu Server-VM-er med Docker, eget image-register og en generert testdatabase som verifiserer datastrukturer og lagrede prosedyrer. Bygget feiler hvis koden ikke følger standarden, grønt bygg kreves for å flette til main, og en utrulling krever godkjenning fra to personer.",
    },
    tags: ["Azure DevOps", "Docker", "Linux", "CI/CD"],
    detailPage: "/projects/dev-platform",
    impact: {
      en: "Designed and built, now running",
      no: "Designet og bygget, i drift",
    },
  },
  {
    id: "5",
    current: true,
    title: {
      en: "Pelias Access Suite",
      no: "Pelias Access Suite",
    },
    description: {
      en: "Pelias' new dashboard and shared login, built on a clear split between identity and access. Pelias ID is an OIDC login service on ASP.NET Identity and OpenIddict that answers only who you are and which tenants you belong to, as an employee, customer, or chain customer. The dashboard owns the application rights, with a rights model designed to carry over into the applications built on top. Includes two-factor login, self-service access requests, an admin panel, and an audit log. Started as a pitch I wrote on my own initiative; management approved it and made me lead developer.",
      no: "Pelias' nye dashboard og felles innlogging, bygget på et tydelig skille mellom identitet og tilgang. Pelias ID er en OIDC-innloggingstjeneste på ASP.NET Identity og OpenIddict som kun svarer på hvem du er og hvilke tenants du tilhører, som ansatt, kunde eller kjedekunde. Dashboardet eier applikasjonsrettighetene, med en rettighetsmodell som skal følge med inn i applikasjonene som bygges videre. Omfatter tofaktorinnlogging, selvbetjent tilgangsforespørsel, adminpanel og revisjonslogg. Startet som et forslag jeg skrev på eget initiativ; ledelsen vedtok det og ga meg rollen som hovedutvikler.",
    },
    tags: ["C#", ".NET 10", "Blazor", "OIDC"],
    detailPage: "/projects/pelias-access-suite",
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
      en: "A standalone email engine that offloads a web server by moving email generation from legacy ASP Classic code into a modern C# service. Runs as a scheduled task with config-driven origins. Includes a web dashboard for statistics, searchable queue, and manual re-queuing. Removed on average more than an hour of downtime a day.",
      no: "En frittstående e-postmotor som avlaster webserveren ved å flytte e-postgenerering fra gammel ASP Classic-kode inn i en moderne C#-tjeneste. Kjører som planlagt oppgave med konfigurasjonsdrevne kilder. Inkluderer et webdashboard for statistikk, søkbar kø og manuell re-køing. Fjernet i snitt over en time nedetid hver dag.",
    },
    tags: ["C#", "ASP.NET Core", "MSSQL", "Automation"],
    detailPage: "/projects/email-worker",
    impact: {
      en: "Removed 1h+ of downtime a day on average",
      no: "Fjernet i snitt 1t+ nedetid hver dag",
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
