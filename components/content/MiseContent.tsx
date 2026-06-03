"use client";

import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import { t } from "@/lib/translations";

const slides = [
  { src: "/images/mise/home.png", alt: "Home screen showing the saved recipe list", width: 1344, height: 2842 },
  { src: "/images/mise/reverse-scale.png", alt: "Reverse scaling a recipe from a single limiting ingredient", width: 1344, height: 2842 },
  { src: "/images/mise/detail.png", alt: "Recipe detail view with rescaled ingredient quantities", width: 1344, height: 2842 },
  { src: "/images/mise/settings.png", alt: "Settings for fraction display, units, and security", width: 1344, height: 2842 },
];

export default function MiseContent() {
  const { lang } = useLanguage();
  const tr = t.mise;

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
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {["Kotlin", "Android", "Jetpack Compose", "OCR"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-800 bg-zinc-800/50 px-3 py-0.5 text-xs font-medium text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/ChristianHWiker/mise"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition-colors hover:text-accent-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-12 grid grid-cols-3 gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <AnimatedCounter end={45} suffix="+" label={tr.counters.parserTests[lang]} />
          <AnimatedCounter end={50} suffix="+" label={tr.counters.densities[lang]} />
          <AnimatedCounter end={2} label={tr.counters.flavors[lang]} />
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mx-auto mt-12 max-w-sm">
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
            <ul className="list-inside list-disc space-y-2 text-zinc-400">
              {tr.whatItDoes.items[lang].map(([label, body], i) => (
                <li key={i}>
                  <strong className="text-zinc-300">{label}</strong>: {body}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.approximation.heading[lang]}</h2>
            <p className="mb-3">{tr.approximation.intro[lang]}</p>
            <ul className="list-inside list-disc space-y-2 text-zinc-400">
              {tr.approximation.items[lang].map(([label, body], i) => (
                <li key={i}>
                  <strong className="text-zinc-300">{label}</strong>: {body}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.flavors.heading[lang]}</h2>
            <p>{tr.flavors.body[lang]}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">{tr.built.heading[lang]}</h2>
            <p>{tr.built.body[lang]}</p>
          </section>
        </div>
      </FadeIn>
    </div>
  );
}
