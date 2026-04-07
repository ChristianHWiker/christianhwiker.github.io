import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

interface TechDetail {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
}

const techs: TechDetail[] = [
  {
    id: "csharp",
    name: "C#",
    icon: "/icons/csharp.svg",
    category: "Backend",
    description:
      "My core language. Used to build the EmailWorker engine — a standalone service that replaced legacy ASP Classic email handling at Pelias. Also the backbone of most internal tools and services I develop.",
  },
  {
    id: "dotnet",
    name: ".NET",
    icon: "/icons/dotnet.svg",
    category: "Backend",
    description:
      "The framework behind the EmailWorker and all internal tooling at Pelias. I use it for building APIs, background services, and web applications.",
  },
  {
    id: "aspnet",
    name: "ASP.NET Core",
    icon: "/icons/aspnet.svg",
    category: "Backend",
    description:
      "Powers the web APIs and dashboards I build. The EmailWorker's statistics dashboard and queue management interface both run on ASP.NET Core.",
  },
  {
    id: "blazor",
    name: "Blazor",
    icon: "/icons/blazor.svg",
    category: "Backend",
    description:
      "Built the web interfaces for both the map program and the EmailWorker at Pelias. Blazor lets me stay in C# across the full stack, which keeps things consistent and fast to develop.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/icons/javascript.svg",
    category: "Frontend",
    description:
      "Used alongside ASP Classic for the Pelias web pages. Also comes into play across various frontend work and scripting tasks.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    category: "Frontend",
    description:
      "Used for this portfolio site. I wanted hands-on experience with typed frontend development and modern tooling outside of the .NET ecosystem.",
  },
  {
    id: "react",
    name: "React",
    icon: "/icons/react.svg",
    category: "Frontend",
    description:
      "The UI library behind this portfolio. Picked it up to broaden my frontend skills beyond Blazor and understand the component model that most of the web runs on.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "/icons/nextjs.svg",
    category: "Frontend",
    description:
      "Framework for this portfolio — static export, file-based routing, view transitions, and Turbopack. Chose it to get real experience with the React ecosystem and modern deployment workflows.",
  },
  {
    id: "sqlserver",
    name: "SQL Server",
    icon: "/icons/sqlserver.svg",
    category: "Data",
    description:
      "The database behind both the EmailWorker and the map program at Pelias. I write and optimize queries, design schemas, and manage stored procedures for production workloads.",
  },
  {
    id: "dapper",
    name: "Dapper",
    icon: "/icons/dapper.svg",
    category: "Data",
    description:
      "My go-to for SQL connections in C#. Used as the data access layer in both the map program and EmailWorker — lightweight, fast, and gives me full control over the queries.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "/icons/nodejs.svg",
    category: "Tools",
    description:
      "Runtime for this portfolio's dev server and build tooling. Also used for scripting and automation tasks outside of .NET.",
  },
  {
    id: "git",
    name: "Git",
    icon: "/icons/git.svg",
    category: "Tools",
    description:
      "Version control for everything. All projects at Pelias and my personal work use Git — branching, PRs, and proper history are non-negotiable.",
  },
  {
    id: "cpp",
    name: "C++",
    icon: "/icons/cpp.svg",
    category: "Backend",
    description:
      "My entry point into programming. Studied game technology and simulations at university, where C++ was the foundation for everything from engine work to simulation projects.",
  },
  {
    id: "unity",
    name: "Unity",
    icon: "/icons/unity.svg",
    category: "Game Dev",
    description:
      "Worked on multiple large game dev projects during my bachelor's. Unity was also my first step into C# — the language I now use professionally every day.",
  },
  {
    id: "unreal",
    name: "Unreal Engine",
    icon: "/icons/unreal.svg",
    category: "Game Dev",
    description:
      "Used alongside C++ for game and simulation projects at university. Worked on several large team-based projects covering gameplay systems, physics, and rendering.",
  },
];

const categories = ["Backend", "Frontend", "Data", "Tools", "Game Dev"];

export default function StackPage() {
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
            Back to portfolio
          </Link>
        </FadeIn>

        <FadeIn>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tech Stack
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            The tools I use and how I use them. Each one earned its place through real projects — not tutorials.
          </p>
        </FadeIn>
      </section>

      {categories.map((category) => (
        <section key={category} className="container mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                {category}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-accent-1/30 to-transparent" />
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {techs
              .filter((t) => t.category === category)
              .map((tech) => (
                <FadeIn key={tech.id} id={tech.id}>
                  <div className="group flex h-full gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent-1/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)]">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 transition-all group-hover:border-accent-1/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.1)]">
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
                        {tech.description}
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
