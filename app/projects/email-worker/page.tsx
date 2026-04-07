import type { Metadata } from "next";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Email Worker Service — Christian Hagen Wiker",
  description:
    "A standalone C# email engine that eliminated daily server hangs by offloading email generation into an independent scheduled service with a full web dashboard.",
};

const slides = [
  { src: "/images/email-worker/ewdash.png", alt: "Dashboard showing queue statistics and origin status" },
  { src: "/images/email-worker/ewdash2.png", alt: "Email statistics chart with hourly breakdown" },
  { src: "/images/email-worker/ewqueue.png", alt: "Email queue with searchable list and filters" },
  { src: "/images/email-worker/ewqueueedit.png", alt: "Editing an email's recipients and addresses" },
  { src: "/images/email-worker/ewqueuedetails.png", alt: "Detailed view of a single email with recipients and attachments" },
  { src: "/images/email-worker/ewqueuedetailshistory.png", alt: "Status history showing email lifecycle from creation to delivery" },
  { src: "/images/email-worker/ewqueuedetailslogs.png", alt: "SMTP logs showing send attempts and error handling" },
  { src: "/images/email-worker/ewlogs.png", alt: "Global log viewer with filtering" },
  { src: "/images/email-worker/ewsettings.png", alt: "Per-origin configuration for retry and logging" },
  { src: "/images/email-worker/ewsettings2.png", alt: "SMTP and database configuration" },
];

export default function EmailWorkerPage() {
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
          Email Worker Service
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {["C#", "ASP.NET Core", "MSSQL", "Automation"].map((tag) => (
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
          <AnimatedCounter end={7000} suffix="+" label="Emails processed" />
          <AnimatedCounter end={9} label="Email origins" />
          <AnimatedCounter end={0} label="Daily downtime (hrs)" />
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
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">The problem</h2>
            <p>
              The company&apos;s web server was responsible for generating and sending emails as part of everyday operations. Because emails were created and sent inline with page requests, the server would frequently hang &mdash; sometimes for over an hour at a time &mdash; while it processed large batches. During these hangs, the entire website was slow or unresponsive for everyone.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">The solution</h2>
            <p>
              I built a standalone service that takes over the entire email pipeline. Instead of the web server creating emails on the spot, it simply drops a request into a database queue. The Email Worker picks up queued items on a schedule, generates the email content, and sends it via SMTP &mdash; completely independent of the web server. This eliminated the daily server hangs entirely.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">How it works</h2>
            <ul className="list-inside list-disc space-y-2 text-zinc-400">
              <li>The web server writes email requests to a database queue instead of sending them directly.</li>
              <li>The Email Worker runs as a scheduled task, picking up and processing queued emails in batches.</li>
              <li>Each email &ldquo;origin&rdquo; (insurance, invoices, reports, etc.) has its own configuration &mdash; separate templates, retry rules, and SMTP settings.</li>
              <li>If an email fails to send, the worker retries it automatically based on configurable rules, and logs the error for review.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">The web dashboard</h2>
            <p className="mb-3">
              A companion web app gives full visibility into what the service is doing:
            </p>
            <ul className="list-inside list-disc space-y-2 text-zinc-400">
              <li><strong className="text-zinc-300">Dashboard</strong> &mdash; live overview of how many emails are queued, sent, or failed, broken down by origin.</li>
              <li><strong className="text-zinc-300">Email Queue</strong> &mdash; searchable list of every email with status, origin, and subject. You can click into any email to see its full details, recipients, and a timeline of what happened.</li>
              <li><strong className="text-zinc-300">Logs</strong> &mdash; filterable log of every operation the service has performed, useful for debugging delivery issues.</li>
              <li><strong className="text-zinc-300">Settings</strong> &mdash; per-origin configuration for retry behavior, logging levels, SMTP credentials, and database connections.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">Result</h2>
            <p>
              The service has been running in production since deployment. The daily server hangs that used to disrupt the entire company are gone, and the operations team can now monitor and troubleshoot email delivery themselves through the dashboard &mdash; without needing developer involvement.
            </p>
          </section>
        </div>
      </FadeIn>

    </div>
  );
}
