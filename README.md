# Portfólio V2 — Lucas Oliveira

Nova versão do portfólio profissional, construída em Astro, Tailwind e ilhas React. Esta pasta é a fonte mestre da V2 e não publica por cima do portfólio atual.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://127.0.0.1:4321/`. O Laboratório fica em `/laboratorio/`; inglês em `/en/` e `/en/lab/`.

## Validar

```bash
npm test
npm run build
npm run test:e2e
node scripts/check-links.mjs dist
```

## Estrutura

- `src/components/home/`: hero, galeria cinética, projetos e contato.
- `src/components/lab/`: demonstrações isoladas de recursos futuros.
- `src/data/`: cases, galeria, conteúdo institucional e features.
- `public-site/`: arquivos otimizados efetivamente publicados pelo Astro.
- `docs/superpowers/`: especificação e plano de implementação.
- `docs/processo-v2/`: registro do processo, decisões e evidências para o futuro case de desenvolvimento.

## Segurança de publicação

- A prévia usa `noindex,nofollow` e bloqueio em `robots.txt`.
- Nenhum formulário envia dados e nenhuma integração externa está ativa.
- O Spotify permanece como placeholder até Lucas escolher a playlist.
- O portfólio atual em `D:\portfolio site git hub online\portfolio ativo online` não é alterado por este projeto.
