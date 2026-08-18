"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

const highlights = [
  {
    title: { pt: "Formação", en: "Education" },
    text: {
      pt: "Engenharia de Software — PUC Minas.",
      en: "Software Engineering — PUC Minas.",
    },
  },
  {
    title: { pt: "Atuação atual", en: "Currently" },
    text: {
      pt: "Estagiário de Microsoft 365 & Infraestrutura.",
      en: "Microsoft 365 & Infrastructure intern.",
    },
  },
  {
    title: { pt: "Interesses", en: "Interests" },
    text: {
      pt: "Desenvolvimento web full-stack, cloud e automação.",
      en: "Full-stack web development, cloud and automation.",
    },
  },
  {
    title: { pt: "Objetivo", en: "Goal" },
    text: {
      pt: "Crescer como desenvolvedor full-stack e atuar com software de impacto.",
      en: "Grow as a full-stack developer and work on impactful software.",
    },
  },
];

// TODO: revisar lista real de skills técnicas de Thiago.
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "SQL",
  "Git",
  "Microsoft 365",
  "Azure",
];

export default function Home() {
  const { locale } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold text-accent">
            {locale === "pt"
              ? "Disponível para novas oportunidades"
              : "Open to new opportunities"}
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Thiago Costa Soares
          </h1>

          <p className="mt-3 text-lg font-medium text-accent-2">
            {locale === "pt"
              ? "Estudante de Engenharia de Software"
              : "Software Engineering Student"}
          </p>

          <div className="mt-6 space-y-4 text-muted">
            <p className="leading-relaxed">
              Estudante de Engenharia de Software na PUC Minas e estagiário
              de Microsoft 365 &amp; Infraestrutura, com interesse em
              desenvolvimento web full-stack e boas práticas de engenharia
              de software.
            </p>
            <p className="leading-relaxed">
              Software Engineering student at PUC Minas and Microsoft 365
              &amp; Infrastructure intern, interested in full-stack web
              development and solid software engineering practices.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projetos"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {locale === "pt" ? "Ver projetos" : "View projects"}
            </Link>
            <Link
              href="/contato"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold transition-colors hover:border-accent-2 hover:text-accent-2"
            >
              {locale === "pt" ? "Entrar em contato" : "Get in touch"}
            </Link>
          </div>
        </div>

        <div className="mx-auto aspect-square w-full max-w-xs rounded-full bg-gradient-to-br from-accent to-accent-2 p-1">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-surface text-sm text-muted">
            {locale === "pt" ? "Foto / avatar" : "Photo / avatar"}
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.title.pt}
            className="rounded-2xl border border-white/10 bg-surface p-6"
          >
            <h2 className="mb-2 text-sm font-bold text-accent-2">
              {locale === "pt" ? item.title.pt : item.title.en}
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              {locale === "pt" ? item.text.pt : item.text.en}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-muted">
          {locale === "pt" ? "Skills técnicas" : "Technical skills"}
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
