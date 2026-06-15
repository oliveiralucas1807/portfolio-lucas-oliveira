# Portfólio light | Lucas Oliveira da Silva

Versão HTML/CSS/JS simples do portfólio, pronta para publicação em GitHub Pages.

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
- `data/cases.json`: textos e lista de imagens dos cases.
- `assets/cases/`: imagens copiadas para cada mini-case.
- `assets/foto-lucas-desktop.jpg`: imagem principal do hero em desktop.
- `assets/foto-lucas-mobile.jpg`: imagem principal do hero em mobile.
- `relatorio-curadoria.md`: resumo da seleção dos clientes e imagens.

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
4. Use a branch `main` e a pasta `/root`.
5. Aguarde o GitHub Pages atualizar o link público.

Como esta versão não usa Vite nem build, o `index.html` deve ficar na raiz do repositório.

## Gerar PDF pelo navegador

Abra o site no navegador e use `Ctrl + P`.

Escolha `Salvar como PDF`. O CSS de impressão já reduz elementos de navegação e preserva a leitura dos cases.
