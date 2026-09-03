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
  projectsPage: {
    title: string;
    subtitle: string;
  };
  projectCard: {
    imageAlt: string;
    github: string;
    privateRepo: string;
    noRepo: string;
    noImage: string;
  };
  experiencesPage: {
    title: string;
    subtitle: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
  };
  contactForm: {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    genericError: string;
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
    projectsPage: {
      title: "Projetos",
      subtitle:
        "Do mais recente ao mais antigo, projetos desenvolvidos ao longo da faculdade.",
    },
    projectCard: {
      imageAlt: "Logo do projeto",
      github: "GitHub",
      privateRepo: "Repositório privado",
      noRepo: "Sem repositório",
      noImage: "Imagem / GIF do projeto",
    },
    experiencesPage: {
      title: "Experiências",
      subtitle:
        "Estágios, freelas e participações em projetos open source ou eventos técnicos.",
    },
    contactPage: {
      title: "Contato",
      subtitle:
        "Fico à disposição para conversar sobre oportunidades, projetos ou colaborações.",
    },
    contactForm: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso! Retorno em breve.",
      genericError: "Falha ao enviar a mensagem.",
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
    projectsPage: {
      title: "Projects",
      subtitle:
        "From the most recent to the oldest, projects developed throughout college.",
    },
    projectCard: {
      imageAlt: "Project logo",
      github: "GitHub",
      privateRepo: "Private repository",
      noRepo: "No repository",
      noImage: "Project image / GIF",
    },
    experiencesPage: {
      title: "Experience",
      subtitle:
        "Internships, freelance work, and involvement in open source projects or technical events.",
    },
    contactPage: {
      title: "Contact",
      subtitle:
        "I'm happy to talk about opportunities, projects, or collaborations.",
    },
    contactForm: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      genericError: "Failed to send the message.",
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
