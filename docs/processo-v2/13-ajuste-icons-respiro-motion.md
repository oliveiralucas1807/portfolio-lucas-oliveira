# Ajuste de ícones, respiro e movimento

Data: 06 de agosto de 2026

## Alterações

- Removida a frase de apoio do bloco `MAIS CASES EM BREVE`.
- E-mail e WhatsApp foram padronizados a partir dos SVGs fornecidos por Lucas em `email_3631344.svg` e `whatsapp_2111774.svg`.
- Os paths foram incorporados ao componente compartilhado e ao modal React, usando `currentColor` para responder aos temas.
- O acesso `O QUE HÁ DE NOVO` recebeu o parallax magnético dos controles interativos.
- O padding superior da faixa cinética passou de `clamp(8rem, 11vw, 11rem)` para `clamp(5.2rem, 7.2vw, 7.2rem)`.
- No mobile, o padding superior passou de `5.5rem` para `3.65rem`.
- A rotação das faixas permaneceu em `-3deg`.

## Resultado visual

O carrossel começa mais perto do recorte inferior do hero, reduzindo a área cinza vazia sem encostar nas ações do banner. A mesma aproximação foi aplicada no mobile sem overflow horizontal.

## Validação

- 10 testes unitários aprovados.
- 16 testes Playwright aprovados em desktop e mobile.
- Teste específico confirma alteração real de `--motion-x` no botão do blog ao mover o cursor.
- Modal e player expõem estado explícito de hidratação antes dos testes de interação, eliminando cliques prematuros.
- Build Astro gerou 4 páginas, sem erros ou avisos.
- Capturas desktop, mobile e modal revisadas visualmente e atualizadas em WebP.
