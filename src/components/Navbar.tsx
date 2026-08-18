"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n";

const links = [
  { href: "/", key: "about" as const },
  { href: "/projetos", key: "projects" as const },
  { href: "/experiencias", key: "experience" as const },
  { href: "/contato", key: "contact" as const },
];

export default function Navbar() {
  const pathname = usePathname();
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Thiago Costa Soares
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "text-accent-2"
                      : "text-muted transition-colors hover:text-foreground"
                  }
                >
                  {t.nav[link.key]}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={toggleLocale}
          className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-muted transition-colors hover:border-accent-2 hover:text-foreground"
          aria-label="Alternar idioma / Toggle language"
        >
          {locale === "pt" ? "PT / en" : "pt / EN"}
        </button>
      </nav>

      <ul className="flex items-center justify-center gap-6 border-t border-white/5 pb-3 pt-2 text-xs font-medium md:hidden">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive ? "text-accent-2" : "text-muted"}
              >
                {t.nav[link.key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
