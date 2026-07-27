# Checklist para iniciar a implementação

## Antes de editar

- [ ] Confirmar crédito/tempo disponível para implementação e QA.
- [ ] Ler `AGENTS.md`.
- [ ] Confirmar que o trabalho está nesta pasta, não no portfólio ativo.
- [ ] Executar `git status`.
- [ ] Confirmar ausência de remote.
- [ ] Ler a estrutura, o plano e os limites V2/cases.
- [ ] Rodar a V1 localmente e capturar baseline.

## Decisões que Lucas precisa aprovar

- [ ] Astro + Tailwind ou evolução do HTML/CSS/JS atual.
- [ ] Tipografia.
- [ ] Paleta final.
- [ ] Ordem dos seis projetos.
- [ ] Manter ou retirar WhatsApp público.
- [ ] Presença do Spotify.
- [ ] Uma faixa horizontal e quais imagens entram nela.
- [ ] Estrutura do mini-case.
- [ ] Estratégia de publicação da V2.

## Protótipo obrigatório

- [ ] Topbar.
- [ ] Hero.
- [ ] Um card.
- [ ] Um mini-case.
- [ ] Uma pequena faixa de imagens.
- [ ] Desktop.
- [ ] Mobile.
- [ ] Teclado.
- [ ] `prefers-reduced-motion`.

## Antes de publicar

- [ ] Build limpo.
- [ ] Nenhum erro de console.
- [ ] Todos os links verificados.
- [ ] Todas as imagens respondendo.
- [ ] Currículo HTML e PDF válidos.
- [ ] SEO e Open Graph.
- [ ] Lighthouse.
- [ ] Screenshots antes/depois.
- [ ] Backup final.
- [ ] Aprovação explícita de Lucas.

## Comandos seguros de retomada

```powershell
Set-Location 'D:\portfolio site git hub online\portfolio-v2-lucas-oliveira'
git status --short --branch
git remote -v
python -m http.server 4175 --bind 127.0.0.1
```

Nesta fase estática, abra `http://127.0.0.1:4175/`.

