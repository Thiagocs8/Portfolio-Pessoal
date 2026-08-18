"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "pt" | "en";

type Dictionary = {
  nav: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  footer: {
    rights: string;
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  pt: {
    nav: {
      about: "Sobre Mim",
      projects: "Projetos",
      experience: "Experiências",
      contact: "Contato",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

type LanguageContextValue = {
  locale: Locale;
  toggleLocale: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en") {
      // Sincroniza com o idioma persistido no localStorage após a hidratação.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale(stored);
    }
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  const value = useMemo(
    () => ({ locale, toggleLocale, t: dictionary[locale] }),
    [locale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
