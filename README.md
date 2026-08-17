# 💼 Portfólio Profissional — Thiago Costa Soares

Website de portfólio profissional desenvolvido para a disciplina **Projeto de Software** (Engenharia de Software — PUC Minas), Laboratório 1 — Segundo Semestre/2026.

## 📌 Sobre o projeto

O objetivo deste site é apresentar minha trajetória, habilidades, projetos acadêmicos e formas de contato de maneira moderna e acessível. O sistema é dividido em 4 seções principais, navegáveis por um menu:

- **Sobre Mim** — apresentação pessoal em português e inglês, com formação, área de atuação, interesses e objetivos profissionais.
- **Projetos** — linha do tempo com os projetos desenvolvidos ao longo da faculdade, do mais antigo ao mais recente.
- **Experiências** — estágios, freelas e participações em projetos open source ou eventos técnicos.
- **Contato** — ícones clicáveis (e-mail, WhatsApp, LinkedIn) e formulário de envio de mensagem.

## 👤 Sobre mim

**Thiago Costa Soares**
Estudante de Engenharia de Software (PUC Minas) e estagiário de Microsoft 365 & Infraestrutura.

## 🎨 Protótipos (Figma)

Os wireframes de média fidelidade das 4 telas foram criados no Figma:

🔗 **[Ver protótipo completo no Figma](https://www.figma.com/design/KksQRuCeHzhGVKkp1Qg1e3)**

| Tela | Preview |
|---|---|
| Sobre Mim | `docs/wireframes/01-sobre-mim.png` |
| Projetos | `docs/wireframes/02-projetos.png` |
| Experiências | `docs/wireframes/03-experiencias.png` |
| Contato | `docs/wireframes/04-contato.png` |

> 📎 As imagens acima devem ser exportadas do Figma (File → Export ou clicar com o botão direito no frame → "Copy/Export") e salvas em `docs/wireframes/` antes do commit.

**Identidade visual definida:** tema dark, paleta roxo (`#8B5CF6`) e ciano (`#21D3E5`) como cores de destaque, tipografia Inter.

## 🛠️ Tecnologias previstas

**Front-end**
- [Next.js](https://nextjs.org/) (React) — framework fullstack com SSR
- [React](https://react.dev/)
- Tailwind CSS (estilização)

**Back-end**
- API Routes do Next.js (ou Node.js/Express, a confirmar) — necessário para o envio de e-mail do formulário de contato

**Hospedagem**
- [Vercel](https://vercel.com/) (front-end + API routes em Next.js)

**Design**
- Figma (wireframes e protótipos)

## 📁 Estrutura inicial do projeto (planejada)

```
portfolio-thiago/
├── public/
│   └── images/              # imagens dos projetos, avatar, etc.
├── src/
│   ├── app/                 # rotas (Next.js App Router)
│   │   ├── page.tsx          # Sobre Mim (home)
│   │   ├── projetos/
│   │   │   └── page.tsx
│   │   ├── experiencias/
│   │   │   └── page.tsx
│   │   ├── contato/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── contato/
│   │           └── route.ts  # endpoint de envio de e-mail
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── ContactForm.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── experiences.ts
│   └── styles/
│       └── globals.css
├── docs/
│   └── wireframes/           # exports dos protótipos do Figma
├── package.json
└── README.md
```

> Estrutura sujeita a ajustes conforme o desenvolvimento avança nas próximas sprints.

## 🗺️ Progresso (Sprints)

- [x] **Lab01S01** — Planejamento e prototipação (repositório, wireframes, protótipo inicial de front-end, navegação e layout base)
- [ ] **Lab01S02** — Implementação das funcionalidades principais (Sobre Mim PT/EN, Projetos com timeline, Experiências, Contato com formulário funcional)
- [ ] **Lab01S03** — Deploy, ajustes finais, imagens/GIFs dos projetos, README final

## 🚧 Status

Projeto em desenvolvimento — instruções de instalação e execução local, dependências completas e link do site publicado serão adicionados ao final do projeto (Lab01S03).
