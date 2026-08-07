# Auditoria das galerias dos cases — 7 de agosto de 2026

## Regra aplicada

As três imagens de destaque permanecem inalteradas. Toda ocorrência dessas imagens dentro de “Explorar projeto” foi retirada e substituída por uma peça diferente do mesmo cliente. Cada galeria continua com 19 imagens.

## Substituições

| Case | Destaque retirado do grid | Substituição | Origem |
| --- | --- | --- | --- |
| Coimbra | Dia do Trabalhador | Festival do Marceneiro | `F:\SERV INSPIRA\COIMBRA\09 FESTIVAL DO MARCENEIRO\FEED_FDM MARÇO.png` |
| Coimbra | Esmerilhadeira Makita | Campanha Bosch | `F:\SERV INSPIRA\COIMBRA\08 CAMP BOSCH\01camp bosch.png` |
| Taco Libre | Álbum da Copa | Yo soy Taco Crispy | `E:\SERV TEAGÁ\TACOLIBRE\58 Desconstrução\1yo soy.png` |
| Taco Libre | Promoção do álbum | Passe no vestibular | `E:\SERV TEAGÁ\TACOLIBRE\51 INCENTIVO\FEED 1mensagem.png` |
| Natura | Semana do Consumidor | Nova loja Shopping Cidade Manoa | `E:\SERV TEAGÁ\NATURA\cta\feedcta.png` |
| Natura | Dia das Mães | Dia do Trabalhador | `E:\SERV TEAGÁ\NATURA\Dia do trabalhador\Feed0105.png` |
| Cultura Inglesa | Feliz Páscoa | Três séries para aprender inglês | `F:\SERV INSPIRA\CULTURA INGLESA\7 series\Feed_3 series.png` |
| Cultura Inglesa | Dica de inglês | Conheça nossas escolas | `F:\SERV INSPIRA\CULTURA INGLESA\CONHEÇA NOSSAS LOJAS\FeedConheça.png` |
| Ótica Murano | Feliz Dia dos Namorados | Carnaval Balai da Sorte | `F:\SERV INSPIRA\ÓTICA MURANO\01 CAMP DE CARNAVAL\Feedcarnaval mur.png` |
| La Pizza | Peça sua favorita com 50% OFF | Primeira compra com 15% OFF | `E:\SERV TEAGÁ\LA PIZZA\LÁ PIZZA\29 15 OFF\1.png` |
| La Pizza | Dia dos Namorados | Aniversário Nonato Caldeira | `E:\SERV TEAGÁ\LA PIZZA\LÁ PIZZA\33 aniversario notato\12004.png` |

## Proteção contra regressão

`src/data/cases.ts` agora monta todas as galerias usando um conjunto com os caminhos dos três destaques. Uma imagem cujo caminho esteja nesse conjunto não pode entrar no grid. O teste de conteúdo percorre os seis cases e valida ausência de destaques, caminhos únicos e 19 imagens por galeria.
