"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "no";

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  ready: boolean;
}

const LanguageContext = createContext<LanguageCtx>({
  lang: "en",
  setLang: () => {},
  ready: false,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-lang") as Lang | null;
    if (stored === "no" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
      document.documentElement.lang = stored;
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (
        browserLang.startsWith("nb") ||
        browserLang.startsWith("nn") ||
        browserLang.startsWith("no")
      ) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState("no");
        document.documentElement.lang = "no";
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("portfolio-lang", l);
    document.documentElement.lang = l;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, ready }}>
      {children}
    </LanguageContext.Provider>
  );
}
