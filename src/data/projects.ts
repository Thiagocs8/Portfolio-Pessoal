export type LocalizedText = {
  pt: string;
  en: string;
};

export type Project = {
  name: string;
  description: LocalizedText;
  technologies: string[];
  repoUrl: string | null;
  isPrivate?: boolean;
  image: string | null;
  imageBg?: "white" | "dark";
};

// Ordem: do mais recente ao mais antigo.
// Os projetos sem repoUrl são trabalhos acadêmicos em repositórios privados do GitHub Classroom.
export const projects: Project[] = [
  {
    name: "Seri.Estúdio",
    description: {
      pt: "Plataforma web de gestão de pedidos de serigrafia: o cliente monta a encomenda, envia a arte e visualiza o produto em 3D acompanhando a produção, enquanto o admin controla orçamentos, custos, materiais, estoque e pedidos.",
      en: "Web platform for managing screen-printing orders: the customer builds the order, submits the artwork, and views the product in 3D while tracking production, while the admin manages quotes, costs, materials, stock, and orders.",
    },
    technologies: [
      "TypeScript",
      "JavaScript",
      "Java",
      "Spring Boot",
      "Node.js",
      "PostgreSQL",
      "CSS",
    ],
    repoUrl: "https://github.com/Henriquelobo5/Seri-estudio",
    image: "/images/seri-estudio-logo.jpg",
    imageBg: "white",
  },
  {
    name: "ClassHub",
    description: {
      pt: "Plataforma acadêmica integrada para uma escola, centralizando informações escolares, comunicação entre aluno/professor/coordenação, envio e recebimento de tarefas, notas, materiais didáticos e desempenho acadêmico.",
      en: "Integrated academic platform for a school, centralizing school information, communication between student/teacher/coordination, assignment submission and grading, grades, learning materials, and academic performance.",
    },
    technologies: ["JavaScript", "Java", "Spring Boot", "Node.js", "PostgreSQL"],
    repoUrl: null,
    isPrivate: true,
    image: "/images/classhub-logo.png",
    imageBg: "dark",
  },
  {
    name: "Gnosi",
    description: {
      pt: "Plataforma de cursos EAD gratuita, criada para democratizar o acesso à educação de qualidade.",
      en: "Free online course platform, created to democratize access to quality education.",
    },
    technologies: [
      "TypeScript",
      "JavaScript",
      "Java",
      "Spring Boot",
      "Node.js",
      "PostgreSQL",
      "CSS",
    ],
    repoUrl: null,
    isPrivate: true,
    image: "/images/gnosi-logo.png",
    imageBg: "white",
  },
];
