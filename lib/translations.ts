import type { Lang } from "@/components/LanguageProvider";

type Pair = { en: string; no: string };

export const t = {
  nav: {
    home: { en: "Home", no: "Hjem" },
    stack: { en: "Stack", no: "Teknologi" },
    projects: { en: "Projects", no: "Prosjekter" },
    contact: { en: "Contact", no: "Kontakt" },
  },
  langSwitcher: {
    label: { en: "Language", no: "Språk" },
    switchTo: { en: "Bytt til norsk", no: "Switch to English" },
  },
  hero: {
    role: {
      en: "Developer · Data Technician",
      no: "Utvikler · Datatekniker",
    },
    greetingPre: { en: "Hi, I'm ", no: "Hei, jeg heter " },
    introPre: {
      en: "Based in Elverum, Norway. Currently at ",
      no: "Basert i Elverum. Jobber hos ",
    },
    introMid: {
      en: ", where I build standalone services and modern web applications with ",
      no: ", der jeg bygger selvstendige tjenester og moderne webapplikasjoner med ",
    },
    introAnd: { en: ", ", no: ", " },
    introEnd: { en: ", and ", no: " og " },
    introDot: { en: ".", no: "." },
    aiWorkflows: { en: "AI-driven workflows", no: "AI-drevne arbeidsflyter" },
    viewProjects: { en: "View My Projects", no: "Se mine prosjekter" },
    getInTouch: { en: "Get in Touch", no: "Ta kontakt" },
    downloadCv: { en: "Download CV", no: "Last ned CV" },
  },
  glance: {
    heading: { en: "At a Glance", no: "Kort oppsummert" },
    currently: { en: "Currently", no: "Akkurat nå" },
    currentRole: { en: "Developer at Pelias", no: "Utvikler hos Pelias" },
    currentDesc: {
      en: "Building internal tools, services, and data pipelines in C# and .NET",
      no: "Bygger interne verktøy, tjenester og datapipelines med C# og .NET",
    },
    location: { en: "Location", no: "Lokasjon" },
    city: { en: "Elverum, Norway", no: "Elverum, Norge" },
    stackCenter: { en: "Stack", no: "Stack" },
  },
  projectsSection: {
    heading: { en: "Featured Projects", no: "Utvalgte prosjekter" },
  },
  contactSection: {
    heading: { en: "Get in Touch", no: "Ta kontakt" },
    emailLabel: { en: "Email", no: "E-post" },
    githubLabel: { en: "GitHub", no: "GitHub" },
  },
  projectCard: {
    details: { en: "Details", no: "Detaljer" },
    liveDemo: { en: "Live Demo", no: "Live-demo" },
  },
  back: {
    toPortfolio: { en: "Back to portfolio", no: "Tilbake til portefølje" },
  },
  stack: {
    heading: { en: "Tech Stack", no: "Teknologistakk" },
    subtitle: {
      en: "The tools I use and how I use them. Each one earned its place through real projects, not tutorials.",
      no: "Verktøyene jeg bruker, og hvordan jeg bruker dem. Hvert enkelt har tjent sin plass gjennom reelle prosjekter, ikke bare tutorials.",
    },
    categories: {
      Backend: { en: "Backend", no: "Backend" },
      Frontend: { en: "Frontend", no: "Frontend" },
      Data: { en: "Data", no: "Data" },
      Tools: { en: "Tools", no: "Verktøy" },
      "Game Dev": { en: "Game Dev", no: "Spillutvikling" },
    } as Record<string, Pair>,
  },
  notFound: {
    heading: { en: "Page not found", no: "Siden ble ikke funnet" },
    description: {
      en: "The page you're looking for doesn't exist or has been moved.",
      no: "Siden du leter etter finnes ikke, eller har blitt flyttet.",
    },
  },
  emailWorker: {
    title: { en: "Email Worker Service", no: "E-posttjeneste" },
    counters: {
      processed: { en: "Emails processed", no: "E-poster behandlet" },
      origins: { en: "Email origins", no: "E-postkilder" },
      downtime: { en: "Daily downtime (hrs)", no: "Daglig nedetid (timer)" },
    },
    problem: {
      heading: { en: "The problem", no: "Problemet" },
      body: {
        en: "The company's web server was responsible for generating and sending emails as part of everyday operations. Because emails were created and sent inline with page requests, the server would frequently hang, sometimes for over an hour at a time, while it processed large batches. During these hangs, the entire website was slow or unresponsive for everyone.",
        no: "Selskapets webserver sto for å generere og sende e-poster som en del av den daglige driften. Fordi e-postene ble opprettet og sendt inline med sideforespørslene, hang serveren seg jevnlig, av og til i over en time, mens den behandlet store batcher. I disse periodene var hele nettsiden treg eller utilgjengelig for alle brukerne.",
      },
    },
    solution: {
      heading: { en: "The solution", no: "Løsningen" },
      body: {
        en: "I built a standalone service that takes over the entire email pipeline. Instead of the web server creating emails on the spot, it simply drops a request into a database queue. The Email Worker picks up queued items on a schedule, generates the email content, and sends it via SMTP, completely independent of the web server. This eliminated the daily server hangs entirely.",
        no: "Jeg bygde en frittstående tjeneste som tar over hele e-postpipelinen. I stedet for at webserveren oppretter e-poster på stedet, legger den bare en forespørsel i en databasekø. Email Worker plukker opp køen på et skjema, genererer e-postinnholdet og sender det via SMTP, helt uavhengig av webserveren. Dette fjernet de daglige serverhengingene fullstendig.",
      },
    },
    howItWorks: {
      heading: { en: "How it works", no: "Hvordan det fungerer" },
      items: {
        en: [
          "The web server writes email requests to a database queue instead of sending them directly.",
          "The Email Worker runs as a scheduled task, picking up and processing queued emails in batches.",
          "Each email “origin” (insurance, invoices, reports, etc.) has its own configuration, separate templates, retry rules, and SMTP settings.",
          "If an email fails to send, the worker retries it automatically based on configurable rules, and logs the error for review.",
        ],
        no: [
          "Webserveren skriver e-postforespørsler til en databasekø i stedet for å sende dem direkte.",
          "Email Worker kjører som en planlagt oppgave, og plukker opp og behandler køede e-poster i batcher.",
          "Hver e-postkilde (forsikring, fakturaer, rapporter osv.) har sin egen konfigurasjon, separate maler, retry-regler og SMTP-innstillinger.",
          "Hvis en e-post ikke blir sendt, prøver tjenesten automatisk på nytt basert på konfigurerbare regler, og logger feilen for gjennomgang.",
        ],
      },
    },
    dashboard: {
      heading: { en: "The web dashboard", no: "Webdashbordet" },
      intro: {
        en: "A companion web app gives full visibility into what the service is doing:",
        no: "En tilhørende webapplikasjon gir full innsikt i hva tjenesten gjør:",
      },
      items: {
        en: [
          ["Dashboard", "live overview of how many emails are queued, sent, or failed, broken down by origin."],
          ["Email Queue", "searchable list of every email with status, origin, and subject. You can click into any email to see its full details, recipients, and a timeline of what happened."],
          ["Logs", "filterable log of every operation the service has performed, useful for debugging delivery issues."],
          ["Settings", "per-origin configuration for retry behavior, logging levels, SMTP credentials, and database connections."],
        ],
        no: [
          ["Dashboard", "sanntidsoversikt over hvor mange e-poster som er i kø, sendt eller feilet, fordelt per kilde."],
          ["E-postkø", "søkbar liste over alle e-poster med status, kilde og emne. Du kan klikke inn på en e-post og se alle detaljer, mottakere og en tidslinje over hva som har skjedd."],
          ["Logger", "filtrerbar logg over alle operasjoner tjenesten har utført, nyttig for å feilsøke leveringsproblemer."],
          ["Innstillinger", "konfigurasjon per kilde for retry-regler, loggnivåer, SMTP-innloggingsdetaljer og databasekoblinger."],
        ],
      } as Record<Lang, [string, string][]>,
    },
    result: {
      heading: { en: "Result", no: "Resultat" },
      body: {
        en: "The service has been running in production since deployment. The daily server hangs that used to disrupt the entire company are gone, and the operations team can now monitor and troubleshoot email delivery themselves through the dashboard, without needing developer involvement.",
        no: "Tjenesten har kjørt i produksjon siden den ble satt ut. De daglige serverhengingene som pleide å forstyrre hele selskapet er borte, og driftsteamet kan nå overvåke og feilsøke e-postleveranser selv via dashbordet, uten å involvere utviklere.",
      },
    },
  },
  kartprogram: {
    title: { en: "Blazor Map Application", no: "Blazor-kartapplikasjon" },
    counters: {
      roles: { en: "User roles", no: "Brukerroller" },
      mapTypes: {
        en: "Map types (indoor + outdoor)",
        no: "Karttyper (inne + ute)",
      },
      prototype: {
        en: "Prototype to convince mgmt",
        no: "Prototype som overbeviste ledelsen",
      },
    },
    background: {
      heading: { en: "Background", no: "Bakgrunn" },
      body: {
        en: "Pelias needed a custom mapping tool for daily operations across multiple client companies. The original plan was to outsource the entire development to an external company. I built a working prototype to evaluate whether it was feasible to keep in-house, and after seeing it, the company decided to do exactly that.",
        no: "Pelias trengte et skreddersydd kartverktøy for daglig drift på tvers av flere kundeselskaper. Den opprinnelige planen var å sette hele utviklingen ut til et eksternt selskap. Jeg bygde en fungerende prototype for å vurdere om det var mulig å holde utviklingen internt, og etter å ha sett den, bestemte selskapet seg for akkurat det.",
      },
    },
    whatItDoes: {
      heading: { en: "What it does", no: "Hva det gjør" },
      body1: {
        en: "The application is a combined map and trend tool. At its core, it lets users work with maps, both outdoor and indoor, and attach live data to the things they draw on them. Each map is tied to a specific project or work order, making it a practical tool for day-to-day operations rather than just a viewer.",
        no: "Applikasjonen er et kombinert kart- og trendverktøy. I kjernen lar det brukerne jobbe med kart, både utendørs og innendørs, og knytte levende data til objektene de tegner på kartet. Hvert kart er knyttet til et spesifikt prosjekt eller en arbeidsordre, noe som gjør det til et praktisk verktøy for daglig drift framfor bare en visning.",
      },
      body2: {
        en: "For example, a field worker can open a map for their current order, see what objects are placed, check the latest readings or observations for each one, and register new data, all from the same interface.",
        no: "For eksempel kan en feltarbeider åpne kartet for sin pågående ordre, se hvilke objekter som er plassert, sjekke de siste avlesningene eller observasjonene for hvert objekt, og registrere nye data, alt fra samme grensesnitt.",
      },
    },
    features: {
      heading: { en: "Key features", no: "Hovedfunksjoner" },
      items: {
        en: [
          ["Interactive maps", "full pan-and-zoom maps built on OpenStreetMap, covering all of Norway. Indoor maps are also supported."],
          ["Drawing tools", "sketch outlines, place markers, and annotate areas directly on the map. Each drawn object can carry structured data."],
          ["Trend data", "attach readings, observations, and measurements to map objects and track them over time. Activity history shows how values change across visits."],
          ["Project & order linking", "every map belongs to a project and can be linked to specific work orders, connecting the visual map work to the company's operational workflow."],
          ["Multi-page projects", "organize work across multiple map pages within a single project, similar to slides in a presentation."],
          ["Multi-tenant", "the system supports multiple companies with separated data. Different user roles (administrators, regular users, and read-only customer accounts) control who can see and do what."],
        ],
        no: [
          ["Interaktive kart", "kart med full panorering og zoom bygget på OpenStreetMap, som dekker hele Norge. Innendørskart støttes også."],
          ["Tegneverktøy", "skisser omriss, plasser markører og annoter områder direkte på kartet. Hvert tegnet objekt kan ha strukturert data knyttet til seg."],
          ["Trenddata", "legg til avlesninger, observasjoner og målinger på kartobjekter, og spor dem over tid. Aktivitetshistorikken viser hvordan verdier endrer seg mellom besøk."],
          ["Prosjekt- og ordrekobling", "hvert kart tilhører et prosjekt og kan kobles til spesifikke arbeidsordrer, som knytter det visuelle kartarbeidet til selskapets operative arbeidsflyt."],
          ["Flersidede prosjekter", "organiser arbeidet på tvers av flere kartsider i ett og samme prosjekt, på samme måte som lysbilder i en presentasjon."],
          ["Flerleietaker", "systemet støtter flere selskaper med atskilte data. Ulike brukerroller (administratorer, vanlige brukere og kundekontoer med lesetilgang) styrer hvem som kan se og gjøre hva."],
        ],
      } as Record<Lang, [string, string][]>,
    },
    built: {
      heading: { en: "How it's built", no: "Hvordan det er bygget" },
      body: {
        en: "The application is a Blazor hybrid solution running on .NET. The frontend and backend are cleanly separated, the client application communicates with a dedicated API for all data operations. Map rendering is handled client-side through JavaScript interop, while the server manages data persistence, authentication, and business logic.",
        no: "Applikasjonen er en Blazor-hybridløsning som kjører på .NET. Frontend og backend er tydelig adskilt, klientapplikasjonen kommuniserer med et dedikert API for alle dataoperasjoner. Kartrendering håndteres på klientsiden via JavaScript-interop, mens serveren tar seg av datapersistering, autentisering og forretningslogikk.",
      },
    },
    role: {
      heading: { en: "My role", no: "Min rolle" },
      body: {
        en: "I built the prototype that convinced the company to keep the project in-house, and have been the primary developer since. This includes the full frontend, the API layer, the data model, and the map rendering integration.",
        no: "Jeg bygde prototypen som overbeviste selskapet om å holde prosjektet internt, og har vært hovedutvikler siden. Det inkluderer hele frontend, API-laget, datamodellen og integrasjonen for kartrendering.",
      },
    },
  },
} as const;

export function pick<T extends Pair>(pair: T, lang: Lang): string {
  return pair[lang];
}
