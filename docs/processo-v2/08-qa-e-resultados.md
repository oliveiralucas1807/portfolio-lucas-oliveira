# QA e resultados locais

## Escopo validado

- Home em português e inglês.
- Laboratório em português e inglês.
- Seis projetos na ordem original.
- Card “Mais cases em breve”.
- Duas faixas animadas em sentidos opostos.
- Tema claro/escuro persistente.
- Cursor personalizado com fallback.
- Formulários de demonstração sem envio de dados.
- Ausência das frases “Cases selecionados” e “Portfólio Light para processos seletivos”.

## Evidências

- `npm test`: seis arquivos de teste aprovados.
- `npm run build`: Astro Check sem erros, avisos ou hints; quatro páginas HTML e `robots.txt` gerados.
- `npm run test:e2e`: oito cenários aprovados em Chromium desktop e mobile.
- Rolagem horizontal global: ausente após limitar a máscara da galeria.
- Screenshots: `docs/processo-v2/screenshots/`.

Os números finais devem ser atualizados após a última execução integral. Nenhum Lighthouse foi registrado nesta etapa; não há pontuação estimada.
