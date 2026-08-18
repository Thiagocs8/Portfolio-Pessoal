export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

// Ordem cronológica: da mais recente para a mais antiga.
// TODO: revisar e completar com as experiências reais de Thiago.
export const experiences: Experience[] = [
  {
    role: "Estagiário de Microsoft 365 & Infraestrutura",
    organization: "A definir",
    period: "Atual",
    description:
      "Suporte e administração de ambientes Microsoft 365 e infraestrutura de TI.",
  },
  {
    role: "Estudante de Engenharia de Software",
    organization: "PUC Minas",
    period: "Em andamento",
    description:
      "Formação em Engenharia de Software, com projetos acadêmicos em desenvolvimento web full-stack.",
  },
];
