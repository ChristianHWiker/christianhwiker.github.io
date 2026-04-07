"use client";

import Image from "next/image";

interface OrbitItem {
  name: string;
  icon: string;
}

interface Ring {
  label: string;
  items: OrbitItem[];
  radius: number;
  duration: number;
  reverse?: boolean;
}

const rings: Ring[] = [
  {
    label: "Core",
    radius: 85,
    duration: 35,
    items: [
      { name: "C#", icon: "/icons/csharp.svg" },
      { name: ".NET", icon: "/icons/dotnet.svg" },
      { name: "Blazor", icon: "/icons/blazor.svg" },
      { name: "ASP.NET", icon: "/icons/aspnet.svg" },
    ],
  },
  {
    label: "Frontend",
    radius: 155,
    duration: 45,
    reverse: true,
    items: [
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
    ],
  },
  {
    label: "Data & Tools",
    radius: 220,
    duration: 55,
    items: [
      { name: "SQL Server", icon: "/icons/sqlserver.svg" },
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Dapper", icon: "/icons/dapper.svg" },
    ],
  },
];

export default function TechOrbit() {
  return (
    <div className="relative mx-auto h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] md:h-[480px] md:w-[480px]">
      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-accent-1/10 blur-[40px]" />

      {/* Center label */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/90 backdrop-blur-sm sm:h-16 sm:w-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 sm:text-xs">
            Stack
          </span>
        </div>
      </div>

      {/* Ring track lines */}
      {rings.map((ring) => (
        <div
          key={`track-${ring.label}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-800/40"
          style={{
            width: `calc(${ring.radius}px * var(--orbit-scale) * 2)`,
            height: `calc(${ring.radius}px * var(--orbit-scale) * 2)`,
          }}
        />
      ))}

      {/* Orbiting rings */}
      {rings.map((ring) => (
        <div
          key={ring.label}
          className="absolute left-1/2 top-1/2"
          style={{
            width: 0,
            height: 0,
            animation: `orbit-spin ${ring.duration}s linear infinite${ring.reverse ? " reverse" : ""}`,
          }}
        >
          {ring.items.map((item, i) => {
            const angle = (360 / ring.items.length) * i;
            return (
              <div
                key={item.name}
                className="absolute"
                style={{
                  transform: `rotate(${angle}deg) translateX(calc(${ring.radius}px * var(--orbit-scale))) rotate(-${angle}deg)`,
                  left: 0,
                  top: 0,
                }}
              >
                {/* Counter-rotate to stay upright */}
                <div
                  className="flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-0.5 sm:gap-1 [backface-visibility:hidden] [will-change:transform]"
                  style={{
                    animation: `orbit-spin ${ring.duration}s linear infinite${ring.reverse ? "" : " reverse"}`,
                  }}
                >
                  <div className="group relative flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm transition-all duration-300 hover:border-accent-1/60 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] sm:h-10 sm:w-10 sm:rounded-xl">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="h-4 w-4 opacity-80 transition-opacity group-hover:opacity-100 sm:h-5 sm:w-5"
                    />
                  </div>
                  <span className="text-[8px] font-medium text-zinc-500 sm:text-[10px]">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
