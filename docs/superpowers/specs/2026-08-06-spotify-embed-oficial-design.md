# Spotify oficial no Portfólio V2

## Objetivo

Substituir o player local vazio por uma integração funcional e honesta da playlist de Lucas, sem prometer reprodução integral quando o navegador ou o Spotify liberarem apenas prévias.

## Solução aprovada

- usar o embed oficial da playlist `2OfZT7teUPaGjHWRgGqMta`;
- manter o painel flutuante, compacto, responsivo e fechável;
- carregar o iframe com `encrypted-media`, requisito do Spotify para permitir reprodução completa nos navegadores compatíveis;
- iniciar sem autoplay, porque navegadores bloqueiam reprodução automática e o embed não oferece controle confiável de volume inicial;
- manter um link externo `Abrir no Spotify` como fallback;
- remover os controles locais desativados que atualmente sugerem uma reprodução inexistente;
- manter textos equivalentes em português e inglês.

## Comportamento

O painel mostra o título `Playlist do Lucas`, o embed oficial e as ações de abrir no Spotify e fechar. O fechamento permanece salvo durante a sessão. Em telas menores, o painel usa largura segura e não cobre a navegação principal.

## Limites explícitos

O portfólio não armazenará token, Client Secret ou credenciais Spotify. Reprodução integral depende da compatibilidade do navegador, do DRM e das permissões definidas pelo Spotify. O Web Playback SDK não será usado porque exigiria autenticação Premium do visitante e adicionaria uma integração desproporcional ao portfólio.

## Validação

- iframe aponta para a playlist correta;
- atributo `allow` inclui `encrypted-media`;
- não existe autoplay forçado;
- link externo aponta para a playlist oficial;
- painel fecha e permanece fechado durante a sessão;
- layout não causa overflow em desktop ou mobile;
- páginas PT e EN continuam funcionando;
- testes, build e verificação pública passam antes da conclusão.
