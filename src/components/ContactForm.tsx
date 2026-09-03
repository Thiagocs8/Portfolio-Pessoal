"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? t.contactForm.genericError);
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : t.contactForm.genericError,
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-muted">
          {t.contactForm.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-white/10 bg-surface px-4 py-2 text-sm text-foreground outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-muted">
          {t.contactForm.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-white/10 bg-surface px-4 py-2 text-sm text-foreground outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-muted">
          {t.contactForm.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-none rounded-lg border border-white/10 bg-surface px-4 py-2 text-sm text-foreground outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? t.contactForm.sending : t.contactForm.send}
      </button>

      {status === "sent" && (
        <p className="text-sm text-accent-2">{t.contactForm.success}</p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
