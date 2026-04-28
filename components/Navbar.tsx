"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/translations";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { lang } = useLanguage();
  const isHome = pathname === "/";

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, target: string) {
    e.preventDefault();
    if (target === "#top") {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
      return;
    }
    if (isHome) {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${target}`);
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/50 bg-[#0a0a0f]/80 py-4 backdrop-blur-xl">
      <div className="container mx-auto flex max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="animate-gradient-text" data-accent>CHW</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-zinc-400 sm:gap-8">
          <li>
            <a href="/" onClick={(e) => handleNavClick(e, "#top")} className="transition-colors hover:text-white">
              {t.nav.home[lang]}
            </a>
          </li>
          <li>
            <Link href="/stack" className="transition-colors hover:text-white">
              {t.nav.stack[lang]}
            </Link>
          </li>
          <li>
            <a href="/#projects" onClick={(e) => handleNavClick(e, "#projects")} className="transition-colors hover:text-white">
              {t.nav.projects[lang]}
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={(e) => handleNavClick(e, "#contact")} className="transition-colors hover:text-white">
              {t.nav.contact[lang]}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
}
