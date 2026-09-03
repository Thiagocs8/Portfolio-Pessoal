"use client";

import ContactForm from "@/components/ContactForm";
import { socialLinks, whatsappLink } from "@/data/socialLinks";
import { useLanguage } from "@/lib/i18n";

const contactLinks = [socialLinks[2], whatsappLink, socialLinks[1], socialLinks[0]];

export default function ContatoPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-extrabold tracking-tight">
        {t.contactPage.title}
      </h1>
      <p className="mt-2 text-muted">{t.contactPage.subtitle}</p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface p-4 transition-colors hover:border-accent/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                {link.icon}
              </span>
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
