"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme, THEMES } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setThemeWithWave } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      {/* Trigger — gradient dot showing current theme */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change color theme"
        className="group flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/80 transition-all hover:border-accent-1/60 hover:shadow-[0_0_16px_rgba(var(--accent-1-rgb),0.25)]"
      >
        <span
          className="block h-3.5 w-3.5 rounded-full transition-transform group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${theme.accent1}, ${theme.accent3})`,
          }}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 flex flex-col gap-1 rounded-xl border border-zinc-800 bg-zinc-950/95 p-2 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
          {THEMES.map((t) => {
            const active = t.id === theme.id;
            return (
              <button
                key={t.id}
                onClick={(e) => {
                  if (!active) {
                    const rect = (e.target as HTMLElement).getBoundingClientRect();
                    const x = rect.left + rect.width / 2;
                    const y = rect.top + rect.height / 2;
                    setThemeWithWave(t.id, x, y);
                  }
                  setOpen(false);
                }}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-all ${
                  active
                    ? "bg-zinc-800/80"
                    : "hover:bg-zinc-800/50"
                }`}
              >
                {/* Color swatch */}
                <span
                  className="block h-4 w-4 rounded-full transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${t.accent1}, ${t.accent3})`,
                    outline: active ? `2px solid ${t.accent1}` : "2px solid transparent",
                    outlineOffset: "2px",
                    boxShadow: active ? `0 0 8px ${t.accent1}40` : "none",
                  }}
                />
                <span
                  className={`text-xs font-medium whitespace-nowrap ${
                    active ? "text-zinc-100" : "text-zinc-400"
                  }`}
                >
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
