import type { LocalizedText } from "@/data/projects";

export type Experience = {
  role: LocalizedText;
  organization: string;
  organizationUrl?: string;
  period: LocalizedText;
  description: LocalizedText;
};

// Ordem cronológica: da mais recente para a mais antiga.
export const experiences: Experience[] = [
  {
    role: {
      pt: "Estagiário de Microsoft 365 & Infraestrutura",
      en: "Microsoft 365 & Infrastructure Intern",
    },
    organization: "HYTI",
    organizationUrl: "https://hyti.com.br/",
    period: { pt: "Atual", en: "Current" },
    description: {
      pt: "Suporte e administração de ambientes Microsoft 365 e infraestrutura de TI.",
      en: "Support and administration of Microsoft 365 environments and IT infrastructure.",
    },
  },
  {
    role: {
      pt: "Estudante de Engenharia de Software",
      en: "Software Engineering Student",
    },
    organization: "PUC Minas",
    period: { pt: "Em andamento", en: "Ongoing" },
    description: {
      pt: "Formação em Engenharia de Software, com projetos acadêmicos em desenvolvimento web full-stack.",
      en: "Software Engineering degree, with academic projects in full-stack web development.",
    },
  },
];
