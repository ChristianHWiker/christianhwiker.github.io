"use client";

import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";

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

export default function EmailWorkerContent() {
  const { lang } = useLanguage();
  const tr = t.emailWorker;

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
          {t.back.toPortfolio[lang]}
        </Link>
      </FadeIn>

      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {tr.title[lang]}
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
          <AnimatedCounter end={7000} suffix="+" label={tr.counters.processed[lang]} />
          <AnimatedCounter end={9} label={tr.counters.origins[lang]} />
          <AnimatedCounter end={0} label={tr.counters.downtime[lang]} />
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
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.problem.heading[lang]}</h2>
            <p>{tr.problem.body[lang]}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.solution.heading[lang]}</h2>
            <p>{tr.solution.body[lang]}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.howItWorks.heading[lang]}</h2>
            <ul className="list-inside list-disc space-y-2 text-zinc-400">
              {tr.howItWorks.items[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.dashboard.heading[lang]}</h2>
            <p className="mb-3">{tr.dashboard.intro[lang]}</p>
            <ul className="list-inside list-disc space-y-2 text-zinc-400">
              {tr.dashboard.items[lang].map(([label, body], i) => (
                <li key={i}>
                  <strong className="text-zinc-300">{label}</strong>: {body}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.result.heading[lang]}</h2>
            <p>{tr.result.body[lang]}</p>
          </section>
        </div>
      </FadeIn>
    </div>
  );
}
