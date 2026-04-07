"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";

/* ── Types ── */
interface Line {
  type: "input" | "output" | "error" | "accent";
  text: string;
}

/* ── Command registry ── */
const COMMANDS: Record<string, () => Line[]> = {
  help: () => [
    { type: "accent", text: "Available commands:" },
    { type: "output", text: "  about       — who I am" },
    { type: "output", text: "  skills      — tech stack" },
    { type: "output", text: "  projects    — featured work" },
    { type: "output", text: "  contact     — get in touch" },
    { type: "output", text: "  history     — work experience" },
    { type: "output", text: "  whoami      — quick summary" },
    { type: "output", text: "  clear       — reset terminal" },
  ],
  about: () => [
    { type: "accent", text: "Christian Hagen Wiker" },
    { type: "output", text: "28 y/o developer & data technician based in Elverum, Norway." },
    { type: "output", text: "Currently building standalone services and modern web apps at Pelias." },
    { type: "output", text: "" },
    { type: "accent", text: "Beyond the code:" },
    { type: "output", text: "Been building PCs since I was little — hardware is where it started." },
    { type: "output", text: "Lifelong gamer. Plays guitar on the heavier side — metalcore," },
    { type: "output", text: "deathcore, and prog metal." },
  ],
  skills: () => [
    { type: "accent", text: "Backend          Frontend         Data & AI        Tools" },
    { type: "output", text: "C# / .NET        Blazor           MSSQL            Git" },
    { type: "output", text: "ASP.NET Core     Next.js          Data pipelines   Azure DevOps" },
    { type: "output", text: "Node.js          React            Claude / GPT     Docker" },
    { type: "output", text: "REST APIs        Tailwind CSS     Automation       VS Code" },
  ],
  projects: () => [
    { type: "accent", text: "Featured Projects" },
    { type: "output", text: "" },
    { type: "accent", text: "1. Email Worker Service" },
    { type: "output", text: "   C# service replacing legacy ASP Classic email pipeline." },
    { type: "output", text: "   Impact: Eliminated 1h+ daily server downtime." },
    { type: "output", text: "" },
    { type: "accent", text: "2. Blazor Map Application" },
    { type: "output", text: "   Map & trend visualization tool built for Pelias." },
    { type: "output", text: "   Impact: Kept in-house after prototype demo." },
    { type: "output", text: "" },
    { type: "accent", text: "3. AI Productivity Training" },
    { type: "output", text: "   Evaluated AI tools & trained the full IT department." },
    { type: "output", text: "   Impact: Adopted across the department." },
  ],
  contact: () => [
    { type: "accent", text: "Let's connect:" },
    { type: "output", text: "  Email    chrishawik@gmail.com" },
    { type: "output", text: "  GitHub   github.com/ChristianHWiker" },
  ],
  history: () => [
    { type: "accent", text: "Work Experience" },
    { type: "output", text: "" },
    { type: "accent", text: "Pelias — Developer & Data Technician" },
    { type: "output", text: "  Building internal tools, services, and data pipelines." },
    { type: "output", text: "  Modernizing legacy systems with C# and .NET." },
    { type: "output", text: "  Leading AI adoption for the development team." },
  ],
  whoami: () => [
    {
      type: "output",
      text: "christian — developer who turns legacy pain into modern solutions",
    },
  ],
  "sudo hire-me": () => [
    { type: "accent", text: "Permission granted." },
    { type: "output", text: "Sending resume... just kidding. But seriously, let's talk." },
    { type: "output", text: 'Type "contact" for details.' },
  ],
  neofetch: () => [
    { type: "accent", text: "christian@portfolio" },
    { type: "output", text: "─────────────────────" },
    { type: "output", text: "OS:       Developer v28.0" },
    { type: "output", text: "Host:     Elverum, Norway" },
    { type: "output", text: "Kernel:   Coffee-powered" },
    { type: "output", text: "Uptime:   ~4 years coding" },
    { type: "output", text: "Shell:    C# / TypeScript / SQL" },
    { type: "output", text: "DE:       VS Code + Blazor" },
    { type: "output", text: "GPU:      Building PCs since childhood" },
    { type: "output", text: "Audio:    Guitar — metalcore/deathcore/prog metal" },
    { type: "output", text: "PID 1:    Gaming (lifelong)" },
    { type: "output", text: "Terminal: You're in it right now" },
  ],
};

const PROMPT = "visitor@christian.dev ~ % ";

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [ready, setReady] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll within terminal only */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  /* Auto-type intro sequence on mount */
  useEffect(() => {
    const introCmd = "help";
    let i = 0;
    const typingDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setInput(introCmd.slice(0, i + 1));
        i++;
        if (i >= introCmd.length) {
          clearInterval(interval);
          setTimeout(() => {
            runCommand(introCmd);
            setInput("");
            setReady(true);
          }, 400);
        }
      }, 80);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(typingDelay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const runCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [{ type: "input", text: `${PROMPT}${cmd}` }];

    if (trimmed === "clear") {
      setLines([]);
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      newLines.push(...handler());
    } else if (trimmed === "") {
      // empty enter, just show prompt
    } else {
      newLines.push({
        type: "error",
        text: `command not found: ${trimmed}. Type "help" for available commands.`,
      });
    }

    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
      if (input.trim()) {
        setCmdHistory((prev) => [input, ...prev]);
      }
      setInput("");
      setHistoryIdx(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const nextIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(nextIdx);
      if (cmdHistory[nextIdx]) setInput(cmdHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = historyIdx - 1;
      if (nextIdx < 0) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const partial = input.trim().toLowerCase();
      if (partial) {
        const match = Object.keys(COMMANDS).find((c) => c.startsWith(partial));
        if (match) setInput(match);
      }
    }
  };

  const colorFor = (type: Line["type"]) => {
    switch (type) {
      case "input":
        return "text-zinc-400";
      case "accent":
        return "text-accent-4";
      case "error":
        return "text-red-400";
      default:
        return "text-zinc-300";
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/80 backdrop-blur-md shadow-[0_0_60px_rgba(99,102,241,0.06)] transition-all hover:border-zinc-700"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/60 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 flex-1 text-center text-xs text-zinc-500 font-mono">
          visitor@christian.dev
        </span>
      </div>

      {/* Terminal body */}
      <div ref={scrollRef} className="h-72 overflow-y-auto p-4 font-mono text-sm leading-relaxed scrollbar-thin">
        {/* Output lines */}
        {lines.map((line, i) => (
          <div key={i} className={`whitespace-pre-wrap ${colorFor(line.type)}`}>
            {line.text || "\u00A0"}
          </div>
        ))}

        {/* Active prompt */}
        <div className="flex items-center">
          <span className="text-zinc-400 whitespace-pre">{PROMPT}</span>
          <div className="relative flex-1">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => {
                if (ready) setInput(e.target.value);
              }}
              onKeyDown={ready ? handleKey : undefined}
              className="w-full bg-transparent text-zinc-100 outline-none caret-transparent font-mono text-sm"
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              aria-label="Terminal input"
            />
            {/* Custom blinking cursor */}
            <span
              className="pointer-events-none absolute top-0 text-accent-1 animate-pulse"
              style={{ left: `${input.length}ch` }}
            >
              &#9608;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
