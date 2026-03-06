import type React from "react";
import { createContext, useCallback, useContext, useState } from "react";

export type Language = "hi" | "en";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "hi",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("app-language");
      if (stored === "en" || stored === "hi") return stored;
    } catch {}
    return "hi";
  });

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next: Language = prev === "hi" ? "en" : "hi";
      try {
        localStorage.setItem("app-language", next);
      } catch {}
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
