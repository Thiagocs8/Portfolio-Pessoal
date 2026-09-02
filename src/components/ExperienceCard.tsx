import type { Experience } from "@/data/experiences";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-surface p-6 sm:flex-row sm:items-center">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-background">
        {experience.organization.charAt(0)}
      </div>

      <div className="flex-1">
        <h3 className="text-base font-bold">{experience.role}</h3>
        <p className="text-sm font-semibold text-accent-2">
          {experience.organizationUrl ? (
            <a
              href={experience.organizationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {experience.organization}
            </a>
          ) : (
            experience.organization
          )}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {experience.description}
        </p>
      </div>

      <span className="w-fit shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
        {experience.period}
      </span>
    </div>
  );
}
