"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export default function ProjetosPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">
        {t.projectsPage.title}
      </h1>
      <p className="mt-2 text-muted">{t.projectsPage.subtitle}</p>

      <ol className="relative mt-12 space-y-12 border-l border-white/10 pl-8">
        {projects.map((project) => (
          <li key={project.name} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-2 h-3 w-3 rounded-full bg-accent-2" />
            <ProjectCard project={project} />
          </li>
        ))}
      </ol>
    </div>
  );
}
