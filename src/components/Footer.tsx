"use client";

import { useLanguage } from "@/lib/i18n";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Thiago Costa Soares. {t.footer.rights}
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted transition-colors hover:text-accent-2"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
