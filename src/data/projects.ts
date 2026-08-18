export type Project = {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  image: string | null;
};

// Ordem cronológica: do mais antigo ao mais recente.
// TODO: preencher tecnologias, link do repositório e imagem/GIF reais de cada projeto.
export const projects: Project[] = [
  {
    name: "Gnosi",
    description:
      "Plataforma de cursos EAD gratuita, criada para democratizar o acesso à educação de qualidade.",
    technologies: ["A definir"],
    repoUrl: "#",
    image: null,
  },
  {
    name: "Pett em Casa",
    description:
      "Plataforma web para proprietária de hotel de pets, que profissionaliza os serviços, otimiza a rotina da equipe e facilita o controle das informações dos animais.",
    technologies: ["A definir"],
    repoUrl: "#",
    image: null,
  },
  {
    name: "ClassHub",
    description:
      "Plataforma acadêmica integrada para uma escola, centralizando informações escolares, comunicação entre aluno/professor/coordenação, envio e recebimento de tarefas, notas, materiais didáticos e desempenho acadêmico.",
    technologies: ["A definir"],
    repoUrl: "#",
    image: null,
  },
  {
    name: "Seri.Estúdio",
    description:
      "Plataforma web de gestão de pedidos de serigrafia: o cliente monta a encomenda, envia a arte e visualiza o produto em 3D acompanhando a produção, enquanto o admin controla orçamentos, custos, materiais, estoque e pedidos.",
    technologies: ["A definir"],
    repoUrl: "#",
    image: null,
  },
];
