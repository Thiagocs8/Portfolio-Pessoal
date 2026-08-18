"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Envio funcional por e-mail será implementado na Lab01S02.
    setStatus("sent");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-muted">
          Nome
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
          E-mail
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
          Mensagem
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
        className="mt-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Enviar mensagem
      </button>

      {status === "sent" && (
        <p className="text-sm text-accent-2">
          Formulário validado! O envio funcional por e-mail chega na próxima
          sprint (Lab01S02).
        </p>
      )}
    </form>
  );
}
