import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-surface p-6">
      {project.image ? (
        <div
          className={`mb-4 flex aspect-video items-center justify-center rounded-xl p-6 ${
            project.imageBg === "dark" ? "bg-background" : "bg-white"
          }`}
        >
          <Image
            src={project.image}
            alt={`Logo do projeto ${project.name}`}
            width={320}
            height={180}
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <div className="mb-4 flex aspect-video items-center justify-center rounded-xl border border-dashed border-white/15 bg-background text-sm text-muted">
          Imagem / GIF do projeto
        </div>
      )}

      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold">{project.name}</h3>
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent-2/40 px-3 py-1 text-xs font-semibold text-accent-2 transition-colors hover:bg-accent-2/10"
          >
            GitHub
          </a>
        ) : (
          <span
            className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-muted"
            title="Projeto acadêmico em repositório privado"
          >
            {project.isPrivate ? "Repositório privado" : "Sem repositório"}
          </span>
        )}
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
