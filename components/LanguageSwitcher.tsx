"use client";

import { useLanguage } from "./LanguageProvider";

function NorwayFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 22 16"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="22" height="16" fill="#ef2b2d" />
      <rect x="6" width="2" height="16" fill="#fff" />
      <rect y="7" width="22" height="2" fill="#fff" />
      <rect x="6.5" width="1" height="16" fill="#002868" />
      <rect y="7.5" width="22" height="1" fill="#002868" />
    </svg>
  );
}

function UKFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        stroke="#fff"
        strokeWidth="6"
        clipPath="url(#uk-clip)"
      />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        stroke="#C8102E"
        strokeWidth="4"
        clipPath="url(#uk-clip)"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language / Språk"
      className="flex items-center overflow-hidden rounded-full border border-zinc-700 bg-zinc-900/80 text-[11px] font-semibold uppercase tracking-wider"
    >
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        aria-label="English"
        title="English"
        className={`flex items-center gap-1.5 px-2.5 py-1 transition-colors ${
          lang === "en"
            ? "bg-accent-1/20 text-accent-1"
            : "text-zinc-500 hover:text-zinc-200"
        }`}
        data-accent
      >
        <UKFlag className="h-3 w-[14px] rounded-[1px]" />
        EN
      </button>
      <span aria-hidden="true" className="h-4 w-px bg-zinc-700/70" />
      <button
        onClick={() => setLang("no")}
        aria-pressed={lang === "no"}
        aria-label="Norsk"
        title="Norsk"
        className={`flex items-center gap-1.5 px-2.5 py-1 transition-colors ${
          lang === "no"
            ? "bg-accent-1/20 text-accent-1"
            : "text-zinc-400 hover:text-zinc-200"
        }`}
        data-accent
      >
        <NorwayFlag className="h-3 w-[14px] rounded-[1px]" />
        NO
      </button>
    </div>
  );
}
