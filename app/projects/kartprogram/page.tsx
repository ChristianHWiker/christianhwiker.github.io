import type { Metadata } from "next";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Blazor Map Application — Christian Hagen Wiker",
  description:
    "A multi-tenant map and trend tool built in Blazor for Pelias. Visualize maps, track trend data, and link everything to work orders for daily operations.",
};

const slides = [
  { src: "/images/kartprogram/kartprogram1.png", alt: "Main map interface showing Oslo area with drawing tools" },
  { src: "/images/kartprogram/kartprogram2.png", alt: "Isolated outline with reference data and activity chart" },
  { src: "/images/kartprogram/kartprogram3.png", alt: "Activity history modal showing status timeline" },
];

export default function KartprogramPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-24">
      <FadeIn>
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-accent-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform group-hover:-translate-x-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to portfolio
        </Link>
      </FadeIn>

      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Blazor Map Application
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {["C#", "Blazor", "Web App", "Maps"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-800 bg-zinc-800/50 px-3 py-0.5 text-xs font-medium text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-12 grid grid-cols-3 gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <AnimatedCounter end={4} label="User roles" />
          <AnimatedCounter end={2} label="Map types (indoor + outdoor)" />
          <AnimatedCounter end={1} label="Prototype to convince mgmt" />
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-12">
          <ImageCarousel slides={slides} />
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-12 space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">Background</h2>
            <p>
              Pelias needed a custom mapping tool for daily operations across multiple client companies. The original plan was to outsource the entire development to an external company. I built a working prototype to evaluate whether it was feasible to keep in-house &mdash; and after seeing it, the company decided to do exactly that.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">What it does</h2>
            <p>
              The application is a combined map and trend tool. At its core, it lets users work with maps &mdash; both outdoor and indoor &mdash; and attach live data to the things they draw on them. Each map is tied to a specific project or work order, making it a practical tool for day-to-day operations rather than just a viewer.
            </p>
            <p className="mt-3">
              For example, a field worker can open a map for their current order, see what objects are placed, check the latest readings or observations for each one, and register new data &mdash; all from the same interface.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">Key features</h2>
            <ul className="list-inside list-disc space-y-2 text-zinc-400">
              <li><strong className="text-zinc-300">Interactive maps</strong> &mdash; full pan-and-zoom maps built on OpenStreetMap, covering all of Norway. Indoor maps are also supported.</li>
              <li><strong className="text-zinc-300">Drawing tools</strong> &mdash; sketch outlines, place markers, and annotate areas directly on the map. Each drawn object can carry structured data.</li>
              <li><strong className="text-zinc-300">Trend data</strong> &mdash; attach readings, observations, and measurements to map objects and track them over time. Activity history shows how values change across visits.</li>
              <li><strong className="text-zinc-300">Project &amp; order linking</strong> &mdash; every map belongs to a project and can be linked to specific work orders, connecting the visual map work to the company&apos;s operational workflow.</li>
              <li><strong className="text-zinc-300">Multi-page projects</strong> &mdash; organize work across multiple map pages within a single project, similar to slides in a presentation.</li>
              <li><strong className="text-zinc-300">Multi-tenant</strong> &mdash; the system supports multiple companies with separated data. Different user roles (administrators, regular users, and read-only customer accounts) control who can see and do what.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">How it&apos;s built</h2>
            <p>
              The application is a Blazor hybrid solution running on .NET. The frontend and backend are cleanly separated &mdash; the client application communicates with a dedicated API for all data operations. Map rendering is handled client-side through JavaScript interop, while the server manages data persistence, authentication, and business logic.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">My role</h2>
            <p>
              I built the prototype that convinced the company to keep the project in-house, and have been the primary developer since. This includes the full frontend, the API layer, the data model, and the map rendering integration.
            </p>
          </section>
        </div>
      </FadeIn>
    </div>
  );
}
