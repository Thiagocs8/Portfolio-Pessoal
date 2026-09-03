"use client";

import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";
import { useLanguage } from "@/lib/i18n";

export default function ExperienciasPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">
        {t.experiencesPage.title}
      </h1>
      <p className="mt-2 text-muted">{t.experiencesPage.subtitle}</p>

      <div className="mt-12 space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.organization} experience={experience} />
        ))}
      </div>
    </div>
  );
}
