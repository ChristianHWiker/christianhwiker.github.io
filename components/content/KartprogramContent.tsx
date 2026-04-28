"use client";

import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";

const slides = [
  { src: "/images/kartprogram/kartprogram1.png", alt: "Main map interface showing Oslo area with drawing tools" },
  { src: "/images/kartprogram/kartprogram2.png", alt: "Isolated outline with reference data and activity chart" },
  { src: "/images/kartprogram/kartprogram3.png", alt: "Activity history modal showing status timeline" },
];

export default function KartprogramContent() {
  const { lang } = useLanguage();
  const tr = t.kartprogram;

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
          <AnimatedCounter end={4} label={tr.counters.roles[lang]} />
          <AnimatedCounter end={2} label={tr.counters.mapTypes[lang]} />
          <AnimatedCounter end={1} label={tr.counters.prototype[lang]} />
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
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.background.heading[lang]}</h2>
            <p>{tr.background.body[lang]}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.whatItDoes.heading[lang]}</h2>
            <p>{tr.whatItDoes.body1[lang]}</p>
            <p className="mt-3">{tr.whatItDoes.body2[lang]}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.features.heading[lang]}</h2>
            <ul className="list-inside list-disc space-y-2 text-zinc-400">
              {tr.features.items[lang].map(([label, body], i) => (
                <li key={i}>
                  <strong className="text-zinc-300">{label}</strong>: {body}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.built.heading[lang]}</h2>
            <p>{tr.built.body[lang]}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.role.heading[lang]}</h2>
            <p>{tr.role.body[lang]}</p>
          </section>
        </div>
      </FadeIn>
    </div>
  );
}
