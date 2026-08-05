# Portfólio light | Lucas Oliveira da Silva

Esta é a fonte publicada do portfólio.

- Pasta local: `D:\portfolio site git hub online\portfolio ativo online`
- Repositório: `https://github.com/oliveiralucas1807/portfolio-lucas-oliveira`
- URL: `https://oliveiralucas1807.github.io/portfolio-lucas-oliveira/`
- Deploy: GitHub Pages pela branch `main`, pasta `/`, sem etapa de build.

Não edite o material arquivado em
`D:\portfolio site git hub online\_arquivo-versoes-antigas` esperando que ele
seja publicado.

## Como rodar localmente

Na pasta do projeto, rode:

```bash
python -m http.server 4173
```

Depois acesse:

```text
http://127.0.0.1:4173
```

Abrir o `index.html` direto no navegador pode bloquear o carregamento de `data/cases.json`.

## Estrutura principal

- `index.html`: estrutura da página.
- `styles.css`: visual, responsivo e impressão/PDF.
- `script.js`: carrega os cases a partir do JSON.
- `i18n.js`: traduz a interface fixa, atualiza metadados e links PT/EN.
- `data/cases.json`: textos e lista de imagens dos cases.
- `assets/cases/`: imagens copiadas para cada mini-case.
- `assets/foto-lucas-desktop-original.png`: hero desktop.
- `assets/foto-lucas-mobile.png`: hero mobile.
- `relatorio-curadoria.md`: resumo da seleção dos clientes e imagens.

A arte mobile contém o nome e o cargo completo `Designer Gráfico Pleno`. O
HTML mantém o mesmo cargo para acessibilidade e conteúdo textual, mas oculta
essa cópia visual no hero mobile para não sobrepor o texto incorporado à arte.

## Como trocar imagens

1. Coloque a nova imagem dentro da pasta do cliente em `assets/cases/nome-do-cliente/`.
2. Abra `data/cases.json`.
3. Troque o caminho no campo `src`.
4. Ajuste `alt`, `campaign` e `modified`, se necessário.

Use caminhos relativos, por exemplo:

```json
"src": "assets/cases/coimbra/nova-imagem.png"
```

## Como alterar textos

Os textos dos cases ficam em `data/cases.json`.

Textos fixos da home, sobre e contato ficam em `index.html`.

As traduções inglesas dos cases ficam em `script.js`; os textos fixos em inglês
ficam em `i18n.js`. Valide sempre os dois idiomas após alterar conteúdo.

Para abrir diretamente a versão inglesa:

```text
https://oliveiralucas1807.github.io/portfolio-lucas-oliveira/?lang=en
```

O e-mail de contato atual é `Oliveira.Lucas1807@gmail.com`.

## Currículo

O botão de currículo aponta para:

```text
https://oliveiralucas1807.github.io/curriculo/
```

O portfólio publicado fica em:

```text
https://oliveiralucas1807.github.io/portfolio-lucas-oliveira/
```

## Publicar no GitHub Pages

1. Faça commit das alterações.
2. Envie para a branch `main`.
3. No GitHub, mantenha `Settings > Pages` como `Deploy from a branch`.
4. Use a branch `main` e a pasta `/`.
5. Aguarde o GitHub Pages atualizar o link público.

Como esta versão não usa Vite nem build, o `index.html` deve ficar na raiz do repositório.

## Validar

O teste reutilizável fica fora deste repositório, em:

```text
D:\portfolio site git hub online\validacao-sites\validar-sites.mjs
```

Consulte
`D:\portfolio site git hub online\validacao-sites\runbook-validacao-sites.md`. O teste
sobe servidores locais temporários, verifica desktop/mobile, links, 120
imagens, console, respostas HTTP e gera screenshots.

O QA bilíngue fica em
`D:\portfolio site git hub online\validacao-sites\validar-i18n-local.mjs`,
documentado em `runbook-i18n-local.md`.

## Arquivo de versões antigas

As pastas `backup-*`, os três assets sem referência e os JSONs modulares antigos
foram retirados da árvore publicada em 2026-07-26. Eles permanecem recuperáveis
no histórico Git e também em:

```text
D:\portfolio site git hub online\_arquivo-versoes-antigas\03-itens-retirados-do-repositorio-ativo
```

## Gerar PDF pelo navegador

Abra o site no navegador e use `Ctrl + P`.

Escolha `Salvar como PDF`. O CSS de impressão já reduz elementos de navegação e preserva a leitura dos cases.
