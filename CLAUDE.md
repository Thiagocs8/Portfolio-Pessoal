# CLAUDE.md — Contexto do Projeto

Este arquivo dá contexto ao Claude Code sobre o projeto. Leia antes de sugerir ou implementar qualquer coisa.

## Sobre o projeto

Website de portfólio profissional de **Thiago Costa Soares**, para a disciplina **Projeto de Software** (Engenharia de Software — PUC Minas), Laboratório 1 — Segundo Semestre/2026. Avaliado em 3 sprints (Lab01S01, Lab01S02, Lab01S03).

**Sobre o autor:** Thiago Costa Soares, estudante de Engenharia de Software, estagiário de Microsoft 365 & Infraestrutura na HYTI (hyti.com.br).

## Requisitos do sistema (do enunciado do laboratório)

4 seções acessadas por um menu de navegação:

1. **Sobre Mim** — apresentação em português E inglês (bilíngue), formação, área de atuação, interesses, objetivos profissionais.
2. **Projetos** — timeline com nome, descrição, tecnologias, link do repositório GitHub (quando público) e imagem/logo do projeto.
3. **Experiências** — estágios, freelas, open source, eventos técnicos. Cada item: empresa/instituição, cargo/atividade, período, descrição breve.
4. **Contato** — ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub) + formulário (nome, e-mail, mensagem) com envio funcional por e-mail.

Requisitos gerais: design responsivo, interface amigável, identidade visual coerente, hospedagem gratuita na nuvem (Vercel), README completo no GitHub.

## Meus 3 projetos (seção Projetos, ordem: do mais recente ao mais antigo)

1. **Seri.Estúdio** — plataforma web de gestão de pedidos de serigrafia; cliente monta encomenda, envia arte, visualiza produto em 3D, acompanha produção; admin controla orçamentos, custos, materiais, estoque e pedidos. Repositório **público**: https://github.com/Henriquelobo5/Seri-estudio (repo de um colega de equipe).
2. **ClassHub** — plataforma acadêmica integrada para uma escola; centraliza informações escolares, comunicação aluno/professor/coordenação, envio/recebimento de tarefas, notas, materiais didáticos, desempenho acadêmico. Repositório privado (GitHub Classroom).
3. **Gnosi** — plataforma de cursos EAD gratuita, para democratizar o acesso à educação de qualidade. Repositório privado (GitHub Classroom).

> "Pett em Casa" foi removido da lista a pedido do Thiago (02/09/2026).

Tecnologias comuns aos 4 projetos: TypeScript, JavaScript, Java, Spring Boot, Node.js, PostgreSQL, CSS (Seri.Estúdio e ClassHub usam um subconjunto — ver `src/data/projects.ts`).

> Gnosi e ClassHub são trabalhos acadêmicos em repositórios **privados** do GitHub Classroom — não podem ser publicados sem autorização do professor (regra comum para evitar cópia por turmas futuras). O site mostra um badge "Repositório privado" no lugar do link nesses casos.

## Identidade visual (definida)

- **Tema:** dark mode
- **Cor de fundo:** `#121216` (charcoal escuro)
- **Superfície/cards:** `#1D1D23`
- **Cor de destaque 1 (accent):** `#8B5CF6` (roxo/violeta)
- **Cor de destaque 2 (accent2):** `#21D3E5` (ciano)
- **Texto primário:** quase branco `#F5F5FA`
- **Texto secundário/muted:** cinza `#9E9EAD`
- **Tipografia:** Inter (Regular, Medium, Semi Bold, Bold, Extra Bold)
- **Estilo geral:** criativo, moderno, visualmente bonito — não minimalista genérico

## Wireframes (Figma)

Wireframes de média fidelidade das 4 telas:
🔗 https://www.figma.com/design/KksQRuCeHzhGVKkp1Qg1e3

Exportados como PNG e versionados em `public/images/` (Sobre mim.png, Projetos.png, Experiência.png, Contato.png), linkados na tabela de preview do README.

Estrutura visual de cada tela (já implementada em código):
- **Navbar** fixa: nome à esquerda, links de navegação ao centro (link ativo em ciano), toggle PT/EN à direita.
- **Footer**: copyright à esquerda, ícones sociais (GitHub, LinkedIn, E-mail) à direita.
- **Sobre Mim**: hero (badge de disponibilidade, nome grande, subtítulo, bio PT + bio EN, 2 CTAs, avatar real com gradiente roxo→ciano) + seção de 4 cards (Formação, Atuação atual, Interesses, Objetivo) + chips de skills técnicas.
- **Projetos**: timeline vertical (linha + dot conectando os itens) com os 4 cards de projeto — cada um com imagem/logo, nome, badge de link do GitHub (ou "Repositório privado"), descrição, chips de tecnologias.
- **Experiências**: lista vertical de cards horizontais — ícone/inicial, cargo, empresa (destacado em ciano, clicável quando há site), descrição, badge de período à direita.
- **Contato**: layout 2 colunas — painel esquerdo com lista de links clicáveis (e-mail, WhatsApp, LinkedIn, GitHub, cada um com ícone circular roxo), painel direito com formulário (nome, e-mail, mensagem, botão "Enviar mensagem" em roxo) com envio real por e-mail.

## Stack técnica

- **Front-end:** Next.js (App Router) + React + Tailwind CSS
- **Back-end:** API Route do Next.js (`src/app/api/contato/route.ts`) + [Resend](https://resend.com/) para envio de e-mail do formulário de contato — chega em `thiag0cs@outlook.com`
- **Hospedagem:** Vercel (ainda não deployado)
- **Design:** Figma

### Envio de e-mail (Resend) — configuração local

1. Conta Resend criada com o e-mail `thiag0cs@outlook.com` (sender de teste `onboarding@resend.dev` só entrega pro e-mail da própria conta enquanto não há domínio verificado — por isso a conta precisa ser esse e-mail).
2. Variável de ambiente `RESEND_API_KEY` — copiar `.env.local.example` para `.env.local` e colar a key.
3. Em produção (Vercel), a mesma variável precisa ser adicionada em Project Settings → Environment Variables.

## Estrutura de pastas

```
portfolio-thiago/
├── public/
│   └── images/                       # avatar, logos dos projetos, wireframes exportados
├── src/
│   ├── app/
│   │   ├── page.tsx                  # Sobre Mim (home)
│   │   ├── projetos/page.tsx
│   │   ├── experiencias/page.tsx
│   │   ├── contato/page.tsx
│   │   └── api/contato/route.ts      # endpoint de envio de e-mail (Resend)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   └── ContactForm.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── experiences.ts
│   │   └── socialLinks.tsx
│   └── lib/
│       └── i18n.tsx                  # contexto de idioma PT/EN
├── package.json
└── README.md
```

## Progresso das sprints

- [x] **Lab01S01** (4 pts) — Repositório GitHub, README inicial, wireframes de média fidelidade no Figma, protótipo inicial de front-end (navegação + layout base em código).
- [x] **Lab01S02** (4 pts) — Sobre Mim (PT/EN), Projetos (timeline dinâmica), Experiências, Contato com formulário funcional (Resend), responsividade.
- [ ] **Lab01S03** (7 pts) — Deploy (Vercel), ajustes visuais/usabilidade, README final completo.

## Convenções de código

- Componentes em PascalCase, um componente por arquivo.
- Conteúdo bilíngue (PT/EN) via `src/lib/i18n.tsx` (contexto simples com toggle persistido em localStorage), não uma lib de i18n completa.
- Seguir a paleta e tokens de cor acima — não inventar novas cores sem necessidade.
- `next.config.ts` tem `agentRules: false` — **não remova essa linha**. Sem ela, `next dev`/`next build` sobrescrevem este arquivo com um stub `@AGENTS.md` (já aconteceu uma vez e apagou todo o conteúdo).
- Cada membro do grupo tem conteúdo e repositório individuais; a estrutura de layout/componentes pode ser reaproveitada entre colegas, mas o conteúdo (projetos, experiências, textos) é pessoal do Thiago.
