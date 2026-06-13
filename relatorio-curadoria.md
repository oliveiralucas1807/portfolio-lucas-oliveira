# Relatório de curadoria

Data de referência: junho de 2026.

Critério inicial de recência: imagens criadas ou modificadas a partir de 01/03/2026. Para Natura, houve exceção controlada para dezembro de 2025 a fevereiro de 2026, por haver campanhas relevantes criadas nesse período.

Diretórios analisados:

- `F:\SERV INSPIRA`
- `E:\SERV TEAGÁ`

Arquivos considerados: `.jpg`, `.jpeg`, `.png` e `.webp`. Vídeos foram ignorados nesta versão.

## Critérios usados

- Prioridade para artes finais, feeds, capas, CTAs e peças de campanha.
- Remoção de fotos cruas, fotos editadas sem layout, arquivos de site, mídia, funcionamento, bases, assets soltos, thumbnails e sobras de exportação.
- Redução de variações repetidas da mesma arte, principalmente quando mudava apenas estado, data, telefone ou formato feed/story.
- Para carrosséis, preferência por capa, `feed`, `feed 1` ou peça principal.
- Limite de 20 imagens por case.

## Clientes encontrados

| Diretório | Cliente | Subpastas | Imagens recentes | Imagens válidas recentes | Campanhas/pastas | Status |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| SERV TEAGÁ | 001_CONTRATO-NFSe | 18 | 0 | 0 | 0 | Descartado: pouco material recente válido |
| SERV TEAGÁ | Arkia | 0 | 0 | 0 | 0 | Descartado: pouco material recente válido |
| SERV TEAGÁ | Dr. Cezar Brandão | 12 | 26 | 26 | 5 | Descartado: volume/variedade abaixo dos selecionados |
| SERV TEAGÁ | LA PIZZA | 56 | 102 | 99 | 27 | Selecionado |
| SERV TEAGÁ | LOGOS EMPRESSAS | 0 | 1 | 1 | 1 | Descartado: pouco material recente válido |
| SERV TEAGÁ | NATURA | 41 | 207 | 200 | 23 | Selecionado |
| SERV TEAGÁ | NATURA PARÁ | 8 | 11 | 11 | 5 | Descartado: volume/variedade abaixo dos selecionados |
| SERV TEAGÁ | NEW | 88 | 36 | 34 | 20 | Descartado: volume/variedade abaixo dos selecionados |
| SERV TEAGÁ | ODONTO EXCELENCE | 0 | 0 | 0 | 0 | Descartado: pouco material recente válido |
| SERV TEAGÁ | ODONTO EXECELENTE | 1 | 9 | 9 | 2 | Descartado: volume/variedade abaixo dos selecionados |
| SERV TEAGÁ | Ossuosky Advogados | 2 | 15 | 13 | 3 | Descartado: volume/variedade abaixo dos selecionados |
| SERV TEAGÁ | São Domingos | 29 | 109 | 100 | 18 | Descartado: volume/variedade abaixo dos selecionados |
| SERV TEAGÁ | TACOLIBRE | 92 | 232 | 229 | 29 | Selecionado |
| SERV TEAGÁ | VENTO DO NORTE | 0 | 1 | 1 | 1 | Descartado: pouco material recente válido |
| SERV INSPIRA | 00_CONTRATO - INSPIRA | 28 | 0 | 0 | 0 | Descartado: pouco material recente válido |
| SERV INSPIRA | AMAZONEA TRAVEL | 1 | 11 | 11 | 2 | Descartado: volume/variedade abaixo dos selecionados |
| SERV INSPIRA | COIMBRA | 238 | 520 | 484 | 74 | Selecionado |
| SERV INSPIRA | COVEN | 44 | 34 | 31 | 9 | Descartado: volume/variedade abaixo dos selecionados |
| SERV INSPIRA | CULTURA INGLESA | 30 | 144 | 125 | 30 | Selecionado |
| SERV INSPIRA | ECOFORTE | 45 | 54 | 53 | 23 | Descartado: volume/variedade abaixo dos selecionados |
| SERV INSPIRA | INSPIRA | 0 | 1 | 1 | 1 | Descartado: pouco material recente válido |
| SERV INSPIRA | ÓTICA MURANO | 88 | 146 | 140 | 19 | Selecionado |
| SERV INSPIRA | SOU MILHAS | 20 | 58 | 57 | 16 | Descartado: volume/variedade abaixo dos selecionados |
| SERV INSPIRA | SUSHI SAKAI | 47 | 43 | 33 | 15 | Descartado: volume/variedade abaixo dos selecionados |
| SERV INSPIRA | TACACA TIA SOCORRO | 95 | 45 | 45 | 17 | Descartado: volume/variedade abaixo dos selecionados |
| SERV INSPIRA | TROCADOS | 44 | 28 | 28 | 25 | Descartado: volume/variedade abaixo dos selecionados |

## Clientes selecionados

| Cliente | Imagens usadas | Origem | Pasta no projeto |
| --- | ---: | --- | --- |
| Coimbra | 20 | `F:\SERV INSPIRA\COIMBRA` | `assets/cases/coimbra/` |
| Taco Libre | 20 | `E:\SERV TEAGÁ\TACOLIBRE` | `assets/cases/tacolibre/` |
| Natura | 20 | `E:\SERV TEAGÁ\NATURA` | `assets/cases/natura/` |
| Cultura Inglesa | 20 | `F:\SERV INSPIRA\CULTURA INGLESA` | `assets/cases/cultura-inglesa/` |
| Ótica Murano | 20 | `F:\SERV INSPIRA\ÓTICA MURANO` | `assets/cases/otica-murano/` |
| La Pizza | 20 | `E:\SERV TEAGÁ\LA PIZZA` | `assets/cases/la-pizza/` |

## Ajustes aplicados nesta revisão

- Coimbra: removidas imagens de site e mídia; seleção focada em feeds, CTAs e produtos/campanhas diferentes.
- Taco Libre: removidas fotos/fotos editadas; seleção focada em artes de campanha e sem pares feed/story repetidos.
- Natura: removidos 600ppi, base, funcionamento, pré-pronto e assets; incluídas campanhas de Semana do Consumidor, Carnaval, Dia das Mães, revista e Dia dos Namorados.
- Cultura Inglesa: removidos vídeos, assets soltos e materiais auxiliares; mantidas capas/feeds principais de campanhas variadas.
- Ótica Murano: mantidas as duas primeiras imagens anteriores e incluídas três peças da pasta Diabo veste Prada/Prato, além de outras campanhas.
- La Pizza: removidos materiais de site e funcionamento; seleção focada em feeds, combos, datas e campanhas promocionais.

## Observações por case

### Coimbra

- Imagens usadas: 20.
- Campanhas/pastas representadas na seleção: 16.
- Pasta de destino: `assets/cases/coimbra/`.
- Período aproximado dos arquivos selecionados: 2026-03-09 a 2026-06-04.

### Taco Libre

- Imagens usadas: 20.
- Campanhas/pastas representadas na seleção: 20.
- Pasta de destino: `assets/cases/tacolibre/`.
- Período aproximado dos arquivos selecionados: 2026-03-02 a 2026-06-12.

### Natura

- Imagens usadas: 20.
- Campanhas/pastas representadas na seleção: 8.
- Pasta de destino: `assets/cases/natura/`.
- Período aproximado dos arquivos selecionados: 2025-12-20 a 2026-06-03.

### Cultura Inglesa

- Imagens usadas: 20.
- Campanhas/pastas representadas na seleção: 20.
- Pasta de destino: `assets/cases/cultura-inglesa/`.
- Período aproximado dos arquivos selecionados: 2026-03-03 a 2026-05-28.

### Ótica Murano

- Imagens usadas: 20.
- Campanhas/pastas representadas na seleção: 15.
- Pasta de destino: `assets/cases/otica-murano/`.
- Período aproximado dos arquivos selecionados: 2026-03-06 a 2026-06-10.

### La Pizza

- Imagens usadas: 20.
- Campanhas/pastas representadas na seleção: 19.
- Pasta de destino: `assets/cases/la-pizza/`.
- Período aproximado dos arquivos selecionados: 2026-03-02 a 2026-06-12.

## Resultado

Foram mantidos 6 mini-cases, com 20 imagens otimizadas por cliente. As legendas visuais das imagens foram removidas da galeria. Os arquivos originais nos diretórios de origem não foram alterados.

Backup criado antes das alterações: `D:\portfolio-coimbra\backup-before-light-20260612-041912`.

