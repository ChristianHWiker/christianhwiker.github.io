"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface Tech {
  name: string;
  icon: string;
}

interface Category {
  label: string;
  items: Tech[];
}

const stack: Category[] = [
  {
    label: "Backend",
    items: [
      { name: "C#", icon: "/icons/csharp.svg" },
      { name: ".NET", icon: "/icons/dotnet.svg" },
      { name: "ASP.NET Core", icon: "/icons/aspnet.svg" },
      { name: "Blazor", icon: "/icons/blazor.svg" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "SQL Server", icon: "/icons/sqlserver.svg" },
      { name: "Dapper", icon: "/icons/dapper.svg" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Git", icon: "/icons/git.svg" },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="space-y-10">
      {stack.map((category) => (
        <div key={category.label}>
          <FadeIn>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              {category.label}
            </h3>
          </FadeIn>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {category.items.map((tech, i) => (
              <FadeIn key={tech.name} className={`delay-${i}`}>
                <div className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 transition-all duration-300 hover:border-accent-1/50 hover:bg-zinc-900/80 hover:shadow-[0_0_20px_rgba(var(--accent-1-rgb),0.08)]">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={24}
                    height={24}
                    className="h-6 w-6 opacity-70 transition-opacity group-hover:opacity-100"
                  />
                  <span className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                    {tech.name}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
