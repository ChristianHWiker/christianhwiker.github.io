"use client";

import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

export type ThemeId = "twilight" | "ember" | "aurora" | "sakura" | "frost";

export interface ThemeDef {
  id: ThemeId;
  label: string;
  accent1: string;
  accent2: string;
  accent3: string;
  accent4: string;
  particleHue1: number;
  particleHue2: number;
}

export const THEMES: ThemeDef[] = [
  {
    id: "twilight",
    label: "Twilight",
    accent1: "#6366f1",
    accent2: "#8b5cf6",
    accent3: "#a855f7",
    accent4: "#06b6d4",
    particleHue1: 240,
    particleHue2: 280,
  },
  {
    id: "ember",
    label: "Ember",
    accent1: "#f97316",
    accent2: "#ef4444",
    accent3: "#f59e0b",
    accent4: "#fbbf24",
    particleHue1: 20,
    particleHue2: 40,
  },
  {
    id: "aurora",
    label: "Aurora",
    accent1: "#10b981",
    accent2: "#14b8a6",
    accent3: "#06b6d4",
    accent4: "#22d3ee",
    particleHue1: 160,
    particleHue2: 180,
  },
  {
    id: "sakura",
    label: "Sakura",
    accent1: "#ec4899",
    accent2: "#f43f5e",
    accent3: "#d946ef",
    accent4: "#fb7185",
    particleHue1: 330,
    particleHue2: 350,
  },
  {
    id: "frost",
    label: "Frost",
    accent1: "#3b82f6",
    accent2: "#6366f1",
    accent3: "#0ea5e9",
    accent4: "#38bdf8",
    particleHue1: 210,
    particleHue2: 230,
  },
];

function getThemeById(id: ThemeId): ThemeDef {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}

/** Parse "#rrggbb" → "r, g, b" for use in rgba() */
function hexToRgb(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

const ACCENT_KEYS = ["--accent-1", "--accent-2", "--accent-3", "--accent-4"] as const;
const ACCENT_RGB_KEYS = ["--accent-1-rgb", "--accent-2-rgb", "--accent-3-rgb", "--accent-4-rgb"] as const;

function applyTheme(theme: ThemeDef) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme.id);
  const values = [theme.accent1, theme.accent2, theme.accent3, theme.accent4];
  for (let i = 0; i < 4; i++) {
    root.style.setProperty(ACCENT_KEYS[i], values[i]);
    root.style.setProperty(ACCENT_RGB_KEYS[i], hexToRgb(values[i]));
  }
  root.style.setProperty("--particle-hue-1", String(theme.particleHue1));
  root.style.setProperty("--particle-hue-2", String(theme.particleHue2));
}

/* ── Wave strategies ── */

type WaveOrigin =
  | { type: "radial"; x: number; y: number }
  | { type: "directional"; direction: "ltr" | "rtl" };

function getElementCenter(el: HTMLElement): { x: number; y: number } {
  const rect = el.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

function getDistance(el: HTMLElement, origin: WaveOrigin): number {
  const center = getElementCenter(el);
  if (origin.type === "radial") {
    const dx = center.x - origin.x;
    const dy = center.y - origin.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  // Directional: use x position across viewport
  return origin.direction === "ltr" ? center.x : window.innerWidth - center.x;
}

/* ── Wave constants ── */
const MAX_WAVE_DELAY = 800;   // ms for wave to reach farthest element
const TRANSITION_DURATION = 500; // ms per element's color morph

/* ── Context ── */

interface ThemeCtx {
  theme: ThemeDef;
  setTheme: (id: ThemeId) => void;
  setThemeWithWave: (id: ThemeId, originX: number, originY: number) => void;
}

const ThemeContext = createContext<ThemeCtx>({
  theme: THEMES[0],
  setTheme: () => {},
  setThemeWithWave: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeDef>(THEMES[0]);
  const waveElements = useRef<Set<HTMLElement>>(new Set());
  const waveRafId = useRef<number>(0);
  const cleanupTimeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Read stored preference on mount
  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme") as ThemeId | null;
    if (stored) {
      const t = getThemeById(stored);
      setThemeState(t);
      applyTheme(t);
    } else {
      applyTheme(THEMES[0]);
    }
  }, []);

  const cancelWave = useCallback(() => {
    cancelAnimationFrame(waveRafId.current);
    if (cleanupTimeoutId.current) clearTimeout(cleanupTimeoutId.current);

    for (const el of waveElements.current) {
      el.classList.remove("wave-transitioning");
      for (const key of ACCENT_KEYS) el.style.removeProperty(key);
      for (const key of ACCENT_RGB_KEYS) el.style.removeProperty(key);
    }
    waveElements.current.clear();
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    cancelWave();
    const t = getThemeById(id);
    setThemeState(t);
    applyTheme(t);
    localStorage.setItem("portfolio-theme", id);
  }, [cancelWave]);

  const setThemeWithWave = useCallback((id: ThemeId, originX: number, originY: number) => {
    // If a wave is running, cancel it and snap to current before starting new one
    cancelWave();

    const newTheme = getThemeById(id);
    const origin: WaveOrigin = { type: "radial", x: originX, y: originY };

    // ── Phase 1: Read ──
    // Snapshot old accent values from the root
    const root = document.documentElement;
    const oldValues = ACCENT_KEYS.map((key) =>
      getComputedStyle(root).getPropertyValue(key).trim()
    );
    const oldRgbValues = ACCENT_RGB_KEYS.map((key) =>
      getComputedStyle(root).getPropertyValue(key).trim()
    );

    // Collect all accent-using elements on the current page
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-accent]"));

    // Batch-read all positions and compute delays
    const distances = elements.map((el) => getDistance(el, origin));
    const maxDistance = Math.max(...distances, 1); // avoid division by zero

    // sqrt mapping: near elements change fast, distant ones are more spread
    const delays = distances.map((d) =>
      Math.sqrt(d / maxDistance) * MAX_WAVE_DELAY
    );

    // ── Phase 2: Write (batched) ──
    // Pin every element to old colors via inline overrides
    for (const el of elements) {
      for (let i = 0; i < 4; i++) {
        el.style.setProperty(ACCENT_KEYS[i], oldValues[i]);
        el.style.setProperty(ACCENT_RGB_KEYS[i], oldRgbValues[i]);
      }
      waveElements.current.add(el);
    }

    // Swap global theme — elements still show old colors due to inline overrides
    applyTheme(newTheme);
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", id);

    // Add transition class to all elements
    for (const el of elements) {
      el.classList.add("wave-transitioning");
    }

    // ── Phase 3: Animate via rAF loop ──
    // Sort elements by delay so we can process them in order
    const sorted = elements
      .map((el, i) => ({ el, delay: delays[i] }))
      .sort((a, b) => a.delay - b.delay);
    let cursor = 0; // tracks next element to release

    // Double rAF ensures the transition class is painted before we start removing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const startTime = performance.now();

        function tick() {
          const elapsed = performance.now() - startTime;

          // Release all elements whose delay has been reached this frame
          while (cursor < sorted.length && sorted[cursor].delay <= elapsed) {
            const { el } = sorted[cursor];
            for (const key of ACCENT_KEYS) el.style.removeProperty(key);
            for (const key of ACCENT_RGB_KEYS) el.style.removeProperty(key);
            cursor++;
          }

          if (cursor < sorted.length) {
            waveRafId.current = requestAnimationFrame(tick);
          } else {
            // All overrides removed — schedule final cleanup after transitions finish
            cleanupTimeoutId.current = setTimeout(() => {
              for (const el of waveElements.current) {
                el.classList.remove("wave-transitioning");
              }
              waveElements.current.clear();
            }, TRANSITION_DURATION + 50);
          }
        }

        waveRafId.current = requestAnimationFrame(tick);
      });
    });
  }, [cancelWave]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, setThemeWithWave }}>
      {children}
    </ThemeContext.Provider>
  );
}
