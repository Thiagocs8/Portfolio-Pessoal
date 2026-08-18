import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";

export default function ExperienciasPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">Experiências</h1>
      <p className="mt-2 text-muted">
        Estágios, freelas e participações em projetos open source ou eventos
        técnicos.
      </p>

      <div className="mt-12 space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.role} experience={experience} />
        ))}
      </div>
    </div>
  );
}
