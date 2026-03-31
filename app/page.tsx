import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import SmoothLink from "@/components/SmoothLink";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 py-24">
      {/* Hero Section */}
      <section className="hero-gradient relative container mx-auto max-w-5xl px-6">
        {/* Decorative orbs */}
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-1/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 right-1/4 h-56 w-56 rounded-full bg-accent-3/10 blur-[80px]" />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-2xl flex-col gap-6">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-1">
                Developer &middot; Data Technician
              </p>
            </FadeIn>
            <FadeIn>
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                Hi, I&apos;m{" "}
                <span className="animate-gradient-text">
                  Christian Hagen Wiker
                </span>
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-xl leading-relaxed text-zinc-400">
                Based in Elverum, Norway. Currently at{" "}
                <span className="font-medium text-zinc-200">Pelias</span>, where
                I build standalone services and modern web applications with{" "}
                <span className="font-medium text-accent-4">C#</span>,{" "}
                <span className="font-medium text-accent-2">Blazor</span>, and{" "}
                <span className="font-medium text-accent-3">AI-driven workflows</span>.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="flex gap-4">
                <SmoothLink
                  href="#projects"
                  className="btn-primary rounded-full bg-gradient-to-r from-accent-1 to-accent-3 px-8 py-3.5 font-semibold text-white"
                >
                  <span>View My Projects</span>
                </SmoothLink>
                <SmoothLink
                  href="#contact"
                  className="btn-outline rounded-full border border-zinc-700 px-8 py-3.5 font-semibold text-zinc-300"
                >
                  Get in Touch
                </SmoothLink>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="flex-shrink-0">
            <div className="relative h-48 w-48 md:h-64 md:w-64">
              {/* Animated gradient ring */}
              <div className="avatar-ring absolute inset-0 rounded-full p-[3px]">
                <div className="h-full w-full rounded-full bg-[#0a0a0f]" />
              </div>
              {/* Photo placeholder */}
              <div className="absolute inset-[3px] overflow-hidden rounded-full">
                <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-zinc-500">
                  Photo
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="mb-12 flex items-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-accent-1/40 to-transparent" />
          </div>
        </FadeIn>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.id} className={`delay-${i}`}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto max-w-5xl px-6">
        <FadeIn>
          <div className="mb-12 flex items-center gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-accent-1/40 to-transparent" />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <a
              href="mailto:chrishawik@gmail.com"
              className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-5 transition-all hover:border-accent-1/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-1/10 text-accent-1 transition-colors group-hover:bg-accent-1/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Email</p>
                <p className="font-medium text-zinc-200">chrishawik@gmail.com</p>
              </div>
            </a>
            <a
              href="https://github.com/ChristianHWiker"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-5 transition-all hover:border-accent-1/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-1/10 text-accent-1 transition-colors group-hover:bg-accent-1/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-zinc-500">GitHub</p>
                <p className="font-medium text-zinc-200">ChristianHWiker</p>
              </div>
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
