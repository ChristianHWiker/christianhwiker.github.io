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
    currentRole: { en: "Lead developer on Pelias Access Suite", no: "Hovedutvikler for Pelias Access Suite" },
    currentDesc: {
      en: "Building the dashboard and shared login every Pelias user will sign in through, and the development platform the company is moving onto",
      no: "Bygger dashboardet og den felles innloggingen alle Pelias-brukere skal logge inn gjennom, og utviklingsplattformen firmaet går over til",
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
    current: { en: "Current project", no: "Pågående prosjekt" },
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
      DevOps: { en: "DevOps", no: "DevOps" },
      Tools: { en: "Tools", no: "Verktøy" },
      Mobile: { en: "Mobile", no: "Mobil" },
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
        en: "The company's web server was responsible for generating and sending emails as part of everyday operations. Because emails were created and sent inline with page requests, the server would hang while it processed large batches, on average more than an hour of downtime a day. During those hangs, the entire website was slow or unresponsive for everyone.",
        no: "Selskapets webserver sto for å generere og sende e-poster som en del av den daglige driften. Fordi e-postene ble opprettet og sendt inline med sideforespørslene, hang serveren mens den behandlet store batcher, i snitt over en time nedetid hver dag. I disse periodene var hele nettsiden treg eller utilgjengelig for alle brukerne.",
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
  mise: {
    title: { en: "Recipe Calculator (mise)", no: "Oppskriftskalkulator (mise)" },
    counters: {
      parserTests: { en: "Parser unit tests", no: "Parser-enhetstester" },
      densities: { en: "Ingredient densities", no: "Ingredienstettheter" },
      flavors: { en: "Build flavors", no: "Byggvarianter" },
    },
    background: {
      heading: { en: "Why I built it", no: "Hvorfor jeg lagde den" },
      body: {
        en: "I was trying to scale up a homemade recipe and kept hitting the same annoyance: the amounts never divide cleanly, and converting between cups and grams by hand is slow guesswork. So I built mise to take over the math. You enter a recipe once, tell it how much of one ingredient you actually have, and it rescales everything else proportionally. The whole thing is coded around general ingredient ratios tuned to be a solid, honest approximation rather than a false promise of perfect accuracy.",
        no: "Jeg holdt på å skalere opp en hjemmelaget oppskrift og ble stadig irritert over det samme: mengdene går aldri opp i pene tall, og å regne om mellom kopp og gram for hånd blir ren gjettelek. Så jeg bygde mise for å ta over utregningen. Du legger inn en oppskrift én gang, forteller hvor mye du faktisk har av én ingrediens, og appen skalerer alt det andre proporsjonalt. Hele appen er bygget rundt generelle ingrediensforhold finjustert til å være en solid og ærlig tilnærming, framfor et falskt løfte om perfekt nøyaktighet.",
      },
    },
    whatItDoes: {
      heading: { en: "What it does", no: "Hva den gjør" },
      items: {
        en: [
          ["Reverse scaling", "enter the amount of a limiting ingredient (“I only have 320 g flour”) and the app rescales the entire recipe to match, with a live yield preview."],
          ["Exact rational quantities", "amounts are stored as integer fractions, not decimals. Scaling 1/3 cup by 3/2 gives exactly 1/2 cup, and you can display results as mixed numbers, Unicode fractions, or decimals."],
          ["Ingredient-aware conversion", "a cup of flour and a cup of sugar do not weigh the same, so a curated density table converts cups to grams per ingredient instead of using one blanket factor."],
          ["OCR recipe capture", "photograph a printed or on-screen recipe and on-device ML Kit text recognition parses the ingredients straight into the editor, with a parser hardened against real-world OCR mistakes."],
        ],
        no: [
          ["Omvendt skalering", "legg inn mengden av en begrensende ingrediens (“jeg har bare 320 g mel”), så skalerer appen hele oppskriften til å passe, med en fortløpende forhåndsvisning av resultatet."],
          ["Eksakte brøkmengder", "mengdene lagres som brøker med heltall, ikke som desimaltall. Å skalere 1/3 kopp med 3/2 gir nøyaktig 1/2 kopp, og du kan vise resultatet som blandede tall, Unicode-brøker eller desimaltall."],
          ["Ingrediensbevisst konvertering", "en kopp mel og en kopp sukker veier ikke det samme, så en nøye sammensatt tetthetstabell konverterer kopp til gram per ingrediens i stedet for å bruke én felles faktor."],
          ["OCR-innlesing av oppskrifter", "ta bilde av en oppskrift på papir eller skjerm, så gjenkjenner ML Kit ingrediensene på enheten og legger dem rett inn i editoren, med en parser som er herdet mot typiske OCR-feil."],
        ],
      } as Record<Lang, [string, string][]>,
    },
    approximation: {
      heading: { en: "Honest approximation", no: "Ærlig tilnærming" },
      intro: {
        en: "Ingredient-aware conversion is best-effort by nature, so I scoped it as honest approximation rather than claiming universal correctness. Three design choices keep it trustworthy:",
        no: "Ingrediensbevisst konvertering er i sin natur et anslag, så jeg rammet den inn som en ærlig tilnærming framfor å påstå at den er universelt korrekt. Tre designvalg gjør at man kan stole på den:",
      },
      items: {
        en: [
          ["Never confidently wrong", "the density lookup is a finite curated map. For anything not in it, the app leaves the quantity in cups rather than inventing a gram value. It is either approximately right for a known ingredient, or honestly unconverted for an unknown one, but it never shows a fabricated number."],
          ["Correct is a band, not a number", "density depends on whether flour is sifted, scooped, or packed, plus brand and humidity, and even authoritative sources disagree (120 g, 125 g, or 136 g per cup of flour). The table picks a documented convention, and rounding snaps mass to a 5 g grid, so it reports 375 g, not 374.6 g, because the input was never that precise to begin with."],
          ["Fuzziness stays contained", "the parts that must be exact, the rational quantities and the reverse-scaling math, use integer arithmetic with no floating point. The only inherently approximate piece, density conversion, is isolated in its own module, and every per-ingredient gram value is editable, so the table is a smart default rather than a hard constraint."],
        ],
        no: [
          ["Aldri skråsikkert feil", "tetthetsoppslaget er en begrenset, nøye sammensatt tabell. For alt som ikke finnes i den, lar appen mengden stå i kopp i stedet for å finne på en gram-verdi. Den er enten omtrent riktig for en kjent ingrediens, eller så lar den en ukjent ingrediens stå ukonvertert, men den viser aldri et oppdiktet tall."],
          ["Riktig er et spenn, ikke ett tall", "tetthet avhenger av om melet er siktet, løst fylt eller pakket, i tillegg til merke og luftfuktighet, og selv anerkjente kilder er uenige (120 g, 125 g eller 136 g per kopp mel). Tabellen velger en dokumentert konvensjon, og avrundingen runder massen til nærmeste 5 gram, så den oppgir 375 g, ikke 374,6 g, fordi utgangspunktet aldri var så presist."],
          ["Usikkerheten er innkapslet", "delene som må være eksakte, brøkmengdene og skaleringsmatematikken, bruker heltallsaritmetikk uten flyttall. Den eneste delen som i seg selv er omtrentlig, tetthetskonverteringen, er isolert i sin egen modul, og hver gram-verdi per ingrediens kan redigeres, så tabellen er en smart standardverdi framfor en fast begrensning."],
        ],
      } as Record<Lang, [string, string][]>,
    },
    flavors: {
      heading: { en: "Two builds, one codebase", no: "To bygg, én kodebase" },
      body: {
        en: "The same code produces two APKs through Gradle product flavors. The Play build is the clean Play Store release. The portfolio build adds a security stack: a biometric app lock, Keystore-backed encrypted preferences, and a Play Integrity check. The difference is not scattered through the UI with build-flag checks. Each capability sits behind an interface (app lock, secure preferences, integrity) with flavor-specific implementations bound through Hilt, so the screens never know which build they are running in.",
        no: "Den samme koden lager to APK-er gjennom Gradle product flavors. Play-bygget er den rene Play Store-utgaven. Portfolio-bygget legger til et sikkerhetslag: en biometrisk app-lås, Keystore-baserte krypterte innstillinger og en Play Integrity-sjekk. Forskjellen er ikke spredd utover grensesnittet med byggflagg-sjekker. Hver funksjon ligger bak et grensesnitt (app-lås, sikre innstillinger, integritetssjekk) med variantspesifikke implementasjoner koblet inn via Hilt, så skjermbildene vet aldri hvilket bygg de kjører i.",
      },
    },
    built: {
      heading: { en: "How it's built", no: "Hvordan den er bygget" },
      body: {
        en: "mise is Kotlin 2.2 and Jetpack Compose with Material 3, following an MVVM architecture with unidirectional state and Coroutines. Hilt handles dependency injection, Room stores recipes locally with migration-tested schemas, and CameraX plus ML Kit power the OCR capture. The core logic (rationals, units, density, and the parser) lives in standalone pure-function libraries with their own unit tests, so the tricky math is verified in isolation from the UI. It is local-only, with no accounts and no cloud sync.",
        no: "mise er Kotlin 2.2 og Jetpack Compose med Material 3, bygget på en MVVM-arkitektur med enveis tilstandsflyt og Coroutines. Hilt håndterer dependency injection, Room lagrer oppskrifter lokalt med migrasjonstestede skjemaer, og CameraX og ML Kit driver OCR-innlesingen. Kjernelogikken (brøker, enheter, tetthet og parseren) ligger i frittstående biblioteker med rene funksjoner og egne enhetstester, så den vanskelige matematikken er verifisert isolert fra grensesnittet. Appen er kun lokal, uten kontoer og uten skysynkronisering.",
      },
    },
  },
  peliasAccessSuite: {
    title: { en: "Pelias Access Suite", no: "Pelias Access Suite" },
    status: { en: "In active development", no: "Under aktiv utvikling" },
    counters: {
      clicks: {
        en: "Max clicks from login to tool",
        no: "Maks klikk fra innlogging til verktøy",
      },
      groups: { en: "Tenant types behind one login", no: "Tenant-typer bak én innlogging" },
      services: { en: "Services: identity and access", no: "Tjenester: identitet og tilgang" },
    },
    background: {
      heading: { en: "From pitch to project", no: "Fra forslag til prosjekt" },
      body: {
        en: "This project started as a written pitch I put together on my own initiative. Pelias has plenty of internal tools, but they're buried several menu levels deep on the internal website: field technicians keep private bookmarks to avoid the navigation, customers never discover the self-service tools that exist, and new hires spend weeks learning where things live. It's not a content problem, it's a navigation problem. Management approved the pitch and made me lead developer. This is what I'm working on right now.",
        no: "Prosjektet startet som et skriftlig forslag jeg satte sammen på eget initiativ. Pelias har mange interne verktøy, men de ligger begravet flere menynivåer ned på den interne nettsiden: teknikere i felt holder seg med private bokmerker for å slippe navigeringen, kunder oppdager aldri selvbetjeningsverktøyene som finnes, og nyansatte bruker uker på å lære seg hvor ting bor. Det er ikke et innholdsproblem, det er et navigasjonsproblem. Ledelsen vedtok forslaget og ga meg rollen som hovedutvikler. Dette er det jeg jobber med akkurat nå.",
      },
    },
    whatItIs: {
      heading: { en: "What it is", no: "Hva det er" },
      body: {
        en: "Pelias Access Suite will be the front page for everyone who logs in at Pelias: employees, customers, and chain customers. Two principles drive the design: every tool is at most one click from login, and you only see what you actually use. A technician gets the map application and support tickets at the top, a customer sees their self-service tools, and an administrator sees the operations tooling.",
        no: "Pelias Access Suite skal bli forsiden for alle som logger inn hos Pelias: ansatte, kunder og kjedekunder. To prinsipper styrer designet: hvert verktøy er maks ett klikk fra innlogging, og du ser kun det du faktisk bruker. En tekniker får kartprogrammet og support-tickets øverst, en kunde ser sine selvbetjeningsverktøy, og en administrator ser driftsverktøyene.",
      },
    },
    features: {
      heading: { en: "Key features", no: "Hovedfunksjoner" },
      items: {
        en: [
          ["Personal dashboard", "a role-based front page that only shows the tools the user has access to, with no menu hunting."],
          ["Self-service access requests", "users discover available tools and request access with a justification; an administrator approves or rejects with one click."],
          ["Live operational status", "a background service checks health endpoints on the underlying applications and pushes status changes live to the browser, so users see that a system is down before they click into it."],
          ["Admin panel", "central management of registered tools, user permissions, and access requests, including off-boarding in a single operation when someone leaves."],
          ["Shared audit log", "logins, permission changes, and status changes are logged automatically with timestamp, user, and context."],
          ["Announcements", "planned maintenance and incidents are published from the admin panel and shown as banners or dashboard cards to the users they affect."],
        ],
        no: [
          ["Personlig dashboard", "en rollebasert forside som kun viser verktøyene brukeren har tilgang til, uten menyjakt."],
          ["Selvbetjent tilgangsforespørsel", "brukere oppdager tilgjengelige verktøy og ber om tilgang med en begrunnelse; en administrator godkjenner eller avslår med ett klikk."],
          ["Sanntids driftsstatus", "en bakgrunnstjeneste sjekker helse-endepunkter på de underliggende applikasjonene og pusher statusendringer live til nettleseren, så brukerne ser at et system er nede før de klikker seg inn."],
          ["Adminpanel", "sentral håndtering av registrerte verktøy, brukerrettigheter og tilgangsforespørsler, inkludert off-boarding i én operasjon når noen slutter."],
          ["Felles revisjonslogg", "innlogginger, rettighetsendringer og statusendringer logges automatisk med tidsstempel, bruker og kontekst."],
          ["Kunngjøringer", "planlagt vedlikehold og hendelser publiseres fra adminpanelet og vises som banner eller dashboard-kort til brukerne det gjelder."],
        ],
      } as Record<Lang, [string, string][]>,
    },
    auth: {
      heading: {
        en: "Identity and access are separate",
        no: "Identitet og tilgang er adskilt",
      },
      body: {
        en: "The architecture rests on a clear split. Pelias ID is an OIDC login service built on ASP.NET Identity and OpenIddict, and it answers two questions only: who you are, and which tenants you belong to, as an employee, a customer, or a chain customer. It knows nothing about application rights. The dashboard owns those, with a rights model designed to carry over into the applications that get built on top, so an application does not have to invent its own permission scheme. Two-factor login, self-service access requests, the admin panel, and an audit log that records everything, including when I give myself administrator access, all sit on that split.",
        no: "Arkitekturen hviler på et tydelig skille. Pelias ID er en OIDC-innloggingstjeneste bygget på ASP.NET Identity og OpenIddict, og svarer kun på to spørsmål: hvem du er, og hvilke tenants du tilhører, som ansatt, kunde eller kjedekunde. Den vet ingenting om applikasjonsrettigheter. Dashboardet eier dem, med en rettighetsmodell som er laget for å følge med inn i applikasjonene som bygges videre, så en applikasjon slipper å finne opp sin egen rettighetsmodell. Tofaktorinnlogging, selvbetjent tilgangsforespørsel, adminpanelet og en revisjonslogg der alt registreres, også når jeg gir meg selv administratortilgang, ligger alle på dette skillet.",
      },
    },
    statusSection: {
      heading: { en: "Where it stands", no: "Status" },
      body: {
        en: "Pelias ID is essentially finished, but it is not in use. The dashboard is a work in progress, and none of the applications that will sit behind the suite have been built yet.",
        no: "Pelias ID er i praksis ferdig utviklet, men er ikke tatt i bruk. Dashboardet er under arbeid, og ingen av applikasjonene som skal ligge bak suiten er bygget ennå.",
      },
    },
    built: {
      heading: { en: "How it's built", no: "Hvordan den bygges" },
      body: {
        en: ".NET 10 and Blazor Web App (InteractiveServer) on SQL Server, with EF Core for the schema and writes, and Dapper available for performance-sensitive reads like the audit log. Live status updates are pushed over the Blazor Server channel without page refreshes. The design is a tailored Pelias profile in red and white with glassmorphism and micro-animations.",
        no: ".NET 10 og Blazor Web App (InteractiveServer) på SQL Server, med EF Core for skjema og skriving, og Dapper tilgjengelig for ytelsessensitive lesinger som revisjonsloggen. Statusoppdateringer pushes live over Blazor Server-kanalen uten sideoppdateringer. Designet er en skreddersydd Pelias-profil i rødt og hvitt med glassmorfisme og mikroanimasjoner.",
      },
    },
    role: {
      heading: { en: "My role", no: "Min rolle" },
      body: {
        en: "I wrote the pitch, designed the architecture, and lead the development. This is my current day-to-day work at Pelias.",
        no: "Jeg skrev forslaget, designet arkitekturen og leder utviklingen. Dette er det jeg jobber med til daglig hos Pelias.",
      },
    },
  },
  devPlatform: {
    title: {
      en: "Development Platform and DevOps",
      no: "Utviklingsplattform og DevOps",
    },
    status: { en: "Running", no: "I drift" },
    counters: {
      vms: { en: "Ubuntu Server VMs running", no: "Ubuntu Server-VM-er i drift" },
      approvals: { en: "Sign-offs before a deploy", no: "Godkjenninger før en utrulling" },
      standard: {
        en: "Coding standard for every .NET project",
        no: "Kodestandard for alle .NET-prosjekter",
      },
    },
    background: {
      heading: { en: "How it started", no: "Hvordan det startet" },
      body: {
        en: "After the email engine showed how much faster we could build with AI tools, the IT manager asked me to define the coding standard and the framework developers work inside. I wanted the rules to be something the build checks rather than something everyone has to remember, so the standard, the project template, and the pipelines were designed as one piece of work.",
        no: "Etter at e-post sendemotoren viste hvor mye raskere vi kunne utvikle med AI-verktøy, fikk jeg i oppgave av IT-lederen å utforme kodestandarden og rammene utviklerne jobber innenfor. Jeg ville at reglene skulle være noe bygget sjekker, framfor noe hver enkelt må huske, så kodestandarden, prosjektmalen og pipelinene ble designet som én sammenhengende jobb.",
      },
    },
    whatItIs: {
      heading: { en: "What it is", no: "Hva det er" },
      body: {
        en: "A new .NET application starts from a Visual Studio project template with the structure, analyzers, and formatting rules already in place, so the first commit already follows the standard. Builds run as YAML pipelines on an Azure DevOps Server we host ourselves, which was the practical choice for how the company works. The build and test environment is two Ubuntu Server VMs I designed and built, and it is running today.",
        no: "En ny .NET-applikasjon starter fra en prosjektmal i Visual Studio med struktur, analysatorer og formateringsregler på plass, så den første commiten følger standarden. Bygg kjører som YAML-pipelines på en Azure DevOps Server vi drifter selv, som var det praktiske valget for måten firmaet jobber på. Bygg- og testmiljøet er to Ubuntu Server-VM-er jeg har designet og bygget, og det er i drift i dag.",
      },
    },
    features: {
      heading: { en: "How it works", no: "Hvordan det fungerer" },
      items: {
        en: [
          ["Build server", "an Ubuntu Server running Docker with Portainer, SQL Server, and a private image registry. Every image the pipelines produce is pushed there."],
          ["Test server", "runs the images with Docker Compose against a generated test database. Generating it verifies that the data structures and stored procedures the application expects are actually there."],
          ["Formatting is part of the build", "the pipeline runs dotnet format, and the build fails if the code does not match the standard, so nobody spends review time on whitespace."],
          ["Green build to merge", "main is protected. A pull request cannot be merged unless the build passes."],
          ["Two people sign off on a deploy", "releases to staging and to production both need approval from two people, so no single person can push a change all the way out alone."],
          ["Separated environments", "test and the coming production environment are isolated from each other and pull separately from the same registry, with traffic in and out kept tightly limited."],
          ["Documentation as I go", "I built an MCP server that lets Claude write the work up in Scrum format while I am doing it, so the documentation matches what was actually built."],
        ],
        no: [
          ["Byggserver", "en Ubuntu Server med Docker, Portainer, SQL Server og et eget image-register. Alle images pipelinene lager, blir pushet dit."],
          ["Testserver", "kjører imagene med Docker Compose mot en generert testdatabase. Genereringen verifiserer at datastrukturene og de lagrede prosedyrene applikasjonen forventer, faktisk finnes."],
          ["Formatering er en del av bygget", "pipelinen kjører dotnet format, og bygget feiler hvis koden ikke følger standarden, så ingen bruker tid på formatering i kodegjennomgang."],
          ["Grønt bygg for å flette", "main er beskyttet. En pull request kan ikke flettes uten at bygget går grønt."],
          ["To personer godkjenner en utrulling", "utrulling til både staging og produksjon krever godkjenning fra to personer, så ingen kan sende en endring hele veien ut alene."],
          ["Adskilte miljøer", "test og det kommende produksjonsmiljøet er isolert fra hverandre og henter hver for seg fra det samme registeret, med strengt begrenset trafikk inn og ut."],
          ["Dokumentasjon underveis", "jeg bygget en MCP-server som lar Claude skrive opp arbeidet i Scrum-format mens jeg holder på, så dokumentasjonen stemmer med det som faktisk ble bygget."],
        ],
      } as Record<Lang, [string, string][]>,
    },
    built: {
      heading: { en: "How it's built", no: "Hvordan det er bygget" },
      body: {
        en: "Azure DevOps Server on Windows Server handles source control, the YAML pipelines, and the approval gates. The build and test machines are Ubuntu Server with Docker and Docker Compose, managed through Portainer, with SQL Server and the image registry running as containers on the build server. I have also set up Windows test servers with IIS for the applications that run there.",
        no: "Azure DevOps Server på Windows Server håndterer kildekontroll, YAML-pipelinene og godkjenningsstegene. Bygg- og testmaskinene er Ubuntu Server med Docker og Docker Compose, styrt gjennom Portainer, med SQL Server og image-registeret som containere på byggserveren. Jeg har også satt opp Windows-testservere med IIS for applikasjonene som kjører der.",
      },
    },
    statusSection: {
      heading: { en: "Where it stands", no: "Status" },
      body: {
        en: "The build server and the test server are running. The third VM for production is planned, but not built yet. I am the only developer on the new platform so far. The other developers are being moved over gradually so nobody is left behind, and that pace is deliberate.",
        no: "Byggserveren og testserveren er i drift. Den tredje VM-en for produksjon er planlagt, men ikke bygget ennå. Jeg er foreløpig eneste utvikler på den nye plattformen. De andre utviklerne flyttes over gradvis så ingen blir hengende etter, og det tempoet er bevisst.",
      },
    },
    role: {
      heading: { en: "My role", no: "Min rolle" },
      body: {
        en: "I wrote the coding standard, built the project template, set up the Azure DevOps Server, and designed and built both Linux VMs, the pipelines, and the approval rules.",
        no: "Jeg skrev kodestandarden, bygget prosjektmalen, satte opp Azure DevOps Server, og designet og bygget begge Linux-VM-ene, pipelinene og godkjenningsreglene.",
      },
    },
  },
} as const;

export function pick<T extends Pair>(pair: T, lang: Lang): string {
  return pair[lang];
}
