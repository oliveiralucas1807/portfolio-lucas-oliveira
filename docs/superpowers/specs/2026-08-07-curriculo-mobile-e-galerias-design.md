# Currículo mobile e galerias dos cases

## Objetivo

Corrigir a deformação da fotografia no Currículo Online em telas móveis e remover das galerias expandidas dos cases toda arte que já esteja entre as três imagens de destaque do mesmo projeto.

## Escopo

### Currículo Online

- Preservar o conteúdo e o desenho atual do currículo.
- Impedir que o quadro da fotografia encolha horizontalmente no layout móvel.
- Manter a proporção original do quadro e um enquadramento adequado do rosto.
- Não alterar o currículo desktop sem necessidade.

### Portfólio V2

- Auditar os seis cases: Coimbra, Taco Libre, Natura, Cultura Inglesa, Ótica Murano e La Pizza.
- Preservar, sem alterações, as três imagens de destaque de cada case.
- Comparar cada destaque com todas as imagens exibidas em “Explorar projeto”.
- Detectar tanto o mesmo arquivo quanto duplicações visuais exportadas com outro nome, tamanho ou recorte.
- Substituir cada repetição por uma arte diferente do mesmo cliente.
- Manter exatamente a quantidade atual de imagens de cada galeria.
- Evitar substituir uma duplicação por outra peça da mesma campanha que seja visualmente quase idêntica quando houver alternativa melhor.

## Implementação proposta

### Fotografia do currículo

No breakpoint móvel, o quadro da foto terá largura e altura explícitas, proporção fixa e impedimento de encolhimento no contêiner flexível. A imagem continuará preenchendo o quadro, com posição ajustada somente se a inspeção visual demonstrar necessidade.

### Curadoria das galerias

Para cada case, será criado um inventário com:

1. as três imagens de destaque;
2. as imagens atuais da galeria expandida;
3. as correspondências exatas ou visuais entre os dois conjuntos;
4. as peças substitutas selecionadas nas pastas do próprio cliente.

As substituições serão registradas nos dados do case. A lógica de montagem também deverá excluir, por identidade de arquivo, qualquer destaque da galeria, evitando regressões futuras.

## Validação

- Currículo testado em largura equivalente ao Samsung S24 FE e em uma largura móvel menor.
- Foto sem compressão, distorção ou corte excessivo.
- Três destaques de cada case inalterados.
- Nenhum destaque repetido no respectivo grid expandido.
- Quantidade de imagens de cada grid idêntica à anterior.
- Arquivos substitutos pertencentes ao cliente correto e visualmente distintos.
- Build e testes automatizados aprovados antes da publicação.
- Versão publicada conferida no endereço real, em desktop e mobile.

## Fora do escopo

- Alterar as capas ou a ordem dos três destaques.
- Redesenhar o currículo.
- Mudar a estrutura, o número de colunas ou a quantidade de imagens das galerias.
- Misturar peças de clientes diferentes.
