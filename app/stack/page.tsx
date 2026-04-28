"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";

interface TechDetail {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: { en: string; no: string };
}

const techs: TechDetail[] = [
  {
    id: "csharp",
    name: "C#",
    icon: "/icons/csharp.svg",
    category: "Backend",
    description: {
      en: "My core language. Used to build the EmailWorker engine, a standalone service that replaced legacy ASP Classic email handling at Pelias. Also the backbone of most internal tools and services I develop.",
      no: "Mitt viktigste språk. Brukt til å bygge EmailWorker-motoren, en frittstående tjeneste som erstattet den gamle ASP Classic-baserte e-posthåndteringen hos Pelias. Også ryggraden i de fleste interne verktøyene og tjenestene jeg utvikler.",
    },
  },
  {
    id: "dotnet",
    name: ".NET",
    icon: "/icons/dotnet.svg",
    category: "Backend",
    description: {
      en: "The framework behind the EmailWorker and all internal tooling at Pelias. I use it for building APIs, background services, and web applications.",
      no: "Rammeverket bak EmailWorker og alt internt verktøy hos Pelias. Jeg bruker det til å bygge APIer, bakgrunnstjenester og webapplikasjoner.",
    },
  },
  {
    id: "aspnet",
    name: "ASP.NET Core",
    icon: "/icons/aspnet.svg",
    category: "Backend",
    description: {
      en: "Powers the web APIs and dashboards I build. The EmailWorker's statistics dashboard and queue management interface both run on ASP.NET Core.",
      no: "Driver webAPIene og dashbordene jeg bygger. Både statistikkdashbordet og køhåndteringsgrensesnittet til EmailWorker kjører på ASP.NET Core.",
    },
  },
  {
    id: "blazor",
    name: "Blazor",
    icon: "/icons/blazor.svg",
    category: "Backend",
    description: {
      en: "Built the web interfaces for both the map program and the EmailWorker at Pelias. Blazor lets me stay in C# across the full stack, which keeps things consistent and fast to develop.",
      no: "Bygde webgrensesnittene for både kartprogrammet og EmailWorker hos Pelias. Blazor lar meg holde meg til C# gjennom hele stacken, noe som gir konsistens og rask utvikling.",
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    category: "Frontend",
    description: {
      en: "Used alongside ASP Classic for the Pelias web pages. Also comes into play across various frontend work and scripting tasks.",
      no: "Brukt sammen med ASP Classic for Pelias-nettsidene. Også aktuelt i ulike frontend-oppgaver og skripting.",
    },
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    category: "Frontend",
    description: {
      en: "Used for this portfolio site. I wanted hands-on experience with typed frontend development and modern tooling outside of the .NET ecosystem.",
      no: "Brukt for denne porteføljesiden. Jeg ville ha praktisk erfaring med typet frontend-utvikling og moderne verktøy utenfor .NET-økosystemet.",
    },
  },
  {
    id: "react",
    name: "React",
    icon: "/icons/react.svg",
    category: "Frontend",
    description: {
      en: "The UI library behind this portfolio. Picked it up to broaden my frontend skills beyond Blazor and understand the component model that most of the web runs on.",
      no: "UI-biblioteket bak denne porteføljen. Plukket det opp for å utvide frontend-ferdighetene mine utover Blazor og forstå komponentmodellen som store deler av nettet kjører på.",
    },
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    category: "Frontend",
    description: {
      en: "Framework for this portfolio, static export, file-based routing, view transitions, and Turbopack. Chose it to get real experience with the React ecosystem and modern deployment workflows.",
      no: "Rammeverket for denne porteføljen, statisk eksport, filbasert ruting, view transitions og Turbopack. Valgte det for å få reell erfaring med React-økosystemet og moderne deployment-arbeidsflyter.",
    },
  },
  {
    id: "sqlserver",
    name: "SQL Server",
    icon: "/icons/sqlserver.svg",
    category: "Data",
    description: {
      en: "The database behind both the EmailWorker and the map program at Pelias. I write and optimize queries, design schemas, and manage stored procedures for production workloads.",
      no: "Databasen bak både EmailWorker og kartprogrammet hos Pelias. Jeg skriver og optimaliserer spørringer, designer skjemaer og forvalter lagrede prosedyrer for produksjonsarbeid.",
    },
  },
  {
    id: "dapper",
    name: "Dapper",
    icon: "/icons/dapper.svg",
    category: "Data",
    description: {
      en: "My go-to for SQL connections in C#. Used as the data access layer in both the map program and EmailWorker, lightweight, fast, and gives me full control over the queries.",
      no: "Mitt foretrukne valg for SQL-tilkoblinger i C#. Brukt som datatilgangslag i både kartprogrammet og EmailWorker, lettvekts, raskt og gir full kontroll over spørringene.",
    },
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    category: "Tools",
    description: {
      en: "Runtime for this portfolio's dev server and build tooling. Also used for scripting and automation tasks outside of .NET.",
      no: "Runtime for dev-serveren og byggeverktøyet til denne porteføljen. Også brukt til skripting og automatisering utenfor .NET.",
    },
  },
  {
    id: "git",
    name: "Git",
    icon: "/icons/git.svg",
    category: "Tools",
    description: {
      en: "Version control for everything. All projects at Pelias and my personal work use Git. Branching, PRs, and proper history are non-negotiable.",
      no: "Versjonskontroll for alt. Alle prosjektene hos Pelias og mitt eget personlige arbeid bruker Git. Brancher, PR-er og ordentlig historikk er et must.",
    },
  },
  {
    id: "cpp",
    name: "C++",
    icon: "/icons/cpp.svg",
    category: "Backend",
    description: {
      en: "My entry point into programming. Studied game technology and simulations at university, where C++ was the foundation for everything from engine work to simulation projects.",
      no: "Mitt inngangspunkt til programmering. Studerte spillteknologi og simuleringer på universitetet, der C++ var grunnlaget for alt fra engine-arbeid til simuleringsprosjekter.",
    },
  },
  {
    id: "unity",
    name: "Unity",
    icon: "/icons/unity.svg",
    category: "Game Dev",
    description: {
      en: "Worked on multiple large game dev projects during my bachelor's. Unity was also my first step into C#, the language I now use professionally every day.",
      no: "Jobbet med flere store spillutviklingsprosjekter under bacheloren. Unity var også mitt første steg inn i C#, språket jeg nå bruker profesjonelt hver dag.",
    },
  },
  {
    id: "unreal",
    name: "Unreal Engine",
    icon: "/icons/unreal.svg",
    category: "Game Dev",
    description: {
      en: "Used alongside C++ for game and simulation projects at university. Worked on several large team-based projects covering gameplay systems, physics, and rendering.",
      no: "Brukt sammen med C++ for spill- og simuleringsprosjekter på universitetet. Jobbet i flere store team-baserte prosjekter med spillsystemer, fysikk og rendering.",
    },
  },
];

const categories = ["Backend", "Frontend", "Data", "Tools", "Game Dev"];

export default function StackPage() {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col gap-16 py-24">
      <section className="container mx-auto max-w-5xl px-6">
        <FadeIn>
          <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-accent-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform group-hover:-translate-x-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            {t.back.toPortfolio[lang]}
          </Link>
        </FadeIn>

        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t.stack.heading[lang]}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            {t.stack.subtitle[lang]}
          </p>
        </FadeIn>
      </section>

      {categories.map((category) => (
        <section key={category} className="container mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                {t.stack.categories[category]?.[lang] ?? category}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-accent-1/30 to-transparent" data-accent />
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {techs
              .filter((tech) => tech.category === category)
              .map((tech) => (
                <FadeIn key={tech.id} id={tech.id}>
                  <div className="group flex h-full gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-1/40 hover:shadow-[0_0_30px_rgba(var(--accent-1-rgb),0.06)]">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 transition-all group-hover:border-accent-1/50 group-hover:shadow-[0_0_15px_rgba(var(--accent-1-rgb),0.1)]">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="h-6 w-6 opacity-80 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-bold text-zinc-100">
                        {tech.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {tech.description[lang]}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
