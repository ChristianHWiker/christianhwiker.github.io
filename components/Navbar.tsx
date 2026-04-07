"use client";

import Link from "next/link";

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, target: string) {
  e.preventDefault();
  if (target === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-[#0a0a0f]/80 py-4 backdrop-blur-xl">
      <div className="container mx-auto flex max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="animate-gradient-text">CHW</span>
        </Link>
        <ul className="flex items-center gap-8 text-sm font-medium text-zinc-400">
          <li>
            <a href="#top" onClick={(e) => smoothScroll(e, "#top")} className="transition-colors hover:text-white">
              Home
            </a>
          </li>
          <li>
            <Link href="/stack" className="transition-colors hover:text-white">
              Stack
            </Link>
          </li>
          <li>
            <a href="#projects" onClick={(e) => smoothScroll(e, "#projects")} className="transition-colors hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")} className="transition-colors hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
